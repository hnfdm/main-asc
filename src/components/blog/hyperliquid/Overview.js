import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/hype.png" 
        alt="Hyperliquid Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        Hyperliquid is a performant L1 optimized from the ground up. The vision is a fully onchain open financial system with user built applications interfacing with performant native components, all without compromising end user experience. 
        The Hyperliquid L1 is performant enough to operate an entire ecosystem of permissionless financial applications – every order, cancel, trade, and liquidation happens transparently on-chain with block latency below 1s. The chain currently supports 100k orders / second.
        The Hyperliquid L1 uses a custom consensus algorithm called HyperBFT which is heavily inspired by Hotstuff and its successors. Both the algorithm and networking stack are optimized from the ground up to support the L1. 
        The flagship native application is a fully onchain order book perpetuals exchange, the Hyperliquid DEX. Further developments include a native token standard, spot trading, permissionless liquidity, etc.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://hyperfoundation.org/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#97fce4' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/hyperliquidX" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#97fce4' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/hyperliquid_announcements" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#97fce4' }}>
          <FaTelegram size={20} />
        </a>
        <a href="https://github.com/hyperliquid-dex" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#97fce4' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.gg/hyperliquid" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#97fce4' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
