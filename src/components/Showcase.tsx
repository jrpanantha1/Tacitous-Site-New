import { useState } from 'react';

const screens = [
  { id: 'expertise-map', label: 'Expertise map', w: 1217, h: 791, caption: 'See which people, communities and organisations connect to each area of expertise, and export it as a semantic knowledge graph.' },
  { id: 'community', label: 'Communities', w: 1353, h: 786, caption: 'Each community brings together discussions, approved learnings, announcements, a library, a calendar and FAQs.' },
  { id: 'profile', label: 'Expert profiles', w: 1316, h: 790, caption: 'Designated experts, “Ask me about” topics, skills and endorsements help people find the right colleague quickly.' },
  { id: 'communities', label: 'Governed access', w: 1306, h: 785, caption: 'Public, managed and private communities, with membership approvals built in.' },
];

// Real screenshots of the Knowledge & Expertise Hub, switchable by tab.
export function Showcase() {
  const [active, setActive] = useState(screens[0].id);
  const current = screens.find((s) => s.id === active)!;
  return (
    <div className="showcase">
      <div className="showcase-tabs" role="tablist" aria-label="Product screens">
        {screens.map((s) => (
          <button key={s.id} role="tab" aria-selected={s.id === active} className={s.id === active ? 'is-active' : undefined} onClick={() => setActive(s.id)}>
            {s.label}
          </button>
        ))}
      </div>
      <figure className="showcase-frame">
        <div className="preview-bar"><span className="dot" /><span className="dot" /><span className="dot" /><span className="preview-url">Knowledge &amp; Expertise Hub</span></div>
        <img src={`${import.meta.env.BASE_URL}screens/${current.id}.webp`} alt={`Tacitous ${current.label} screen`} width={current.w} height={current.h} loading="lazy" />
      </figure>
      <p className="showcase-caption">{current.caption}</p>
    </div>
  );
}
