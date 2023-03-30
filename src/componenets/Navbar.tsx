import React, { useState, useEffect } from 'react';
import './navbar.css';
import { HashLink as Link} from 'react-router-hash-link'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav  className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div id='Home' className="navbar-container">
        <a href="/" className="navbar-logo">HAK</a>
        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item"><Link smooth to="#">Home</Link></li>
          <li className="navbar-item"><Link smooth to="#About">About</Link></li>
          <li className="navbar-item"><Link  smooth to="#Projects">Projects</Link></li>
          <li className="navbar-item"><Link smooth to="#Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
