import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
Tutorial DePIN 101: Cuan cuman modal hp doang? 

DePIN adalah salah satu narasi yang masuk dalam top 10 kategori CMC dengan total MC $30B.
Airdrop depin walaupun bisa di kerjain di hp doang tapi masuk dalam kategori yang sama seperti testnet/node yang jp nya lumayan gacor,
mungkin sedikit telat tapi gak papa, karena saya expect banyak project kedepannya dengan narasi ini.

Apa itu DePIN ? Apa itu Airdrop DePIN? Kita bakal bahas dan juga spill 20 project DePIN yang saat ini airdropnya yang masih live! 

Let's dive depper 👇

![Image 0](https://pbs.twimg.com/media/GgODRzAboAAZ-bB.jpg)

---

0/ Join dulu bang di [Airdrop ASC](https://t.me/airdropasc)

Sebenernya kita bahas depin di telegram dari cukup early dari Juli 2023. 
Kita lebih intense di telegram , model airdrop yang kita share pun beragam  dari modal email daong sampe node kita garap disana. 
Jadi kalo kamu airdrop hunter dan gak mau ketinggalan info bisa join di telegram ya hihih

![Image 1](https://pbs.twimg.com/media/GgOLVCZbUAA4kRY.jpg)

1/ Apa itu DePIN?

![Image 2](https://pbs.twimg.com/media/GgOMJ7gagAAx-x8.jpg)

2/ Cara Kerja DePIN

Peserta menyediakan sumber daya fisik tergantung dengan kategori dari project tersebut

![Image 3](https://pbs.twimg.com/media/GgOMbohagAMd6Sh.jpg)

3/ Kategori DePIN 

Depin memiliki banyak kategori antara lain: 

➖ Wireless Network: @helium & @XNET_Mobile
 
➖ IOT Network: @helium_mobile, @ChirpDeWi & @NodleNetwork
 
➖ WiFi Network: @wifimapapp, @wicrypt & @Metablock
 
➖ Storage Network: @Filecoin & @ArweaveEco
 
➖ Compute Network: @akashnet_ & @rendernetwork
 
➖ Etc ..

![Image 4](https://pbs.twimg.com/media/GgOMoGwbQAA9s4e.jpg)

4/ Implementasi Jaringan Blokchain di DePIN 

Konsep DePIN sendiri berfokus pada penyediaan sumber daya fisik yang terdesentralisasi, untuk blockchain nya sendiri bisa dioperasikan di dalam jaringan layer 1 / layer 2

Contoh: Helium ada di jaringan solana & Arveawe atau Filecoin membuat jaringannya sendiri 

Jadi jangan heran kalo ada tipe airdrop depin yang running node

![Image 5](https://pbs.twimg.com/media/GgOO2WVbcAAdx9I.jpg)

5/ Airdrop DePIN 

Adalah tipe airdrop yang memerintahkan / meminta user nya untuk menjadi sumber daya dari project tersebut, sumber daya yang diminta tergantung dari tipe projectnya

![Image 6](https://pbs.twimg.com/media/GgOPf7maUAAcBQZ.jpg)

6/ Apa yang Dev dapatkan saat kalian run project depin?

Kebanyakan tipe Airdrop DePIN yang tersebar diluar sana merupakan tipe extension, maka ada beberapa kemungkinan: 

➖ Data pengguna/perilaku 
➖ Komputasi perangkat pengguna (GPU/CPU)
➖ Bandwith internet 
➖ Jaringan penyimpanan yang terdesentralisasi

![Image 7](https://pbs.twimg.com/media/GgOP6o-agAEikuM.jpg)

7/ List garapan DePIN yang saat ini sedang berjalan 

➖ @nodepay_ai (funding $7M) btw ini telat banget sih kalo mau garap, pertama kali kita share dari [Mei 2022](https://t.me/airdropasc/56346)

➖ @pipenetwork (funding $10M) 

➖ @blockmesh_xyz (funding $8M)

➖ @openloop_so (funding $15M)

➖ @Rivalz_AI (funding $27M) ini node

➖ etc 

Tutor lengkap cara running dan link nya ada disini [Airdrop ASC](https://t.me/airdropasc/69387)

![Image 8](https://pbs.twimg.com/media/GgOTDKXawAA3sr3.jpg)

8/ Tips and trick agar hp/pc berumur panjang saat garap depin (BONUS) 

Bisa runing pake [RDP/VPS](https://t.me/airdropasc/69387)

Note: Cara ini tidak 100% aman, dan juga ada beberapa project yang tidak bisa di running, karena ada yang karena security dan ada juga karena bukan sumber daya yang diminta

![Image 9](https://pbs.twimg.com/media/GgOTynwaIAA57eY.jpg)

9/ Tutor Video bisa cek di [YouTube](https://youtube.com/watch?v=7ryPx7KgDKI&t=102s&ab_channel=ZamzaSalim)

Semangat bang, semoga membantu memahami DePIN secara luas 

End Thread

---

👀 Written by [Zamza Salim](https://x.com/zamzasalim)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1874494512451715095)

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
