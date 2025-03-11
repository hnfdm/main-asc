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
        name: 'Anoma',
        desc: 'Web3 OS. Build apps that work like magic, powered by intents.',
        image: '/blog/anoma.jpg',
        Link: 'https://x.com/Autosultan_team/status/1891884397491614031'
      },
      {
        name: 'Union',
        desc: 'Hyper-efficient interoperability protocol. Union connects all blockchains and rollups, across any ecosystem.',
        image: '/blog/union.png',
        Link: 'https://x.com/Autosultan_team/status/1891114894939799952'
      },
      {
        name: 'Permabrawl by AO',
        desc: 'The PermaBrawl is battle between 4 project for reward pool 3.412 AO to share with their communities.',
        image: '/blog/ao.png',
        Link: '/blog/permabrawl'
      },
      {
        name: 'Nodo',
        desc: 'AI Agent Swarm Coordination Layer on #SUI | Omni-chain futures trading ecosystem | 400k users | 1.2M - Trading Volume',
        image: '/blog/nodo.jpg',
        Link: 'https://x.com/Autosultan_team/status/1890824661245600088'
      },
      {
        name: 'Tanssi Network',
        desc: 'Launch your @Symbioticfi network in minutes—not months.',
        image: '/blog/tanssi.jpg',
        Link: 'https://x.com/Autosultan_team/status/1890782489838240187'
      },
      {
        name: 'Linera',
        desc: 'The Real-Time Blockchain - The first L1 blockchain infrastructure optimized for real-time applications. Founded by @ma2bd.',
        image: '/blog/linera.jpg',
        Link: 'https://x.com/Autosultan_team/status/1890455731859534041'
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
