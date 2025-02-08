import React from 'react';
import '@styles/website/BlogNew.css';

const l1 = [
    { name: 'Fogo 101: The Next Big Thing on Solana', logo: 'https://pbs.twimg.com/media/GiUARapa8AALr2V.jpg', date: "2025-01-27", link: '/blog/fogochain' },
    { name: 'Manggo 101: 40 Hari menuju TGE', logo: 'https://pbs.twimg.com/media/Gggi2esb0AA6l6K.jpg', date: "2025-01-05", link: '/blog/mangonetwork' },
    { name: 'Init Verse 101: 80% menuju TGE (Q1 25)', logo: 'https://pbs.twimg.com/media/GfbnDVfbMAAVb27.jpg',  date: "2024-12-23", link: '/blog/initverse' },
    { name: 'Somnia 101: The Next Vana? Jangan Skip', logo: 'https://pbs.twimg.com/media/GfLWLkCaQAALgKA.jpg',  date: "2024-12-20", link: '/blog/somnia' },
    { name: 'Hyperliquid 101 "A Hot Newcomer"', logo: 'https://blog.pintu.co.id/wp-content/uploads/2024/12/hyperliquid-crypto.jpg', date: "2024-12-18", link: '/blog/hyperliquid' },
    { name: 'Arweave/AO: The Next Solana for Airdrop Hunter.', logo: 'https://pbs.twimg.com/media/Gem8htaaoAAGtTo.jpg',  date: "2024-12-12", link: '/blog/arweaveao' },
];

const l2 = [
  { name: 'MegaETH 101: The Next OP/ARB for Airdrop Hunter', logo: 'https://pbs.twimg.com/media/Gg14tmqaMAMcipu.jpg', date: "2025-01-09", link: '/blog/megaeth' },
  { name: 'Rise Chain 101: First Pioneer for Gigagas Era', logo: 'https://pbs.twimg.com/media/Gf_afDwboAAa05d.jpg', date: "2024-12-30", link: '/blog/risechain' },
  { name: 'Uni Chain 101: Potential Airdrop?', logo: 'https://pbs.twimg.com/media/Gf0LKrgakAATqEh.jpg', date: "2024-12-27", link: '/blog/unichain' },
];

const defi = [
    { name: 'Bitget Wallet Card 101: PayFi', logo: 'https://pbs.twimg.com/media/Gi36sN_acAANbOD.jpg', date: "2025-02-03", link: '/blog/payfi' },
    { name: 'Octo Wallet 101: The Next Phantom?', logo: 'https://pbs.twimg.com/media/Gfe7Tz4awAA2C9X.jpg', date: "2024-12-23", link: '/blog/okto' },
    { name: 'Islamic Coin 101: Token with Sharia Narrative', logo: 'https://pbs.twimg.com/media/GhbQrQWacAAsK2o.jpg', date: "2024-12-12", link: '/blog/islm' },
    { name: 'MevX 101: Coin Meme Tools that Make A Fortune!', logo: 'https://pbs.twimg.com/media/GgVCdQSaMAATBa_.jpg', date: "2024-12-12", link: '/blog/mevx' },
];

const socialfi = [
    { name: 'Halo Social 101: Previously get 10M IDR, Next Airdrop?', logo: 'https://pbs.twimg.com/media/GhXMCNYbMAAbL-g.jpg', date: "2025-01-16", link: '/blog/halo' },
    { name: 'Lens Protocol 101: Mainnet Q1 2025?', logo: 'https://pbs.twimg.com/media/GhG2WHkakAA80jv.jpg', date: "2024-12-22", link: '/blog/lens' },
];

const infrastructure = [
    { name: 'Analog 101: Ongoing to TGE?', logo: 'https://pbs.twimg.com/media/GjDvQDAa8AA2mEu.jpg', date: "2025-02-06", link: '/blog/anlog' },
    { name: 'ar.io 101: The first domain, but not just an simple domain.', logo: 'https://pbs.twimg.com/media/GgivPOhbQAAyqRa.jpg', date: "2025-01-06", link: '/blog/ario' },
    { name: 'GoPlus 101: The First On-chain Security on WEB3', logo: 'https://pbs.twimg.com/media/GfVBbryaYAA75B3.jpg', date: "2024-12-21", link: '/blog/goplus' },
];

const ai = [
    { name: 'Sahara AI 101: Massive Baned Threat & Airdrops?', logo: 'https://pbs.twimg.com/media/GifZPo6bYAU3vN5.jpg', date: "2025-01-30", link: '/blog/sahara' },
    { name: 'Gaianet AI 101: Potential Node Airdrop?', logo: 'https://pbs.twimg.com/media/GiUOfV7aYAEqjXc.jpg', date: "2025-01-28", link: '/blog/gaianet' },
    { name: 'Privasea AI 101: Potential Node Airdrop?', logo: 'https://pbs.twimg.com/media/GiNrxy5b0AAKlFk.jpg', date: "2025-01-26", link: '/blog/privasea' },
];

const gamefi = [
    { name: 'KGeN 101: Confirmed Airdrop?', logo: 'https://pbs.twimg.com/media/GjIQBV8bIAEDKO9.jpg', date: "2025-02-07", link: '/blog/kgen' },
    { name: 'CARV 101: D.A.T.A Framework Revolution', logo: 'https://pbs.twimg.com/media/GinkOgUacAAxQO_.jpg', date: "2025-01-31", link: '/blog/carv' },
];

const depin = [
    { name: 'DePIN Tutorial 101: Just using an Smartphone?', logo: 'https://pbs.twimg.com/media/GgODRzAboAAZ-bB.jpg', date: "2025-01-01", link: '/blog/depin' },
];

const education = [
    { name: 'Learn Airdrop 101: How to be The King of Airdrop', logo: 'https://pbs.twimg.com/media/GaAc_XEbEAAyGfI.jpg', date: "2024-12-16", link: '/blog/airdrop' },
];

function formatDate(dateString) {
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const date = new Date(dateString); // Parse the date string
    const day = date.getDate(); // Get the day of the month
    const month = months[date.getMonth()]; // Get the abbreviated month name
    const year = date.getFullYear(); // Get the full year
    return `${month} ${day}, ${year}`;
}

const Blog = () => {

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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
            
            <div className="blog-section">
                <h3>GameFi</h3>
                <div className="blog-grid">
                {gamefi.map((project, i) => (
                    <a key={i} href={project.link} className="blog-item-link">
                        <div className="blog-item">
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
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
                            <div className="blog-image">
                                <img src={project.logo} alt={project.name} className="blog-logo" />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{formatDate(project.date)}</span>
                                <span className="blog-title">{project.name}</span>    
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;