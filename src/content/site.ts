export const links = {
  bookCall: 'https://zcal.co/tacitous/',
  app: 'https://next.tacitous.com/',
  email: 'info@tacitous.com',
  linkedin: 'https://www.linkedin.com/company/tacitous',
  x: 'https://twitter.com/TacitousKM',
  facebook: 'https://www.facebook.com/Tacitous',
  knoco: 'https://knoco.com/',
  whistle: 'https://apps.iblowthewhistle.com',
  video: 'https://www.youtube.com/watch?v=LVfRJYdvgQ0',
};

export type NavItem = { label: string; to: string; children?: { label: string; to: string; blurb: string }[] };

export const nav: NavItem[] = [
  {
    label: 'Product',
    to: '/platform',
    children: [
      { label: 'Platform', to: '/platform', blurb: 'Tacitous Next, the Knowledge & Expertise Hub' },
      { label: 'KM Blueprint', to: '/km-blueprint', blurb: 'The methodology behind every implementation' },
      { label: 'Knowledge Management tools', to: '/platform#tools', blurb: 'Forms, lessons learned, libraries and more' },
      { label: 'Expertise Map', to: '/platform#expertise-map', blurb: 'See who knows what across your organisation' },
    ],
  },
  {
    label: 'What we do',
    to: '/services',
    children: [
      { label: 'KM consultancy', to: '/services#consultancy', blurb: 'Strategy, governance and adoption support' },
      { label: 'Critical Knowledge Retention', to: '/solutions/critical-knowledge-retention', blurb: 'Keep expertise when people move on' },
      { label: 'Bespoke development', to: '/services#development', blurb: 'Integrations and tailored solutions' },
      { label: 'Sectors', to: '/sectors', blurb: 'Energy, government, nuclear, NGOs and more' },
    ],
  },
  {
    label: 'Company',
    to: '/about',
    children: [
      { label: 'About Tacitous', to: '/about', blurb: 'Our story, mission and approach' },
      { label: 'Partners', to: '/partners', blurb: 'Knoco International' },
      { label: 'Contact', to: '/contact', blurb: 'Talk to our team' },
    ],
  },
  { label: 'Press', to: '/press' },
];

export const approach = [
  {
    title: 'A practical Blueprint',
    body: 'A structured approach to Knowledge Management that gets you to value faster, with less trial and error.',
  },
  {
    title: 'Tailored to you',
    body: 'We adapt the platform and the Blueprint to your organisation, your culture and the way your people already work.',
  },
  {
    title: 'Focus on people',
    body: 'Your people capture lessons learned, retain critical knowledge, share best practice and grow Communities of Practice.',
  },
];

// Every module links to the place on the site that explains it in more depth.
export const modules = [
  { icon: 'users', title: 'Communities of Practice', to: '/platform#communities', body: 'Public, managed and private spaces with discussions, announcements, libraries, calendars and FAQs.' },
  { icon: 'book', title: 'Lessons learned, reusable', to: '/platform#lessons-learned', body: 'Capture lessons and best practices, approve them and organise them by expertise so they are found again.' },
  { icon: 'search', title: 'Expert profiles', to: '/platform#expert-profiles', body: 'Find colleagues by their skills, designated expertise and the topics they are happy to be asked about.' },
  { icon: 'map', title: 'Expertise Map', to: '/platform#expertise-map', body: 'See how people, communities and organisations connect to each governed area of expertise.' },
  { icon: 'forms', title: 'Knowledge forms', to: '/platform#knowledge-forms', body: 'After Action Reviews, Peer Assists, decision records and more, captured in a consistent structure.' },
  { icon: 'library', title: 'Knowledge library', to: '/platform#knowledge-library', body: 'Approved learnings and resources gathered in one place, alongside the communities that use them.' },
  { icon: 'retention', title: 'Critical knowledge retention', to: '/solutions/critical-knowledge-retention', body: 'Identify knowledge at risk and capture it from the people who hold it before they move on.' },
  { icon: 'shield', title: 'Governed access', to: '/platform#deployment', body: 'Tenant-based access, membership approvals and sign-in with Microsoft, Google or an email link.' },
] as const;

export const benefits = [
  {
    title: 'Better decisions',
    body: 'Give every team access to the organisation’s collective experience at the moment a decision is made.',
  },
  {
    title: 'Answers in minutes',
    body: 'Find the knowledge, or the person who holds it, without hunting through inboxes and shared drives.',
  },
  {
    title: 'Less cost and rework',
    body: 'Turn repeated procedures into policies, SOPs and templates so nobody solves the same problem twice.',
  },
];

export const circle = [
  { title: 'People', body: 'Know your colleagues by role, skills, experience and interests, and connect them with like-minded peers.' },
  { title: 'Conversations', body: 'People meet, build trust and have work-related conversations.' },
  { title: 'Collaborate', body: 'Conversations become collaboration: solving a problem or improving an idea together.' },
  { title: 'Communities', body: 'Communities form around critical business areas, with experts on hand to guide and govern.' },
  { title: 'Learnings', body: 'Lessons learned and best practices become visible, building momentum and consensus.' },
  { title: 'Innovation', body: 'Learnings drive continuous improvement and innovation, shared back to keep everyone aligned.' },
];

export const faqs = [
  {
    q: 'Can Tacitous be hosted on-premise?',
    a: 'Tacitous Next is delivered as a cloud service. If your security requirements call for private or on-premise hosting, talk to us about the options.',
  },
  {
    q: 'We already have a platform. Can you help us implement it?',
    a: 'Yes. We help through training, mentoring and KM champion support, whatever technology you use.',
  },
  {
    q: 'What else do we need to start using Tacitous?',
    a: 'Your people can sign in with their Microsoft, Google or email accounts, so you can start straight away. We can help with implementation and adoption.',
  },
  {
    q: 'Can you provide KM consultancy?',
    a: 'Yes, including strategy, mentoring, training and KM champion support, together with our partner Knoco International.',
  },
  {
    q: 'Can we licence your KM Blueprint?',
    a: 'Yes. We are open to collaboration and licensing arrangements.',
  },
  {
    q: 'Our organisation works in many languages. Can you help?',
    a: 'Yes. Tell us which languages your teams work in and we will discuss how best to support them.',
  },
  {
    q: 'Can Tacitous work with our other systems?',
    a: 'The Expertise Map can be exported as a semantic knowledge graph, for example in Turtle format, for use in other tools. Talk to us about any other integrations you need.',
  },
  {
    q: 'Can you develop a KM system for us?',
    a: 'Yes. We can help with your organisational structure, build on your existing on-premise skills and mentor your staff.',
  },
  {
    q: 'How is Tacitous priced?',
    a: 'Pricing starts from a 500 user band, including implementation and one year of initial consultancy, and scales with your organisation.',
  },
];
