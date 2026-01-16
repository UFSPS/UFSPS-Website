import './styles/Research.css';
import PageContainer from '../components/PageContainer.js';
import Navbar from '../components/Navbar.js';

const Research = () => {
    return (
        <PageContainer className="research-wrapper">
            <Navbar/>
            <div className="research-main-content-container">
                <h1>Our Research</h1>
            </div>
        </PageContainer>
    );
};

export default Research;