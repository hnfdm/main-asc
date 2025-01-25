import React, { useState } from 'react';
import '@styles/website/NetworkSection.css';
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
        image: '/node/nesa.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/61971'
      },
      {
        name: 'Rivalz',
        username: 'Offline',
        image: '/node/rivalz.png',
        status: 'offline',
        followLink: 'https://t.me/airdropasc/64503'
      },
      {
        name: 'Brinx AI',
        username: 'Online',
        image: '/node/brinxai.png',
        status: 'online',
        followLink: '/node/brinxai'
      },
      {
        name: 'Hemi Network',
        username: 'Online',
        image: '/node/hemi.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69821'
      },
      {
        name: 'Spheron Network',
        username: 'Online',
        image: '/node/spheron.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/64988'
      },
      {
        name: 'Cysic',
        username: 'Online',
        image: '/node/cysic.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/68229'
      },
      {
        name: 'Multiple Network',
        username: 'Online',
        image: '/node/multiple.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69767'
      },
      {
        name: 'Titan Network',
        username: 'Online',
        image: '/node/titan.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66032'
      },
      {
        name: 'Covalent',
        username: 'Online',
        image: '/node/covalent.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/68779'
      },
      {
        name: 'Cyberfly',
        username: 'Offline',
        image: '/node/cyberfly.png',
        status: 'offline',
        followLink: 'https://t.me/airdropasc/69421'
      },
      {
        name: 'Kuzco',
        username: 'Online',
        image: '/node/kuzco.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66689'
      },
      {
        name: 'Gaianet AI',
        username: 'Online',
        image: '/node/gaianet.png',
        status: 'online',
        followLink: '/node/gaianet'
      },
    ] : [
      {
        name: 'Grass',
        username: 'Online',
        image: '/depin/grass.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/67213'
      },
      {
        name: 'Nodepay',
        username: 'Online',
        image: '/depin/nodepay.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/67213'
      },
      {
        name: 'Pipe Network',
        username: 'Online',
        image: '/depin/pipe.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66699'
      },
      {
        name: 'Gradient Network',
        username: 'Online',
        image:'/depin/gradient.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/62693'
      },
      {
        name: 'Teneo Protocol',
        username: 'Online',
        image: '/depin/teneo.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/63125'
      },
      {
        name: 'Blockmesh',
        username: 'Online',
        image: '/depin/blockmesh.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/63605'
      },
      {
        name: 'Dawn',
        username: 'Online',
        image: '/depin/dawn.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/61388'
      },
      {
        name: 'Gaea',
        username: 'Online',
        image: '/depin/gaea.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66803'
      },
      {
        name: 'Oasis AI',
        username: 'Online',
        image: '/depin/oasis.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/65644'
      },
      {
        name: 'Open Loop',
        username: 'Online',
        image: '/depin/openloop.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/67605'
      },
      {
        name: 'Toggle AI',
        username: 'Online',
        image: '/depin/toggle.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/65058'
      },
      {
        name: 'Kaisar Network',
        username: 'Online',
        image: '/depin/kaisar.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/67166'
      },
      {
        name: 'Kleo Network',
        username: 'Online',
        image: '/depin/kleo.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/66408'
      },
      {
        name: 'Functor Network',
        username: 'Online',
        image: '/depin/functor.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/61596'
      },
      {
        name: 'Rivalz',
        username: 'Online',
        image: '/depin/rivalz.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/60461'
      },
      {
        name: 'Alpha Network',
        username: 'Online',
        image: '/depin/alpha.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/64785'
      },
      {
        name: 'MyGate Network',
        username: 'Online',
        image: '/depin/mygate.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69838'
      },
      {
        name: 'Multiple Network',
        username: 'Online',
        image: '/depin/mtp.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69946'
      },
      {
        name: 'DeSpeed',
        username: 'Online',
        image: '/depin/despeed.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69969'
      },
      {
        name: 'Open Ledger',
        username: 'Online',
        image: '/depin/openledger.png',
        status: 'online',
        followLink: 'https://t.me/airdropasc/69358'
      },
      {
        name: 'DePINed',
        username: 'Online',
        image: '/depin/depined.png',
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
