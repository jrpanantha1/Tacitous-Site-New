// Illustrative data for the interactive expertise network. The people, categories and records are the
// fictional demonstration personas and content used in the application screenshots, not customer data.

export type NodeKind = 'person' | 'learning' | 'record' | 'community' | 'library';

export type Category = { id: string; name: string; description: string };
export type NetNode = { id: string; kind: NodeKind; name: string; detail: string; categories: string[] };

export const kindLabels: Record<NodeKind, string> = {
  person: 'Designated expert',
  learning: 'Learning',
  record: 'Other knowledge',
  community: 'Community',
  library: 'Library resource',
};

export const categories: Category[] = [
  { id: 'km', name: 'Knowledge Management', description: 'Identifying, capturing, sharing and reusing organisational knowledge.' },
  { id: 'ops', name: 'Project & Operations Management', description: 'Planning, delivering and operating projects and assets.' },
  { id: 'digital', name: 'Digital Transformation & AI', description: 'Digital ways of working, data, automation and responsible AI.' },
  { id: 'people', name: 'People & Organisational Development', description: 'Onboarding, mentoring, capability and organisational learning.' },
  { id: 'ci', name: 'Innovation & Continuous Improvement', description: 'Improvement ideas, problem solving and better ways of working.' },
  { id: 'compliance', name: 'Compliance', description: 'Meeting legal, regulatory and internal policy obligations.' },
];

export const nodes: NetNode[] = [
  { id: 'sarah', kind: 'person', name: 'Sarah Mitchell', detail: 'Knowledge Management Lead', categories: ['km', 'people', 'ci'] },
  { id: 'david', kind: 'person', name: 'David Chen', detail: 'Operational Excellence Manager', categories: ['ops', 'ci', 'km'] },
  { id: 'priya', kind: 'person', name: 'Priya Nair', detail: 'Digital Transformation Director', categories: ['digital', 'ci', 'km'] },
  { id: 'michael', kind: 'person', name: 'Michael Thompson', detail: 'Workforce Development Manager', categories: ['people', 'km', 'digital'] },
  { id: 'amina', kind: 'person', name: 'Amina Hassan', detail: 'Compliance Manager', categories: ['compliance', 'km', 'people'] },
  { id: 'james', kind: 'person', name: 'James Walker', detail: 'Continuous Improvement Specialist', categories: ['ci', 'ops', 'km'] },

  { id: 'l1', kind: 'learning', name: 'Start retention conversations early', detail: 'Lesson Learned', categories: ['km'] },
  { id: 'l2', kind: 'learning', name: 'Hold an After Action Review within 48 hours', detail: 'Best Practice', categories: ['ops'] },
  { id: 'l3', kind: 'learning', name: 'Confirm data ownership before automating', detail: 'Lesson Learned', categories: ['digital'] },
  { id: 'l4', kind: 'learning', name: 'Pair new engineers with a designated expert', detail: 'Best Practice', categories: ['people'] },
  { id: 'l5', kind: 'learning', name: 'Improvement ideas need a named owner', detail: 'Lesson Learned', categories: ['ci'] },
  { id: 'l7', kind: 'learning', name: 'Brief control owners before a policy change', detail: 'Lesson Learned', categories: ['compliance'] },
  { id: 'l6', kind: 'learning', name: 'Record the exceptions at handover', detail: 'Lesson Learned, derived from a discussion', categories: ['ops', 'km'] },

  { id: 'r1', kind: 'record', name: 'Handing over supplier knowledge', detail: 'Knowledge Café', categories: ['ops', 'km'] },
  { id: 'r2', kind: 'record', name: 'Phase 2 commissioning review', detail: 'After Action Review', categories: ['ops', 'ci'] },
  { id: 'r3', kind: 'record', name: 'Choosing a reporting platform', detail: 'Decision and Rationale', categories: ['digital'] },
  { id: 'r4', kind: 'record', name: 'Preparing for a policy change', detail: 'Peer Assist', categories: ['compliance'] },
  { id: 'r5', kind: 'record', name: 'A shared exception log for planners', detail: 'Innovation / Idea', categories: ['ops', 'ci'] },

  { id: 'c1', kind: 'community', name: 'Knowledge Sharing & Collaboration', detail: 'Public community', categories: ['km', 'people', 'digital', 'compliance'] },
  { id: 'c2', kind: 'community', name: 'Operational Excellence & Continuous Improvement', detail: 'Public community', categories: ['ops', 'ci'] },

  { id: 'b1', kind: 'library', name: 'Retention interview guide', detail: 'Tenant library file', categories: ['km', 'people'] },
  { id: 'b2', kind: 'library', name: 'Control evidence checklist', detail: 'Community library link', categories: ['compliance'] },
];
