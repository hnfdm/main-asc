import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaYoutube } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/asc.png" 
        alt="ASC Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        AirdropASC is the leading crypto community, established in 2017, dedicated to empowering members with free cryptocurrency opportunities every day.
        We carefully select and share the best and most legitimate airdrops, including testnets, nodes, bots, and retroactive rewards. 
        Guided by the principle "from the Community, for the Community", we provide daily updates and expert tips & tricks to make airdrops easier and more rewarding for you.
        Discover why we’re the #1 platform for growing your crypto assets and exploring the limitless potential of the crypto world. Join us today!
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://airdropasc.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#d4aa57' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/Autosultan_team" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#d4aa57' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/airdropasc" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#d4aa57' }}>
          <FaTelegram size={20} />
        </a>
        <a href="https://www.youtube.com/@ZamzaSalim" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#d4aa57' }}>
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
