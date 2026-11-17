# Portofolio Teguh — React

Website portofolio pribadi berbahasa Indonesia dengan desain dark premium hitam dan ungu.

## 1. Persiapan
Pastikan Node.js dan npm sudah terpasang. Cek melalui terminal:

```bash
node -v
npm -v
```

## 2. Menjalankan project
Ekstrak ZIP, lalu buka folder `portofolio-teguh` di VS Code. Jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

## 3. Membuat versi production
```bash
npm run build
npm run preview
```
Hasil website siap hosting ada di folder `dist`.

## 4. Mengganti foto profil
Saat ini area foto menggunakan avatar sementara berinisial T.
1. Siapkan foto profil, lalu simpan di `public/foto-profil.jpg`.
2. Buka `src/main.jsx`.
3. Cari bagian `profile-placeholder` di dalam `hero-visual`.
4. Ganti isi elemen `profile-placeholder` dengan:

```jsx
<div className="profile-placeholder">
  <img
    src="/foto-profil.jpg"
    alt="Foto profil Teguh"
    className="profile-photo"
  />
</div>
```

5. Tambahkan CSS berikut di bagian paling bawah `src/style.css`:

```css
.profile-placeholder { overflow: hidden; }
.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
}
```

## 5. Mengganti CV dan informasi
- Data nama, email, nomor telepon, lokasi, GitHub, dan LinkedIn ada di objek `profile` pada `src/main.jsx`.
- Daftar keahlian ada di array `skills`.
- Data proyek ada di array `projects`.
- Bagian pendidikan, pengalaman, dan sertifikasi ditulis di bagian `experience`.
- Untuk menambahkan tombol unduh CV, simpan file CV PDF di `public/CV-Teguh.pdf`, lalu tambahkan tautan `<a href="/CV-Teguh.pdf" download>Unduh CV</a>` di bagian hero atau kontak.

## 6. Catatan sebelum dipublikasikan
Periksa kembali tanggal, deskripsi proyek, sertifikat, nomor kontak, dan tautan. Isi IPK dan tahun pendidikan mengikuti informasi yang tercantum di CV yang diberikan. Pastikan semua informasi masih sesuai kondisi terbaru.
