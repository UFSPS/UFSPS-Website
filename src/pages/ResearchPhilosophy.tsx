import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer.js';
import { pillars } from '../data/pillars.js';
import './styles/ResearchPhilosophy.css';

const ResearchPhilosophy = () => (
  <PageContainer className="philosophy-wrapper">
    <main className="container">
      <header className="page-header">
        <p className="kicker">Research / Philosophy</p>
        <h1>Build artifacts another student can inspect.</h1>
        <p className="lede">
          SPS research is intentionally demo-first and reproducible. A project succeeds when it
          teaches the next contributor how to ask a sharper question, not when it hides complexity
          behind a polished slide.
        </p>
        <div className="philosophy-cta-row">
          <Link className="btn" to="/research">View research projects →</Link>
        </div>
      </header>

      <div className="philosophy-pillars">
        {pillars.map((pillar, index) => (
          <section className="pillar-section" key={pillar.title}>
            <h2>
              <span className="pillar-section-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')} /
              </span>
              {pillar.title}
            </h2>
            <p>{pillar.description}</p>
          </section>
        ))}
      </div>
    </main>
  </PageContainer>
);

export default ResearchPhilosophy;
