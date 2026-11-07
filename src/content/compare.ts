// Platform comparison data for /compare. Edit classifications, notes, sources and the review date here; the
// page and matrix render whatever this file says.
//
// Rule for every row: classify what each vendor supplies in its standard product and documents publicly, not what a
// developer could build on it. If the documentation does not establish a capability, use 'not-documented', never a
// negative claim.

export const reviewed = 'November 2026';

export type PlatformId = 'tacitous' | 'sharepoint' | 'dgroups' | 'lighthouse';

export type Platform = { id: PlatformId; name: string; short: string; category: string; focus: string };

export const platforms: Platform[] = [
  {
    id: 'tacitous',
    name: 'Tacitous',
    short: 'Tacitous',
    category: 'Purpose-built organisational Knowledge Management',
    focus: 'Capturing experience, connecting expertise, developing organisational learning, preserving critical knowledge and enabling reuse.',
  },
  {
    id: 'sharepoint',
    name: 'Microsoft SharePoint',
    short: 'SharePoint',
    category: 'Information management and enterprise content collaboration',
    focus: 'Intranets, team sites, document and content management, lists, granular permissions and search, within Microsoft 365.',
  },
  {
    id: 'dgroups',
    name: 'Dgroups / Groups.io',
    short: 'Dgroups',
    category: 'Email-based community communication',
    focus: 'Mailing lists and group discussions with moderation, searchable archives, hashtags and, on Premium, files, wiki, calendar, polls and databases.',
  },
  {
    id: 'lighthouse',
    name: 'KMS Lighthouse',
    short: 'KMS Lighthouse',
    category: 'Operational knowledge delivery and AI-assisted answers',
    focus: 'Contact centres, help centres, self-service, field service and onboarding, with instant answers, decision flows and service-platform integrations.',
  },
];

export type Status = 'built-in' | 'core' | 'available' | 'partial' | 'additional' | 'not-documented' | 'different-focus';

export const statuses: Record<Status, { label: string; meaning: string }> = {
  'built-in': { label: 'Built in', meaning: 'A purpose-built capability included in the product.' },
  core: { label: 'Core strength', meaning: 'What the product was primarily designed to do.' },
  available: { label: 'Available', meaning: 'A documented native capability, possibly on a particular plan or in a companion app from the same vendor.' },
  partial: { label: 'Partial', meaning: 'Some relevant functionality, but not the same complete KM method or workflow.' },
  additional: { label: 'Additional implementation', meaning: 'An equivalent needs custom development, integrations, additional applications or bespoke workflow configuration.' },
  'not-documented': { label: 'Not documented', meaning: 'The vendor’s published documentation does not establish an equivalent native capability.' },
  'different-focus': { label: 'Different focus', meaning: 'The product serves a different primary use case.' },
};

export type CategoryId = 'communities' | 'capture' | 'expertise' | 'activation' | 'governance' | 'infrastructure';

export const categories: { id: CategoryId; title: string; km: boolean }[] = [
  { id: 'communities', title: 'Communities and collaboration', km: true },
  { id: 'capture', title: 'Structured knowledge capture', km: true },
  { id: 'expertise', title: 'Expertise discovery', km: true },
  { id: 'activation', title: 'Knowledge activation and reuse', km: true },
  { id: 'governance', title: 'Governance and continuity', km: true },
  { id: 'infrastructure', title: 'Information and support infrastructure', km: false },
];

export type Cell = { status: Status; note?: string };

export type Row = {
  id: string;
  name: string;
  category: CategoryId;
  /** A specialised KM method rather than general infrastructure. Used by "Show only purpose-built KM capabilities". */
  km: boolean;
  description: string;
  why: string;
  link?: string;
  cells: Record<PlatformId, Cell>;
};

const nd = (note?: string): Cell => ({ status: 'not-documented', note });
const add = (note = 'An equivalent can be built with Lists, Power Apps and Power Automate, or added with third-party products.'): Cell => ({ status: 'additional', note });
const df = (note?: string): Cell => ({ status: 'different-focus', note });

export const rows: Row[] = [
  // A. Communities and collaboration
  {
    id: 'communities',
    name: 'Communities of Practice',
    category: 'communities',
    km: true,
    description: 'Public, managed and private communities with discussions, Learnings, announcements, a library, calendar, FAQs, links, polls and members.',
    why: 'Practitioners need a home where questions get answered and what they know stays findable, connected to the organisation’s expertise.',
    link: '/explore#communities',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: { status: 'partial', note: 'Sites can host a community’s content and pages. Community discussion in Microsoft 365 sits in Viva Engage, a separate product.' },
      dgroups: { status: 'core', note: 'Groups with moderation, announcement-only and restricted groups, and subgroups.' },
      lighthouse: nd(),
    },
  },
  {
    id: 'discussions',
    name: 'Community discussions',
    category: 'communities',
    km: false,
    description: 'Discussion topics and threads inside each community, organised under expertise categories, with helpful answers marked.',
    why: 'Conversation is where much tacit knowledge first appears. Linking it to an area of expertise brings in the people who know.',
    link: '/explore#communities',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: { status: 'partial', note: 'Community conversations in Microsoft 365 are provided by Viva Engage, a separate product.' },
      dgroups: { status: 'core', note: 'Email and web discussion with searchable archives, hashtags and muting.' },
      lighthouse: nd(),
    },
  },
  {
    id: 'polls',
    name: 'Polls',
    category: 'communities',
    km: false,
    description: 'Community polls with two to ten options and an optional closing date.',
    why: 'A quick way to test opinion in a community before a decision or a review.',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: { status: 'available', note: 'In Microsoft Forms, a separate Microsoft 365 app.' },
      dgroups: { status: 'available', note: 'A Premium group feature.' },
      lighthouse: nd(),
    },
  },
  {
    id: 'quizzes',
    name: 'Community quizzes',
    category: 'communities',
    km: true,
    description: 'Timed quizzes in a community, with points, one attempt, explanations after closing, leaderboards and a participation report. A quiz can link to a related Learning.',
    why: 'Turns shared knowledge into active learning and shows how well it has landed.',
    link: '/explore#community-quizzes',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: { status: 'available', note: 'Quizzes in Microsoft Forms, a separate Microsoft 365 app; not linked to Learnings or communities.' },
      dgroups: nd('Polls are documented; quizzes are not.'),
      lighthouse: nd(),
    },
  },

  // B. Structured knowledge capture
  {
    id: 'lessons-learned',
    name: 'Lessons Learned',
    category: 'capture',
    km: true,
    description: 'Learnings that record what happened, why it matters and what to do next time, with optional approval, ratings, feedback and version history.',
    why: 'Stops teams repeating mistakes, because the lesson is reviewed, findable and linked to the people who know the subject.',
    link: '/explore#lessons-learned',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: add(),
      dgroups: nd('A wiki and databases (Premium) can hold notes, but no Lessons Learned workflow is documented.'),
      lighthouse: nd('Governed knowledge content for service teams; a Lessons Learned method is not documented.'),
    },
  },
  {
    id: 'best-practices',
    name: 'Best Practices',
    category: 'capture',
    km: true,
    description: 'The second Learning type, with the same structure, review and reuse tracking as Lessons Learned.',
    why: 'Spreads proven approaches across teams and sites instead of leaving them with one team.',
    link: '/explore#lessons-learned',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'aar',
    name: 'After Action Reviews',
    category: 'capture',
    km: true,
    description: 'A structured review: what was expected, what actually happened, the results, what went well and what did not and why, what to repeat and what to do differently, with owned and dated actions.',
    why: 'Completed work informs the next piece of work, instead of the review ending as an unstructured meeting note.',
    link: '/explore#km-forms',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'knowledge-cafe',
    name: 'Knowledge Cafés',
    category: 'capture',
    km: true,
    description: 'Records a facilitated Knowledge Café: facilitator, attendees, conversation points, critical issues and closing questions, tagged to expertise categories.',
    why: 'Insights from a group conversation are kept and connected to the subject, rather than lost when the session ends.',
    link: '/explore#km-forms',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'ckr',
    name: 'Critical Knowledge Retention',
    category: 'capture',
    km: true,
    description: 'Knowledge Retention and Transfer records guide a structured conversation, from a Role Introduction and Conversation Points to a Closing Question with advice for a successor.',
    why: 'Preserves expertise at risk of being lost through retirement, turnover or organisational change.',
    link: '/solutions/critical-knowledge-retention',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'decisions',
    name: 'Decisions and Rationale',
    category: 'capture',
    km: true,
    description: 'Records the question, what was decided, the rationale, alternatives considered, assumptions, risks, where it applies and when to review it.',
    why: 'People who inherit a decision can see why it was made, not only what was decided.',
    link: '/explore#km-forms',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'ideas',
    name: 'Innovation and Ideas',
    category: 'capture',
    km: true,
    description: 'Improvement ideas with the expected benefit, member ratings and comments, and verified savings recorded separately from estimates.',
    why: 'Good ideas are recorded, rated and followed through with evidence of benefit, instead of being lost in a workshop note.',
    link: '/explore#km-forms',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: add(),
      dgroups: { status: 'partial', note: 'Ideas can be discussed or kept in a wiki or database (Premium); no ideas workflow is documented.' },
      lighthouse: nd(),
    },
  },
  {
    id: 'promote',
    name: 'Promote a discussion to a Learning',
    category: 'capture',
    km: true,
    description: 'The discussion author or a community manager selects contributions from a discussion and turns them into a Lesson Learned or Best Practice that links back to its source.',
    why: 'Valuable answers outlive the thread and become structured, reviewed knowledge.',
    link: '/explore#promote-to-learning',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd('Discussion archives are searchable, but turning them into structured records is not documented.'), lighthouse: nd() },
  },

  // C. Expertise discovery
  {
    id: 'expertise-map',
    name: 'Expertise Map',
    category: 'expertise',
    km: true,
    description: 'Governed expertise categories, each with Designated Experts, showing the people, Learnings, records, communities and library resources connected to it.',
    why: 'Find the right expert or existing knowledge on a subject in one place, instead of asking around.',
    link: '/explore#expertise-map',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add('A governed expertise directory with designated experts needs to be built or added.'), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'constellation',
    name: 'Constellations',
    category: 'expertise',
    km: true,
    description: 'An interactive view of every expertise category and the experts and knowledge connected to it.',
    why: 'Shows where the organisation’s expertise sits, and where it is thin, at a glance.',
    link: '/explore#constellation',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add('An equivalent visualisation needs to be built or added.'), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'pathway',
    name: 'Pathway to Expertise',
    category: 'expertise',
    km: true,
    description: 'Start from a question, a person or a subject and follow the links to Designated Experts, Learnings, communities and library resources.',
    why: 'People reach the knowledge and the colleagues they need through the organisation’s own expertise structure.',
    link: '/explore#how-it-works',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add('An equivalent route through governed expertise needs to be built.'), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'profiles',
    name: 'People profiles with expertise',
    category: 'expertise',
    km: false,
    description: 'Profiles showing designated expertise, skills, endorsements, Ask Me About topics and the person’s contributions.',
    why: 'Connects each person to the knowledge they have contributed and the subjects they can help with.',
    link: '/explore#expert-profiles',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: add('Profiles linked to governed expertise categories and KM contributions need to be built or added.'),
      dgroups: nd('Member management is documented; expertise profiles are not.'),
      lighthouse: nd(),
    },
  },

  // D. Knowledge activation and reuse
  {
    id: 'digest',
    name: 'Community Knowledge Digest',
    category: 'activation',
    km: true,
    description: 'A scheduled email that selects recent approved Learnings, discussions, quizzes and polls for each member, with links back to the original knowledge.',
    why: 'Brings captured knowledge back into circulation and encourages people to return and take part.',
    link: '/explore#knowledge-digest',
    cells: {
      tacitous: { status: 'available', note: 'An optional capability, switched on for each organisation.' },
      sharepoint: add('A permission-aware digest of Learnings and community activity needs to be built.'),
      dgroups: { status: 'partial', note: 'Email digests and daily summaries of group messages, rather than a selection of structured knowledge.' },
      lighthouse: nd(),
    },
  },
  {
    id: 'reuse',
    name: 'Knowledge reuse tracking',
    category: 'activation',
    km: true,
    description: 'Members record where they applied a Learning and what happened, and reviewers can validate the reported benefits.',
    why: 'Shows which knowledge is actually used, and the value it creates.',
    link: '/explore#knowledge-reuse',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'related',
    name: 'Related knowledge in discussions',
    category: 'activation',
    km: true,
    description: 'Discussions show related Learnings and people who may be able to help, based on expertise categories and skills, respecting what each person can see.',
    why: 'Connects a question to existing answers and the people who know while it is being asked.',
    link: '/explore#related-knowledge',
    cells: { tacitous: { status: 'built-in' }, sharepoint: add(), dgroups: nd(), lighthouse: nd() },
  },

  // E. Governance and continuity
  {
    id: 'exit-package',
    name: 'Data / Exit Package',
    category: 'governance',
    km: true,
    description: 'A tenant-level package of chosen knowledge domains in documented JSON and CSV files with stable identifiers and checksums, approved and generated by the Platform Administrator.',
    why: 'Your organisation’s knowledge remains yours, in a structured form other systems can read.',
    link: '/explore#data-export',
    cells: { tacitous: { status: 'built-in' }, sharepoint: nd('Not documented as a Knowledge Management package.'), dgroups: nd(), lighthouse: nd() },
  },
  {
    id: 'permissions',
    name: 'Access permissions',
    category: 'governance',
    km: false,
    description: 'Each organisation has its own tenant. Public, managed and private communities, roles and per-person checks govern who sees what, including in digests and the Knowledge API.',
    why: 'Knowledge is shared as widely as it should be, and no further.',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: { status: 'core', note: 'Granular permission settings at site, list and item level.' },
      dgroups: { status: 'available', note: 'Restricted and moderated groups, with owner and moderator roles.' },
      lighthouse: nd(),
    },
  },
  {
    id: 'audit',
    name: 'Audit and activity records',
    category: 'governance',
    km: false,
    description: 'Administrative actions, profile privacy and consent changes, user access and Knowledge API calls are recorded.',
    why: 'Administrators can show who changed what, and when.',
    cells: {
      tacitous: { status: 'built-in' },
      sharepoint: { status: 'available', note: 'SharePoint activity is recorded in the Microsoft Purview audit log.' },
      dgroups: { status: 'available', note: 'Activity log and email delivery tracking.' },
      lighthouse: nd(),
    },
  },

  // Information and support infrastructure: competitor strengths stay visible.
  {
    id: 'documents',
    name: 'Enterprise document and content management',
    category: 'infrastructure',
    km: false,
    description: 'Storing, organising and managing documents and content across the organisation, including intranets.',
    why: 'Most organisations already have this. Tacitous works alongside it rather than replacing it.',
    cells: {
      tacitous: df('Community libraries hold files and links; Tacitous is not a document or records management system.'),
      sharepoint: { status: 'core', note: 'Intranets, team sites and content management.' },
      dgroups: { status: 'available', note: 'Files and photos on Premium.' },
      lighthouse: df(),
    },
  },
  {
    id: 'email-lists',
    name: 'Email discussion lists',
    category: 'infrastructure',
    km: false,
    description: 'Taking part in group discussion by email, with digests and moderation.',
    why: 'Suits dispersed networks that work mainly from their inbox.',
    cells: {
      tacitous: df('Members receive notifications and digests, but discussion happens in communities, not by email.'),
      sharepoint: df(),
      dgroups: { status: 'core' },
      lighthouse: df(),
    },
  },
  {
    id: 'service-delivery',
    name: 'Contact-centre knowledge delivery',
    category: 'infrastructure',
    km: false,
    description: 'Real-time answers, decision flows and guidance for agents, help centres and self-service, inside service platforms.',
    why: 'Serves customer and employee support at the moment of an enquiry.',
    cells: {
      tacitous: df(),
      sharepoint: df(),
      dgroups: df(),
      lighthouse: { status: 'core', note: 'Call centre, help centre, self-service and field service, with integrations such as Salesforce, Zendesk and Microsoft Teams.' },
    },
  },
  {
    id: 'ai-answers',
    name: 'AI-generated answers',
    category: 'infrastructure',
    km: false,
    description: 'Answering questions in natural language using AI over the organisation’s content.',
    why: 'AI answers are only as reliable as the validated knowledge behind them.',
    cells: {
      tacitous: df('Tacitous builds the validated, attributed knowledge that AI depends on. It does not offer AI-generated answers.'),
      sharepoint: { status: 'available', note: 'Through Microsoft 365 Copilot and agents, licensed separately.' },
      dgroups: nd(),
      lighthouse: { status: 'core', note: 'Instant answers in natural language, with an Azure OpenAI integration.' },
    },
  },
];

export type Source = { label: string; url: string };

export const sources: Record<Exclude<PlatformId, 'tacitous'>, Source[]> = {
  sharepoint: [
    { label: 'SharePoint collaboration (Microsoft)', url: 'https://www.microsoft.com/microsoft-365/sharepoint/collaboration' },
    { label: 'Create a quiz with Microsoft Forms', url: 'https://support.microsoft.com/en-us/Forms/create-a-quiz-with-microsoft-forms' },
    { label: 'Integrate SharePoint Online into Power Apps', url: 'https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/customize-list-form' },
    { label: 'Microsoft services that support auditing', url: 'https://learn.microsoft.com/en-ca/purview/audit-supported-services' },
    { label: 'Microsoft Viva Engage features', url: 'https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-viva-engage-features' },
  ],
  dgroups: [
    { label: 'Dgroups features', url: 'https://dgroups.io/static/features' },
    { label: 'Dgroups pricing', url: 'https://dgroups.io/static/pricing' },
    { label: 'About Dgroups', url: 'https://dgroups.io/g/dgroups' },
    { label: 'Groups.io: about digests', url: 'https://groups.io/helpcenter/single/topicsmsgs/msgs_digests.htm' },
  ],
  lighthouse: [
    { label: 'About KMS Lighthouse', url: 'https://kmslh.com/about-us/' },
    { label: 'KMS Lighthouse for Microsoft Teams (AppSource)', url: 'https://appsource.microsoft.com/product/office/WA200007506' },
  ],
};
