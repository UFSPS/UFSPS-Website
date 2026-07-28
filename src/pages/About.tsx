import './styles/About.css';
import { eboardProfiles, pastEboardProfiles } from '../data/eboard.js';
import { chapterInfo } from '../data/chapter.js';
import Navbar from '../components/Navbar.js';
import PageContainer from '../components/PageContainer.js';
import Profile from '../components/Profile.js';
import Carousel from '../components/Carousel.js';
import Footer from '../components/Footer.js';
import { Link } from 'react-router-dom';

const images = [
    '/research/Ergo_Icon_nobg.png',
    '/research/Ora_Icon_nobg.png',
    '/research/Vie_Icon_nobg.png',
    '/research/Aude_Icon_nobg.png',
    '/research/PlatoCave.png',
];

const About = () => {
    const hasAlumni = chapterInfo.executiveBoardAlumni.length > 0;
    const hasAffiliations = chapterInfo.memberAffiliations.length > 0;

    return (
        <>
            <PageContainer className="wrapper">
                <Navbar />
                <div className="about-main-content-container">

                    <div className="about-section-container">
                        <h1>Who we are</h1>
                        <div className="about-image-text-container">
                            <div className="about-text">
                                <p>
                                IEEE SPS @ UF exists to make signal processing easier to enter and more exciting to practice. 
                                The chapter bridges coursework, research, and public technical community with programming that is serious about content and generous about access.
                                </p>
                                <p>
                                Members can expect hands-on workshops, project-facing work, and communication channels that keep new members connected between events.
                                </p>
                                <p>
                                The aim is not only to host events. It is to build an environment where students can learn fast, ask better questions, and move into meaningful technical work.
                                </p>
                            </div>
                            <div className="about-image">
                                <Carousel images={images} />
                            </div>
                        </div>
                    </div>

                    <div className="board-section-container">
                        <h1>Executive Board</h1>
                        <div className="profiles-container">
                            {eboardProfiles.map((profile) => (
                                <Profile
                                key={profile.name}
                                name={profile.name}
                                position={profile.position}
                                term={profile.term}
                                bio={profile.bio}
                                image={profile.image}
                                githubLink={profile.githubLink}
                                linkedinLink={profile.linkedinLink} />
                            ))}
                        </div>
                    </div>

                    <div className="board-section-container past-board-section-container">
                        <h1>Past Executive Board</h1>
                        <div className="profiles-container">
                            {pastEboardProfiles.map((profile) => (
                                <Profile
                                key={profile.name}
                                name={profile.name}
                                position={profile.position}
                                term={profile.term}
                                bio={profile.bio}
                                image={profile.image}
                                githubLink={profile.githubLink}
                                linkedinLink={profile.linkedinLink} />
                            ))}
                        </div>
                    </div>

                    <div className="alumni-section-container">
                        <h2>Executive Board Alumni</h2>
                        {hasAlumni ? (
                            <div className="alumni-links-container">
                                {chapterInfo.executiveBoardAlumni.map((alumnus) => (
                                    <div key={alumnus.name} className="alumni-link-row">
                                        <div>
                                            <h3>{alumnus.name}</h3>
                                            {(alumnus.role || alumnus.term) && (
                                                <p>{[alumnus.role, alumnus.term].filter(Boolean).join(' · ')}</p>
                                            )}
                                        </div>
                                        <div className="alumni-social-links">
                                            {alumnus.socialLinks.map((link) => (
                                                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="section-empty-state">
                                Alumni references and socials will be added as our board history grows.
                            </p>
                        )}
                        <Link to="/network" className="about-network-link">Open member and alumni network</Link>
                    </div>
                </div>

                <div className="affiliations-section-container">
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
                            Company, lab, and collaborator references will be added here as members opt in.
                        </p>
                    )}
                </div>

                <div className="partners-section-container">
                    <h2>Connected organizations</h2>
                    <div className="partners-links-container">
                        {chapterInfo.partnerLinks.map((partner) => (
                            <a key={partner.href} href={partner.href} target="_blank" rel="noreferrer" className="partner-link-card">
                                {partner.label}
                            </a>
                        ))}
                    </div>
                </div>
                <Footer />
            </PageContainer>
            
        </>
    );
};

export default About;
