import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  const imageUrl = "https://pbs.twimg.com/profile_images/1785547267484925952/_Rc1ZrCE_400x400.jpg";

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Limit the width */}
      <img 
        src={imageUrl} 
        alt="Symphony logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: '#333', textAlign: 'center' }}>
        Symphony is a chain built on Cosmos that provides a crypto-native solution for real-world assets not reliant on traditional banking infrastructure. It can peg to any asset, allowing global access to trade across mediums such as real estate and gold, as well as easily accessed infrastructure to build market systems such as Forex.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://orchestralabs.org/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGlobe size={18} />
        </a>
        <a href="https://twitter.com/orchestra_labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1DA1F2' }}>
          <FaTwitter size={18} />
        </a>
        <a href="https://t.me/+xFieHCYYyx41NGQx" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#0088cc' }}>
          <FaTelegram size={18} />
        </a>
        <a href="https://github.com/Orchestra-Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGithub size={18} />
        </a>
        <a href="https://discord.gg/rnf2FSerwE" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7289DA' }}>
          <FaDiscord size={18} />
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
        <div style={{ margin: '0 10px', fontSize: '16px', color: '#333' }}>
          <strong>Specifications</strong>
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: '#333' }}>
          RAM 8GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: '#333' }}>
          Disk Space 200GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: '#333' }}>
          CPU 2 Cores
        </div>
      </div>
    </div>
  );
};

export default Overview;
