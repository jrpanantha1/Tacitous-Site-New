import { posts } from './content/press';

export type Meta = { title: string; description: string };

const base: Record<string, Meta> = {
  '/': {
    title: 'Tacitous | Knowledge management that keeps expertise in your organisation',
    description: 'Capture what your people already know, before it walks out the door. Communities of Practice, lessons learned and a living directory of expertise.',
  },
  '/platform': {
    title: 'Knowledge Management platform: Tacitous Next | Tacitous',
    description: 'The Tacitous Next Knowledge & Expertise Hub: Expertise Map, Communities of Practice, lessons learned, KM forms, integrations and privacy tools.',
  },
  '/explore': {
    title: 'Explore Tacitous Next features | Tacitous',
    description: 'Explore Tacitous Next with real screens: the Expertise Map, lessons learned, knowledge retention, community quizzes, privacy tools and integrations.',
  },
  '/compare': {
    title: 'Knowledge Management platform comparison: Tacitous vs SharePoint, Dgroups | Tacitous',
    description: 'Compare Knowledge Management software: what Tacitous, Microsoft SharePoint and Dgroups include as standard, from Lessons Learned to After Action Reviews.',
  },
  '/km-blueprint': {
    title: 'KM Blueprint: a proven Knowledge Management method | Tacitous',
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
    title: 'Knowledge Management consultancy and services | Tacitous',
    description: 'From Knowledge Management strategy to practical implementation: KM consultancy, Critical Knowledge Retention, training and bespoke development.',
  },
  '/sectors': {
    title: 'Knowledge Management by sector | Tacitous',
    description: 'How Tacitous helps energy, government, nuclear, engineering, NGOs and professional associations retain and share critical knowledge.',
  },
  '/partners': {
    title: 'Partners: Knoco International and NKM for You | Tacitous',
    description: 'Tacitous works with Knoco International and NKM for You, combining Knowledge Management methodology, training and consultancy with the Tacitous Next platform.',
  },
  '/organisations': {
    title: 'Organisations using Tacitous | Tacitous',
    description: 'Foundations, networks, communities and professional organisations that have used Tacitous Next or worked with Tacitous consultancy.',
  },
  '/press': {
    title: 'Press and Knowledge Management insights | Tacitous',
    description: 'News, perspectives and announcements from Tacitous on knowledge management, AI and institutional intelligence.',
  },
  '/pricing': {
    title: 'Pricing: Starter, Team, Growth and Organisation plans | Tacitous',
    description: 'Tacitous Next plans from USD 35 a month for one community and 20 users. Fair use applies.',
  },
  '/contact': {
    title: 'Contact Tacitous | Book a Knowledge Management demo',
    description: 'Talk to Tacitous about Knowledge Management, a demonstration of Tacitous Next or our KM Blueprint. Based in the UK.',
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
