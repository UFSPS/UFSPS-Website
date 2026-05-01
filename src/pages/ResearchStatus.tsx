import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PageContainer from '../components/PageContainer.js';
import { projectList } from '../data/projects.js';
import './styles/ResearchStatus.css';

const formatStatus = (value: string) => value.replace('-', ' ');

const ResearchStatus = () => {
  const activeCount = projectList.filter((project) => project.status === 'active').length;
  const watchCount = projectList.filter((project) => project.health !== 'on-track').length;
  const averageProgress = Math.round(projectList.reduce((sum, project) => sum + project.progress, 0) / projectList.length);

  return (
    <PageContainer className="status-wrapper">
      <Navbar />
      <main className="status-main">
        <section className="status-hero">
          <div>
            <p className="section-kicker">Static project dashboard</p>
            <h1>Research status</h1>
            <p>
              A concise view of active SPS research work. Status is curated in the repo so prospective
              contributors can see where each project stands before joining a call.
            </p>
          </div>
          <Link to="/research" className="status-hero-link">Back to research</Link>
        </section>

        <section className="status-summary-grid">
          <div><span>Projects</span><strong>{projectList.length}</strong></div>
          <div><span>Active</span><strong>{activeCount}</strong></div>
          <div><span>Watch items</span><strong>{watchCount}</strong></div>
          <div><span>Avg. progress</span><strong>{averageProgress}%</strong></div>
        </section>

        <section className="status-project-list">
          {projectList.map((project) => (
            <article key={project.slug} className="status-project-card">
              <div className="status-project-heading">
                <div>
                  <h2>{project.shortTitle ?? project.title}</h2>
                  <p>{project.phase}</p>
                </div>
                <Link to={`/research/${project.slug}`}>Open hub</Link>
              </div>
              <div className="status-meta-row">
                <span>{formatStatus(project.status)}</span>
                <span>{formatStatus(project.health)}</span>
                <span>Updated {project.lastUpdated}</span>
              </div>
              <div className="status-progress" aria-label={`${project.shortTitle ?? project.title} progress ${project.progress}%`}>
                <div style={{ width: `${Math.min(Math.max(project.progress, 0), 100)}%` }} />
              </div>
              {project.nextMilestone && <p className="status-next">Next: {project.nextMilestone}</p>}
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </PageContainer>
  );
};

export default ResearchStatus;
