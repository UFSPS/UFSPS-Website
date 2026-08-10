import './styles/Research.css';
import { Link } from 'react-router-dom';
import { projectList } from '../data/projects.js';
import { pillars } from '../data/pillars.js';
import { chapterInfo } from '../data/chapter.js';
import PageContainer from '../components/PageContainer.js';
import ProjectItem from '../components/ProjectItem.js';

const discordHref = chapterInfo.socialLinks.find((link) => link.label === 'Discord')?.href;

const Research = () => {
    return (
        <PageContainer className="research-wrapper">
            <main className="container">
                <header className="page-header">
                    <p className="kicker">01 / Research</p>
                    <h1>Our research</h1>
                    <p className="lede">
                        UF SPS builds student-facing research projects around signals, systems, and machine perception.
                        Our work connects real signal domains with the engineering needed to collect data, build demos,
                        and make results reproducible.
                    </p>
                    <p className="research-join">Want to contribute?</p>
                    <div className="research-cta-row">
                        {discordHref && (
                            <a
                                className="btn btn--accent"
                                href={discordHref}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join our Discord →
                            </a>
                        )}
                        <Link className="btn" to="/research/status">View status dashboard</Link>
                    </div>
                </header>

                <section className="section research-philosophy">
                    <h2>Research philosophy</h2>
                    <p>
                        We treat research as an engineering habit: define a useful question, build the smallest demo
                        that exposes the hard part, and keep the data path reproducible enough that other students can
                        inspect, extend, or challenge the result.
                    </p>
                    <div className="pillar-grid">
                        {pillars.map((pillar, index) => (
                            <div className="pillar-cell" key={pillar.title}>
                                <span className="pillar-cell-index" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                    <Link className="research-philosophy-link" to="/research/philosophy">
                        Read the full philosophy →
                    </Link>
                </section>

                <section className="section research-projects">
                    <h2>Projects</h2>
                    <div className="research-proj-grid">
                        {projectList.map((item) => (
                            <ProjectItem key={item.slug} project={item} />
                        ))}
                    </div>
                </section>
            </main>
        </PageContainer>
    );
};

export default Research;
