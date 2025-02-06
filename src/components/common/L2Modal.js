import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const L2Modal = ({ isOpen, onRequestClose }) => {
  const l2 = [
    { name: 'Mega ETH', image: '/blog/meth.png', link: '/blog/megaeth' },
    { name: 'Rise Chain', image: '/blog/rise.png', link: '/blog/risechain' },
    { name: 'Uni Chain', image: '/blog/unichain.png', link: '/blog/unichain' },
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
        {l2.map((project) => (
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

export default L2Modal;
