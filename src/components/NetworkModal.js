import React from 'react';
import Modal from 'react-modal';

const NetworkModal = ({ isOpen, onRequestClose }) => {
  const mainnetProjects = [
    { name: 'Symphony', image: '/assets/imgproyek/coub.jpg', link: 'https://bangpateng.xyz/services/testnet/symphony' },
    // Add more projects here
  ];
  
  const testnetProjects = [
    { name: 'Symphony', image: '/assets/imgproyek/coub.jpg', link: 'https://bangpateng.xyz/services/testnet/symphony' },
    { name: 'Dill', image: '/assets/imgproyek/coub.jpg', link: 'https://bangpateng.xyz/services/testnet/dill' },
    { name: 'Fiamma', image: '/assets/imgproyek/coub.jpg', link: 'https://bangpateng.xyz/services/testnet/fiamma' },
    { name: 't3rn', image: '/assets/imgproyek/coub.jpg', link: 'https://bangpateng.xyz/services/testnet/t3rn' },
    
    // Add more projects here
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Network Modal"
      className="network-modal"
      overlayClassName="network-modal-overlay"
    >
      <h2 className="network-title">Mainnet</h2>
      <div className="network-grid">
        {mainnetProjects.map((project) => (
          <a href={project.link} key={project.name} className="network-item" target="_blank" rel="noopener noreferrer">
            <span>{project.name}</span>
            <img src={project.image} alt={project.name} className="network-image" />
          </a>
        ))}
      </div>
      
      <h2 className="network-title">Testnet</h2>
      <div className="network-grid">
        {testnetProjects.map((project) => (
          <a href={project.link} key={project.name} className="network-item" target="_blank" rel="noopener noreferrer">
            <span>{project.name}</span>
            <img src={project.image} alt={project.name} className="network-image" />
          </a>
        ))}
      </div>
      
      <button className="close-modal-button" onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default NetworkModal;
