import { Link } from 'react-router';
import { PageHero } from '../components/Blocks';
import { links } from '../content/site';

const ext = (href: string, label = href) => <a href={href} rel="noopener noreferrer">{label}</a>;

export function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy and GDPR">
        <p>How Tacitous collects, uses and protects personal data on this website. Last updated 6 November 2026.</p>
      </PageHero>
      <section className="section">
        <div className="container narrow prose">
          <h2>Who we are</h2>
          <p>This website, <Link to="/">www.tacitous.com</Link>, is run by Tacitous Ltd (“Tacitous”, “we”, “us”), a company registered in England and Wales (company number 15313336) with its registered office at 71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom. We are the controller of the personal data described in this notice. You can contact us about privacy at any time at <a href={`mailto:${links.email}`}>{links.email}</a>.</p>
          <p>This notice applies to visitors to this website, wherever they are, including in the United Kingdom and the European Economic Area. It is written to meet the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, the Privacy and Electronic Communications Regulations (PECR) and the EU General Data Protection Regulation (EU GDPR).</p>
          <p>Personal data held in the Tacitous Next platform is handled under your organisation’s agreement with Tacitous, not under this notice.</p>

          <h2>What we collect and why</h2>
          <h3>When you send an enquiry</h3>
          <p>When you use our <Link to="/contact">contact form</Link>, we collect your name, email address, organisation (optional), the topic you choose, your message and the page you sent it from. When you email us directly, we receive your email address and whatever you include in your message.</p>
          <p>We use this only to reply to you and to discuss how we might work together. Our lawful basis is our legitimate interest in responding to enquiries, or taking steps at your request before entering into a contract. We keep enquiries for up to 24 months after our last contact with you, unless they lead to a contract, in which case we keep them for as long as the contract requires.</p>

          <h3>Protecting the contact form from abuse</h3>
          <p>To stop automated spam, the form limits how many messages can be sent from one connection each hour. For this we store a one-way hashed form of your IP address with a count, set to expire after two hours. We never store your IP address itself. Our lawful basis is our legitimate interest in keeping the website secure.</p>

          <h3>Running the website</h3>
          <p>Like any website, our hosting provider (Google Firebase Hosting) processes technical information such as your IP address, browser type and the pages you request in order to deliver pages to you and keep the service secure. Our lawful basis is our legitimate interest in operating a secure website.</p>

          <h3 id="cookies">Analytics and advertising measurement, only with your consent</h3>
          <p>If you choose <strong>Accept</strong> in the cookie banner, we load:</p>
          <ul>
            <li><strong>Google Analytics 4</strong>, to understand how visitors use the site, for example which pages are visited and how visitors arrive. Google processes this data under its own {ext('https://policies.google.com/privacy', 'privacy policy')}.</li>
            <li><strong>The LinkedIn Insight Tag</strong>, to measure how our LinkedIn adverts perform, including when a visitor clicks to book a call or sends the contact form. LinkedIn processes this data under its own {ext('https://www.linkedin.com/legal/privacy-policy', 'privacy policy')}.</li>
          </ul>
          <p>Neither is loaded unless you accept, and nothing changes if you decline. Our lawful basis is your consent, which you can withdraw at any time using <strong>Cookie settings</strong> at the bottom of every page.</p>

          <h3>Booking a call</h3>
          <p>Our “Book a call” links take you to {ext(links.bookCall, 'zcal')}, a separate scheduling service. Information you enter there is collected by zcal under its own privacy policy and shared with us so we can hold the meeting.</p>

          <h2>Cookies and similar technologies</h2>
          <ul>
            <li><strong>Your cookie choice</strong> (stored in your browser’s local storage as <code>tacitous-cookie-consent-v2</code>). Strictly necessary to remember whether you accepted or declined. It is not sent to us.</li>
            <li><strong>Google Analytics cookies</strong> (names beginning <code>_ga</code>). Set only if you accept. Google’s standard expiry for these is up to two years.</li>
            <li><strong>LinkedIn cookies</strong> (for example <code>li_sugr</code>, <code>bcookie</code>, <code>lidc</code>, <code>UserMatchHistory</code> and <code>AnalyticsSyncHistory</code>). Set only if you accept. LinkedIn describes them in its {ext('https://www.linkedin.com/legal/cookie-policy', 'cookie policy')}.</li>
          </ul>
          <p>To change your choice, select <strong>Cookie settings</strong> at the bottom of any page. If you withdraw consent, we remove the Google Analytics and LinkedIn cookies set on this site and stop loading the tags. Fonts and all other files on this site are served from our own domain, so no other third party receives your data when you browse.</p>

          <h2>Who we share personal data with</h2>
          <p>We do not sell personal data. We share it only with service providers who process it on our behalf, under contracts that require them to protect it:</p>
          <ul>
            <li><strong>Google</strong> (Firebase Hosting, Cloud Functions and Cloud Firestore) to host the website and store enquiries, and Google Analytics if you accept cookies.</li>
            <li><strong>GoDaddy</strong>, which hosts our email, so that enquiries reach our team.</li>
            <li><strong>LinkedIn</strong>, if you accept cookies.</li>
          </ul>
          <p>We may also disclose personal data where the law requires it, or to professional advisers under a duty of confidentiality.</p>

          <h2>International transfers</h2>
          <p>Some of our providers, including Google and LinkedIn, may process data outside the UK and the European Economic Area, for example in the United States. Where they do, the transfer is protected by recognised safeguards, such as the EU–US Data Privacy Framework and its UK Extension, or standard contractual clauses approved for UK and EU transfers.</p>

          <h2>Your rights</h2>
          <p>Under the UK GDPR and the EU GDPR you have the right to:</p>
          <ul>
            <li>be informed about how your personal data is used</li>
            <li>access a copy of your personal data</li>
            <li>have inaccurate data corrected</li>
            <li>have your data erased</li>
            <li>restrict how we use your data</li>
            <li>receive your data in a portable format</li>
            <li>object to processing based on our legitimate interests</li>
            <li>withdraw consent at any time, without affecting processing before you withdrew it</li>
          </ul>
          <p>We do not make decisions about you based solely on automated processing.</p>
          <p>To exercise any of these rights, email <a href={`mailto:${links.email}`}>{links.email}</a>. There is no charge, and we will reply within one month. We may need to confirm your identity first.</p>

          <h2>Complaints</h2>
          <p>If you are unhappy with how we have handled your data, please contact us first so we can try to put it right. You also have the right to complain to a data protection supervisory authority:</p>
          <ul>
            <li>In the UK, the Information Commissioner’s Office: {ext('https://ico.org.uk/make-a-complaint/', 'ico.org.uk')}.</li>
            <li>In the European Economic Area, the authority in the country where you live or work, or where you believe the problem happened. The European Data Protection Board lists them: {ext('https://www.edpb.europa.eu/about-edpb/about-edpb/members_en', 'edpb.europa.eu')}.</li>
          </ul>

          <h2>Keeping your data secure</h2>
          <p>The website is served only over encrypted HTTPS connections. Enquiries are stored in access-controlled cloud storage that only our team can reach, and the credentials our systems use are kept in a secret manager, not in code.</p>

          <h2>Children</h2>
          <p>This website is intended for organisations and professionals. It is not aimed at children, and we do not knowingly collect personal data from anyone under 16.</p>

          <h2>Links to other websites</h2>
          <p>This site links to other websites, such as LinkedIn, YouTube and our partners’ sites. We are not responsible for their privacy practices, so please read their privacy notices when you visit them.</p>

          <h2>Changes to this notice</h2>
          <p>We will update this notice when our practices change, and show the date of the latest version at the top of this page.</p>
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
