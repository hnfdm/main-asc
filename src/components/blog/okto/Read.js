import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
Okto Wallet 101: The Next Phantom?

"Wallet Web3 yang bakal ngasih Airdrop!" 

Okto Wallet merupakan rantai middleware yang mengelola informasi transaksi dan pengguna tanpa menyimpan aset pengguna.

Apa saja ecosytemnya? Bagaimana cara mendapatkan airdropnya? Let's dive deeper 👇

Join dulu [Airdrop ASC](https://t.me/airdropasc) biar gak ketinggalan info

![Image 0](https://pbs.twimg.com/media/Gfe7Tz4awAA2C9X.jpg)

---
---
1/ Komponen Okto Wallet 

- Okto App Chain
> Merupakan rantai middleware yang mengelola informasi transaksi dan pengguna tanpa menyimpan aset pengguna
- Decentralized Wallet Networks (DWN)
> Jaringan ini menggunakan tanda tangan Multi-Party Computation (MPC) untuk memberikan izin dan delegasi secara aman
- Decentralized Transaction Networks (DTN)
> DTN bertugas mengelola siklus hidup transaksi secara asinkron, memungkinkan pengembang untuk tidak perlu mengelola kompleksitas transaksi yang berbeda di berbagai blockchain

![Image 1](https://pbs.twimg.com/media/Gfe8ik_bMAA0Bq2.jpg)

2/ Airdrop 

Untuk saat ini kalian cukup mengumpulkan poin yang nantinya poin ini akan mendapatkan alokasi airdrop sebesar 7% , step cara menginstal wallet :

- Instal [Aplikasi Okto](https://okto.go.link/defi_home?referral_code=fHVS49&adj_t=13c5o7y4)
- Masukkan kode - fHVS49

Cara mendapatkan okto poin adalah kalian cukup transaksi on-chain dengan dompet Okto, termasuk menyetor crypto, membeli dan menjual token, melakukan perdagangan futures, berpartisipasi dalam misi airdrop, dan banyak lagi!

Notes: Kalian juga bisa mendapatkan biaya futures flat 1 BPS dengan melakukan deposit dari Binance, Bybit, Bitget, atau CEX lainnya.

![Image 2](https://pbs.twimg.com/media/Gfe9EU4asAA-xlC.jpg)

---
---

👀 Written by [Yulyul](https://x.com/yulsrich)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1871171171598926197)
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
