import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/ini.png" 
        alt="Init Verse Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      InitVerse is dedicated to building enterprise-grade infrastructure for the Web3 ecosystem, led by INIChain, which integrates innovative TfhEVM and DDA Mechanism technologies to enhance blockchain performance, privacy, and resource efficiency.
      With INIChain as its foundation, InitVerse’s SaaS Builder simplifies DApp creation and deployment, empowering developers and enterprises to focus on growth. 
      The ecosystem also includes tools like Clown Wallet and Obs Swap, delivering comprehensive support for users and developers alike. 
      InitVerse drives blockchain innovation while creating convenience and value across the Web3 space.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://inichain.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8b2cfa' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://www.initverse.org/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8b2cfa' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/InitVerse" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8b2cfa' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/InitVerseWeb3" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8b2cfa' }}>
          <FaTelegram size={20} />
        </a>
        <a href="https://github.com/Project-InitVerse" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8b2cfa' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.com/invite/InitVerse" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8b2cfa' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
