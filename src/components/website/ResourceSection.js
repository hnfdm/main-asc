import React from 'react';
import '@styles/website/ResourceSection.css';

function ResourceSection() {
  return (
    <section className="resource-section">
      <h2 className="resource-title">Why Choose Us?</h2>
      <div className="resource-grid">
        <div className="resource-item">
          <img src="/icons/youtube-c.png" alt="Icon" class="resource-icon"/>
          <h3>90k+</h3>
          <p class ="resource-desc">Subscribers</p>
        </div>
        <div className="resource-item">
          <img src="/icons/x-c.png" alt="Icon" class="resource-icon"/>
          <h3>32k+</h3>
          <p class ="resource-desc">Followers</p>
        </div>
        <div className="resource-item">
          <img src="/icons/telegram-c.png" alt="Icon" class="resource-icon"/>
          <h3>80k+</h3>
          <p class ="resource-desc">Members</p>
        </div>
        <div className="resource-item">
          <img src="/icons/kol.png" alt="Icon" class="resource-icon"/>
          <h3>-</h3>
          <p class ="resource-desc">KOL</p>
        </div>
        <div className="resource-item">
          <img src="/icons/c-c.png" alt="Icon" class="resource-icon"/>
          <h3>100+</h3>
          <p class ="resource-desc">Collaboration</p>
        </div>
        <div className="resource-item">
          <img src="/icons/event.png" alt="Icon" class="resource-icon"/>
          <h3>10+</h3>
          <p class ="resource-desc">Offline Event</p>
        </div>
      </div> 
    </section>
  );
}

export default ResourceSection;