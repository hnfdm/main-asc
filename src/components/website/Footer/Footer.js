import React from 'react';
import { FaTwitter, FaTelegramPlane, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/asc.png" alt="Logo" />
          <p>© 2025 ASC All rights reserved</p>
          <div className="footer-social">
            <a href="https://twitter.com/winsnipofficial" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={23} color="white" />
            </a>
            <a href="https://t.me/winsnip" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={24} color="white" />
            </a>
            <a href="https://youtube.com/c/winsnipofficial" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} color="white" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Service</h4>
            <ul>
              <li><a href="https://explorer/">Order Bot</a></li>
              <li><a href="#rpc">Bug Hunter Assistance</a></li>
              <li><a href="https://explorer/">Contact Support</a></li>
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
