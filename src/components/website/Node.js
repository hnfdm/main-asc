import React from 'react';
import '@styles/components/website/Node.css';

const doneProjects = [
    { name: 'Init Verse', logo: '/node/ini.png', link: 'https://inichain.com/' },
    { name: 'Network 3', logo: '/node/n3.png', link: 'https://network3.ai/' },
    { name: 'Volara', logo: '/node/asc.png', link: '/' },
    { name: 'Mira', logo: '/node/asc.png', link: '/' },
    { name: 'Titan Network', logo: '/node/asc.png', link: '/' },
    { name: 'ICN', logo: '/node/asc.png', link: '/' },
    { name: 'Glacier', logo: '/node/asc.png', link: '/' },
    { name: 'Zenrock', logo: '/node/asc.png', link: '/' },
    { name: 'Nexus Labs', logo: '/node/asc.png', link: '/' },
    { name: 'SixGPT', logo: '/node/asc.png', link: '/' },
    { name: 'Sphere', logo: '/node/asc.png', link: '/' },
    { name: 'Elixir', logo: '/node/asc.png', link: '/' },
    { name: 'Autonomys', logo: '/node/asc.png', link: '/' },
    { name: 'Eigenlayer', logo: '/node/asc.png', link: '/' },
    { name: 'Fintopio', logo: '/node/asc.png', link: '/' },
    { name: 'Rainbow Protocol', logo: '/node/asc.png', link: '/' },
    { name: '0G Labs', logo: '/node/asc.png', link: '/' },
    { name: 'Nillion', logo: '/node/nillion.png', link: '/' },
    { name: 'Story', logo: '/node/asc.png', link: '/' },
    { name: 'Nesa', logo: '/node/asc.png', link: '/' },
    { name: 'Rivalz', logo: '/node/asc.png', link: '/' },
    { name: 'Cysic', logo: '/node/asc.png', link: '/' },
    { name: 'Chasm', logo: '/node/asc.png', link: '/' },
    { name: 'Dill Network', logo: '/node/asc.png', link: '/' },
    { name: 'Lumoz', logo: '/node/asc.png', link: '/' },
    { name: 'Othentic', logo: '/node/asc.png', link: '/' },
    { name: 'Nubit Alpha', logo: '/node/asc.png', link: '/' },
    { name: 'Initia', logo: '/node/asc.png', link: '/' },
    { name: 'Avail', logo: '/node/asc.png', link: '/' },
    { name: 'Ola Network', logo: '/node/asc.png', link: '/' },
    { name: 'Nibiru', logo: '/node/asc.png', link: '/' },
    { name: 'Koii Network', logo: '/node/asc.png', link: '/' },
    { name: 'Pryzm', logo: '/node/asc.png', link: '/' },
    { name: 'StratisEVM', logo: '/node/asc.png', link: '/' },
    { name: 'Namada', logo: '/node/asc.png', link: '/' },
    { name: 'Bevm', logo: '/node/asc.png', link: '/' },
    { name: 'Ten', logo: '/node/asc.png', link: '/' },
    { name: 'Quai', logo: '/node/asc.png', link: '/' },
    { name: 'Over Protocol', logo: '/node/asc.png', link: '/' },
    { name: 'Entangle', logo: '/node/asc.png', link: '/' },
    { name: 'Streamr Network', logo: '/node/asc.png', link: '/' },
    { name: 'ar.io', logo: '/node/asc.png', link: '/' },
    { name: 'Sanr', logo: '/node/asc.png', link: '/' },
    { name: 'Mintlayer', logo: '/node/asc.png', link: '/' },
    { name: 'Movement Labs', logo: '/node/asc.png', link: '/' },
    { name: 'Powerloom', logo: '/node/asc.png', link: '/' },
    { name: 'Arkeo', logo: '/node/asc.png', link: '/' },
    { name: 'Diva Dao', logo: '/node/asc.png', link: '/' },
    { name: 'OPBNB', logo: '/node/asc.png', link: '/' },
    { name: 'Monad', logo: '/node/asc.png', link: '/' },
    { name: 'Taiko', logo: '/node/asc.png', link: '/' },
    { name: 'Redbelly Network', logo: '/node/asc.png', link: '/' },
    { name: 'Muon Network', logo: '/node/asc.png', link: '/' },
    { name: 'Indus Moi', logo: '/node/asc.png', link: '/' },
    { name: 'Manta', logo: '/node/asc.png', link: '/' },
    { name: 'Q', logo: '/node/asc.png', link: '/' },
    { name: 'Gaganode', logo: '/node/asc.png', link: '/' },
    { name: 'Gitshock', logo: '/node/asc.png', link: '/' },
    { name: 'Sinso', logo: '/node/asc.png', link: '/' },
    { name: 'Thunder', logo: '/node/asc.png', link: '/' },
    { name: 'Mises', logo: '/node/asc.png', link: '/' },
    { name: 'Dusk', logo: '/node/asc.png', link: '/' },
    { name: 'Gitopia', logo: '/node/asc.png', link: '/' },
    { name: 'Aleo Prover', logo: '/node/asc.png', link: '/' },
    { name: 'Adamnite', logo: '/node/asc.png', link: '/' },
    { name: 'Loyal', logo: '/node/asc.png', link: '/' },
    { name: 'OKP4', logo: '/node/asc.png', link: '/' },
    { name: 'DeInfra', logo: '/node/asc.png', link: '/' },
    { name: 'Wormholes Chain', logo: '/node/asc.png', link: '/' },
    { name: 'Eurus', logo: '/node/asc.png', link: '/' },
    { name: 'Inery', logo: '/node/asc.png', link: '/' },
    { name: 'Haqq', logo: '/node/asc.png', link: '/' },
    { name: 'Point Network', logo: '/node/asc.png', link: '/' },
    { name: 'Safe Stake', logo: '/node/asc.png', link: '/' },
    { name: 'Stride', logo: '/node/asc.png', link: '/' },
    { name: 'Teritory', logo: '/node/asc.png', link: '/' },
    { name: 'Bundlr', logo: '/node/asc.png', link: '/' },
    { name: 'Sei', logo: '/node/asc.png', link: '/' },
    { name: 'Meson Network', logo: '/node/asc.png', link: '/' },
    { name: 'Sui', logo: '/node/asc.png', link: '/' },
    { name: 'TSFC', logo: '/node/asc.png', link: '/' },
    { name: 'Aptos', logo: '/node/asc.png', link: '/' },
    { name: 'Nela Netwrok', logo: '/node/asc.png', link: '/' },
    { name: 'Mundis', logo: '/node/asc.png', link: '/' },
    { name: 'Subspace', logo: '/node/asc.png', link: '/' },
    { name: 'Massa Network', logo: '/node/asc.png', link: '/' },
    { name: 'Forta', logo: '/node/asc.png', link: '/' },
    { name: 'Minima', logo: '/node/asc.png', link: '/' },
    { name: 'Bifrost', logo: '/node/asc.png', link: '/' },
    { name: 'Shade Protocol', logo: '/node/shade.png', link: 'https://app.shadeprotocol.io' },
];

const runningProjects = [
    { name: 'Nesa', logo: '/node/nesa.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Rivalz', logo: '/node/rivalz.png', link: 'https://t.me/airdropasc/64503' },
    { name: 'Brinx AI', logo: '/node/brinxai.png', link: '/node/brinxai' },
    { name: 'Hemi Network', logo: '/node/hemi.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Spheron Network', logo: '/node/spheron.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Cysic', logo: '/node/cysic.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Multiple Network', logo: '/node/multiple.png', link: 'https://t.me/airdropasc/64503' },
    { name: 'Titan Network', logo: '/node/titan.png', link: 'https://t.me/airdropasc/63734' },
    { name: 'Covalent', logo: '/node/covalent.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Cyberfly', logo: '/node/cyberfly.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Kuzco', logo: '/node/kuzco.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Gaianet AI', logo: '/node/gaianet.png', link: 'https://t.me/airdropasc/64503' },

    { name: 'Symphony', logo: '/node/symphony.png', link: '/services/testnet/symphony' },
    { name: 'Dill', logo: '/node/dill.png', link: 'services/testnet/dill' },
];

const depinProjects = [
    { name: 'Nodepay', logo: '/depin/nodepay.png', link: 'https://nodepay.io/' },
];

const Node = () => {
  return (
    <div className="node-container">
        <h2>Node</h2>
        <p>Pick a project from the list below to view guides and commands.</p>

        <div className="chain-section">
            <h3>Running Node</h3>
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
    </div>
  );
};

export default Node;
