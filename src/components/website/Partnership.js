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
  { src: '/partnership/Bybit.png', alt: 'Bybit', url: 'https://www.bybit.com/' },
  { src: '/partnership/Iotex.png', alt: 'Iotex', url: 'https://iotex.io/' },
  { src: '/partnership/Zipmex.png', alt: 'Zipmex', url: 'https://www.zipmex.com/' },
  { src: '/partnership/Velas.png', alt: 'Velas', url: 'https://www.velas.com/' },
  { src: '/partnership/Upbit.png', alt: 'Upbit', url: 'https://www.upbit.com/' },
  { src: '/partnership/Hotbit.png', alt: 'Hotbit', url: 'https://hotbit.com/' },
  { src: '/partnership/SnapEx.png', alt: 'Snapex', url: 'https://www.snapex.com/' },
  { src: '/partnership/BingX.png', alt: 'BingX', url: 'https://www.bingx.com/' },
  { src: '/partnership/Bitkeep.png', alt: 'Bitkeep', url: 'https://www.web3.bitget.com/' },
  { src: '/partnership/Bkex.png', alt: 'Bkex', url: 'https://bkex.com/' },
];

const logos3 = [ /*circle*/
  { src: '/partnership/Bityard.png', alt: 'Bityard', url: 'https://www.bydfi.com/' },
  { src: '/partnership/Tokenomy.png', alt: 'Tokenomy', url: 'https://www.tokenomy.com/' },
  { src: '/partnership/Indodax1.png', alt: 'Indodax', url: 'https://www.indodax.com/' },
  { src: '/partnership/Tokocrypto.png', alt: 'Tokocrypto', url: 'https://www.tokocrypto.com/' },
  { src: '/partnership/PolkaStarter.png', alt: 'PolkaStarter', url: 'https://www.polkastarter.com/' },
  { src: '/partnership/DAOS.png', alt: 'DaoStarter', url: 'https://daostarter.pro/' },
  { src: '/partnership/Roseon.png', alt: 'Roseon', url: 'https://www.roseon.world/' },
  { src: '/partnership/GameStarter.png', alt: 'GameStarter', url: 'https://www.gamestarter.com/' },
  { src: '/partnership/Paragen.png', alt: 'Paragen', url: 'https://www.paragen.io/' },
  { src: '/partnership/VCGamers.png', alt: 'VCGamers', url: 'https://vcgamers.com/' },
];

const logos4 = [
  { src: '/partnership/MoonStarter.png', alt: 'MoonStarter', url: 'https://moonstarter.net/' },
  { src: '/partnership/Spintop.png', alt: 'Spintop', url: 'https://spintop.network/' },
  { src: '/partnership/KarusStarter.png', alt: 'KarusStarter', url: 'https://karusstarter.com/' },
  { src: '/partnership/BSCLaunch.png', alt: 'BSCLaunch', url: 'https://bsclaunch.org/' },
  { src: '/partnership/InfinityPad.png', alt: 'InfinityPad', url: 'https://www.infinitypad.com/' },
  { src: '/partnership/TrustFi.png', alt: 'TrustFi', url: 'https://www.trustfi.org/' },
  { src: '/partnership/Kommunitas.png', alt: 'Kommunitas', url: 'https://www.kommunitas.net/' },
  { src: '/partnership/Babylons.png', alt: 'Babylons', url: 'https://www.babylons.io/' },
  { src: '/partnership/Synapse.png', alt: 'Synapse', url: 'https://synapse.network/' },
  { src: '/partnership/FantomStarter.png', alt: 'FantomStarter', url: 'https://fantomstarter.io/' },
  { src: '/partnership/SafeLaunch.png', alt: 'SafeLaunch', url: 'https://safelaunch.io/' },
];

const logos5 = [
  { src: '/partnership/Evos.png', alt: 'Evos', url: 'https://www.evos.gg' },
  { src: '/partnership/Creo1.png', alt: 'Creo Engine', url: 'https://creoengine.com/' },
  { src: '/partnership/Wizardia.png', alt: 'Wizardia', url: 'https://wizardia.io/' },

  { src: '/partnership/Bencat.png', alt: 'Bencat', url: 'https://x.com/Bencatcoin' },
  { src: '/partnership/InitVerse.png', alt: 'InitVerse', url: 'https://www.initverse.org/' },
  { src: '/partnership/RandAO.png', alt: 'RandAO', url: 'https://randao.permagate.io/' },
  { src: '/partnership/RiseChain.png', alt: 'RiseChain', url: 'https://www.riselabs.xyz/' },
  { src: '/partnership/SaharaAI.png', alt: 'SaharaAI', url: 'https://saharalabs.ai/' },
  { src: '/partnership/Multiple.png', alt: 'MultipleNetwork', url: 'https://multiple.fi/' },
  { src: '/partnership/MangoNetwork.png', alt: 'MangoNetwork', url: 'https://mangonet.io/' },
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
