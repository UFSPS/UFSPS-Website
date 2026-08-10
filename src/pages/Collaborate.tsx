import PageContainer from '../components/PageContainer.js';
import { collaborationOptions } from '../data/engagement.js';
import type { CollaborationOption } from '../data/engagement.js';
import { chapterInfo } from '../data/chapter.js';
import './styles/Collaborate.css';

/* Each card's mailto already carries an audience-specific subject line;
   the visible CTA label and aria-label are differentiated to match. */
const ctaByAudience: Record<CollaborationOption['audience'], { label: string; ariaLabel: string }> = {
  Companies: {
    label: 'Propose a workshop',
    ariaLabel: 'Propose a workshop — email UF SPS about technical workshops',
  },
  Labs: {
    label: 'Pitch a demo',
    ariaLabel: 'Pitch a demo — email UF SPS about research demos',
  },
  Faculty: {
    label: 'Discuss a project',
    ariaLabel: 'Discuss a project — email UF SPS about faculty connections',
  },
  'Student Organizations': {
    label: 'General inquiry',
    ariaLabel: 'General inquiry — email UF SPS about student organization events',
  },
};

const Collaborate = () => (
  <PageContainer>
    <main className="collaborate-page container">
      <header className="page-header">
        <p className="kicker">Collaborate with SPS</p>
        <h1>Work with the chapter.</h1>
        <p className="lede">
          IEEE SPS @ UF collaborates with labs, companies, faculty, and student organizations on
          workshops, research demos, and project support. Good collaborations keep the chapter
          useful, accessible, and student-led.
        </p>
        <a className="btn btn--accent collaborate-header-cta" href={`mailto:${chapterInfo.email}`}>
          Start a conversation <span aria-hidden="true">→</span>
        </a>
      </header>

      <section className="section">
        <div className="collaboration-grid">
          {collaborationOptions.map((option) => {
            const cta = ctaByAudience[option.audience];
            return (
              <article key={option.title} className="card card--interactive collaboration-card">
                <p className="collaboration-audience">{option.audience}</p>
                <h2>{option.title}</h2>
                <p>{option.description}</p>
                <ul>
                  {option.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
                <a className="btn" href={option.contactHref} aria-label={cta.ariaLabel}>
                  {cta.label} <span aria-hidden="true">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  </PageContainer>
);

export default Collaborate;
