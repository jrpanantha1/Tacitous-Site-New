import { Flame, Landmark } from 'lucide-react';
import { PageHero, SectionHead, CtaBand } from '../components/Blocks';

const energy = [
  'Inconsistent best practices across sites and contractors',
  'Project delays from incomplete or outdated information',
  'Critical expertise lost to employee turnover',
  'Safety protocols not shared widely enough',
  'Design knowledge lost between design and project teams',
  'Lessons from successes and failures never captured',
];

const government = [
  'Identify and capture critical expertise',
  'Create digital knowledge hubs',
  'Encourage collaboration and knowledge sharing',
  'Implement mentoring and knowledge transfer',
  'Share innovations across departments',
];

export default function Sectors() {
  return (
    <>
      <PageHero eyebrow="Sectors" title="Built for organisations where lost knowledge is expensive">
        <p>Large projects, long careers and many stakeholders: wherever expertise is hard to replace, Tacitous keeps it in reach.</p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <span className="icon-chip big"><Flame size={26} /></span>
            <SectionHead eyebrow="Energy and major projects" title="Every project teaches something new. Keep it.">
              Energy projects involve many stakeholders and vendors over many years. Tacitous gives everyone, from the field to
              the office, one central place for critical knowledge, learnings and expertise, with an audit trail, so teams
              align to best practice and avoid expensive rework.
            </SectionHead>
          </div>
          <div className="card">
            <h3>Friction points we address</h3>
            <ul className="ticks">{energy.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <span className="icon-chip big"><Landmark size={26} /></span>
            <SectionHead eyebrow="Government and public sector" title="Smarter governance through institutional intelligence">
              When long-serving civil servants retire or move on, their expertise often leaves with them. Capturing lessons
              learned and connecting experts through Communities of Practice turns individual experience into shared
              intelligence, and faster, better service delivery.
            </SectionHead>
          </div>
          <div className="card">
            <h3>What public institutions need to do</h3>
            <ul className="ticks">{government.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
        </div>
      </section>

      <CtaBand title="Tell us about your sector." body="We will share how organisations like yours capture and reuse critical knowledge." />
    </>
  );
}
