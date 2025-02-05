import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const AIModal = ({ isOpen, onRequestClose }) => {
  const ai = [
    { name: 'DATA Framework by CARV', image: '/blog/carv.png', link: '/blog/carv/' },
    { name: 'Sahara AI', image: '/blog/sahara.png', link: '/blog/saharaai/' },
    { name: 'Gaianet AI', image: '/blog/gaianet.png', link: '/blog/gaianet/' },
    { name: 'Privasea', image: '/blog/privasea.png', link: '/blog/privasea/' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Depin Modal"
      className="blog-modal"
      overlayClassName="blog-modal-overlay"
    >
      <h2 className="blog-title">Layer 2</h2>
      <div className="blog-grid">
        {ai.map((project) => (
          <a href={project.link} key={project.name} className="blog-item">
            <span>{project.name}</span>
            <img src={project.image} alt={project.name} className="blog-image" />
          </a>
        ))}
      </div>
        
      <button className="close-modal-button" onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AIModal;