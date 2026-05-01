import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PageContainer from '../components/PageContainer.js';
import { collaborationOptions } from '../data/engagement.js';
import { chapterInfo } from '../data/chapter.js';
import './styles/Collaborate.css';

const Collaborate = () => (
  <PageContainer className="collaborate-wrapper">
    <Navbar />
    <main className="collaborate-main">
      <section className="collaborate-hero">
        <p className="section-kicker">Collaborate with SPS</p>
        <h1>Useful technical context for students.</h1>
        <p>
          IEEE SPS @ UF collaborates with labs, companies, faculty, and student organizations on
          workshops, research demos, recruiting events, and project support. Good collaborations
          keep the chapter useful, accessible, and student-led.
        </p>
        <a href={`mailto:${chapterInfo.email}`}>Start a conversation</a>
      </section>

      <section className="collaboration-grid">
        {collaborationOptions.map((option) => (
          <article key={option.title}>
            <span>{option.audience}</span>
            <h2>{option.title}</h2>
            <p>{option.description}</p>
            <ul>
              {option.examples.map((example) => <li key={example}>{example}</li>)}
            </ul>
            <a href={option.contactHref}>Contact SPS</a>
          </article>
        ))}
      </section>
    </main>
    <Footer />
  </PageContainer>
);

export default Collaborate;
