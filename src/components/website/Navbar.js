import React, { useState } from 'react';
import '@styles/website/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/logo/logo2.png" alt="Brand Logo" className="logo-image" />
        </a>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleNavbar}>
          &times;
        </button>
        {/*<a href="#network">Network</a>*/}
        <a href="/blog">Blog</a>
        <a href="/node">Node</a>
        <a href="/">Partnership</a>
        {/*<a href="https://t.me/zamza_salim">Contact</a>*/}
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
    </nav> 
  );
};

export default Navbar;
