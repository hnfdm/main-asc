import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/ario.png" 
        alt="Ario Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      AR.IO is the world’s first permanent cloud network, providing the infrastructure to ensure data, applications, and digital identities are timeless, tamper-proof, and universally accessible. 
      Built on the foundation of the Arweave storage network, AR.IO forms a global ecosystem of gateways, protocols, and services that connect users to the permaweb – a web where information is permanent and free from centralized control.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://ar.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/ar_io_network" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://github.com/ar-io" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.com/invite/HGG52EtTc2" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
