// Tacitous Next tools shown in the Platform and home page showcases.
// A tool without `screen` has no screenshot yet and is shown as text only.
export type Screen = { file: string; w: number; h: number; alt: string };
export type Tool = {
  id: string;
  label: string;
  title: string;
  summary: string;
  benefits: string[];
  screen?: Screen;
  list?: { heading: string; items: string[] };
  link?: { label: string; to: string };
};

export const tools: Tool[] = [
  {
    id: 'expertise-map',
    label: 'Expertise Map',
    title: 'See who knows what, and where knowledge is concentrated',
    summary:
      'The Expertise Map shows how people, communities, learnings and organisations connect to each governed area of expertise, in relationship, map and constellation views.',
    benefits: [
      'Find the right expert for a question in minutes rather than days.',
      'Spot areas where expertise sits with only one or two people.',
      'Export the map as a semantic knowledge graph, for example in Turtle format.',
    ],
    screen: { file: 'expertise-map.webp', w: 1217, h: 791, alt: 'Tacitous Next Expertise Map showing people and organisations connected to the Knowledge Management category' },
  },
  {
    id: 'communities',
    label: 'Communities of Practice',
    title: 'Communities where practitioners solve problems together',
    summary:
      'Each community brings together discussions, approved learnings, announcements, a library, a shared calendar and FAQs, with public, managed and private membership options.',
    benefits: [
      'Give each critical business area a home where expertise is on hand.',
      'Turn everyday conversations into reusable lessons and practices.',
      'Control who can read and contribute, with membership approvals built in.',
    ],
    screen: { file: 'community.webp', w: 1353, h: 786, alt: 'Tacitous Next community page for Knowledge Sharing and Collaboration with discussions, learnings, announcements, library, calendar and FAQs' },
  },
  {
    id: 'expert-profiles',
    label: 'Expert profiles',
    title: 'Profiles that make expertise discoverable',
    summary:
      'Profiles show each person’s role, designated expertise, skills, endorsements, communities and the topics they are happy to be asked about.',
    benefits: [
      'Help new starters find the people who have done it before.',
      'Recognise designated experts and community managers.',
      'Connect people through skills and interests, not just org charts.',
    ],
    screen: { file: 'profile.webp', w: 1316, h: 790, alt: 'Tacitous Next profile of a designated expert showing biography, expertise, communities and Ask Me About topics' },
  },
  {
    id: 'knowledge-retention',
    label: 'Knowledge retention',
    title: 'Capture critical knowledge before it walks out of the door',
    summary:
      'Critical Knowledge Retention tools help you identify knowledge at risk, capture it from the people who hold it and connect it to the experts and communities who will use it next.',
    benefits: [
      'Plan knowledge transfer before retirements, moves and project close-outs.',
      'Capture experience, judgement and rationale, not just documents.',
      'Keep captured knowledge linked to expertise areas so it is found again.',
    ],
    link: { label: 'How we approach Critical Knowledge Retention', to: '/solutions/critical-knowledge-retention' },
  },
  {
    id: 'lessons-learned',
    label: 'Lessons learned',
    title: 'Lessons learned and best practices, ready to reuse',
    summary:
      'Learnings are captured, reviewed and approved, then tagged by type and expertise so they appear where people are working, from the home page to each community.',
    benefits: [
      'Stop repeating mistakes that someone has already solved.',
      'Make validated best practice easy to find and apply.',
      'See which learnings belong to which areas of expertise.',
    ],
    screen: { file: 'hub-home.webp', w: 1910, h: 872, alt: 'Tacitous Next home page with communities, people and recent learnings tagged as best practice or lesson learned' },
  },
  {
    id: 'knowledge-forms',
    label: 'Knowledge forms',
    title: 'Structured capture that makes knowledge reusable',
    summary:
      'Knowledge forms guide people through capturing what matters in a consistent structure, so the result can be reviewed, searched and reused rather than buried in meeting notes.',
    benefits: [
      'Capture the same essentials every time, whoever fills in the form.',
      'Make it easy to compare and reuse what different teams learned.',
      'Build a governed record of decisions, lessons and practices.',
    ],
    list: {
      heading: 'Forms that support common KM processes',
      items: [
        'After Action Review',
        'Lessons Learned',
        'Best Practices',
        'Critical Knowledge Retention',
        'Peer Assist',
        'Knowledge Café',
        'Decision & Rationale',
        'Innovation / Ideas',
        'Expert Practice Note',
      ],
    },
  },
  {
    id: 'knowledge-library',
    label: 'Knowledge library',
    title: 'One trusted place for approved knowledge',
    summary:
      'The library brings together approved learnings and knowledge resources, organisation-wide and within each community, so people know where to look first.',
    benefits: [
      'Reduce time spent searching through drives and inboxes.',
      'Keep knowledge alongside the community that owns and maintains it.',
      'Give people confidence that what they find has been reviewed.',
    ],
  },
];

export const toolById = (id: string) => tools.find((t) => t.id === id);
