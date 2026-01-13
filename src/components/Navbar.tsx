import './styles/Navbar.css';
import Logo from '../assets/SPS_Logo.png';
import { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
      const navbar = document.querySelector('.navbar') as HTMLElement;

      const handleScroll = () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
  

    return (
      <div className="navbar">
        <div className="logo-section">
          <img src={Logo} className="logo"/>
          <div className="logo-div"></div>
          <p className="logo-text">
            <span style={{ color: "var(--black)", fontWeight: 700 }}>University of Florida</span>
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