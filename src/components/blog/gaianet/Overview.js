import React from 'react';
import { FaGlobe, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/gaianet.png" 
        alt="Gaianet Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        Gaia is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise.
        It allows individuals and businesses to create AI agents. Each Gaia node provides:
        A web-based chatbot UI Chat with a Gaia node that is an expert on the Rust programming language.
        And an OpenAI compatible API. See how to use a Gaia node as a drop-in OpenAI replacement in your favorite AI agent app.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.gaianet.ai/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/Gaianet_AI" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://discord.gg/txDuZMsHDB" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>
        <a href="https://github.com/GaiaNet-AI" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
