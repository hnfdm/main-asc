import React from 'react';
//import { FaGlobe, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/depin.png" 
        alt="DePIN Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
        DePIN adalah singkatan dari Decentralized Physical Infrastructure Network yaitu konsep inovatif yang memanfaatkan token sebagai imbalan untuk mendorong pembangunan serta pengembangan infrastruktur fisik di dunia nyata.
        DePIN mendorong konsep yang memanfaatkan teknologi blockchain untuk mendesentralisasikan kepemilikan dan pengelolaan infrastruktur fisik di dunia nyata.
        Infrastruktur fisik yang dimaksud meliputi jaringan nirkabel, layanan cloud, jaringan mobilitas, dan sistem penyediaan energi.
        Sebagian besar infrastruktur ini sering kali didominasi oleh perusahaan besar yang memiliki kebutuhan modal tinggi, yang membuatnya sulit untuk bersaing dan berinovasi dan sering kali juga mengakibatkan monopoli dalam harga dan layanan.
        DePIN ingin mengubah hal ini dengan memberikan kontrol lebih besar kepada masyarakat, dengan memanfaatkan teknologi blockchain, insentif token, serta kekuatan internet.
      </p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {/*<a href="https://ar.io/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/ar_io_network" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://github.com/ar-io" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://discord.com/invite/HGG52EtTc2" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>*/}
      </div>
    </div>
  );
};

export default Overview;
