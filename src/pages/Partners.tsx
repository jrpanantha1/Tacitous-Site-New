import { ExternalLink } from 'lucide-react';
import { PageHero, CtaBand } from '../components/Blocks';
import { links } from '../content/site';

export default function Partners() {
  return (
    <>
      <PageHero eyebrow="Partners" title="Stronger together">
        <p>We work with partners who share our belief that knowledge is how organisations learn, decide and perform.</p>
      </PageHero>

      <section className="section">
        <div className="container grid two">
          <article className="card partner">
            <span className="tag tag-blue">Strategic partner</span>
            <h2>Knoco International</h2>
            <p>
              Knoco is a Knowledge Management consulting and training organisation with more than 25 years of experience.
              Knoco brings KM expertise, methodology and training; Tacitous brings the digital platform, tools and
              implementation capability.
            </p>
            <p>
              Together we help organisations build sustainable KM that improves performance, retains critical knowledge and
              prepares them for AI-enabled work.
            </p>
            <a href={links.knoco} className="text-link">knoco.com <ExternalLink size={15} /></a>
          </article>
          <article className="card partner" id="whistleblowing">
            <span className="tag tag-green">Member</span>
            <h2>I Blow The Whistle</h2>
            <p>
              Tacitous is a member of the I Blow The Whistle platform. If you need to report an ethical concern about Tacitous,
              you can do so confidentially through their reporting app.
            </p>
            <a href={links.whistle} className="text-link">Report a concern <ExternalLink size={15} /></a>
          </article>
        </div>
      </section>

      <CtaBand title="Interested in partnering with Tacitous?" body="We are open to collaboration, including licensing our KM Blueprint." />
    </>
  );
}
