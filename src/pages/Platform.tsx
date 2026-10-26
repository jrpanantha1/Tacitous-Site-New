import { Link } from 'react-router';
import { ArrowRight, Cloud, KeyRound, Lock, Share2 } from 'lucide-react';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks';
import { ProductExplorer } from '../components/ProductExplorer';
import { highlightIds } from '../content/features';

// The connected parts of the platform that make up the pathway to expertise.
const pathway = [
  { id: 'expert-profiles', label: 'Expert profiles' },
  { id: 'expertise-map', label: 'Expertise categories and the Expertise Map' },
  { id: 'communities', label: 'Communities of Practice' },
  { id: 'lessons-learned', label: 'Lessons Learned and Best Practices' },
  { id: 'knowledge-library', label: 'Knowledge Library and other resources' },
];

const deploy = [
  { icon: Cloud, title: 'Cloud service', body: 'Tacitous Next runs as a secure cloud service, with each organisation in its own tenant.' },
  { icon: KeyRound, title: 'Simple sign-in', body: 'People sign in with their Microsoft or Google account, or with an emailed sign-in link.' },
  { icon: Lock, title: 'Governed access', body: 'Public, managed and private communities, membership approvals and tenant administration.' },
  { icon: Share2, title: 'Open knowledge graph', body: 'Export the Expertise Map as a semantic knowledge graph for use in other tools.' },
];

const aiFoundations = [
  { title: 'Know who knows', body: 'Identify the knowledgeable people behind each area of expertise.' },
  { title: 'Capture experience', body: 'Record critical experience before it is lost, not after.' },
  { title: 'Structure it', body: 'Turn lessons and practices into consistent, comparable records.' },
  { title: 'Assign ownership', body: 'Give knowledge owners, such as designated experts and community managers.' },
  { title: 'Keep context', body: 'Retain where knowledge came from, who validated it and when.' },
  { title: 'Trusted access', body: 'Make approved knowledge easy to find for the people who need it.' },
];

export default function Platform() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Knowledge is power, but only if shared.">
        <p>
          Scientists, engineers, planners and managers depend on knowledge every day. Tacitous Next, the Knowledge &amp;
          Expertise Hub, puts it within reach: the people who know, the lessons they learned and the communities where they
          work things out together. Tacitous doesn’t simply store knowledge. It connects knowledge, people and expertise so
          that organisations can put what they know to work.
        </p>
      </PageHero>

      <section className="section" id="pathway">
        <div className="container split">
          <SectionHead eyebrow="Pathway to Expertise" title="A pathway to the knowledge and people you need.">
            Tacitous helps people discover relevant expertise, connect with knowledgeable colleagues and access the lessons, practices and communities that support their work. By linking people with organisational knowledge, Tacitous makes expertise easier to find, share and reuse.
          </SectionHead>
          <div className="link-panel link-panel-light">
            {pathway.map((p) => (
              <Link key={p.id} to={`/explore#${p.id}`}>{p.label} <ArrowRight size={18} aria-hidden="true" /></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="tools">
        <div className="container">
          <SectionHead eyebrow="Knowledge Management tools" title="See Tacitous Next in action" center>
            Purpose-built tools for each part of Knowledge Management, from finding expertise to capturing and reusing what
            people learn. Choose a tool to see the real screen and what it connects to.
          </SectionHead>
          <ProductExplorer ids={highlightIds} idPrefix="platform" />
          <div className="center-row gap">
            <Link to="/explore" className="btn btn-primary">Explore every feature <ArrowRight size={18} /></Link>
            <Link to="/explore#journeys" className="btn btn-outline">Follow a knowledge journey</Link>
          </div>
        </div>
      </section>

      <section className="section" id="deployment">
        <div className="container">
          <SectionHead eyebrow="Access and deployment" title="Secure, governed and simple to start">
            Tacitous Next fits around the way your organisation already works. If you have specific hosting or integration
            requirements, <Link to="/contact">talk to us</Link> about the options.
          </SectionHead>
          <div className="grid four">
            {deploy.map(({ icon: I, title, body }) => (
              <article className="card" key={title}>
                <span className="icon-chip"><I size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="ai">
        <div className="container">
          <SectionHead eyebrow="Knowledge Management and AI" title="AI is only as useful as the knowledge behind it." center>
            AI cannot recover institutional knowledge that was never captured, structured or maintained. Before AI can help,
            organisations need trusted knowledge to work from.
          </SectionHead>
          <ol className="circle">
            {aiFoundations.map((f, i) => (
              <li key={f.title}>
                <span className="num">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ol>
          <div className="ai-compare">
            <div>
              <h3>What Tacitous Next does today</h3>
              <p>
                Expert profiles and the Expertise Map, Communities of Practice, structured knowledge forms, reviewed and
                approved learnings, knowledge libraries and governed access. Together these build the trusted knowledge
                foundation that any AI initiative depends on.
              </p>
            </div>
            <div>
              <h3>Where AI fits next</h3>
              <p>
                Well-structured, owned and validated knowledge opens up broader opportunities, such as AI-assisted search,
                summaries and recommendations. We are happy to discuss your AI plans and how your knowledge foundations can
                support them.
              </p>
            </div>
          </div>
          <div className="center-row">
            <Link to="/press/why-knowledge-needs-a-trust-layer-in-the-age-of-ai" className="btn btn-ghost-light">
              Read: why knowledge needs a trust layer <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="See the hub with your own knowledge in it."
        body="We will walk you through Tacitous Next and how it would fit your organisation."
        primary={{ label: 'Book a demonstration', to: '/contact' }}
        secondary={{ label: 'Read about the KM Blueprint', to: '/km-blueprint' }}
      />
    </>
  );
}
