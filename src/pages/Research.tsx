import './styles/Research.css';
import { projects } from '../data/projects.js';
import PageContainer from '../components/PageContainer.js';
import Navbar from '../components/Navbar.js';
import ProjectItem from '../components/ProjectItem.js';
import Footer from '../components/Footer.js';

const Research = () => {
    return (
        <PageContainer className="research-wrapper">
            <Navbar/>
            <div className="research-main-content-container">
                <div className="research-main-cont">
                    <h1>Our Research</h1>
                    <div className="research-desc">
                        <p>
                            The IEEE Signal Processing Society (SPS) is a professional community for people who
                            work on signals (audio, images, sensors) and the math and software that makes sense of them. 
                            At we build student-facing projects that make the ideas tangible: workshops, open-source tooling, and end-to-end prototypes.
                        </p>
                        <p style={{fontWeight: '600'}}>
                            Want to contribute? Join our <a href="https://discord.gg/6GRymPjgKc" target="_blank">Discord!</a>
                        </p>
                    </div>
                </div>
                <div className="research-proj-container">
                    {Object.entries(projects).map(([id, item]) => (
                        <ProjectItem project={item} />
                    ))}
                </div>
            </div>
        <Footer />
        </PageContainer>
    );
};

export default Research;