import './styles/About.css';
import { eboardProfiles, pastEboardProfiles } from '../data/eboard.js';
import { chapterInfo } from '../data/chapter.js';
import PageContainer from '../components/PageContainer.js';
import Profile from '../components/Profile.js';
import Carousel, { type CarouselImage } from '../components/Carousel.js';
import { Link } from 'react-router-dom';

const carouselImages: CarouselImage[] = [
    { src: '/research/Ergo_Icon_nobg.png', alt: 'Ergo research project icon' },
    { src: '/research/Ora_Icon_nobg.png', alt: 'Ora research project icon' },
    { src: '/research/Vie_Icon_nobg.png', alt: 'Vie research project icon' },
    { src: '/research/Aude_Icon_nobg.png', alt: 'Aude research project icon' },
    { src: '/research/PlatoCave.png', alt: "Plato's Cave research project icon" },
];

const BoardGrid = ({ profiles }: { profiles: typeof eboardProfiles }) => (
    <div className="profiles-container">
        {profiles.map((profile) => (
            <Profile key={profile.name} {...profile} />
        ))}
    </div>
);

const About = () => {
    const hasAffiliations = chapterInfo.memberAffiliations.length > 0;

    return (
        <PageContainer>
            <main className="about-page container">
                <header className="page-header">
                    <span className="kicker">01 / About</span>
                    <h1>Who we are</h1>
                    <p className="lede">
                        IEEE SPS @ UF exists to make signal processing easier to enter and more exciting to practice.
                        The chapter bridges coursework, research, and public technical community with programming that is serious about content and generous about access.
                    </p>
                </header>

                <section className="about-section about-intro section">
                    <div className="about-intro-text">
                        <p>
                        Members can expect hands-on workshops, project-facing work, and communication channels that keep new members connected between events.
                        </p>
                        <p>
                        The aim is not only to host events. It is to build an environment where students can learn fast, ask better questions, and move into meaningful technical work.
                        </p>
                    </div>
                    <div className="about-intro-media">
                        <Carousel images={carouselImages} />
                    </div>
                </section>

                <hr className="rule" />

                <section className="about-section section">
                    <span className="kicker">02 / Leadership</span>
                    <h2>Executive Board</h2>
                    <BoardGrid profiles={eboardProfiles} />
                </section>

                <hr className="rule" />

                <section className="about-section section">
                    <span className="kicker">03 / Alumni</span>
                    <h2>Past Executive Board</h2>
                    <BoardGrid profiles={pastEboardProfiles} />
                    <Link to="/network" className="about-network-link">Open member and alumni network</Link>
                </section>

                <hr className="rule" />

                <section className="about-section section">
                    <span className="kicker">04 / Affiliations</span>
                    <h2>Our members have worked with</h2>
                    {hasAffiliations ? (
                        <div className="affiliations-links-container">
                            {chapterInfo.memberAffiliations.map((affiliation) => (
                                affiliation.href ? (
                                    <a key={affiliation.name} href={affiliation.href} target="_blank" rel="noreferrer" className="affiliation-link-card">
                                        {affiliation.name}
                                    </a>
                                ) : (
                                    <span key={affiliation.name} className="affiliation-link-card">
                                        {affiliation.name}
                                    </span>
                                )
                            ))}
                        </div>
                    ) : (
                        <p className="section-empty-state">
                            Company, lab, and collaborator references will be added as members opt in.
                        </p>
                    )}
                </section>

                <hr className="rule" />

                <section className="about-section section">
                    <span className="kicker">05 / Partners</span>
                    <h2>Connected organizations</h2>
                    <div className="partners-links-container">
                        {chapterInfo.partnerLinks.map((partner) => (
                            <a key={partner.href} href={partner.href} target="_blank" rel="noreferrer" className="partner-link-card">
                                {partner.label}
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        </PageContainer>
    );
};

export default About;
