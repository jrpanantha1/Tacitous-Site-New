export const links = {
  bookCall: 'https://zcal.co/tacitous/',
  // TODO: confirm the new app's sign-in URL.
  app: 'https://app.tacitous.com/',
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
      { label: 'Platform', to: '/platform', blurb: 'Communities, learnings and expertise in one hub' },
      { label: 'KM Blueprint', to: '/blueprint', blurb: 'The proven model behind every rollout' },
      { label: 'Sectors', to: '/sectors', blurb: 'Energy, public sector and complex projects' },
    ],
  },
  {
    label: 'What we do',
    to: '/services',
    children: [
      { label: 'Consultancy', to: '/services#consultancy', blurb: 'KM strategy, governance and champions' },
      { label: 'Development', to: '/services#development', blurb: 'Integrations, on-premise and bespoke builds' },
      { label: 'Training', to: '/services#training', blurb: 'Capability building with Knoco International' },
    ],
  },
  {
    label: 'Company',
    to: '/partners',
    children: [
      { label: 'About us', to: '/#about', blurb: 'Twenty years of knowledge management delivery' },
      { label: 'Partners', to: '/partners', blurb: 'Knoco International and I Blow The Whistle' },
      { label: 'Contact', to: '/contact', blurb: 'Start the conversation' },
    ],
  },
  { label: 'Press', to: '/press' },
];

export const approach = [
  {
    title: 'Proven Blueprint',
    body: 'An industry-tested approach to Knowledge Management that gets you to value faster, with less trial and error.',
  },
  {
    title: 'Custom solutions',
    body: 'We adapt the platform and the Blueprint to your organisation, your culture and the systems you already run.',
  },
  {
    title: 'Focus on people',
    body: 'Your people capture lessons learned, retain critical knowledge, share best practice and grow Communities of Practice.',
  },
];

export const modules = [
  { icon: 'users', title: 'Communities with purpose', body: 'Public, managed and private spaces for collaboration across your organisation.' },
  { icon: 'book', title: 'Lessons learned, reusable', body: 'Capture lessons and best practices, organised by expertise and ready to find again.' },
  { icon: 'search', title: 'Expertise you can find', body: 'Discover colleagues through their skills, interests and the topics they are happy to discuss.' },
  { icon: 'map', title: 'Expertise map', body: 'See where critical knowledge sits, who holds it and where you are exposed to loss.' },
  { icon: 'forms', title: 'Knowledge forms', body: 'After Action Reviews, retention interviews and innovation ideas, structured and governed.' },
  { icon: 'library', title: 'Knowledge library', body: 'Documents, FAQs and validated answers with metadata and links to your existing storage.' },
  { icon: 'languages', title: 'AI translation', body: 'Lessons and community content translated into dozens of languages, including Arabic, Hindi and Urdu.' },
  { icon: 'plug', title: 'Open APIs', body: 'Lessons learned and best practices available to your internal systems and mobile apps.' },
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
    q: 'Do you have a KM solution for on-premise?',
    a: 'Yes. The Tacitous Blueprint can be deployed on-premise or in the cloud, depending on your requirements and security posture.',
  },
  {
    q: 'We already have a platform. Can you help us implement it?',
    a: 'Yes. We help through training, mentoring and KM champion support, whatever technology you use.',
  },
  {
    q: 'What else do we need to start using Tacitous?',
    a: 'Nothing. The cloud platform can be used straight away, and we can help you with implementation and adoption.',
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
    a: 'Yes. Tacitous uses AI machine translation for lessons learned and community content, so knowledge reaches everyone.',
  },
  {
    q: 'How extensible is the platform?',
    a: 'Lessons learned, best practices and other knowledge are available through APIs for your internal systems and mobile devices.',
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
