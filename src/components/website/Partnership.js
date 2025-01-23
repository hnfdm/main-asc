import React from 'react';
import '@styles/website/Partnership.css';

const logos = [
  { src: '/partnership/Binance.png', alt: 'Binance', url: 'https://www.binance.com/' },
  { src: '/rlogo/Celestia.svg', alt: 'Celestia', url: 'https://www.celestia.org/' },
  { src: '/rlogo/dYdX.svg', alt: 'dYdX', url: 'https://link-to-site2.com' },
  { src: '/rlogo/Regen.svg', alt: 'Regen', url: 'https://www.regen.network/' },
  { src: '/rlogo/Stargaze.svg', alt: 'Stargaze', url: 'https://stargaze.zone/' },
  { src: '/rlogo/Stride.svg', alt: 'Stride', url: 'https://www.stride.zone/' },
  { src: '/rlogo/Noble.svg', alt: 'Noble', url: 'https://link-to-site6.com' },
  { src: '/rlogo/Sentinel.svg', alt: 'Sentinel', url: 'https://sentinel.co/' },
  { src: '/rlogo/Persistence.svg', alt: 'Persistence', url: 'https://persistence.one/' },
];

/*const logos2 = [
  
];

const logos3 = [
  
];

const logos4 = [
  
];

const logos5 = [
  
]; */

const Partnership = () => {
  return (
    <div className="partnership-slider">
      <h2 className="partnership-title">Looking to Collaborate With Us?</h2>

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
