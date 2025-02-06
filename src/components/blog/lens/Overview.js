import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/lens.png" 
        alt="Lens Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        Scalable SocialFi on Ethereum.
        Lens is a high-performance blockchain stack built for SocialFi, combining modular Social Primitives, fast settlement, and decentralized storage.
        The Lens stack is composed of Lens Chain, Social Protocol, and Storage Nodes. 
        As a layer 2 leveraging ZKsync, Avail, and Ethereum's security, Lens delivers the fastest, most cost-effective, and scalable blockchain for developers.
        In addition to exceptional performance, Lens Chain offers significant UX improvements such as account abstraction, USD gas fees, and facilitates easy onboarding via email and phone verification.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.lens.xyz/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/LC" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://github.com/lens-protocol" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.com/invite/lensprotocol" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
