import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PageContainer from '../components/PageContainer.js';
import { getProjectBySlug, projectList } from '../data/projects.js';
import './styles/ProjectHub.css';

const formatStatus = (value: string) => value.replace('-', ' ');

const ProjectHub = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <PageContainer className="project-hub-wrapper">
        <Navbar />
        <main className="project-not-found">
          <h1>Project not found</h1>
          <p>This research hub does not exist yet.</p>
          <Link to="/research">Back to research</Link>
        </main>
        <Footer />
      </PageContainer>
    );
  }

  const relatedProjects = projectList.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <PageContainer className="project-hub-wrapper">
      <Navbar />
      <main className="project-hub-main">
        <section className="project-hub-hero">
          <div className="project-hub-copy">
            <Link to="/research" className="project-hub-back">Research</Link>
            <h1>{project.shortTitle ?? project.title}</h1>
            <p>{project.description}</p>
            <div className="project-hub-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="project-hub-image">
            <img src={project.img} alt={project.imgAlt} />
          </div>
        </section>

        <section className="project-hub-status-grid">
          <div>
            <span>Status</span>
            <strong>{formatStatus(project.status)}</strong>
          </div>
          <div>
            <span>Health</span>
            <strong>{formatStatus(project.health)}</strong>
          </div>
          <div>
            <span>Phase</span>
            <strong>{project.phase}</strong>
          </div>
          <div>
            <span>Progress</span>
            <strong>{project.progress}%</strong>
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
          <article>
            <h2>Links</h2>
            <div className="project-link-list">
              {project.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
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
      <Footer />
    </PageContainer>
  );
};

export default ProjectHub;
