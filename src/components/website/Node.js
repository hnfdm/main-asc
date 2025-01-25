import React from 'react';
import '@styles/website/Node.css';

const doneProjects = [
    { name: 'Rivalz', logo: '/node/rivalz.png', link: 'https://rivalz.ai/' },
    { name: 'Init Verse', logo: '/node/ini.png', link: 'https://inichain.com/' },
    { name: 'Network 3', logo: '/node/n3.png', link: 'https://network3.ai/' },
    { name: 'Volara', logo: '/node/volara.png', link: 'https://volara.xyz/' },
    { name: 'Mira', logo: '/node/mira.jpg', link: 'https://mira.network/' },
    { name: 'ICN Protocol', logo: '/node/icn.jpg', link: 'https://www.icn.global/' },
    { name: 'Glacier', logo: '/node/glacier.jpg', link: 'https://www.glacier.io/' },
    { name: 'Zenrock', logo: '/node/zenrock.png', link: 'https://www.zenrockfoundation.io/' },
    { name: 'Nexus', logo: '/node/nexus.jpg', link: 'https://nexus.xyz/' },
    { name: 'SixGPT', logo: '/node/sixgpt.png', link: 'https://sixgpt.xyz/' },
    { name: 'SphereX', logo: '/node/spherex.jpg', link: 'https://www.sx.xyz/' },
    { name: 'Elixir', logo: '/node/elixir.jpg', link: 'https://elixir.games/' },
    { name: 'Eigenlayer', logo: '/node/eigen.jpg', link: 'http://eigenlayer.xyz/' },
    { name: 'Fintopio', logo: '/node/fintopio.jpg', link: 'https://fintopio.com/' },
    { name: '0G Labs', logo: '/node/og.jpg', link: 'https://0g.ai/' },
    { name: 'Nillion', logo: '/node/nillion.png', link: 'https://nillion.com/' },
    { name: 'Story', logo: '/node/story.jpg', link: 'https://linktr.ee/storyprotocol' },
    { name: 'Chasm', logo: '/node/chasm.png', link: 'https://www.chasm.net/' },
    { name: 'Lumoz', logo: '/node/lumoz.jpg', link: 'https://lumoz.org/' },
    { name: 'Othentic', logo: '/node/othentic.jpg', link: 'https://www.othentic.xyz/' },
    { name: 'Nubit', logo: '/node/nubit.jpg', link: 'https://www.nubit.org/' },
    { name: 'Initia', logo: '/node/initia.png', link: 'https://initia.xyz/' },
    { name: 'Avail', logo: '/node/avail.png', link: 'https://www.availproject.org/' },
    { name: 'Ola', logo: '/node/ola.jpg', link: 'https://olavm.org/' },
    { name: 'Nibiru', logo: '/node/nibiru.jpg', link: 'https://nibiru.fi/' },
    { name: 'Koii Network', logo: '/node/koii.jpg', link: 'https://www.koii.network/' },
    { name: 'Pryzm', logo: '/node/pryzm.jpg', link: 'https://app.pryzm.zone/' },
    { name: 'Stratis', logo: '/node/stratis.jpg', link: 'https://www.stratisplatform.com/' },
    { name: 'Namada', logo: '/node/namada.jpg', link: 'https://namada.net/' },
    { name: 'BEVM', logo: '/node/bevm.jpg', link: 'https://www.bevm.io/' },
    { name: 'Ten', logo: '/node/ten.jpg', link: 'https://ten.xyz/' },
    { name: 'Quai', logo: '/node/quai.jpg', link: 'https://qu.ai/' },
    { name: 'Over Protocol', logo: '/node/over.jpg', link: 'https://over.network/' },
    { name: 'Entangle', logo: '/node/entangle.jpg', link: 'https://entangle.fi/' },
    { name: 'Streamr', logo: '/node/streamr.png', link: 'https://streamr.network/' },
    { name: 'ARIO', logo: '/node/ario.jpg', link: 'https://ar.io/' },
    { name: 'Santiment', logo: '/node/santiment.png', link: 'https://santiment.network/' },
    { name: 'Mintlayer', logo: '/node/mint.jpg', link: 'https://www.mintlayer.org/' },
    { name: 'Movement', logo: '/node/movement.jpg', link: 'https://movementlabs.xyz/' },
    { name: 'Powerloom', logo: '/node/powerloom.jpg', link: 'https://powerloom.io/' },
    { name: 'Arkeo', logo: '/node/arkeo.jpg', link: 'https://arkeo.network/' },
    { name: 'Diva', logo: '/node/diva.jpg', link: 'https://www.divastaking.net/' },
    { name: 'Monad', logo: '/node/monad.jpg', link: 'https://www.monad.xyz/' },
    { name: 'Taiko', logo: '/node/taiko.png', link: 'https://taiko.xyz/' },
    { name: 'Redbelly', logo: '/node/redbelly.jpg', link: 'https://redbelly.network/' },
    { name: 'Muon Network', logo: '/node/muon.jpg', link: 'https://www.muon.net/' },
    { name: 'Manta', logo: '/node/manta.jpg', link: 'https://manta.network/' },
    { name: 'Q Protocol', logo: '/node/q.png', link: 'https://q.org/' },
    { name: 'Gaganode', logo: '/node/gaganode.jpg', link: 'https://www.gaganode.com/' },
    { name: 'Mises', logo: '/node/mises.jpg', link: 'https://www.mises.site/' },
    { name: 'Dusk', logo: '/node/dusk.jpg', link: 'https://dusk.network/' },
    { name: 'Gitopia', logo: '/node/gitopia.png', link: 'https://gitopia.com/' },
    { name: 'Aleo', logo: '/node/aleo.jpg', link: 'https://aleo.org/' },
    { name: 'Adamnite', logo: '/node/adamnite.jpg', link: 'https://adamnite.org/' },
    { name: 'Axone', logo: '/node/axone.jpg', link: 'https://axone.xyz/' },
    { name: 'DeInfra', logo: '/node/deinfra.jpg', link: 'https://deinfra.net/' },
    { name: 'Wormholes', logo: '/node/wormhole.jpg', link: 'https://wormhole.com/' },
    { name: 'Eurus', logo: '/node/eurus.png', link: 'https://www.eurus.network/en/' },
    { name: 'Inery', logo: '/node/inery.png', link: 'https://inery.io/' },
    { name: 'HAQQ', logo: '/node/haqq.jpg', link: 'http://haqq.network/' },
    { name: 'Point Network', logo: '/node/point.png', link: 'https://pointnetwork.io/' },
    { name: 'Safe Stake', logo: '/node/safestake.png', link: 'https://www.safestake.xyz/' },
    { name: 'Stride', logo: '/node/stride.png', link: 'https://www.stride.zone/' },
    { name: 'Teritori', logo: '/node/teritori.png', link: 'https://teritori.com/' },
    { name: 'IRYS', logo: '/node/irys.png', link: 'https://irys.xyz/' },
    { name: 'Sei', logo: '/node/sei.png', link: 'https://www.sei.io/' },
    { name: 'Meson Network', logo: '/node/meson.png', link: 'https://meson.network/' },
    { name: 'Sui', logo: '/node/sui.png', link: 'https://sui.io/' },
    { name: 'TFSC', logo: '/node/tfsc.png', link: 'https://www.tfsc.io/Index' },
    { name: 'Aptos', logo: '/node/aptos.png', link: 'https://aptosfoundation.org/' },
    { name: 'Autonomys', logo: '/node/autonomys.png', link: 'https://www.autonomys.xyz/' },
    { name: 'Massa Network', logo: '/node/massa.png', link: 'https://massa.net/' },
    { name: 'Forta', logo: '/node/forta.png', link: 'https://www.forta.org/' },
    { name: 'Minima', logo: '/node/minima.png', link: 'https://minima.global/' },
    { name: 'Bifrost', logo: '/node/bifrost.png', link: 'https://bifrostnetwork.com/' },
    { name: 'Shade Protocol', logo: '/node/shade.png', link: 'https://app.shadeprotocol.io' },
];

const runningProjects = [
    { name: 'Nesa', logo: '/node/nesa.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Brinx AI', logo: '/node/brinxai.png', link: '/node/brinxai' },
    { name: 'Hemi Network', logo: '/node/hemi.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Spheron Network', logo: '/node/spheron.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Cysic', logo: '/node/cysic.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Multiple Network', logo: '/node/multiple.png', link: 'https://t.me/airdropasc/64503' },
    { name: 'Titan Network', logo: '/node/titan.png', link: 'https://t.me/airdropasc/63734' },
    { name: 'Covalent', logo: '/node/covalent.png', link: 'https://t.me/airdropasc/69821' },
    { name: 'Cyberfly', logo: '/node/cyberfly.png', link: 'https://t.me/airdropasc/64988' },
    { name: 'Kuzco', logo: '/node/kuzco.png', link: 'https://t.me/airdropasc/61971' },
    { name: 'Gaianet AI', logo: '/node/gaianet.png', link: '/node/gaianet' },

    { name: 'Symphony', logo: '/node/symphony.png', link: '/node/symphony' },
    { name: 'Dill', logo: '/node/dill.png', link: '/node/dill' },
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
