import './styles/Footer.css';
import Logo from '../assets/SPS_Logo_Black.png';
import { SiInstagram, SiDiscord, SiLinkedin, SiLinktree, SiX } from 'react-icons/si';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content-container">
                
                <img className="footer-graphic" src={Logo} alt="black sps logo" />
                <div className="footer-link-container">
                    <div className="social-links">
                        <SiInstagram />
                        <SiDiscord />
                        <SiLinkedin />
                        <SiX />
                        <SiLinktree />
                    </div>
                    <div className="email-link">
                        
                    </div>
                    <p className="location-text">

                    </p>
                </div>
            
            </div>
        </div>
    );
};
export default Footer;