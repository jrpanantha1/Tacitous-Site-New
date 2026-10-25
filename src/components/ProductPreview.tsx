import { BookOpen, Users, UsersRound, Sparkles } from 'lucide-react';
import { LogoMark } from './Logo';

const stats = [
  { n: 12, label: 'Communities' },
  { n: 340, label: 'People' },
  { n: 86, label: 'Learnings' },
  { n: 41, label: 'Experts' },
];

const learnings = [
  { title: 'Improving regulatory compliance through shared knowledge', tag: 'Best practice' },
  { title: 'Why improvement ideas fail without ownership', tag: 'Lesson learned' },
  { title: 'Establishing trusted knowledge before introducing AI', tag: 'Best practice' },
];

// A stylised, non-interactive glimpse of the Knowledge & Expertise Hub.
export function ProductPreview() {
  return (
    <div className="preview" aria-hidden="true">
      <div className="preview-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="preview-url">Knowledge &amp; Expertise Hub</span>
      </div>
      <div className="preview-body">
        <div className="preview-banner">
          <div className="preview-title">
            <span className="preview-logo"><LogoMark size={26} /></span>
            <div>
              <small>WELCOME BACK</small>
              <strong>Knowledge &amp; Expertise Hub</strong>
            </div>
          </div>
          <div className="preview-stats">
            {stats.map((s) => (
              <div key={s.label}><b>{s.n}</b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
        <div className="preview-cols">
          <div className="preview-card">
            <h5><BookOpen size={14} /> Learnings</h5>
            {learnings.map((l) => (
              <div className="preview-row" key={l.title}>
                <span className="thumb"><Sparkles size={14} /></span>
                <div>
                  <p>{l.title}</p>
                  <em className={l.tag === 'Lesson learned' ? 'tag tag-blue' : 'tag tag-green'}>{l.tag}</em>
                </div>
              </div>
            ))}
          </div>
          <div className="preview-card">
            <h5><Users size={14} /> People</h5>
            {['Compliance Manager', 'Operational Excellence', 'Continuous Improvement'].map((r, i) => (
              <div className="preview-person" key={r}>
                <span className={`avatar a${i}`} />
                <div><p>{['Amina H.', 'David C.', 'James W.'][i]}</p><small>{r}</small></div>
              </div>
            ))}
            <h5 className="mt"><UsersRound size={14} /> Communities</h5>
            <div className="preview-pill">Operational Excellence</div>
            <div className="preview-pill">Knowledge Sharing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
