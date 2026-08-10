const images: string[] = Array.from({ length: 11 }, (_, i) =>
  new URL(`../assets/past/img${i + 1}.png`, import.meta.url).href
);

export type EventType = 'workshop' | 'meeting' | 'talk' | 'social';
export type EventStatus = 'scheduled' | 'tentative' | 'cancelled';

export interface EventLocation {
  label: string;
  address?: string;
  mapUrl?: string;
}

export interface EventLinks {
  details?: string;
  repo?: string;
  slides?: string;
  recording?: string;
}

export interface EventRsvp {
  enabled: boolean;
  url?: string;
  provider: 'discord' | 'google-form' | 'luma' | 'mailto' | 'other';
  closedMessage?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  type: EventType;
  status: EventStatus;
  title: string;
  summary: string;
  description: string;
  startsAt: string;
  endsAt?: string;
  timezone: 'America/New_York';
  location: EventLocation;
  image?: string;
  tags: string[];
  links: EventLinks;
  rsvp: EventRsvp;
}

const workshopRepo = 'https://github.com/Jibby2k1/SPS_Curriculum';
const discord = 'https://discord.gg/6GRymPjgKc';

export const events: EventItem[] = [
  {
    id: 'spring-2026-project-onboarding',
    slug: 'spring-2026-project-onboarding',
    type: 'meeting',
    status: 'scheduled',
    title: 'Research Project Onboarding',
    summary: 'Meet the active SPS project tracks and pick a contribution path.',
    description: 'A contributor-facing onboarding session for students interested in Ergo, Ora, Vie, Aude, Plato’s Cave, or future SPS research projects.',
    startsAt: '2026-05-15T17:30:00-04:00',
    endsAt: '2026-05-15T18:30:00-04:00',
    timezone: 'America/New_York',
    location: {
      label: 'UF Artificial Intelligence and Informatics Research Institute',
      address: '432 Newell Drive, Gainesville, FL 32611',
    },
    image: images[0]!,
    tags: ['research', 'onboarding', 'projects'],
    links: { details: discord },
    rsvp: { enabled: false, provider: 'discord', closedMessage: 'This event has passed.' },
  },
  {
    id: 'fall-2026-signal-processing-bootcamp',
    slug: 'fall-2026-signal-processing-bootcamp',
    type: 'workshop',
    status: 'tentative',
    title: 'Signal Processing Bootcamp',
    summary: 'A practical intro to sampling, filtering, FFTs, and noisy data.',
    description: 'This workshop gives new members enough signal-processing vocabulary to join research projects and understand later technical sessions.',
    startsAt: '2026-09-10T17:30:00-04:00',
    endsAt: '2026-09-10T19:00:00-04:00',
    timezone: 'America/New_York',
    location: {
      label: 'UF Artificial Intelligence and Informatics Research Institute',
      address: '432 Newell Drive, Gainesville, FL 32611',
    },
    image: images[9]!,
    tags: ['signals', 'workshop', 'beginner'],
    links: { repo: workshopRepo },
    rsvp: { enabled: true, provider: 'discord', url: discord },
  },
  {
    id: 'self-attention-transformers-2025',
    slug: 'self-attention-transformers-2025',
    type: 'workshop',
    status: 'scheduled',
    title: 'Self Attention and Transformer Models from Scratch',
    summary: 'A technical workshop on attention mechanisms and transformer model internals.',
    description: 'Build intuition for self-attention, positional encodings, and transformer blocks with code-oriented examples.',
    startsAt: '2025-11-20T16:30:00-05:00',
    endsAt: '2025-11-20T18:00:00-05:00',
    timezone: 'America/New_York',
    location: { label: 'Artificial Intelligence and Informatics Research Institute' },
    image: images[0]!,
    tags: ['machine learning', 'transformers', 'workshop'],
    links: { repo: workshopRepo },
    rsvp: { enabled: false, provider: 'other', closedMessage: 'This event has passed.' },
  },
  {
    id: 'claude-code-workflow-2025',
    slug: 'claude-code-workflow-2025',
    type: 'workshop',
    status: 'scheduled',
    title: '10x Your Workflow with Claude Code',
    summary: 'A practical session on using coding agents for technical work.',
    description: 'Learn how to structure tasks, review agent changes, and keep engineering judgment in the loop while using AI coding tools.',
    startsAt: '2025-10-29T17:00:00-04:00',
    endsAt: '2025-10-29T18:00:00-04:00',
    timezone: 'America/New_York',
    location: { label: 'Artificial Intelligence and Informatics Research Institute' },
    image: images[3]!,
    tags: ['tools', 'workflow', 'workshop'],
    links: { repo: workshopRepo },
    rsvp: { enabled: false, provider: 'other', closedMessage: 'This event has passed.' },
  },
  {
    id: 'stochastic-noise-methods-2025',
    slug: 'stochastic-noise-methods-2025',
    type: 'workshop',
    status: 'scheduled',
    title: 'Stochastic Noise and Methods',
    summary: 'A workshop on randomness, noise, and extracting structure from uncertain signals.',
    description: 'Explore how stochastic thinking and signal-processing methods help turn noisy measurements into useful technical artifacts.',
    startsAt: '2025-11-18T17:00:00-05:00',
    endsAt: '2025-11-18T18:30:00-05:00',
    timezone: 'America/New_York',
    location: { label: 'Artificial Intelligence and Informatics Research Institute' },
    image: images[9]!,
    tags: ['noise', 'signals', 'workshop'],
    links: { repo: workshopRepo },
    rsvp: { enabled: false, provider: 'other', closedMessage: 'This event has passed.' },
  },
];

export const getEventTime = (event: EventItem) => new Date(event.endsAt ?? event.startsAt);

export const isUpcomingEvent = (event: EventItem, now = new Date()) =>
  getEventTime(event).getTime() >= now.getTime();

export const upcomingEvents = (now = new Date()) =>
  events
    .filter((event) => isUpcomingEvent(event, now))
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());

export const pastEvents = (now = new Date()) =>
  events
    .filter((event) => !isUpcomingEvent(event, now))
    .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime());

export const formatEventDate = (event: EventItem) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: event.timezone,
  }).format(new Date(event.startsAt));

export const formatEventTime = (event: EventItem) =>
  new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: event.timezone,
  }).format(new Date(event.startsAt));
