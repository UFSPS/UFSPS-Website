import './styles/About.css';
import SEO from '../components/SEO.js';
import { eboardProfiles } from '../data/eboard.js';
import { aboutCopy, chapterInfo } from '../data/chapter.js';
import Navbar from '../components/Navbar.js';
import PageContainer from '../components/PageContainer.js';
import Profile from '../components/Profile.js';
import Carousel from '../components/Carousel.js';
import Footer from '../components/Footer.js';

const imageModules = import.meta.glob("../assets/research_teams/*.png", { eager: true });
const images = Object.values(imageModules).map((mod: any) => mod.default);

const About = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About IEEE SPS @ UF",
        "description": "About the IEEE Signal Processing Society chapter at the University of Florida, its mission, leadership, and partners.",
        "url": `${chapterInfo.baseUrl}/about`,
        "mainEntity": {
            "@type": "Organization",
            "name": chapterInfo.name,
            "email": chapterInfo.email,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "432 Newell Drive, CISE Bldg E251",
                "addressLocality": "Gainesville",
                "addressRegion": "FL",
                "postalCode": "32611-5585",
                "addressCountry": "US"
            }
        }
    };

    return (
        <>
            <PageContainer className="wrapper">
                <SEO
                    title="About | IEEE SPS @ UF"
                    description="About the IEEE Signal Processing Society chapter at the University of Florida, its mission, leadership, and partners."
                    path="/about"
                    structuredData={structuredData}
                />
                <Navbar />
                <div className="about-main-content-container">

                    <div className="about-section-container">
                        <h1>{aboutCopy.title}</h1>
                        <div className="about-image-text-container">
                            <div className="about-text">
                                {aboutCopy.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>
                                        {paragraph}
                                    </p>
                                ))}
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
                </div>
                <Footer />
            </PageContainer>
            
        </>
    );
};

export default About;
