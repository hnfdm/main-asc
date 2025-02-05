import React from 'react';
import { FaGlobe, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/fogo.png" 
        alt="Fogo Chain Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      Fogo is an SVM chain running the Firedancer client in its purest form to achieve real-time experiences at scale. 
      Fogo unleashes the full potential of Firedancer by making innovative design choices on architecture and consensus.
      Fogo is enabling institutional-grade finance on-chain by combining TradFi performance with decentralized infrastructure.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.fogo.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/FogoChain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://www.linkedin.com/company/fogochain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaLinkedin size={20} />
        </a>
        {/*<a href="https://t.me/BitgetWalletLite_Announcement" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaTelegram size={20} />
        </a>
        {/*<a href="https://github.com/MangoNet-Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.com/invite/bitget-wallet" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaDiscord size={20} />
        </a>*/}
      </div>
    </div>
  );
};

export default Overview;
