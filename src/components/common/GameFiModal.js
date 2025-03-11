import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const GameFiModal = ({ isOpen, onRequestClose }) => {
  const ai = [
    { name: 'KGen IO', image: '/blog/kgen.png', link: '/blog/kgen' },
    { name: 'DATA Framework', image: '/blog/carv.png', link: '/blog/carv' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="GameFi Modal"
      className="blog-modal"
      overlayClassName="blog-modal-overlay"
    >
      <h2 className="blog-title">Game Fi</h2>
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

export default GameFiModal;