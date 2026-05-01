import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PageContainer from '../components/PageContainer.js';
import { joinPaths } from '../data/engagement.js';
import './styles/Join.css';

const Join = () => (
  <PageContainer className="join-wrapper">
    <Navbar />
    <main className="join-main">
      <section className="join-hero">
        <p className="section-kicker">Join SPS</p>
        <h1>Find a path into the chapter.</h1>
        <p>
          You do not need a signal-processing background to start. SPS works best when students
          enter through a concrete next step: a workshop, a project, a community channel, or an
          operations role.
        </p>
      </section>
      <section className="join-path-grid">
        {joinPaths.map((path) => (
          <article key={path.title} className="join-path-card">
            <h2>{path.title}</h2>
            <p>{path.description}</p>
            <ol>
              {path.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <a href={path.href}>{path.ctaLabel}</a>
          </article>
        ))}
      </section>
    </main>
    <Footer />
  </PageContainer>
);

export default Join;
