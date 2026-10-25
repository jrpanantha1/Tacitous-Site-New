import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { CheckCircle2, Send } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const interests = ['The Tacitous platform', 'KM consultancy', 'Licensing the KM Blueprint', 'Development or integration', 'Partnership', 'Something else'];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please try again or email info@tacitous.com.');
      }
      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card form-done" role="status">
        <CheckCircle2 size={40} />
        <h3>Thanks for reaching out</h3>
        <p>We have your message and will be in touch shortly to start the conversation.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate={false}>
      <h3>Start the conversation</h3>
      <p className="muted">Tell us a little about you and we will get back to you within one working day.</p>
      <div className={compact ? 'fields' : 'fields two'}>
        <label>
          Name
          <input name="name" required autoComplete="name" maxLength={120} />
        </label>
        <label>
          Work email
          <input name="email" type="email" required autoComplete="email" maxLength={200} />
        </label>
        {!compact && (
          <>
            <label>
              Organisation
              <input name="organisation" autoComplete="organization" maxLength={160} />
            </label>
            <label>
              I am interested in
              <select name="interest" defaultValue={interests[0]}>
                {interests.map((i) => <option key={i}>{i}</option>)}
              </select>
            </label>
          </>
        )}
      </div>
      <label>
        <span>Message <span className="optional">(optional)</span></span>
        <textarea name="message" rows={compact ? 3 : 5} maxLength={4000} />
      </label>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <label className="hp" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="check">
        <input type="checkbox" name="consent" value="yes" required />
        <span>I agree to Tacitous contacting me about my enquiry, as described in the <Link to="/privacy">privacy policy</Link>.</span>
      </label>
      {status === 'error' && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-dark btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <>Send message <Send size={16} /></>}
      </button>
    </form>
  );
}
