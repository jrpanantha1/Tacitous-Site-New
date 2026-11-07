import { Fragment, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { categories, platforms, rows, statuses, type CategoryId, type PlatformId, type Status } from '../content/compare';

type View = 'all' | Exclude<PlatformId, 'tacitous'>;

const views: { id: View; label: string }[] = [
  { id: 'all', label: 'Compare all platforms' },
  { id: 'sharepoint', label: 'Tacitous vs SharePoint' },
  { id: 'dgroups', label: 'Tacitous vs Dgroups' },
];

export function StatusBadge({ status }: { status: Status }) {
  return <span className={`cmp-badge cmp-${status}`}>{statuses[status].label}</span>;
}

// Interactive, accessible comparison. Everything renders in the initial HTML (the default view shows every
// platform and every row); the controls only filter what is already there.
export function CompareMatrix() {
  const [view, setView] = useState<View>('all');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [kmOnly, setKmOnly] = useState(false);
  const [open, setOpen] = useState<Set<string>>(new Set());

  const shown = platforms.filter((p) => p.id === 'tacitous' || view === 'all' || p.id === view);
  const visibleCats = categories.filter((c) => (category === 'all' || c.id === category) && (!kmOnly || c.km));
  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });

  return (
    <div className={`cmp${view === 'all' ? ' cmp-all' : ' cmp-pair'}`}>
      <div className="cmp-controls">
        <div className="cmp-views" role="group" aria-label="Choose a comparison">
          {views.map((v) => (
            <button key={v.id} type="button" aria-pressed={view === v.id} onClick={() => setView(v.id)}>
              {v.label}
            </button>
          ))}
        </div>
        <div className="cmp-filters">
          <label>
            <span>Capability area</span>
            <select value={category} onChange={(e) => setCategory(e.target.value as CategoryId | 'all')}>
              <option value="all">All areas</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </label>
          <label className="cmp-check">
            <input type="checkbox" checked={kmOnly} onChange={(e) => setKmOnly(e.target.checked)} />
            <span>Show only purpose-built KM capabilities</span>
          </label>
          {(view !== 'all' || category !== 'all' || kmOnly) && (
            <button type="button" className="cmp-reset" onClick={() => { setView('all'); setCategory('all'); setKmOnly(false); }}>
              Show the complete comparison
            </button>
          )}
        </div>
      </div>

      <table className="cmp-table">
        <caption className="sr-only">
          Knowledge Management capabilities supplied in the standard product: {shown.map((p) => p.name).join(', ')}
        </caption>
        <thead>
          <tr>
            <th scope="col" className="cmp-feature-col">Capability</th>
            {shown.map((p) => (
              <th scope="col" key={p.id} className={p.id === 'tacitous' ? 'cmp-us' : undefined}>
                <span className="cmp-pname">{p.short}</span>
                <span className="cmp-pcat">{p.category}</span>
              </th>
            ))}
          </tr>
        </thead>
        {visibleCats.map((c) => {
          const catRows = rows.filter((r) => r.category === c.id && (!kmOnly || r.km));
          if (!catRows.length) return null;
          return (
            <tbody key={c.id}>
              <tr className="cmp-group">
                <th scope="colgroup" colSpan={shown.length + 1}>{c.title}</th>
              </tr>
              {catRows.map((r) => {
                const isOpen = open.has(r.id);
                const panel = `cmp-detail-${r.id}`;
                return (
                  <Fragment key={r.id}>
                    <tr className={isOpen ? 'is-open' : undefined}>
                      <th scope="row" className="cmp-feature-col">
                        <button type="button" aria-expanded={isOpen} aria-controls={panel} onClick={() => toggle(r.id)}>
                          <span>{r.name}</span>
                          <ChevronDown size={16} aria-hidden="true" />
                        </button>
                      </th>
                      {shown.map((p) => {
                        const cell = r.cells[p.id];
                        return (
                          <td key={p.id} data-label={p.short} className={p.id === 'tacitous' ? 'cmp-us' : undefined}>
                            <StatusBadge status={cell.status} />
                            {view !== 'all' && cell.note && <span className="cmp-note">{cell.note}</span>}
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="cmp-detail" id={panel} hidden={!isOpen}>
                      <td colSpan={shown.length + 1}>
                        <div className="cmp-detail-grid">
                          <div>
                            <p><strong>What it is.</strong> {r.description}</p>
                            <p><strong>Why it matters.</strong> {r.why}</p>
                            {r.link && (
                              <Link to={r.link} className="text-link">See it in Tacitous <ArrowRight size={16} /></Link>
                            )}
                          </div>
                          <ul className="cmp-notes">
                            {shown.filter((p) => p.id !== 'tacitous' || r.cells.tacitous.note).map((p) => (
                              <li key={p.id}>
                                <strong>{p.short}:</strong> {statuses[r.cells[p.id].status].label}
                                {r.cells[p.id].note ? `. ${r.cells[p.id].note}` : '.'}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          );
        })}
      </table>
      <p className="cmp-hint">Select a capability to see what it does, why it matters and the notes behind each classification.</p>
    </div>
  );
}
