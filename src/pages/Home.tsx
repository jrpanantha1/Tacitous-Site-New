import { Link } from 'react-router';
import { ArrowRight, CalendarDays, Check, Cloud, Globe2, Handshake, History, Plus, ShieldCheck } from 'lucide-react';
import { ProductPreview } from '../components/ProductPreview';
import { CtaBand, SectionHead } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { approach, benefits, circle, faqs, links, modules } from '../content/site';
import { posts } from '../content/press';

export default function Home() {
  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Knowledge that stays</p>
            <h1>Capture what your people already know, before it walks out the door.</h1>
            <p className="lead">
              Tacitous unlocks the power of collective knowledge. Retain the expertise of your workforce, break down silos
              and help every team make better decisions, with Communities of Practice, lessons learned and a living
              directory of expertise in one place.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-light">Start the conversation <ArrowRight size={18} /></Link>
              <a href={links.bookCall} className="btn btn-ghost-light"><CalendarDays size={18} /> Book a call</a>
            </div>
            <ul className="hero-points">
              <li><Check size={16} /> Cloud or secure on-premise</li>
              <li><Check size={16} /> AI translation built in</li>
              <li><Check size={16} /> Backed by a proven KM Blueprint</li>
            </ul>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="trust">
        <div className="container trust-row">
          <span><History size={18} /> 20+ years delivering KM</span>
          <span><Handshake size={18} /> Strategic partner of Knoco International</span>
          <span><Cloud size={18} /> Cloud or on-premise</span>
          <span><Globe2 size={18} /> Multilingual by design</span>
          <span><ShieldCheck size={18} /> Secure, tenant-isolated</span>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <SectionHead eyebrow="How we do it" title="You have the knowledge. We have the solution.">
            There is no one-size-fits-all knowledge platform. Tacitous combines purpose-built software with two decades of
            KM delivery, so your Subject Matter Experts collaborate, capture what they know and keep it in the organisation.
          </SectionHead>
          <div className="grid three">
            {approach.map((a, i) => (
              <article className="card card-numbered" key={a.title}>
                <span className="num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
          <p className="note">The result: better decisions, faster onboarding and a more knowledgeable, engaged workforce.</p>
        </div>
      </section>

      <section className="section section-tint" id="features">
        <div className="container">
          <SectionHead eyebrow="The platform" title="Purpose built around knowledge management" center>
            Everything your organisation needs to find expertise, preserve what matters and continuously improve.
          </SectionHead>
          <div className="grid four">
            {modules.map((m) => (
              <article className="card feature" key={m.title}>
                <span className="icon-chip"><Icon name={m.icon} /></span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
          <div className="center-row">
            <Link to="/platform" className="btn btn-outline">Explore the platform <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Business benefits" title="Keep critical knowledge where it belongs: inside your organisation">
              Encourage communities around shared interests and turn individual experience into shared intelligence.
            </SectionHead>
            <Link to="/sectors" className="text-link">See how it works in energy and government <ArrowRight size={16} /></Link>
          </div>
          <ol className="benefit-list">
            {benefits.map((b, i) => (
              <li key={b.title}>
                <span className="num">{i + 1}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark" id="platform">
        <div className="container">
          <SectionHead eyebrow="The KM Blueprint" title="A virtuous circle of knowledge" center>
            How Tacitous turns everyday conversations into learnings and innovation, and back again.
          </SectionHead>
          <ol className="circle">
            {circle.map((c, i) => (
              <li key={c.title}>
                <span className="num">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ol>
          <div className="center-row">
            <Link to="/blueprint" className="btn btn-ghost-light">Read about the Blueprint <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow-dark">Ready for AI</p>
            <h2>Without knowledge architecture, AI simply scales confusion faster.</h2>
            <p className="section-lead">
              Data tells you what happened. Knowledge explains why. Communities help decide what to do next. Tacitous gives
              your AI a trusted foundation of validated lessons, expertise and provenance.
            </p>
          </div>
          <div className="equation">
            <span>Data</span><Plus size={18} /><span>Context</span><Plus size={18} /><span>Experience</span><Plus size={18} /><span>Lessons</span>
            <strong>= Institutional intelligence</strong>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="faq">
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="Questions we are often asked" center />
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row-head">
            <SectionHead eyebrow="Press" title="Latest news and perspectives" />
            <Link to="/press" className="text-link">All articles <ArrowRight size={16} /></Link>
          </div>
          <div className="grid three">
            {posts.slice(0, 3).map((p) => (
              <Link to={`/press/${p.slug}`} className="card post-card" key={p.slug}>
                <span className="tag tag-blue">{p.tags[0]}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="text-link">Read article <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
