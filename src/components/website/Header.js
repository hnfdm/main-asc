import React from 'react';
import '@styles/website/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Airdrop Insights, Tutorials, and Beyond.</h1>
          <p>Service: The Reliable Partner for Community Builders, Ads, Research, and 24/7 Support.</p>
        </div>
        <div className="header-image">
          <img src="/logo/mascot.png" alt="Astronaut" />
        </div>
      </div>
    </header>
  );
}

export default Header;
