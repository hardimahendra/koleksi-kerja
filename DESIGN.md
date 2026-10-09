# Koleksi Kerja — Design Context

## Product

Koleksi Kerja adalah pustaka referensi visual untuk ruang kerja digital. Pengunjung mengeksplorasi foto teknologi yang dimuat dari Unsplash, dengan atribusi langsung kepada fotografer.

## Visual direction

- **Subject:** perangkat dan lingkungan kerja digital; bukan toko gadget generik.
- **Audience:** pekerja digital yang mencari referensi visual meja, perangkat, dan aktivitas teknologi.
- **Signature:** lembar referensi hidup dengan filter topik teknologi, tanpa meniru halaman e-commerce.
- **Palette:** `--bone #f4f1eb`, `--ink #171715`, `--acid #d4ef48`, `--stone #d7d1c5`, `--gray #797670`.
- **Typography:** Arial untuk sistem dan label; Georgia untuk gagasan editorial dan deskripsi objek.
- **Runtime ownership:** token berada di `app/globals.css`; semua overlay dan kartu memakai token tersebut.

## Durable interaction decisions

- Filter topik memuat ulang referensi dari endpoint server dan membatalkan permintaan sebelumnya.
- Foto selalu menyertakan tautan ke fotografer dan halaman sumber Unsplash.
- Tidak ada harga, keranjang, checkout, akun, atau transaksi.
