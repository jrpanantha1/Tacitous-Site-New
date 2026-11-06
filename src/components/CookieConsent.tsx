import { useEffect, useState } from 'react';
import { Link } from 'react-router';

// LinkedIn Insight Tag, loaded only after the visitor accepts advertising cookies (UK PECR / GDPR).
const LINKEDIN_PARTNER_ID = '6358524';
const KEY = 'tacitous-cookie-consent';

type Choice = 'accepted' | 'declined';

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

function loadLinkedInTag() {
  const w = window as unknown as { _linkedin_data_partner_ids?: string[]; lintrk?: unknown };
  if (w.lintrk) return;
  w._linkedin_data_partner_ids = w._linkedin_data_partner_ids || [];
  w._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);
  const q: unknown[] = [];
  const lintrk = (...args: unknown[]) => { q.push(args); };
  (lintrk as unknown as { q: unknown[] }).q = q;
  w.lintrk = lintrk;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  document.head.appendChild(s);
}

export function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null | undefined>(undefined);

  useEffect(() => {
    const c = readChoice();
    setChoice(c);
    if (c === 'accepted') loadLinkedInTag();
  }, []);

  const decide = (c: Choice) => {
    try { localStorage.setItem(KEY, c); } catch { /* storage unavailable: choice lasts for this visit */ }
    setChoice(c);
    if (c === 'accepted') loadLinkedInTag();
  };

  if (choice !== null) return null;
  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie preferences">
      <p>
        We would like to use a LinkedIn cookie to measure how our adverts perform. It is only set if you accept.{' '}
        <Link to="/privacy#cookies">Privacy and cookies</Link>
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-ghost-light" onClick={() => decide('declined')}>Decline</button>
        <button type="button" className="btn btn-light" onClick={() => decide('accepted')}>Accept</button>
      </div>
    </div>
  );
}
