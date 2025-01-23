import React from 'react';
import '@styles/website/Partnership.css';

const logos = [
  { src: '/partnership/Binance.png', alt: 'Binance', url: 'https://www.binance.com/' },
  { src: '/partnership/Okx.png', alt: 'Okx', url: 'https://www.okx.com/' },
  { src: '/partnership/Mexc.png', alt: 'Mexc', url: 'https://www.mexc.com/' },
  { src: '/partnership/Probit.png', alt: 'Probit', url: 'https://www.probit.com/' },
  { src: '/partnership/Huobi.png', alt: 'Huobi', url: 'https://www.htx.com/' },
  { src: '/partnership/Coin98.png', alt: 'Coin98', url: 'https://coin98.com/' },
  { src: '/partnership/AscendEx.png', alt: 'AscendEx', url: 'https://ascendex.com/' },
  { src: '/partnership/Bitget.png', alt: 'Bitget', url: 'https://www.bitget.com/' },
  { src: '/partnership/MatrixPort.png', alt: 'MatrixPort', url: 'https://www.matrixport.com/' },
  { src: '/partnership/CoinEx.png', alt: 'CoinEx', url: 'https://www.coinex.com/' },
];

const logos2 = [
  { src: '/partnership/Bybit.png', alt: 'Binance', url: 'https://www.binance.com/' },
  { src: '/partnership/Iotex.png', alt: 'Okx', url: 'https://www.okx.com/' },
  { src: '/partnership/Zipmex.png', alt: 'Mexc', url: 'https://www.mexc.com/' },
  { src: '/partnership/Velas.png', alt: 'Probit', url: 'https://www.probit.com/' },
  { src: '/partnership/Upbit.png', alt: 'Huobi', url: 'https://www.htx.com/' },
  { src: '/partnership/Hotbit.png', alt: 'Coin98', url: 'https://coin98.com/' },
  { src: '/partnership/SnapEx.png', alt: 'Bitget', url: 'https://www.bitget.com/' },
  { src: '/partnership/BingX.png', alt: 'MatrixPort', url: 'https://www.matrixport.com/' },
  { src: '/partnership/Bitkeep.png', alt: 'CoinEx', url: 'https://www.coinex.com/' },
  { src: '/partnership/Bkex.png', alt: 'AscendEx', url: 'https://ascendex.com/' },
];

const logos3 = [
  { src: '/partnership/MoonStarter.webp', alt: 'Binance', url: 'https://www.binance.com/' },
  { src: '/partnership/Spintop.png', alt: 'Okx', url: 'https://www.okx.com/' },
  { src: '/partnership/KarusStarter.png', alt: 'Mexc', url: 'https://www.mexc.com/' },
  { src: '/partnership/BSCLaunch.webp', alt: 'Probit', url: 'https://www.probit.com/' },
  { src: '/partnership/Palmare.png', alt: 'Huobi', url: 'https://www.htx.com/' },
  { src: '/partnership/InfinityPad.png', alt: 'Coin98', url: 'https://coin98.com/' },
  { src: '/partnership/Wizardia.png', alt: 'Bitget', url: 'https://www.bitget.com/' },
  { src: '/partnership/Coinxpad.png', alt: 'MatrixPort', url: 'https://www.matrixport.com/' },
  { src: '/partnership/Adroverse.png', alt: 'CoinEx', url: 'https://www.coinex.com/' },
  { src: '/partnership/Evos.png', alt: 'AscendEx', url: 'https://ascendex.com/' },
  { src: '/partnership/SpaceMarvel.png', alt: 'AscendEx', url: 'https://ascendex.com/' },

];

const logos4 = [
  { src: '/partnership/Bityard.png', alt: 'Binance', url: 'https://www.binance.com/' },
  { src: '/partnership/Tokenomy.png', alt: 'Okx', url: 'https://www.okx.com/' },
  { src: '/partnership/Indodax.png', alt: 'Mexc', url: 'https://www.mexc.com/' },
  { src: '/partnership/Tokocrypto.png', alt: 'Probit', url: 'https://www.probit.com/' },
  { src: '/partnership/PolkaStarter.png', alt: 'Huobi', url: 'https://www.htx.com/' },
  { src: '/partnership/DAOS.png', alt: 'Coin98', url: 'https://coin98.com/' },
  { src: '/partnership/Roseon.webp', alt: 'Bitget', url: 'https://www.bitget.com/' },
  { src: '/partnership/GameStarter.png', alt: 'MatrixPort', url: 'https://www.matrixport.com/' },
  { src: '/partnership/Paragen.png', alt: 'CoinEx', url: 'https://www.coinex.com/' },
  { src: '/partnership/VCGamers.png', alt: 'AscendEx', url: 'https://ascendex.com/' },
  { src: '/partnership/MilkyWayEx.png', alt: 'AscendEx', url: 'https://ascendex.com/' },
];

const logos5 = [
  { src: '/partnership/TrustFi.png', alt: 'Binance', url: 'https://www.binance.com/' },
  { src: '/partnership/Kommunitas.png', alt: 'Okx', url: 'https://www.okx.com/' },
  { src: '/partnership/Babylons.png', alt: 'Mexc', url: 'https://www.mexc.com/' },
  { src: '/partnership/Synapse.png', alt: 'Probit', url: 'https://www.probit.com/' },
  { src: '/partnership/KoiStarter.png', alt: 'Huobi', url: 'https://www.htx.com/' },
  { src: '/partnership/FantomStarter.png', alt: 'Coin98', url: 'https://coin98.com/' },
  { src: '/partnership/AnonVerse.png', alt: 'Bitget', url: 'https://www.bitget.com/' },
  { src: '/partnership/SafeLaunch.png', alt: 'MatrixPort', url: 'https://www.matrixport.com/' },
  { src: '/partnership/Erax.png', alt: 'CoinEx', url: 'https://www.coinex.com/' },
  { src: '/partnership/YAYGames.png', alt: 'AscendEx', url: 'https://ascendex.com/' },
  { src: '/partnership/GuildFi.png', alt: 'AscendEx', url: 'https://ascendex.com/' },
]; 

const Partnership = () => {
  return (
    <div className="partnership-slider">
      <h2 className="partnership-title">Looking to Collaborate with Us?</h2>

      <div className="partnership-track track-left">
        {logos.map((logo, index) => (
          <div className="partnership-item" key={index}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="partnership-item" key={index + logos.length}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </div>

      <div className="partnership-track track-right">
        {logos2.map((logo, index) => (
          <div className="partnership-item" key={index }>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
        {logos2.map((logo, index) => (
          <div className="partnership-item" key={index + logos.length}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </div>

      <div className="partnership-track track-left">
        {logos3.map((logo, index) => (
          <div className="partnership-item" key={index}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
        {logos3.map((logo, index) => (
          <div className="partnership-item" key={index + logos.length}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </div>

      <div className="partnership-track track-right">
        {logos4.map((logo, index) => (
          <div className="partnership-item" key={index}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
        {logos4.map((logo, index) => (
          <div className="partnership-item" key={index + logos.length}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </div>

      <div className="partnership-track track-left">
        {logos5.map((logo, index) => (
          <div className="partnership-item" key={index}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
        {logos5.map((logo, index) => (
          <div className="partnership-item" key={index + logos.length}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
        ))}
      </div>

      <div className="partnership-container">
      {/* Button Contact Us */}
        <a href="https://mail.google.com/mail/?view=cm&to=contact@airdropasc.com" className="contact-button" target="_blank" rel="noopener noreferrer">
          Contact Us
        </a>
    </div>

    </div>
  );
};

export default Partnership;
