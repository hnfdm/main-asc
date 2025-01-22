import React from 'react';
import '@styles/components/website/Node.css';

const doneProjects = [
    { name: 'Planq', logo: '/icons/planq.jpg', link: 'https://example.com/planq' },
    { name: 'Init Verse', logo: '/node/ini.png', link: 'https://inichain.com/' },
    { name: 'Network 3', logo: '/node/n3.png', link: 'https://network3.ai/' },
];

const runningProjects = [
    { name: 'Symphony', logo: '/icons/symphony.jpg', link: '/services/testnet/symphony' },
    { name: 'Dill', logo: '/icons/dill.jpg', link: '/services/testnet/dill' },
    { name: 'Fiamma', logo: '/icons/fiamma.jpg', link: 'services/testnet/fiamma' },
    { name: 'Nillion', logo: '/icons/nillion.jpg', link: 'services/testnet/nillon' },

    { name: 'Nesa', logo: '/node/nesa.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Rivalz', logo: '/node/rivalz.png', link: 'https://t.me/airdropasc/64503' },
    { name: 'Brinx AI', logo: '/node/brinxai.png', link: 'https://t.me/airdropasc/63734' },
    { name: 'Hemi Network', logo: '/node/hemi.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Spheron Network', logo: '/node/spheron.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Cysic', logo: '/node/cysic.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Multiple Network', logo: '/node/multiple.png', link: 'https://t.me/airdropasc/64503' },
    { name: 'Titan Network', logo: '/node/titan.png', link: 'https://t.me/airdropasc/63734' },
    { name: 'Covalent', logo: '/node/covalent.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Cyberfly', logo: '/node/cyberfly.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Kuzco', logo: '/node/kuzco.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Gaianet AI', logo: '/node/gaianet.png', link: 'https://t.me/airdropasc/64503' },
  // Add more testnet projects here...
];

const depinProjects = [
    { name: 'Nodepay S3', logo: '/depin/nodepay.png', link: 'https://nodepay.io/' },
];

const Node = () => {
  return (
    <div className="node-container">
        <h2>Node</h2>
        <p>Pick a project from the list below to view guides and commands.</p>

        <div className="chain-section">
            <h3>Completed</h3>
            <div className="chain-grid">
                {doneProjects.map((project, i) => (
                <a key={i} href={project.link} className="chain-item-link">
                    <div className="chain-item">
                        <img src={project.logo} alt={project.name} className="chain-logo" />
                        <span>{project.name}</span>
                    </div>
                </a>
                ))}
            </div>
        </div>

        <div className="chain-section">
            <h3>Running</h3>
            <div className="chain-grid">
                {runningProjects.map((project, i) => (
                <a key={i} href={project.link} className="chain-item-link">
                    <div className="chain-item">
                        <img src={project.logo} alt={project.name} className="chain-logo" />
                        <span>{project.name}</span>
                    </div>
                </a>
                ))}
            </div>
        </div>

        <div className="chain-section">
            <h3>DePIN</h3>
            <div className="chain-grid">
                {depinProjects.map((project, i) => (
                <a key={i} href={project.link} className="chain-item-link">
                    <div className="chain-item">
                        <img src={project.logo} alt={project.name} className="chain-logo" />
                        <span>{project.name}</span>
                    </div>
                </a>
                ))}
            </div>
        </div>

    </div>
  );
};

export default Node;
