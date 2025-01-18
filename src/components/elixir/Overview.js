import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  const imageUrl = "https://github.com/bangpateng/image/raw/main/elixir.jpg";

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Limit the width */}
      <img 
        src={imageUrl} 
        alt="autonomys logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: '#333', textAlign: 'center' }}>
      Powering the internet of orderbook liquidity. Modular network secured by 14,000+ validators. Build the future: https://elixir.xyz.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://elixir.xyz" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGlobe size={18} />
        </a>
        <a href="https://x.com/elixir" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1DA1F2' }}>
          <FaTwitter size={18} />
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#0088cc' }}>
          <FaTelegram size={18} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGithub size={18} />
        </a>
        <a href="https://discord.com/invite/elixirnetwork" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7289DA' }}>
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
          Disk Space 100GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: '#333' }}>
          CPU 4 Cores
        </div>
      </div>
    </div>
  );
};

export default Overview;
