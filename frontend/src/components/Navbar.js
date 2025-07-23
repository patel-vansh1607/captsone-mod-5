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
      <span className="navbar-logo" onClick={scrollToTop}>Home</span>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
        <a
          href="/about"
          className={currentPath === '/about' ? 'active' : ''}
          onClick={closeMenu}
        >
          About
        </a>
        <a
          href="/services"
          className={currentPath === '/services' ? 'active' : ''}
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="/contact"
          className={currentPath === '/contact' ? 'active' : ''}
          onClick={closeMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
