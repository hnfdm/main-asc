import React from 'react';
import '@styles/website/Blog.css';

const l1 = [
    { name: 'Fogo Chain', logo: '/blog/fogo.png', date: "2025-01-27", link: '/blog/fogochain/' },
    { name: 'Mango Network', logo: '/blog/mango.png', date: "2025-01-05", link: '/blog/mangonetwork/' },
    { name: 'Init Verse', logo: '/blog/ini.png',  date: "2024-12-23", link: '/blog/initverse/' },
    { name: 'Somnia Network', logo: '/blog/somnia.png',  date: "2024-12-20", link: '/blog/somnia/' },
    { name: 'Hyperliquid', logo: '/blog/hype.png', date: "2024-12-18", link: '/blog/hyperliquid/' },
    { name: 'Arweave - AO', logo: '/blog/ao.png',  date: "2024-12-12", link: '/blog/arweaveao/' },
];

const l2 = [
  { name: 'Mega ETH', logo: '/blog/meth.png', date: "2025-01-09", link: '/blog/megaeth/' },
  { name: 'Rise Chain', logo: '/blog/rise.png', date: "2024-12-30", link: '/blog/risechain/' },
  { name: 'Uni Chain', logo: '/blog/unichain.png', date: "2024-12-27", link: '/blog/unichain/' },
];

const defi = [
    { name: 'PayFi by Bitget Wallet', logo: '/blog/payfi.png', date: "2025-02-03", link: '/blog/payfi/' },
    { name: 'Islamic Coin by HAQQ', logo: '/blog/islm.png', date: "2024-12-12", link: '/blog/islm/' },
    { name: 'MevX', logo: '/blog/mevx.png', date: "2024-12-12", link: '/blog/mevx/' },
];

const socialfi = [
    { name: 'Halo Social', logo: '/blog/halo.png', date: "2025-01-16", link: '/blog/halo/' },
    { name: 'Lens Protocol', logo: '/blog/lens.png', date: "2024-12-22", link: '/blog/lens/' },
];

const infrastructure = [
    { name: 'ar.io Network', logo: '/blog/ario.png', date: "2025-01-06", link: '/blog/ario' },
    { name: 'Octo Wallet', logo: '/blog/octo.png', date: "2024-12-23", link: '/blog/okto' },
    { name: 'GoPlus', logo: '/blog/goplus.png', date: "2024-12-21", link: '/blog/goplus' },
];

const ai = [
    { name: 'DATA Framework by CARV', logo: '/blog/carv.png', date: "2025-01-31", link: '/blog/carv' },
    { name: 'Sahara AI', logo: '/blog/sahara.png', date: "2025-01-30", link: '/blog/sahara' },
    { name: 'Gaianet AI', logo: '/blog/gaianet.png', date: "2025-01-28", link: '/blog/gaianet' },
    { name: 'Privasea', logo: '/blog/privasea.png', date: "2025-01-26", link: '/blog/privasea' },
];

const depin = [
    { name: 'DePIN', logo: '/blog/depin.png', date: "2025-01-01", link: ' /blog/depin' },
];

const education = [
    { name: 'Learn: Airdrop', logo: '/blog/asc.png', date: "2024-12-16", link: ' /blog/airdrop' },
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
            <p>Choose a blog and dive into the story</p>

            <div className="blog-section">
                <h3>Layer 1</h3>
                <div className="blog-grid">
                    {l1.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
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
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-content">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                                <span>{project.name}</span>
                            </div>
                            <span className="blog-date">{project.date}</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>

            <div className="blog-section">
                <h3>DeFi</h3>
                <div className="blog-grid">
                    {defi.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-content">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                                <span>{project.name}</span>
                            </div>
                            <span className="blog-date">{project.date}</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>

            <div className="blog-section">
                <h3>SocialFi</h3>
                <div className="blog-grid">
                    {socialfi.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-content">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                                <span>{project.name}</span>
                            </div>
                            <span className="blog-date">{project.date}</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>

            <div className="blog-section">
                <h3>Infrastructure</h3>
                <div className="blog-grid">
                {infrastructure.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-content">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                                <span>{project.name}</span>
                            </div>
                            <span className="blog-date">{project.date}</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
            
            <div className="blog-section">
                <h3>AI</h3>
                <div className="blog-grid">
                {ai.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-content">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                                <span>{project.name}</span>
                            </div>
                            <span className="blog-date">{project.date}</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>

            <div className="blog-section">
                <h3>DePIN</h3>
                <div className="blog-grid">
                {depin.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-content">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                                <span>{project.name}</span>
                            </div>
                            <span className="blog-date">{project.date}</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>

            <div className="blog-section">
                <h3>Education</h3>
                <div className="blog-grid">
                {education.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-content">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                                <span>{project.name}</span>
                            </div>
                            <span className="blog-date">{project.date}</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;