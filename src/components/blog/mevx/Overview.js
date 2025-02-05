import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/mevx.png" 
        alt="MEVX Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      MevX adalah platform inovatif yang dirancang untuk meningkatkan pengalaman trading kripto melalui berbagai fitur canggih. 
      Dengan Real-Time Trending, Sniper Mode, Copy Trade, dan alat analisis mendalam seperti Bubble Maps, MevX membantu kita untuk mengidentifikasi peluang market dan mengambil keputusan berbasis data.
      </p>
      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://mevx.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8848ff' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/MEVX_Official" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8848ff' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/MEVX_TG" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8848ff' }}>
          <FaTelegram size={20} />
        </a>
        {/*<a href="https://github.com/MangoNet-Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaGithub size={20} />
        </a>*/}
        <a href="https://discord.gg/mevx" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#8848ff' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
