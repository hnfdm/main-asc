import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  const imageUrl = "https://raw.githubusercontent.com/bangpateng/image/main/dill.jpg";

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Limit the width */}
      <img 
        src={imageUrl} 
        alt="Dill logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: '#333', textAlign: 'center' }}>
      The Most Scalable Data Availability Network Dill is the first modular network fully compatible with the Danksharding roadmap.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://dill.xyz/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGlobe size={18} />
        </a>
        <a href="https://twitter.com/dill_xyz_" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1DA1F2' }}>
          <FaTwitter size={18} />
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#0088cc' }}>
          <FaTelegram size={18} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGithub size={18} />
        </a>
        <a href="https://discord.com/invite/dill" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7289DA' }}>
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
