import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/mango.png" 
        alt="Mango logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      Mango Network is a Layer 1 public blockchain with a Multi-VM Omnichain infrastructure, primarily addressing multiple pain points such as fragmented user experience and liquidity in Web3 applications and DeFi protocols. It integrates the core advantages of OPStack technology and MoveVM, building an efficient blockchain network that supports cross-chain communication and multi-virtual machine interoperability, providing developers and users with secure, modular, and high-performance Web3 infrastructure.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://mangonet.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#81d8cf' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/MangoOS_Network" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#81d8cf' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/MangoOS_Network" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#81d8cf' }}>
          <FaTelegram size={20} />
        </a>
        <a href="https://github.com/MangoNet-Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#81d8cf' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.com/invite/mangonetwork" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#81d8cf' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
