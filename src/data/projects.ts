export interface Project {
    title: string
    description : string
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

export const projects: Record<string, Project> = 
{
    "platos-cave": {
      "title": "Plato's Cave",
      "description": `
            Tooling which helps reviewers read faster by turning papers into 
            structured ‘claims and evidence’ graphs with audit-friendly outputs. 
            Extracts structured nodes (claims, evidence, limitations, etc.) 
            from papers and scores them to support literature review and comparison 
            across a collection.`,
      "img": "/research/PlatoCave.png",
      "imgAlt": "Plato's Cave project logo.",
      "meta": "Tools · language + structure · reproducibility",
      "links": [
        "https://github.com/matheusmaldaner/PlatosCave",
      ],
      "details": {
        "overview": "Reading dozens of papers is slow, partly because the structure is inconsistent. Plato’s Cave uses modern language models to extract a consistent structure (e.g., claims, evidence, limitations) and then runs a scoring pipeline so papers can be compared more systematically.",
        "what_we_built": [
          "A batch pipeline that processes PDFs, extracts structured ‘nodes’ (e.g., claims/evidence), and stores results in machine-readable formats.",
          "Scoring and normalization routines so outputs are comparable across papers.",
          "Run outputs designed for auditing (logs, summaries, and artifacts)."
        ],
        "stack": [
          "Python",
          "Large language model APIs",
          "Experiment logging"
        ],
      }
    },

    "gh05t": {
      "title": "GH05T — EEG hardware-to-software pipeline",
      "description": `
            A modular EEG stack (hardware + software) designed for rapid research iteration and a 
            path toward product-grade reliability. End-to-end EEG stack (acquisition → streaming → preprocessing → modeling) 
            is designed so experiments can be run quickly, repeated reliably, and extended over time.`,
      "img": "/research/GH05T.png",
      "imgAlt": "GH05T project logo.",
      "meta": "IEEE SPS @ UF · hardware · neurotech",
      "links": [
        "https://github.com/Keith-Khadar/Gh05t",
      ],
      "details": {
        "overview": "GH05T is a practical research platform: the goal is to reduce friction between an idea (‘can we measure X?’) and an experiment (‘here’s the data and a baseline model’). The project spans hardware, firmware, and software so the full system can be iterated.",
        "what_we_built": [
          "System design for an EEG acquisition-to-analysis workflow.",
          "Software-side ingestion and preprocessing concepts that support multiple experimental protocols.",
          "A roadmap for separating concerns (hardware, firmware, data, modeling) so the project can scale."
        ],
        "stack": [
          "Embedded electronics",
          "Streaming/data pipelines",
          "Python ML tooling"
        ],
      }
    },
    
    "nano-robotics": {
      "title": "Nano — robotics stack (GH05T interface)",
      "description": `
            A robotics and systems engineering focused on reliable real-time interfaces: 
            sensing, control, and data paths that can connect to GH05T. Building a reliable hardware-to-software 
            interface layer (instrumentation, control, and real-time data paths), 
            with planned integration points for GH05T.`,
      "img": "/research/Nano.png",
      "imgAlt": "Nano project logo.",
      "meta": "IEEE SPS @ UF · robotics · systems",
      "links": [
      ],
      "details": {
        "overview": "Nano is a systems project: the emphasis is on the ‘boring’ parts that make robotics usable in practice—reliable interfaces, timing, and data integrity. It is intentionally designed to connect with biosignal research workflows when appropriate.",
        "what_we_built": [
          "Interface and timing design principles for sensor and actuator loops.",
          "Instrumented data paths so experiments can be logged and analyzed.",
          "Integration planning so robotics components can share infrastructure with other projects."
        ],
        "stack": [
          "Embedded systems",
          "Control + sensing",
          "Data logging"
        ],
      }
    },

    "ares-fitness": {
      "title": "Ares — minimal fitness tracker (speech + recommendations)",
      "description": `
          An intentionally simple workout + nutrition tracker that captures intent 
          via speech and provides lightweight coaching recommendations. "A minimal UI that reduces friction: 
          capture what a user did (often via speech), keep logging consistent, 
          and generate small recommendations that improve adherence over time.`,
      "img": "/research/Ares.png",
      "imgAlt": "Ares project logo.",
      "meta": "IEEE SPS @ UF · app · personalization",
      "links": [
      ],
      "details": {
        "overview": "Most fitness apps fail for simple reasons: too much friction and too much complexity. Ares is an experiment in the opposite direction—capture intent quickly, store the essentials, and provide recommendations that are easy to follow.",
        "what_we_built": [
               "Product concept and interaction model for speech-first logging.",
          "A recommendation framing focused on simple, actionable next steps.",
          "A roadmap that prioritizes consistency over feature breadth."
        ],
        "stack": [
          "App prototyping",
          "Speech-to-text (planned)",
          "Lightweight recommendation logic",
        ],
      }
    },

    "sinbad-wearables": {
      "title": "Sinbad — wearable capture & automation prototyping",
      "description": `
          Personal R&D on wearable capture workflows and automation, designed with privacy, consent, 
          and device-policy compliance in mind. This prototype explores wearable capture workflows and 
          automation for personal content creation, explicitly emphasizing responsible use and compliance with device policies.`,
      "img": "/research/Sinbad.png",
      "imgAlt": "Sinbad project logo.",
      "meta": "IEEE SPS @ UF · wearables · tool",
      "links": [
      ],
      "details": {
        "overview": "Sinbad is a sandbox for exploring what is possible with wearable devices: how capture, indexing, and lightweight automation could work end-to-end. The project is designed to be privacy-conscious and policy-compliant.",
        "what_we_built": [
          "Workflow design for capture → selection → export.",
          "Automation concepts for organizing and surfacing clips.",
          "Guardrails: privacy, consent, and compliance as first-class design constraint"
        ],
        "stack": [
          "Wearable workflow prototyping",
          "Automation scripting (concepts)",
          "Human-in-the-loop review"
        ],
      }
    },
}