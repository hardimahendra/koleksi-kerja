# Koleksi Kerja — UX Contract

| Operasi          | Trigger                   | Hasil                                              | Pemulihan                                              |
| ---------------- | ------------------------- | -------------------------------------------------- | ------------------------------------------------------ |
| Menambah barang  | `Tambah ke keranjang`     | Jumlah keranjang bertambah dan status muncul       | Jumlah dapat diubah atau barang dihapus dari keranjang |
| Mengubah jumlah  | Tombol plus/minus         | Total diperbarui di browser                        | Jumlah nol menghapus baris                             |
| Menyimpan profil | Formulir profil           | Profil disimpan di perangkat                       | Pengunjung dapat membuka profil dan mengubahnya lagi   |
| Checkout demo    | `Lanjutkan ke pembayaran` | Ringkasan pesanan dan profil terbuka               | Kembali ke keranjang atau ubah profil                  |
| Konfirmasi demo  | `Konfirmasi pesanan demo` | Pesan penyelesaian tampil; keranjang dipertahankan | Menutup dialog kembali ke katalog                      |

Semua tombol tindakan memakai elemen `button`, memiliki label yang menjelaskan hasilnya, dan menyediakan fokus keyboard yang terlihat.
