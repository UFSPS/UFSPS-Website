export interface Pillar {
    title: string
    description: string
}

/**
 * The chapter's four research pillars — single source of truth.
 * Rendered by /research (teaser grid) and /research/philosophy (full sections).
 */
export const pillars: Array<Pillar> = [
    {
        title: 'Signal-first',
        description:
            'We treat audio, video, biosignals, text, and training logs as measurable signals with structure, noise, and assumptions.',
    },
    {
        title: 'Demo-first',
        description:
            'Small working systems expose the hard parts faster than long plans. We build toward tangible experiments early.',
    },
    {
        title: 'Reproducible',
        description:
            'Code, data notes, logs, and documentation matter because students need to inherit and challenge each other’s work.',
    },
    {
        title: 'Student-led',
        description:
            'Faculty, labs, and companies can collaborate with SPS, but chapter work remains organized around student growth and ownership.',
    },
];
