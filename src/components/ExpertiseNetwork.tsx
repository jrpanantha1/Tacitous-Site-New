import { useMemo, useState, type KeyboardEvent } from 'react';
import { BookOpen, FileText, Library, UserRound, Users } from 'lucide-react';
import { categories, kindLabels, nodes, type NetNode, type NodeKind } from '../content/network';

// An interactive view modelled on the Constellation in Tacitous Next: expertise categories keep stable positions
// on an ellipse, sized by what is connected to them. Choosing one reveals its designated experts and connected
// knowledge around it and dims the rest. Choosing a person traces every category they are designated in.
// Rendered in SVG with CSS transitions only; nothing animates continuously.

const W = 960;
const H = 640;
const CX = W / 2;
const CY = H / 2;
const RING = 118;

const kindIcon: Record<NodeKind, typeof UserRound> = {
  person: UserRound, learning: BookOpen, record: FileText, community: Users, library: Library,
};

const countLabels: Record<NodeKind, string> = {
  person: 'Experts', learning: 'Learnings', record: 'Other knowledge', community: 'Communities', library: 'Library resources',
};

const connected = (categoryId: string) => nodes.filter((n) => n.categories.includes(categoryId));

function categoryPoint(i: number) {
  const a = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
  return { x: CX + Math.cos(a) * 310, y: CY + Math.sin(a) * 172 };
}

function categoryRadius(id: string) {
  return 22 + Math.min(1, Math.sqrt(connected(id).length) / 4.2) * 18;
}

function activate(e: KeyboardEvent, fn: () => void) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fn();
  }
}

export function ExpertiseNetwork() {
  const [categoryId, setCategoryId] = useState('km');
  const [nodeId, setNodeId] = useState<string | null>(null);

  const ring = useMemo(() => {
    const list = connected(categoryId);
    return list.map((n, i) => {
      const a = (i / list.length) * Math.PI * 2 - Math.PI / 2;
      return { node: n, dx: Math.cos(a) * RING, dy: Math.sin(a) * RING * 0.9 };
    });
  }, [categoryId]);

  const category = categories.find((c) => c.id === categoryId)!;
  const origin = categoryPoint(categories.indexOf(category));
  const node = nodeId ? nodes.find((n) => n.id === nodeId) ?? null : null;
  const nodePos = node ? ring.find((r) => r.node.id === node.id) : undefined;
  const traced = new Set(node ? node.categories : []);

  const counts = (['person', 'learning', 'record', 'community', 'library'] as NodeKind[]).map((k) => ({
    kind: k,
    items: ring.filter((r) => r.node.kind === k).map((r) => r.node),
  }));

  function chooseCategory(id: string) {
    setCategoryId(id);
    setNodeId(null);
  }

  function chooseNode(n: NetNode) {
    setNodeId((cur) => (cur === n.id ? null : n.id));
  }

  return (
    <div className="network">
      <div className="network-stage">
        <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Interactive expertise network, illustrative data">
          <defs>
            <radialGradient id="net-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b6fd4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3b6fd4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle className="net-glow" cx={origin.x} cy={origin.y} r={RING + 60} fill="url(#net-glow)" />

          {/* Lines from the chosen person to every category they are designated in. */}
          {node && nodePos && node.kind === 'person' &&
            categories.map((c, i) => {
              if (!traced.has(c.id) || c.id === categoryId) return null;
              const p = categoryPoint(i);
              return (
                <line key={c.id} className="net-trace" x1={origin.x + nodePos.dx} y1={origin.y + nodePos.dy} x2={p.x} y2={p.y} />
              );
            })}

          {/* Connected nodes around the chosen category. Keyed by category so they redraw on change. */}
          <g key={categoryId} className="net-ring" transform={`translate(${origin.x} ${origin.y})`}>
            {ring.map(({ node: n, dx, dy }, i) => {
              const Icon = kindIcon[n.kind];
              const selected = n.id === nodeId;
              return (
                <g key={n.id} className="net-spoke" style={{ animationDelay: `${i * 35}ms` }}>
                  <line className="net-line" x1={0} y1={0} x2={dx} y2={dy} />
                  <g
                    className={`net-node net-${n.kind}${selected ? ' is-selected' : ''}`}
                    transform={`translate(${dx} ${dy})`}
                    role="button"
                    tabIndex={0}
                    aria-pressed={selected}
                    aria-label={`${n.name}, ${kindLabels[n.kind]}`}
                    onClick={() => chooseNode(n)}
                    onKeyDown={(e) => activate(e, () => chooseNode(n))}
                  >
                    <circle r={n.kind === 'person' ? 17 : 13} />
                    <Icon x={-8} y={-8} width={16} height={16} aria-hidden="true" />
                    <text y={n.kind === 'person' ? 30 : 26} textAnchor="middle">{shorten(n.name, 18)}</text>
                  </g>
                </g>
              );
            })}
          </g>

          {categories.map((c, i) => {
            const chosen = c.id === categoryId;
            const p = categoryPoint(i);
            const r = categoryRadius(c.id);
            return (
              <g
                key={c.id}
                className={`net-category net-c${i}${chosen ? ' is-chosen' : ''}${traced.has(c.id) ? ' is-traced' : ''}`}
                transform={`translate(${p.x} ${p.y})`}
                role="button"
                tabIndex={0}
                aria-pressed={chosen}
                aria-label={`${c.name}, ${connected(c.id).length} connections`}
                onClick={() => chooseCategory(c.id)}
                onKeyDown={(e) => activate(e, () => chooseCategory(c.id))}
              >
                <circle r={r} />
                <text y={i === 0 ? -r - 10 : r + 18} textAnchor="middle">{c.name}</text>
              </g>
            );
          })}
        </svg>
        <ul className="network-legend" aria-label="Legend">
          {(Object.keys(kindLabels) as NodeKind[]).map((k) => {
            const Icon = kindIcon[k];
            return <li key={k} className={`net-${k}`}><span><Icon size={13} aria-hidden="true" /></span>{kindLabels[k]}</li>;
          })}
        </ul>
      </div>

      <aside className="network-panel" aria-live="polite">
        {node ? (
          <>
            <p className="eyebrow eyebrow-dark">{kindLabels[node.kind]}</p>
            <h4>{node.name}</h4>
            <p className="network-detail">{node.detail}</p>
            <p className="network-sub">{node.kind === 'person' ? 'Designated expert in' : 'Expertise categories'}</p>
            <div className="chips">
              {node.categories.map((id) => (
                <button type="button" key={id} onClick={() => chooseCategory(id)}>{categories.find((c) => c.id === id)!.name}</button>
              ))}
            </div>
            <button type="button" className="text-link network-back" onClick={() => setNodeId(null)}>
              Back to {category.name}
            </button>
          </>
        ) : (
          <>
            <p className="eyebrow eyebrow-dark">Expertise category</p>
            <h4>{category.name}</h4>
            <p className="network-detail">{category.description}</p>
            <dl className="network-counts">
              {counts.map(({ kind, items }) => (
                <div key={kind}><dt>{countLabels[kind]}</dt><dd>{items.length}</dd></div>
              ))}
            </dl>
            <p className="network-hint">Choose a person or item in the network to see how it connects.</p>
          </>
        )}
      </aside>

      <div className="network-list">
        <p className="network-sub" id="net-categories">Expertise categories</p>
        <div className="chips" role="group" aria-labelledby="net-categories">
          {categories.map((c) => (
            <button type="button" key={c.id} aria-pressed={c.id === categoryId} onClick={() => chooseCategory(c.id)}>{c.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function shorten(name: string, max: number) {
  return name.length > max ? `${name.slice(0, max - 1).trimEnd()}…` : name;
}
