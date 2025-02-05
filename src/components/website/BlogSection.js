import React, { useState } from 'react';
import '@styles/website/BlogSection.css';
import { FaBookReader } from "react-icons/fa";

function BlogSection() {
  const [activeTab, setActiveTab] = useState('Script');
  const [fadeClass, setFadeClass] = useState('fade-in');

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setFadeClass('fade-out');
      setTimeout(() => {
        setActiveTab(tab);
        setFadeClass('fade-in');
      }, 300); // Adjusting the duration of the fade-out
    }
  };

  const renderCards = () => {
    const blogs = activeTab === 'Script' ? [
      {
        name: 'Payment Finance',
        desc: 'PayFi bridges the gap between digital assets & our everyday lives.',
        image: '/blog/payfi.png',
        followLink: '/blog/payfi/'
      },
      {
        name: 'DATA Framework (CARV)',
        desc: 'Building an AI chain ecosystem to enable data sovereignty at scale. ',
        image: '/blog/carv.png',
        followLink: 'https://x.com/Autosultan_team/status/1885289161550361071'
      },
      {
        name: 'Sahara AI',
        desc: 'Create & Monetize AI, collaboratively with verifiable on-chain provenance.',
        image: '/blog/sahara.png',
        followLink: 'https://x.com/Autosultan_team/status/1878484026492866924'
      },
      {
        name: 'Gaianet AI',
        desc: 'Decentralizing AI Inferencing. Building a distributed and incentivized GenAI Agent Network.',
        image: '/blog/gaianet.png',
        followLink: 'https://x.com/Autosultan_team/status/1883930962855411836'
      },
      {
        name: 'Fogo Chain',
        desc: 'Defying physics to achieve real-time experiences at scale. SVM Layer 1',
        image: '/blog/fogo.png',
        followLink: 'https://x.com/Autosultan_team/status/1883913244257165382'
      },
      {
        name: 'Privasea',
        desc: 'Confidential AI network enabled by FHEML',
        image: '/blog/privasea.png',
        followLink: 'https://x.com/Autosultan_team/status/1883468609751769292'
      },
    ] : [
      {
        name: 'Coming Soon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/blog/soon.png',
        followLink: '/'
      },
      {
        name: 'Coming Soon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/blog/soon.png',
        followLink: '/'
      },
    ];
  
    return blogs.map((blog, index) => (
      <div className="blog-card" key={index}>
        <img src={blog.image} alt={blog.name} className="blog-avatar" />
        <div className="blog-info">
          <h4>{blog.name}</h4>
          <div className="blog-status">
            <span>{blog.desc}</span>
          </div>
        </div>
        <a href={blog.followLink} target="_blank" rel="noopener noreferrer">
          <button className="read-button">
          <FaBookReader size={15}/>
          </button>
        </a>
      </div>
    ));
  };

  return (
    <section id="blog" className="blog-section">
      <h2>Research</h2> {/* Preserved the Blog heading */}
      <div className="blog-tabs">
        <button
          className={activeTab === 'Script' ? 'active' : ''}
          onClick={() => handleTabClick('Script')}
        >
          101
        </button>
        <button
          className={activeTab === 'Script Web' ? 'active' : ''}
          onClick={() => handleTabClick('Script Web')}
        >
          Soon
        </button>
      </div>
      <div className={`blog-cards ${fadeClass}`}>
        {renderCards()}
      </div>
    </section>
  );
}

export default BlogSection;
