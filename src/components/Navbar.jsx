import './styles/Navbar.css';
import Logo from '../assets/SPS_Logo.png';

const Navbar = () => {
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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#people">People</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
};
export default Navbar;