import { posts } from './content/press';

export type Meta = { title: string; description: string };

const base: Record<string, Meta> = {
  '/': {
    title: 'Tacitous | Knowledge management that keeps expertise in your organisation',
    description:
      'Capture what your people already know, before it walks out the door. Communities of Practice, lessons learned and a living directory of expertise in one platform.',
  },
  '/platform': {
    title: 'Platform | Tacitous',
    description: 'Communities, lessons learned, expertise mapping, knowledge forms and AI translation in one secure knowledge hub, in the cloud or on-premise.',
  },
  '/blueprint': {
    title: 'KM Blueprint | Tacitous',
    description: 'The Tacitous Knowledge Management Blueprint: a proven, six-step virtuous circle of knowledge built on two decades of delivery.',
  },
  '/services': {
    title: 'Consultancy and development | Tacitous',
    description: 'KM strategy, governance, training and bespoke development, delivered with our strategic partner Knoco International.',
  },
  '/sectors': {
    title: 'Sectors | Tacitous',
    description: 'How Tacitous helps energy projects and governments retain critical knowledge, reduce rework and build institutional intelligence.',
  },
  '/partners': {
    title: 'Partners | Tacitous',
    description: 'Tacitous is a strategic partner of Knoco International and a member of the I Blow The Whistle platform.',
  },
  '/press': {
    title: 'Press | Tacitous',
    description: 'News, perspectives and announcements from Tacitous on knowledge management, AI and institutional intelligence.',
  },
  '/contact': {
    title: 'Contact | Tacitous',
    description: 'Talk to Tacitous about knowledge management, the platform or our KM Blueprint.',
  },
  '/privacy': { title: 'Privacy and GDPR | Tacitous', description: 'How Tacitous collects, uses and protects your personal data.' },
  '/terms': { title: 'Terms of service | Tacitous', description: 'Terms of service for the Tacitous website.' },
};

export const routeMeta: Record<string, Meta> = {
  ...base,
  ...Object.fromEntries(posts.map((p) => [`/press/${p.slug}`, { title: `${p.title} | Tacitous`, description: p.excerpt }])),
};

export const prerenderPaths = Object.keys(routeMeta);

export function metaFor(pathname: string): Meta {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routeMeta[clean] ?? { title: 'Page not found | Tacitous', description: base['/'].description };
}
