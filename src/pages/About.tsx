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
                            <Profile name="Raule Valle" position="President" githubLink="https://github.com/Jibby2k1" linkedinLink="https://www.linkedin.com/in/raul-valle1/"/>
                            <Profile name="Matheus Maldaner" position="Vice President"/>
                            <Profile name="" position=""/>
                            <Profile name="" position=""/>
                            <Profile name="" position=""/>
                            <Profile name="Tiffany Huang" position="Chief of Operations" githubLink="https://github.com/narcistiq" linkedinLink="https://www.linkedin.com/in/tiffanyhuang1010/"/>
                            <Profile name="" position=""/>
                            <Profile name="" position=""/>
                            <Profile name="" position=""/>
                            <Profile name="" position=""/>
                        </div>
                    </div>
                </div>
                <Footer />
            </PageContainer>
            
        </>
    );
};

export default About;