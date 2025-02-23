import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const SocialFiModal = ({ isOpen, onRequestClose }) => {
  const socialfi = [
    { name: 'Permabrawl by AO', image: '/blog/ao.png', date: "2025-02-16", link: '/blog/' },
    { name: 'Kaito AI', image: '/blog/kaito.jpg', date: "2025-02-10", link: '/blog/' },

    { name: 'Halo Social', image: '/blog/halo.png', date: "2025-01-16", link: '/blog/halo' },
    { name: 'Lens Protocol', image: '/blog/lens.png', date: "2024-12-22", link: '/blog/lens' },
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
        {socialfi.map((project) => (
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

export default SocialFiModal;