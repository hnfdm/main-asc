import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}> {/* Limit the width */}
      <img 
        src="/node/gaianet.png" 
        alt="Gaianet logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      GaiaNet is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise. A GaiaNet node consists of a high-performance and cross-platform application runtime, a finetuned LLM, a knowledge embedding model, a vector database, a prompt manager, an open API server, and a plugin system for calling external tools and functions using LLM outputs. It can be deployed by any knowledge worker as a digital twin and offered as a web API service. A new class of tradeable assets and a marketplace could be created from individualized knowledge bases and components. Similar GaiaNet nodes are organized into GaiaNet domains, which offer trusted and reliable AI agent services to the public. The GaiaNet node and domains are governed by the GaiaNet DAO (Decentralized Autonomous Organization). Through Purpose Bound Money smart contracts, the GaiaNet network is a decentralized marketplace for AI agent services.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.gaianet.ai" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={18} />
        </a>
        <a href="https://twitter.com/Gaianet_AI" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={18} />
        </a>
        <a href="https://t.me/Gaianet_AI" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTelegram size={18} />
        </a>
        <a href="https://github.com/GaiaNet-AI" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGithub size={18} />
        </a>
        <a href="https://discord.com/invite/gaianet-ai" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={18} />
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
        <div style={{ margin: '0 10px', fontSize: '16px', color: 'white' }}>
          <strong>Specifications</strong>
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: 'white' }}>
          RAM 8GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: 'white' }}>
          SSD 200GB
        </div>
        <div style={{ margin: '0 10px', fontSize: '14px', color: 'white' }}>
          vCPU 4 Cores
        </div>
      </div>
    </div>
  );
};

export default Overview;
