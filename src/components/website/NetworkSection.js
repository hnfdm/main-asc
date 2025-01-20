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
      }, 150); // Adjusting the duration of the fade-out
    }
  };

  const renderCards = () => {
    const networks = activeTab === 'Script' ? [
      {
        name: 'Nesa',
        username: 'Online',
        image: '/icons/nesa.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/moonbix'
      },
      {
        name: 'Rivalz',
        username: 'Online',
        image: '/icons/rivalz.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/BybitCoinsweeper'
      },
      {
        name: 'Brinx AI',
        username: 'Online',
        image: '/icons/brinxai.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/Hemi-Miner'
      },
      {
        name: 'Hemi Network',
        username: 'Online',
        image: '/icons/hemi.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/Dawn-Validator'
      },
      {
        name: 'Spheron Network',
        username: 'Online',
        image: '/icons/spheron.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Cysic',
        username: 'Online',
        image: '/icons/cysic.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Multiple Network',
        username: 'Online',
        image: '/icons/mtp.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Titan Network',
        username: 'Online',
        image: '/icons/titan.jpg',
        status: 'online',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Covalent',
        username: 'Online',
        image: '/icons/covalent.png',
        status: 'online',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Cyberfly',
        username: 'Offline',
        image: '/icons/cyberfly.jpg',
        status: 'offline',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Init Verse',
        username: 'Offline',
        image: '/icons/initverse.jpg',
        status: 'offline',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Kuzco',
        username: 'Online',
        image: '/icons/kuzco.png',
        status: 'online',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
      {
        name: 'Network 3',
        username: 'Offline',
        image: '/icons/network3.jpg',
        status: 'offline',
        followLink: 'https://github.com/winsnip/coub-bot'
      },
    ] : [
      {
        name: 'Nodepay S3',
        username: 'Online',
        image: '/icons/nodepay.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Pipe Network',
        username: 'Online',
        image: '/icons/pipe.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Gradient Network',
        username: 'Online',
        image:'/icons/gradient.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Teneo Protocol',
        username: 'Online',
        image: '/icons/teneo.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Blockmesh',
        username: 'Online',
        image: '/icons/blockmesh.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Dawn',
        username: 'Online',
        image: '/icons/dawn.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Gaea',
        username: 'Online',
        image: '/icons/gaea.png',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Oasis AI',
        username: 'Online',
        image: '/icons/oasis.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Open Loop',
        username: 'Online',
        image: '/icons/openloop.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Toggle AI',
        username: 'Online',
        image: '/icons/toggle.png',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Kaisar Network',
        username: 'Online',
        image: '/icons/kaisar.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Kleo Network',
        username: 'Online',
        image: '/icons/kleo.png',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Functor Network',
        username: 'Online',
        image: '/icons/functor.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Rivalz',
        username: 'Online',
        image: '/icons/rivalz.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Alpha Network',
        username: 'Online',
        image: '/icons/alpha.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'MyGate Network',
        username: 'Online',
        image: '/icons/mygate.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Multiple Network',
        username: 'Online',
        image: '/icons/mtp.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'DeSpeed',
        username: 'Online',
        image: '/icons/despeed.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'Open Ledger',
        username: 'Online',
        image: '/icons/openledger.jpg',
        status: 'online',
        followLink: 'https://winsnip.xyz'
      },
      {
        name: 'DePINed',
        username: 'Online',
        image: '/icons/depined.jpg',
        status: 'online',
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
          <button className="follow-button">Read</button>
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
          Node
        </button>
        <button
          className={activeTab === 'Script Web' ? 'active' : ''}
          onClick={() => handleTabClick('Script Web')}
        >
          DePIN
        </button>
      </div>
      <div className={`network-cards ${fadeClass}`}>
        {renderCards()}
      </div>
    </section>
  );
}

export default NetworkSection;
