import './styles/Navbar.css';
import Logo from '../assets/SPS_Logo.png';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {
    style?: React.CSSProperties
};

const Navbar = ({style}: NavbarProps) => {
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
      <div className={ `navbar ${isScrolled ? 'scrolled' : ''}` } style={style}>
        
        <Link to="/">
          <div className="logo-section">
            <img src={Logo} className="logo"/>
            <div className="logo-div"></div>
            <p className="logo-text">
              <span>University of Florida</span>
              <br/>
              IEEE Student Branch
            </p>
          </div>
        </Link>
        
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/research">RESEARCH</NavLink>
          <NavLink to="/resources">RESOURCES</NavLink>
        </div>
      </div>
    );
};
export default Navbar;