import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaDiscord, FaYoutube } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/haqq.png" 
        alt="haqq Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      HAQQ Network itu apa sih? HAQQ Network adalah platform blockchain inovatif yang berfokus pada kepatuhan Syariah, dirancang untuk komunitas Muslim global. 
      Dengan loso dasar yang berlandaskan etika, keadilan, dan keuangan inklusif, HAQQ Network bertujuan mengintegrasikan teknologi blockchain ke dalam kehidupan sehari-hari tanpa melanggar prinsip-prinsip Islam. 
      Kemudian untuk arsitektur dari HAQQ Network ini sendiri dibangun menggunakan Teknologi Evmos yang didasarkan pada Cosmos SDK yang berjalan di atas mesin konsensus Tendermint Core. 
      Jadi, throughput yang tinggi dan instant nality ini diwarisi dari Tendermint Core, IBC dari Cosmos SDK, dan Kompatibilitas Ethereum dari Evmos.
      </p>
      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://www.haqq.network/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://twitter.com/The_HaqqNetwork" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/islamiccoin_int" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaTelegram size={20} />
        </a>
        {/*<a href="https://github.com/MangoNet-Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaGithub size={20} />
        </a>*/}
        <a href="https://github.com/MangoNet-Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaYoutube size={20} />
        </a>
        <a href="https://discord.com/invite/islamiccoin" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
