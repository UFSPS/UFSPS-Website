import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer.js';
import { StatusPill } from '../components/ProjectItem.js';
import { projectList } from '../data/projects.js';
import './styles/ResearchStatus.css';

const clampProgress = (value: number) => Math.min(Math.max(value, 0), 100);

const ResearchStatus = () => {
  const activeCount = projectList.filter((project) => project.status === 'active').length;
  const watchCount = projectList.filter((project) => project.health === 'watch').length;
  const blockedCount = projectList.filter((project) => project.health === 'blocked').length;
  const averageProgress = Math.round(projectList.reduce((sum, project) => sum + project.progress, 0) / projectList.length);

  return (
    <PageContainer className="status-wrapper">
      <main className="container status-main">
        <header className="page-header">
          <p className="kicker">Project dashboard</p>
          <h1>Research status</h1>
          <p className="lede">
            A concise view of active SPS research work. Status is curated in the repo so prospective
            contributors can see where each project stands before joining a call.
          </p>
          <Link to="/research" className="status-back">← Back to research</Link>
        </header>

        <section className="status-summary" aria-label="Summary">
          <div><span>Projects</span><strong>{projectList.length}</strong></div>
          <div><span>Active</span><strong>{activeCount}</strong></div>
          <div><span>Watch</span><strong>{watchCount}</strong></div>
          <div><span>Blocked</span><strong>{blockedCount}</strong></div>
          <div><span>Avg. progress</span><strong>{averageProgress}%</strong></div>
        </section>

        <section className="status-project-list" aria-label="Projects">
          {projectList.map((project) => {
            const title = project.shortTitle ?? project.title;
            const progress = clampProgress(project.progress);
            return (
              <article key={project.slug} className="status-project">
                <div className="status-project-heading">
                  <div>
                    <h2>{title}</h2>
                    <p className="status-phase">{project.phase}</p>
                  </div>
                  <Link to={`/research/${project.slug}`} className="status-hub-link">Open hub →</Link>
                </div>
                <div className="status-meta-row">
                  <StatusPill kind="status" value={project.status} />
                  <StatusPill kind="health" value={project.health} />
                  <span className="status-updated">Updated {project.lastUpdated}</span>
                </div>
                <div className="status-progress-row">
                  <div
                    className="status-progress"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${title} progress`}
                  >
                    <div className="status-progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="status-progress-value">{progress}%</span>
                </div>
                {project.nextMilestone && (
                  <p className="status-next">
                    <span className="status-next-label">Next</span>
                    {project.nextMilestone}
                  </p>
                )}
              </article>
            );
          })}
        </section>
      </main>
    </PageContainer>
  );
};

export default ResearchStatus;
