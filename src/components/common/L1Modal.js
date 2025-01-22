import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const L1Modal = ({ isOpen, onRequestClose }) => {
  const l1 = [
    { name: 'Mango Network', image: '/blog/mango.png', link: '/blog/mangonetwork/' },
    { name: 'Init Verse', image: '/blog/ini.png', link: 'https://x.com/Autosultan_team/status/1870936953929298255' },
    { name: 'Somnia Network', image: '/blog/somnia.png', link: 'https://x.com/Autosultan_team/status/1869793522699927666' },
    { name: 'Hyperliquid', image: '/blog/hype.png', link: 'https://x.com/Autosultan_team/status/1869071465402016099' },
    { name: 'Arweave - AO', image: '/blog/ao.png', link: 'https://x.com/Autosultan_team/status/1867231906116649031' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="L1 Modal"
      className="blog-modal"
      overlayClassName="blog-modal-overlay"
    >
      <h2 className="blog-title">Layer 1</h2>
      <div className="blog-grid">
        {l1.map((project) => (
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

export default L1Modal;
