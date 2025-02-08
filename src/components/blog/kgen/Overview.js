import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/kgen.png" 
        alt="Kgen Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      KGen, atau Kratos Gaming Network, adalah platform yang dirancang untuk memberdayakan gamer dengan memberikan mereka kepemilikan atas data mereka sendiri.
      Secara keseluruhan, KGen berkomitmen untuk menciptakan masa depan gaming yang lebih adil dan terdesentralisasi.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://kgen.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#88fe0c' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/kgen_io" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#88fe0c' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://discord.com/invite/kgen" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#88fe0c' }}>
          <FaDiscord size={20} />
        </a>
        <a href="https://t.me/KGEN_IO" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#88fe0c' }}>
          <FaTelegram size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
