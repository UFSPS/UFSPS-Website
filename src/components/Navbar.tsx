import './styles/Navbar.css';
import Logo from '../assets/logo/SPS_Logo.png';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    style?: React.CSSProperties
};

const Navbar = ({style}: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

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
      <div className={ `navbar ${isScrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}` } style={style}>
        
        <Link to="/" onClick={() => setMobileOpen(false)}>
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

        <button
          className="nav-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
        
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMobileOpen(false)}>HOME</Link>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>ABOUT</NavLink>
          <NavLink to="/research" onClick={() => setMobileOpen(false)}>RESEARCH</NavLink>
          <NavLink to="/resources" onClick={() => setMobileOpen(false)}>RESOURCES</NavLink>
        </div>
      </div>
    );
};
export default Navbar;
