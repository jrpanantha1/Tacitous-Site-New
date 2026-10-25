import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { links } from '../content/site';

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="hero hero-page">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <div className="lead">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children, center }: { eyebrow?: string; title: ReactNode; children?: ReactNode; center?: boolean }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      {eyebrow && <p className="eyebrow eyebrow-dark">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </div>
  );
}

export function CtaBand({ title = 'Keep the knowledge that makes you great.', body = 'Talk to us about your knowledge challenges. We will show you the platform and how the Blueprint fits your organisation.' }: { title?: string; body?: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-light">Start the conversation <ArrowRight size={18} /></Link>
            <a href={links.bookCall} className="btn btn-ghost-light"><CalendarDays size={18} /> Book a call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
