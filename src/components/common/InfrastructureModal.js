import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const InfrastructureModal = ({ isOpen, onRequestClose }) => {
  const infrastructure = [
    { name: 'Analog', image: '/blog/anlog.png', date: "2025-01-06", link: '/blog/anlog' },
    { name: 'ar.io Network', image: '/blog/ario.png', date: "2025-01-06", link: '/blog/ario' },
    { name: 'GoPlus', image: '/blog/goplus.png', date: "2024-12-21", link: '/blog/goplus' },
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
        {infrastructure.map((project) => (
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

export default InfrastructureModal;