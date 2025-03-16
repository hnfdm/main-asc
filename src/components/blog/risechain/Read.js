import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
RISE Chain 101: First Gigagas Era

> Rise Chain adalah project layer 2 yang membawa "Era Gigagas" di blockchain.  

> Project ini mendapatkan funding $3.2M Dengan backer seperti MH Ventures, Polygon Venture serta VitalikButerin
 
> Apa itu Rise? cara dapat airdropnya? Let's dive depper 👇

![Image 0](https://pbs.twimg.com/media/Gf_afDwboAAa05d.jpg)

---
---

1/ Apa itu Rise Chain? 

> RISE (Revolutionizing Ethereum) adalah platform blockchain layer 2 generasi berikutnya yang ditujukan untuk mencapai kecepatan transaksi hingga 100.000 transaksi per detik, yang membawa "Era Gigagas" di blockchain.
RISE adalah solusi Layer 2 yang dapat memiliki kemampuan transaksi mencapai 1 Gigagas/detik.

🔹 Apa itu Gigagas?

> Gigas Era mencakup pengembangan teknologi baru yang meningkatkan kecepatan dan kapasitas transaksi dalam jaringan blockchain.
Berfokus pada desentralisasi yang lebih besar, memungkinkan pengguna untuk memiliki kontrol lebih atas data dan aset mereka.
Yang Mengimplementasikan protokol keamanan yang lebih kuat untuk melindungi data dan transaksi.
Memiliki Kemampuan untuk berinteraksi dengan berbagai blockchain lain, memungkinkan pertukaran data dan aset yang lebih mudah.

![Image 1](https://pbs.twimg.com/media/Gf_a_0zaEAAR75J.jpg)

2/ RISE & Parallel EVM

🔹 RISE Chain Memperkenalkan PEVM (Parallel Ethereum Virtual Machine)

> PEVM adalah implementasi baru dari Ethereum Virtual Machine (EVM) yang dirancang untuk menjalankan transaksi secara paralel, memungkinkan eksekusi transaksi di banyak inti CPU secara bersamaan.
Berbeda dengan EVM tradisional yang bersifat sekuensial, PEVM meningkatkan performa dan efisiensi transaksi di jaringan Ethereum.
Ini memungkinkan jaringan untuk menangani permintaan yang semakin tinggi, menjadikannya lebih scalable dan siap untuk masa depan ekosistem blockchain.

> Lebih detailnya? Coba kita bandingkan beberapa aspek dengan cara kerja blockchain konvensional (gambar2)

🔹 Kesimpulan

> Jadi yang di tawarkan oleh teknologi Parallel EVM (pEVM) ini adalah implementasi untuk skala yang lebih besar dan efisiensi yang lebih tinggi, ideal untuk aplikasi yang membutuhkan throughput tinggi dibarengi dengan fee transaksi yang rendah, tetapi membutuhkan teknologi yang lebih maju untuk menjaga keamanan dan integritasnya.

![Image 2](https://pbs.twimg.com/media/Gf_ba8UbsAA4Vqj.jpg)
![Image 3](https://pbs.twimg.com/media/Gf_bfCabsAAKZvh.jpg)

3/ Key Feature 

🔹 Kinerja Tinggi

> Menargetkan lebih dari 100.000 transaksi per detik.

🔹 Aksesibilitas

> Memungkinkan semua orang, dari pengembang hingga pengguna akhir, untuk memanfaatkan teknologi blockchain.

🔹 Skalabilitas

> Menghancurkan batasan skalabilitas dengan tetap menjaga keamanan dan desentralisasi.

🔹 Transaksi Cepat dan Murah

> Menyediakan transaksi hampir instan dengan biaya rendah.

🔹 Inovasi

> Membuka peluang untuk generasi baru aplikasi kripto.

![Image 4](https://pbs.twimg.com/media/Gf_b-JraQAAaDrX.jpg)

4/ Airdrop 

> Saat ini kalian bisa mengumpulkan beberapa role di [Discord](https://discord.gg/FgdGGBTy) RISE chain.
Project ini masih tergolong sangat early dan berpotensial kedepannya.
Kemungkinana akan ada retro, mainnet rice chain sendiri di perkirakan akan ada di q1 2025.

>> 🔹 Join [Guild](https://guild.xyz/rise-chain) kerjain task untuk ambil role "x-Rizz"

>> 🔹 Jika kalian punya RiseNFT NFT kalian bisa mengambil role "Initiate"

> Di Discordnya sendiri kalian bisa kumpulkan poin rice, nah poin rice ini buat apa poin ini nanti bisa kamu tukarkan ke role.
Role Risu butuh sekitar 500 poin rice dan Role San butuh sekitar 2500, total sekitar 3000 poin rice yang harus kalian kumpulkan untuk buka semua role tersebut, benefit role tersebut kalian bisa dapat VIP akses dimana kalian bisa menjadi penguji beta testing, nyoba fitur baru, event, lebih dulu mengetahu informasi early dari yang lain dan mungkin aja akan ada reward kedepanya.

> Untuk dapatin poin rice kalian harus bikin konten atau meme, terlibat di komunitas dan aktif serta ikut event-event yang akan di adakan oleh team rice chain.

> Note: Poin biasanya akan di convert menjadi token saat TGE

![Image 5](https://pbs.twimg.com/media/Gf_csqMawAELWfx.jpg)

---
---

👀 Written by [Yulyul](https://x.com/yulsrich)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1873456488674730232)
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
