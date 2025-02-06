import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/octo.png" 
        alt="Octo Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        The Okto Orchestration Layer (‘Okto’), is a middleware that solves for experience for developers and end-users on
        the one hand, and for GTM for web3 protocols/chains on the other hand. By enabling it via a chain, provides massive
        permissionless, decentralized scalability that enables expressiveness and solves for a large number of use cases and
        experiences.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.okto.tech/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#55a3f6' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/Okto_web3" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#55a3f6' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/okto_web3" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#55a3f6' }}>
          <FaTelegram size={20} />
        </a>
        <a href="http://discord.okto.tech/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#55a3f6' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
