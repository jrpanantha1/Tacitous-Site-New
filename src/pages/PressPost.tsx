import { Link, useParams } from 'react-router';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { CtaBand } from '../components/Blocks';
import { formatDate, posts, readingMinutes } from '../content/press';
import NotFound from './NotFound';

export default function PressPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const download = post.download && (
    <aside className="card download-card">
      {post.download.cover && (
        <img src={post.download.cover} alt="" width={662} height={936} loading="lazy" decoding="async" />
      )}
      <div>
        <h2 className="h3">{post.title}</h2>
        <p>{post.download.size}</p>
        <a href={post.download.href} className="btn btn-primary" download>
          <Download size={18} aria-hidden="true" /> {post.download.label}
        </a>
      </div>
    </aside>
  );

  return (
    <>
      <section className="hero hero-page">
        <div className="container narrow">
          <Link to="/press" className="back"><ArrowLeft size={16} /> All articles</Link>
          <p className="eyebrow">{post.tags.join(' · ')}</p>
          <h1>{post.title}</h1>
          <p className="byline-light">
            By {post.authors.join(' and ')}
            {post.date && <> · <time dateTime={post.date}>{formatDate(post.date)}</time></>}
            {' · '}{readingMinutes(post)} min read
          </p>
        </div>
      </section>
      <section className="section">
        <article className="container narrow prose article">
          <p className="article-lead">{post.excerpt}</p>
          {download}
          {post.body.map((para, i) =>
            para.startsWith('## ') ? <h2 key={i}>{para.slice(3)}</h2> : <p key={i}>{para}</p>,
          )}
          {post.original && (
            <p><a href={post.original.url} className="text-link" rel="noopener noreferrer">{post.original.label} <ExternalLink size={15} /></a></p>
          )}
          {post.download && (
            <p><a href={post.download.href} className="text-link" download>{post.download.label} ({post.download.size}) <Download size={15} /></a></p>
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
