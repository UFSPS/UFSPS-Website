import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const TITLES: Record<string, string> = {
  '/': 'UF IEEE Signal Processing Society',
  '/about': 'About · UF IEEE SPS',
  '/research': 'Research · UF IEEE SPS',
  '/research/status': 'Research Status · UF IEEE SPS',
  '/research/philosophy': 'Research Philosophy · UF IEEE SPS',
  '/events': 'Events · UF IEEE SPS',
  '/resources': 'Resources · UF IEEE SPS',
  '/join': 'Join · UF IEEE SPS',
  '/network': 'Network · UF IEEE SPS',
  '/collaborate': 'Collaborate · UF IEEE SPS',
};

const titleFor = (pathname: string): string => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const known = TITLES[normalized];
  if (known) return known;
  if (normalized.startsWith('/research/')) return 'Research Project · UF IEEE SPS';
  return '404 · UF IEEE SPS';
};

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titleFor(pathname);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
