import './styles/Footer.css';
import Logo from '../assets/SPS_Logo_Black.png';
import { SiInstagram, SiDiscord, SiLinkedin, SiLinktree, SiX } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content-container">
                
                <img className="footer-graphic" src={Logo} alt="black sps logo" />
                <div className="footer-link-container">
                    <div className="social-links">
                        <a href="https://www.instagram.com/uf.sps/"><SiInstagram /></a>
                        <a href="https://discord.gg/6GRymPjgKc"><SiDiscord /></a>
                        <SiLinkedin />
                        <SiX />
                        <SiLinktree />
                    </div>

                    <a href="mailto:ieee.sps.uf@gmail.com">
                        <div className="email-link">
                            <FiMail />
                        <p>ieee.sps.uf@gmail.com</p>
                        </div>
                    </a>
                    <p className="location-text">
                        Artificial Intelligence and Informatics Research Institute <br/>
                        432 Newell Drive, CISE Bldg E251 <br/>
                        Gainesville, Florida 32611-5585
                    </p>
                </div>
            
            </div>
        </div>
    );
};
export default Footer;