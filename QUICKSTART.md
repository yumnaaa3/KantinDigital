# 🚀 KantinQue - Quick Start Guide

## Akses Aplikasi

### URL Lokal (Laragon)
```
http://localhost/kantin/
```

### Halaman Utama
- **Homepage**: `http://localhost/kantin/index.html`
- **Order Tracking**: `http://localhost/kantin/order-tracking.html`
- **Merchant Dashboard**: `http://localhost/kantin/merchant-dashboard.html`

---

## 🎯 Quick Demo Flow

### 1️⃣ Pesan Makanan (5 menit)

1. **Buka Homepage**
   ```
   http://localhost/kantin/index.html
   ```

2. **Pilih Kantin**
   - Scroll ke bagian "Pilih Kantin"
   - Klik salah satu kantin (contoh: "Kantin Bu Cicik")

3. **Pilih Menu**
   - Lihat menu yang muncul
   - Klik tombol "Tambah" pada menu yang diinginkan
   - Perhatikan badge cart bertambah

4. **Buka Keranjang**
   - Klik icon 🛒 di header
   - Review pesanan Anda

5. **Checkout**
   - Tambahkan catatan (opsional): "Extra pedas"
   - Pilih waktu:
     - **Pesan Sekarang** (langsung)
     - **Jadwalkan** (pilih tanggal & jam)
   - Klik "Lanjut ke Pembayaran"

6. **Bayar**
   - Pilih metode pembayaran (QRIS/GoPay/OVO/DANA)
   - QR Code akan muncul
   - Tunggu 10 detik (demo mode - otomatis sukses)
   - Lihat notifikasi "Pembayaran Berhasil!"

### 2️⃣ Tracking Pesanan (2 menit)

1. **Buka Order Tracking**
   ```
   http://localhost/kantin/order-tracking.html
   ```
   Atau klik icon 📄 "Pesanan" di header

2. **Lihat Status**
   - Pesanan baru akan berstatus "Diproses" (kuning)
   - Setelah 30 detik → "Siap Diambil" (hijau)
   - Setelah 2 menit → "Selesai" (abu-abu)

3. **Filter Pesanan**
   - Klik tab "Diproses" untuk lihat pesanan aktif
   - Klik tab "Selesai" untuk lihat riwayat

### 3️⃣ Merchant Dashboard (2 menit)

1. **Buka Dashboard**
   ```
   http://localhost/kantin/merchant-dashboard.html
   ```
   Atau klik "Dashboard" di header

2. **Lihat Statistik**
   - Total pesanan
   - Total pendapatan
   - Pesanan aktif
   - Pesanan selesai

---

## 🎨 Fitur-Fitur Keren

### ✨ Menu Unggulan
- Cari menu dengan badge ⭐ "Unggulan"
- Ini adalah menu spesial dari setiap kantin

### 📝 Catatan Pesanan
- Tambahkan catatan khusus:
  - "Extra pedas"
  - "Tanpa bawang"
  - "Nasi terpisah"
  - dll.

### ⏰ Pre-Order
- Jadwalkan pesanan untuk nanti
- Pilih tanggal dan jam pengambilan
- Cocok untuk acara atau meeting

### 💳 Multi-Payment
- **QRIS** - Universal untuk semua e-wallet
- **GoPay** - Khusus pengguna GoPay
- **OVO** - Khusus pengguna OVO
- **DANA** - Khusus pengguna DANA

### 🛒 Multi-Kantin Cart
- Pesan dari beberapa kantin sekaligus
- Subtotal per kantin
- Total keseluruhan otomatis

---

## 🎓 Tips & Tricks

### 💡 Pro Tips

1. **Badge Notifications**
   - 🛒 Cart badge = jumlah item di keranjang
   - 📄 Order badge = jumlah pesanan aktif

2. **Keyboard Shortcuts**
   - `Esc` = Tutup modal (jika diimplementasikan)

3. **Filter Cepat**
   - Gunakan filter tab untuk cepat cari pesanan

4. **Refresh Otomatis**
   - Order tracking auto-refresh setiap 5 detik
   - Tidak perlu refresh manual

### ⚡ Quick Actions

- **Tambah Item Cepat**: Klik "Tambah" langsung dari menu
- **Ubah Quantity**: Gunakan +/- di cart
- **Hapus Item**: Klik icon 🗑️ atau set quantity ke 0

---

## 🔍 Troubleshooting Cepat

### ❌ Masalah Umum

#### QR Code tidak muncul?
```javascript
// Buka Console (F12) dan cek error
// Pastikan qr-code-fix.js loaded
```

#### Cart kosong setelah refresh?
```javascript
// Check localStorage
localStorage.getItem('kantinque_cart')
```

#### Badge tidak update?
```javascript
// Refresh halaman
location.reload()
```

#### Gambar tidak muncul?
```
// Pastikan folder img/ ada
// Check path gambar di kantinData
```

---

## 📊 Demo Data

### Sample Order Flow

```javascript
// 1. Pilih Kantin Bu Cicik
// 2. Tambah ke cart:
//    - Ayam Geprek x2 = Rp 32.000
//    - Es Teh Manis x1 = Rp 5.000
//    Total = Rp 37.000
// 3. Catatan: "Extra pedas level 5"
// 4. Jadwalkan: Besok jam 12:00
// 5. Bayar dengan QRIS
```

### Sample Kantins

1. **Kantin Bu Cicik** - Ayam Geprek (Unggulan)
2. **Kantin Pak Budi** - Bakso Solo (Unggulan)
3. **Kantin Mbok Sri** - Nasi Kuning (Unggulan)
4. **Kantin Mas Hendra** - Nasi Rames (Unggulan)
5. **Kantin Cak Imin** - Seblak Ceker (Unggulan)
6. **Kantin Mbak Dewi** - Ayam Betutu (Unggulan)

---

## 🎯 Testing Scenarios

### Scenario 1: Single Kantin Order
```
1. Pilih 1 kantin
2. Tambah 3 menu berbeda
3. Checkout dengan "Pesan Sekarang"
4. Bayar dengan QRIS
5. Track di order-tracking.html
```

### Scenario 2: Multi-Kantin Order
```
1. Pilih Kantin A → Tambah menu
2. Pilih Kantin B → Tambah menu
3. Pilih Kantin C → Tambah menu
4. Checkout semua sekaligus
5. Bayar dengan GoPay
```

### Scenario 3: Scheduled Order
```
1. Pilih kantin
2. Tambah menu
3. Pilih "Jadwalkan"
4. Set tanggal besok, jam 10:00
5. Tambah catatan
6. Bayar dengan OVO
```

---

## 📱 Browser Support

### ✅ Recommended
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

### ⚠️ Minimum
- Chrome 80+
- Firefox 75+
- Edge 80+
- Safari 13+

---

## 🔗 Quick Links

- **Homepage**: `/index.html`
- **Order Tracking**: `/order-tracking.html`
- **Merchant Dashboard**: `/merchant-dashboard.html`
- **README**: `/README.md`
- **Testing Checklist**: `/TESTING.md`

---

## 📞 Support

### WhatsApp
```
+62 896-8109-3158
```

### Email
```
support@kantinque.com (jika ada)
```

---

## 🎉 Selamat Mencoba!

Aplikasi KantinQue siap digunakan! 

**Next Steps:**
1. ✅ Test semua fitur
2. ✅ Customize sesuai kebutuhan
3. ✅ Deploy ke production (jika siap)

**Happy Ordering! 🍽️**

---

*Last Updated: 2025-12-28*
