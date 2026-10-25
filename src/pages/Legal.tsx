import { PageHero } from '../components/Blocks';
import { links } from '../content/site';

// TODO: replace with the approved text from the current WordPress privacy and terms pages.
export function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy and GDPR" />
      <section className="section">
        <div className="container narrow prose">
          <p>Tacitous respects your privacy. This notice explains what we collect through this website and how we use it.</p>
          <h2>What we collect</h2>
          <p>When you use our contact form we collect your name, email address, organisation, area of interest and message. We do not use advertising cookies on this website.</p>
          <h2>How we use it</h2>
          <p>We use your details only to respond to your enquiry and, where you have asked, to keep in touch about Tacitous. We never sell your data.</p>
          <h2>Where it is stored</h2>
          <p>Enquiries are stored securely in Google Cloud (Firebase) and delivered to our team by email.</p>
          <h2>Your rights</h2>
          <p>Under UK GDPR you can ask to see, correct or delete the personal data we hold about you, or unsubscribe at any time. Email <a href={`mailto:${links.email}`}>{links.email}</a> and we will act on your request.</p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of service" />
      <section className="section">
        <div className="container narrow prose">
          <p>The content and any software or documents made available on this website are provided as is, without warranty of any kind.</p>
          <p>Tacitous is not liable for any damages arising from use of this website or of materials downloaded from it, which you use at your own risk.</p>
          <p>Use of the Tacitous platform is governed by your organisation’s agreement with Tacitous and the platform’s acceptable use policy.</p>
          <p>Questions? Email <a href={`mailto:${links.email}`}>{links.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
