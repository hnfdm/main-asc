import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
Analog 101: Menuju TGE 

One Analog adalah sebuah project Layer 0 yang menggunakan teknologi Substrate SDK & konsensus PoT

Funding $21M & Backer: Binance & NEAR Protocol
 
Claim airdropnya di [Official Website](https://airdrop.analog.one)

Apa itu analog? Kapan listing dan prediksi harga nya? 👇

![Image 0](https://pbs.twimg.com/media/GjDvQDAa8AA2mEu.jpg)

---

1/ Airdrop Analog 

Airdrop analog sendiri udah ketua share dari early dan sering di reminderin di channel telegram, jadi bagi kalian yang mau garap airdrop lebih intense silahkan join [Airdrop ASC](https://t.me/airdropasc)

Note: Airdrop nya sendiri sudah snapshoot dan sudah bisa di claim silahkan bagi kalian yang dlu ikutan buat jangan lupa [Claim](https://airdrop.analog.one)

![Image 1](https://pbs.twimg.com/media/GjDvwnsaMAAhWAu.jpg)
![Image 2](https://pbs.twimg.com/media/GjDvwnrbIAg3lBt.jpg)
![Image 3](https://pbs.twimg.com/media/GjDvwn0bIAAJSK9.jpg)

2/ Apa itu Analog dan bagaimana cara kerjanya?

Analog adalah protokol interoperabilitas Layer 0 yang bertujuan menghubungkan berbagai blockchain menjadi satu ekosistem terpadu.
Dibangun di atas Substrate SDK (framework modular dari Polkadot),  dan didukung oleh Proof-of-Time (PoT) consensus algorithm.
Analog menyediakan infrastruktur untuk memfasilitasi interaksi lintas rantai (cross-chain) yang aman, terdesentralisasi, dan tanpa kepercayaan pihak ketiga (trustless).

Key Feature: 

➖ Timechain: 

Protokol Inti Analog adalah infrastructure layer yang independen tyang  berfungsi sebagai buku besar inti (core ledger) untuk semua aktivitas di ekosistem Analog.
Tujuannya adalah memungkinkan komunikasi lintas blockchain (cross-chain) yang aman, langsung, dan tanpa perantara terpusat (trustless).
Dengan Timechain, blockchain yang berbeda (seperti Ethereum, Solana, atau Cosmos) dapat "berinteraksi" satu sama lain tanpa bergantung pada jembatan (bridges) terpusat yang rentan diretas.

➖ Analog GMP:

Analog GMP adalah protokol pengiriman pesan lintas blockchain yang memungkinkan aplikasi terdesentralisasi (dApps) untuk:

- Mengirim data (contoh: informasi harga, status kontrak).

- Mentransfer aset (token, NFT) antar-blockchain.

- Mengeksekusi aksi (seperti memicu kontrak pintar di blockchain lain).

➖ Analog Watch 

Node SDK untuk membangun aplikasi yang mengambil data on-chain dari blockchain lain. 
Proses ini disederhanakan dengan sedikit mungkin kode, menjadikannya ideal bagi developer yang ingin membuat purwarupa (proof of concept) atau produk dengan cepat

2/ Tokenomics Analog 

- Total Supply Analog: 9.057.971.000

- Circulating Supply at TGE beetween (15-16%) = 1.358.695.650

- Detail [Tokenomics](https://docs.analog.one/documentation/resources/tokenomics)

![Image 4](https://pbs.twimg.com/media/GjDxOMqbcAAPBUM.jpg)

3/ Airdrop Result: 

➖ Testnet Highlight: 

- 12.4m visit website

- 172k account created 

![Image 5](https://pbs.twimg.com/media/GjDxrHUbIAALe3O.jpg)

➖ Airdrop metrics : 

- 380k + participant 

- 180k+ eligble

![Image 6](https://pbs.twimg.com/media/GjDxpV8bsAA8Cme.jpg)

4/ Prediksi Harga 

Analog sendiri dipastikan akan listing tanggal 10 Febuari, setidak ada 3 market yang confirm saat ini yaitu: 

- Bitget

- Kucoin

- Gate io
  
Bitget sendiri memprediksi harga Analog akan berada di sekitaran 0.1-0.3 pada saat perilisan 

- MC = supply beredar x harga

- Maka MC = 1.358.695.650 x 0.1

- Maka Market Cap yang diprediksi Bitget berada dikasaran $135M

![Image 7](https://pbs.twimg.com/media/GjDyUlYbYAANIQ-.jpg)

---

👀 Written by [Zamza Salim](https://x.com/zamzasalim)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1887271597977051242)

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
