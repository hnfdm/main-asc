import React from 'react';
import '@styles/components/website/Services.css';

const mainnetProjects = [
  { name: 'Planq', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
  // Add more mainnet projects here...
];

const testnetProjects = [
  { name: 'Symphony', logo: '/icons/symphony.jpg', link: '/services/testnet/symphony' },
  { name: 'Dill', logo: '/icons/dill.jpg', link: '/services/testnet/dill' },
  { name: 'Fiamma', logo: '/icons/fiamma.jpg', link: 'services/testnet/fiamma' },
  { name: 'Nillion', logo: '/icons/nillion.jpg', link: 'services/testnet/nillon' },
  // Add more testnet projects here...
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Services</h2>
      <p>Pick a project from the list below to view guides and commands.</p>

      <div className="network-section">
        <h3>Mainnets</h3>
        <div className="network-grid">
          {mainnetProjects.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="network-item-link">
              <div className="network-item">
                <img src={project.logo} alt={project.name} className="network-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="network-section">
        <h3>Testnets</h3>
        <div className="network-grid">
          {testnetProjects.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="network-item-link">
              <div className="network-item">
                <img src={project.logo} alt={project.name} className="network-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
