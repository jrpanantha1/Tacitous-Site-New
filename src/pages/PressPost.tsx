import { Link, useParams } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { CtaBand } from '../components/Blocks';
import { posts } from '../content/press';
import NotFound from './NotFound';

export default function PressPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  return (
    <>
      <section className="hero hero-page">
        <div className="container narrow">
          <Link to="/press" className="back"><ArrowLeft size={16} /> All articles</Link>
          <p className="eyebrow">{post.tags.join(' · ')}</p>
          <h1>{post.title}</h1>
          <p className="byline-light">By {post.authors.join(' and ')}{post.date ? ` · ${post.date}` : ''}</p>
        </div>
      </section>
      <section className="section">
        <article className="container narrow prose article">
          <p className="article-lead">{post.excerpt}</p>
          {post.body.map((para, i) =>
            para.startsWith('## ') ? <h2 key={i}>{para.slice(3)}</h2> : <p key={i}>{para}</p>,
          )}
          {post.external && (
            <p><a href={post.external.url} className="text-link">{post.external.label} <ExternalLink size={15} /></a></p>
          )}
        </article>
      </section>
      <CtaBand />
    </>
  );
}
