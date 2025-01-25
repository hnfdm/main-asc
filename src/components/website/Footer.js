import React from 'react';
import { FaTelegramPlane, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import '@styles/website/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src='/logo/asc.png' alt="Logo" />
          <p>© 2025 ASC. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://x.com/Autosultan_team" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={20} color="white" />
            </a>
            <a href="https://www.youtube.com/@ZamzaSalim" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} color="white" />
            </a>
            <a href="https://github.com/zamzasalim" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} color="white" />
            </a>
            <a href="https://t.me/airdropasc" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={20} color="white" />
            </a>
            <a href="https://t.me/baelcalls" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={20} color="white" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Service</h4>
            <ul>
              <li><a href="/">Ambassador</a></li>
              <li><a href="/">Advertise</a></li>
              <li><a href="/">Tutorials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="https://mail.google.com/mail/?view=cm&to=contact@airdropasc.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Stay Update</h4>
            <div className="footer-subscribe">
              <input type="email" placeholder="Email Address" />
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
