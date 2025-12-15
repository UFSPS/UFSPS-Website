import './styles/Navbar.css';
import { Search } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="navbar">
        <div className="logo-section">
          <div className="logo-circle"></div>
          <span className="logo-text">Logo</span>
        </div>

        <nav className="nav-pill">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#journals">The Journals</a>
          <a href="#workshops">Workshops</a>
        </nav>

        <div className="search-icon">
          <button>
            <Search size={20} color="#4b5563" />
          </button>
        </div>
      </header>
    );
};
export default Navbar;