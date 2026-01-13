import './styles/Navbar.css';
import Logo from '../assets/SPS_Logo.png';
import WhiteLogo from '../assets/SPS_Logo_White.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      
      const handleScroll = () => {
      if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
  

    return (
      <div className={ `navbar ${isScrolled ? 'scrolled' : ''}` }>
        <div className="logo-section">
          <img src={isScrolled ? WhiteLogo : Logo} className="logo"/>
          <div className="logo-div"></div>
          <p className="logo-text">
            <span>University of Florida</span>
            <br/>
            IEEE Student Branch
          </p>
        </div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#research">RESEARCH</a>
          <a href="#people">PEOPLE</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    );
};
export default Navbar;