import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
ar.io 101: The first domain on AO, but it's not just an simple domain.

Di tengah persiapan menuju AO mainnet, muncul berbagai proyek potensial yang layak menjadi sorotan. Salah satu yang menarik perhatian adalah ARIO Network,
sebuah inovasi baru dalam teknologi penyimpanan data permanen.

Tapi apa itu ar.io? Kenapa harus memilih ar.io? Confirmed airdrop juga? Yuk, kita eksplorasi lebih dalam!

![Image 0](https://pbs.twimg.com/media/GgivPOhbQAAyqRa.jpg)

---

1/ Apa itu ar.io?

ar.io atau disebut juga Arweave Input/Output adalah jaringan cloud permanen pertama di dunia, yang menyediakan infrastruktur untuk memastikan data, aplikasi, dan identitas digital bersifat timeless, tamper-proof, dan dapat diakses secara universal.

Dibangun di atas fondasi jaringan penyimpanan Arweave dan network AO, ar.io membentuk ekosistem global gateway, protokol, dan layanan yang menghubungkan pengguna ke permaweb (web tempat informasi bersifat permanen dan bebas dari kontrol terpusat.)

![Image 1](https://pbs.twimg.com/media/GgivYhCaYAA9zru.jpg)

2/ Kenapa harus ar.io?

Misalkan lu mau pergi jauh, terus bayar temen buat titip barang

> A: "Nih 100k, simpenin ini ya"

> B: "Oke" masukin gudang yang isinya barang-barang lain 

Seminggu kemudian lu balik, 

> A: "Oi B mana barang gua kemaren" 

> B: "Hah? emang barang lu yang mana?"

Nah gateway ini tentang gimana bisa dapetin barang itu, prosesnya memang butuh insentif dan idealnya ditaruh dulu dikardus kasih label baru simpen digudang.
Agar punya cara buat indeksnya, biar orang bisa nemuin barang yang dicari. Nah, itu yang ar.io tawarkan.

![Image 2](https://pbs.twimg.com/media/Ggivh1maEAA6ouF.jpg)

3/ Arweave, AO & ar.io

- Arweave merupakan protokol blockchain yang unik karena khusus dirancang untuk menyimpan data secara permanen dan terdesentralisasi.

- AO, sebuah jaringan L1 yang dibangun di atas protokol Arweave. Arweave menyebut AO sebagai sebuah “Hyper Parallel Computer”, didesain untuk memproses ribuan transaksi per detik menggunakan pemrosesan paralel.

- ar.io disebut sebagai pintu masuk ke Permaweb. ar.io merupakan input dan output data untuk protokol Arweave.

![Image 3](https://pbs.twimg.com/media/GgiwNv1a0AEgslQ.jpg)

4/ Analogi

- Arweave: Perpustakaan raksasa sebagai tempat untuk menyimpan buku secara permanen. (Storage)

- AO: Metode kerja pustakawan yang memastikan perpustakaan bisa tetap efisien dan responsif terhadap kebutuhan user. (Compute)

- ar.io: Sistem katalog yang membantu user menemukan buku dengan mudah, memesan, ataupun mengelola peminjaman. (Services)

![Image 4](https://pbs.twimg.com/media/GgiwW1tbAAAARgF.jpg)

5/ Key Feature
5.1/ ArNS

Arweave Name System (ArNS) mirip kek sistem nama domain tradisional, bedanya ArNS registrinya bersifat desentral & permanent. ArNS bertujuan buat kasih nama, identifikasi data, aplikasi atau situs web di Arweave.

Selain itu ada fitur unik dari ArNS yaitu undername, jadi nama dibawah nama atau bisa disebut juga sub domain. Fungsinya buat memudahkan konfigurasi dibawah 1 nama domain.

Tips beli domain ArNS ini pake 14-15 char, paling murah itu 982 tARIO atau sekitar 1,3 AR.

Mungkin banyak yang masih bingung juga ada ANS ada ArNS. Untuk ANS sendiri Arweave ANS itu adanya di chain Arweave sedangkan ArNS untuk AO dibawah Arweave.

![Image 5](https://pbs.twimg.com/media/Ggiwh9Ua8AAT7jc.jpg)

5.2/ Gateways

Gateway adalah titik akses awal ke AR/AO yang mempermudah aliran data ke permaweb. "In" mencakup penggabungan, pengindeksan, dan penyemaian data baru, sedangkan "Out" mencakup pengambilan cepat, penyimpanan sementara, dan pencarian data.

“Your front door to the permaweb.” Nah peran ar.io ini nanti sebagai gateway antara user dan AR/AO dalam transaksi kita.
Jadi gateway ini terdiri dari beberapa node dengan fungsi memvalidasi transaksi berdasarkan domain ArNS kita agar sebelum ter-relay ke AR/AO transaksi dibawah domain ArNS kita dinyatakan sah dan tidak ada kecurangan.

Untuk berpartisipasi menjadi node dalam gateway, diperlukan 10k tARIO yang mana sebagai penjamin bahwa kita sebagai node node akan bertanggung jawab dan berperan sebagaimana mestinya. Oiya dengan menjadi node kita juga akan menerima incentive.

![Image 6](https://pbs.twimg.com/media/GgiwoMmaQAAyA26.jpg)

5.3/ Delegated Staking

Apakah kita teri bisa ikut juga? Jawabannya adalah ya melalui delegated staking, dengan minimal 10 tARIO kita bisa ikut mendukung gateway melalui node yang tersedia.
Teknisnya adalah jika node berpartisipasi secara langsung, maka delegated staking adalah berpartisipasi secara tidak langsung karena kita memvalidasi melalui node.

![Image 7](https://pbs.twimg.com/media/Ggiw1rHbMAAvwS4.jpg)

5.4/ Observer

Ah tapi kan sama aja itu, eitz tunggu dulu, ada juga peran observer. 
Dengan teknologi yang diperkenalkan ar.io Observation and Incentive Protocol (OIP), observer mengevaluasi kemampuan gateway lain untuk menyelesaikan transaksi dibawah nama ArNS secara akurat dan tepat waktu.

![Image 8](https://pbs.twimg.com/media/Ggiw9S3acAAbqBc.jpg)

6/ Roadmap

Untuk sekarang progress ar.io sudah selesai [Milestone 3](https://x.com/ar_io_network/status/1870194968159039994), menuju ke Milestone 4 (snapshot) dan perkiraan Milestone 5 (mainnet) pada February 2025.

![Image 9](https://pbs.twimg.com/media/GgixIjRaUAEPcv1.jpg)

7/ ARIO

ARIO ini adalah token native untuk ar.io, dengan beberapa usecase/utility seperti:

- Gateway Participation/Node (min 10k tARIO)
- Delegated Stake (min 10 tARIO)
- Protocol Rewards
- Beli ArNS
- Universal Currency Ecosystem

Bahkan sekarang di fase testnetnya memiliki harga $0.025 dengan ticker tARIO.

![Image 10](https://pbs.twimg.com/media/GgixRngaYAAjg1J.jpg)

8/ Tokenomics

Saat TGE besok, ARIO akan memiliki total supply 1B, untuk alokasi lengkapnya kurang lebih seperti ini:

- Backers 26,7% > 267M
- Advisors 22,6% > 22,6M
- Ecosystem & Partnership 21,08% > 210,8M
- Community Distribution 17,5% > 175M
- Core Team 17,46% > 174,6M ARIO
- Foundation 10% > 100M
- Initial Protocol Reward Balance 5% > 50M

Oiya ada yang notice? ar.io memiliki alokasi untuk community distribution yang mana menjadi konfirmasi lebih lanjut akan adanya airdrop, sebelum itu kita cek dulu untuk beberapa ekosistem penunjang nya.

![Image 11](https://pbs.twimg.com/media/GgixfZobUAA0Pcy.jpg)

9/ Support Ekosistem

- @aoTheComputer (Network) atau AO merupakan Protokol jaringan super komputer dengan konsep hyper-pararell & open-access yang terdesentralisasi.
- @CommunityLabs (Software company), Software developer company dan venture studio yang fokus pada percepatan adopsi Arweave.
- @KYVENetwork (Infrastructure), Web3 data lake yang memungkinkan penyedia memvalidasi dan menyimpan data on-dan-off-chain secara permanen.
- @ardriveapp (Cloud Drive), Mirip kaya google drive tapi basisnya di AO.
- @apus_network (Infrastructure), Membangun menuju desentralisasi, jaringan GPU trustless pada AO untuk pelatihan dan inferensi AI.
- @AnyoneFDN (Framework), Collective developer yang membangun aplikasi terdesentralisasi dalam kerangka ar.io
- @arconnectio (Wallet). Menyederhanakan interaksi ar.io dengan ekstensi peramban web yang mudah digunakan.
- @developer_dao (Collective dev), Collective developer yang membangun aplikasi terdesentralisasi dalam kerangka ar.io.
- @eth_limo, Merampingkan proses penerapan untuk aplikasi berbasis ar.io
- @everVisionHQ, Menyediakan infrastruktur Web3 untuk membangun everPay, Permaswap, dan PermaDAO.
- @fwdresearchInkubator, R&D untuk ekosistem Arweave, membangun fondasi permaweb.
- @ProtocolLand (Code Platform), Mirip kek github tapi basisnya di AO.
- @arlinklabs (Deployment), Mirip kek netifly tapi basisnya di AO.
- @Permaswap (DEX), Platform DEX andalan kita semua.
- @aox_xyz (Bridge), Platform bridge andalan kita semua.
- ArcAOGamesAAA, Game development hub yang terdesentralisasi, dengan beberapa ekosistem yang sudah berjalan seperti Rune Realm & Satoshi Palance.
- etc.

10/ Airdrop

Untuk airdropnya sendiri karena ar.io masih fase testnet dengan konsep yang mirip retro, mungkin lebih cocok kalau disebut retro testnet.

Pertanyaan sejuta umatnya “Masih bisa ga bang?” sebelum snapshot terjadi, maka jawabannya adalah “Ya bisa-bisa aja dong”, yang mana sofar per tanggal 5 Janurari 2025 ada 16 kriteria untuk eligible, walaupun masih belum ada kejelasan untuk minimal kriteria atau diharuskan semua, tapi masa iya semua cok, but mari kita kupas 1 per 1.

![Image 12](https://pbs.twimg.com/media/Ggiyr5NbQAAnphz.jpg)

10.1/ Swap via Permaswap
 
Belum ada kriteria khusus sih untuk nominalnya, tapi kalau kalian pernah ikut AGENT atau malah BENCAT harusnya sih aman. Penting ada transaksi swap yang pernah dilakuin di [Permaswap](https://permaswap.network/#/ao)

![Image 13](https://pbs.twimg.com/media/Ggiy1znbIAAn9jo.jpg)

10.2/ Delegated Staking tARIO

Oke anggep aja yang sebelumnya, belum kelar. Maka sebelum stake kalian tetep harus swap dulu kan, pairnya sih bisa wAR/tARIO (bridge dulu juga). Buka [Portal](https://network-portal.app/#/staking) abis itu baru milih gateway yang tersedia, minimalnya cuman 10 tARIO ga sampe $0.5, beda case kalau mau ikut gateway nya hehe

![Image 14](https://pbs.twimg.com/media/Ggiy9eXbkAAT3MI.jpg)

10.3/ Hold [TrunkToken](https://x.com/TrunkToken)

![Image 15](https://pbs.twimg.com/media/GgizDG2akAA7kmA.jpg)

10.4/ Upload file di Ardrive App
 
ArDrive ini kalau bingung konsepnya mirip Google Drive, bedanya ini on-chain & datanya bersifat permanen.
Caranya sederhana sih, buka [Ardrive](https://app.ardrive.io) cukup connect wallet aja set password terus upload file/folder nya.

![Image 16](https://pbs.twimg.com/media/Ggi08TMaMAAz1Iq.jpg)

10.5/ Top up via Turbo

Turbo ini credit buat naikin speed limit saat upload file di ArDrive, minimalnya juga bisa kecil banget 0.0001 AR. Yuk dicoba dicoba [Turbo](https://turbo-topup.com)

![Image 17](https://pbs.twimg.com/media/Ggi1K6GbwAAA-sf.jpg)

10.6/ Exp Program di [Zealy](https://zealy.io/cw/ar-io/invite/3eMJ0eqIM068Esl9Mw5c7)

Ada juga EXP program dari ar.io, biar eligible kita harus dapetin 500 XP baru nanti dapet credit on-chain 1:1.
Oiya dulu yang pernah running node early banget harusnya dapet 1k EXP di addressnya.
Fun fact ini satu-satunya yang literaly free, ngga menutup kemungkinan yang satu ini bakalan jadi syarat wajib, so jangan sampe ketinggalan.

![Image 17](https://pbs.twimg.com/media/Ggi1XxoaMAAuYxX.jpg)

10.7/ Deploy app via Arlink 

Ini agak ribet sih, jadi kita harus deploy sesuatu via [ArLink](https://arlink.arweave.net).
Bingung mau deploy apa? Tenang aja kita kasih free resource juga untuk itu:

- [Repo 1](https://github.com/zamzasalim/slp-asc.git)
- [Repo 2](https://github.com/zamzasalim/app-asc.git)
- [Repo 3](https://github.com/zamzasalim/wallet-asc.git)

Bisa fork/manual ke Github, baru sync antara Github dan ArLinknya. 

Oiya sebagai catatan untuk repo 1 dan 3 pastikan output directorynya /.dist sedangkan untuk repo 2 output directorynya ./build

![Image 18](https://pbs.twimg.com/media/Ggi1lqDbMAA5OkJ.jpg)

10.8/ Set Primary Name di ArNS

Jadi setelah kalian deploy tadi, kita bisa ke [Manage Name](https://arns.app/#/manage/names) buat set primary namenya. Caranya simple klik aja icon bintang & confirm.

![Image 19](https://pbs.twimg.com/media/Ggi1qgna4AELqOb.jpg)

10.9/ Set Undername di ArNS

Setelah itu atur juga untuk Undernamenya, di icon gigi > cari undername > klik manage > Add Undername > Masukin aja nama & proses IDnya. 

Oiya untuk hasil deploy tadi harusnya bakalan https://asc_arlink.arweave.net dan setelah set undername bisa https://asc_ascairdropasc.ar.io. Jangan lupa pastikan kalian punya ArNS dulu ya hehe

![Image 20](https://pbs.twimg.com/media/Ggi1ubLa4AEMZaJ.jpg)

10.10/ Pernah main Cyber Beaver dari AO Builders

Meluncur dulu ke [Beavers Warp](https://beavers.warp.cc). 
Jadi Cyber Beaver ini game Battle Royale TPS namun via on-chain AR/AO, cara mainnya juga cukup sederhana, survive sampe detik terakhir.
Tapi kalian ga harus sampe menang, cukup pernah berpartisipasi aja, selain itu setiap kalian kelar 1 Match bakalan dapet poin dalam token DAM.
Disarankan kalau mau nyoba pake PC susah soalnya pake HP.

![Image 21](https://pbs.twimg.com/media/Ggi1yrFaMAAMSqW.jpg)

10.11/ Petisi kepada Raja Ilama di Llama Land AO

Ini juga cukup sederhana, ajuin petisi ke rajanya nanti dapet reward token LLMA.
Tapi pastiin dulu sebelum itu kalian dah ke imigrasi dulu biar ga dikira biar ga dikira imigran ilegal.
Buat daftar jadi citizen juga butuh 5 Vouch.

![Image 22](https://pbs.twimg.com/media/Ggi14a-boAA5BO5.jpg)

10.12/ Pernah [Pet DumDum](https://dumdum.g8way.io)

Dum Dum Pet Dum Dum Pet. Pet or Rekt. Ini ngapain? Pat pat doang sih, tapi kek Ilama Land butuh 5 Vouch buat ikutan.

![Image 23](https://pbs.twimg.com/media/Ggi3fTebsAA4Gl-.jpg)

10.13/ Hold Dumdumz NFT

Pernah dapetin NFT nya? Kalian aman, yang ga dapet ya jangan dipaksain kecuali emang mampu sih xixi

![Image 23](https://pbs.twimg.com/media/Ggi3m-Ta0AMtz2n.jpg)

10.14/ Upload Dataset di [Apus Network](https://apus.ar.io/#/console/competitions)

Dah lah, dah expired ya guys ya, saya juga ketinggalan yang satu ini. Buat yang pernah ikut saya ucapkan selamat dan yauda gitu aja

![Image 24](https://pbs.twimg.com/media/Ggi3ttbbwAAHyNe.jpg)

10.15/ Beli atomic asset di [Our BazAR](https://bazar.arweave.net)

Atomic asset? apaan tuh? Jadi kalau NFT kan kepemilikannya untuk 100% buat yang punya, nah atomic asset ini memecah kepemilikan NFT menjadi banyak bagian per 100 per 1000 per 10000 bisa.

Ke pasar dulu, saya ambil contoh disini trAOnk - Donald. Donald belong thou 17 orang, kalau mau jadi yang ke 18 kalian harus beli 1 slice dulu sekitar 0.002 AR. Nah 1 slice itulah yang disebut atomic asset.

![Image 25](https://pbs.twimg.com/media/Ggi31xrbQAATfmX.jpg)

10.16/ Buat atomic asset di [Helix](https://helix.arweave.net)

Nah kebalikan dari sebelumnya, tadi beli sekarang kita disuruh buat atomic asset. Sederhananya seperti ngebuat NFT bedanya ketambahan fitur slice as atomic assetnya.

![Image 26](https://pbs.twimg.com/media/Ggi4JKyaQAIyyuZ.jpg)

10.17/ Mungkin itu dulu untuk sekarang, karena sejauh ini kriteria nya masih terus bertambah, cukup rumit ya? Tapi ya gimana ya, makin sedikit yang ikut potensi dapetnya bisa lebih gede juga

![Image 27](https://pbs.twimg.com/media/Ggi4OzrboAAwsmc.jpg)

11/ Note
11.1/ Setelah berselancar lebih jauh, ada 3 web yang berhasil kita deploy dengan Undername ArNS

- Single Landing Page ASC > https://asc_ascairdropasc.ar.io
- Top 100 MC > https://ascapp_ascairdropasc.ar.io
- Multiple Web Wallet > https://ascwallet_ascairdropasc.ar.io

![Image 28](https://pbs.twimg.com/media/Ggi4WWeakAADZaq.jpg)

11.2/ Bingung jawab zealynya? Jawaban bisa ditemukan di [Airdrop ASC](https://t.me/airdropasc/69770)

![Image 29](https://pbs.twimg.com/media/Ggi4bA4aUAAmNDq.jpg)

11.3/ Vouch

Jadi Vouch ini seperti social credit score untuk address AR/AO kalian, untuk Bazar hanya butuh 2 Vouch sedangkan Ilama Land & Pet Dum Dum butuh 5 Vouch.

Cara dapetinnya gimana? Cukup verifikasi melalui 4 metode yang tersedia seperti X, Gitcoin Passport, AO Balance / Stake wAR.

![Image 30](https://pbs.twimg.com/media/Ggi4lzxbMAAu0qQ.jpg)

12/ Penutup

Mungkin itu dulu pembahasan lengkap seputar ar.io. Karena untuk sekarang AO sendiri juga masih testnet maka ekosistem dibawahnya seperti ar.io juga bakal ikutan. 

ArNS ini cukup underated sih, yang baru mint ArNS aja ga sampe 3k. Jadi peluang kalian cukup gede, makanya sebisa mungkin di dimaksimalin, walaupun concern nya harus spend sedikit dulu. Apalagi kalau kalian ketinggalan 0RBIT AGENT APUS DUMPET BENCAT. 

Oiya jangan lupa gabung channel telegram [Airdrop ASC](https://t.me/airdropasc) untuk update yang lebih cepat dan relevan.

Menurutku ArNS ini ga hanya sekedar domain, karena ada juga fitur lain seperti gateway & app drive. Menurut kalian gimana?

---

👀 Written by [Hanip](https://x.com/hnfdmxyz)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1875950696165728413)

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
