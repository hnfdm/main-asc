import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/sahara.png" 
        alt="Sahara Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        Sahara AI is built to challenge that paradigm, providing a decentralized AI blockchain platform that democratizes the development, deployment, and monetization of AI assets such as AI models, datasets, agents, and other AI-related assets.
        This means everyone – from individual contributors to large enterprises – can participate in and benefit from AI advancements. 
        By leveraging blockchain technology, Sahara AI ensures that all contributors are fairly compensated, sovereignty of data and models are maintained, and AI assets can be securely and permissionlessly created, shared, and traded, all while preserving privacy and promoting inclusivity.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://saharalabs.ai/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#f8ff98' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/SaharaLabsAI" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#f8ff98' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://discord.gg/qbp7YajQnS" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#f8ff98' }}>
          <FaDiscord size={20} />
        </a>
        <a href="https://t.me/saharaaiofficial" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#f8ff98' }}>
          <FaTelegram size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
