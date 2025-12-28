# 🍽️ KantinQue - Platform Pemesanan Kantin Digital

Platform pemesanan makanan dan minuman dengan sistem pembayaran QRIS yang modern dan user-friendly.

## ✨ Fitur Utama

### 1. **Multi-Kantin System** 🏪
- 6 kantin berbeda dengan menu spesial masing-masing:
  - **Kantin Bu Cicik** - Spesialis ayam geprek dan makanan pedas
  - **Kantin Pak Budi** - Bakso dan mie ayam paling enak
  - **Kantin Mbok Sri** - Masakan tradisional Jawa
  - **Kantin Mas Hendra** - Nasi rames dan masakan spesial
  - **Kantin Cak Imin** - Cemilan dan makanan ringan
  - **Kantin Mbak Dewi** - Aneka gorengan dan cemilan enak

### 2. **Order Tracking System** 📦
- Real-time status tracking pesanan
- 3 status pesanan:
  - **Diproses** (Processing) - Pesanan sedang disiapkan
  - **Siap Diambil** (Ready) - Pesanan siap untuk diambil
  - **Selesai** (Completed) - Pesanan sudah selesai
- Filter pesanan berdasarkan status
- Auto-refresh setiap 5 detik

### 3. **Payment Integration** 💳
- **QRIS** - Universal QR Code untuk semua e-wallet
- **GoPay** - Pembayaran via GoPay
- **OVO** - Pembayaran via OVO
- **DANA** - Pembayaran via DANA
- QR Code generator otomatis
- Countdown timer 5 menit untuk pembayaran
- Simulasi pembayaran sukses (demo mode)

### 4. **Pre-Order Scheduling** ⏰
- Pilihan "Pesan Sekarang" atau "Jadwalkan"
- Date picker untuk memilih tanggal pengambilan
- Time picker dengan jam operasional 07:00 - 17:00
- Validasi waktu tidak boleh di masa lalu

### 5. **Order Notes** 📝
- Catatan pesanan opsional
- Contoh: "Extra pedas", "Tanpa bawang", dll
- Ditampilkan di order tracking

### 6. **Merchant Dashboard** 📊
- Dashboard untuk merchant/penjual
- Statistik penjualan
- Manajemen pesanan
- (File: `merchant-dashboard.html`, `merchant-dashboard.js`, `merchant-dashboard.css`)

## 📁 Struktur File

```
kantin/
├── index.html              # Halaman utama
├── app.js                  # Main application logic
├── style.css               # Main stylesheet
├── order-tracking.html     # Halaman tracking pesanan
├── order-tracking.js       # Order tracking logic
├── order-tracking.css      # Order tracking styles
├── merchant-dashboard.html # Dashboard merchant
├── merchant-dashboard.js   # Dashboard logic
├── merchant-dashboard.css  # Dashboard styles
├── qr-code-fix.js         # QR Code generator
├── debug.js               # Debug utilities
└── img/                   # Folder gambar menu
    ├── kantin bu cicik/
    ├── kantin pak budi/
    ├── kantin mbok sri/
    ├── kantin mas hendra/
    ├── kantin cak imin/
    └── kantin mbak dewi/
```

## 🚀 Cara Menggunakan

### Untuk Customer:

1. **Pilih Kantin**
   - Scroll ke bagian "Pilih Kantin"
   - Klik salah satu kantin yang diinginkan

2. **Pilih Menu**
   - Browse menu yang tersedia
   - Klik tombol "Tambah" untuk menambahkan ke keranjang
   - Menu unggulan ditandai dengan badge ⭐

3. **Checkout**
   - Klik icon keranjang di header
   - Review pesanan Anda
   - Tambahkan catatan pesanan (opsional)
   - Pilih waktu pengambilan:
     - **Pesan Sekarang** - Langsung diproses
     - **Jadwalkan** - Pilih tanggal dan jam pengambilan

4. **Pembayaran**
   - Klik "Lanjut ke Pembayaran"
   - Pilih metode pembayaran (QRIS/GoPay/OVO/DANA)
   - Scan QR Code dengan aplikasi e-wallet
   - Tunggu konfirmasi pembayaran

5. **Tracking Pesanan**
   - Klik icon "Pesanan" di header
   - Lihat status pesanan real-time
   - Filter berdasarkan status

### Untuk Merchant:

1. **Akses Dashboard**
   - Klik "Dashboard" di header
   - Lihat statistik penjualan
   - Kelola pesanan masuk

## 💾 Data Storage

Aplikasi menggunakan **localStorage** untuk menyimpan:
- `kantinque_cart` - Data keranjang belanja
- `kantinque_orders` - Data pesanan
- `kantinque_selected_kantin` - Kantin yang dipilih

## 🎨 Design Features

- **Modern UI/UX** dengan glassmorphism effect
- **Responsive Design** - Mobile friendly
- **Dark Theme** dengan gradient colors
- **Smooth Animations** dan transitions
- **Interactive Elements** dengan hover effects
- **Premium Look** dengan vibrant colors

## 🔧 Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling dengan modern features
- **Vanilla JavaScript** - No framework dependencies
- **QRCode.js** - QR Code generation
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins & Inter)

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Mobile: ≤ 768px

## 🎯 Key Functions

### Cart Management
```javascript
addToCart(itemId)           // Tambah item ke keranjang
updateQuantity(kantinId, itemId, change)  // Update jumlah item
removeFromCart(kantinId, itemId)          // Hapus item
```

### Order Management
```javascript
createOrder()               // Buat order baru
generateOrderId()           // Generate unique order ID
simulateOrderProgress()     // Simulasi progress order (demo)
```

### Payment
```javascript
selectPaymentMethod(method) // Pilih metode pembayaran
generateQRIS()             // Generate QR Code
showPaymentSuccess()       // Tampilkan sukses pembayaran
```

### Scheduling
```javascript
selectScheduleType(type)   // Pilih 'now' atau 'schedule'
```

## 🔄 Order Status Flow

```
Processing (Diproses)
    ↓ (30 detik - demo)
Ready (Siap Diambil)
    ↓ (2 menit - demo)
Completed (Selesai)
```

## 🌟 Menu Categories

- **Makanan** - Main dishes
- **Minuman** - Beverages
- **Snack** - Snacks and light bites

## 📞 Contact

WhatsApp: +62 896-8109-3158

## 📄 License

© 2025 KantinQue. All rights reserved.

---

## 🐛 Troubleshooting

### QR Code tidak muncul?
- Pastikan library QRCode.js sudah loaded
- Check console untuk error messages
- Refresh halaman

### Pesanan tidak tersimpan?
- Check localStorage browser
- Pastikan browser mendukung localStorage
- Clear cache dan coba lagi

### Badge tidak update?
- Refresh halaman
- Check fungsi `updateCartBadge()` dan `updateOrderBadge()`

---

**Developed with ❤️ for better canteen experience**
