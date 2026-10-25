import { CalendarDays, Mail, MapPin } from 'lucide-react';
import { PageHero } from '../components/Blocks';
import { ContactForm } from '../components/ContactForm';
import { LinkedInIcon } from '../components/Icon';
import { links } from '../content/site';

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Partner for success. Start the conversation.">
        <p>Whether you are exploring the platform, need KM consultancy or want to licence the Blueprint, we would love to hear from you.</p>
      </PageHero>
      <section className="section">
        <div className="container contact-grid">
          <ContactForm />
          <aside className="contact-side">
            <a className="card contact-option" href={links.bookCall}>
              <CalendarDays size={22} />
              <div><h3>Book a 30 minute call</h3><p>Pick a time that suits you.</p></div>
            </a>
            <a className="card contact-option" href={`mailto:${links.email}`}>
              <Mail size={22} />
              <div><h3>Email us</h3><p>{links.email}</p></div>
            </a>
            <a className="card contact-option" href={links.linkedin}>
              <LinkedInIcon size={22} />
              <div><h3>Follow us on LinkedIn</h3><p>News and perspectives</p></div>
            </a>
            <div className="card contact-option static">
              <MapPin size={22} />
              <div><h3>Where we are</h3><p>Nottingham, England</p></div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
