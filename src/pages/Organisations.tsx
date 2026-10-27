import { PageHero, CtaBand } from '../components/Blocks';

// Organisations that have used Tacitous Next, shown with their permission. Logos are supplied by Tacitous; add one
// here only once the organisation has agreed to be listed.
const organisations = [
  { name: 'Dhwani Foundation', logo: 'dhwani-foundation.webp', w: 132, h: 81 },
  { name: 'Global Nuclear Knowledge Network', logo: 'global-nuclear-knowledge-network.webp', w: 262, h: 260 },
  { name: 'Hardium', logo: 'hardium.webp', w: 219, h: 229 },
  { name: 'KM4 Youth', logo: 'km4youth.webp', w: 320, h: 315 },
  { name: 'Knoco', logo: 'knoco.webp', w: 320, h: 320 },
  { name: 'Mission of Hope Foundation', logo: 'mission-of-hope-foundation.webp', w: 104, h: 88 },
  { name: 'Refugee Welfare Association', logo: 'refugee-welfare-association.webp', w: 307, h: 320 },
  { name: 'TIYAC Foundation', logo: 'tiyac-foundation.webp', w: 320, h: 269 },
  { name: 'Visions of Hope for Africa', logo: 'visions-of-hope-for-africa.webp', w: 320, h: 315 },
];

export default function Organisations() {
  return (
    <>
      <PageHero eyebrow="Organisations" title="Organisations that have used Tacitous">
        <p>
          Foundations, networks, communities and professional organisations have used Tacitous Next to connect their
          people, knowledge and expertise.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <ul className="logo-grid">
            {organisations.map((o) => (
              <li key={o.name} className="card logo-tile">
                <span className="logo-box">
                  <img
                    src={`${import.meta.env.BASE_URL}logos/${o.logo}`}
                    alt={`${o.name} logo`}
                    width={o.w}
                    height={o.h}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="logo-name">{o.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Bring your organisation’s knowledge together."
        body="We will show you how Tacitous Next could work for your community or organisation."
      />
    </>
  );
}
