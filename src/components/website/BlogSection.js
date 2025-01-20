import React, { useState } from 'react';
import '@styles/components/website/BlogSection.css';

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
        name: 'Islamic Coin (ISLM)',
        username: 'Gateway to enter and benefit from web3 and crypto the halal way. Native token of HAQQ Network.',
        image: '/icons/islm.jpg',
        followLink: '/'
      },
      {
        name: 'Halo Social (HLO)',
        username: 'A social monetization platform for the AI era. Earn passive rewards from posts, transactions, and engagements with 1M+ pioneers.',
        image: '/icons/hlo.jpg',
        followLink: '/'
      },
      {
        name: 'Lens Protocol (LENS)',
        username: 'The fastest, lowest-cost Ethereum network powering social and finance.',
        image: '/icons/lens.jpg',
        followLink: '/'
      },
      {
        name: 'Mega ETH (METH)',
        username: 'MegaETH is the first real-time blockchain.',
        image: '/icons/meth.jpg',
        followLink: '/'
      },
      {
        name: 'ar.io Network (ARIO)',
        username: 'The first domain on AO, but isnot just an simple domain.',
        image: '/icons/ario.jpg',
        followLink: '/'
      },
      {
        name: 'Mango Network (MGO)',
        username: 'Multi-VM Omni-Chain Infra Network. Integrates the core advantages of OPStack & MoveVM',
        image: '/icons/mgo.jpg',
        followLink: '/'
      },
    ] : [
      {
        name: 'Islamic Coin (ISLM)',
        username: 'Token with sharia narrative',
        image: '/icons/islm.jpg',
        followLink: '/'
      },
      {
        name: 'Islamic Coin (ISLM)',
        username: 'Token with sharia narrative',
        image: '/icons/islm.jpg',
        followLink: '/'
      },
    ];
  
    return blogs.map((blog, index) => (
      <div className="blog-card" key={index}>
        <img src={blog.image} alt={blog.name} className="blog-avatar" />
        <div className="blog-info">
          <h4>{blog.name}</h4>
          <div className="blog-status">
            <span>{blog.username}</span>
          </div>
        </div>
        <a href={blog.followLink} target="_blank" rel="noopener noreferrer">
          <button className="follow-button">Read</button>
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
