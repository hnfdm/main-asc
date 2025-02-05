import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const EducationModal = ({ isOpen, onRequestClose }) => {
  const education = [
    { name: 'Learn: Airdrop', image: '/blog/asc.png', link: '/blog/airdrop/' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="L2 Modal"
      className="blog-modal"
      overlayClassName="blog-modal-overlay"
    >
      <h2 className="blog-title">Layer 2</h2>
      <div className="blog-grid">
        {education.map((project) => (
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

export default EducationModal;