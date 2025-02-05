import React from 'react';
import { FaGlobe, FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';

const Overview = () => {
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0b0b0b'}}> {/* Limit the width */}
      <img 
        src="/blog/payfi.png" 
        alt="Payfi Logo" 
        style={{ width: '100px', height: '100px', margin: '20px auto', display: 'block', borderRadius: '0px' }} 
      />
      <p style={{ fontSize: '16px', color: 'white', textAlign: 'justify' }}>
      Bitget Wallet adalah rumah bagi Web3, menyatukan berbagai kemungkinan tak terbatas dalam satu dompet non-kustodian. Dengan lebih dari 60 juta pengguna, ia menawarkan layanan onchain yang komprehensif, termasuk manajemen aset, pertukaran instan, hadiah, taruhan, alat perdagangan, data pasar langsung, peramban DApp, pasar NFT, dan pembayaran kripto. Mendukung lebih dari 100 blockchain, 20.000+ DApps, dan 500.000+ token, Bitget Wallet memungkinkan perdagangan multi-rantai tanpa batas di ratusan DEX dan jembatan lintas-rantai, bersama dengan dana perlindungan $300 juta untuk memastikan keamanan aset pengguna.</p>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <a href="https://web3.bitget.com/en" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaGlobe size={20} />
        </a>
        <a href="https://x.com/BitgetWallet" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://t.me/BitgetWalletLite_Announcement" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaTelegram size={20} />
        </a>
        {/*<a href="https://github.com/MangoNet-Labs" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaGithub size={20} />
        </a>*/}
        <a href="https://discord.com/invite/bitget-wallet" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#15dbff' }}>
          <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Overview;
