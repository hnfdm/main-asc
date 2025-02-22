import React from 'react';
import '@styles/website/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Airdrop Insights, Tutorials, and Beyond</h1>
          <p>Your Reliable Partner for Community Builders, Ambassadors, Research, Ads, and 24/7 Support</p>
        </div>
        <div className="header-image">
          <div className="mascot-wrapper">
            <img src="/logo/mascot.png" alt="Astronaut" />
          </div>
          <div className="rotating-circles">
            <div className="circle" style={{ transform: 'rotate(0deg) translateX(150px)' }}>
              <img src="/icons/daily2.png" alt="Icon 1" />
            </div>
            <div className="circle" style={{ transform: 'rotate(60deg) translateX(150px)' }}>
              <img src="/icons/testnet4.png" alt="Icon 2" />
            </div>
            <div className="circle" style={{ transform: 'rotate(120deg) translateX(150px)' }}>
              <img src="/icons/bot2.png" alt="Icon 3" />
            </div>
            <div className="circle" style={{ transform: 'rotate(180deg) translateX(150px)' }}>
              <img src="/icons/retro5.png" alt="Icon 4" />
            </div>
            <div className="circle" style={{ transform: 'rotate(240deg) translateX(150px)' }}>
              <img src="/icons/nft3.png" alt="Icon 5" />
            </div>
            <div className="circle" style={{ transform: 'rotate(300deg) translateX(150px)' }}>
              <img src="/icons/node2.png" alt="Icon 6" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;