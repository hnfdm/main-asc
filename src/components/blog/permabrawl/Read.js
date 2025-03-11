import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
Perma-Brawl 101: Official Campaign by AO
  
 
- Reward confirmed? Reward pool 3412 AO ($96k) 
- Campaign ini bekerjasama dengan beberapa project seperti ARIO Network, Basejump, Apus Network & BazAR

Personally aku juga join campaignnya, Gimana cara untuk ikut berpatisipasi? Let's dive depper 👇

![Image 0](https://pbs.twimg.com/media/Gj2k3WtbEAAmWoD.jpg)

---

1/ Tentang AO?

Secara sederhana, AO The Computer bisa dipahami sebagai suatu sistem yang memperluas fungsionalitas Arweave untuk tidak hanya menyimpan data secara permanen, tetapi juga memungkinkan pemrosesan data (komputasi) dilakukan di luar jaringan utama, sehingga memberikan lebih banyak efisiensi dan skalabilitas.

Penjelasan lengkap tentang AO bisa cek di [Thread Airdrop ASC](https://x.com/Autosultan_team/status/1867232424243220859)

![Image 1](https://pbs.twimg.com/media/Gj2lVzba4AAOfuD.jpg)

2/ Get started

➖ Download Wander (sebelumnya ArConnect)

➖ Install via [Chrome Web Store](https://chromewebstore.google.com/detail/wander/einnioafmpimabjcddiinlhmijaionap)

➖ Create/Import Wallet & Backup

➖ Done

![Image 2](https://pbs.twimg.com/media/Gj2lbUwaEAAlhDg.jpg)

3/ Task #1 by ARIO & Metalinks (Week 1)

➖ OKR: Buat handle via metalink (mirip linktree)

➖ Buka [DApp](https://metalinks.ar.io)

➖ Pilih username > 'Claim' > 'Claim Now'

➖ Pilih template > Atur2 aja > 'Upload'

➖ [Example Result](https://ascairdropasc_metalinks.ar.io)

➖ Klik 'Share Profile' ke X

➖ Done

![Image 3](https://pbs.twimg.com/media/Gj2lpWMa4AA5zQ-.jpg)

4/ Task #2 by Basejump

➖ OKR: Buat meme dengan material Basejump Avatar

➖ Biar elig jangan lupa gabung dulu ke [Discord](https://mee6.xyz/i/uZhgFB8CWg)

➖ Buat avatar dulu di [Basejump](https://basejump.xyz/app) (gaharus sampe kelar)

➖ Buat meme sekreatif mungkin

➖ Post ke X pake #permabrawl dan tag @basejumpxyz

➖ Done

![Image 4](https://pbs.twimg.com/media/Gj2l0kIacAAw1iZ.jpg)

5/ Task #3 by Apus Network

➖ OKR: Interaksi AI (Bisa daily)

➖ Buka [DApp](https://apus.ar.io/#/console/perma-brawl)

➖ Interaksi dengan AI & Screenshot

➖ Post ke X dan tag @apus_network & @aoTheComputer

➖ Done

![Image 5](https://pbs.twimg.com/media/Gj2mGKNbQAAkO1l.jpg)

6/ Task #4 by Bazar NFT

➖ OKR: Buat Art & Upload sebagai NFT

➖ Buat art sekreatif mungkin (Week 1 Temanya - AO Lore)

➖ Upload ke [Bazar Studio](https://studio_bazar.arweave.net/#/upload)

➖ Contoh [Result](https://bazar.arweave.net/#/collection/LbNMktc6ryKZJuoPRANB-Be6Ax4D68cuyEFnjn_EPc4/assets/) (Jangan lupa stamp nya ketua)

➖ Screenshot & Post ke X

➖ Jangan lupa hastag #permabattle dan tag @OurBazAR & @aoTheComputer

➖ Done

![Image 6](https://pbs.twimg.com/media/Gj2mKaYboAAKQa_.jpg)

7/ End Thread

Campaign berlangsung selama 3 minggu (13/2 - 6/3). Untuk informasi lebih rinci bisa cek di [Perma-Brawl](https://permabrawl.arweave.net) atau [AO](https://x.com/aoTheComputer).

Sekedar tips aja ketua, ga terlalu penting project mana yang bakal juara, poin utamanya adalah partisipasi kita.

![Image 7](https://pbs.twimg.com/media/Gj2mehYaEAAA35H.jpg)

8/ Task #4 by Bazar NFT Week 2

🔹 Temanya ganti jadi “Data Art” 

🔹 Contoh [Asset](https://bazar.arweave.net/#/collection/IS16Cr97H6me_cTLEBNDc2gIHCHFM7xKXAFjOHVAlBU/assets/)

![Image 8](https://pbs.twimg.com/media/GkZTRXGaoAQP0wF.jpg)

9/ Task #1 by ARIO & ARlink Labs (Week 2)

🔹 Buka [Arlink](https://arlink.arweave.net/templates)

🔹 Pilih Template > Klik 'Deploy' > Masukkan nama repo

🔹 Klik 'Create' > Wait '5-10s' > Klik 'Deploy Now'

🔹 Wait '5-10s' > Approve & Sign > Done > Klik 'Share on X'

🔹 Atau bisa bawa repo kalian sendiri

![Image 9](https://pbs.twimg.com/media/GkZThr8aMAAWuek.jpg)

10/ Task #4 by Bazar NFT Week 3

🔹 Temanya ganti jadi “Perma Originals” 

🔹 Contoh [Asset](https://bazar.arweave.net/#/collection/LFFmrESjSxZIrTzxykZP6cW74uPVVH7k5KtSKWfgQbc/assets/)

![Image 10](https://pbs.twimg.com/media/Gk0sYYDWcAAN1JQ.jpg)

11/ Task #1 by ARIO & ARdriveapp (Week 3)

🔹 Buka [ArDrive](https://app.ardrive.io)

🔹 Login/Create Account jika belum ada

🔹 Upload di Public Drive > Klik 'New' & 'Upload File'

🔹 Pilih File > Checklist Assign ArNS (kalau ada)

🔹 Upload > Sign & Approve Tx > Done

🔹 Screenshot & Post di X dengan tag @ardriveapp
 
🔹 Contoh [Regular](https://o7pyxo2ut5eu4276jp6ff6nzyyo3vv5ri676sbxtfb2j57m7feza.arweave.net/d9-Lu1SfSU5r_kv8Uvm5xh2617FHv-kG8yh0nv2fKTI) & [ArNS](https://heihei_ascairdropasc.ar.io)

![Image 10](https://pbs.twimg.com/media/Gk0tEVZWMAIqg_e.jpg)

---

👀 Written by [Hanip](https://x.com/hnfdmxyz)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1890848947377442933)

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
