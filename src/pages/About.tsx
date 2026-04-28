import './styles/About.css';
import { eboardProfiles } from '../data/eboard.js';
import { chapterInfo } from '../data/chapter.js';
import Navbar from '../components/Navbar.js';
import PageContainer from '../components/PageContainer.js';
import Profile from '../components/Profile.js';
import Carousel from '../components/Carousel.js';
import Footer from '../components/Footer.js';

const imageModules = import.meta.glob("../assets/research_teams/*.png", { eager: true });
const images = Object.values(imageModules).map((mod: any) => mod.default);

const About = () => {
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
                            {Object.entries(eboardProfiles).map(([position, profile]) => (
                                <Profile 
                                key={position}
                                name={profile.name} 
                                position={position} 
                                term={profile.term}
                                bio={profile.bio}
                                image={profile.image}
                                githubLink={profile.githubLink}
                                linkedinLink={profile.linkedinLink} />
                            ))}
                        </div>
                    </div>
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