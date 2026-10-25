import { PageHero, SectionHead, CtaBand } from '../components/Blocks';
import { circle } from '../content/site';

const pillars = [
  { title: 'Personal knowledge profiles', items: ['Profile and role', 'Skills and expertise', 'Ask me about', 'Communities and interests'] },
  { title: 'Communities of Practice', items: ['Newsfeed and posts', 'Discussions and best answers', 'News and announcements', 'Documents and FAQs'] },
  { title: 'Knowledge retention and learnings', items: ['Lessons learned and best practices', 'Knowledge retention and transfer', 'Retiree and external engagement', 'Ratings and continuous improvement'] },
  { title: 'Forms and codified knowledge', items: ['After Action Reviews', 'Innovation and idea sharing', 'Knowledge-specific business processes', 'Codified collaboration'] },
];

const foundations = ['Knowledge asset search', 'AI integration', 'Language translation', 'Mobile applications', 'Cloud or bespoke secure on-premise'];

const steps = [
  { title: 'Create', body: 'Identify the knowledge you already have, and the gaps.' },
  { title: 'Collect', body: 'Set clear criteria for capturing new knowledge and lessons.' },
  { title: 'Manage', body: 'Organise, validate and protect what you hold.' },
  { title: 'Share', body: 'Put insight in front of the people who need it, and report against your goals.' },
];

export default function Blueprint() {
  return (
    <>
      <PageHero eyebrow="KM Blueprint" title="A world-standard blueprint for delivering knowledge management">
        <p>
          Built on two decades of delivering Knowledge Management in real organisations, the Tacitous Blueprint guides you in
          managing the flow of knowledge, finding where to improve and using what you know to inform decisions.
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
        </div>
      </section>

      <CtaBand title="Licence the Blueprint, or let us deliver it with you." />
    </>
  );
}
