import './styles/About.css';
import Navbar from '../components/Navbar.js';
import PageContainer from '../components/PageContainer.js';

const About = () => {
    return (
        <>
            <PageContainer className="wrapper">
                <Navbar />
                <div className="about-section-container">
                    <h1>WHO WE ARE</h1>
                    <div className="about-image-text-container">

                        <div className="about-text">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam tempus purus et nulla facilisis, eu fringilla leo 
                            sagittis. Nam quis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus purus et nulla facilisis, eu
                            </p>
                        </div>
                        <div className="about-image">

                        </div>
                    </div>
                </div>
            </PageContainer>
            
        </>
    );
};

export default About;