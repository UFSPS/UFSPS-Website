import './styles/Footer.css';
import Logo from '../assets/SPS_Logo_Black.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content-container">
                
                <img className="footer-graphic" src={Logo} alt="black sps logo" />
                <div className="footer-link-container">
                    <div className="social-links">

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