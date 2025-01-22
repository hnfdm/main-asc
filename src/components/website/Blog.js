import React from 'react';
import '@styles/website/Blog.css';

const l1 = [
    { name: 'Mango Network', logo: '/blog/mango.png', date: "2025-01-05", link: '/blog/mangonetwork/' },
    { name: 'Init Verse', logo: '/blog/ini.png',  date: "2024-12-23", link: 'https://x.com/Autosultan_team/status/1870936953929298255' },
    { name: 'Somnia Network', logo: '/blog/somnia.png',  date: "2024-12-20", link: 'https://x.com/Autosultan_team/status/1869793522699927666' },
    { name: 'Hyperliquid', logo: '/blog/hype.png', date: "2024-12-18", link: 'https://x.com/Autosultan_team/status/1869071465402016099' },
    { name: 'Arweave - AO', logo: '/blog/ao.png',  date: "2024-12-12", link: 'https://x.com/Autosultan_team/status/1867231906116649031' },
];

const l2 = [
  { name: 'Mega ETH', logo: '/blog/meth.png', date: "2025-01-09", link: 'https://x.com/Autosultan_team/status/1877291659488276898' },
  { name: 'Rise Chain', logo: '/blog/rise.png', date: "2024-12-30", link: 'https://x.com/Autosultan_team/status/1873456488674730232' },
  { name: 'Uni Chain', logo: '/blog/unichain.png', date: "2024-12-27", link: 'https://x.com/Autosultan_team/status/1872667907773345939' },
];

const defi = [
    { name: 'Islamic Coin', logo: '/blog/islm.png', date: "2024-12-12", link: 'https://x.com/Autosultan_team/status/1879920513470103755' },
    { name: 'MEVX', logo: '/blog/mevx.png', date: "2024-12-12", link: 'https://x.com/Autosultan_team/status/1874981170141958490' },
];

const socialfi = [
    { name: 'Halo Social', logo: '/blog/halo.png', date: "2025-01-16", link: 'https://x.com/Autosultan_team/status/1879634678564651310' },
    { name: 'Lens Protocol', logo: '/blog/lens.png', date: "2024-12-22", link: 'https://x.com/Autosultan_team/status/1870554405843665285' },
];

const infrastructure = [
    { name: 'ar.io Network', logo: '/blog/ario.png', date: "2025-01-06", link: 'https://x.com/Autosultan_team/status/1875950696165728413' },
    { name: 'Octo Wallet', logo: '/blog/octo.png', date: "2024-12-23", link: 'https://x.com/Autosultan_team/status/1871171171598926197' },
    { name: 'GoPlus', logo: '/blog/goplus.png', date: "2024-12-21", link: 'https://x.com/Autosultan_team/status/1870472840560156706' },
];

const depin = [
    { name: 'DePIN', logo: '/blog/depin.png', date: "2025-01-01", link: 'https://x.com/Autosultan_team/status/1874494512451715095' },
];

const education = [
    { name: 'Learn: Airdrop', logo: '/blog/asc.png', date: "2024-12-16", link: 'https://x.com/Autosultan_team/status/1846508068559065362' },
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