import { Link } from 'react-router';
import { ArrowRight, BookMarked, CalendarDays, Check, Handshake, KeyRound, Network, Plus, ShieldCheck, UserRoundX } from 'lucide-react';
import { ProductPreview } from '../components/ProductPreview';
import { ProductExplorer } from '../components/ProductExplorer';
import { CtaBand, SectionHead } from '../components/Blocks';
import { approach, benefits, circle, faqs, links } from '../content/site';
import { highlightIds } from '../content/features';
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
              <li><Check size={16} /> Expertise Map and Communities of Practice</li>
              <li><Check size={16} /> Critical Knowledge Retention</li>
              <li><Check size={16} /> Backed by a practical KM Blueprint</li>
            </ul>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="trust">
        <div className="container trust-row">
          <span><BookMarked size={18} /> KM methodology and software together</span>
          <span><Handshake size={18} /> Strategic partner of Knoco International</span>
          <span><Network size={18} /> Exportable knowledge graph</span>
          <span><KeyRound size={18} /> Sign in with Microsoft, Google or email</span>
          <span><ShieldCheck size={18} /> Governed, approval-based sharing</span>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <SectionHead eyebrow="How we do it" title="You have the knowledge. We have the solution.">
            Most knowledge tools give you somewhere to put documents. Tacitous combines Knowledge Management methodology,
            purpose-built tools and hands-on support, so your Subject Matter Experts collaborate, capture what they know and
            keep it in the organisation.
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
          <p className="note">
            The result: better decisions, faster onboarding and a more knowledgeable, engaged workforce.{' '}
            <Link to="/about">More about Tacitous</Link>
          </p>
        </div>
      </section>

      <section className="section section-tint" id="features">
        <div className="container">
          <SectionHead eyebrow="See it in action" title="One hub for the knowledge your organisation runs on" center>
            Choose a capability to see the real screen, why it matters and what it connects to.
          </SectionHead>
          <ProductExplorer ids={highlightIds} idPrefix="home" />
          <div className="center-row">
            <Link to="/explore" className="btn btn-primary">Explore every feature <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-band" aria-labelledby="ckr-band">
        <div className="container band">
          <span className="band-icon"><UserRoundX size={28} aria-hidden="true" /></span>
          <div>
            <p className="eyebrow eyebrow-dark">Critical Knowledge Retention</p>
            <h2 id="ckr-band">When experienced people leave, their knowledge shouldn’t leave with them.</h2>
            <p>
              Identify the knowledge at risk, capture the experience behind it and connect it to the people who will carry
              it forward.
            </p>
          </div>
          <Link to="/solutions/critical-knowledge-retention" className="btn btn-primary">
            Protect critical knowledge <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Business benefits" title="Keep critical knowledge where it belongs: inside your organisation">
              Encourage communities around shared interests and turn individual experience into shared intelligence.
            </SectionHead>
            <p className="chips-label">Sectors we work with</p>
            <div className="chips">
              <Link to="/sectors#energy">Energy</Link>
              <Link to="/sectors#public-sector">Government</Link>
              <Link to="/sectors#nuclear">Nuclear and high-risk</Link>
              <Link to="/sectors#engineering">Engineering</Link>
              <Link to="/sectors#ngos">NGOs and foundations</Link>
              <Link to="/sectors#associations">Professional associations</Link>
            </div>
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
            <Link to="/km-blueprint" className="btn btn-ghost-light">Read about the KM Blueprint <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow-dark">Ready for AI</p>
            <h2>AI is only as useful as the knowledge behind it.</h2>
            <p className="section-lead">
              Without knowledge architecture, AI simply scales confusion faster. Data tells you what happened. Knowledge
              explains why. Communities help decide what to do next. Tacitous helps you build the trusted foundation of
              validated lessons, expertise and provenance that AI depends on.
            </p>
            <Link to="/platform#ai" className="text-link">Knowledge Management and AI <ArrowRight size={16} /></Link>
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

      <CtaBand secondary={{ label: 'Explore the features', to: '/explore' }} />
    </>
  );
}
