import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Journey } from '../content/journeys';
import { Screenshot } from './Motion';

// Steps through one knowledge journey. Steps change only when the visitor chooses; nothing auto-plays.
export function JourneyStepper({ journey }: { journey: Journey }) {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = journey.steps[index];
  const last = journey.steps.length - 1;
  const panelId = `journey-${journey.id}-panel`;

  function go(i: number, focus = false) {
    const next = Math.max(0, Math.min(last, i));
    setIndex(next);
    if (focus) tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const keys: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: last };
    if (!(e.key in keys)) return;
    e.preventDefault();
    go(keys[e.key], true);
  }

  return (
    <div className="journey">
      <ol className="journey-steps" role="tablist" aria-label={`${journey.title}: steps`}>
        {journey.steps.map((s, i) => (
          <li key={s.title} role="presentation" className={i < index ? 'is-done' : i === index ? 'is-current' : undefined}>
            <button
              ref={(el) => { tabRefs.current[i] = el; }}
              id={`journey-${journey.id}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={i === index}
              aria-controls={panelId}
              tabIndex={i === index ? 0 : -1}
              onClick={() => go(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="journey-num" aria-hidden="true">{i + 1}</span>
              <span className="journey-label">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div id={panelId} role="tabpanel" aria-labelledby={`journey-${journey.id}-tab-${index}`} className="journey-panel">
        <div className="journey-swap" key={index}>
          <div className="journey-copy">
            <p className="journey-count">Step {index + 1} of {journey.steps.length}</p>
            <h4>{step.title}</h4>
            <p className="journey-who">{step.who}</p>
            <p>{step.body}</p>
            <div className="journey-nav">
              <button type="button" className="btn btn-outline btn-sm" onClick={() => go(index - 1)} disabled={index === 0}>
                <ArrowLeft size={16} /> Previous
              </button>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => go(index + 1)} disabled={index === last}>
                Next step <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <Screenshot screen={step.screen} />
        </div>
      </div>
    </div>
  );
}
