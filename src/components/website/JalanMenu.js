import React from 'react';
import '@styles/website/JalanMenu.css';

const logos = [
  { src: '/rlogo/Wizardia.png', alt: 'Wizardia', url: 'https://wizardia.io/' },
  { src: '/rlogo/Sui.png', alt: 'Sui', url: 'https://sui.io/' },
  { src: '/rlogo/Bencat.png', alt: 'Bencat', url: 'https://x.com/Bencatcoin' },
  { src: '/rlogo/InitVerse.png', alt: 'InitVerse', url: 'https://www.initverse.org/' },
  { src: '/rlogo/Rise.png', alt: 'RiseChain', url: 'https://www.riselabs.xyz/' },
  { src: '/rlogo/RandAO.png', alt: 'RandAO', url: 'https://randao.permagate.io/' },
  { src: '/rlogo/Mango.png', alt: 'MangoNetwork', url: 'https://mangonet.io/' },
  { src: '/rlogo/SaharaAI.png', alt: 'SaharaAI', url: 'https://saharalabs.ai/' },
  { src: '/rlogo/BitgetWallet.png', alt: 'Bitget Wallet', url: 'https://web3.bitget.com/id' },
  { src: '/rlogo/CoinEx.png', alt: 'Coinnex', url: 'https://www.coinex.com/id/' },
  { src: '/rlogo/Sapien.png', alt: 'Sapien', url: 'https://game.sapien.io/' },
];

const LogoSlider = () => {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="logo-item" key={index + logos.length}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
