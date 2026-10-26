import { useEffect, useRef, useState } from 'react';
import type { Journey } from '../content/journeys';
import { Screenshot, screenSrc } from './Motion';

// Tells one journey as the visitor scrolls: the steps scroll past while the matching application screen stays in
// view beside them. On narrow screens, and without JavaScript, each step simply shows its own screenshot.
export function ScrollStory({ journey }: { journey: Journey }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const total = journey.steps.length;

  return (
    <div className="story">
      <div className="story-steps">
        {journey.steps.map((s, i) => (
          <article
            key={s.title}
            ref={(el) => { stepRefs.current[i] = el; }}
            data-step={i}
            className={`story-step${i === active ? ' is-active' : ''}`}
          >
            <span className="story-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <p className="journey-who">{s.who}</p>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="story-inline"><Screenshot screen={s.screen} /></div>
          </article>
        ))}
      </div>
      <div className="story-visual" aria-hidden="true">
        <div className="story-sticky">
          <div className="story-frame">
            <div className="story-bar"><span /><span /><span /></div>
            <div className="story-screens">
              {journey.steps.map((s, i) => (
                <img
                  key={s.screen.file}
                  src={screenSrc(s.screen.file)}
                  alt=""
                  width={s.screen.w}
                  height={s.screen.h}
                  loading="lazy"
                  decoding="async"
                  className={i === active ? 'is-active' : undefined}
                />
              ))}
            </div>
          </div>
          <div className="story-progress">
            <span style={{ transform: `scaleX(${(active + 1) / total})` }} />
          </div>
          <p className="story-caption">Step {active + 1} of {total}: {journey.steps[active].title}</p>
        </div>
      </div>
    </div>
  );
}
