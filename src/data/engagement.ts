import { chapterInfo } from './chapter.js';

export interface JoinPath {
  title: string;
  description: string;
  steps: string[];
  ctaLabel: string;
  href: string;
}

export interface CollaborationOption {
  title: string;
  audience: 'Companies' | 'Labs' | 'Faculty' | 'Student Organizations';
  description: string;
  examples: string[];
  contactHref: string;
}

export interface NetworkMember {
  name: string;
  role?: string;
  term?: string;
  affiliation?: string;
  focus: string[];
  socialLinks: Array<{ label: string; href: string }>;
  consent: boolean;
}

/* Canonical Discord invite lives in chapter.ts socialLinks — derive it here so
   the URL exists in exactly one place; fall back to other chapterInfo contacts
   rather than a hardcoded copy of the invite. */
const discordHref =
  chapterInfo.socialLinks.find((link) => link.label === 'Discord')?.href ??
  chapterInfo.socialLinks.find((link) => link.label === 'Linktree')?.href ??
  `mailto:${chapterInfo.email}`;

export const joinPaths: JoinPath[] = [
  {
    title: 'Join the community',
    description: 'Start in Discord, meet the active members, and use the chapter as a place to ask better technical questions.',
    steps: [
      'Join Discord and introduce yourself.',
      'Watch for workshop, meeting, and project-call announcements.',
      'Ask for the next beginner-friendly event if you are unsure where to start.',
    ],
    ctaLabel: 'Join Discord',
    href: discordHref,
  },
  {
    title: 'Contribute to research',
    description: 'Pick a project track and take on a scoped task that moves the research artifact forward.',
    steps: [
      'Read the project hub for the track that interests you.',
      'Join a project call or ask for an onboarding issue.',
      'Make one reproducible contribution: code, data notes, docs, analysis, or a demo.',
    ],
    ctaLabel: 'View Projects',
    href: '/research',
  },
  {
    title: 'Use the workshop track',
    description: 'Treat workshops as a structured path into signal processing, machine learning, and research engineering.',
    steps: [
      'Attend a workshop or review the workshop GitHub.',
      'Run the examples locally instead of only reading slides.',
      'Bring questions back to Discord or a project meeting.',
    ],
    ctaLabel: 'Browse Events',
    href: '/events',
  },
  {
    title: 'Help operate the chapter',
    description: 'SPS needs people who can organize events, document work, coordinate collaborators, and maintain member-facing systems.',
    steps: [
      'Identify one operational area you can make more reliable.',
      'Talk to the current board about ownership and expectations.',
      'Document the workflow so the next member can inherit it.',
    ],
    ctaLabel: 'Contact SPS',
    href: `mailto:${chapterInfo.email}`,
  },
];

export const collaborationOptions: CollaborationOption[] = [
  {
    title: 'Technical workshops',
    audience: 'Companies',
    description: 'Run a useful technical session with students who want depth, not only recruiting slogans.',
    examples: ['Signal processing tools', 'ML systems practice', 'Embedded sensing', 'Research engineering workflows'],
    contactHref: `mailto:${chapterInfo.email}?subject=SPS%20Workshop%20Collaboration`,
  },
  {
    title: 'Research demos',
    audience: 'Labs',
    description: 'Connect student project teams with real research questions, datasets, instrumentation, or evaluation needs.',
    examples: ['Audio and video demos', 'Biosignal acquisition', 'Dataset review', 'Reproducibility support'],
    contactHref: `mailto:${chapterInfo.email}?subject=SPS%20Research%20Collaboration`,
  },
  {
    title: 'Faculty connections',
    audience: 'Faculty',
    description: 'Introduce students to research directions where signal processing, systems, and machine perception matter.',
    examples: ['Project talks', 'Reading groups', 'Lab tours', 'Mentored contributor tasks'],
    contactHref: `mailto:${chapterInfo.email}?subject=SPS%20Faculty%20Collaboration`,
  },
  {
    title: 'Student organization events',
    audience: 'Student Organizations',
    description: 'Co-host events where the overlap is technical and useful for both communities.',
    examples: ['Intro workshops', 'Project nights', 'Panel events', 'Build sessions'],
    contactHref: `mailto:${chapterInfo.email}?subject=SPS%20Student%20Org%20Collaboration`,
  },
];

export const networkMembers: NetworkMember[] = [];
