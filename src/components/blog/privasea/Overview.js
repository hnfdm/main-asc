import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/privasea.png" 
        alt="Privasea Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        The Privasea AI Network is a powerful system designed to prioritize the privacy and security of data throughout the AI computation process.
        It uses an innovative technology called Fully Homomorphic Encryption (FHE), which enables computations to be conducted on encrypted data, producing results that are identical to computations performed on unencrypted data. 
        What does this mean? Well, that sensitive information can be processed without ever being exposed in its original form.
        By leveraging this cutting-edge approach, the network facilitates collaborative AI processing among multiple parties while ensuring the confidentiality of sensitive information.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.privasea.ai/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/Privasea_ai" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://discord.gg/45Q7CMNYsS" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>
        <a href="https://t.me/Privasea_ai" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTelegram size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
