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
        name: 'Seismic',
        desc: 'The Encrypted Blockchain.',
        image: '/blog/seismic.png',
        Link: '/blog/seismic'
      },
      {
        name: 'Mira Network',
        desc: 'Trustless, Verified Intelligence.',
        image: '/blog/mira.jpg',
        Link: '/blog/mira'
      },
      {
        name: 'Protocol Land',
        desc: 'Decentralised source control and code collaboration platform.',
        image: '/blog/pl.jpg',
        Link: '/blog/protocolland'
      },
      {
        name: 'Plume Network',
        desc: 'Bringing the real world onchain.',
        image: '/blog/plume.jpg',
        Link: '/blog/plume'
      },
      {
        name: '0G Labs',
        desc: 'The largest DeAI L1 ecosystem.',
        image: '/blog/0glabs.jpg',
        Link: '/blog/0glabs'
      },
      {
        name: 'Anoma',
        desc: 'Web3 OS. Build apps that work like magic, powered by intents.',
        image: '/blog/anoma.jpg',
        Link: '/blog/anoma'
      },
    ] : [
      {
        name: 'Coming Soon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/blog/soon.png',
        Link: '/'
      },
      {
        name: 'Coming Soon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/blog/soon.png',
        Link: '/'
      },
      {
        name: 'Coming Soon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/blog/soon.png',
        Link: '/'
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
        <a href={blog.Link} >
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
          102
        </button>
      </div>
      <div className={`blog-cards ${fadeClass}`}>
        {renderCards()}
      </div>
    </section>
  );
}

export default BlogSection;
