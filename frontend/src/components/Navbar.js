import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo" onClick={scrollToTop}>Home</a>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
        <a
          href="/features"
          className={currentPath === '/features' ? 'active' : ''}
          onClick={closeMenu}
        >
          Features
        </a>
        <a
          href="/pricing"
          className={currentPath === '/pricing' ? 'active' : ''}
          onClick={closeMenu}
        >
          Pricing
        </a>
        <a
          href="/login"
          className={currentPath === '/login' ? 'active' : ''}
          onClick={closeMenu}
        >
          Login
        </a>
        <a
          href="/register"
          className={currentPath === '/register' ? 'active' : ''}
          onClick={closeMenu}
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
