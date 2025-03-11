import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `

Nodo 101: 400k users & $1.2M Trading Volume

NODO adalah sebuat platform perdagangan yang juga memiliki fitur DeFi & AI 

Saat ini nodo sedang mengadakan campaign airdrop + ambassador 

Apa itu nodo? cara mengerjakan airdropnya? dan cara apply ambasador 👇

![Image 0](https://pbs.twimg.com/media/Gj2JQsqbYAABZUL.jpg)

---
---

1/ Apa itu Nodo? 

Nodo adalah sebuat platform perdagangan multichain yang juga memiliki fitur DeFi & AI, dan juga merupakan Agent AI pertama di jaringan SUI

Key Feature:

➖ Nodo prediction market: sebuah fitur predict to earn 

➖ ODTE Market: fitur trading up/down dengan limit 10 menit 

➖ Nodo Wallet 

➖ NODO AI: Copy trading AI By Nodo

![Image 1](https://pbs.twimg.com/media/Gj2PoGJaEAERLiV.jpg)

2/ Airdrop & Token 

Get started: Get 1200 XP + 1500 Gems

➖ Visit [Nodo App](http://app.nodo.xyz/referral-code/LXQTMD) 

➖ Invite code - LXQTMD

Earn xp:

➖ Deposit USDT (Polygon) every $1 get 200 XP

➖ Join predict market 

Token: 

➖ Nodo Gems

Token GEM adalah aset imbalan yang dapat diskalakan dalam ekosistem NODO, yang diperoleh melalui partisipasi aktif dalam ekosistem perdagangan NODO sebagai penghargaan atas kontribusi utama dalam pertumbuhan platform.

➖ Nodo XP

XP adalah poin loyalitas platform NODO, yang dapat diklaim melalui musim dengan pasokan terbatas melalui program "1M USD $NODO Airdrop Program

Note XP akan di convert ke token nantinya

![Image 2](https://pbs.twimg.com/media/Gj2SQX4bgAABxcm.jpg)

3/ Ambassador Program

Kalo kalian ngerasa memiliki kualikasi yang cukup, instead just join airdropnya, kalian bisa apply ambassador untuk dapet reward tambahan. Earn up to 2k USDT/month.

T&C di [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeTTTkDE4hKZLQYzxpSNS0GooXj2Ntx6Nb15itN2WRIJbuE0g/viewform)

![Image 3](https://pbs.twimg.com/media/Gj2UAs-bEAAXHJ3.jpg)

---
---

👀 Written by [Zamza Salim](https://x.com/zamzasalim)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1890824661245600088)
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
