import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks';
import { circle } from '../content/site';

const pillars = [
  { title: 'Personal knowledge profiles', items: ['Profile and role', 'Skills and expertise', 'Ask me about', 'Communities and interests'] },
  { title: 'Communities of Practice', items: ['Newsfeed and posts', 'Discussions and best answers', 'News and announcements', 'Documents and FAQs'] },
  { title: 'Knowledge retention and learnings', items: ['Lessons learned and best practices', 'Knowledge retention and transfer', 'Retiree and external engagement', 'Ratings and continuous improvement'] },
  { title: 'Forms and codified knowledge', items: ['After Action Reviews', 'Innovation and idea sharing', 'Knowledge-specific business processes', 'Codified collaboration'] },
];

const foundations = ['Knowledge asset search', 'Secure, governed access', 'Integration with existing systems', 'Exportable knowledge graph', 'Trusted foundations for AI'];

// How each Blueprint step is supported by Tacitous Next.
const mapping = [
  { step: 'Create', tools: ['Expertise profiles', 'Knowledge identification', 'Innovation and ideas'] },
  { step: 'Collect', tools: ['Lessons Learned', 'After Action Reviews', 'Critical Knowledge Retention', 'Expert knowledge capture'] },
  { step: 'Manage', tools: ['Structured knowledge forms', 'Expertise categories', 'Knowledge libraries', 'Review, approval and governed access'] },
  { step: 'Share', tools: ['Communities of Practice', 'Expertise discovery', 'Knowledge exchange', 'Reusable practices'] },
];

// How validated knowledge travels beyond the project or community that created it.
const carryForward = [
  {
    title: 'Reuse across projects',
    body: 'Approved Learnings and knowledge records are tagged to expertise categories, not filed away with one project, so they surface on the Expertise Map for every team with access. “I Applied This Learning” records show where they were reused.',
  },
  {
    title: 'Interoperable expertise relationships',
    body: 'Each expertise category can be exported as RDF N-Triples, Turtle or JSON-LD, using standard vocabularies, for compatible knowledge graph technologies.',
  },
  {
    title: 'A portable record of what you know',
    body: 'Through Data / Exit Package, Tenant Administrators request an export of selected knowledge domains, approved by the Platform Administrator, as JSON and CSV with stable identifiers for archival, portability or migration.',
  },
];

const steps = [
  { title: 'Create', body: 'Identify the knowledge you already have, and the gaps.' },
  { title: 'Collect', body: 'Set clear criteria for capturing new knowledge and lessons.' },
  { title: 'Manage', body: 'Organise, validate and protect what you hold.' },
  { title: 'Share', body: 'Put insight in front of the people who need it, and report against your goals.' },
];

export default function Blueprint() {
  return (
    <>
      <PageHero eyebrow="KM Blueprint" title="A practical blueprint for making Knowledge Management work">
        <p>
          Built on practical experience of delivering Knowledge Management in real organisations, the Tacitous Blueprint
          guides you in managing the flow of knowledge, finding where to improve and using what you know to inform
          decisions.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Four steps" title="Create, collect, manage, share" />
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint" id="methodology-to-tools">
        <div className="container">
          <SectionHead eyebrow="Methodology and platform" title="From Knowledge Management methodology to practical tools" center>
            Tacitous is both a KM methodology and a working technology platform. Each step of the Blueprint is supported by
            tools in Tacitous Next.
          </SectionHead>
          <ol className="mapping">
            {mapping.map((m, i) => (
              <li key={m.step}>
                <div className="mapping-head"><span className="num">{i + 1}</span><h3>{m.step}</h3></div>
                <ul>{m.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              </li>
            ))}
          </ol>
          <div className="center-row gap">
            <Link to="/explore" className="btn btn-outline">Explore the tools <ArrowRight size={18} /></Link>
            <Link to="/solutions/critical-knowledge-retention" className="btn btn-outline">Critical Knowledge Retention <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="How Tacitous enables collaborative innovation" title="A virtuous circle of knowledge" center />
          <ol className="circle">
            {circle.map((c, i) => (
              <li key={c.title}>
                <span className="num">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint" id="portability">
        <div className="container">
          <SectionHead eyebrow="Knowledge Portability &amp; Interoperability" title="Knowledge shouldn’t end when a project does." center>
            Retained and validated knowledge should not become isolated in a project archive. The Blueprint treats each
            lesson, practice and retained insight as an organisational asset that the next project, community or team can
            find and build on.
          </SectionHead>
          <div className="grid three">
            {carryForward.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
          <div className="center-row">
            <Link to="/explore#semantic-export" className="btn btn-outline">See portability in Tacitous Next <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Building blocks" title="What the Blueprint puts in place" />
          <div className="grid four">
            {pillars.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <ul className="ticks">{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="foundation">
            {foundations.map((f) => <span key={f}>{f}</span>)}
          </div>
          <p className="note">
            These foundations sit beneath every part of the Blueprint. If you have specific hosting, integration or language
            requirements, <Link to="/contact">talk to us</Link>.
          </p>
        </div>
      </section>

      <CtaBand title="Licence the Blueprint, or let us deliver it with you." />
    </>
  );
}
