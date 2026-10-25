# aryxdeww.github.io

Personal space, profile, and digital diary of Setsuna Aruya (aryxdeww). Built with pure HTML/CSS/JS and hosted directly on GitHub Pages.

## Live Site
[https://aryxdeww.github.io](https://aryxdeww.github.io)

## Navigation & Features
- **`/` (Profile Card):** Halaman *landing page* paling awal. Menampilkan profile card minimalis sebagai perkenalan.
- **`/autobiography/`:** Direktori autobiografi lengkap yang menceritakan background story-ku (biasanya diakses setelah melihat profile card).
- **`/diary/`:** Ruang personal. Tempat naruh semua unek-unek, pikiran, dan galeri memori.

## Repository Structure

```text
aryxdeww.github.io/
├── assets/
│   ├── autobiography/   # Kumpulan aset webp (avatar & banner Karakter/Personal)
│   ├── diary/           # Aset gambar galeri dan teks unek-unek
│   └── main/            # Aset utama untuk landing page
├── autobiography/
│   └── index.html       # Clean routing untuk /autobiography
├── diary/
│   ├── data.js          # Skrip penyimpan entri data diary
│   └── index.html       # Clean routing untuk /diary
├── index.html           # Entry point (Profile Card)
└── README.md
