import './styles/Resources.css';
import PageContainer from '../components/PageContainer.js';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import SwitchTab from "../components/SwitchTab.js";

const Resources = () => {
    return (
        <PageContainer className="resources-wrapper">
            <Navbar />
            <div className="workshop-title-container">
                <h1>Workshops</h1>
                <SwitchTab />
            </div>
        </PageContainer>
    );
};

export default Resources;