import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHero, SectionHead } from '../components/Blocks';
import { ProductExplorer } from '../components/ProductExplorer';
import { JourneyStepper } from '../components/JourneyStepper';
import { ExpertiseNetwork } from '../components/ExpertiseNetwork';
import { ScrollStory } from '../components/ScrollStory';
import { Reveal } from '../components/Motion';
import { journeyById, journeys } from '../content/journeys';

// The structured forms in the Tacitous Next catalogue. Lessons Learned and Best Practices are Learnings, not forms.
const forms = [
  { name: 'Knowledge Retention and Transfer', body: 'A guided conversation that captures experience, practical judgement and advice before someone changes role or leaves.' },
  { name: 'After Action Review', body: 'What a team intended, what happened and what it will do differently, so completed work informs the next.' },
  { name: 'Decision and Rationale', body: 'Why a significant decision was made, the alternatives considered and where it applies.' },
  { name: 'Innovation / Ideas', body: 'Share an early idea for improvement. Members can rate published ideas to show interest.' },
  { name: 'Knowledge Café', body: 'The insights, critical issues and closing questions from a facilitated Knowledge Café conversation.' },
  { name: 'Peer Assist', body: 'Advice from experienced colleagues before significant work, and what the requesting team decided to do.' },
  { name: 'Expert Practice Note', body: 'What to notice in a recurring situation, how to approach it, its limits and when to seek further advice.' },
];

export default function Explore() {
  return (
    <>
      <PageHero eyebrow="Explore Tacitous Next" title="See how knowledge moves through Tacitous Next.">
        <p>
          Tacitous doesn’t simply store knowledge. It connects knowledge, people and expertise so that organisations can put
          what they know to work. Choose a capability to see the real screen behind it, or follow a piece of knowledge from
          first idea to reuse.
        </p>
        <nav className="explore-jump" aria-label="On this page">
          <a href="#how-it-works">How it works</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#journeys">Knowledge journeys</a>
          <a href="#network">Expertise network</a>
          <a href="#forms">Knowledge forms</a>
        </nav>
      </PageHero>

      <section className="section" id="how-it-works">
        <div className="container">
          <SectionHead eyebrow="How it works" title="Everything starts with an expertise category">
            Discussions, Learnings, Knowledge Retention and Transfer records and other knowledge are linked to expertise
            categories, such as Finance, Legal or Fundraising. Each category has Designated Experts, who are notified about new
            discussions and Learnings in their area so they can help.
          </SectionHead>
          <div id="journey-expertise">
            <ScrollStory journey={journeyById('expertise')!} />
          </div>
        </div>
      </section>

      <section className="section section-tint" id="capabilities">
        <div className="container">
          <SectionHead eyebrow="Capabilities" title="Everything in the Knowledge & Expertise Hub, grouped by what it helps you do">
            Every screen is from Tacitous Next, captured from a local build with fictional demonstration people and content.
            Select an image to see it full size.
          </SectionHead>
          <ProductExplorer />
        </div>
      </section>

      <section className="section" id="journeys">
        <div className="container">
          <SectionHead eyebrow="Knowledge journeys" title="Follow knowledge from experience to reuse">
            Step through the workflows exactly as they run in the application, including who takes each step.
          </SectionHead>
          {journeys.filter((j) => j.id !== 'expertise').map((j) => (
            <Reveal key={j.id} className="journey-block">
              <div id={`journey-${j.id}`} className="journey-head">
                <h3>{j.title}</h3>
                <p>{j.intro}</p>
              </div>
              <JourneyStepper journey={j} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint" id="network">
        <div className="container">
          <SectionHead eyebrow="Expertise relationships" title="How people, expertise and knowledge connect">
            Modelled on the Constellation in Tacitous Next. Each governed expertise category is sized by what is connected to
            it. Choose one to see its designated experts, Learnings, other knowledge, communities and library resources,
            then choose a person to trace every category they are designated in.
          </SectionHead>
          <ExpertiseNetwork />
          <p className="network-note">
            Illustrative data using fictional demonstration people. In the application, the Expertise Map also offers
            Relationships and Map views, and can export the knowledge graph as JSON-LD, Turtle or N-Triples.{' '}
            <Link to="/explore#constellation">See the real Constellation</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="forms">
        <div className="container">
          <SectionHead eyebrow="Structured Knowledge Management forms" title="A consistent structure for every kind of knowledge">
            Every form is tagged with expertise categories. After Action Reviews, decisions, Peer Assists, ideas and Knowledge
            Cafés also appear on the Expertise Map alongside the people who know the subject.
          </SectionHead>
          <ul className="forms-grid">
            {forms.map((f) => (
              <li key={f.name}>
                <strong>{f.name}</strong>
                <span>{f.body}</span>
              </li>
            ))}
          </ul>
          <p className="note">
            Lessons Learned and Best Practices are captured as Learnings, with their own review and reuse workflow.{' '}
            <Link to="/explore#journey-learning" className="text-link">See the Learning journey <ArrowRight size={16} /></Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="See it with your own knowledge in it."
        body="We will walk you through Tacitous Next and how it would fit your organisation."
        primary={{ label: 'Book a demonstration', to: '/contact' }}
        secondary={{ label: 'About the platform', to: '/platform' }}
      />
    </>
  );
}
