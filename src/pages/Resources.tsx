import './styles/Resources.css';
import { chapterInfo } from '../data/chapter.js';
import { events, pastEvents } from '../data/events.js';
import PageContainer from '../components/PageContainer.js';

const Resources = () => {
    const materialEvents = pastEvents().filter((event) => event.links.repo || event.links.slides || event.links.recording);
    const activeTags = Array.from(new Set(events.flatMap((event) => event.tags))).sort();
    const workshopRepo = chapterInfo.resourceLinks.find((resource) => resource.label === 'Workshop GitHub');

    return (
        <PageContainer>
            <main className="resources-page container">
                <header className="page-header">
                    <p className="kicker">Learning library</p>
                    <h1>Resources</h1>
                    <p className="lede">
                        Durable links for SPS workshops, project learning, and technical study.
                    </p>
                </header>

                <section className="resources-section">
                    <h2>Shared resources</h2>
                    <ul className="resource-list">
                        {chapterInfo.resourceLinks.map((resource, index) => (
                            <li key={resource.href}>
                                <a className="resource-row" href={resource.href} target="_blank" rel="noreferrer">
                                    <span className="resource-row-index mono" aria-hidden="true">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="resource-row-body">
                                        <span className="resource-row-label">{resource.label}</span>
                                        <span className="resource-row-desc">{resource.description}</span>
                                    </span>
                                    <span className="resource-row-arrow mono" aria-hidden="true">→</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="resources-section">
                    <h2>Workshop materials</h2>
                    <p>
                        Notes and code from these past sessions live in the shared workshop curriculum repository.
                    </p>
                    <ul className="workshop-list">
                        {materialEvents.map((event) => (
                            <li key={event.id} className="workshop-row">
                                <span className="workshop-row-date mono">{event.startsAt.slice(0, 10)}</span>
                                <div className="workshop-row-body">
                                    <h3>{event.title}</h3>
                                    <p>{event.summary}</p>
                                    {(event.links.slides || event.links.recording) && (
                                        <div className="workshop-row-links">
                                            {event.links.slides && (
                                                <a href={event.links.slides} target="_blank" rel="noopener noreferrer">Slides</a>
                                            )}
                                            {event.links.recording && (
                                                <a href={event.links.recording} target="_blank" rel="noopener noreferrer">Recording</a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {workshopRepo && (
                        <a className="btn resources-repo-cta" href={workshopRepo.href} target="_blank" rel="noreferrer">
                            Workshop curriculum repository →
                        </a>
                    )}
                </section>

                <section className="resources-section">
                    <h2>Topics</h2>
                    <ul className="topic-list">
                        {activeTags.map((tag) => (
                            <li key={tag} className="topic-item mono">{tag}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </PageContainer>
    );
};

export default Resources;
