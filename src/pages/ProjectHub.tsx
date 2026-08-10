import { Link, useParams } from 'react-router-dom';
import PageContainer from '../components/PageContainer.js';
import { StatusPill } from '../components/ProjectItem.js';
import { getProjectBySlug, projectList } from '../data/projects.js';
import './styles/ProjectHub.css';

const formatStatus = (value: string) => value.replace('-', ' ');

const ProjectHub = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <PageContainer className="project-hub-wrapper">
        <main className="container project-not-found">
          <p className="kicker">Research</p>
          <h1>Project not found</h1>
          <p className="lede">This research hub does not exist yet.</p>
          <Link to="/research" className="project-hub-back">← Back to research</Link>
        </main>
      </PageContainer>
    );
  }

  const relatedProjects = projectList.filter((item) => item.slug !== project.slug).slice(0, 3);
  const progress = Math.min(Math.max(project.progress, 0), 100);

  return (
    <PageContainer className="project-hub-wrapper">
      <main className="container project-hub-main">
        <header className="project-hub-hero">
          <div className="project-hub-copy">
            <Link to="/research" className="project-hub-back">← Research</Link>
            <p className="kicker">Research / {project.shortTitle ?? project.title}</p>
            <h1>{project.shortTitle ?? project.title}</h1>
            <p className="lede">{project.description}</p>
            <div className="project-hub-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="project-hub-image">
            <img src={project.img} alt={project.imgAlt} />
          </div>
        </header>

        <section className="project-hub-status-grid" aria-label="Project status">
          <div>
            <span className="stat-label">Status</span>
            <StatusPill kind="status" value={project.status} />
          </div>
          <div>
            <span className="stat-label">Health</span>
            <StatusPill kind="health" value={project.health} />
          </div>
          <div>
            <span className="stat-label">Phase</span>
            <strong>{project.phase}</strong>
          </div>
          <div>
            <span className="stat-label">Progress</span>
            <strong className="stat-value">{progress}%</strong>
          </div>
          <div>
            <span className="stat-label">Updated</span>
            <strong className="stat-value">{project.lastUpdated}</strong>
          </div>
        </section>

        <section className="project-hub-content">
          <article>
            <h2>Overview</h2>
            <p>{project.details.overview}</p>
          </article>
          {project.details.problem && (
            <article>
              <h2>Problem</h2>
              <p>{project.details.problem}</p>
            </article>
          )}
          <article>
            <h2>Current Focus</h2>
            <ul>
              {(project.details.current_focus ?? project.details.what_we_built).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Roadmap</h2>
            <div className="project-roadmap">
              {(project.details.roadmap ?? []).map((item) => (
                <div key={item.label} className={`roadmap-item roadmap-${item.state}`}>
                  <span>{formatStatus(item.state)}</span>
                  <strong>{item.label}</strong>
                  {item.date && <p>{item.date}</p>}
                </div>
              ))}
            </div>
          </article>
          <article>
            <h2>Stack</h2>
            <div className="project-hub-tags">
              {project.details.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
          {project.links && project.links.length > 0 && (
            <article>
              <h2>Links</h2>
              <div className="project-link-list">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </article>
          )}
        </section>

        <section className="related-projects">
          <h2>Related projects</h2>
          <div>
            {relatedProjects.map((item) => (
              <Link key={item.slug} to={`/research/${item.slug}`}>{item.shortTitle ?? item.title}</Link>
            ))}
          </div>
        </section>
      </main>
    </PageContainer>
  );
};

export default ProjectHub;
