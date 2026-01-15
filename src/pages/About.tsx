import './styles/About.css';
import Navbar from '../components/Navbar.js';
import PageContainer from '../components/PageContainer.js';
import Profile from '../components/Profile.js';
import Footer from '../components/Footer.js';

const About = () => {
    return (
        <>
            <PageContainer className="wrapper">
                <Navbar />
                <div className="main-content-container">

                    <div className="about-section-container">
                        <h1>Who we are</h1>
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

                    <div className="board-section-container">
                        <h1>Executive Board</h1>
                        <div className="profiles-container">
                            <Profile />
                            <Profile />
                            <Profile />
                            <Profile />
                            <Profile />
                            <Profile />
                            <Profile />
                            <Profile />
                            <Profile />
                            <Profile />
                        </div>
                    </div>
                </div>
                <Footer />
            </PageContainer>
            
        </>
    );
};

export default About;