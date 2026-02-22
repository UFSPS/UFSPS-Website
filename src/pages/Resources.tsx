import './styles/Resources.css';

import PageContainer from '../components/PageContainer.js';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import SwitchTab from "../components/SwitchTab.js";
import WorkshopCard from '../components/Workshopcard.js';

const Resources = () => {
    return (
        <PageContainer className="resources-wrapper">
            <Navbar />
            <div className="workshop-title-container">
                <h1>Workshops</h1>
                <SwitchTab />
            </div>
            <div className="workshop-cards-container">
                {/* Example cards, replace with dynamic data as needed */}
                <WorkshopCard index={0} title="Intro to Quantum Computing" location = "UF" date="March 1, 2026" description="A beginner-friendly introduction to quantum computing principles." />
                <WorkshopCard index={1} title="Advanced AI Ethics" location = "UF" date="March 15, 2026" description="Discussion on ethical considerations in artificial intelligence." />
                <WorkshopCard index={2} title="Robotics Lab" location = "UF" date="April 5, 2026" description="Hands-on robotics workshop with live demos." />
                <WorkshopCard index={3} title="Data Science Fundamentals" location="UF" date="April 20, 2026" description="Learn the basics of data analysis and visualization techniques." />
            </div>
        </PageContainer>
    );
};

export default Resources;