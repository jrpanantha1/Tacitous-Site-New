import { Link } from 'react-router';
import { ArrowRight, Atom, Flame, HeartHandshake, Landmark, Network, Wrench, type LucideIcon } from 'lucide-react';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks';
import { featureById } from '../content/features';

type Sector = {
  id: string;
  icon: LucideIcon;
  name: string;
  title: string;
  intro: string;
  pointsTitle: string;
  points: string[];
  screen?: string;
  retention?: boolean;
  // How knowledge is carried from one project to the next, using features that exist in Tacitous Next.
  carryForward?: string;
};

const sectors: Sector[] = [
  {
    id: 'energy',
    icon: Flame,
    name: 'Energy and major projects',
    title: 'Every project teaches something new. Keep it.',
    intro:
      'Energy projects involve many stakeholders and vendors over many years. Tacitous gives everyone, from the field to the office, one central place for critical knowledge, learnings and expertise, so teams align to best practice and avoid expensive rework.',
    pointsTitle: 'Friction points we address',
    points: [
      'Inconsistent best practices across sites and contractors',
      'Project delays from incomplete or outdated information',
      'Critical expertise lost to employee turnover',
      'Safety knowledge not shared widely enough',
      'Design knowledge lost between design and project teams',
      'Lessons from successes and failures never captured',
    ],
    retention: true,
    carryForward:
      'Before a project team disperses, an After Action Review records what was intended, what happened and what to do differently. Approved Lessons Learned and Best Practices stay tagged to expertise categories, so the next project finds them on the Expertise Map instead of in an archive, and a Peer Assist brings experienced colleagues in before significant work begins.',
  },
  {
    id: 'public-sector',
    icon: Landmark,
    name: 'Government and public sector',
    title: 'Smarter governance through institutional intelligence',
    intro:
      'When long-serving civil servants retire or move on, their expertise often leaves with them. Capturing lessons learned and connecting experts through Communities of Practice turns individual experience into shared intelligence and better service delivery.',
    pointsTitle: 'What public institutions need to do',
    points: [
      'Identify and capture critical expertise',
      'Create digital knowledge hubs',
      'Encourage collaboration and knowledge sharing',
      'Put mentoring and knowledge transfer in place',
      'Share innovations across departments',
    ],
    retention: true,
  },
  {
    id: 'nuclear',
    icon: Atom,
    name: 'Nuclear and high-risk industries',
    title: 'Preserving expertise where knowledge loss carries serious consequences',
    intro:
      'In regulated, safety-conscious environments, knowledge has to survive long operating lifecycles and pass between generations of specialists. Tacitous supports the Knowledge Management practices these organisations rely on, alongside their existing management systems.',
    pointsTitle: 'Where Knowledge Management helps',
    points: [
      'Long operating lifecycles that outlast individual careers',
      'Specialist technical expertise held by a few people',
      'Retirement and workforce transition',
      'Capturing operational experience and lessons learned',
      'Continuity of institutional knowledge',
      'Knowledge transfer between generations of experts',
      'Safety-conscious organisational learning',
    ],
    screen: 'expertise-map',
    retention: true,
  },
  {
    id: 'engineering',
    icon: Wrench,
    name: 'Engineering and technical organisations',
    title: 'Keeping technical knowledge accessible throughout the project lifecycle',
    intro:
      'Engineering decisions are made once and lived with for decades. Tacitous helps keep the reasoning behind them, and the people who understand it, within reach of every team that comes next.',
    pointsTitle: 'What to keep hold of',
    points: [
      'Technical decisions and their rationale',
      'Specialist expertise and who holds it',
      'Lessons learned across projects',
      'Expert practices captured in a consistent form',
      'Fewer repeated mistakes',
      'Knowledge transfer between project teams',
    ],
    retention: true,
    carryForward:
      'Decision and Rationale records keep why a significant decision was made, the alternatives considered and where it applies. With Lessons Learned, Expert Practice Notes and Knowledge Retention and Transfer records tagged to the same expertise categories, the team that inherits an asset or a design can see what earlier teams learned and who to ask.',
  },
  {
    id: 'ngos',
    icon: HeartHandshake,
    name: 'NGOs and foundations',
    title: 'Helping mission-driven organisations learn, collaborate and grow',
    intro:
      'Mission-driven organisations often work across many locations with changing teams, partners and volunteers. Tacitous helps them hold on to what they learn and share it where it is needed.',
    pointsTitle: 'Common needs',
    points: [
      'Distributed teams and volunteers',
      'Knowledge sharing between programmes',
      'Retaining organisational knowledge despite staff turnover',
      'Capturing field experience and lessons learned',
      'Communities for programme delivery, partnerships and fundraising',
      'Access to expertise across locations',
    ],
    screen: 'communities',
  },
  {
    id: 'associations',
    icon: Network,
    name: 'Professional associations and knowledge networks',
    title: 'Connecting practitioners, expertise and professional communities',
    intro:
      'Associations and networks exist to connect people who share a profession or interest. Tacitous gives members a place to find each other, share what works and learn together.',
    pointsTitle: 'What members can do',
    points: [
      'Join Communities of Practice',
      'Find experts through a member directory and expertise discovery',
      'Share professional practices and lessons',
      'Exchange knowledge between member organisations',
      'Use public and private communities',
      'Collaborate and learn as a profession',
    ],
    screen: 'expert-profiles',
  },
];

export default function Sectors() {
  return (
    <>
      <PageHero eyebrow="Sectors" title="Built for organisations where lost knowledge is expensive">
        <p>Long careers, complex work and many stakeholders: wherever expertise is hard to replace, Tacitous helps keep it in reach.</p>
      </PageHero>

      <nav className="subnav" aria-label="Sectors on this page">
        <div className="container">
          {sectors.map((s) => <a key={s.id} href={`#${s.id}`}>{s.name}</a>)}
        </div>
      </nav>

      {sectors.map((s, i) => {
        const tool = s.screen ? featureById(s.screen) : undefined;
        const Icon = s.icon;
        return (
          <section key={s.id} id={s.id} className={`section${i % 2 ? ' section-tint' : ''}`}>
            <div className={`container split split-top${i % 2 ? ' reverse' : ''}`}>
              <div>
                <span className="icon-chip big"><Icon size={26} aria-hidden="true" /></span>
                <SectionHead eyebrow={s.name} title={s.title}>{s.intro}</SectionHead>
                {s.retention && (
                  <Link to="/solutions/critical-knowledge-retention" className="text-link">
                    Critical Knowledge Retention <ArrowRight size={16} />
                  </Link>
                )}
              </div>
              <div className="sector-side">
                <div className="card">
                  <h3>{s.pointsTitle}</h3>
                  <ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                {s.carryForward && (
                  <div className="card carry-forward">
                    <p className="eyebrow eyebrow-dark">Knowledge portability</p>
                    <h3>Knowledge shouldn’t end when a project does.</h3>
                    <p>{s.carryForward}</p>
                    <Link to="/explore#data-export" className="text-link">Knowledge Portability &amp; Interoperability <ArrowRight size={16} /></Link>
                  </div>
                )}
                {tool?.screen && (
                  <figure className="showcase-frame small">
                    <img src={`${import.meta.env.BASE_URL}screens/${tool.screen.file}`} alt={tool.screen.alt} width={tool.screen.w} height={tool.screen.h} loading="lazy" decoding="async" />
                    <figcaption>{tool.name} in Tacitous Next</figcaption>
                  </figure>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand title="Tell us about your sector." body="We will share how Tacitous could help your organisation capture and reuse its critical knowledge." />
    </>
  );
}
