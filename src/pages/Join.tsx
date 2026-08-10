import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer.js';
import { joinPaths } from '../data/engagement.js';
import './styles/Join.css';

const formatIndex = (index: number) => String(index + 1).padStart(2, '0');

const Join = () => (
  <PageContainer>
    <main className="join-page container">
      <header className="page-header">
        <p className="kicker">Join SPS</p>
        <h1>Find a path into the chapter.</h1>
        <p className="lede">
          You do not need a signal-processing background to start. SPS works best when students
          enter through a concrete next step: a workshop, a project, a community channel, or an
          operations role.
        </p>
      </header>

      <section className="section">
        <div className="join-path-grid">
          {joinPaths.map((path, index) => {
            const cta = (
              <>
                {path.ctaLabel} <span aria-hidden="true">→</span>
              </>
            );
            return (
              <article key={path.title} className="card card--interactive join-path-card">
                <h2>
                  <span className="join-path-index" aria-hidden="true">
                    {formatIndex(index)} /{' '}
                  </span>
                  {path.title}
                </h2>
                <p>{path.description}</p>
                <ol>
                  {path.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                {path.href.startsWith('/') ? (
                  <Link to={path.href} className="btn">
                    {cta}
                  </Link>
                ) : (
                  <a href={path.href} className="btn">
                    {cta}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  </PageContainer>
);

export default Join;
