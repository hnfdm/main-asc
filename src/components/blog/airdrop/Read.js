import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
BELAJAR AIRDROP 101: HOW TO BE KING OF AIRDROPER

Sorry agak lama bikin nya, dan ini saya share berdasarkan experience pribadi. Semoga membantu buat kalian yang tertarik untuk mempelajari airdrop dengan lebih dalam. Lengkap nya ada 64 halaman, disini saya bahas pointnya saja, kalau mau versi fullnya silahkan download filenya.

A Thread🧵

![Image 0](https://pbs.twimg.com/media/GaAc_XEbEAAyGfI.jpg)

1/ Apa itu Airdrop? Airdrop adalah distribusi token atau reward kepada user yang menyelesaikan task dari developer

![Image 1](https://pbs.twimg.com/media/GaAdm87acAA_Zha.jpg)

2/ Skema Airdrop

![Image 2](https://pbs.twimg.com/media/GaAfE_JbYAAomDq.jpg)

3/ Tipe-tipe Airdrop 

Ada banyak tipe airdrop, tapi biar lebih mudah dipahami saya akan kategorikan tipe-tipe airdrop ke dalam beberapa kategori, jadi ada 4 tipe : 

1️⃣ Daily

2️⃣ Testnet

3️⃣ Node

4️⃣ Retro

![Image 3](https://pbs.twimg.com/media/GaAfN-UaAAAES5A.jpg)

4/ Tools Airdrop 

Ada banyak tools yang akan kalian butuhkan untuk membantu dalam mengerjakan airdrop seperti wallet, social media, ekstensi dll, dan yang paling terpenting adalah bergabung dengan komunitas? kenapa? karena bisa membantu memberikan informasi baik tools news atau cara mengerjakan nya

![Image 4](https://pbs.twimg.com/media/GaAfr8dbIAA4cAI.jpg)

5/ Daily Airdrop (easy task > shorterm > lower expectacion)

Ada banyak tipe model airdorp seperti ini jadi saya masukan dalam 1 kategori

![Image 5](https://pbs.twimg.com/media/GaAgg6bakAARrA8.jpg)

6/ Macam-macam Airdrop daily: 

1️⃣ FCFS: Airdrop yang terbatas dan berlangsung cepat 

2️⃣ Mini App: Airdrop yang menggunakan aplikasi mini app di Telegram, dimana peserta menyelesaikan tugas-tugas tertentu melalui bot atau aplikasi Telegram untuk mendapatkan token. Contohnya Notcoin, DOGS, Hamster Kombat

3️⃣ Hold: Airdrop dimana peserta harus memegang (hold) sejumlah token tertentu di wallet selama periode yang ditentukan untuk memenuhi syarat menerima token atau reward.

Untuk lebih lengkapnya silahkan download di pdf

![Image 6](https://pbs.twimg.com/media/GaAhJ7iawAAgIo7.jpg)

7/ Jangan meremehkan airdrop daily, berikut adalah contoh jp dari airdrop daily

![Image 7](https://pbs.twimg.com/media/GaAiuSWb0AARqbG.jpg)

8/ Airdrop Testnet 

Airdrop testnet adalah airdrop yang bertujuan untuk membuat user munguji fungsional sebuah platform sebelum peluncuran resmi

![Image 8](https://pbs.twimg.com/media/GaAjITcbIAAccx9.jpg)

9/ Skema mengerjakan airdrop testnet (bisa di kerjakan disemua project) 

Penjelasan detailnya ada di pdf

![Image 9](https://pbs.twimg.com/media/GaAjeAYaYAAuKHU.jpg)

10/ Airdrop Node

![Image 10](https://pbs.twimg.com/media/GaAkFvIaQAA9-AD.jpg)

11/ Skema menjalankan node

![Image 11](https://pbs.twimg.com/media/GaAkaPdaAAAdIt7.jpg)

12/ Praktek menjalankan node

![Image 12](https://pbs.twimg.com/media/GaAkg36bgAAb07u.jpg)

13/ Contoh run node menggunakan vps

![Image 13](https://pbs.twimg.com/media/GaAksoTbsAA560q.jpg)

14/ Bonus - Hasil Node 

Node saat ini sangat menarik apalagi banyaknya project L1 dan L2 yang memberikan incentive atau reward yang menggiurkan kepada para pesertanya.

![Image 14](https://pbs.twimg.com/media/GaAk1EJaEAAB9FJ.jpg)

15/ Airdrop Retro

Kalau kalian mau jadi king of airdrop, tipe airdrop inilah yang menjadi jawabannya

![Image 15](https://pbs.twimg.com/media/GaAlbqWbMAES3oO.jpg)

16/ Cara mengerjakan retro

![Image 16](https://pbs.twimg.com/media/GaAlmM1bEAAd570.jpg)

17/ Retroactive

![Image 17](https://pbs.twimg.com/media/GaAluFEawAAOvDb.jpg)

18/ Contoh Retroactive

![Image 18](https://pbs.twimg.com/media/GaAl4VxbIAAM12E.jpg)

19/ Retrodrop

![Image 19](https://pbs.twimg.com/media/GaAmAJybMAADSJV.jpg)

20/ Contoh Retrodrop

![Image 20](https://pbs.twimg.com/media/GaAmLG6bUAA80V9.jpg)

21/ KING AIRDROPER @justinsuntron selalu mendapatkan jutaan dollar dari airdrop retro

![Image 21](https://pbs.twimg.com/media/GaAmNg6bEAACL-_.jpg)

22/ Cara Instal VPS

![Image 22](https://pbs.twimg.com/media/GaAmuYgbgAAUOOe.jpg)

23/ Berikut adalah rangkuman dari tutorial yang saya tulis, jika ingin download pdf nya silahkan 🙏

Atau mau make bot service biar bisa baca pelan pelan monggo 

Join: [Telegram Airdrop ASC](https://t.me/airdropasc)

![Image 23](https://pbs.twimg.com/media/GaAnvWGbgAAIy75.jpg)

---

👀 Written by [Zamza Salim](https://x.com/zamzasalim)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1846508068559065362)
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
