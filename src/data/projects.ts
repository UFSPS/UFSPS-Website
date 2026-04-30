export interface Project {
    title: string
    description: string
    img: string
    imgAlt: string
    meta: string
    links?: Array<string>
    details: ProjectDetails
}

interface ProjectDetails {
    overview: string
    what_we_built: Array<string>
    stack: Array<string>
}

export const projects: Record<string, Project> = {
    "platos-cave": {
      "title": "Plato's Cave",
      "description": `
            Tooling for reading research papers as structured claims, evidence, limitations,
            and comparisons. Plato's Cave turns literature review into an auditable workflow
            that helps students move from reading papers to evaluating them systematically.`,
      "img": "/research/PlatoCave.png",
      "imgAlt": "Plato's Cave project logo.",
      "meta": "Literature review · language + structure · reproducibility",
      "links": [
        "https://github.com/matheusmaldaner/PlatosCave",
      ],
      "details": {
        "overview": "Reading dozens of papers is slow partly because the structure is inconsistent. Plato's Cave uses language-model tooling to extract consistent research objects, compare papers, and preserve outputs that can be audited later.",
        "what_we_built": [
          "A batch workflow that processes papers into structured claims, evidence, and limitations.",
          "Scoring and normalization routines so papers can be compared across a collection.",
          "Run artifacts designed for reproducible literature review and later inspection."
        ],
        "stack": [
          "Python",
          "Large language model APIs",
          "Structured research artifacts"
        ],
      }
    },

    "ergo": {
      "title": "Ergo — EMG/EEG biosignal acquisition + dynamical systems",
      "description": `
            Ergo integrates biosignal hardware, feature extraction, and simulation to test how
            control systems move between stable and unstable regimes under cooperation, competition,
            and fatigue.`,
      "img": "/research/Ergo_Icon_nobg.png",
      "imgAlt": "Ergo project logo.",
      "meta": "EMG + EEG · embedded acquisition · dynamical stability analysis",
      "links": [
        "https://github.com/Jibby2k1/Ergo",
      ],
      "details": {
        "overview": "Ergo is a biosignal research platform for experiments that connect hardware acquisition, human state, and dynamical systems. The project treats hardware, firmware, signal features, and modeling as one research system.",
        "what_we_built": [
          "A hardware-to-software workflow for EMG and EEG acquisition experiments.",
          "Feature extraction concepts for studying fatigue, cooperation, and competing control signals.",
          "Simulation and analysis framing for stable and unstable dynamical regimes."
        ],
        "stack": [
          "Embedded biosignal hardware",
          "Signal processing",
          "Python research tooling"
        ],
      }
    },

    "ora": {
      "title": "Ora — local-first workout tracker with voice logging",
      "description": `
          Ora reduces workout logging friction while producing structured training data for
          ML-assisted progression analysis, coaching workflows, and long-term personal feedback.`,
      "img": "/research/Ora_Icon_nobg.png",
      "imgAlt": "Ora project logo.",
      "meta": "Local-first data · voice logging · training trend analysis",
      "links": [
        "https://github.com/Jibby2k1/Ora",
      ],
      "details": {
        "overview": "Most fitness apps fail because logging creates too much friction. Ora explores a local-first workflow where voice capture and lightweight structure make training records easier to create and more useful for analysis.",
        "what_we_built": [
          "A product and interaction model for low-friction workout logging.",
          "A structured-data framing for progression analysis and future coaching tools.",
          "A roadmap that prioritizes consistency, privacy, and simple feedback loops."
        ],
        "stack": [
          "App prototyping",
          "Speech workflows",
          "Local-first data design"
        ],
      }
    },

    "vie": {
      "title": "Vie — biologically plausible real-time video scene analysis",
      "description": `
          Vie investigates real-time machine perception systems that jointly model moving and
          static objects, with reproducible data engineering and demo-first iteration.`,
      "img": "/research/Vie_Icon_nobg.png",
      "imgAlt": "Vie project logo.",
      "meta": "Scene understanding · real-time perception · dataset + annotation pipeline",
      "links": [
        "https://github.com/Jibby2k1/Vie",
      ],
      "details": {
        "overview": "Vie studies video scene analysis as a research engineering problem: build the data path, define useful annotations, and iterate toward real-time perception demos that can be evaluated and improved.",
        "what_we_built": [
          "A project frame for moving-object and static-scene understanding.",
          "Dataset and annotation workflow concepts for reproducible perception experiments.",
          "Demo-first iteration goals for evaluating real-time video systems."
        ],
        "stack": [
          "Computer vision",
          "Machine learning",
          "Dataset engineering"
        ],
      }
    },

    "aude": {
      "title": "Aude — biologically plausible audio scene analysis",
      "description": `
          Aude develops an end-to-end audio research workflow: collect synchronized microphone-array
          data, benchmark strong baselines, and train models for robust source separation and localization.`,
      "img": "/research/Aude_Icon_nobg.png",
      "imgAlt": "Aude project logo.",
      "meta": "Source separation · localization · multi-mic data capture",
      "links": [
        "https://github.com/Jibby2k1/Aude",
      ],
      "details": {
        "overview": "Aude focuses on audio scene analysis through practical research infrastructure: synchronized capture, baseline comparisons, and models that can separate and localize sound sources in realistic environments.",
        "what_we_built": [
          "A research plan for synchronized microphone-array data collection.",
          "Benchmarking goals for source separation and localization baselines.",
          "A modeling workflow for robust audio scene understanding."
        ],
        "stack": [
          "Audio signal processing",
          "Machine learning",
          "Microphone-array data capture"
        ],
      }
    },
};
