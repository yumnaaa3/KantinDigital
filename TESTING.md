# 🧪 KantinQue - Testing Checklist

## ✅ Testing Checklist untuk KantinQue

### 🏠 Homepage (`index.html`)

#### Hero Section
- [ ] Hero section tampil dengan baik
- [ ] Gambar kantin tampil
- [ ] Button "Pilih Kantin Sekarang" berfungsi (scroll ke section kantin)
- [ ] Animasi smooth scroll berfungsi

#### Kantin Selection
- [ ] 6 kantin tampil dengan grid layout
- [ ] Gambar setiap kantin tampil
- [ ] Nama dan deskripsi kantin tampil
- [ ] Jumlah menu tampil dengan benar
- [ ] Hover effect berfungsi
- [ ] Klik kantin menampilkan menu
- [ ] Badge "Dipilih" muncul pada kantin yang dipilih
- [ ] Smooth scroll ke menu section

#### Menu Display
- [ ] Menu section tersembunyi saat belum pilih kantin
- [ ] Menu section muncul setelah pilih kantin
- [ ] Title section berubah sesuai kantin yang dipilih
- [ ] Semua menu item tampil dengan grid layout
- [ ] Badge "Unggulan" tampil pada menu unggulan
- [ ] Gambar menu tampil (atau placeholder jika error)
- [ ] Kategori menu tampil (Makanan/Minuman/Snack)
- [ ] Nama menu tampil
- [ ] Deskripsi menu tampil
- [ ] Harga tampil dengan format Rupiah
- [ ] Button "Tambah" berfungsi
- [ ] Notifikasi muncul saat tambah item

### 🛒 Cart System

#### Cart Badge
- [ ] Badge cart tampil di header
- [ ] Angka badge update saat tambah item
- [ ] Angka badge update saat hapus item
- [ ] Angka badge update saat ubah quantity

#### Cart Modal
- [ ] Modal cart terbuka saat klik icon cart
- [ ] Modal cart tertutup saat klik tombol close
- [ ] Modal cart tertutup saat klik overlay
- [ ] Empty state tampil saat cart kosong
- [ ] Cart items tampil saat ada item

#### Cart Items Display
- [ ] Nama kantin tampil sebagai section header
- [ ] Subtotal per kantin tampil
- [ ] Gambar item tampil
- [ ] Nama item tampil
- [ ] Harga item tampil
- [ ] Quantity tampil
- [ ] Button minus (-) berfungsi
- [ ] Button plus (+) berfungsi
- [ ] Button hapus (trash) berfungsi
- [ ] Item terhapus saat quantity = 0
- [ ] Total harga update otomatis

#### Order Notes
- [ ] Textarea catatan pesanan tampil
- [ ] Placeholder text tampil
- [ ] Input text berfungsi
- [ ] Catatan tersimpan saat checkout

#### Scheduling
- [ ] Button "Pesan Sekarang" aktif by default
- [ ] Button "Jadwalkan" berfungsi
- [ ] Date picker muncul saat pilih "Jadwalkan"
- [ ] Time picker muncul saat pilih "Jadwalkan"
- [ ] Date picker tersembunyi saat pilih "Pesan Sekarang"
- [ ] Minimum date = hari ini
- [ ] Validasi waktu tidak boleh di masa lalu
- [ ] Notifikasi error jika waktu tidak valid

### 💳 Payment System

#### Payment Modal
- [ ] Modal payment terbuka saat klik "Lanjut ke Pembayaran"
- [ ] Modal payment tidak terbuka jika cart kosong
- [ ] Notifikasi muncul jika cart kosong
- [ ] Modal tertutup saat klik tombol close
- [ ] Modal tertutup saat klik overlay

#### Order Summary
- [ ] Ringkasan pesanan tampil
- [ ] Nama kantin tampil
- [ ] Item dan quantity tampil
- [ ] Harga per item tampil
- [ ] Subtotal per kantin tampil
- [ ] Total pembayaran tampil dengan benar

#### Payment Method Selection
- [ ] 4 metode pembayaran tampil (QRIS, GoPay, OVO, DANA)
- [ ] QRIS aktif by default
- [ ] Klik metode pembayaran mengubah status aktif
- [ ] Logo payment method tampil
- [ ] Active state tampil dengan benar

#### QR Code
- [ ] QR Code generate otomatis
- [ ] QR Code tampil di modal
- [ ] QR Code berisi data order yang benar
- [ ] Placeholder QR tampil sebelum generate

#### Payment Instructions
- [ ] Instruksi pembayaran tampil
- [ ] 5 langkah pembayaran tampil dengan jelas

#### Countdown Timer
- [ ] Timer mulai dari 05:00
- [ ] Timer countdown berjalan
- [ ] Format timer MM:SS
- [ ] Modal tertutup saat timer habis
- [ ] Notifikasi muncul saat timer habis

#### Payment Success
- [ ] Success message tampil setelah 10 detik (demo)
- [ ] Order ID tampil
- [ ] Icon success tampil
- [ ] Modal tertutup setelah 3 detik
- [ ] Cart dikosongkan setelah sukses
- [ ] Notifikasi sukses tampil
- [ ] Order badge update

### 📦 Order Tracking (`order-tracking.html`)

#### Page Layout
- [ ] Header tampil dengan logo KantinQue
- [ ] Navigation links berfungsi
- [ ] Link "Beranda" ke index.html
- [ ] Link "Dashboard" ke merchant-dashboard.html
- [ ] Cart badge tampil dan update
- [ ] Order badge tampil dan update
- [ ] Footer tampil

#### Filter Tabs
- [ ] 4 filter tab tampil (Semua, Diproses, Siap Diambil, Selesai)
- [ ] Tab "Semua" aktif by default
- [ ] Klik tab mengubah filter
- [ ] Active state tampil dengan benar
- [ ] Hover effect berfungsi

#### Orders Display
- [ ] Orders tampil sesuai filter
- [ ] Empty state tampil jika tidak ada order
- [ ] Button "Pesan Sekarang" di empty state berfungsi
- [ ] Orders diurutkan dari terbaru

#### Order Card
- [ ] Order ID tampil
- [ ] Status badge tampil dengan warna yang benar:
  - Processing = Kuning
  - Ready = Hijau
  - Completed = Abu-abu
- [ ] Icon status tampil
- [ ] Waktu pemesanan tampil dengan format Indonesia
- [ ] Waktu pengambilan tampil (jika ada)
- [ ] Metode pembayaran tampil
- [ ] Badge metode pembayaran tampil
- [ ] Detail pesanan tampil
- [ ] Nama item dan quantity tampil
- [ ] Harga per item tampil
- [ ] Total harga tampil
- [ ] Catatan pesanan tampil (jika ada)
- [ ] Hover effect pada card berfungsi

#### Auto Refresh
- [ ] Orders auto-refresh setiap 5 detik
- [ ] Status update otomatis
- [ ] Badge update otomatis

### 📊 Merchant Dashboard (`merchant-dashboard.html`)

#### Dashboard Access
- [ ] Dashboard dapat diakses dari navigation
- [ ] Layout dashboard tampil dengan baik

#### Statistics
- [ ] Total orders tampil
- [ ] Total revenue tampil
- [ ] Active orders tampil
- [ ] Completed orders tampil

#### Order Management
- [ ] Daftar order tampil
- [ ] Filter order berfungsi
- [ ] Update status order berfungsi
- [ ] Order details tampil

### 💾 Data Persistence

#### LocalStorage
- [ ] Cart tersimpan di localStorage
- [ ] Orders tersimpan di localStorage
- [ ] Selected kantin tersimpan di localStorage
- [ ] Data persist setelah refresh
- [ ] Data persist setelah close browser

#### Data Loading
- [ ] Cart load saat page load
- [ ] Orders load saat page load
- [ ] Badge update saat load
- [ ] Selected kantin restore saat load

### 📱 Responsive Design

#### Mobile View (≤ 768px)
- [ ] Header responsive
- [ ] Navigation collapse/expand
- [ ] Hero section stack vertical
- [ ] Kantin grid menjadi 1 kolom
- [ ] Menu grid menjadi 1 kolom
- [ ] Cart modal responsive
- [ ] Payment modal responsive
- [ ] Order tracking responsive
- [ ] Filter tabs wrap dengan baik
- [ ] Order cards responsive

#### Desktop View (> 768px)
- [ ] Layout grid berfungsi
- [ ] Multi-column layout tampil
- [ ] Hover effects berfungsi
- [ ] Modal centered dengan baik

### 🎨 UI/UX

#### Animations
- [ ] Smooth scroll berfungsi
- [ ] Hover animations berfungsi
- [ ] Modal fade in/out
- [ ] Notification slide in/out
- [ ] Card hover transform
- [ ] Button hover effects

#### Colors & Themes
- [ ] Dark theme konsisten
- [ ] Gradient colors tampil
- [ ] Primary color (Orange) konsisten
- [ ] Text colors readable
- [ ] Background blur effects

#### Typography
- [ ] Font Poppins load
- [ ] Font Inter load
- [ ] Font sizes konsisten
- [ ] Font weights sesuai hierarchy
- [ ] Line heights readable

#### Icons
- [ ] Font Awesome icons load
- [ ] Icons tampil di semua tempat
- [ ] Icon sizes konsisten
- [ ] Icon colors sesuai context

### 🔧 Error Handling

#### Image Loading
- [ ] Placeholder tampil jika gambar error
- [ ] Alt text tampil
- [ ] No broken images

#### Form Validation
- [ ] Validasi tanggal berfungsi
- [ ] Validasi waktu berfungsi
- [ ] Error messages tampil
- [ ] Prevent submit jika invalid

#### Empty States
- [ ] Empty cart message
- [ ] Empty orders message
- [ ] No kantin selected message

### 🚀 Performance

#### Page Load
- [ ] Page load < 3 detik
- [ ] Images lazy load (jika diimplementasikan)
- [ ] No console errors
- [ ] No console warnings

#### Interactions
- [ ] Click responses instant
- [ ] Smooth animations (60fps)
- [ ] No lag saat scroll
- [ ] No lag saat type

### 🔐 Data Integrity

#### Order Data
- [ ] Order ID unique
- [ ] Timestamp correct
- [ ] Total amount calculated correctly
- [ ] Items data complete
- [ ] Status transitions correct

#### Cart Data
- [ ] Quantities accurate
- [ ] Prices accurate
- [ ] Totals calculated correctly
- [ ] Multi-kantin support works

---

## 📝 Test Results Template

```
Tested by: _______________
Date: _______________
Browser: _______________
Device: _______________

Issues Found:
1. _______________________
2. _______________________
3. _______________________

Notes:
_________________________
_________________________
```

---

## 🐛 Known Issues / Future Improvements

- [ ] Real payment gateway integration
- [ ] Real-time order updates (WebSocket)
- [ ] User authentication
- [ ] Order history export
- [ ] Print receipt functionality
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Promo codes / discounts
- [ ] Rating & review system
- [ ] Favorite items
- [ ] Search functionality
- [ ] Advanced filtering
- [ ] Analytics dashboard
- [ ] Email notifications

---

**Testing Status**: ⏳ Pending / ✅ Passed / ❌ Failed
