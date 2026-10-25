import { PageHero, SectionHead, CtaBand } from '../components/Blocks';

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
      <PageHero eyebrow="What we do" title="Your knowledge is safe and secure with Tacitous.">
        <p>
          Consultants and technical specialists who help you improve your Knowledge Management capability, from strategy to a
          working platform your people actually use.
        </p>
      </PageHero>

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
