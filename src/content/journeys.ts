// How knowledge moves through Tacitous Next. Each step follows the application's real workflow, shown with
// screens captured from a local build running fictional demonstration data.
import type { Screen } from './features';

export type Step = { title: string; who: string; body: string; screen: Screen };
export type Journey = { id: string; title: string; intro: string; steps: Step[] };

const s = (file: string, alt: string, w = 1440, h = 900): Screen => ({ file, w, h, alt });

export const journeys: Journey[] = [
  {
    id: 'expertise',
    title: 'Everything starts with an expertise category',
    intro: 'Discussions, Learnings and knowledge records are all tagged to governed expertise categories such as Finance or Legal, and each category has Designated Experts.',
    steps: [
      {
        title: 'Define categories and experts',
        who: 'Tenant administrators',
        body: 'Administrators set up the organisation’s expertise categories, assign Designated Experts to each one and choose whether experts receive expertise notifications.',
        screen: s('app-expertise-admin.webp', 'Expertise categories administration with Send expertise notifications switched on and Designated Experts assigned to each category'),
      },
      {
        title: 'Tag the conversation',
        who: 'Community managers',
        body: 'Every discussion topic is created under an expertise category, so the conversation is connected to the subject and the people who know it from the start.',
        screen: s('app-topic-new.webp', 'Add topic form with a title, summary and a required expertise category'),
      },
      {
        title: 'The experts hear about it',
        who: 'Designated Experts',
        body: 'When a discussion starts, a Learning is published or a Knowledge Retention and Transfer record is published for the organisation in their category, Designated Experts are notified so they can step in, steer and help. They only hear about what they can access, and can mute a category.',
        screen: s('app-notifications.webp', 'Notifications telling a Designated Expert about a new Learning and a new discussion in their area of expertise'),
      },
      {
        title: 'It all connects',
        who: 'Everyone',
        body: 'The category’s page on the Expertise Map brings together its experts, Learnings, other knowledge, communities and library resources.',
        screen: s('app-expertise-relationships.webp', 'Expertise Map Relationships view for Knowledge Management listing its Designated Experts'),
      },
    ],
  },
  {
    id: 'learning',
    title: 'Lessons Learned and Best Practices',
    intro: 'From an experience worth sharing to a reviewed, reusable Learning that keeps improving.',
    steps: [
      {
        title: 'Share a Learning',
        who: 'Any member',
        body: 'Choose Lesson Learned or Best Practice, tag an expertise category and record the description, background and recommendation. A checklist shows what is still needed to submit.',
        screen: s('app-learning-editor.webp', 'Share a Learning editor with Lesson Learned and Best Practice types and the Before you submit checklist'),
      },
      {
        title: 'Review and approve',
        who: 'Tenant administrators',
        body: 'Where approval is switched on, submitted Learnings wait in Pending approvals. Reviewers approve to publish, or return the draft with a note for the author.',
        screen: s('app-approvals.webp', 'Manage Learnings queue with a submission awaiting review, a reviewer note and Approve or Return to draft'),
      },
      {
        title: 'Published and connected',
        who: 'Everyone who can view it',
        body: 'The approved Learning shows its lifecycle, owner and expertise, links to related Learnings and communities, and appears on the Expertise Map for its category.',
        screen: s('app-learning.webp', 'Published Lesson Learned with lifecycle, record details and related Learnings'),
      },
      {
        title: 'Rate it and record reuse',
        who: 'Colleagues',
        body: 'Members rate the Learning and leave feedback. When someone applies it, they record how and what happened, and reviewers can validate the reported benefits.',
        screen: s('app-reuse.webp', 'Record knowledge reuse dialog with application summary, outcome and benefit types'),
      },
    ],
  },
  {
    id: 'promote',
    title: 'Promote a discussion to a Learning',
    intro: 'A good answer in a community becomes a Lesson Learned or Best Practice that outlives the thread.',
    steps: [
      {
        title: 'A question in a community',
        who: 'Any community member',
        body: 'A member asks how to hand over supplier knowledge before a planner retires. Colleagues reply with what has worked for them.',
        screen: s('app-discussion.webp', 'Community discussion asking how to hand over supplier knowledge, with three replies from colleagues'),
      },
      {
        title: 'Choose the contributions',
        who: 'Discussion author or community manager',
        body: 'From the discussion, choose Create a Lesson Learned or Best Practice and select the original post and the replies that should inform it.',
        screen: s('app-promote.webp', 'Create from discussion screen listing the original discussion and replies with checkboxes'),
      },
      {
        title: 'Prepare and edit the draft',
        who: 'Discussion author or community manager',
        body: 'Tacitous assembles a draft from the selected contributions. It is not generated by AI, and every field can be edited before it is submitted.',
        screen: s('app-promote-draft.webp', 'Learning draft assembled from the selected discussion contributions, ready to edit'),
      },
      {
        title: 'Published, with its source',
        who: 'Everyone who can view it',
        body: 'The published Learning records that it was derived from the discussion and links back to it. If the discussion was private, publishing tenant-wide needs administrator approval.',
        screen: s('app-promoted.webp', 'Published Learning marked Derived from Discussion with a View source discussion button'),
      },
    ],
  },
  {
    id: 'connections',
    title: 'Connecting people, expertise and knowledge',
    intro: 'Every Learning, record, profile and community is tied to governed expertise categories, so one question leads to the people and knowledge behind it.',
    steps: [
      {
        title: 'Start from a person',
        who: 'Any member',
        body: 'Profiles show the expertise categories someone is designated in, their skills and the topics they are happy to be asked about.',
        screen: s('app-profile.webp', 'Profile showing designated expertise, skills and Ask Me About topics'),
      },
      {
        title: 'Open the subject',
        who: 'Any member',
        body: 'An expertise category opens the Expertise Map: the people who know about it, the knowledge already captured and where it is being discussed.',
        screen: s('app-expertise-relationships.webp', 'Expertise Map Relationships view listing people, knowledge and communities for a category'),
      },
      {
        title: 'See the whole organisation',
        who: 'Any member',
        body: 'The Constellation shows every category at once, sized by what is connected to it. Selecting one reveals its designated experts.',
        screen: s('app-constellation.webp', 'Constellation view with expertise categories and connected experts'),
      },
      {
        title: 'Follow the people',
        who: 'Members who share their network',
        body: 'My Network maps who you follow, who follows you and mutual connections, and lets you open a colleague’s network to find who they learn from.',
        screen: s('app-my-network.webp', 'My Network graph of follow relationships'),
      },
    ],
  },
  {
    id: 'retention',
    title: 'Critical Knowledge Retention',
    intro: 'A structured way to capture the experience, practical judgement, insights and advice of people approaching retirement or moving into different roles.',
    steps: [
      {
        title: 'Set up the conversation',
        who: 'Interviewer, often a KM lead or manager',
        body: 'Record the person contributing knowledge, their role, the date and one to three expertise categories, and choose whether the record is restricted or visible to the organisation.',
        screen: s('app-krt-editor.webp', 'New Knowledge Retention and Transfer record with contributor, role title, expertise categories and audience'),
      },
      {
        title: 'Role Introduction and Conversation Points',
        who: 'Interviewer and contributor',
        body: 'The form guides the conversation through three sections: a Role Introduction, Conversation Points that draw out what procedures miss, and a Closing Question with advice for their successor.',
        screen: s('app-krt-prompts.webp', 'Conversation prompts such as what do you wish you had known when you started the job'),
      },
      {
        title: 'Review, publish and share',
        who: 'Tenant administrators',
        body: 'Depending on tenant settings, records are published directly or submitted for approval, and can be returned for changes. When a record is published for the organisation, Designated Experts in its expertise categories can be notified automatically. Published records can be downloaded as a PDF.',
        screen: s('app-krt.webp', 'Submitted Knowledge Retention and Transfer record with role introduction, conversation points and closing advice'),
      },
    ],
  },
];

export const journeyById = (id: string) => journeys.find((j) => j.id === id);
