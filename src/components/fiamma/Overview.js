import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  const imageUrl = "https://raw.githubusercontent.com/bangpateng/image/main/fiamma.png";

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Limit the width */}
      <img 
        src={imageUrl} 
        alt="Symphony logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: '#333', textAlign: 'center' }}>
      Fiamma is emerging as a verification network that specializes in zero-knowledge (ZK) proofs, striving to provide a secure, decentralized, and economically efficient solution for universal blockchain integration. At its heart, Fiamma is engineered to leverage the robust cryptoeconomic and network security value of Bitcoin via the integration with Babylon and implementation of BitVM2. This combination enables Fiamma to introduce ZK capabilities into the Bitcoin ecosystem and secure ZK use cases in Ethereum and beyond, enhancing the scope and effectiveness of ZK technology.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://fiammachain.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGlobe size={18} />
        </a>
        <a href="https://x.com/Fiamma_Chain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1DA1F2' }}>
          <FaTwitter size={18} />
        </a>
        <a href="https://t.me/fiammachain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#0088cc' }}>
          <FaTelegram size={18} />
        </a>
        <a href="https://github.com/fiamma-chain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
          <FaGithub size={18} />
        </a>
        <a href="https://discord.gg/DHkmPDYhjB" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7289DA' }}>
          <FaDiscord size={18} />
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
        <div style={{ margin: '0 10px', fontSize: '16px', color: '#333' }}>
          <strong>Specifications</strong>
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: '#333' }}>
          RAM 6GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: '#333' }}>
          Disk Space 100GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: '#333' }}>
          CPU 2 Cores
        </div>
      </div>
    </div>
  );
};

export default Overview;
