# ☕ Website Kelompok Tani Kopi Sumber Kembang

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](./LICENSE)
[![Author](https://img.shields.io/badge/Author-Yanuar%20Ardhika%20Rahmadhani%20Ubaidillah-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ardhikaxx)

Website **Kelompok Tani Kopi Sumber Kembang (Casim Coffee)** adalah portal profil & pemasaran kopi petani: profil kelompok, katalog bubuk/biji, proses pascapanen, galeri kebun, berita panen, dan pemesanan. Menghubungkan petani langsung ke pembeli.

---

## ✨ Fitur Utama

### 1. 🌱 Profil Kelompok Tani
- Sejarah, anggota, lahan, dan proses budidaya.

### 2. ☕ Katalog Kopi
- Varian robusta/arabika, roast level, kemasan, harga.

### 3. 🏭 Pascapanen
- Alur petik → jemur → sangrai → giling.

### 4. 🖼️ Galeri & Berita
- Foto kebun, panen, dan agenda kelompok.

### 5. 📞 Pemesanan
- Formulir pesan + WhatsApp admin.

---

## 👥 Hak Akses Pengguna (Role-Based Access Control)

| Role | Akses & Wewenang |
| :--- | :--- |
| **Pengunjung** | Lihat profil, katalog, pesan via WA. |
| **Admin** | Kelola produk, berita, galeri. |

> Otorisasi ditegakkan di backend (middleware/Policy) — bukan sekadar menyembunyikan menu.

---

## 🛠️ Tech Stack & Dependensi

* **Frontend**: HTML5, CSS3, JavaScript
* **Styling**: Bootstrap 5 / Custom CSS
* **Server**: Apache/Nginx atau Live Server untuk preview

---

## ⚙️ Panduan Instalasi & Menjalankan Aplikasi

### 1. Kloning Repositori
```bash
git clone https://github.com/ardhikaxx/website-casim-coffee
cd website-casim-coffee
```

### 2. Jalankan
- Buka `index.html` langsung di browser, atau
- Via VS Code Live Server, atau
- Via XAMPP: simpan di `htdocs/website-casim-coffee` lalu buka `http://localhost/website-casim-coffee`

---

## 📚 Dokumentasi Sistem

* [⚖️ **LICENSE**](./LICENSE) — Lisensi resmi **Proprietary Software License (All Rights Reserved)**.
* [🛡️ **SECURITY.md**](./SECURITY.md) — Kebijakan keamanan & pelaporan celah (*Responsible Disclosure*).
* [🤝 **CONTRIBUTING.md**](./CONTRIBUTING.md) — Pedoman kontribusi kode & standar.
* [📜 **CODE_OF_CONDUCT.md**](./CODE_OF_CONDUCT.md) — Pedoman perilaku komunitas pengembang.
* [💬 **SUPPORT.md**](./SUPPORT.md) — Kanal bantuan teknis & komunikasi resmi pengembang.
* [📋 **CHANGELOG.md**](./CHANGELOG.md) — Riwayat rilis fitur terstruktur (*Keep a Changelog* & SemVer).
* [📚 **CITATION.md**](./CITATION.md) — Format sitasi karya untuk keperluan akademik.

---

## 💖 Dukungan & Donasi

Jika proyek **Website Kelompok Tani Kopi Sumber Kembang** ini bermanfaat bagi Anda dan telah menghemat banyak jam kerja Anda, Anda dapat menunjukkan apresiasi dengan memberikan traktiran kopi (donasi) melalui pemindaian kode QRIS di bawah ini:

<p align="center">
  <img src="./qris.png" alt="QRIS Donasi" width="300"/>
</p>

> Donasi sepenuhnya bersifat sukarela dan tidak mengikat. Aplikasi tetap dapat digunakan secara utuh tanpa donasi.

---

## ⚠️ Ketentuan Penggunaan

Proyek ini dilindungi lisensi **Proprietary Software License (All Rights Reserved)**. Anda **dilarang** menyalin, memodifikasi, mendistribusikan ulang, atau menjual kode ini tanpa izin tertulis dari pemilik hak cipta. Lihat [LICENSE](./LICENSE) untuk detail lengkap.

---

## 👨‍💻 Pengembang & Hak Cipta

Dirancang dan dikembangkan dengan penuh dedikasi oleh:
**[Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx)](https://github.com/ardhikaxx)**
*Lead Software Architect & Maintainer*

> **Copyright (c) 2024 - 2026 Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx). All Rights Reserved.**
