import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
USDT0 101: By Tether

USDT0 adalah project dari tether, saya yakin semua pemain crypto tau lah ya soalnya usdt yang biasa kalian pakai itu dari tether.

Saat ini mereka sedang open bountry program reward nya 6M usdt 

Let's dive deeper ! 👇

![Image 0](https://pbs.twimg.com/media/GjvvQlcaYAAgEl7.jpg)

---
---

1/ Apa itu USDT0?

> 🔹 USDT0 yang dibangun di atas standar Omnichain Fungible Token (OFT) dari LayerZero, adalah solusi Tether untuk transfer stablecoin lintas rantai yang mulus dan juga aman.

> 🔹 USDT0 mengatasi masalah likuiditas terfragmentasi dengan meningkatkan interoperabilitas, membuka likuiditas yang lebih besar, dan meningkatkan aksesibilitas bagi pengguna.

> 🔹 “USDT0 menawarkan solusi penting untuk memungkinkan transfer USDT tanpa adanya hambatan di seluruh ekosistem.
Dengan meningkatkan interoperabilitas dan menghilangkan hambatan, solusi ini selaras dengan visi Tether yang lebih luas sekaligus mengoptimalkan pengalaman pengguna,” kata Paolo Ardoino, CEO Tether.

> 🔹 USDT0 berperan menyederhanakan perluasan aset Tether, memastikan transfer berjalan lancar, mengurangi biaya transaksi, dan meningkatkan efisiensi.

> 🔹 Sebagai solusi untuk ekspansi Tether di berbagai blockchain, USDT0 bertujuan menjadikan Tether sebagai penerbit aset utama di setiap rantai.

> 🔹 USDT0 pertama kali tersedia di solusi Layer 2 Kraken, Ink, dan kini mendukung jaringan seperti Ethereum, Tron, Arbitrum, Ton, serta Bera, meningkatkan aksesibilitas dan integrasi lintas rantai.

2/ Cara kerja USDT0?

> USDT0 beroperasi dengan mekanisme lock and mint, dan didukung oleh standar omnichain.
Sistem ini memastikan transfer lintas rantai yang aman dan efisien sambil mempertahankan dukungan penuh untuk asetnya.
Berikut adalah gambaran tentang cara kerja USDT0:

> 1️⃣ USDT ERC20 🔒

>> USDT dikunci di dalam smart contract di Ethereum Mainnet.

> 2️⃣ USDT0 di mint

>> Token USDT0 yang setara dicetak di rantai tujuan, mencerminkan aset yang terkunci di Ethereum. Proses ini memastikan underlying asset tetap 1:1 untuk transparansi dan kepercayaan penuh.

> 3️⃣ Seamless Cross-Chain Transfers

>> USDT0 menggunakan lapisan pesan canggih untuk memungkinkan transfer cepat dan efisien antar rantai yang didukung. Tanpa ketergantungan pada kumpulan likuiditas terfragmentasi dan platform lain, pengguna menikmati transaksi yang cepat dan andal.

> 4️⃣ Redemption 🔓

>> Token USDT0 dapat ditebus dengan membuka USDT yang sesuai di Ethereum, menjaga hubungan yang konsisten dan aman antara aset yang terkunci dan dicetak.

> “No liquidity pools. No custom bridges. Just effortless transfers.” Sesederhana itu, kecuali Fee Ethereum Mainnet hehe

![Image 1](https://pbs.twimg.com/media/GjvwzbtaoAASqv_.jpg)

3/ Kenapa USDT0 penting?

> ☑️ Likuiditas yang menyeluruh di seluruh rantai

>> USDT0 mengonsolidasikan likuiditas, menghilangkan fragmentasi di berbagai blockchain, memungkinkan transfer aset yang mulus antar jaringan.

> ☑️ Transfer lebih cepat dan murah

>> Dengan menggunakan standar Omnichain Fungible Token (OFT) dari LayerZero, USDT0 mengurangi biaya transaksi dan memastikan waktu transfer yang lebih cepat, menjadikan transaksi lintas rantai lebih efisien.

> ☑️ Integrasi yang mudah untuk developer

>> USDT0 dapat dengan mudah diintegrasikan ke dalam jaringan blockchain yang ada, tanpa memerlukan jembatan khusus atau pengelolaan kumpulan likuiditas yang rumit, menyederhanakan proses pengembangan untuk dapp dan exchange.

![Image 2](https://pbs.twimg.com/media/Gjv1w9bacAEhsRE.jpg)

4/ Cara bridge?

> 🔹 Untuk melakukan bridge bisa ke [Transfer](https://usdt0.to/transfer), sebagai contoh jika mentransfer 1000 USDT dari Ethereum ke Arbitrum melalui beberapa protokol lain seperti Synapse, Orbiter dan Accross Protocol. 

> 🔹 Seperti yang bisa dilihat digambar, dengan menggunakan USDT0 yang didukung oleh LayerZero, jumlah yang dikirim dan yang akan diterima utuh 1:1, mengurangi biaya transaksi yang tidak diperlukan secara optimal.

![Image 3](https://pbs.twimg.com/media/Gjv2CJSbYAAuXaA.jpg)
![Image 4](https://pbs.twimg.com/media/Gjv2EVLbwAAGBVn.jpg)
![Image 5](https://pbs.twimg.com/media/Gjv2E_bacAMQcMK.jpg)
![Image 6](https://pbs.twimg.com/media/Gjv2FpwbYAAQnyq.jpg)

5/ Campaign?

> Untuk saat ini tidak ada campaign, namun ada program bug bounty dari [Immune Fi](https://immunefi.com/bug-bounty/usdt0/information/#top),
  dengan hadiah $5k - $6M tergantung pada scopenya, yang melibatkan beberapa kategori seperti:

> 1️⃣ Critical (Pencurian)

>> Jika ada celah yang memungkinkan pencurian dana pengguna, baik dalam keadaan terkunci maupun sedang bergerak, kecuali hasil yield yang belum diklaim.

> 2️⃣ Critical (Insolvensi Protokol)

>> Menunjukkan potensi kebangkrutan atau kerugian protokol yang dapat mempengaruhi stabilitas dan operasional sistem.

> 3️⃣ Critical (Freezing)

>> Pembekuan permanen dana yang terkunci atau disimpan, menghalangi akses pengguna ke aset mereka.

> 4️⃣ Medium (Griefing)

>> Melibatkan serangan yang tidak bertujuan meraih keuntungan langsung, namun menyebabkan kerusakan pada pengguna atau protokol.

![Image 7](https://pbs.twimg.com/media/Gjv2RjzacAEvAta.jpg)

6/ End Thread ~ Kesimpulan 

> 🔹 Disini saya bahas lengkap agar memudahkan informasi bagi para bounty hunter untuk menyelesaikan tasknya, semoga kalian beruntung, selain itu: 

> 🔹 USDT0 merupakan solusi inovatif yang mengatasi masalah biaya tinggi dalam transaksi lintas rantai yang terjadi pada USDT.

> 🔹 Sebagai stablecoin terbesar di dunia, USDT0 mengoptimalkan penggunaan USDT dengan memungkinkan transfer mulus antar blockchain tanpa fragmentasi, menjadikannya aset likuid yang dapat dipindahkan dengan mudah antar jaringan.

> 🔹 Dengan mengurangi ketergantungan pada jembatan lintas rantai dan memperkenalkan efisiensi modal, USDT0 tidak hanya meningkatkan interoperabilitas USDT, tetapi juga mendorong pertumbuhan dan aksesibilitas ekosistem kripto secara keseluruhan.

> 🔹 USDT0 menetapkan standar baru untuk ekosistem USDT, menjadikannya lebih ramah pengguna dan lebih efisien.

---
---

👀 Written by [Hanip](https://x.com/hnfdmxyz)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1890368337621770608)
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
