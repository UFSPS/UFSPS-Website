import './styles/Resources.css';
import PageContainer from '../components/PageContainer.js';
import Navbar from "../components/Navbar.js";
import { chapterInfo } from '../data/chapter.js';
import { events, pastEvents } from '../data/events.js';

const Resources = () => {
    const materialEvents = pastEvents().filter((event) => event.links.repo || event.links.slides || event.links.recording);
    const activeTags = Array.from(new Set(events.flatMap((event) => event.tags))).sort();

    return (
        <PageContainer className="resources-wrapper">
            <Navbar />
            <div className="workshop-title-container">
                <p className="section-kicker">Learning library</p>
                <h1>Resources</h1>
                <p>
                    Durable links for SPS workshops, project learning, and technical study. Events and RSVPs now live on the Events page.
                </p>
            </div>

            <section className="resource-links-section">
                <h2>Shared resources</h2>
                <div className="resource-links-grid">
                    {chapterInfo.resourceLinks.map((resource) => (
                        <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer" className="resource-link-card">
                            <span>{resource.label}</span>
                            <p>{resource.description}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="resource-links-section">
                <h2>Workshop materials</h2>
                <div className="resource-material-grid">
                    {materialEvents.map((event) => (
                        <article key={event.id} className="resource-material-card">
                            <h3>{event.title}</h3>
                            <p>{event.summary}</p>
                            <div>
                                {event.links.repo && <a href={event.links.repo} target="_blank" rel="noopener noreferrer">Repo</a>}
                                {event.links.slides && <a href={event.links.slides} target="_blank" rel="noopener noreferrer">Slides</a>}
                                {event.links.recording && <a href={event.links.recording} target="_blank" rel="noopener noreferrer">Recording</a>}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="resource-links-section">
                <h2>Topics</h2>
                <div className="resource-topic-list">
                    {activeTags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
            </section>
        </PageContainer>
    );
};

export default Resources;
