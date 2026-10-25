import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowRight, Check, Link2 } from 'lucide-react';
import { featureById, features, groups, type Feature } from '../content/features';
import { journeyById } from '../content/journeys';
import { Screenshot } from './Motion';

// Choose a capability to see its real screen, what it does, why it matters and what it connects to.
// `ids` limits the explorer to a subset (the homepage); the full version groups every feature by purpose.
export function ProductExplorer({ ids, idPrefix = 'feature' }: { ids?: string[]; idPrefix?: string }) {
  const items: Feature[] = useMemo(() => (ids ? ids.map((id) => featureById(id)!).filter(Boolean) : features), [ids]);
  const [active, setActive] = useState(items[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const { hash } = useLocation();

  // Deep links such as /explore#lessons-learned select the matching capability.
  useEffect(() => {
    const id = hash.slice(1);
    if (items.some((f) => f.id === id)) setActive(id);
  }, [hash, items]);

  const current = items.find((f) => f.id === active) ?? items[0];

  function select(id: string, focus = false) {
    setActive(id);
    if (focus) tabRefs.current[id]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowDown: index + 1, ArrowRight: index + 1, ArrowUp: index - 1, ArrowLeft: index - 1, Home: 0, End: items.length - 1,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    select(items[(keys[e.key] + items.length) % items.length].id, true);
  }

  const visibleGroups = groups.filter((g) => items.some((f) => f.group === g.id));
  const related = current.related.map((id) => featureById(id)!).filter(Boolean);
  const journey = current.journey ? journeyById(current.journey) : undefined;
  let index = -1;

  return (
    <div className="explorer">
      {/* Anchors let /explore#<feature> scroll here and select the feature. */}
      {!ids && items.map((f) => <span key={f.id} id={f.id} className="anchor" aria-hidden="true" />)}
      <div className="explorer-nav" role="tablist" aria-label="Tacitous Next capabilities" aria-orientation="vertical">
        {visibleGroups.map((g) => (
          <div className="explorer-group" key={g.id} role="presentation">
            <p className="explorer-group-title" role="presentation">{g.title}</p>
            {items.filter((f) => f.group === g.id).map((f) => {
              index += 1;
              const i = index;
              const selected = f.id === current.id;
              return (
                <button
                  key={f.id}
                  id={`${idPrefix}-tab-${f.id}`}
                  ref={(el) => { tabRefs.current[f.id] = el; }}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${idPrefix}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={selected ? 'is-active' : undefined}
                  onClick={() => select(f.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  {f.name}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div
        id={`${idPrefix}-panel`}
        role="tabpanel"
        aria-labelledby={`${idPrefix}-tab-${current.id}`}
        className="explorer-panel"
        tabIndex={0}
      >
        <div className="explorer-swap" key={current.id}>
          <Screenshot screen={current.screen} />
          <div className="explorer-copy">
            <div>
              <p className="eyebrow eyebrow-dark">{groups.find((g) => g.id === current.group)?.title}</p>
              <h3>{current.name}</h3>
              <p>{current.summary}</p>
              <p className="explorer-value"><strong>Why it matters:</strong> {current.value}</p>
            </div>
            <ul className="benefit-ticks">
              {current.details.map((d) => <li key={d}><Check size={18} aria-hidden="true" />{d}</li>)}
            </ul>
          </div>
          <div className="explorer-related">
            <p className="explorer-related-title"><Link2 size={16} aria-hidden="true" /> Connects with</p>
            <div className="chips">
              {related.map((r) =>
                items.some((f) => f.id === r.id) ? (
                  <button type="button" key={r.id} onClick={() => select(r.id, true)}>{r.name}</button>
                ) : (
                  <Link key={r.id} to={`/explore#${r.id}`}>{r.name}</Link>
                ),
              )}
            </div>
            {journey && (
              <Link to={`/explore#journey-${journey.id}`} className="text-link">
                See the journey: {journey.title} <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
