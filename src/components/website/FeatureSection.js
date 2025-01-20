import React from 'react';
import '@styles/components/website/FeatureSection.css';

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-item">
        <h3>Community Ads</h3>
        <div className="feature-content">
          <img src="tangan.png" alt="Low Fees Icon" />
          <p>We offer project add across platforms.</p>
        </div>
      </div>
      <div className="feature-item">
        <h3>Community Friendly</h3>
        <div className="feature-content">
          <img src="orang.png" alt="Community Icon" />
          <p>We actively engage and support our community</p>
        </div>
      </div>
      <div className="feature-item">
        <h3>Community Tutorial</h3>
        <div className="feature-content">
          <img src="kunci.png" alt="Non-custodial Icon" />
          <p>We provide detailed tutorials with effectively.</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
