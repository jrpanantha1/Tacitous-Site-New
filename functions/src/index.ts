import { initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { logger } from 'firebase-functions';
import { defineSecret } from 'firebase-functions/params';
import { onRequest } from 'firebase-functions/v2/https';
import { createHash } from 'node:crypto';
import nodemailer from 'nodemailer';

initializeApp();
const db = getFirestore();

// Enquiries are emailed directly over SMTP. The connection URL, including the mailbox password, is kept in
// Secret Manager as SMTP_URL, for example smtps://collaboration%40tacitous.com:PASSWORD@mail.example.com:465
const SMTP_URL = defineSecret('SMTP_URL');
const NOTIFY_TO = process.env.CONTACT_NOTIFY_TO || 'info@tacitous.com';

// Mail servers usually only accept mail sent from the mailbox that signs in, so that is the default sender.
function mailFrom(smtpUrl: string) {
  if (process.env.CONTACT_MAIL_FROM) return process.env.CONTACT_MAIL_FROM;
  let user = '';
  try { user = decodeURIComponent(new URL(smtpUrl).username); } catch { /* fall back below */ }
  return `Tacitous website <${user.includes('@') ? user : NOTIFY_TO}>`;
}
const MAX_PER_HOUR = 5;

type Enquiry = { name: string; email: string; organisation: string; interest: string; message: string; page: string };

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const contact = onRequest({ region: 'europe-west2', cors: false, maxInstances: 5, secrets: [SMTP_URL] }, async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot: real visitors never see this field. Pretend success so bots learn nothing.
  if (clean(body.website, 200)) {
    res.json({ ok: true });
    return;
  }

  const enquiry: Enquiry = {
    name: clean(body.name, 120),
    email: clean(body.email, 200).toLowerCase(),
    organisation: clean(body.organisation, 160),
    interest: clean(body.interest, 80),
    message: clean(body.message, 4000),
    page: clean(body.page, 200),
  };

  if (!enquiry.name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(enquiry.email)) {
    res.status(400).json({ error: 'Please enter your name and a valid email address.' });
    return;
  }
  if (body.consent !== 'yes') {
    res.status(400).json({ error: 'Please agree to be contacted about your enquiry.' });
    return;
  }

  // Simple per-IP rate limit, stored as a hashed key so raw IPs are never kept.
  const ipKey = createHash('sha256').update(String(req.ip)).digest('hex').slice(0, 32);
  const hour = new Date().toISOString().slice(0, 13);
  const limitRef = db.collection('contactRateLimits').doc(`${ipKey}_${hour}`);
  const allowed = await db.runTransaction(async (tx) => {
    const snap = await tx.get(limitRef);
    const count = (snap.get('count') as number | undefined) ?? 0;
    if (count >= MAX_PER_HOUR) return false;
    tx.set(limitRef, { count: count + 1, expiresAt: new Date(Date.now() + 2 * 3600_000) }, { merge: true });
    return true;
  });
  if (!allowed) {
    res.status(429).json({ error: 'Too many messages. Please try again later or email info@tacitous.com.' });
    return;
  }

  const ref = await db.collection('enquiries').add({ ...enquiry, createdAt: FieldValue.serverTimestamp() });

  const rows = Object.entries(enquiry)
    .map(([k, v]) => `<tr><th align="left" style="padding:4px 12px 4px 0">${k}</th><td>${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  // The enquiry is already stored, so a mail failure is logged and recorded rather than shown to the visitor.
  try {
    await nodemailer.createTransport(SMTP_URL.value()).sendMail({
      from: mailFrom(SMTP_URL.value()),
      to: NOTIFY_TO,
      replyTo: enquiry.email,
      subject: `Website enquiry from ${enquiry.name}${enquiry.organisation ? ` (${enquiry.organisation})` : ''}`,
      text: Object.entries(enquiry).map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<table>${rows}</table>`,
    });
    await ref.update({ emailedAt: FieldValue.serverTimestamp() });
  } catch (err) {
    logger.error('Enquiry email failed', { id: ref.id, error: err instanceof Error ? err.message : String(err) });
    await ref.update({ emailError: err instanceof Error ? err.message.slice(0, 300) : 'unknown' });
  }

  logger.info('Enquiry stored', { id: ref.id });
  res.json({ ok: true });
});
