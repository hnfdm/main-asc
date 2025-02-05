import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/unichain.png" 
        alt="Unichain Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        Unichain is a DeFi-native Ethereum L2, built to be the home for liquidity across chains.
        Unichain is revolutionizing DeFi by developing the fastest, most cost-effective Layer 2 network for cross-chain liquidity. 
        Built to unite fragmented blockchain ecosystems, it's where traders, developers, and liquidity providers come together to access seamless, efficient markets.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#f518bd' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/unichain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#f518bd' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://discord.com/invite/uniswap" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#f518bd' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
