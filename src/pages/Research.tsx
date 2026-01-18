import './styles/Research.css';
import { projects } from '../data/projects.js';
import PageContainer from '../components/PageContainer.js';
import Navbar from '../components/Navbar.js';
import ProjectItem from '../components/ProjectItem.js';


const Research = () => {
    return (
        <PageContainer className="research-wrapper">
            <Navbar/>
            <div className="research-main-content-container">
                <h1>Our Research</h1>
                {Object.entries(projects).map(([id, item]) => (
                    <ProjectItem 
                    key={id}
                    project={item} />
                ))}
            </div>
        </PageContainer>
    );
};

export default Research;