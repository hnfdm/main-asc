import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/halo.png" 
        alt="Halo Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      Halo is dedicated to establishing a monetization layer within the SocialFi field and creating a new paradigm for fair allocation of personal social influence value. 
      Built upon existing technology infrastructure, Halo ensures there is no monopoly or exploitation involved. Additionally, we will introduce decentralized governance from the Halo community to ensure all participating parties receive a reasonable share of the overall commercial revenue.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://halo.social/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00c37f' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/HaloDotSocial" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00c37f' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/halowalletsocial" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00c37f' }}>
          <FaTelegram size={20} />
        </a>
        <a href="https://discord.gg/958cKHaG2m" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#00c37f' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
