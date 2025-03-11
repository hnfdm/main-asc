import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
KGeN 101: Airdrop Confirm [Potensial] 

✅Funding/Valuation: [$37M]/[$150M]

✅Backer: Aptos, Polygon Ventures & Animoca Brands
 
Step ngerjain airdropnya 👇

![Image 0](https://pbs.twimg.com/media/GjIQBV8bIAEDKO9.jpg)

---

1/ Apa itu KGeN dan bagaimana cara kerjanya?

KGeN, atau Kratos Gaming Network adalah platform yang dirancang untuk memberdayakan gamer dengan memberikan mereka kepemilikan atas data mereka sendiri. Secara keseluruhan, KGen berkomitmen untuk menciptakan masa depan gaming yang lebih adil dan terdesentralisasi.

2/ Key Feature:

➖Jaringan Gamer: KGen membangun komunitas gamer yang terlibat, memungkinkan mereka untuk saling terhubung dan berbagi pengalaman.

➖PoG Engine: Menggunakan Proof of Gamer Engine (PoG Engine) untuk menciptakan ekosistem yang mendukung berbagai layanan, termasuk e-commerce, pengujian game, dan esports.

➖Kepemilikan Data: KGen berfokus pada memberikan kontrol kepada gamer atas data mereka, berbeda dari model tradisional yang didominasi oleh perusahaan besar.

➖Inovasi di Industri Game: KGen bertujuan untuk mengatasi tantangan dalam industri game, seperti rasio LTV/CAC, dengan solusi yang inovatif.

➖Token Utilitas: KGen memiliki token yang digunakan untuk berbagai transaksi dalam ekosistem, seperti pembayaran untuk layanan, partisipasi dalam acara, dan insentif bagi pengguna.

3/ Funding:

KGeN telah berhasil mengumpulkan total dana sebesar $37 juta melalui tiga putaran pendanaan. Di antara para investor yang berpartisipasi, Aptos Game 7 DAO dan P2 Ventures ikut serta dalam putaran pendanaan terakhir. Pendanaan ini akan mendukung pengembangan ekosistem KGeN, yang bertujuan untuk memberikan gamer kesempatan untuk membangun, memiliki, dan memonetisasi reputasi mereka melalui mekanisme Proof of Gamer (PoG).

![Image 1](https://pbs.twimg.com/media/GjIRTHvbIAIaie6.jpg)

4/ Airdrop: Mint Avatar 

➖ Pergi ke [Play KGeN](https://play.kgn.live/pog)

➖ Tonton video sampai habis, kemudian klik "start minting"

➖ Connect X atau Gmail

➖ Create avatar profile

➖ Isi data kalian di [Dyno Form](https://dyno.gg/form/18e041e1)

![Image 2](https://pbs.twimg.com/media/GjISIzSbIAA0j3g.jpg)

5/ K-Quest

➖ Pergi ke [Quest](https://play.kgn.live/k-quest)

➖ Selesaikan beberapa quest dari game

➖ Done

![Image 2](https://pbs.twimg.com/media/GjITT-hboAAQDIb.jpg)

6/ K-Drop

➖ Pergi ke [Campaign](https://play.kgen.io/k-drop/campaigns/23db0031-b248-42c2-b072-edb28b30b9d5)

➖ Masuk kan code "CXM3ES" untuk dapatkan poin tambahan sebesar 50 KGeN

➖ Kerjakan semua task dan dapat kan poin KGeN

➖ Done

7/ Team and OG you can follow 

➖ [KGeN_IO](https://x.com/KGeN_IO)
 
➖ [RishAhuja](https://x.com/RishAhuja)
 
➖ [Shasshhyy](https://x.com/Shasshhyy)

8/ [UPDATE] 1

Tekika (END 1 Hari lagi)

- pergi ke https://kgen.page.link/NBwu 

- klik "Get Started"

- masukan code "NBwu" untuk dapatkan 50 poin

- kelaran semua task

Done

Pirate Nations (END 27 hari lagi)

- pergi ke https://kgen.page.link/K18Z

- klik "Get Started"

- masukan code "CXM3ES" untuk dapatkan 50 poin

- kelaran semua task

Done

9/ [Update 2] - Kamping K-drop yang masih live dan bisa kalian kerjakan

1. Feb 25 [Week 3 POG Tasks](https://kgen.page.link/oKpo) (END 7 jam)

2. [Social Check-In](https://kgen.page.link/o91t) February (END 6 hari)

3. [Duper II](https://kgen.page.link/1ZHp) (END 6 hari)

4. [Badmad Robots](https://kgen.page.link/V24h) (END 6 hari)

5. SlingShot DAO - [Social Campaign](https://kgen.page.link/kaNf) (END 18 hari)

6. CASTILE - [Social Campaign](https://kgen.page.link/DFM7) (END 6 hari) 

semua code task "CXM3ES"

---

👀 Written by [Yulyul](https://x.com/yulsrich)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1887590008514834712)
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
