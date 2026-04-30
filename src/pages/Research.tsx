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
                            IEEE SPS @ UF builds student-facing research projects around signals, systems, and machine perception.
                            Our work connects audio, video, biosignals, and scientific literature with the engineering needed to
                            collect data, build demos, and make results reproducible.
                        </p>
                        <p style={{fontWeight: '600'}}>
                            Want to contribute? Join our <a href="https://discord.gg/6GRymPjgKc" target="_blank">Discord!</a>
                        </p>
                    </div>
                </div>
                <div className="research-content-column">
                    <section className="research-philosophy-panel">
                        <h2>Research philosophy</h2>
                        <p>
                            We treat research as an engineering habit: define a useful question, build the smallest demo
                            that exposes the hard part, and keep the data path reproducible enough that other students can
                            inspect, extend, or challenge the result.
                        </p>
                        <div className="research-goals-grid">
                            <div>
                                <h3>Signal-first</h3>
                                <p>Audio, video, biosignals, and text are handled as measurable signals with structure.</p>
                            </div>
                            <div>
                                <h3>Demo-first</h3>
                                <p>Projects aim for tangible systems, not only slides or isolated notebooks.</p>
                            </div>
                            <div>
                                <h3>Reproducible</h3>
                                <p>Good artifacts, logs, and public code matter because students need to build on each other.</p>
                            </div>
                        </div>
                    </section>
                    <div className="research-proj-container">
                        {Object.entries(projects).map(([id, item]) => (
                            <ProjectItem key={id} project={item} />
                        ))}
                    </div>
                </div>
            </div>
        <Footer />
        </PageContainer>
    );
};

export default Research;
