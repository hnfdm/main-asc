import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
PEXX, cara baru buat withdraw via “Off-ramp” 🧵

Mau withdraw tapi bimbang? P2P rawan? CEX lokal agak ribet? Kebetulan nih kemaren abis nyoba2 cara withdraw baru lewat PEXX dan pas banget ada giveawaynya juga.

Cocok buat kalian yang masih suka bingung harus withdraw lewat apa, karena ada beberapa fitur unik didalemnya. Apa aja fiturnya? 👇

![Image 0](https://pbs.twimg.com/media/GkOtCLFXoAAnoWJ.jpg)

---
---

1/ About PEXX

> Kenalin nih PEXX. 
Alat transfer uang secara global dengan mekanisme off-ramp yang memungkinkan setiap orang tidak hanya mengirimkan USDT & USDC namun juga mata uang fiat ke siapa saja, di mana saja.
Paket lengkap banget kan?

![Image 1](https://pbs.twimg.com/media/GkOtXzpawAA6B02.jpg)

2/ Key Feature

> Pernah denger kan pasti tentang mekanisme on-ramp? Nah kalau PEXX ini bekerja melalui mekanisme off-ramp, jadi singkatnya:

>> 🔹 On-ramp: Proses membeli aset kripto dengan menggunakan mata uang fiat.

>> 🔹 Off-ramp: Proses menjual aset kripto dan mengubahnya kembali menjadi mata uang fiat.

> Tidak hanya itu, ada beberapa fitur unik lainnya seperti:

>> 🔹 Biaya yang kompetitif, ga ribet

>> 🔹 Bisa connect wallet juga

>> 🔹 Konversi langsung ke Fiat

>> 🔹 Bisa withdraw ke rekening orang lain (pernah denger yang kek gini?)

![Image 2](https://pbs.twimg.com/media/GkOtkIeWoAAeUPD.jpg)

3/ First Impression

> Kebetulan banget kemaren pas tau soal ini langsung kita test ombak juga secara langsung,

>> 🔹 Ratenya 11 12 dari P2P di beberapa Top CEX

>> 🔹 Selain withdraw langsung ke rekening kita, ada juga fitur withdraw langsung ke orang lain dan bisa juga kolega. Misalkan ada yang pinjem dulu 100k daripada repot-repot harus withdraw dulu baru transfer, ini bisa langsung dari USDT/USDC kita

>> 🔹 Bisa connect wallet, jadi kita bisa withdraw langsung dari wallet kita sendiri

>> 🔹 Prosesnya lumayan cepet, ga sampe 5 menit kemaren

> Tapi selain beberapa fitur unik diatas, ada juga beberapa kekurangan seperti:

>> 🔹 Untuk saat ini fitur connect wallet masih terbatas pada ETH & TRX

>> 🔹 Pilihan bank juga masih terbatas, sebenernya cukup banyak pilihan namun terbatas pada bank besar dan konvensional, bank digital (Jago/Seabank) belum ada dan juga dompet digital (Dana/Gopay)

> Namun pastinya, tidak menutup kemungkinan juga akan adanya penambahan fitur seperti bank/dompet digital kedepannya.

![Image 3](https://pbs.twimg.com/media/GkOuVYcasAAFVM5.jpg)

4/ Campaign

> Yang mau coba-coba dulu juga bisa, karena buat saat ini ada campaign dari PEXX buat kesempatan dapetin 50 USDT, gimana caranya? 

>> 1️⃣ Daftar dulu ke [PEXX](http://app.pexx.com/referral/AutoSultan)

>> 2️⃣ Deposit USDT/USDC ke PEXX atau Direct via connect wallet

>> 3️⃣ Lakukan 1x transaksi withdraw (mumpung transaksi pertama bebas biaya admin)

>> 4️⃣ Done 

> 🔹 Pemenangnya bakalan diumumin nanti tanggal 2 Maret 2025 di official [X](https://x.com/PEXX_Official) & [Telegram](https://t.me/PEXXOfficial)

> 🔗 [Official Giveaway Post](https://x.com/PEXX_Official/status/1891330384237138004)

---
---

👀 Written by [Hanip](https://x.com/hnfdmxyz)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1892549354424246406)

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
