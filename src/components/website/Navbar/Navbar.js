import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/logo2.png" alt="Brand Logo" className="logo-image" />
        </a>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleNavbar}>
          &times;
        </button>
        <a href="#network">Network</a>
        <a href="https://winsnip.xyz/services/">Services</a>
        <a href="https://explorer/">Order Bot</a>
        <a href="https://t.me/winnodex">Contact</a>
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
