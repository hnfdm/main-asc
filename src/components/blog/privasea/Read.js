import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
Privasea AI 101: Airdrop NODE + DEPIN 

Privasea AI - mendapatkan funding/valuation: [$15M]/[$180M]

Backer: Binance Labs, Gateio Startup & OKX Ventures
 
Apa itu Privasea dan bagaimana cara mendapatkan airdrop nya? let's dive depper 👇

![Image 0](https://pbs.twimg.com/media/GiNrxy5b0AAKlFk.jpg)

---

1/ Apa itu Privasea?

Privasea adalah proyek yang menawarkan solusi inovatif untuk tantangan privasi data dalam bidang kecerdasan buatan (AI).
Proyek ini mengintegrasikan Enkripsi Homomorfik Penuh (Fully Homomorphic Encryption, FHE) dengan insentif berbasis blockchain, dengan tujuan meningkatkan perlindungan privasi terutama dalam aplikasi AI.
Privasea bertujuan untuk memungkinkan inferensi machine learning yang rahasia menggunakan dataset terenkripsi, yang memperkuat privasi dan keamanan dalam komputasi AI

Key feature: 

➖ Privasi Data: Privasea (PRVA) menyediakan lapisan keamanan tambahan untuk melindungi data pribadi pengguna dari akses yang tidak sah.

➖ Transaksi Anonim: Pengguna dapat melakukan transaksi kripto tanpa mengorbankan privasi, karena Privasea (PRVA) memungkinkan transaksi yang anonim dan tidak dapat dilacak.

➖ Smart Contracts: Platform ini mendukung pembuatan dan pelaksanaan smart contracts dengan privasi yang terjamin, memungkinkan berbagai aplikasi terdesentralisasi untuk dijalankan dengan aman.

➖ Penyimpanan Aman: Privasea (PRVA) menyediakan penyimpanan aman untuk aset kripto pengguna, dengan teknologi enkripsi yang canggih untuk melindungi dari serangan cyber.

![Image 1](https://pbs.twimg.com/media/GiNsw88bkAAHaVU.jpg)

2/ Airdrop App 

1️⃣ Download [Apps](https://privasea.ai/download-app) [ios/android]

2️⃣ Create account:

➖ Create Account

➖ Submit code: P2hVTyg

➖ Backup Private Key /Pharse (Manual / Google Drive)

3️⃣ Mint NFT: 

➖ Click Space > Click Crypto

➖ Deposit "ETH ARB" At least 7$ (for mint need 0,0016 ETH/$5)

➖ Click Proof > Verify + Scan Face

➖ Mint NFT (700 STARS point)

➖ Click Proof > and complete another task to earn more point 

Note: untuk verifikasi code kalian bisa dapet code dari [BOT](http://t.me/BotOr_NotABot) dan copy paste ke aplikasi ImHuman

![Image 2](https://pbs.twimg.com/media/GiNtc5cbEAAmACT.jpg)

3/ Airdrop Node

Nodenya sendiri baru di umumin kemarin tanggal 24 jadi masih terhitung early, 

Spek Vps:

➖ Storage: 100GB available storage

➖ Memory : 8GB RAM

➖ Processor : A processor with 6 cores

Auto install code via [Airdrop ASC](https://t.me/airdropasc/71060)

Pada saat muncul node address kalian ke Dashboard dulu

➖ Go to : https://deepsea-beta.privasea.ai/privanetixNode

➖ Connect Wallet Testnet

➖ Klik My Privanetix node

➖ Klik Setup Now

➖ Submit Name , Node Address dan Klik Centang

➖ Balik lagi ke VPS lalu pilih ya

➖ Go To Dashboard lagi

➖ Claim Faucet & Stake

➖ Done

![Image 3](https://pbs.twimg.com/media/GiNwtG6aUAE4nKR.jpg)

---

👀 Written by [Zamza Salim](https://x.com/zamzasalim)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1883468609751769292)
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
