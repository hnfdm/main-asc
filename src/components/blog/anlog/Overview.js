import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/anlog.png" 
        alt="Anlog Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      We present Analog, a suite of interoperability protocols built on the Substrate SDK.
      We articulate the vision for Analog, designed to become a one-stop shop for multi-chain and cross-chain solutions, addressing native DApp development needs.
      At the core of Analog is the Timechain—a consensus-agnostic protocol maintained by a dynamic and decentralized validator set—that serves as a core ledger for all activities occurring in the Analog ecosystem. 
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.analog.one/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#cf73f7' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/OneAnalog" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#cf73f7' }}>
          <FaTwitter size={20} />
        </a>
        <a href="http://t.me/analogtimer" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#cf73f7' }}>
          <FaTelegram size={20} />
        </a>
        <a href="https://discord.gg/analog" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#cf73f7' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
