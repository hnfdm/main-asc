import React from 'react';
import '@styles/components/website/ResourceSection.css';

function ResourceSection() {
  return (
    <section className="resource-section">
      <h2 className="resource-title">Why Choose Us?</h2>
      <div className="resource-grid">
        <div className="resource-item">
          <img src="/icons/youtube.png" alt="Icon" class="resource-icon"/>
          <h3>~100k</h3>
          <p class ="resource-desc">YouTube Subscribers</p>
        </div>
        <div className="resource-item">
          <img src="/icons/x.png" alt="Icon" class="resource-icon"/>
          <h3>~30k</h3>
          <p class ="resource-desc">X Followers</p>
        </div>
        <div className="resource-item">
          <img src="/icons/telegram.png" alt="Icon" class="resource-icon"/>
          <h3>~60k</h3>
          <p class ="resource-desc">Community Members</p>
        </div>
        <div className="resource-item">
          <img src="/icons/collaboration.png" alt="Icon" class="resource-icon"/>
          <h3>100++</h3>
          <p class ="resource-desc">Collaboration</p>
        </div>
        <div className="resource-item">
          <img src="/icons/tangan.png" alt="Icon" class="resource-icon"/>
          <h3>Test</h3>
          <p class ="resource-desc">xxxxx</p>
        </div>
        <div className="resource-item">
          <img src="/icons/tangan.png" alt="Icon" class="resource-icon"/>
          <h3>Test</h3>
          <p class ="resource-desc">xxxxx</p>
        </div>
      </div> 
    </section>
  );
}

export default ResourceSection;