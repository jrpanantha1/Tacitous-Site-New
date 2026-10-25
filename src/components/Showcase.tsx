import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import { tools, type Tool } from '../content/tools';

const screenSrc = (file: string) => `${import.meta.env.BASE_URL}screens/${file}`;

// Accessible tabs of real Tacitous Next screens. `detailed` adds the description and benefits beside each screen;
// otherwise only tools with a screenshot are shown, with a one-line caption.
export function Showcase({ detailed = false }: { detailed?: boolean }) {
  const items: Tool[] = useMemo(() => (detailed ? tools : tools.filter((t) => t.screen)), [detailed]);
  const [active, setActive] = useState(items[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const { hash } = useLocation();

  // Deep links such as /platform#expertise-map open the matching tab.
  useEffect(() => {
    const id = hash.slice(1);
    if (items.some((t) => t.id === id)) setActive(id);
  }, [hash, items]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: items.length - 1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = items[(keys[e.key] + items.length) % items.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  }

  const current = items.find((t) => t.id === active) ?? items[0];

  return (
    <div className={`showcase${detailed ? ' showcase-detailed' : ''}`}>
      <div className="showcase-tabs" role="tablist" aria-label="Tacitous Next tools">
        {items.map((t, i) => (
          <button
            key={t.id}
            id={detailed ? t.id : `tab-${t.id}`}
            ref={(el) => { tabRefs.current[t.id] = el; }}
            role="tab"
            type="button"
            aria-selected={t.id === current.id}
            aria-controls="showcase-panel"
            tabIndex={t.id === current.id ? 0 : -1}
            className={t.id === current.id ? 'is-active' : undefined}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div id="showcase-panel" role="tabpanel" aria-label={current.label} tabIndex={0}>
        {current.screen ? (
          <figure className="showcase-frame">
            <div className="preview-bar"><span className="dot" /><span className="dot" /><span className="dot" /><span className="preview-url">Tacitous Next</span></div>
            <img src={screenSrc(current.screen.file)} alt={current.screen.alt} width={current.screen.w} height={current.screen.h} loading="lazy" decoding="async" />
          </figure>
        ) : (
          detailed && current.list && (
            <div className="showcase-list">
              <h3>{current.list.heading}</h3>
              <ul>{current.list.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          )
        )}

        {detailed ? (
          <div className="showcase-detail">
            <div>
              <h3>{current.title}</h3>
              <p>{current.summary}</p>
              {current.link && <Link to={current.link.to} className="text-link">{current.link.label} <ArrowRight size={16} /></Link>}
            </div>
            <ul className="benefit-ticks">
              {current.benefits.map((b) => <li key={b}><Check size={18} aria-hidden="true" />{b}</li>)}
            </ul>
          </div>
        ) : (
          <p className="showcase-caption">{current.summary}</p>
        )}
      </div>
    </div>
  );
}
