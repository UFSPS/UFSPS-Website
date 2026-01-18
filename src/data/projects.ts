export interface Project {
    title: string
    description : string
    img: string
    imgAlt: string
    meta: string
    links?: Array<ProjectLinks>
    details: ProjectDetails
}

interface ProjectLinks {
    github?: string
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
      "links": [],
      "details": {
        "overview": "Reading dozens of papers is slow partly because the structure is inconsistent. Plato’s Cave uses modern language models to extract a consistent structure (e.g., claims, evidence, limitations) and then runs a scoring pipeline so papers can be compared more systematically.",
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
}