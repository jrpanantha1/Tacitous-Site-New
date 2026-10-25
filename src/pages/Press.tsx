import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/Blocks';
import { posts } from '../content/press';

export default function Press() {
  return (
    <>
      <PageHero eyebrow="Press" title="News and perspectives">
        <p>Announcements and thinking from Tacitous on knowledge management, AI and institutional intelligence.</p>
      </PageHero>
      <section className="section">
        <div className="container grid three">
          {posts.map((p) => (
            <Link to={`/press/${p.slug}`} className="card post-card" key={p.slug}>
              <span className="tag tag-blue">{p.tags[0]}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="byline">{p.authors.join(' and ')}</span>
              <span className="text-link">Read article <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
