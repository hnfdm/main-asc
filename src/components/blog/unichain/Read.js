import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
UNICHAIN 101: Potensial Airdrop?

Unichain merupakan layer 2 dari Uniswap yang saat ini masih dalam fase testnet.
Mungkin kebanyakan airdroper saat ini gak tau bahwa, faktanya uniswap adalah salah satu pelopor pertama yang membuat 'retro drop' menjadi hype, 
per wallet yang pernah transaksi di dexnya mendapatkan 400 UNI (+- 30M IDR).

Untuk saat ini Unichain sendiri masih belum mengkonfirmasi akan adanya airdropnya, tapi mending kerjain aja dulu daripada kena garem nanti, iya kan?

So, let's dive deep 👇

![Image 0](https://pbs.twimg.com/media/Gf0LKrgakAATqEh.jpg)

---
---

1/ Unichain by Uniswap

> Secara sederhana Unichain adalah project L2 yang dibuild oleh Uniswap yang mana berfokus pada DeFi, didesain untuk menyediakan transaksi yang lebih cepat dan murah serta menjadi rumah multichain liquidity.

🔹 Key feature :

> 1️⃣ Instant transactions

>> Unichain mendukung transaksi instan dengan waktu blok 1s, up too 250 ms.
Hal ini dapat mengurangi latensi, meningkatkan efisiensi pasar, mempercepat arbitrase, dan meminimalkan kerugian akibat MEV.

> 2️⃣ Reduced cost and further decentralization

>> Unichain memanfaatkan roadmap scaling Ethereum dengan memindahkan eksekusi ke L2, mengurangi biaya transaksi hingga 95% dan lebih banyak lagi ke depannya.
Meskipun menggunakan satu sequencer untuk efisiensi, Unichain meningkatkan desentralisasi dengan memungkinkan full nodes memverifikasi blok.

> 3️⃣ Cross-chain liquidity

>> Unichain mendukung seamless cross chain, memungkinkan akses likuiditas di berbagai chain.
Sebagai bagian dari Superchain, Unichain mendukung interoperabilitas native, dengan Uniswap Labs terus mengembangkan standar untuk koneksi antar-chain.

2/ Tech  Innovation

🔹 Rollup-Boost & Sequencer Builder Separation

> Merupakan sebuah mekanisme untuk membuat sistem blockchain lebih cepat dan terdesentralisasi.

> 1️⃣ Rollup-Boost

>> Ini adalah teknologi yang membantu mempercepat proses pembuatan dan pengelolaan transaksi di rollup, memungkinkan lebih banyak transaksi diproses dengan cepat tanpa mengorbankan keamanan.

> 2️⃣ Sequencer Builder Separation (SBS)

>> Biasanya, satu pihak (sequencer) mengatur urutan transaksi dan membuat blok. Namun, dengan pemisahan ini, ada dua pihak berbeda:Sequencer: Mengatur urutan transaksi.

> 3️⃣ Builder

>> Membuat blok dan mengoptimalkan proses pembuatan blok.

> Pemisahan ini membuat sistem lebih aman, efisien, dan terdesentralisasi karena tidak ada satu pihak yang mengendalikan semuanya.
Ini juga membantu mengelola transaksi dengan lebih baik dan mempercepat penyelesaian transaksi di jaringan.

![Image 1](https://pbs.twimg.com/media/Gf0PAxCaMAA_SPk.jpg)

🔹 Flashblock

> Flashblocks adalah pre-konfirmasi blok yang dibuat oleh TEE Block Builder.
Dengan waktu blok yang lebih pendek, biaya seleksi bagi liquidity provider berkurang, latensi user menurun, dan efisiensi on-chain market meningkat.
Atau penjelasan sederhanany adalah sebuah cara untuk mempercepat konfirmasi transaksi di blockchain.

> Bayangkan seperti memesan makanan secara online: biasanya, pesananmu diproses satu per satu, sehingga butuh waktu lebih lama.
Dengan Flashblocks, pesananmu diproses lebih cepat dalam grup kecil, lalu dikonfirmasi segera, sebelum makanan selesai dimasak.

> Hal ini mengurangi waktu tunggu (latensi) bagi user, membuat transaksi lebih efisien, dan memastikan semua pesanan diprioritaskan secara adil.
Sistem ini juga memungkinkan user memilih transaksi tertentu untuk diproses lebih cepat, seperti membayar biaya tambahan untuk pengiriman ekspres.

![Image 2](https://pbs.twimg.com/media/Gf0PU6yb0AA7DED.jpg)

🔹 Unichain Validation Network

> Unichain mengatasi risiko arsitektur single-sequencer dengan memperkenalkan Unichain Validation Network (UVN), jaringan node terdesentralisasi yang memverifikasi status blockchain.

> Single-sequencer memiliki dua risiko utama yang memperlambat cross-chain settlement:

> 1️⃣ Block Equivocation Risk

>> Sequencer membuat beberapa blok yang bertentangan pada tinggi blok yang sama, menyebabkan ketidakpastian.

> 2️⃣ Invalid Block Risk

>> Sequencer membuat blok tidak valid, memicu pembatalan blok dan memperlambat finalisasi.

> UVN mengatasi ini dengan memverifikasi blok secara independen, memastikan finalitas lebih cepat dan aliran likuiditas lintas-chain yang lebih lancar.

![Image 3](https://pbs.twimg.com/media/Gf0PtWTbsAI9XB3.jpg)

🔹 Superchain Integration

> Unichain dibangun di atas Superchain, jaringan rollup terhubung pada OP Stack yang mendukung pergerakan likuiditas dengan cepat dan murah.
Dengan cross-chain bridge berbasis intents dan finalisasi cepat dari UVN, pengguna rollup mendapatkan akses likuiditas yang luas.

![Image 4](https://pbs.twimg.com/media/Gf0P_cYaAAAlIUX.jpg)

3/ Roadmap 

> ICYMI Unichain mainnet bakalan rilis early 2025, karena tadi kita udah sedikit ngebahas tentang key feature & inovasi teknologinya.
Mumpung masih ada waktu sebelum mainnet coba kita bahas sedikit tentang public testnetnya.

![Image 5](https://pbs.twimg.com/media/Gf0QSsVaAAAo6Lc.jpg)

4/ Public Testnet - Preparation

> 1️⃣ ETH Sepolia

>> Pastikan memiliki saldo ETH di Sepolia Testnet, kalau belum bisa claim faucet dulu ke Google Faucet

> 2️⃣ RPC

>> Unichain Sepolia Testnet - [Chainlist](https://chainlist.org/chain/1301)

> 3️⃣ UDSC SC - 0x31d0220469e10c4E71834a79b1f276d740d3768F

![Image 6](https://pbs.twimg.com/media/Gf0QdshbgAAB_aL.jpg)

5/ Public Tesnet - Bridge 

> 1️⃣ Buka Super Bridge > Connet Wallet > Atur Nominal (Bebas) > Bridge (Tunggu sekitar 3 menit)

> 2️⃣ Switch Chain > Atur Nominal > Bridge > Proof (Verifikasi 1 jam) > Claim (Verifikasi 7 hari)

![Image 7](https://pbs.twimg.com/media/Gf0Qy-BawAAKErX.jpg)

6/ Public Tesnet - Swap 

> 1️⃣ Buka Uniswap > Connect Wallet > Nyalakan Testnet mode > Waktu select token, pastikan switch dulu ke Unichain Sepolia

> 2️⃣ Masukkan SC USDC > Swap > Ulangi proses beberapa kali

![Image 8](https://pbs.twimg.com/media/Gf0RdPUbwAEVCVI.jpg)

7/ Public Tesnet - Deploy (via ThirdWeb) 
 
> 1️⃣ Buka ThirdWeb > Connect Wallet > Registrasi Akun

> 2️⃣ Select Popular Contract (Pilih aja salah dua) > Deploy

![Image 9](https://pbs.twimg.com/media/Gf0RwFYa4AAh-jv.jpg)

8/ Public Tesnet - Mint NFT (Opt)

> 1️⃣ Buka [Morkie Unicorn](https://morkie.xyz/unicorn) > Connect Wallet > Mint NFT

> 2️⃣ Buka [Morkie Europe](https://morkie.xyz/europa) > Connect Wallet > Mint NFT

![Image 10](https://pbs.twimg.com/media/Gf0SM4cbsAIt8K6.jpg)

9/ End Thread 

> Mungkin memang masih sekedar potensi, namun mengingat akan selalu ada native token dari sebuah project apalagi L2.
Belum lagi Unichain sendiri didukung penuh oleh Uniswap tidak menutup kemungkinan bahwa UNI yang akan menjadi native tokennya, yang mana hal itu juga membawa usecase & utility baru pada token UNI.

![Image 11](https://pbs.twimg.com/media/Gf0SwKoaMAAwlxj.jpg)

---
---

👀 Written by [Hanip](https://x.com/hnfdmxyz)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1872667907773345939)
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
