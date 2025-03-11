import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
GOPLUS 101: Security On-Chain Pertama di Web3 

Dengan GoPlusSecurity, kalian dapat melindungi dompet secara real-time, mendeteksi transaksi berisiko, menghindari situs phishing, dan kontrak berbahaya, menjadikannya alat penting bagi pengguna Web3.

Apa saja Key Feature nya? Ada airdrop nya ? 

Lets dive depper 👇

![Image 0](https://pbs.twimg.com/media/GfVAdIxakAAdkR0.jpg)

---

1/ Key Feature 

- Wallet Security Check Memindai aset dan transaksi dompet untuk mendeteksi ancaman seperti kontrak berisiko atau otorisasi tinggi. 

- Proactive Warning Pop-up Menampilkan peringatan otomatis saat ada transaksi berisiko atau mengunjungi situs mencurigakan. 

- Customizable Protection Pengguna dapat menyesuaikan strategi keamanan, seperti pemeriksaan tanda tangan dan transaksi. 

- AI Bot 24/7 Asisten keamanan on-chain yang siap membantu kapan saja. e API Security: GoPlus menyediakan API Multichain Security untuk mendeteksi ancaman pada smart contract, token, NFT, dan DApps.

![Image 1](https://pbs.twimg.com/media/GfVBbryaYAA75B3.jpg)

2/ Airdrop 

Airdrop GoPlus x Bitget Wallet - Meme Wave 2025 Reward Pool: $5000 (10x $100, 10x $300 & 1x $1000)

- Connect Wallet

- Sync Twitter in TBook 

- Follow GoPlusSecurity BitgetWallet d Retweet [X Post](https://x.com/GoPlusSecurity/status/1866792572926189579)

- Install GoPlus Security Extension & Run a Wallet Check 

Sedikit tips, cuman metamask yang support buat aktivasi wallet check

3/ Ecosystem 

Ada banyak DApp yang sudah terintegrasi dengan GoPlus

![Image 2](https://pbs.twimg.com/media/GfVCWKpaEAEw0lb.jpg)

---

👀 Written by [Zamza Salim](https://x.com/zamzasalim)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1870472840560156706)
`;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', color: 'white', textAlign: 'justify'}}> {/* Limit the width */}
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            <div style={{ 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px", // Jarak antar gambar
              flexWrap: "wrap", // Agar tetap responsif 
            }}>
            <img
              {...props}
              alt={props.alt || "Image"} // Menyediakan alt default jika tidak ada
              style={{ maxWidth: "75%", height: "auto" , margin : "5px 0"}} // Styling gambar
            />
            </div>
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CopyBlock
                text={String(children).replace(/\n$/, '')}
                language={match[1]}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
      {markdownBeforeForm}
      </ReactMarkdown>
    </div>
  );
};

export default Read;
