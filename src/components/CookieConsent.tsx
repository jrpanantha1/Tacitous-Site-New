import { useEffect, useState } from 'react';
import { Link } from 'react-router';

// LinkedIn Insight Tag, loaded only after the visitor accepts advertising cookies (UK PECR / GDPR).
const LINKEDIN_PARTNER_ID = '6358524';
const KEY = 'tacitous-cookie-consent';
// Campaign Manager conversion "Book a call" (event-specific).
const BOOK_CALL_CONVERSION_ID = 30398364;

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

// Reports a "Book a call" conversion. Does nothing unless the visitor accepted and the tag is loaded.
export function trackBookCall() {
  const w = window as unknown as { lintrk?: (...args: unknown[]) => void };
  try { w.lintrk?.('track', { conversion_id: BOOK_CALL_CONVERSION_ID }); } catch { /* never block the visitor */ }
}

export function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null | undefined>(undefined);

  useEffect(() => {
    const c = readChoice();
    setChoice(c);
    if (c === 'accepted') loadLinkedInTag();
    // Any link to the booking page, anywhere on the site, counts as a "Book a call" conversion.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href*="zcal.co/tacitous"]');
      if (a) trackBookCall();
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
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
