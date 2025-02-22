import React from 'react';
import '@styles/website/JalanMenu.css';  // Make sure this path is correct

const logos = [
  /*{ src: '/rlogo/Celestia.svg', alt: 'Celestia', url: 'https://www.celestia.org/' },
  { src: '/rlogo/dYdX.svg', alt: 'dYdX', url: 'https://link-to-site2.com' },
  { src: '/rlogo/Regen.svg', alt: 'Regen', url: 'https://www.regen.network/' },
  { src: '/rlogo/Stargaze.svg', alt: 'Stargaze', url: 'https://stargaze.zone/' },
  { src: '/rlogo/Stride.svg', alt: 'Stride', url: 'https://www.stride.zone/' },
  { src: '/rlogo/Noble.svg', alt: 'Noble', url: 'https://link-to-site6.com' },
  { src: '/rlogo/Sentinel.svg', alt: 'Sentinel', url: 'https://sentinel.co/' },
  { src: '/rlogo/Persistence.svg', alt: 'Persistence', url: 'https://persistence.one/' },*/

  { src: '/rlogo/Wizardia.png', alt: 'Wizardia', url: 'https://wizardia.io/' },
  { src: '/rlogo/Sui.png', alt: 'Sui', url: 'https://sui.io/' },
  { src: '/rlogo/Bencat.png', alt: 'Bencat', url: 'https://x.com/Bencatcoin' },
  { src: '/rlogo/InitVerse.png', alt: 'InitVerse', url: 'https://www.initverse.org/' },
  { src: '/rlogo/RandAO.png', alt: 'RandAO', url: 'https://randao.permagate.io/' },
  { src: '/rlogo/Mango.png', alt: 'MangoNetwork', url: 'https://mangonet.io/' },
  { src: '/rlogo/BitgetWallet.png', alt: 'Bitget Wallet', url: 'https://web3.bitget.com/id' },
  { src: '/rlogo/CoinEx.png', alt: 'Coinnex', url: 'https://www.coinex.com/id/' },
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
