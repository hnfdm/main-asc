import React from 'react';
import { FaTelegramPlane, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import '@styles/components/website/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src='/logo/asc.png' alt="Logo" />
          <p>© 2025 ASC All rights reserved</p>
          <div className="footer-social">
            <a href="https://x.com/Autosultan_team" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={18} color="white" />
            </a>  
            <a href="https://t.me/airdropasc" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={18} color="white" />
            </a>
            <a href="https://www.youtube.com/@ZamzaSalim" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={18} color="white" />
            </a>
            <a href="https://github.com/zamzasalim" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} color="white" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Service</h4>
            <ul>
              <li><a href="/">Ads</a></li>
              <li><a href="/">Bug Hunter Assistance</a></li>
              <li><a href="/">Contact Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#cookies">Cookies</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Stay Update</h4>
            <div className="footer-subscribe">
              <input type="email" placeholder="Your Email Address" />
              <button type="submit">
                <FaEnvelope size={18} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
