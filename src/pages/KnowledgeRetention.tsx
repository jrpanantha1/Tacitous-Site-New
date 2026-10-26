import { Link } from 'react-router';
import { ArrowRight, Atom, Flame, HardHat, Landmark, Wrench } from 'lucide-react';
import { CtaBand, PageHero, SectionHead } from '../components/Blocks';
import { featureById } from '../content/features';
import { Screenshot } from '../components/Motion';

const challenges = [
  { title: 'An ageing workforce', body: 'Retirements are approaching for many of the people who hold the deepest experience.' },
  { title: 'Specialist expertise', body: 'Operational and specialist knowledge is often held by a handful of people.' },
  { title: 'Knowledge that lives in experience', body: 'Judgement, context and know-how rarely make it into procedures or reports.' },
  { title: 'Repeated mistakes', body: 'Without a record of what was learned, teams rediscover solutions and repeat errors.' },
  { title: 'Lost institutional memory', body: 'The reasons behind past decisions fade when the people who made them move on.' },
  { title: 'Limited succession planning', body: 'Knowledge transfer is often an afterthought in the last weeks before someone leaves.' },
];

const steps = [
  { title: 'Identify knowledge at risk', body: 'Find the critical knowledge your organisation depends on and where it could be lost.' },
  { title: 'Identify the knowledge holders', body: 'Map the experts, specialists and long-serving staff who hold that knowledge.' },
  { title: 'Capture experience', body: 'Record decisions, lessons, practices and the reasoning behind them, through guided capture and conversations.' },
  { title: 'Structure and validate', body: 'Organise what is captured, review it and tag it to the right areas of expertise.' },
  { title: 'Connect', body: 'Link knowledge to the people and Communities of Practice who will use and maintain it.' },
  { title: 'Share and reuse', body: 'Make the knowledge easy to find and apply across the organisation, long after the original holder has moved on.' },
];

const krtSections = [
  { title: 'Role Introduction', body: 'The person describes their area in plain terms, so that someone new to the role, or to the subject, can understand it.' },
  { title: 'Conversation Points', body: 'Seven optional questions draw out experience and insight, from what they wish they had known at the start to the shortcuts, workarounds and critical success factors others should know about.' },
  { title: 'Closing Question', body: 'Three key pieces of advice for their successor, and why each one matters.' },
]

const capabilities = [
  { id: 'knowledge-retention', label: 'Knowledge Retention and Transfer', body: 'A guided conversation that captures knowledge from people retiring or moving into different roles.' },
  { id: 'expert-profiles', label: 'Expert profiles', body: 'Know who holds which expertise, and who they can hand it on to.' },
  { id: 'expertise-map', label: 'Expertise Map', body: 'See where expertise is concentrated in only one or two people.' },
  { id: 'km-forms', label: 'Knowledge forms', body: 'Structured capture, including Knowledge Retention and Transfer and Expert Practice Note forms.' },
  { id: 'lessons-learned', label: 'Lessons learned and best practices', body: 'Reviewed, approved learnings tagged by expertise.' },
  { id: 'knowledge-library', label: 'Knowledge libraries', body: 'One trusted place to find approved knowledge.' },
  { id: 'communities', label: 'Communities of Practice', body: 'Groups that take ownership of knowledge and keep it current.' },
];

const industries = [
  { icon: Atom, title: 'Nuclear and high-risk industries', body: 'Long operating lifecycles mean knowledge must pass between generations of specialists.', to: '/sectors#nuclear' },
  { icon: Flame, title: 'Energy and major projects', body: 'Project lessons and operating experience need to outlast the teams that created them.', to: '/sectors#energy' },
  { icon: Landmark, title: 'Government', body: 'Institutional memory protects service delivery when civil servants retire or move roles.', to: '/sectors#public-sector' },
  { icon: Wrench, title: 'Engineering', body: 'Technical decisions and their rationale stay available throughout the asset lifecycle.', to: '/sectors#engineering' },
  { icon: HardHat, title: 'Other knowledge-intensive organisations', body: 'Anywhere expertise takes years to build and is hard to replace.', to: '/sectors' },
];

const scenarios = [
  {
    title: 'A senior engineer retiring in six months',
    body: 'The engineer’s expertise areas are confirmed on the Expertise Map. A Knowledge Retention and Transfer conversation and Expert Practice Notes capture key judgements, and a successor joins the relevant community to keep the knowledge current.',
  },
  {
    title: 'A project closing down',
    body: 'Before the team disperses, an After Action Review captures what worked and what did not. Approved lessons are tagged by expertise so the next project team finds them at the start, not the end.',
  },
  {
    title: 'A specialist moving to another site',
    body: 'Colleagues use the specialist’s profile and community to ask questions while the knowledge is still close at hand, and answers are captured for others.',
  },
];

const screen = featureById('knowledge-retention')!.screen;

export default function KnowledgeRetention() {
  return (
    <>
      <PageHero eyebrow="Critical Knowledge Retention" title="When experienced people leave, their knowledge shouldn’t leave with them.">
        <p>
          Every organisation faces risk when experienced people retire, resign, transfer or become unavailable. Documents can
          be handed over. The experience, judgement and tacit knowledge built up over many years cannot, unless you plan for
          it.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-light">Talk to us <ArrowRight size={18} /></Link>
          <Link to="/explore#journey-retention" className="btn btn-ghost-light">See how it works</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container split split-top">
          <SectionHead eyebrow="Information is not experience" title="Documenting is not the same as retaining">
            A procedure tells you what to do. It rarely tells you why, what to watch for, or what to do when the situation
            does not match the manual. That is the knowledge people carry with them, and it is the hardest to replace.
          </SectionHead>
          <div className="compare">
            <div>
              <h3>Documented information</h3>
              <p>Procedures, reports, drawings and records. Necessary, but incomplete on its own.</p>
            </div>
            <div className="compare-strong">
              <h3>Retained knowledge</h3>
              <p>Experience, judgement, context and the reasoning behind decisions, connected to the people who can explain it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="The challenge" title="The knowledge retention challenge" />
          <div className="grid three">
            {challenges.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How Tacitous helps" title="A practical sequence for retaining critical knowledge" center />
          <ol className="process">
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

      <section className="section section-tint" id="krt">
        <div className="container">
          <SectionHead eyebrow="Knowledge Retention and Transfer" title="A structured conversation before someone moves on">
            Knowledge Retention and Transfer provides a structured way to capture the experience, practical judgement,
            insights and advice of knowledgeable employees, particularly those approaching retirement or moving into
            different roles. Each record can be associated with expertise categories, connecting retained knowledge with the
            relevant areas of organisational expertise.
          </SectionHead>
          <ol className="process">
            {krtSections.map((s, i) => (
              <li key={s.title}>
                <span className="num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="note">
            <Link to="/explore#journey-retention" className="text-link">Follow a Knowledge Retention and Transfer record step by step <ArrowRight size={16} /></Link>
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split split-top">
          <div>
            <SectionHead eyebrow="Tacitous Next" title="The tools that support each step" />
            <ul className="capability-list">
              {capabilities.map((c) => (
                <li key={c.id}>
                  <Link to={`/explore#${c.id}`}>{c.label}</Link>
                  <span>{c.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <Screenshot screen={screen} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Where it matters most" title="Relevant industries" />
          <div className="grid industries">
            {industries.map(({ icon: I, title, body, to }) => (
              <Link to={to} className="card feature link-card" key={title}>
                <span className="icon-chip"><I size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Example scenarios" title="What this can look like in practice">
            These are illustrative examples of how the approach and tools fit together. They are not customer case studies.
          </SectionHead>
          <div className="grid three">
            {scenarios.map((s) => (
              <article className="card scenario" key={s.title}>
                <span className="tag tag-blue">Example scenario</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Protect the knowledge your organisation cannot afford to lose."
        body="Tell us where your knowledge is most at risk and we will show you how Tacitous can help retain it."
        primary={{ label: 'Talk to us', to: '/contact' }}
        secondary={{ label: 'Explore the Platform', to: '/platform' }}
      />
    </>
  );
}
