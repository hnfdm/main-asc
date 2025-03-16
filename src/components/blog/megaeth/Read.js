import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
Mega ETH 101: The Next OP/ARB bagi Airdrop Hunter - Funding $30M

> Mega ETH adalah layer 2 ethereum yang dapat melakukan pemrosesan transaksi hingga 100k/tps

> Backer: Vitalik Buterin & Dragon Fly
 
> Apa itu Mega ETH? Bagaimana cara mengerjakan airdropnya? Let's dive deeper 👇

![Image 0](https://pbs.twimg.com/media/Gg14tmqaMAMcipu.jpg)

---
---

1/ Apa itu Mega ETH? 

> MegaETH dirancang untuk menjadi blockchain real-time pertama di dunia, yang mampu memproses transaksi secara instan dan pubishing update secara real-time yang menargetkan throughput transaksi melebihi 100.000 transaksi per detik

🔹 Mengapa ini penting dan dibutuhkan?

> Karena saat ini ada sekitar 50 L1/L2 yang ada dalam jaringan blokchain dianggap masih tidak mampu ngatasi permasalahan seperti Biaya gas yang tinggi, waktu transaksi yang lambat, dan kapasitas komputasi yang terbatas menghambat adopsi dan fungsionalitas aplikasi on-chain

🔹 Key feature MegaETH 

> 1️⃣ Performa Real-Time

>> Blockchain ini dirancang untuk menangani transaksi saat transaksi tersebut masuk dan memperbarui status secara real-time, sehingga memberikan waktu respons dalam hitungan milidetik

> 2️⃣ EVM Compatibility

>> MegaETH sepenuhnya kompatibel dengan Ethereum, yang berarti ia bisa bekerja dengan aplikasi dan kontrak pintar yang sudah ada di Ethereum.

> 3️⃣ Security and Data Availability

>> MegaETH meupakan layer 2 ETH artinya data penting dan verifikasi tetap melibatkan etherium, pendekatan ini memastikan bahwa Mega ETH tetap aman sekaligus berfokus pada pengoptimalan eksekusi dan kinerja transaksi.

![Image 1](https://pbs.twimg.com/media/Gg17JYcaMAMoUs3.jpg)

2/ Cara Kerja Mega ETH

> Berbeda dengan banyak blokchain konvesional lainnya, dimana semua perangkat node berpusat untuk mengerjakan task yang sama, disini Mega ETH memecah menjadi beberapa untuk mengerjakan nya seseuai dengan rolenya agar jaringan beroperasi dengan efisien tanpa mengalami kemacetan atau penurunan kinerja dari node yang lebih lambat, ini disebut sebagai "Spesialis Node"

> 1️⃣ Node Sequencer

>> Bertanggung jawab untuk mengeksekusi transaksi dan memperbarui status blockchain.
Mereka melakukan pekerjaan berat dalam memproses transaksi secara real-time. (ini perlu high-end computing)

> 2️⃣ Node Prover

>> Node prover bertugas untuk memastikan integritas jaringan.
Mereka memverifikasi blok yang dihasilkan oleh node sequencer secara kriptografis, menjaga keamanan blockchain.

> 3️⃣ Full Node

>> Memelihara salinan lengkap dari buku besar blockchain dan memvalidasi blok berdasarkan bukti yang disediakan oleh node prover.
Mereka sangat penting untuk menjaga desentralisasi jaringan dengan menyimpan seluruh data blockchain.

![Image 2](https://pbs.twimg.com/media/Gg17QpFbYAApXzn.jpg)

3/ Ecosystem Mega ETH

> Saat ada banyak project yang sudah building di Mega ETH baik yang terafiliasi langsung oleh Mega ETH (Mega Mafia) ataupun yang di luar  

🔹 What is Mega Mafia? Mega Mafia is Mega ETH Builders Program

> 1️⃣ Mega Mafia Project: 

> ➖ GTE

>> Platfrom trading DEX yang akan launch di jaringan Mega ETH dan memiliki banyak fitur di dalamnya "all in one trading venue"

> ➖ Valhalla Perp

>> Valahala adalah DEX dan DeFi yang akan launch di jaringan Mega ETH dan sudah mendapatkan funding di pree-seed sebanyak $1.5M

> ➖ Noise

>> Sebuah platform yang mengubah tren menjadi aset yang dapat diperdagangkan, memungkinkan pasar di mana nilainya ditentukan oleh perhatian kolektif dan pengaruh pemikiran

> ➖ Cap Labs

>> Platfom DeFi yang menghasilkan stablecoin USD, BTC, dan ETH. Dengan tujuan untuk mendemokratisasi strategi hasil yang canggih melalui arbitrase, MEV, dan RWA.

> ➖ Biomes AW

>> Dunia otonom pertama yang sepenuhnya berbasis blockchain. Membangun PDB berbasis blockchain terbesar. Minecraft berbasis blockchain

> ➖ Teko Finance

>> Pasar uang real-time dengan strategi leverage dan perdagangan margin, menggabungkan fitur terbaik dari Morpho dan GearBox dengan likuidasi mikro.

> ➖ Hop Network

>> Membangun VPN yang paling terdesentralisasi, anonim, aman, dan cepat untuk menembus hambatan penyensoran internet.

> ➖ Etc. 

> 2️⃣ Diluar Mega Mafia:

> ➖ Mega Rabbit NFT

>> Koleksi NFT PFP Pertma di jaringan mega mafia yang menampilkan kelinci futuristik, memadukan alam dan teknologi saat mereka menjelajah ke alam semesta digital

> ➖ Rain Makr

>> Platform peluncuran serba ada dengan hasil nyata yang dirancang untuk agen AI, memecoin, dan proyek-proyek unggulan.

> ➖ Mega DEX Labs

>> Sebuah AMM (Automated Market Maker) dengan likuiditas terkonsentrasi V3.

> ➖ Meka ETH

>> Sebuah koleksi NFT berbasis AI eksperimental, yang mendefinisikan ulang kemungkinan NFT dengan fitur dan pendekatan inovatif yang belum pernah dilihat sebelumnya untuk membawa kegembiraan baru ke dunia NFT.

> ➖ Stake Stone

>> Sebuah protokol aset likuiditas omnichain yang membangun jaringan staking adaptif untuk ETH / BTC cair.

> ➖ Yield Fun

>> Sebuah agregator hasil yang menyelenggarakan kompetisi brankas komunitas, memungkinkan pengguna untuk bertani di berbagai chain.
Agen AI membuat strategi multichain untuk mengoptimalkan hasil, memberikan peluang bagi pengguna degen untuk memaksimalkan keuntungan.

> ➖ Etc.

![Image 3](https://pbs.twimg.com/media/Gg17a5ObcAAcyEu.jpg)

4/ Airdrop? Testnet? Dan Potensial Reward? 

> Untuk saat ini Mega ETH di rencanakan untuk open testnet pada Q1 2025 (artinya sebentar lagi) tapi beberapa project sudah open waitlist dan ada beberapa role yang bisa kamu ambil atau usahakan dari sekarngg baik dari Mega ETH atau dari project-project nya (early)

5/ GTE - Funding $7M

> GTE sendiri adalah platfrom trading DEX yang akan launch di jaringan Mega ETH dan memiliki banyak fitur di dalam nya  "all in one trading venue" 

> 🔹 Key Feature:

>> ➖ Decentralize Exchange

>> ➖ Perpetual DEX 

>> ➖ Launchpad

>> ✅ CEX level perfomance with 1ms block times & 100s tps

> Project ini sedang tahap waitlist dan akan launch testnet di Q1 2025 

> 🔹 Tutorial join whitelist GTE:

>> ➖ Klik - [GTE Platrorm](https://app.gte.xyz)

>> ➖ Connect Wallet 

>> ➖ Done

![Image 4](https://pbs.twimg.com/media/Gg2BpMEaAAAJAVc.jpg)

6/ Valhalla Perp (Open WL) - Funding $1.5M 

> Valahala adalah decentralice exchange dan defi yang akan launch di jaringan Mega ETH dan sudah mendapatkan funding di pre-seed sebanyak $1.5M. 
Valhalla sendiri akan launch testnet di Q1 2025, saat ini masih dalam tahap waitlist

> 🔹 Tutorial join WL:

>> ➖ Klik - [Valhalle Exchange](https://valhalla.exchange)

>> ➖ Connect Wallet

>> ➖ Join Komunitas

>> ➖ Share on X  

> 🔹 Official Social Media

>> ➖ [Website](https://valhalla.exchange)

>> ➖ [Discord](https://discord.gg/valhallaperps)

>> ➖ [X](https://x.com/intent/follow?screen_name=valhallaperps)

>> ➖ Kontak Team - [Telegram](https://t.me/valhallatiago)

![Image 5](https://pbs.twimg.com/media/Gg2CZt3aMAE2IfC.jpg)

7/ Noise

> Noise adalah sebuah platform yang mengubah tren menjadi aset yang dapat diperdagangkan, memungkinkan pasar di mana nilainya ditentukan oleh perhatian kolektif dan pengaruh pemikiran.

> Saat ini noise dalam tahap WL 

> 🔹 Tutor join:

>> ➖ Klik [Noise Website](https://noise.xyz)

>> ➖ Connect Wallet 

>> ➖ Done

![Image 6](https://pbs.twimg.com/media/Gg2DDY0aMAEmXJj.jpg)

8/ Mega Rabbit 

> Mega Rabbit NFT adalah first PFP launching on Mega ETH. 
Ini merupakan salah satu project yang paling hype di ecosystem Mega ETH, disini Mega Rabbit juga sudah partnership dengan Vana
 
> Untuk saat ini Mega Rabbit masih dalam tahap whitelist 

> 🔹 Bagaimana cara mendapatkan WL? 

>> ➖ Create killer content (art, memes, anything epic)

>> ➖ Note: Kalau kontenmu dianggap bagus, kamu akan dapet DM dari Mega Rabbit

![Image 7](https://pbs.twimg.com/media/Gg2DnT3aMAEYb7H.jpg)

9/ End Thread

---
---

👀 Written by [Zamza Salim](https://x.com/zamzasalim)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1877291659488276898)
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
