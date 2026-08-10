import './styles/Footer.css';
import Logo from '../assets/logo/SPS_Logo_Black.png';
import { Link } from 'react-router-dom';
import { SiInstagram, SiDiscord, SiLinkedin, SiLinktree, SiX } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { chapterInfo } from '../data/chapter.js';
import type { ReactNode } from 'react';

const socialIcons: Record<string, ReactNode> = {
  Instagram: <SiInstagram />,
  Discord: <SiDiscord />,
  LinkedIn: <SiLinkedin />,
  X: <SiX />,
  Linktree: <SiLinktree />,
};

const siteLinks = [
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Research Status', to: '/research/status' },
  { label: 'Philosophy', to: '/research/philosophy' },
  { label: 'Events', to: '/events' },
  { label: 'Resources', to: '/resources' },
  { label: 'Join', to: '/join' },
  { label: 'Network', to: '/network' },
  { label: 'Collaborate', to: '/collaborate' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            className="footer-graphic"
            src={Logo}
            alt="UF IEEE Signal Processing Society logo"
          />
        </div>

        <div className="footer-col">
          <p className="footer-label">Contact</p>
          <a className="footer-email" href={`mailto:${chapterInfo.email}`}>
            <FiMail aria-hidden="true" />
            <span>{chapterInfo.email}</span>
          </a>
          <p className="footer-address">
            {chapterInfo.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <ul className="footer-social-links">
            {chapterInfo.socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  {socialIcons[label] ?? label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <p className="footer-label">Site</p>
          <ul className="footer-site-links">
            {siteLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-item">© {new Date().getFullYear()} · IEEE SPS @ UF</p>
        <p className="footer-bottom-item">
          <span className="footer-tick" aria-hidden="true">▪</span>
          {' '}GAINESVILLE, FL 29.6516°N 82.3248°W
        </p>
      </div>
    </footer>
  );
};
export default Footer;
