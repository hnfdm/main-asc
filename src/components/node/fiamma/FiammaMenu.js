import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RpcStatusBox from './RpcStatusBox'; // Path relatif ke FiammaMenu.js
import '@styles/node/fiamma/FiammaMenu.css';
import Overview from './Overview';
import Installation from './Installation';
import Sync from './Sync';
import Upgrade from './Upgrade';
import Cheatsheet from './Cheatsheet';

const FiammaMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview'); 
  const tabsContainerRef = useRef(null);

  const tabs = [
    { name: 'Overview', icon: '🏠', path: '' }, 
    { name: 'Installation', icon: '⚙️', path: 'installation' },
    { name: 'API/Sync', icon: '📷', path: 'sync' },
    { name: 'Upgrade', icon: '🔧', path: 'upgrade' },
    { name: 'Cheatsheet', icon: '📄', path: 'cheatsheet' }
  ];

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    setActiveTab(currentPath === '' || currentPath === 'fiamma' ? 'overview' : currentPath);
  }, [location]);

  const handleTabClick = (tab) => {
    const targetPath = tab.path ? `/${tab.path}` : ''; 
    setActiveTab(tab.name.toLowerCase());
    navigate(`/services/testnet/fiamma${targetPath}`, { replace: true });
  };

  return (
    <div className="tab-menu">
      {/* RpcStatusBox Component */}
      <RpcStatusBox />

      {/* Tabs Section */}
      <div className="tabs" ref={tabsContainerRef}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            id={tab.name.toLowerCase()}
            className={`tab ${activeTab === tab.name.toLowerCase() ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
          </div>
        ))}
      </div>

      {/* Tab Content Section */}
      <div className="tab-content">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'installation' && <Installation />}
        {activeTab === 'sync' && <Sync />}
        {activeTab === 'upgrade' && <Upgrade />}
        {activeTab === 'cheatsheet' && <Cheatsheet />}
      </div>
    </div>
  );
};

export default FiammaMenu;
