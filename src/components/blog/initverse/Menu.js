import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StatusBox from './StatusBox'; // Import the RpcStatusBox component
import '@styles/blog/Menu.css';
import Overview from './Overview';
import Read from './Read';

const InitVerseMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview'); 
  const tabsContainerRef = useRef(null);

  const tabs = [
    { name: 'Overview', icon: '🔎', path: '' }, 
    { name: 'Read', icon: '📖', path: 'read' },
  ];

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    setActiveTab(currentPath === '' || currentPath === 'initverse' ? 'overview' : currentPath);
  }, [location]);
  
  const handleTabClick = (tab) => {
    const targetPath = tab.path ? `/${tab.path}` : ''; 
    setActiveTab(tab.name.toLowerCase());
    navigate(`/blog/initverse${targetPath}`);
  };

  return (
    <div className="tab-menu">
      {/* RpcStatusBox Component */}
      <StatusBox />

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
        {activeTab === 'read' && <Read />}
      </div>
    </div>
  );
};

export default InitVerseMenu;
