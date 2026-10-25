import { Link } from 'react-router';
import { Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { FacebookIcon, LinkedInIcon, XIcon } from './Icon';
import { links } from '../content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Knowledge that stays. Tacitous helps organisations retain critical knowledge, lessons learned and employee expertise.</p>
          <div className="social">
            <a href={links.linkedin} aria-label="Tacitous on LinkedIn"><LinkedInIcon /></a>
            <a href={links.x} aria-label="Tacitous on X"><XIcon /></a>
            <a href={links.facebook} aria-label="Tacitous on Facebook"><FacebookIcon /></a>
          </div>
        </div>
        <div>
          <h4>Product</h4>
          <Link to="/platform">Platform</Link>
          <Link to="/blueprint">KM Blueprint</Link>
          <Link to="/sectors">Sectors</Link>
          <a href={links.app}>Sign in</a>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/services">What we do</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/press">Press</Link>
          <Link to="/partners#whistleblowing">Whistleblowing</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${links.email}`} className="with-icon"><Mail size={16} />{links.email}</a>
          <span className="with-icon"><MapPin size={16} />Nottingham, England</span>
          <a href={links.bookCall}>Book a 30 minute call</a>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} Tacitous. All rights reserved.</span>
        <span>
          <Link to="/privacy">Privacy &amp; GDPR</Link>
          <Link to="/terms">Terms of service</Link>
        </span>
      </div>
    </footer>
  );
}
