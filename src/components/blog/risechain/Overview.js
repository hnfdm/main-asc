import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/rise.png" 
        alt="Rise Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        RISE is revolutionizing the Blockchain landscape with unprecedented performance, targetting over 100,000 transactions per second and ushering in the Gigagas Era. As a next-generation Layer 2, RISE makes the full potential of blockchain technology accessible to everyone, from developers to end-users.
        True to Ethereum’s vision, we’re shattering scalability limits while preserving the pillars of security and decentralization. Our groundbreaking architecture enables near-instantaneous, low-cost transactions capable of supporting millions of users simultaneously.
        This leap in performance isn’t just an incremental improvement – it’s a transformation that unlocks an entirely new generation of crypto apps.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.riselabs.xyz/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7a67e5' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/rise_chain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7a67e5' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://github.com/risechain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7a67e5' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.gg/risechain" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#7a67e5' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
