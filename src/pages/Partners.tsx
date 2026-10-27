import { Link } from 'react-router';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PageHero, CtaBand } from '../components/Blocks';
import { links } from '../content/site';

export default function Partners() {
  return (
    <>
      <PageHero eyebrow="Partners" title="Stronger together">
        <p>We work with partners who share our belief that knowledge is how organisations learn, decide and perform.</p>
      </PageHero>

      <section className="section">
        <div className="container split split-top">
          <article className="card partner">
            <span className="tag tag-blue">Strategic partner</span>
            <h2>Knoco International</h2>
            <p>
              Knoco is a Knowledge Management consulting and training organisation. Knoco brings KM expertise, methodology
              and training; Tacitous brings the digital platform, tools and implementation capability.
            </p>
            <p>
              Together we help organisations build Knowledge Management that lasts: improving performance, retaining critical
              knowledge and building the trusted knowledge foundations that AI depends on.
            </p>
            <a href={links.knoco} className="text-link" rel="noopener noreferrer">knoco.com <ExternalLink size={15} /></a>
          </article>
          <div className="link-panel link-panel-light">
            <Link to="/press/tacitous-knoco-international-strategic-partnership">Read the partnership announcement <ArrowRight size={16} /></Link>
            <Link to="/services#training">Training with Knoco <ArrowRight size={16} /></Link>
            <Link to="/km-blueprint">The KM Blueprint <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <article className="card partner">
            <span className="tag tag-blue">Business partner</span>
            <h2>NKM for You</h2>
            <p>
              NKM for You is a Tacitous business partner. Tacitous provides consultancy to NKM for You, particularly on
              the technical side of bids.
            </p>
            <a href={links.nkm4you} className="text-link" rel="noopener noreferrer">nkm4you.com <ExternalLink size={15} /></a>
          </article>
        </div>
      </section>

      <CtaBand
        title="Interested in partnering with Tacitous?"
        body="We are open to conversations with consultancies, integrators and organisations that share our approach to Knowledge Management."
        primary={{ label: 'Talk to us about partnering', to: '/contact' }}
      />
    </>
  );
}
