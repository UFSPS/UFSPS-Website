export interface Project {
    slug: string
    title: string
    shortTitle?: string
    description: string
    img: string
    imgAlt: string
    meta: string
    tags: Array<string>
    status: ProjectStatus
    health: ProjectHealth
    progress: number
    phase: string
    lastUpdated: string
    nextMilestone?: string
    owners: Array<string>
    links?: Array<ProjectLink>
    details: ProjectDetails
}

export type ProjectStatus = 'active' | 'planning' | 'paused' | 'completed';
export type ProjectHealth = 'on-track' | 'watch' | 'blocked';

export interface ProjectLink {
    label: string
    href: string
    type: 'github' | 'demo' | 'paper' | 'docs'
}

interface ProjectDetails {
    overview: string
    problem?: string
    what_we_built: Array<string>
    current_focus?: Array<string>
    roadmap?: Array<ProjectRoadmapItem>
    stack: Array<string>
}

export interface ProjectRoadmapItem {
    label: string
    state: ProjectStatus
    date?: string
}

export const projectList: Project[] = [
    {
      "slug": "platos-cave",
      "title": "Plato's Cave",
      "shortTitle": "Plato's Cave",
      "description": `
            Tooling for reading research papers as structured claims, evidence, limitations,
            and comparisons. Plato's Cave turns literature review into an auditable workflow
            that helps students move from reading papers to evaluating them systematically.`,
      "img": "/research/PlatoCave.png",
      "imgAlt": "Plato's Cave project logo.",
      "meta": "Literature review · language + structure · reproducibility",
      "tags": ["language models", "research tooling", "literature review"],
      "status": "active",
      "health": "on-track",
      "progress": 62,
      "phase": "Structured extraction workflow",
      "lastUpdated": "2026-04-30",
      "nextMilestone": "Package a reproducible demo corpus for new contributors.",
      "owners": ["SPS research contributors"],
      "links": [
        { "label": "GitHub", "href": "https://github.com/matheusmaldaner/PlatosCave", "type": "github" },
      ],
      "details": {
        "overview": "Reading dozens of papers is slow partly because the structure is inconsistent. Plato's Cave uses language-model tooling to extract consistent research objects, compare papers, and preserve outputs that can be audited later.",
        "problem": "Students need a more inspectable way to move from paper reading to structured comparison without losing evidence, limitations, and methodological context.",
        "what_we_built": [
          "A batch workflow that processes papers into structured claims, evidence, and limitations.",
          "Scoring and normalization routines so papers can be compared across a collection.",
          "Run artifacts designed for reproducible literature review and later inspection."
        ],
        "current_focus": [
          "Tightening output schemas for repeatable paper comparison.",
          "Improving artifact organization so future runs can be audited.",
          "Preparing a contributor-friendly demo dataset."
        ],
        "roadmap": [
          { "label": "Structured extraction prototype", "state": "completed", "date": "2025" },
          { "label": "Comparison scoring pass", "state": "active" },
          { "label": "Public demo corpus", "state": "planning" }
        ],
        "stack": [
          "Python",
          "Large language model APIs",
          "Structured research artifacts"
        ],
      }
    },

    {
      "slug": "ergo",
      "title": "Ergo — EMG/EEG biosignal acquisition + dynamical systems",
      "shortTitle": "Ergo",
      "description": `
            Ergo integrates biosignal hardware, feature extraction, and simulation to test how
            control systems move between stable and unstable regimes under cooperation, competition,
            and fatigue.`,
      "img": "/research/Ergo_Icon_nobg.png",
      "imgAlt": "Ergo project logo.",
      "meta": "EMG + EEG · embedded acquisition · dynamical stability analysis",
      "tags": ["biosignals", "embedded systems", "dynamical systems"],
      "status": "active",
      "health": "watch",
      "progress": 48,
      "phase": "Acquisition and experiment design",
      "lastUpdated": "2026-04-30",
      "nextMilestone": "Validate the acquisition path with repeatable pilot recordings.",
      "owners": ["SPS biosignals team"],
      "links": [
        { "label": "GitHub", "href": "https://github.com/Jibby2k1/Ergo", "type": "github" },
      ],
      "details": {
        "overview": "Ergo is a biosignal research platform for experiments that connect hardware acquisition, human state, and dynamical systems. The project treats hardware, firmware, signal features, and modeling as one research system.",
        "problem": "Human state signals are noisy, hardware-dependent, and difficult to interpret unless acquisition, features, and modeling are designed together.",
        "what_we_built": [
          "A hardware-to-software workflow for EMG and EEG acquisition experiments.",
          "Feature extraction concepts for studying fatigue, cooperation, and competing control signals.",
          "Simulation and analysis framing for stable and unstable dynamical regimes."
        ],
        "current_focus": [
          "Documenting the acquisition path for contributors.",
          "Separating hardware constraints from analysis assumptions.",
          "Defining a pilot protocol that can be repeated across sessions."
        ],
        "roadmap": [
          { "label": "Research framing", "state": "completed", "date": "2025" },
          { "label": "Pilot acquisition workflow", "state": "active" },
          { "label": "Feature extraction benchmark", "state": "planning" }
        ],
        "stack": [
          "Embedded biosignal hardware",
          "Signal processing",
          "Python research tooling"
        ],
      }
    },

    {
      "slug": "ora",
      "title": "Ora — local-first workout tracker with voice logging",
      "shortTitle": "Ora",
      "description": `
          Ora reduces workout logging friction while producing structured training data for
          ML-assisted progression analysis, coaching workflows, and long-term personal feedback.`,
      "img": "/research/Ora_Icon_nobg.png",
      "imgAlt": "Ora project logo.",
      "meta": "Local-first data · voice logging · training trend analysis",
      "tags": ["local-first", "speech", "personal analytics"],
      "status": "planning",
      "health": "on-track",
      "progress": 34,
      "phase": "Product and data model design",
      "lastUpdated": "2026-04-30",
      "nextMilestone": "Ship a minimal voice-to-structured-log prototype.",
      "owners": ["SPS applied ML contributors"],
      "links": [
        { "label": "GitHub", "href": "https://github.com/Jibby2k1/Ora", "type": "github" },
      ],
      "details": {
        "overview": "Most fitness apps fail because logging creates too much friction. Ora explores a local-first workflow where voice capture and lightweight structure make training records easier to create and more useful for analysis.",
        "problem": "Useful training analytics depend on consistent logs, but most logging interfaces are too slow or intrusive to survive real use.",
        "what_we_built": [
          "A product and interaction model for low-friction workout logging.",
          "A structured-data framing for progression analysis and future coaching tools.",
          "A roadmap that prioritizes consistency, privacy, and simple feedback loops."
        ],
        "current_focus": [
          "Defining the smallest reliable workout schema.",
          "Testing voice-first interaction patterns.",
          "Keeping the data model useful without centralizing private data."
        ],
        "roadmap": [
          { "label": "Interaction model", "state": "completed", "date": "2025" },
          { "label": "Voice logging prototype", "state": "planning" },
          { "label": "Progression analysis loop", "state": "planning" }
        ],
        "stack": [
          "App prototyping",
          "Speech workflows",
          "Local-first data design"
        ],
      }
    },

    {
      "slug": "vie",
      "title": "Vie — biologically plausible real-time video scene analysis",
      "shortTitle": "Vie",
      "description": `
          Vie investigates real-time machine perception systems that jointly model moving and
          static objects, with reproducible data engineering and demo-first iteration.`,
      "img": "/research/Vie_Icon_nobg.png",
      "imgAlt": "Vie project logo.",
      "meta": "Scene understanding · real-time perception · dataset + annotation pipeline",
      "tags": ["computer vision", "scene understanding", "dataset engineering"],
      "status": "active",
      "health": "on-track",
      "progress": 55,
      "phase": "Dataset and demo pipeline",
      "lastUpdated": "2026-04-30",
      "nextMilestone": "Connect annotation outputs to a lightweight real-time demo.",
      "owners": ["SPS perception team"],
      "links": [
        { "label": "GitHub", "href": "https://github.com/Jibby2k1/Vie", "type": "github" },
      ],
      "details": {
        "overview": "Vie studies video scene analysis as a research engineering problem: build the data path, define useful annotations, and iterate toward real-time perception demos that can be evaluated and improved.",
        "problem": "Scene understanding systems need repeatable data and evaluation loops before model improvements are meaningful.",
        "what_we_built": [
          "A project frame for moving-object and static-scene understanding.",
          "Dataset and annotation workflow concepts for reproducible perception experiments.",
          "Demo-first iteration goals for evaluating real-time video systems."
        ],
        "current_focus": [
          "Clarifying annotation targets for static and moving objects.",
          "Building a simple demo path before optimizing models.",
          "Documenting dataset assumptions for later contributors."
        ],
        "roadmap": [
          { "label": "Project framing", "state": "completed", "date": "2025" },
          { "label": "Dataset workflow", "state": "active" },
          { "label": "Real-time demo", "state": "planning" }
        ],
        "stack": [
          "Computer vision",
          "Machine learning",
          "Dataset engineering"
        ],
      }
    },

    {
      "slug": "aude",
      "title": "Aude — biologically plausible audio scene analysis",
      "shortTitle": "Aude",
      "description": `
          Aude develops an end-to-end audio research workflow: collect synchronized microphone-array
          data, benchmark strong baselines, and train models for robust source separation and localization.`,
      "img": "/research/Aude_Icon_nobg.png",
      "imgAlt": "Aude project logo.",
      "meta": "Source separation · localization · multi-mic data capture",
      "tags": ["audio", "source separation", "localization"],
      "status": "active",
      "health": "watch",
      "progress": 42,
      "phase": "Capture protocol and baselines",
      "lastUpdated": "2026-04-30",
      "nextMilestone": "Define synchronized capture experiments and baseline metrics.",
      "owners": ["SPS audio team"],
      "links": [
        { "label": "GitHub", "href": "https://github.com/Jibby2k1/Aude", "type": "github" },
      ],
      "details": {
        "overview": "Aude focuses on audio scene analysis through practical research infrastructure: synchronized capture, baseline comparisons, and models that can separate and localize sound sources in realistic environments.",
        "problem": "Audio scene analysis depends on capture quality and baseline discipline before advanced models can be trusted.",
        "what_we_built": [
          "A research plan for synchronized microphone-array data collection.",
          "Benchmarking goals for source separation and localization baselines.",
          "A modeling workflow for robust audio scene understanding."
        ],
        "current_focus": [
          "Designing synchronized microphone-array capture sessions.",
          "Selecting baseline metrics for separation and localization.",
          "Making the workflow approachable for new audio contributors."
        ],
        "roadmap": [
          { "label": "Research plan", "state": "completed", "date": "2025" },
          { "label": "Capture protocol", "state": "active" },
          { "label": "Baseline benchmark", "state": "planning" }
        ],
        "stack": [
          "Audio signal processing",
          "Machine learning",
          "Microphone-array data capture"
        ],
      }
    },
];

export const projects: Record<string, Project> = Object.fromEntries(
  projectList.map((project) => [project.slug, project])
);

export const getProjectBySlug = (slug?: string) => {
  if (!slug) return undefined;
  return projects[slug];
};
