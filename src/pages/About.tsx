import { Link } from 'react-router';
import { ArrowRight, BookMarked, Cog, ExternalLink, Users, Workflow } from 'lucide-react';
import { CtaBand, PageHero, SectionHead } from '../components/Blocks';
import { links } from '../content/site';

const problems = [
  { title: 'Fragmented knowledge', body: 'What people know is spread across inboxes, drives, chat threads and individual memory.' },
  { title: 'Employee turnover', body: 'When experienced people retire, resign or move roles, their experience often leaves with them.' },
  { title: 'Lost institutional memory', body: 'Organisations forget why decisions were made and what was learned the last time.' },
  { title: 'Repeated mistakes', body: 'Teams rediscover solutions and repeat errors that others have already worked through.' },
  { title: 'Hidden expertise', body: 'It is hard to find out who knows about a topic, especially across sites, teams and partners.' },
];

const offer = [
  'Knowledge Management methodology and strategy',
  'A structured KM Blueprint',
  'Purpose-built Knowledge Management tools',
  'Communities of Practice',
  'Expertise mapping and knowledge discovery',
  'Knowledge retention and organisational learning',
  'Consultancy, implementation and development support',
];

const pillars = [
  { icon: Users, title: 'People', body: 'Knowledge starts with people. We help you understand who knows what and connect them with those who need it.' },
  { icon: Workflow, title: 'Processes', body: 'Simple, repeatable KM processes, such as After Action Reviews and retention interviews, make capture part of everyday work.' },
  { icon: BookMarked, title: 'Knowledge', body: 'Lessons, practices and decisions are structured, validated and kept current so they can be trusted and reused.' },
  { icon: Cog, title: 'Technology', body: 'Tacitous Next supports the people and processes, rather than asking them to fit around the software.' },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Tacitous" title="Built by people who understand Knowledge Management">
        <p>
          Tacitous was created around a simple belief: organisations already possess enormous amounts of valuable knowledge,
          but too much of it remains locked inside people’s heads, scattered across systems or lost when experienced
          employees leave.
        </p>
        <p>
          Our approach brings together Knowledge Management methodology, practical experience and purpose-built technology
          to help organisations identify expertise, retain critical knowledge and turn what their people know into lasting
          organisational capability.
        </p>
      </PageHero>

      <section className="section">
        <div className="container mission">
          <p className="eyebrow eyebrow-dark">Our mission</p>
          <p className="mission-statement">
            Help organisations preserve critical knowledge, connect people to expertise, share what works and continuously
            improve.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Why Tacitous exists" title="Most organisations know more than they can use">
            The knowledge that keeps an organisation running is rarely written down in one place. Without a deliberate
            approach, it erodes quietly.
          </SectionHead>
          <div className="grid problems">
            {problems.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-top">
          <SectionHead eyebrow="More than a software platform" title="Methodology, tools and support, working together">
            Collaboration tools on their own rarely change how an organisation learns. Tacitous combines the methodology
            with the technology and the people to help you put it into practice.
          </SectionHead>
          <ul className="ticks ticks-lg">{offer.map((o) => <li key={o}>{o}</li>)}</ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split split-top">
          <SectionHead eyebrow="Our experience" title="Shaped in knowledge-intensive organisations">
            Tacitous draws on practical experience of Knowledge Management in organisations where expertise is hard to
            replace, including energy, major projects, government and high-risk industries. That experience shapes both
            the Blueprint and the tools.
          </SectionHead>
          <div className="link-panel">
            <Link to="/sectors">Sectors we work with <ArrowRight size={16} /></Link>
            <Link to="/solutions/critical-knowledge-retention">Critical Knowledge Retention <ArrowRight size={16} /></Link>
            <Link to="/partners">Our partnership with Knoco International <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our approach" title="People, processes, knowledge and technology" center>
            Knowledge Management works when all four are in balance. Technology alone does not create a learning
            organisation, and good intentions alone do not scale.
          </SectionHead>
          <div className="grid four">
            {pillars.map(({ icon: I, title, body }) => (
              <article className="card" key={title}>
                <span className="icon-chip"><I size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="center-row gap">
            <Link to="/km-blueprint" className="btn btn-outline">The KM Blueprint <ArrowRight size={18} /></Link>
            <Link to="/platform" className="btn btn-outline">The platform <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn btn-outline">What we do <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="speak-up">
        <div className="container split split-top">
          <SectionHead eyebrow="Ethics and governance" title="Speak up">
            Tacitous is a member of the I Blow The Whistle platform. If you have an ethical concern about Tacitous, you can
            report it confidentially through their independent reporting service.
          </SectionHead>
          <div>
            <a href={links.whistle} className="btn btn-outline" rel="noopener noreferrer">
              Report a concern confidentially <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
