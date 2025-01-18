import React from 'react';
import './FeatureSection.css';

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-item">
        <h3>Free Bot Script Sharing</h3>
        <div className="feature-content">
          <img src="tangan.png" alt="Low Fees Icon" />
          <p>We offer free scripts and tools for various bot functionalities across platforms.</p>
        </div>
      </div>
      <div className="feature-item">
        <h3>Bot Script Orders</h3>
        <div className="feature-content">
          <img src="orang.png" alt="Community Icon" />
          <p>Order automated bot scripts for your specific blockchain needs.</p>
        </div>
      </div>
      <div className="feature-item">
        <h3>Node Tutorial</h3>
        <div className="feature-content">
          <img src="kunci.png" alt="Non-custodial Icon" />
          <p>We provide detailed tutorials for setting up and managing nodes effectively.</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
