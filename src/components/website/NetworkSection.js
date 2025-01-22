import React, { useState } from 'react';
import '@styles/components/website/NetworkSection.css';
import { FaBookOpen } from "react-icons/fa";

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
        followLink: 'https://t.me/airdropasc/61971'
      },
      {
        name: 'Rivalz',
        username: 'Online',
        image: '/icons/rivalz.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/64503'
      },
      {
        name: 'Brinx AI',
        username: 'Online',
        image: '/icons/brinxai.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/63734'
      },
      {
        name: 'Hemi Network',
        username: 'Online',
        image: '/icons/hemi.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69821'
      },
      {
        name: 'Spheron Network',
        username: 'Online',
        image: '/icons/spheron.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/64988'
      },
      {
        name: 'Cysic',
        username: 'Online',
        image: '/icons/cysic.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/68229'
      },
      {
        name: 'Multiple Network',
        username: 'Online',
        image: '/icons/mtp.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69767'
      },
      {
        name: 'Titan Network',
        username: 'Online',
        image: '/icons/titan.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66032'
      },
      {
        name: 'Covalent',
        username: 'Online',
        image: '/icons/covalent.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/68779'
      },
      {
        name: 'Cyberfly',
        username: 'Offline',
        image: '/icons/cyberfly.jpg',
        status: 'offline',
        followLink: 'https://t.me/airdropasc/69421'
      },
      {
        name: 'Init Verse',
        username: 'Offline',
        image: '/icons/initverse.jpg',
        status: 'offline',
        followLink: 'https://t.me/airdropasc/69467'
      },
      {
        name: 'Kuzco',
        username: 'Online',
        image: '/icons/kuzco.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66689'
      },
      {
        name: 'Network 3',
        username: 'Offline',
        image: '/icons/network3.jpg',
        status: 'offline',
        followLink: 'https://t.me/airdropasc/70249'
      },
      {
        name: 'Gaianet AI',
        username: 'Online',
        image: '/icons/gaianet.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/70798'
      },
    ] : [
      {
        name: 'Nodepay S3',
        username: 'Online',
        image: '/icons/nodepay.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/67213'
      },
      {
        name: 'Pipe Network',
        username: 'Online',
        image: '/icons/pipe.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66699'
      },
      {
        name: 'Gradient Network',
        username: 'Online',
        image:'/icons/gradient.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/62693'
      },
      {
        name: 'Teneo Protocol',
        username: 'Online',
        image: '/icons/teneo.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/63125'
      },
      {
        name: 'Blockmesh',
        username: 'Online',
        image: '/icons/blockmesh.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/63605'
      },
      {
        name: 'Dawn',
        username: 'Online',
        image: '/icons/dawn.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/61388'
      },
      {
        name: 'Gaea',
        username: 'Online',
        image: '/icons/gaea.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66803'
      },
      {
        name: 'Oasis AI',
        username: 'Online',
        image: '/icons/oasis.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/65644'
      },
      {
        name: 'Open Loop',
        username: 'Online',
        image: '/icons/openloop.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/67605'
      },
      {
        name: 'Toggle AI',
        username: 'Online',
        image: '/icons/toggle.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/65058'
      },
      {
        name: 'Kaisar Network',
        username: 'Online',
        image: '/icons/kaisar.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/67166'
      },
      {
        name: 'Kleo Network',
        username: 'Online',
        image: '/icons/kleo.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66408'
      },
      {
        name: 'Functor Network',
        username: 'Online',
        image: '/icons/functor.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/61596'
      },
      {
        name: 'Rivalz',
        username: 'Online',
        image: '/icons/rivalz.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/60461'
      },
      {
        name: 'Alpha Network',
        username: 'Online',
        image: '/icons/alpha.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/64785'
      },
      {
        name: 'MyGate Network',
        username: 'Online',
        image: '/icons/mygate.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69838'
      },
      {
        name: 'Multiple Network',
        username: 'Online',
        image: '/icons/mtp.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69946'
      },
      {
        name: 'DeSpeed',
        username: 'Online',
        image: '/icons/despeed.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69969'
      },
      {
        name: 'Open Ledger',
        username: 'Online',
        image: '/icons/openledger.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69358'
      },
      {
        name: 'DePINed',
        username: 'Online',
        image: '/icons/depined.jpg',
        status: 'online',
        followLink: 'https://t.me/airdropasc/70405'
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
          <button className="follow-button">
          <FaBookOpen size={15}/>
          </button>
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
