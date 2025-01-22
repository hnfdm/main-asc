import React from 'react';
import Modal from 'react-modal';
import '@styles/common/RunningModal.css';

const RunningModal = ({ isOpen, onRequestClose }) => {
  const running = [
    { name: 'Nesa', logo: '/node/nesa.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Rivalz', logo: '/node/rivalz.png', link: 'https://t.me/airdropasc/64503' },
    { name: 'Brinx AI', logo: '/node/brinxai.png', link: '/node/brinxai' },
    { name: 'Hemi Network', logo: '/node/hemi.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Spheron Network', logo: '/node/spheron.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Cysic', logo: '/node/cysic.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Multiple Network', logo: '/node/multiple.png', link: 'https://t.me/airdropasc/64503' },
    { name: 'Titan Network', logo: '/node/titan.png', link: 'https://t.me/airdropasc/63734' },
    { name: 'Covalent', logo: '/node/covalent.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Cyberfly', logo: '/node/cyberfly.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Kuzco', logo: '/node/kuzco.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Gaianet AI', logo: '/node/gaianet.png', link: 'https://t.me/airdropasc/64503' },

    { name: 'Symphony', logo: '/node/symphony.png', link: '/node/symphony' },
    { name: 'Dill', logo: '/node/dill.png', link: '/node/dill' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Running Modal"
      className="running-modal"
      overlayClassName="running-modal-overlay"
    >
      <h2 className="running-title">Running</h2>
      <div className="running-grid">
        {running.map((project) => (
          <a href={project.link} key={project.name} className="running-item">
            <span>{project.name}</span>
            <img src={project.logo} alt={project.name} className="running-image" />
          </a>
        ))}
      </div>
        
      <button className="close-modal-button" onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default RunningModal;
