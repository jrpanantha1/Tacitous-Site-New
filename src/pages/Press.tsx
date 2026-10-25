import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/Blocks';
import { categories, formatDate, posts, readingMinutes } from '../content/press';

export default function Press() {
  const [category, setCategory] = useState<string | null>(null);
  const shown = category ? posts.filter((p) => p.tags.includes(category)) : posts;

  return (
    <>
      <PageHero eyebrow="Press" title="News and perspectives">
        <p>Announcements and thinking from Tacitous on Knowledge Management, AI and institutional intelligence.</p>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="filter" role="group" aria-label="Filter articles by category">
            <button type="button" aria-pressed={category === null} onClick={() => setCategory(null)}>All</button>
            {categories.map((c) => (
              <button type="button" key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>
            ))}
          </div>
          <div className="grid three" aria-live="polite">
            {shown.map((p) => (
              <Link to={`/press/${p.slug}`} className="card post-card" key={p.slug}>
                <span className="post-tags">{p.tags.map((t) => <span className="tag tag-blue" key={t}>{t}</span>)}</span>
                <h2 className="h3">{p.title}</h2>
                <p>{p.excerpt}</p>
                <span className="byline">
                  {p.authors.join(' and ')}
                  {p.date && <> · <time dateTime={p.date}>{formatDate(p.date)}</time></>}
                  {' · '}{readingMinutes(p)} min read
                </span>
                <span className="text-link">Read article <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
