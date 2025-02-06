import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/goplus.png" 
        alt="Goplus Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        GoPlus Security is building Web3's first decentralized security layer, providing comprehensive protection across all blockchain networks.
        Through its open, permissionless, and user-driven architecture, GoPlus can be seamlessly integrated by any blockchain or project to protect their users throughout their entire transaction lifecycle. 
        By leveraging AVS and cutting-edge AI powered security solutions, it conducts thorough risk analysis and delivers smart, efficient and decentralized security services for users. 
        GoPlus aims to create a more secure and user-friendly Web3 on-chain interaction environment by filling the gap of security layer in the current blockchain's architecture, providing users with more effective and better-experienced on-chain security protection.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://gopluslabs.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00e679' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/GoplusSecurity" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00e679' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/GoPlusSecurity" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00e679' }}>
          <FaTelegram size={20} />
        </a>
        <a href="https://discord.com/invite/goplussecurity" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00e679' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
