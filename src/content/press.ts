// Press articles. Body entries are paragraphs; an entry starting with "## " is a subheading.
// Dates are left out until each article's original publish date is confirmed; never guess one.
export type PressPost = {
  slug: string;
  title: string;
  excerpt: string;
  authors: string[];
  tags: string[];
  /** ISO date (YYYY-MM-DD) of original publication, once verified. */
  date?: string;
  /** Original article URL, for pieces first published elsewhere. */
  original?: { label: string; url: string };
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
      'Tacitous has entered a strategic partnership with Knoco International, the Knowledge Management consulting and training organisation with more than 25 years of experience helping organisations around the world learn from what they know.',
      '“Knoco brings world-class KM expertise,” said Jordan Richards, Founder of Tacitous. “Together we can take organisations from KM strategy to a working platform their people actually use.”',
      '## Why this partnership matters',
      'Most organisations already value their knowledge. What they often lack is a working model for it. Expertise sits in silos, lessons learned are captured inconsistently or not at all, Communities of Practice start with energy and then stall, and when experienced people retire their knowledge leaves with them. At the same time, AI initiatives are being launched on top of institutional knowledge that has never been structured or validated.',
      'Solving this takes two things that rarely come from the same place: proven KM methodology, and technology designed around that methodology rather than bolted on afterwards.',
      '## Who brings what',
      'Knoco contributes KM expertise, methodology, advisory and training experience. Tacitous contributes the digital platform, tools and implementation capability. Clients get one joined-up approach instead of a consultancy report on one side and a software licence on the other.',
      '## What we can support together',
      'KM strategy and governance; Communities of Practice; lessons learned; critical knowledge retention; knowledge transfer from retirees and subject matter experts; KM training and capability building; AI readiness through structured institutional knowledge; digital KM platforms and implementation support; and fractional KM leadership and advisory support.',
      '## A shared commitment',
      'Both organisations share the same belief: Knowledge Management is not about storing documents. It is about how organisations learn, collaborate, make decisions and turn experience into performance. If your organisation wants to strengthen its KM or prepare for AI transformation, we would be glad to talk.',
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
      'AI has made it faster than ever to produce reports, summaries, recommendations and insights. A first draft that once took a week now takes a minute. The productivity gains are real, and organisations are right to pursue them.',
      'But there is a quieter risk that gets far less attention. As more of what an organisation reads is generated rather than written, it becomes harder to tell whether a confident answer is grounded in real expertise or simply sounds like it is.',
      '## Knowledge used to come with provenance',
      'Traditionally, knowledge was tied to the people who held it. You knew who wrote the procedure, which project the lesson came from and which engineer to call when something did not add up. That context was what made knowledge trustworthy: it could be traced back to experience.',
      'AI output often loses that thread. It can look authoritative while having only a loose connection to the expertise and the operational reality it claims to describe.',
      '## A knowledge trust layer',
      'We believe organisations need a knowledge trust layer: a way of connecting knowledge to the expertise behind it, to where it came from and to what the organisation has learned since. Whether an insight was produced by a person or a machine, it should be possible to ask who validated this, what experience supports it and whether it is still true.',
      'In practice that means expert profiles that show who knows what, lessons learned that are reviewed and linked to real projects, and Communities of Practice where knowledge is challenged, refined and kept current.',
      '## AI amplifies whatever it is given',
      'AI is only as reliable as the knowledge environment around it. If knowledge is fragmented, undocumented or disconnected from the people who hold it, AI does not fix that; it scales it. Confusion simply arrives faster and in better prose.',
      'Established KM disciplines, such as the frameworks developed by Knoco International, combined with modern knowledge platforms like Tacitous, give organisations a way to build trusted knowledge flows before they automate on top of them.',
      '## The real question',
      'The question for leaders is no longer whether to adopt AI. It is whether the knowledge guiding their AI is still traceable, validated and trustworthy. Organisations that invest in that foundation now will get far more from AI, with far less risk, than those that do not.',
    ],
  },
  {
    slug: 'the-hidden-wealth-of-nations-a-tacitous-perspective',
    title: 'The hidden wealth of nations: a Tacitous perspective',
    excerpt: 'A nation’s real strength lies in what it knows and remembers, not only in what it builds.',
    authors: ['Jordan Richards'],
    tags: ['Public sector'],
    body: [
      'We usually measure the strength of a nation by what we can see: roads and ports, industry, reserves, defence. These matter. But behind every one of them sits something less visible and arguably more valuable: what the nation knows, and how well it remembers.',
      '## National amnesia',
      'Every government department holds decades of hard-won experience: how a major infrastructure programme was actually delivered, why a policy failed the first time, which approach finally worked. Too often that experience lives only in the heads of long-serving civil servants and technical officers.',
      'When those people retire, move roles or change departments, their knowledge leaves with them. Successors start again. Mistakes that were made and fixed ten years ago are made again, at public expense. We call this national amnesia, and it is one of the most expensive problems governments rarely measure.',
      '## Silos make it worse',
      'Even when knowledge is retained, it is often trapped. One department solves a problem that another is still struggling with, but there is no easy way for either to know. Lessons learned are written up, filed and never read again.',
      '## Knowledge as a public utility',
      'We believe knowledge should be treated more like a public utility: something deliberately built, maintained and made available to everyone who needs it. That means systems that connect agencies, make it easy to find the person who has done this before, and capture lessons in a form the next team can actually use.',
      'The benefits go beyond efficiency. When knowledge flows freely between institutions, innovation speeds up, service delivery improves and public money goes further. Knowledge becomes an engine of economic growth rather than a cost of turnover.',
      '## The nations that will lead',
      'The countries that thrive in the coming decades will not simply be those with the most resources. They will be those that learn to retain and reuse what they know, so that each generation of public servants builds on the last rather than starting again.',
    ],
  },
  {
    slug: 'ai-is-making-us-efficient',
    title: 'AI is making us efficient, and forgetful',
    excerpt: 'When reasoning disappears into code, organisations keep running efficiently long after the world has changed.',
    authors: ['Jordan Richards', 'Waseem Khan'],
    tags: ['AI', 'Healthcare'],
    body: [
      'Automation is very good at doing what it was told. It is much worse at remembering why it was told to do it. As more processes move into workflows, scripts and AI agents, organisations are becoming more efficient and, quietly, more forgetful.',
      '## Where the reasoning goes',
      'Every business process encodes decisions made by experienced people: thresholds, exceptions, escalation paths, the order things happen in. When a process is manual, that reasoning is visible and regularly questioned. When it is automated, it disappears into configuration and code. The process keeps running, but the people who understood why it was designed that way move on.',
      '## A healthcare example',
      'Consider a hospital that automates a patient flow or referral process. The workflow was designed around the clinical conditions, staffing and guidance of the time, and for a while it works beautifully. Then conditions change: new guidance, a different patient mix, a new service. The automation carries on exactly as before, efficiently doing the wrong thing, because the expert judgement that shaped it was never captured alongside it.',
      'Nobody made a bad decision. The organisation simply lost the knowledge needed to notice that a good decision had expired.',
      '## Knowledge management as the missing layer',
      'Knowledge management is the layer that preserves the why behind a process. That means recording the reasoning and the experts behind each important rule, capturing lessons learned when outcomes drift, and connecting automation owners to the Communities of Practice who understand the domain.',
      'With those feedback loops in place, automated systems can be reviewed and improved as conditions change, rather than silently going stale.',
      '## Connected, not just automated',
      'Automation and institutional intelligence are not competitors; they work best together. The goal for a modern healthcare enterprise, or any complex organisation, should not be to become fully automated. It should be to become fully connected: efficient systems that remain tied to the knowledge and people that keep them right.',
    ],
  },
  {
    slug: 'when-nations-forget',
    title: 'When nations forget: why knowledge must become a national asset',
    excerpt: 'Knowledge is a strategic national asset, not just an organisational resource.',
    authors: ['Jordan Richards'],
    tags: ['Public sector'],
    body: [
      'Knowledge is usually discussed as an organisational resource: something a company or a department manages to work more effectively. We think that framing is too small. Knowledge is a strategic national asset, and it deserves to be managed like one.',
      '## A partnership to explore the idea',
      'Together with Kaseane, Tacitous is exploring how nations can use knowledge management to build resilience, innovation and institutional memory across the public and private sectors.',
      '## Why it matters',
      'Nations invest heavily in infrastructure, education and research, yet rarely invest in keeping what they learn from those investments. Expertise built over a career can be lost in a single retirement. Insights from one region or ministry rarely reach another. Over time the cost of that forgetting is paid in delay, rework and missed opportunity.',
      '## Knowledge on the national agenda',
      'We believe knowledge systems belong on national development agendas alongside digital infrastructure and skills. That means deliberate programmes to capture critical expertise, connect institutions through Communities of Practice, and make lessons learned available to the people who need them, so that experience is preserved, shared and usable across generations.',
    ],
  },
];

export const categories = [...new Set(posts.map((p) => p.tags[0]))];

export function readingMinutes(post: PressPost) {
  const words = [post.excerpt, ...post.body].join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
