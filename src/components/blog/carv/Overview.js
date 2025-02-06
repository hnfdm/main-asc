import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/carv.png" 
        alt="Carv Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        CARV is the utility token powering CARV’s Web3 ecosystem, enabling true ownership and monetization of user data, particularly in gaming and AI.
        From multi-chain gas payments to exclusive ecosystem perks, $CARV opens the door for games and projects to tap into secure, unified player profiles and data.
        It’s also a governance tool, letting holders shape CARV’s future while fueling a modular data layer with staking rewards and incentives.
        Following TGE, CARV aims to ramp up integrations, drive community-led governance, and amplify staking rewards for ecosystem growth.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://carv.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/carv_official" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://discord.com/invite/HPgZMwvSXB" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>
        <a href="https://t.me/carv_official_global" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTelegram size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
