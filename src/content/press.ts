// Press articles migrated from the WordPress blog.
// TODO: paste each article's full text into `body` from a WordPress export
// (Tools > Export > Posts) and add the original publish date.
export type PressPost = {
  slug: string;
  title: string;
  excerpt: string;
  authors: string[];
  tags: string[];
  date?: string;
  image?: string;
  body: string[];
  external?: { label: string; url: string };
};

export const posts: PressPost[] = [
  {
    slug: 'tacitous-knoco-international-strategic-partnership',
    title: 'Tacitous announces strategic partnership with Knoco International',
    excerpt:
      'Knoco brings world-class KM expertise, methodology and training. Tacitous brings the digital platform and implementation approach.',
    authors: ['Jordan Richards'],
    tags: ['Partnership'],
    body: [
      'Tacitous has entered a strategic partnership with Knoco International, the Knowledge Management consulting and training organisation with more than 25 years of experience.',
      'Knoco contributes KM expertise, methodology, advisory and training experience. Tacitous contributes the digital platform, tools and implementation capability. Together we help organisations retain expertise, share lessons learned and build the knowledge foundations they need to be ready for AI.',
      '“Knoco brings world-class KM expertise,” said Jordan Richards, Founder of Tacitous.',
    ],
    external: { label: 'Visit Knoco International', url: 'https://knoco.com/' },
  },
  {
    slug: 'why-knowledge-needs-a-trust-layer-in-the-age-of-ai',
    title: 'Why knowledge needs a trust layer in the age of AI',
    excerpt:
      'AI can draft reports in seconds. The harder question is whether the knowledge behind them can still be trusted.',
    authors: ['Jordan Richards'],
    tags: ['AI', 'Critical knowledge'],
    body: [
      'AI makes it faster than ever to produce reports, summaries and insights. It also creates a quieter institutional risk: output that looks authoritative but has lost its connection to real expertise.',
      'Knowledge used to be tied to the people who held it, the context they worked in and the experience they had built up. We propose a knowledge trust layer that keeps that link, connecting knowledge to expertise, provenance and institutional learning, whether a person or a machine produced it.',
      'AI is only as reliable as the knowledge environment around it. Fragmented or undocumented knowledge does not disappear when AI arrives; it gets amplified. The question for organisations is not whether to adopt AI, but whether the knowledge guiding it is traceable and trustworthy.',
    ],
  },
  {
    slug: 'the-hidden-wealth-of-nations-a-tacitous-perspective',
    title: 'The hidden wealth of nations: a Tacitous perspective',
    excerpt: 'A nation’s real strength lies in what it knows and remembers, not only in what it builds.',
    authors: ['Jordan Richards'],
    tags: ['Public sector'],
    body: [
      'We usually measure national strength by infrastructure, industry or defence. We argue that the deeper asset is what a nation knows and remembers.',
      'Governments suffer from a kind of national amnesia. Experience leaves with retiring staff or stays locked in departmental silos, and costly mistakes are repeated.',
      'Treating knowledge as a public utility, with systems that connect agencies and make sharing easy, speeds up innovation and economic growth. The nations that succeed will be those that learn to retain and reuse what they know.',
    ],
  },
  {
    slug: 'ai-is-making-us-efficient',
    title: 'AI is making us efficient, and forgetful',
    excerpt: 'When reasoning disappears into code, organisations keep running efficiently long after the world has changed.',
    authors: ['Jordan Richards', 'Waseem Khan'],
    tags: ['AI', 'Healthcare'],
    body: [
      'Automation is very good at repeating what it was told. It is much worse at remembering why. When the reasoning behind a process disappears into code, institutional knowledge quietly erodes.',
      'In a hospital, an automated workflow can keep running smoothly after clinical conditions have changed, because the expert judgement that shaped it was never captured.',
      'Knowledge management is the layer that preserves the why behind a process, with feedback loops that let automated systems improve over time. Automation and institutional intelligence work best together: the goal is a healthcare enterprise that is fully connected, not just fully automated.',
    ],
  },
  {
    slug: 'when-nations-forget',
    title: 'When nations forget: why knowledge must become a national asset',
    excerpt: 'Knowledge is a strategic national asset, not just an organisational resource.',
    authors: ['Jordan Richards'],
    tags: ['Public sector'],
    body: [
      'Knowledge is a strategic national asset. Together with Kaseane, we are exploring how nations can use knowledge management to build resilience, innovation and institutional memory across the public and private sectors.',
      'Knowledge systems belong on national development agendas, so that expertise and experience are preserved, shared and usable across generations.',
    ],
  },
];
