import React, { useState } from 'react';
import '@styles/components/website/NetworkSection.css';

function NetworkSection() {
  const [activeTab, setActiveTab] = useState('Script');
  const [fadeClass, setFadeClass] = useState('fade-in');

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setFadeClass('fade-out');
      setTimeout(() => {
        setActiveTab(tab);
        setFadeClass('fade-in');
      }, 300); // Adjusting the duration of the fade-out
    }
  };

  const renderCards = () => {
    const networks = activeTab === 'Script' ? [
      {
        name: 'Moonbix',
        username: 'Online',
        image: '/assets/imgproyek/moonbix.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/moonbix'
      },
      {
        name: 'BybitCoinsweeper',
        username: 'Online',
        image: '/assets/imgproyek/bybit.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/BybitCoinsweeper'
      },
      {
        name: 'Hemi Miner',
        username: 'Offline',
        image: '/assets/imgproyek/hemi.png',
        status: 'offline',
        followLink: 'https://github.com/winsnip/Hemi-Miner'
      },
      {
        name: 'Dawn Validator',
        username: 'Online',
        image: '/assets/imgproyek/dawn.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/Dawn-Validator'
      },
      {
        name: 'Coub',
        username: 'Online',
        image: '/assets/imgproyek/coub.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
    ] : [
      {
        name: 'Test',
        username: 'Offline',
        image: '/assets/imgproyek/coub.jpg',
        status: 'offline',
        followLink: 'https://winsnip.xyz'
      },
    ];
  
    return networks.map((network, index) => (
      <div className="network-card" key={index}>
        <img src={network.image} alt={network.name} className="network-avatar" />
        <div className="network-info">
          <h4>{network.name}</h4>
          <div className="network-status">
            <span className={`status-indicator ${network.status}`}></span>
            <span>{network.username}</span>
          </div>
        </div>
        <a href={network.followLink} target="_blank" rel="noopener noreferrer">
          <button className="follow-button">Service</button>
        </a>
      </div>
    ));
  };

  return (
    <section id="network" className="network-section">
      <h2>Guide</h2> {/* Preserved the Network heading */}
      <div className="network-tabs">
        <button
          className={activeTab === 'Script' ? 'active' : ''}
          onClick={() => handleTabClick('Script')}
        >
          Script
        </button>
        <button
          className={activeTab === 'Script Web' ? 'active' : ''}
          onClick={() => handleTabClick('Script Web')}
        >
          Script Web
        </button>
      </div>
      <div className={`network-cards ${fadeClass}`}>
        {renderCards()}
      </div>
    </section>
  );
}

export default NetworkSection;
