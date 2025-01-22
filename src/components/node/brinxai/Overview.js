import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}> {/* Limit the width */}
      <img 
        src="/node/brinxai.png" 
        alt="Brinxai logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        BrinxAI is an advanced AI project that aims to revolutionize data analysis and decision-making through cutting-edge artificial intelligence AI Technology. The platform leverages sophisticated machine learning algorithms and neural networks to provide actionable insights from complex data sets. BrinxAI specializes in offering predictive analytics, natural language processing, and automated decision support, tailored to meet the needs of various industries, including finance, healthcare, and logistics. By integrating seamlessly with existing systems.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://brinxai.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={18} />
        </a>
        <a href="https://x.com/BrinxAi_Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={18} />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTelegram size={18} />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGithub size={18} />
        </a>
        <a href="https://discord.gg/ST28uktWem" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={18} />
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
        <div style={{ margin: '0 10px', fontSize: '16px', color: 'white' }}>
          <strong>Specifications</strong>
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: 'white' }}>
          RAM 16GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: 'white' }}>
          SSD 300GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: 'white' }}>
          vCPU 8 Cores
        </div>
      </div>
    </div>
  );
};

export default Overview;
