import { Cloud, Lock, Server, Smartphone } from 'lucide-react';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { ProductPreview } from '../components/ProductPreview';
import { modules } from '../content/site';

const deploy = [
  { icon: Cloud, title: 'Cloud', body: 'Ready to use straight away, hosted securely with each organisation in its own tenant.' },
  { icon: Server, title: 'Secure on-premise', body: 'The same Blueprint deployed inside your own infrastructure when security or sovereignty demands it.' },
  { icon: Smartphone, title: 'Mobile and APIs', body: 'Knowledge where work happens, through mobile apps and APIs into your internal systems.' },
  { icon: Lock, title: 'Governed access', body: 'Public, managed and private communities, with sign-in through Microsoft, Google or email.' },
];

export default function Platform() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Knowledge is power, but only if shared.">
        <p>
          Scientists, engineers, planners and marketers depend on knowledge every day. The Tacitous Knowledge &amp; Expertise
          Hub puts all of it within reach: the people who know, the lessons they learned and the communities where they work
          things out together.
        </p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="One hub" title="Find expertise, preserve what matters and continuously improve">
              Communities of Practice, expert profiles, knowledge mapping, discussions, lessons learned and best practices,
              critical knowledge retention, structured KM workflows, innovation and knowledge libraries, all designed to work
              together.
            </SectionHead>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Modules" title="Everything in one place" center />
          <div className="grid four">
            {modules.map((m) => (
              <article className="card feature" key={m.title}>
                <span className="icon-chip"><Icon name={m.icon} /></span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Deployment" title="Tailored, secure and integrated with what you already run">
            Our value in critical knowledge transfer comes from fitting into your existing technology, not replacing it.
          </SectionHead>
          <div className="grid four">
            {deploy.map(({ icon: I, title, body }) => (
              <article className="card" key={title}>
                <span className="icon-chip"><I size={22} strokeWidth={1.8} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="See the hub with your own knowledge in it." />
    </>
  );
}
