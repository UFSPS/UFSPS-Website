import './styles/Navbar.css';
import Logo from '../assets/logo/SPS_Logo.png';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_MENU_ID = 'site-nav-menu';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { pathname } = useLocation();
    const isFrontpage = pathname === '/';

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 24);
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      if (!mobileOpen) return;
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setMobileOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [mobileOpen]);

    const closeMenu = () => setMobileOpen(false);
    const isSolid = !isFrontpage || isScrolled || mobileOpen;

    return (
      <header
        className={`navbar ${isSolid ? 'navbar--solid' : ''} ${isScrolled ? 'navbar--scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}
      >
        <div className="navbar-inner">
          <NavLink to="/" end className="logo-link" onClick={closeMenu}>
            <span className="logo-section">
              <img src={Logo} className="logo" alt="UF IEEE SPS logo"/>
              <span className="logo-div" aria-hidden="true"></span>
              <span className="logo-text">
                <span className="logo-text-strong">University of Florida</span>
                <span className="logo-text-sub">Signal Processing Society</span>
              </span>
            </span>
          </NavLink>

          <button
            className="nav-toggle"
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls={NAV_MENU_ID}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

          <nav
            aria-label="Main"
            id={NAV_MENU_ID}
            className={`nav-links ${mobileOpen ? 'open' : ''}`}
          >
            <NavLink to="/" end onClick={closeMenu} data-analytics-id="nav-home">Home</NavLink>
            <NavLink to="/about" onClick={closeMenu} data-analytics-id="nav-about">About</NavLink>
            <NavLink to="/research" onClick={closeMenu} data-analytics-id="nav-research">Research</NavLink>
            <NavLink to="/events" onClick={closeMenu} data-analytics-id="nav-events">Events</NavLink>
            <NavLink to="/resources" onClick={closeMenu} data-analytics-id="nav-resources">Resources</NavLink>
            <NavLink to="/join" onClick={closeMenu} data-analytics-id="nav-join">Join</NavLink>
            <NavLink to="/collaborate" onClick={closeMenu} data-analytics-id="nav-collaborate">Collaborate</NavLink>
          </nav>
        </div>
      </header>
    );
};
export default Navbar;
