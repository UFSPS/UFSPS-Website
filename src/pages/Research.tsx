import './styles/Research.css';
import SEO from '../components/SEO.js';
import { projects } from '../data/projects.js';
import { chapterInfo } from '../data/chapter.js';
import PageContainer from '../components/PageContainer.js';
import Navbar from '../components/Navbar.js';
import ProjectItem from '../components/ProjectItem.js';
import Footer from '../components/Footer.js';

const Research = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Research and Projects | IEEE SPS @ UF",
        "description": "Chapter-affiliated projects and workshop-facing technical work from IEEE SPS at the University of Florida.",
        "url": `${chapterInfo.baseUrl}/research`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": Object.values(projects).map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": project.title,
                "description": project.summary,
            })),
        },
    };

    return (
        <PageContainer className="research-wrapper">
            <SEO
                title="Research | IEEE SPS @ UF"
                description="Chapter-affiliated projects and workshop-facing technical work from IEEE SPS at the University of Florida."
                path="/research"
                structuredData={structuredData}
            />
            <Navbar/>
            <div className="research-main-content-container">
                <div className="research-main-cont">
                    <h1>Research & Projects</h1>
                    <div className="research-desc">
                        <p>
                            IEEE SPS @ UF uses projects to make chapter work visible. The goal is not only to talk
                            about signal processing, but to build technical artifacts that connect workshops, research,
                            and engineering practice.
                        </p>
                        <p>
                            The chapter ecosystem now spans reusable curriculum, research-facing tooling, audio and
                            vision efforts, neuroengineering, and local-first application work.
                        </p>
                        <p style={{fontWeight: '600'}}>
                            Want to contribute? Join our <a href="https://discord.gg/6GRymPjgKc" target="_blank" rel="noreferrer">Discord</a>.
                        </p>
                    </div>
                </div>
                <div className="research-proj-container">
                    {Object.entries(projects).map(([id, item]) => (
                        <ProjectItem key={id} project={item} />
                    ))}
                </div>
            </div>
        <Footer />
        </PageContainer>
    );
};

export default Research;
