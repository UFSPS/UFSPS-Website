import spsIcon from '../assets/project_icons/sps-icon.png';
import audeIcon from '../assets/project_icons/aude-icon.png';
import ergoIcon from '../assets/project_icons/ergo-icon.png';
import oraIcon from '../assets/project_icons/Ora_Icon_nobg.png';
import vieIcon from '../assets/project_icons/Vie_Icon_nobg.png';
import platoCaveImage from '../assets/project_icons/plato-cave.png';

export interface ProjectLink {
    label: string
    href: string
}

export interface Project {
    title: string
    summary: string
    img: string
    imgAlt: string
    meta: string
    tags: Array<string>
    links?: Array<ProjectLink>
    details: ProjectDetails
}

interface ProjectDetails {
    overview: string
    what_we_built: Array<string>
    stack: Array<string>
}

export const projects: Record<string, Project> =
{
    "curriculum-and-workshops": {
      "title": "Curriculum and Workshops",
      "summary": "A reusable chapter workshop track that ties analysis, probability, and machine learning to applied signal-processing examples with concrete notebooks and demos.",
      "img": spsIcon,
      "imgAlt": "IEEE SPS icon.",
      "meta": "Education · onboarding · community",
      "tags": [
        "Workshops",
        "Jupyter",
        "Teaching"
      ],
      "links": [
        {
          "label": "Open GitHub",
          "href": "https://github.com/Jibby2k1/SPS_Curriculum"
        },
        {
          "label": "Watch the talk",
          "href": "https://www.youtube.com/watch?v=yuJaMaA18js"
        }
      ],
      "details": {
        "overview": "This project is the chapter's reusable teaching track: the goal is to turn workshop preparation into a durable curriculum that new members can learn from before, during, and after events.",
        "what_we_built": [
          "A signals-first workshop sequence spanning analysis, probability, and machine learning topics.",
          "Concrete notebooks, demos, and references that can be reused across chapter events.",
          "A public teaching asset that helps students onboard into chapter programming more quickly."
        ],
        "stack": [
          "Python",
          "Jupyter",
          "Signal processing curriculum design"
        ],
      }
    },
    "aude": {
      "title": "Aude",
      "summary": "A chapter-affiliated research track on machine listening, source separation, and localization using hardware-informed data collection and evaluation workflows.",
      "img": audeIcon,
      "imgAlt": "Aude project icon.",
      "meta": "Audio ML · sensing · experimentation",
      "tags": [
        "Audio ML",
        "Research",
        "Hardware"
      ],
      "links": [
        {
          "label": "Open GitHub",
          "href": "https://github.com/Jibby2k1/Aude"
        }
      ],
      "details": {
        "overview": "Aude focuses on machine listening systems that connect model design to real recording and evaluation workflows, instead of treating data collection as an afterthought.",
        "what_we_built": [
          "A research direction around source separation, localization, and machine listening workflows.",
          "Hardware-informed data collection and evaluation ideas for testing models in more realistic settings.",
          "A chapter-facing project that gives members a concrete entry point into audio ML experimentation."
        ],
        "stack": [
          "Python",
          "Audio ML",
          "Data collection and evaluation tooling"
        ],
      }
    },
    "ergo": {
      "title": "Ergo",
      "summary": "A neuroengineering platform for EMG and EEG acquisition, feature extraction, and dynamical-systems experiments connected to human-in-the-loop control.",
      "img": ergoIcon,
      "imgAlt": "Ergo project icon.",
      "meta": "Neuroengineering · systems · biosignals",
      "tags": [
        "EEG",
        "EMG",
        "Systems"
      ],
      "links": [
        {
          "label": "Open GitHub",
          "href": "https://github.com/Jibby2k1/Ergo"
        }
      ],
      "details": {
        "overview": "Ergo is a biosignals and systems project built around human-in-the-loop control, with an emphasis on usable acquisition, signal features, and experimental workflows.",
        "what_we_built": [
          "A project direction spanning EMG and EEG acquisition, analysis, and experimentation.",
          "A technical framing for connecting biosignals to dynamical-systems ideas and control workflows.",
          "A research-facing platform that helps make neuroengineering work visible to the chapter."
        ],
        "stack": [
          "Python",
          "Biosignals",
          "Signal processing and systems experiments"
        ],
      }
    },
    "ora": {
      "title": "Ora",
      "summary": "A local-first fitness companion built with Flutter around training, diet logging, progress check-ins, voice-first input, and optional cloud-assisted parsing.",
      "img": oraIcon,
      "imgAlt": "Ora project icon.",
      "meta": "Flutter · fitness · local-first",
      "tags": [
        "Flutter",
        "Local-first",
        "Health"
      ],
      "links": [
        {
          "label": "Open GitHub",
          "href": "https://github.com/Ora-SPS/Ora"
        }
      ],
      "details": {
        "overview": "Ora explores how a practical local-first mobile app can reduce friction around fitness tracking while still supporting richer inputs like voice-assisted logging.",
        "what_we_built": [
          "A local-first Flutter app concept around training, diet logging, and progress check-ins.",
          "A product direction that emphasizes voice-first capture and optional cloud-assisted parsing.",
          "A chapter project that connects app engineering with signal and ML-adjacent workflows."
        ],
        "stack": [
          "Flutter",
          "Local-first app architecture",
          "Voice-assisted input workflows"
        ],
      }
    },
    "vie": {
      "title": "Vie",
      "summary": "A chapter-affiliated effort on biologically plausible video scene analysis systems that learn and reason from real-world dynamics, with experiment, dataset, and hardware documentation.",
      "img": vieIcon,
      "imgAlt": "Vie project icon.",
      "meta": "Computer vision · scene analysis · research",
      "tags": [
        "Vision",
        "Research",
        "Dynamics"
      ],
      "links": [
        {
          "label": "Open GitHub",
          "href": "https://github.com/Vie-SPS/Vie"
        }
      ],
      "details": {
        "overview": "Vie is a computer vision research effort centered on scene analysis from real-world dynamics, with an emphasis on biologically plausible approaches and reproducible experimentation.",
        "what_we_built": [
          "A project direction around video scene analysis, datasets, and experimental workflows.",
          "Documentation spanning experiments, hardware considerations, and research context.",
          "A chapter-facing research effort that helps students see how vision projects are organized end to end."
        ],
        "stack": [
          "Computer vision",
          "Experiment documentation",
          "Dataset and hardware workflows"
        ],
      }
    },
    "platos-cave": {
      "title": "Plato's Cave",
      "summary": "Tooling for literature review that turns papers into structured claims-and-evidence graphs so teams can read faster and compare work more systematically.",
      "img": platoCaveImage,
      "imgAlt": "Plato's Cave project graphic.",
      "meta": "Research tooling · language + structure",
      "tags": [
        "Tooling",
        "LLMs",
        "Reproducibility"
      ],
      "links": [
        {
          "label": "Open GitHub",
          "href": "https://github.com/matheusmaldaner/PlatosCave"
        }
      ],
      "details": {
        "overview": "Plato's Cave helps literature review move faster by converting papers into structured claims-and-evidence graphs that can be compared across a collection.",
        "what_we_built": [
          "A workflow for extracting structured nodes such as claims, evidence, and limitations from papers.",
          "A tooling direction for comparing papers more systematically across a project or research thread.",
          "A chapter project that makes research tooling itself a visible technical contribution."
        ],
        "stack": [
          "Python",
          "LLM-assisted extraction",
          "Research tooling"
        ],
      }
    },
}
