import React from 'react';
import '@styles/components/website/Partnership.css';

function Partnership() {
  const partners = [
    { name: 'Uniswap', logo: '/path/to/uniswap-logo.png' },
    { name: 'MEXC Global', logo: '/path/to/mexc-logo.png' },
    { name: 'Bitget', logo: '/path/to/bitget-logo.png' },
    { name: 'QuestN', logo: '/path/to/questn-logo.png' },
    { name: 'Uniswap', logo: '/path/to/uniswap-logo.png' },
    { name: 'MEXC Global', logo: '/path/to/mexc-logo.png' },
    { name: 'Bitget', logo: '/path/to/bitget-logo.png' },
    { name: 'QuestN', logo: '/path/to/questn-logo.png' },
  ];

  return (
    <section className="partnership-section">
      <div className="partnership-logos">
        {partners.map((partner, index) => (
          <div className="partner-logo" key={index}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partnership;
