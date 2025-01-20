import React from 'react';
import '@styles/components/website/Blog.css';

const l1 = [
    { name: 'Mango Network', logo: '/blog/mango.png', date: "2025-01-05", link: '/blog/mangonetwork' },
    { name: 'Init Verse', logo: '/blog/ini.png',  date: "2024-12-23", link: 'https://example.com/planq' },
    { name: 'Somnia Network', logo: '/blog/somnia.png',  date: "2024-12-20", link: 'https://example.com/planq' },
    { name: 'Hyperliquid', logo: '/blog/hype.png', date: "2024-12-18", link: 'https://example.com/planq' },
    { name: 'Arweave - AO', logo: '/blog/ao.png',  date: "2024-12-12", link: 'https://example.com/planq' },
];

const l2 = [
  { name: 'Mega ETH', logo: '/icons/symphony.jpg', link: '/services/testnet/symphony' },
  { name: 'Rise Chain', logo: '/icons/dill.jpg', link: '/services/testnet/dill' },
  // Add more testnet projects here...
];

const defi = [
    { name: 'Islamic Coin', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    { name: 'MEVX', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    // Add more mainnet projects here...
];

const socialfi = [
    { name: 'Halo Social', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    { name: 'Lens Protocol', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    // Add more mainnet projects here...
];

const infrastructure = [
    { name: 'ar.io Network', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    { name: 'Octo Wallet', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    { name: 'GoPlus', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    // Add more mainnet projects here...
];

const depin = [
    { name: 'DePIN', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    // Add more mainnet projects here...
];

const education = [
    { name: 'Learn: Airdrop', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    // Add more mainnet projects here...
];


const Blog = () => {
    /*const formatDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        return new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(dateObj);
    };*/
  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <p>Choose a blog and dive into the story.</p>

        <div className="blog-section">
            <h3>Layer 1</h3>
            <div className="blog-grid">
                {l1.map((project, i) => (
                    <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="blog-item-link">
                    <div className="blog-item">
                        <div className="blog-content">
                            <img src={project.logo} alt={project.name} className="blog-logo" />
                            <span>{project.name}</span>
                        </div>
                        {/*<span className="blog-date">{formatDate(project.date)}</span>*/}
                        <span className="blog-date">{project.date}</span>
                    </div>
                </a>
                ))}
            </div>
        </div>

      <div className="blog-section">
        <h3>Layer 2</h3>
        <div className="blog-grid">
          {l2.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="blog-item-link">
              <div className="blog-item">
                <img src={project.logo} alt={project.name} className="blog-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="blog-section">
        <h3>DeFi</h3>
        <div className="blog-grid">
          {defi.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="blog-item-link">
              <div className="blog-item">
                <img src={project.logo} alt={project.name} className="blog-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="blog-section">
        <h3>SocialFi</h3>
        <div className="blog-grid">
          {socialfi.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="blog-item-link">
              <div className="blog-item">
                <img src={project.logo} alt={project.name} className="blog-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="blog-section">
        <h3>Infrastructure</h3>
        <div className="blog-grid">
          {infrastructure.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="blog-item-link">
              <div className="blog-item">
                <img src={project.logo} alt={project.name} className="blog-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="blog-section">
        <h3>DePIN</h3>
        <div className="blog-grid">
          {depin.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="blog-item-link">
              <div className="blog-item">
                <img src={project.logo} alt={project.name} className="blog-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="blog-section">
        <h3>Education</h3>
        <div className="blog-grid">
          {education.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="blog-item-link">
              <div className="blog-item">
                <img src={project.logo} alt={project.name} className="blog-logo" />
                <span>{project.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Blog;
