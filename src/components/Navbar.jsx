import './styles/Navbar.css';
import { Search } from 'lucide-react';
import Logo from '../assets/SPS_Logo.png';

const Navbar = () => {
    return (
        <header className="navbar">
        <div className="logo-section">
          <img src={Logo} className="logo"/>
          <div className="logo-div"></div>
          <p className="logo-text">
            <span style={{ fontWeight: 700 }}>University of Florida</span>
            <br/>
            IEEE Student Branch
          </p>
        </div>

        <nav className="nav-pill">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#journals">Journals</a>
          <a href="#workshops">Workshops</a>
        </nav>

        <div className="search-icon">
          <button>
            <Search size={22} color="#4b5563" />
          </button>
        </div>
      </header>
    );
};
export default Navbar;