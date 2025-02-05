import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const DePINModal = ({ isOpen, onRequestClose }) => {
  const depin = [
    { name: 'DePIN', image: '/blog/depin.png', link: '/blog/depin/' },
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
        {depin.map((project) => (
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

export default DePINModal;