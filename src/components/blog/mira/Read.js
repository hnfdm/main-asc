import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Read = () => {

  const markdownBeforeForm = `
Mira Network 101: Layer Verifikasi AI yang Terdesentralisasi

Funding $9M

Ada node dan potensial airdropnya juga. Untuk lebih detailnya, let's dive deep 👇

![Image 0](https://pbs.twimg.com/media/GlnE5DZboAA7cu4.jpg)

---
---

1/ Apa itu Mira Network

> 🔹 Mira Network adalah sistem terdesentralisasi yang bertujuan untuk memverifikasi response AI, yang mana mengatasi bias dan halusinasi.

> 🔹 Sistem di Mira Network akan mengubah respon AI menjadi klaim yang dapat diverifikasi dan menggunakan konsensus model AI untuk validasinya.

> 🔹 Model keamanan ekonominya menggunakan kombinasi dari Proof of Work (PoW) dan Proof of Stake (PoS) untuk insentif verifikasi yang jujur.

![Image 1](https://pbs.twimg.com/media/GlnGHFAbsAAOSp8.jpg)

2/ Masalah?

> 🔹 Berdasarkan Mira Network, “Penelitian menunjukkan bahwa output AI sering kali mengandung halusinasi dan bias, yang sulit diatasi oleh model yang disesuaikan”.

> 🔹 Meskipun AI unggul dalam menghasilkan output yang masuk akal, sering kali menghasilkan informasi yang salah karena sifat probabilistik teknologi berbasis jaringan saraf, seperti LLM (Large Language Model) dan Model Difusi.

> 🔹 Hal ini menciptakan kebutuhan mendesak untuk sistem yang dapat memfilter kesalahan dan menyeimbangkan bias.
Namun, model yang disesuaikan saat ini memiliki keterbatasan dalam menangani masalah ini, sehingga diperlukan konsensus terdesentralisasi untuk memastikan keandalan.

![Image 2](https://pbs.twimg.com/media/GlnGSJdbUAEWh-f.jpg)

3/ Solusi

> 🔹 Mira Network diusulkan sebagai jaringan yang memverifikasi output AI melalui konsensus terdesentralisasi.

> 🔹 Sistem ini mengubah output AI menjadi klaim yang dapat diverifikasi secara independen, memungkinkan beberapa model AI untuk secara kolektif menentukan validitas setiap klaim.

> 🔹 Pendekatan ini didukung oleh mekanisme insentif ekonomi berbasis hybrid Proof-of-Work (PoW) dan Proof-of-Stake (PoS), yang mendorong operator node untuk melakukan verifikasi jujur.

> 🔹 Visi jangka panjangnya adalah menciptakan model fondasi sintetis yang menghasilkan output bebas kesalahan, langkah krusial menuju AI yang dapat beroperasi tanpa pengawasan manusia.

![Image 3](https://pbs.twimg.com/media/GlnGjulaoAAR3yO.jpg)

4/ Key Innovation

> 🔹 Binarization: Keluaran AI yang kompleks dipecah menjadi klaim yang dapat diverifikasi secara independen.
Hal ini mengubah konten yang kabur dan berdimensi tinggi menjadi unit-unit yang dapat diverifikasi.

> 🔹 Distributed Verification: Setiap klaim diverifikasi oleh model khusus di seluruh jaringan.
Tidak ada satu pun verifikator yang melihat konten lengkap, sehingga meningkatkan privasi dan keandalan.

> 🔹 Proof of Verification: Mekanisme konsensus hibrida menggabungkan insentif ekonomi dengan bukti komputasi, memastikan verifikator benar-benar melakukan inferensi dan bukan hanya pengesahan.

![Image 4](https://pbs.twimg.com/media/GlnGvjXaEAAowuz.jpg)

5/ Arsitektur Jaringan

> 🔹 Protokol Mira mengubah konten kompleks menjadi klaim yang dapat diverifikasi. Which is proses verifikasi didistribusikan, dengan konsensus di antara model AI yang beragam.

> 🔹 Jaringan ini mampu menangani berbagai jenis konten, termasuk pernyataan faktual, dokumentasi teknis, tulisan kreatif, multimedia, dan kode.

> 🔹 Alur kerjanya melibatkan pengguna yang mengirimkan konten, menentukan domain (misalnya, medis, hukum), dan menetapkan ambang batas konsensus (misalnya, absolut, N dari M).

> 🔹 Setelah verifikasi, jaringan menghasilkan sertifikat kriptografi untuk menjamin keaslian dan integritas konten.

![Image 5](https://pbs.twimg.com/media/GlnG0AZaoAAkdoH.jpg)

6/ Economic Security Model

> 🔹 Model keamanan ekonomi Mira menggabungkan PoW dan PoS untuk memastikan verifikasi yang jujur.
Verifikasi tersebut diubah menjadi pertanyaan pilihan ganda, dengan probabilitas tebakan yang akan dijelaskan dalam Tabel 1.

> 🔹 Tabel ini menunjukkan probabilitas tebakan untuk 2, 4, 6, 8, 10 opsi jawaban dengan 1-10 verifikasi, misalnya, 50.0000% untuk 2 opsi dan 1 verifikasi, hingga 0.0000% untuk 10 opsi dengan 7+ verifikasi.

> 🔹 Node harus mempertaruhkan nilai, dengan potensi pemotongan (slashing) jika menyimpang dari perilaku jujur.
Fase awal melibatkan vetting operator, kemudian desentralisasi dengan duplikasi, dan akhirnya pembagian (sharding) permintaan.

> 🔹 Catatan: Probabilitas dihitung berdasarkan kombinasi opsi jawaban dan jumlah verifikasi, menunjukkan ketahanan terhadap tebakan acak.

![Image 6](https://pbs.twimg.com/media/GlnHDyiakAAlcgK.jpg)

7/ Security & Privasi

> 🔹 Privasi ditekankan dengan memecah konten menjadi pasangan entitas-klaim, yang kemudian didistribusikan di node untuk mencegah rekonstruksi.

> 🔹 Respons tetap pribadi hingga konsensus tercapai, dan sertifikat kriptografi digunakan untuk keamanan.

> 🔹 Rencananya di masa depan mencakup desentralisasi perangkat lunak transformasi untuk meningkatkan keamanan lebih lanjut.

![Image 7](https://pbs.twimg.com/media/GlnHQF5acAAJkW3.jpg)

8/ Evolusi Jaringan

> 🔹 Jaringan direncanakan untuk berkembang, dimulai dengan domain seperti kesehatan, hukum, dan keuangan, kemudian meluas ke kode, data terstruktur, dan multimedia.

> 🔹 Evolusi ini mencakup kemajuan dari pemeriksaan validitas ke rekonstruksi konten, dengan tujuan akhir menciptakan basis pengetahuan yang terverifikasi.

> 🔹 Tujuannya adalah menciptakan basis pengetahuan yang terverifikasi yang dapat digunakan untuk pengecekan fakta dan layanan oracle, memperluas aplikasi Mira di berbagai sektor.

![Image 8](https://pbs.twimg.com/media/GlnHkXJakAAn5DG.jpg)

9/ Node Delegator Program

> 🔹 Program Delegator Mira, yang diumumkan oleh Mira Foundation, bertujuan mendukung misi menciptakan kecerdasan AI yang terverifikasi dan tanpa kepercayaan.
Ini memungkinkan partisipasi dari individu hingga investor institusi dengan mendelegasikan sumber daya komputasi.

> 🔹 Peserta membeli lisensi node, yang kemudian dikelola oleh penyedia infrastruktur, sehingga tidak perlu menjalankan node sendiri.
Proses ini mencakup pendaftaran whitelist dan pemilihan operator node untuk didelegasikan, dengan imbalan berdasarkan performa node, seperti validasi output AI dan stabilitas jaringan.

> 🔹 Program ini menawarkan aksesibilitas, inklusivitas, dan keamanan jaringan yang lebih baik, serta peluang mendapatkan token atau insentif lainnya.
Drop 1 dan Drop 2 dengan masing-masing pool cap $250k, terjual habis dalam beberapa jam, yang mana menunjukkan permintaan yang tinggi.

![Image 9](https://pbs.twimg.com/media/GlnH9oIaMAAIUhn.jpg)

10/ Drop 3 (Proses)

> 1️⃣ Pergi dulu ke [Delegate](http://delegate.mira.network) & Connect Wallet

> 2️⃣ Harus ada WL, kalau belum buat publikasi tentang Mira dan share ke Discord nya atau pantau aja terus X atau Discordnya, biasanya ada kode yang dispill atau pakai kode ini (LDCL8)

> 3️⃣ Pilih node operator (Aethir Cloud, Ionet, Exabits, Spheron & Hyperbolics) buat di delegate

> 🔹 Kalau udah ada WL buat Drop 1 atau Drop 2 bisa langsung ikut Drop 3

> 🔹 Kontribusi start from $35, $50, $100, atau $150 via USDC (ETH atau BASE)

> 🔹 Disclaimer dulu NFA & jangan lupa DYOR ya ketua

![Image 10](https://pbs.twimg.com/media/GlnIP3eagAAdA1f.jpg)

11/ Klok AI

> 🔹 Klok AI adalah aplikasi chat multi-LLM yang diluncurkan oleh Mira Network, Klok AI memungkinkan pengguna untuk mengakses berbagai model AI, termasuk GPT-4o mini, Llama 3.3 70B Instruct, dan DeepSeek-R1, secara gratis hingga batas harian. 

> 🔹 Peluncuran ini diumumkan pada 19 Februari 2025, dengan fokus pada aksesibilitas dan keterlibatan pengguna melalui sistem poin. 

> 🔹 Klok dibangun di atas infrastruktur terdesentralisasi Mira, memastikan output AI diverifikasi, tidak bias, dan tidak dikompromikan. 

> 🔹 Tujuannya adalah membuat alat AI inklusif dan partisipatif, dengan penambahan model AI baru setiap minggu.

![Image 11](https://pbs.twimg.com/media/GlnI7UJbMAAWwqt.jpg)

12/ Potensial Airdrop

> 1️⃣ Register [Klok AI](https://klokapp.ai/?referral_code=YMU3F3NV)

> 2️⃣ Login via Akun Google

> 3️⃣ Backup Wallet (Profil > Wallet Information > Download Seed Phrase)

> 4️⃣ Chat with AI Daily & Earn Point (1 Prompt = 10 Chat Points)

> 5️⃣ Join [Discord](https://mee6.xyz/i/jrL5Rc24WD) & Send Feedback

> 6️⃣ Done

13/ Kesimpulan

> 🔹 Mira Network menangani tantangan utama AI dalam menghasilkan output bebas kesalahan melalui verifikasi terdesentralisasi. 

> 🔹 Dengan mengintegrasikan verifikasi ke dalam proses generasi, Mira Network menghapus batas antara keduanya, memungkinkan AI beroperasi tanpa pengawasan manusia. 

> 🔹 Pendekatan ini, yang tahan terhadap sentralisasi, meletakkan dasar untuk AI yang sebenarnya, yang mana membuka potensi transformasi penggunaan AI di masyarakat.

---
---

👀 Written by [Hanip](https://x.com/hnfdmxyz)

ℹ️ Source: [X Post](https://x.com/Autosultan_team/status/1898765854495674620)
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
