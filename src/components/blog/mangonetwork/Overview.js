import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Limit the width */}
      <img 
        src="/blog/mango.png" 
        alt="Mango logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: '#333', textAlign: 'justify' }}>
      Mango Network is a Layer 1 public blockchain with a Multi-VM Omnichain infrastructure, primarily addressing multiple pain points such as fragmented user experience and liquidity in Web3 applications and DeFi protocols. It integrates the core advantages of OPStack technology and MoveVM, building an efficient blockchain network that supports cross-chain communication and multi-virtual machine interoperability, providing developers and users with secure, modular, and high-performance Web3 infrastructure.
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
    </div>
  );
};

export default Overview;
