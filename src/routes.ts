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
    description: 'Tacitous Next brings together the Expertise Map, Communities of Practice, expert profiles, lessons learned, knowledge forms and knowledge libraries in one governed knowledge hub.',
  },
  '/explore': {
    title: 'Explore features | Tacitous Next',
    description: 'Explore Tacitous Next interactively: real screens of the Expertise Map, Constellation, Lessons Learned, Promote to Learning, Knowledge Retention and Transfer, communities and KM forms.',
  },
  '/km-blueprint': {
    title: 'KM Blueprint | Tacitous',
    description: 'A practical blueprint for making Knowledge Management work, from methodology to the tools that put it into practice.',
  },
  '/solutions/critical-knowledge-retention': {
    title: 'Critical Knowledge Retention | Tacitous',
    description: 'When experienced people leave, their knowledge should not leave with them. Identify knowledge at risk, capture experience and keep it in use.',
  },
  '/about': {
    title: 'About Tacitous | Built by people who understand Knowledge Management',
    description: 'Tacitous brings together Knowledge Management methodology, practical experience and purpose-built technology to help organisations retain critical knowledge.',
  },
  '/services': {
    title: 'What we do | Tacitous',
    description: 'From Knowledge Management strategy to practical implementation: KM consultancy, Critical Knowledge Retention, training and bespoke development.',
  },
  '/sectors': {
    title: 'Sectors | Tacitous',
    description: 'How Tacitous supports energy, government, nuclear and high-risk industries, engineering, NGOs and professional associations to retain and share critical knowledge.',
  },
  '/partners': {
    title: 'Partners | Tacitous',
    description: 'Tacitous works with Knoco International, combining Knowledge Management methodology and training with the Tacitous Next platform.',
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
