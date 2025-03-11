import React from 'react';
import Modal from 'react-modal';
import '@styles/common/BlogModal.css';

const DeFiModal = ({ isOpen, onRequestClose }) => {
  const defi = [
    { name: 'Nodo', image: '/blog/nodo.jpg', link: '/blog/nodo' },
    { name: 'USDT0', image: '/blog/usdt0.jpg', link: '/blog/usdt0' },
    { name: 'PayFi', image: '/blog/payfi.png', link: '/blog/payfi' },
    { name: 'Octo Wallet', image: '/blog/octo.png', link: '/blog/okto' },
    { name: 'Islamic Coin', image: '/blog/islm.png', link: '/blog/islm' },
    { name: 'MevX', image: '/blog/mevx.png', link: '/blog/mevx' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="DeFi Modal"
      className="blog-modal"
      overlayClassName="blog-modal-overlay"
    >
      <h2 className="blog-title">DeFi</h2>
      <div className="blog-grid">
        {defi.map((project) => (
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

export default DeFiModal;
