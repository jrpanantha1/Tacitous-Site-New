import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks';
import { links } from '../content/site';

type Plan = { name: string; price: string; period: string; users: string; communities: string; blurb: string; points: string[] };

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'USD 35',
    period: 'per month, 12-month term',
    users: 'Up to 20 users',
    communities: '1 community',
    blurb: 'Start with one community and one knowledge challenge.',
    points: ['Every Tacitous Next feature', 'Set up for you by our team', 'Upgrade at any time'],
  },
  {
    name: 'Team',
    price: 'USD 149',
    period: 'per month, 12-month term',
    users: 'Up to 100 users',
    communities: 'Up to 5 communities',
    blurb: 'For organisations growing knowledge across several teams or disciplines.',
    points: ['Every Tacitous Next feature', 'More storage than Starter', 'Upgrade at any time'],
  },
  {
    name: 'Growth',
    price: 'USD 349',
    period: 'per month, 12-month term',
    users: 'Up to 250 users',
    communities: 'Unlimited communities',
    blurb: 'For established Knowledge Management programmes.',
    points: ['Every Tacitous Next feature', 'More storage than Team', 'Upgrade at any time'],
  },
  {
    name: 'Organisation',
    price: 'By quote',
    period: 'from a 500 user band',
    users: '500 users and up',
    communities: 'Unlimited communities',
    blurb: 'Includes implementation and one year of initial consultancy.',
    points: ['Every Tacitous Next feature', 'Implementation and consultancy', 'Guided by our KM Blueprint'],
  },
];

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Start with one community. Grow when you are ready.">
        <p>
          Every plan includes the full Tacitous Next platform, set up for you by our team. Choose the size that fits your
          first knowledge challenge and move up when the need arises. Prices exclude applicable taxes.
        </p>
      </PageHero>

      <section className="section" id="plans">
        <div className="container">
          <div className="grid four">
            {plans.map((p) => (
              <div className="card plan-card" key={p.name}>
                <h3>{p.name}</h3>
                <p className="plan-price"><strong>{p.price}</strong> <span>{p.period}</span></p>
                <p className="plan-size">{p.users}<br />{p.communities}</p>
                <p>{p.blurb}</p>
                <ul className="plan-points">
                  {p.points.map((pt) => (
                    <li key={pt}><Check size={16} /> {pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="plan-note">
            Plans are set up with our team rather than as a self-service trial, so we can help you choose the right first
            community. <a href={links.bookCall}>Book a call</a> or <Link to="/contact">contact us</Link> to get started.
          </p>
        </div>
      </section>

      <section className="section section-tint" id="charities">
        <div className="container split">
          <SectionHead eyebrow="Charities and non-profits" title="Free for registered charities and non-profits" />
          <div className="prose">
            <p>
              Registered charities, NGOs and non-profit organisations can apply
              for Tacitous Next free of charge, with the same limits as the Starter plan: one community and up to 20 users.
            </p>
            <p>
              Tell us about your organisation and your registration number, and what knowledge you want to capture and share.
              We review each application, and free plans are reviewed once a year.
            </p>
            <Link to="/contact" className="text-link">Apply for a free plan <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="fair-use">
        <div className="container split">
          <SectionHead eyebrow="Fair use" title="Fair use of storage and bandwidth" />
          <div className="prose">
            <p>
              Each plan includes storage and bandwidth suited to its size, and all plans are subject to fair use. Tacitous Next
              is designed for capturing and sharing knowledge, not as a file store or a media streaming service.
            </p>
            <p>
              If an organisation’s use is well above what is normal for its plan, we will contact you to discuss the right plan
              before anything changes. If you reach your plan’s user limit, we will let you know and give you time to upgrade.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
