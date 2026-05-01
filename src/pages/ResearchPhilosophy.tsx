import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PageContainer from '../components/PageContainer.js';
import './styles/ResearchPhilosophy.css';

const ResearchPhilosophy = () => (
  <PageContainer className="philosophy-wrapper">
    <Navbar />
    <main className="philosophy-main">
      <section className="philosophy-hero">
        <p className="section-kicker">Research philosophy</p>
        <h1>Build artifacts another student can inspect.</h1>
        <p>
          SPS research is intentionally demo-first and reproducible. A project succeeds when it
          teaches the next contributor how to ask a sharper question, not when it hides complexity
          behind a polished slide.
        </p>
        <Link to="/research">View research projects</Link>
      </section>

      <section className="philosophy-grid">
        <article>
          <h2>Signal-first</h2>
          <p>We treat audio, video, biosignals, text, and training logs as measurable signals with structure, noise, and assumptions.</p>
        </article>
        <article>
          <h2>Demo-first</h2>
          <p>Small working systems expose the hard parts faster than long plans. We build toward tangible experiments early.</p>
        </article>
        <article>
          <h2>Reproducible</h2>
          <p>Code, data notes, logs, and documentation matter because students need to inherit and challenge each other’s work.</p>
        </article>
        <article>
          <h2>Student-led</h2>
          <p>Faculty, labs, and companies can collaborate with SPS, but chapter work remains organized around student growth and ownership.</p>
        </article>
      </section>
    </main>
    <Footer />
  </PageContainer>
);

export default ResearchPhilosophy;
