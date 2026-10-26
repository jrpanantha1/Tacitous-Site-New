// Tacitous Next capabilities, described from the application source and captured from a local build
// running fictional demonstration data. Keep descriptions to behaviour that exists in the product.

export type Screen = { file: string; w: number; h: number; alt: string };

export type GroupId = 'expertise' | 'learning' | 'retention' | 'collaboration' | 'library';

export type Feature = {
  id: string;
  name: string;
  group: GroupId;
  summary: string;
  value: string;
  details: string[];
  screen: Screen;
  related: string[];
  journey?: string;
};

export const groups: { id: GroupId; title: string; purpose: string }[] = [
  { id: 'expertise', title: 'Pathway to Expertise', purpose: 'A pathway to the knowledge and people you need.' },
  { id: 'learning', title: 'Learn from experience', purpose: 'Turn experience into reviewed, reusable Lessons Learned and Best Practices.' },
  { id: 'retention', title: 'Retain critical knowledge', purpose: 'Capture judgement and experience before people change roles or leave.' },
  { id: 'collaboration', title: 'Collaborate in communities', purpose: 'Give practitioners a place to ask, answer and build shared knowledge.' },
  { id: 'library', title: 'Organise and reuse', purpose: 'Keep trusted resources and structured records in one governed place.' },
];

const s = (file: string, alt: string, w = 1440, h = 900): Screen => ({ file, w, h, alt });

export const features: Feature[] = [
  {
    id: 'expertise-map',
    name: 'Expertise Map',
    group: 'expertise',
    summary:
      'Browse governed expertise categories and see the people, knowledge, communities, organisations and library resources connected to each one.',
    value: 'Find the right expert or existing knowledge on a subject in one place, instead of asking around.',
    details: [
      'Relationships, Map and Constellation views of the same subject',
      'Designated experts shown because of an explicit expertise assignment',
      'Learnings, After Action Reviews, decisions, Peer Assists, ideas, library items and events grouped by category',
      'Export a category as a semantic knowledge graph in JSON-LD, Turtle or N-Triples',
    ],
    screen: s('app-expertise-relationships.webp', 'Expertise Map Relationships view for Knowledge Management, listing people, knowledge and communities connected to the subject'),
    related: ['expert-notifications', 'constellation', 'expert-profiles', 'lessons-learned', 'communities'],
    journey: 'expertise',
  },
  {
    id: 'expert-notifications',
    name: 'Designated Expert notifications',
    group: 'expertise',
    summary:
      'Each expertise category has Designated Experts. When a discussion starts or a Learning is published in their category, they are notified so they can help steer it.',
    value: 'Questions reach the people who can answer them, without anyone having to know who to ask.',
    details: [
      'Administrators assign Designated Experts to each expertise category',
      'Notifications for new discussions and published Learnings in the category',
      'Only for content the expert is allowed to see, including private communities',
      'Switched on by administrators; experts can turn them off or mute a category',
    ],
    screen: s('app-notifications.webp', 'Notifications telling a Designated Expert about a new Learning and a new discussion in their area of expertise'),
    related: ['expertise-map', 'communities', 'lessons-learned', 'expert-profiles'],
    journey: 'expertise',
  },
  {
    id: 'constellation',
    name: 'Constellation',
    group: 'expertise',
    summary:
      'An organisation-wide view of expertise categories, sized by how much is connected to them. Select a category to see the discoverable people linked to it.',
    value: 'See at a glance where expertise is concentrated and which subjects have little depth.',
    details: [
      'Categories laid out in a stable arrangement so returning users recognise it',
      'Select a category to reveal its designated experts and summary counts',
      'Search categories or people, fit to screen and reset the layout',
      'Keyboard navigation and an accessible category list alongside the graph',
    ],
    screen: s('app-constellation.webp', 'Constellation view with expertise categories as circles and designated experts connected to the selected category'),
    related: ['expertise-map', 'expert-profiles', 'my-network'],
    journey: 'connections',
  },
  {
    id: 'expert-profiles',
    name: 'Expert profiles and people directory',
    group: 'expertise',
    summary:
      'Profiles bring together a person’s role, biography, skills, interests, Ask Me About topics and the expertise categories they are designated in.',
    value: 'Make expertise visible across sites and teams, so people know who to approach.',
    details: [
      'Ask Me About topics people are happy to be approached on',
      'Skills with self-assessed proficiency and separate peer endorsements',
      'Designated expert badges linked to the Expertise Map',
      'Directory search and filters by skills, interests and expertise',
    ],
    screen: s('app-profile.webp', 'A person profile showing designated expertise, skills, Ask Me About topics and biography'),
    related: ['expertise-map', 'my-network', 'lessons-learned'],
    journey: 'connections',
  },
  {
    id: 'my-network',
    name: 'My Network',
    group: 'expertise',
    summary:
      'An interactive map of follow relationships: who you follow, who follows you and mutual connections, with the option to explore a colleague’s network.',
    value: 'Understand and grow the professional connections that knowledge travels through.',
    details: [
      'Following, followers and mutual connections in one graph',
      'Open a connected person’s network from the map',
      'Filters, search and an accessible connection list',
      'Members choose whether to share their professional network',
    ],
    screen: s('app-my-network.webp', 'My Network graph showing follow relationships between colleagues'),
    related: ['expert-profiles', 'constellation', 'communities'],
    journey: 'connections',
  },
  {
    id: 'lessons-learned',
    name: 'Lessons Learned and Best Practices',
    group: 'learning',
    summary:
      'Learnings capture what happened, why it matters and what to do next time, tagged to an expertise category and linked to relevant communities.',
    value: 'Stop repeating mistakes and spread proven approaches across teams and sites.',
    details: [
      'Two types: Lesson Learned and Best Practice',
      'Description, background and recommendation in a consistent structure',
      'Optional approval before publication, with a visible lifecycle',
      'Member ratings and feedback, version history and PDF download',
    ],
    screen: s('app-learning.webp', 'A published Lesson Learned with its description, background, recommendation, lifecycle and record details'),
    related: ['promote-to-learning', 'knowledge-reuse', 'expertise-map', 'communities'],
    journey: 'learning',
  },
  {
    id: 'promote-to-learning',
    name: 'Promote a discussion to a Learning',
    group: 'learning',
    summary:
      'Turn a useful community discussion into a Lesson Learned or Best Practice. Choose the contributions to include and Tacitous assembles an editable draft.',
    value: 'Valuable answers stop being lost in discussion threads and become reusable knowledge.',
    details: [
      'Available to the discussion author and community managers',
      'Select the original post and the replies that should inform the draft',
      'The draft is assembled from the selected contributions, not generated by AI',
      'The published Learning links back to its source discussion',
    ],
    screen: s('app-promote.webp', 'Create from discussion screen with the original discussion and replies selected as contributions'),
    related: ['lessons-learned', 'communities', 'knowledge-reuse'],
    journey: 'promote',
  },
  {
    id: 'knowledge-reuse',
    name: 'Knowledge reuse',
    group: 'learning',
    summary:
      'People record when they have applied a Learning, how they applied it and the outcome. Organisations can review and validate the reported benefits.',
    value: 'Show where knowledge is actually being reused, not just viewed.',
    details: [
      'An “I Applied This Learning” record on every published Learning',
      'Benefit types such as time saved, rework prevented and risk reduced',
      'Quantified benefits only where evidence exists',
      'Validation, return for clarification or rejection by reviewers',
    ],
    screen: s('app-reuse.webp', 'Record knowledge reuse form for a published Learning with benefit types'),
    related: ['lessons-learned', 'promote-to-learning'],
    journey: 'learning',
  },
  {
    id: 'knowledge-retention',
    name: 'Knowledge Retention and Transfer',
    group: 'retention',
    summary:
      'A structured way to capture the experience, practical judgement, insights and advice of knowledgeable employees, particularly those approaching retirement or moving into different roles.',
    value: 'Keep the knowledge that procedures miss when experienced people move on.',
    details: [
      'Three sections: Role Introduction, Conversation Points and a Closing Question with advice for successors',
      'Prompts such as “What do you wish you had known when you started?”',
      'Associated with one to three expertise categories, connecting retained knowledge to the right area',
      'Restricted or tenant-wide audience, approval or direct publish, and PDF download',
    ],
    screen: s('app-krt.webp', 'A Knowledge Retention and Transfer record with role introduction, conversation points and closing advice'),
    related: ['expert-practice-note', 'expertise-map', 'expert-profiles'],
    journey: 'retention',
  },
  {
    id: 'expert-practice-note',
    name: 'Expert Practice Notes and decisions',
    group: 'retention',
    summary:
      'Capture the judgement behind recurring situations and significant decisions: what to notice, how to approach it, its limits and the alternatives considered.',
    value: 'Preserve the reasoning behind expert practice and decisions, not just the outcome.',
    details: [
      'Expert Practice Note: what to notice, how to approach it and where it stops applying',
      'Decision and Rationale: the decision, alternatives considered and where it applies',
      'Records sit alongside formal procedures and approvals rather than replacing them',
      'Tagged to expertise categories, with decision records also shown on the Expertise Map',
    ],
    screen: s('app-forms.webp', 'The Forms catalogue listing Knowledge Retention and Transfer, After Action Review, Decision and Rationale and other KM forms'),
    related: ['knowledge-retention', 'km-forms', 'expertise-map'],
  },
  {
    id: 'communities',
    name: 'Communities of Practice',
    group: 'collaboration',
    summary:
      'Public, managed and private communities with discussions, Learnings, announcements, a library, calendar, FAQs, links, polls and members.',
    value: 'Give practitioners a home where questions get answered and knowledge stays findable.',
    details: [
      'Public, managed (approval to join) and private communities',
      'Discussion topics and threads, with helpful answers marked',
      'Community libraries, calendars, FAQs, links and polls',
      'Optional community hierarchies to organise discovery',
    ],
    screen: s('app-community.webp', 'A community home page with discussions, Learnings, announcements, library, calendar, FAQs and polls'),
    related: ['promote-to-learning', 'related-knowledge', 'lessons-learned'],
    journey: 'promote',
  },
  {
    id: 'related-knowledge',
    name: 'Related knowledge in discussions',
    group: 'collaboration',
    summary:
      'Discussions show related Learnings and people who may be able to help, based on expertise categories and matching skills.',
    value: 'Connect a question to existing answers and the people who know, while it is being asked.',
    details: [
      'Related Learnings alongside a discussion',
      'People who may be able to help, excluding the person asking',
      'Suggestions respect what each person is allowed to see',
    ],
    screen: s('app-discussion.webp', 'A community discussion with replies from colleagues'),
    related: ['communities', 'expert-profiles', 'lessons-learned'],
    journey: 'connections',
  },
  {
    id: 'km-forms',
    name: 'Structured KM forms',
    group: 'library',
    summary:
      'Purpose-built forms for common Knowledge Management processes, each producing a consistent record that can be found, reused and linked to expertise.',
    value: 'Make good KM practice repeatable, with less reliance on templates and meeting notes.',
    details: [
      'Knowledge Retention and Transfer',
      'After Action Review and Peer Assist',
      'Knowledge Café and Innovation / Ideas',
      'Decision and Rationale and Expert Practice Note',
    ],
    screen: s('app-forms.webp', 'The Forms catalogue listing the structured Knowledge Management forms available to members'),
    related: ['knowledge-retention', 'expert-practice-note', 'lessons-learned'],
  },
  {
    id: 'knowledge-library',
    name: 'Knowledge Library',
    group: 'library',
    summary:
      'Tenant and community libraries of files and curated links, assigned to expertise categories so resources appear where people look for them.',
    value: 'Keep approved reference material in one place, connected to the subjects it supports.',
    details: [
      'Tenant-wide and community libraries',
      'Files and curated links with descriptions',
      'Assigned to expertise categories and shown on the Expertise Map',
      'Downloads follow the existing permission checks',
    ],
    screen: s('app-library.webp', 'The Knowledge Library listing curated links tagged by expertise category'),
    related: ['expertise-map', 'communities', 'km-forms'],
  },
];

export const featureById = (id: string) => features.find((f) => f.id === id);

// The smaller set introduced on the homepage.
export const highlightIds = ['expertise-map', 'expert-notifications', 'lessons-learned', 'promote-to-learning', 'knowledge-retention', 'communities'];
