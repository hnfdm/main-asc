import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/somnia.png" 
        alt="Somnia Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      Somnia is a high-performance, cost-efficient EVM-compatible Layer 1 blockchain capable of processing over 400,000 transactions per second (TPS) with sub-second finality. 
      It is suitable for serving millions of users and building real-time mass-consumer applications like games, social applications, metaverses, and more, all fully on-chain.
      In early MVPs, the Somnia blockchain achieved 400,000 TPS running over 100 nodes distributed globally. 
      This TPS was ERC-20 transfers between several hundred thousand accounts. Our next step will be deploying Uniswap, measuring how many swaps per second our chain can do, and simulating a real-world NFT mint similar to the Otherside other deed mint. 
      This actual user workload-style benchmarking is a true way to assess blockchain performance. 
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://somnia.network/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/Somnia_Network" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://discord.com/invite/somnia" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
