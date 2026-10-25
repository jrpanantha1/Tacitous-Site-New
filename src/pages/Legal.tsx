import { Link } from 'react-router';
import { PageHero } from '../components/Blocks';
import { links } from '../content/site';

const ext = (href: string, label = href) => <a href={href} rel="noopener noreferrer">{label}</a>;

export function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy and GDPR" />
      <section className="section">
        <div className="container narrow prose">
          <h2>Introduction</h2>
          <p>We at Tacitous are committed to respecting your online privacy and recognize your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. Tacitous has established this Online Privacy Policy so that you can understand the care with which we intend to treat your Personal Information. For the purposes of this statement, “Personal Information” means any information that may be used to identify an individual, including, but not limited to, a first and last name, a home or other physical address and an email address or other contact information, whether at work or at home. The following discloses our information gathering and dissemination practices for the Tacitous website <Link to="/">www.tacitous.com</Link>.</p>

          <h2>Information collection</h2>
          <p>Tacitous doesn’t collect any kind of personal information when you use our applications.</p>
          <p>We will ask you when we need information that personally identifies you (“Personal Information”) or allows us to contact you. Generally, this information is requested when you want to provide us with your personal data, to give us the opportunity to get in touch with you.</p>
          <p>If you choose to create an account on Help Desk to contact the Tacitous Support Team, you enter your email address, name, and surname, password, location. This data is not listed publicly. It is saved within the Help Desk program and is used by the technical support only to get in touch with you.</p>
          <p>When you enter a contest or other promotional event, we may ask for information such as your name, address, telephone number, and e-mail address so we can administer the contest and notify winners.</p>
          <p>We use Google Analytics ({ext('https://www.google.com/analytics')}) to track our website traffic. It is a web analytics service offered by Google that tracks and reports website traffic.</p>
          <p>We may use your IP address to help diagnose problems with our server and to administer our Web site. Your IP address is also used to help identify you and your time spent at our sites, and to gather broad demographic information. This allows us to see which parts of our site users are visiting. We do not link IP addresses to anything personally identifiable. This means, for instance, that a user’s session will be tracked, but the user will remain anonymous. We do not use this information for any other purposes.</p>
          <p>When a user submits personal information, it is kept on a private server not accessible from the Internet. This limits the possibility of any malicious use of your information.</p>
          <p>Credit Card Purchase: Tacitous doesn’t process credit card data itself. All payments are accepted through the payment service providers {ext('https://fastspring.com/', 'FastSpring')}, {ext('https://stripe.com/', 'Stripe')}, and {ext('https://www.paypal.com', 'PayPal')}. Information about your credit card is not kept in or recorded by Tacitous, it is simply passed through to the credit card company. In this respect, credit card purchase on the internet is like a credit card purchase at any store.</p>
          <p>Such information as email address, name, and surname, transaction ID, a serial number are kept by Tacitous for further delivery and/or registration of the product.</p>

          <h2>GDPR (General Data Protection Regulation) privacy rights</h2>
          <p>It gives citizens of the European Economic Area (EEA) certain rights when you use services that process personal data. To allow you to exercise these rights, we made changes, so you can now better control your data.</p>
          <p>The GDPR provides the following rights for individuals, many of which apply whatever the basis of processing, although there are some exceptions:</p>
          <ol>
            <li>The right to be informed how personal data is processed</li>
            <li>The right of access to their personal data</li>
            <li>The right to rectification</li>
            <li>The right to erasure</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object</li>
            <li>Rights in relation to automated decision making and profiling</li>
          </ol>
          <p>This Tacitous privacy policy describes our practices in detail using simple language. Everything you need to know is here. If you have more questions, feel free to <Link to="/contact">contact our team</Link>.</p>
          <p>If you believe we have the wrong data about you, or that your data is incomplete, or you want to delete your data, or you want to object to the processing of certain forms of data or just want to access it and receive a file from us containing this data, feel free to contact us.</p>

          <h2>Use of personal information</h2>
          <p>Tacitous software does not intend to transfer Personal Information without your consent to third parties who are not bound to act on Tacitous behalf unless such transfer is legally required. Similarly, it is against Tacitous policy to sell Personal Information collected online without consent. In short, Tacitous does not sell registrant information to lists. In some cases, Tacitous may use a visitor’s personal information to understand overall patterns for site usage, to contact the user for clarification on inaccurate information, or to follow up on a customer service issue. Personal information may include name, address, telephone number, etc.</p>

          <h2>Links to other sites</h2>
          <p>This site contains links to other sites. Please be aware that Tacitous is not responsible for the privacy practices or the content of such Web Sites as well as any information they might collect, even though our name or logo may appear on those sites. We encourage you to be aware when you leave our site and to read the Privacy Statements of each and every Web site that you visit, as the privacy policy of those sites may differ from ours. Our Privacy Statement applies solely to <Link to="/">www.tacitous.com</Link>.</p>

          <h2>Third-party ads</h2>
          <p>We use third-party advertising companies to serve ads when you visit our Web site. These companies may use aggregated information (not including your name, address, email address or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you. If you would like more information about this practice and to know your choices about not having this information used by these companies, please see: {ext('https://www.networkadvertising.org', 'www.networkadvertising.org')}.</p>

          <h2>About the use of cookies and personal data</h2>
          <p>This website uses cookies and similar technologies that store information on your PC, mobile phone or tablet. This is usually stored on the device’s browser. We use cookies to grant visitors’ access to different functions on our websites, differentiate the users from each other, and analyze our website’s performance and to utilize user-adapted interest-based advertising. This relies to some degree on the use of personally identifiable information from our users – as described below – and helps us improve our website and make our digital communication more relevant for our recipients.</p>
          <p>Our visitors can voluntarily choose to accept the use of cookies through the settings on your browser or device. In your browser settings, you can adjust the preferences of which cookies your browser downloads. There, you can also delete all existing cookies that are stored on your browser or device. Please advise that if you block all cookies on your browser or device, this can result in a drop in our (and others) website performance and functions.</p>

          <h2>Purpose of cookies on this website</h2>
          <p>We collect a number of cookies from our users for various reasons, not least to track our own performance – but also to let us serve you content tailored to your own specifications, hopefully improving your overall experience of the website. Amongst other things, the cookies we use allow users to register to make comments, allow us to calculate how many visitors we have and how long they stay on our site.</p>

          <h2>Contact – inquiry of access</h2>
          <p>If you have an inquiry please contact us via <a href="mailto:support@tacitous.com">support@tacitous.com</a>.</p>

          <h2>Children’s privacy</h2>
          <p>The Tacitous website is not structured to attract children. Accordingly, we do not intend to collect Personal Information from anyone we know to be under 13 years of age.</p>

          <h2>YouTube API Services</h2>
          <p>We use YouTube API Services in consistence with YouTube {ext('https://www.youtube.com/t/terms', 'Terms of Service')} (ToS) and {ext('https://policies.google.com/privacy', 'Google Privacy Policy')}.</p>

          <h2>Your consent</h2>
          <p>By using this Web site, you consent to the terms of our Online Privacy Policy and to Tacitous’s processing of Personal Information for the purposes given above. Should the Online Privacy Policy change, we intend to take every reasonable step to ensure that these changes are brought to your attention by posting all changes prominently on our web site for a reasonable period of time.</p>
          <p>If you have any comments or questions regarding our Online Privacy Policy, please <Link to="/contact">contact us</Link>. While we cannot guarantee privacy perfection, we will address any issue to the best of our abilities as soon as possible.</p>
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
