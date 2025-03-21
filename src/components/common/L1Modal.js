import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const L1Modal = ({ isOpen, onRequestClose }) => {
  const l1 = [
    { name: 'Seismic', image: '/blog/seismic.png', link: '/blog/seismic' },
    { name: 'Plume Network', image: '/blog/plume.jpg', link: '/blog/plume' },
    { name: '0G Labs', image: '/blog/0glabs.jpg', link: '/blog/0glabs' },
    { name: 'Anoma', image: '/blog/anoma.jpg', link: '/blog/anoma' },
    { name: 'Union', image: '/blog/union.png', link: '/blog/union' },
    { name: 'Tanssi Network', image: '/blog/tanssi.jpg', link: '/blog/tanssi' },
    { name: 'Linera', image: '/blog/linera.jpg', link: '/blog/linera' },
    { name: 'Fogo Chain', image: '/blog/fogo.png', link: '/blog/fogochain' },
    { name: 'Mango Network', image: '/blog/mango.png', link: '/blog/mangonetwork' },
    { name: 'Init Verse', image: '/blog/ini.png', link: '/blog/initverse' },
    { name: 'Somnia Network', image: '/blog/somnia.png', link: '/blog/somnia' },
    { name: 'Hyperliquid', image: '/blog/hype.png', link: '/blog/hyperliquid' },
    { name: 'Arweave - AO', image: '/blog/ao.png', link: '/blog/arweaveao' },
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
