import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks';

const engagement = [
  { title: 'Understand', body: 'Understand your organisation’s knowledge challenges and what is at stake.' },
  { title: 'Assess', body: 'Assess your current KM practices, capabilities and culture.' },
  { title: 'Plan', body: 'Define an appropriate KM strategy and implementation roadmap.' },
  { title: 'Build', body: 'Configure or develop the supporting tools and communities.' },
  { title: 'Embed', body: 'Support adoption, learning and continuous improvement.' },
];

const knoco = [
  'KM strategy and governance',
  'Communities of Practice',
  'Lessons learned',
  'Critical knowledge retention',
  'Knowledge transfer from retirees and SMEs',
  'KM training and capability building',
  'AI readiness through structured knowledge',
  'Digital KM platforms and implementation',
  'Fractional KM leadership and advisory',
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="What we do" title="From Knowledge Management strategy to practical implementation.">
        <p>
          We help organisations build the strategies, processes, communities and technology needed to make Knowledge
          Management part of everyday work.
        </p>
      </PageHero>

      <section className="section section-tint" id="engagement">
        <div className="container">
          <SectionHead eyebrow="How we work with you" title="A simple engagement model">
            Every organisation starts from a different place, so we adapt each step to your needs.
          </SectionHead>
          <ol className="process five">
            {engagement.map((e, i) => (
              <li key={e.title}>
                <span className="num">{i + 1}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="consultancy">
        <div className="container split">
          <SectionHead eyebrow="Consultancy" title="KM strategies built around your organisation" />
          <div className="prose">
            <p>
              We create customised Knowledge Management strategies that strengthen your current infrastructure and set you up
              for future success, weighing immediate business needs against long-term goals.
            </p>
            <p>
              Our team has experience across many technologies and frameworks. Whether you already have a platform or are
              starting fresh, we help through mentoring, training and KM champion support.
            </p>
            <p>
              Where experienced people are about to leave, we can focus first on{' '}
              <Link to="/solutions/critical-knowledge-retention">Critical Knowledge Retention</Link>.
            </p>
            <Link to="/km-blueprint" className="text-link">How the KM Blueprint shapes our work <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="development">
        <div className="container split">
          <SectionHead eyebrow="Development" title="Bespoke knowledge solutions, built properly" />
          <div className="prose">
            <p>
              We build information and knowledge solutions for organisations of every size: applications, databases, custom
              integrations and mobile apps, from out-of-the-box cloud to customised on-premise deployments.
            </p>
            <p>
              We can build bespoke systems from scratch or enhance the ones you have, for example adding analytics to workflow
              processes, and we support you with care and attention to detail throughout.
            </p>
            <p>
              We can also connect Tacitous Next to the systems you already use through its read-only{' '}
              <Link to="/explore#knowledge-api">Knowledge API</Link>, for example to show approved Lessons Learned on your
              intranet or SharePoint site.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="training">
        <div className="container">
          <SectionHead eyebrow="With Knoco International" title="End-to-end KM, from methodology to platform">
            Knoco brings more than 25 years of KM consulting and training. Tacitous brings the digital platform and
            implementation. Together we support:
          </SectionHead>
          <ul className="chips">{knoco.map((k) => <li key={k}>{k}</li>)}</ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
