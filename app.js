// Kantin Data with Menus
const kantinData = [
    {
        id: 1,
        name: 'Kantin Bu Cicik',
        description: 'Spesialis ayam geprek dan makanan pedas',
        image: 'img/kantin bu cicik/Ayam Geprek.jpg',
        menu: [
            {
                id: 101,
                name: 'Ayam Geprek',
                category: 'Makanan',
                price: 16000,
                description: 'Ayam crispy dengan sambal geprek pedas mantap',
                image: 'img/kantin bu cicik/Ayam Geprek.jpg',
                isUnggulan: true
            },
            {
                id: 102,
                name: 'Nasi Goreng Pedas',
                category: 'Makanan',
                price: 15000,
                description: 'Nasi goreng dengan level pedas yang bisa disesuaikan',
                image: 'img/kantin bu cicik/Nasi Goreng.jpg',
                isUnggulan: true
            },
            {
                id: 103,
                name: 'Nasi Padang',
                category: 'Makanan',
                price: 17000,
                description: 'Nasi dengan lauk khas Padang pilihan',
                image: 'img/kantin bu cicik/nasi padang.jpg',
                isUnggulan: false
            },
            {
                id: 104,
                name: 'Soto Ayam',
                category: 'Makanan',
                price: 13000,
                description: 'Soto ayam kuning dengan soun dan telur',
                image: 'img/kantin bu cicik/Soto Ayam.jpg',
                isUnggulan: false
            },
            {
                id: 105,
                name: 'Es Teh Manis',
                category: 'Minuman',
                price: 5000,
                description: 'Es teh manis segar dengan es batu',
                image: 'img/kantin bu cicik/es teh.jpg',
                isUnggulan: false
            },
            {
                id: 106,
                name: 'Jus Jeruk',
                category: 'Minuman',
                price: 10000,
                description: 'Jus jeruk segar tanpa gula tambahan',
                image: 'img/kantin bu cicik/jus jeruk.jpg',
                isUnggulan: false
            }
        ]
    },
    {
        id: 2,
        name: 'Kantin Pak Budi',
        description: 'Bakso dan mie ayam paling enak',
        image: 'img/kantin pak budi/Bakso Solo.jpg',
        menu: [
            {
                id: 201,
                name: 'Bakso Solo',
                category: 'Makanan',
                price: 14000,
                description: 'Bakso sapi dengan kuah kaldu hangat, mie, dan sayuran',
                image: 'img/kantin pak budi/Bakso Solo.jpg',
                isUnggulan: true
            },
            {
                id: 202,
                name: 'Mie Ayam',
                category: 'Makanan',
                price: 12000,
                description: 'Mie ayam dengan pangsit goreng dan bakso',
                image: 'img/kantin pak budi/Mie Ayam.jpg',
                isUnggulan: true
            },
            {
                id: 203,
                name: 'Bakso Mercon',
                category: 'Makanan',
                price: 16000,
                description: 'Bakso pedas dengan level kepedasan yang bisa dipilih',
                image: 'img/kantin pak budi/Bakso Mercon.jpg',
                isUnggulan: false
            },
            {
                id: 204,
                name: 'Ayam Penyet',
                category: 'Makanan',
                price: 17000,
                description: 'Ayam goreng penyet dengan sambal terasi',
                image: 'img/kantin pak budi/Ayam Penyet Lamongan.jpg',
                isUnggulan: false
            },
            {
                id: 205,
                name: 'Kopi Susu',
                category: 'Minuman',
                price: 8000,
                description: 'Kopi susu manis hangat',
                image: 'img/kantin pak budi/kopi.jpg',
                isUnggulan: false
            },
            {
                id: 206,
                name: 'Coklat Susu',
                category: 'Minuman',
                price: 7000,
                description: 'Minuman coklat susu hangat',
                image: 'img/kantin pak budi/coklat susu.jpg',
                isUnggulan: false
            }
        ]
    },
    {
        id: 3,
        name: 'Kantin Mbok Sri',
        description: 'Masakan tradisional Jawa',
        image: 'img/kantin mbok sri/nasi kuning.jpg',
        menu: [
            {
                id: 301,
                name: 'Nasi Kuning',
                category: 'Makanan',
                price: 13000,
                description: 'Nasi kuning dengan lauk ayam, kentang balado dan sambal',
                image: 'img/kantin mbok sri/nasi kuning.jpg',
                isUnggulan: true
            },
            {
                id: 302,
                name: 'Nasi Bakar Tongkol',
                category: 'Makanan',
                price: 15000,
                description: 'Nasi bakar dengan isian tongkol suwir pedas',
                image: 'img/kantin mbok sri/Nasi Bakar Tongkol Suwir.jpg',
                isUnggulan: true
            },
            {
                id: 303,
                name: 'Sosis Bakar',
                category: 'Makanan',
                price: 12000,
                description: 'Sosis bakar dengan saus pedas manis',
                image: 'img/kantin mbok sri/Resep Sosis Bakar oleh Dada.jpg',
                isUnggulan: false
            },
            {
                id: 304,
                name: 'Risol Mayo',
                category: 'Snack',
                price: 8000,
                description: 'Risol isi sayuran dengan mayonnaise',
                image: 'img/kantin mbok sri/risol.jpg',
                isUnggulan: false
            },
            {
                id: 305,
                name: 'Strawberry Soda',
                category: 'Minuman',
                price: 10000,
                description: 'Minuman soda strawberry segar',
                image: 'img/kantin mbok sri/Strawberry Soda.jpg',
                isUnggulan: false
            },
            {
                id: 306,
                name: 'Matcha Latte',
                category: 'Minuman',
                price: 12000,
                description: 'Matcha latte dengan susu creamy',
                image: 'img/kantin mbok sri/matcha.jpg',
                isUnggulan: false
            }
        ]
    },
    {
        id: 4,
        name: 'Kantin Mas Hendra',
        description: 'Nasi rames dan masakan spesial',
        image: 'img/kantin mas hendra/rames.jpg',
        menu: [
            {
                id: 401,
                name: 'Nasi Rames',
                category: 'Makanan',
                price: 18000,
                description: 'Nasi dengan berbagai lauk pilihan lengkap',
                image: 'img/kantin mas hendra/rames.jpg',
                isUnggulan: true
            },
            {
                id: 402,
                name: 'Sate Ayam',
                category: 'Makanan',
                price: 16000,
                description: 'Sate ayam dengan bumbu kacang khas',
                image: 'img/kantin mas hendra/sate.jpg',
                isUnggulan: true
            },
            {
                id: 403,
                name: 'Batagor',
                category: 'Makanan',
                price: 14000,
                description: 'Batagor dengan bumbu kacang dan kecap manis',
                image: 'img/kantin mas hendra/Batagor.jpg',
                isUnggulan: false
            },
            {
                id: 404,
                name: 'Mie Gacoan',
                category: 'Makanan',
                price: 15000,
                description: 'Mie pedas dengan topping ayam dan sayuran',
                image: 'img/kantin mas hendra/mie gacoan.jpg',
                isUnggulan: false
            },
            {
                id: 405,
                name: 'Ikan Nila Goreng',
                category: 'Makanan',
                price: 20000,
                description: 'Ikan nila goreng dengan sambal',
                image: 'img/kantin mas hendra/ikan nila.jpg',
                isUnggulan: false
            },
            {
                id: 406,
                name: 'Bakwan Sayur',
                category: 'Snack',
                price: 8000,
                description: 'Bakwan sayuran crispy',
                image: 'img/kantin mas hendra/Bakwan Sayur.jpg',
                isUnggulan: false
            }
        ]
    },
    {
        id: 5,
        name: 'Kantin Cak Imin',
        description: 'Cemilan dan makanan ringan',
        image: 'img/kantin cak imin/seblak.jpg',
        menu: [
            {
                id: 501,
                name: 'Seblak Ceker',
                category: 'Makanan',
                price: 13000,
                description: 'Seblak pedas dengan ceker ayam',
                image: 'img/kantin cak imin/seblak.jpg',
                isUnggulan: true
            },
            {
                id: 502,
                name: 'Pempek Palembang',
                category: 'Makanan',
                price: 15000,
                description: 'Pempek kapal selam dengan cuko asli',
                image: 'img/kantin cak imin/pempek.jpg',
                isUnggulan: true
            },
            {
                id: 503,
                name: 'Opor Ayam',
                category: 'Makanan',
                price: 16000,
                description: 'Opor ayam dengan kuah santan gurih',
                image: 'img/kantin cak imin/opor.jpg',
                isUnggulan: false
            },
            {
                id: 504,
                name: 'Sop Buntut',
                category: 'Makanan',
                price: 25000,
                description: 'Sop buntut sapi dengan kuah bening',
                image: 'img/kantin cak imin/sop bubtut.jpg',
                isUnggulan: false
            },
            {
                id: 505,
                name: 'Martabak Telur',
                category: 'Snack',
                price: 12000,
                description: 'Martabak telur dengan kuah kari',
                image: 'img/kantin cak imin/martabak telur.jpg',
                isUnggulan: false
            },
            {
                id: 506,
                name: 'Sempol Ayam',
                category: 'Snack',
                price: 8000,
                description: 'Sempol ayam tusuk crispy',
                image: 'img/kantin cak imin/sempolan.jpg',
                isUnggulan: false
            }
        ]
    },
    {
        id: 6,
        name: 'Kantin Mbak Dewi',
        description: 'Aneka gorengan dan cemilan enak',
        image: 'img/kantin mbak dewi/perkedel.jpg',
        menu: [
            {
                id: 601,
                name: 'Ayam Betutu',
                category: 'Makanan',
                price: 20000,
                description: 'Ayam betutu dengan bumbu khas Bali',
                image: 'img/kantin mbak dewi/ayam betutu.jpg',
                isUnggulan: true
            },
            {
                id: 602,
                name: 'Bihun Goreng',
                category: 'Makanan',
                price: 12000,
                description: 'Bihun goreng dengan sayuran dan telur',
                image: 'img/kantin mbak dewi/bihun.jpg',
                isUnggulan: true
            },
            {
                id: 603,
                name: 'Baso Aci',
                category: 'Makanan',
                price: 10000,
                description: 'Baso aci kenyal dengan kuah pedas',
                image: 'img/kantin mbak dewi/baso aci.jpg',
                isUnggulan: false
            },
            {
                id: 604,
                name: 'Perkedel',
                category: 'Snack',
                price: 5000,
                description: 'Perkedel kentang crispy per pcs',
                image: 'img/kantin mbak dewi/perkedel.jpg',
                isUnggulan: false
            },
            {
                id: 605,
                name: 'Rujak Buah',
                category: 'Snack',
                price: 10000,
                description: 'Rujak buah dengan bumbu kacang',
                image: 'img/kantin mbak dewi/rujak.jpg',
                isUnggulan: false
            },
            {
                id: 606,
                name: 'Jus Jeruk',
                category: 'Minuman',
                price: 8000,
                description: 'Jus jeruk segar tanpa gula',
                image: 'img/kantin mbak dewi/jus jeruk.jpg',
                isUnggulan: false
            }
        ]
    }
];

// State Management
let selectedKantin = null;
let cart = {};
let scheduleType = 'now'; // 'now' or 'schedule'
let selectedPaymentMethod = 'qris'; // 'qris', 'gopay', 'ovo', 'dana'
let orders = []; // Array to store all orders

// Load state from localStorage
function loadState() {
    const savedKantin = localStorage.getItem('kantinque_selected_kantin');
    const savedCart = localStorage.getItem('kantinque_cart');
    const savedOrders = localStorage.getItem('kantinque_orders');

    if (savedKantin) {
        selectedKantin = JSON.parse(savedKantin);
    }

    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartBadge();
    }

    if (savedOrders) {
        orders = JSON.parse(savedOrders);
        updateOrderBadge();
    }
}

// Save state to localStorage
function saveState() {
    if (selectedKantin) {
        localStorage.setItem('kantinque_selected_kantin', JSON.stringify(selectedKantin));
    }
    localStorage.setItem('kantinque_cart', JSON.stringify(cart));
    localStorage.setItem('kantinque_orders', JSON.stringify(orders));
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Render kantin list
function renderKantinList() {
    const container = document.getElementById('kantinGrid');
    if (!container) return;

    container.innerHTML = kantinData.map(kantin => `
        <div class="kantin-card ${selectedKantin && selectedKantin.id === kantin.id ? 'active' : ''}" 
             data-kantin-id="${kantin.id}"
             onclick="selectKantin(${kantin.id})">
            <div class="kantin-card-image">
                <img src="${kantin.image}" alt="${kantin.name}" onerror="this.src='https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=${encodeURIComponent(kantin.name)}'">
                ${selectedKantin && selectedKantin.id === kantin.id ? '<div class="kantin-badge"><i class="fas fa-check-circle"></i> Dipilih</div>' : ''}
            </div>
            <div class="kantin-card-content">
                <h3 class="kantin-card-name">${kantin.name}</h3>
                <p class="kantin-card-description">${kantin.description}</p>
                <div class="kantin-card-footer">
                    <span class="kantin-menu-count"><i class="fas fa-utensils"></i> ${kantin.menu.length} Menu</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    `).join('');
}

// Select kantin
function selectKantin(kantinId) {
    const kantin = kantinData.find(k => k.id === kantinId);
    if (!kantin) return;

    selectedKantin = kantin;
    saveState();

    renderKantinList();
    renderMenu();

    // Scroll to menu section
    document.getElementById('menuSection').scrollIntoView({ behavior: 'smooth' });

    showNotification(`${kantin.name} dipilih! Silakan pilih menu.`);
}

// Render menu items
function renderMenu() {
    const container = document.getElementById('menuGrid');
    const menuSection = document.getElementById('menuSection');

    if (!container || !menuSection) return;

    if (!selectedKantin) {
        menuSection.style.display = 'none';
        return;
    }

    menuSection.style.display = 'block';

    // Update section title
    const sectionTitle = document.querySelector('#menuSection .section-title');
    if (sectionTitle) {
        sectionTitle.innerHTML = `<i class="fas fa-utensils"></i> Menu ${selectedKantin.name}`;
    }

    container.innerHTML = selectedKantin.menu.map(item => `
        <div class="menu-item" data-id="${item.id}">
            ${item.isUnggulan ? `
                <div class="menu-item-badge">
                    <i class="fas fa-star"></i>
                    Unggulan
                </div>
            ` : ''}
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=${encodeURIComponent(item.name)}'">
            <div class="menu-item-content">
                <div class="menu-item-category">${item.category}</div>
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <div class="menu-item-price">${formatCurrency(item.price)}</div>
                    <button class="btn-add-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                        Tambah
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(itemId) {
    if (!selectedKantin) {
        showNotification('Pilih kantin terlebih dahulu!');
        return;
    }

    const item = selectedKantin.menu.find(m => m.id === itemId);
    if (!item) return;

    const kantinId = selectedKantin.id;

    // Initialize cart for this kantin if not exists
    if (!cart[kantinId]) {
        cart[kantinId] = {
            kantinName: selectedKantin.name,
            items: []
        };
    }

    const existingItem = cart[kantinId].items.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart[kantinId].items.push({
            ...item,
            quantity: 1
        });
    }

    saveState();
    updateCartBadge();

    showNotification('Item ditambahkan ke keranjang!');
}

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    let totalItems = 0;

    Object.values(cart).forEach(kantinCart => {
        totalItems += kantinCart.items.reduce((sum, item) => sum + item.quantity, 0);
    });

    badge.textContent = totalItems;
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const totalPriceElement = document.getElementById('totalPrice');

    const hasItems = Object.keys(cart).length > 0 &&
        Object.values(cart).some(k => k.items.length > 0);

    if (!hasItems) {
        cartItemsContainer.style.display = 'none';
        cartEmpty.style.display = 'block';
        totalPriceElement.textContent = formatCurrency(0);
        return;
    }

    cartItemsContainer.style.display = 'block';
    cartEmpty.style.display = 'none';

    let totalPrice = 0;
    let cartHTML = '';

    Object.entries(cart).forEach(([kantinId, kantinCart]) => {
        if (kantinCart.items.length === 0) return;

        const kantinTotal = kantinCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice += kantinTotal;

        cartHTML += `
            <div class="cart-kantin-section">
                <div class="cart-kantin-header">
                    <i class="fas fa-store"></i>
                    <span>${kantinCart.kantinName}</span>
                    <span class="cart-kantin-total">${formatCurrency(kantinTotal)}</span>
                </div>
                ${kantinCart.items.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80/FF6B35/FFFFFF?text=${encodeURIComponent(item.name)}'">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${formatCurrency(item.price)}</div>
                            <div class="cart-item-actions">
                                <button class="qty-btn" onclick="updateQuantity(${kantinId}, ${item.id}, -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="qty-value">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity(${kantinId}, ${item.id}, 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                                <button class="btn-remove" onclick="removeFromCart(${kantinId}, ${item.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    });

    cartItemsContainer.innerHTML = cartHTML;
    totalPriceElement.textContent = formatCurrency(totalPrice);
}

// Update quantity
function updateQuantity(kantinId, itemId, change) {
    if (!cart[kantinId]) return;

    const item = cart[kantinId].items.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(kantinId, itemId);
        return;
    }

    saveState();
    updateCartBadge();
    renderCart();
}

// Remove from cart
function removeFromCart(kantinId, itemId) {
    if (!cart[kantinId]) return;

    cart[kantinId].items = cart[kantinId].items.filter(i => i.id !== itemId);

    // Remove kantin from cart if no items left
    if (cart[kantinId].items.length === 0) {
        delete cart[kantinId];
    }

    saveState();
    updateCartBadge();
    renderCart();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Select schedule type (now or scheduled)
function selectScheduleType(type) {
    scheduleType = type;
    const btnOrderNow = document.getElementById('btnOrderNow');
    const btnSchedule = document.getElementById('btnSchedule');
    const schedulePicker = document.getElementById('schedulePicker');

    if (type === 'now') {
        btnOrderNow.classList.add('active');
        btnSchedule.classList.remove('active');
        schedulePicker.style.display = 'none';
    } else {
        btnOrderNow.classList.remove('active');
        btnSchedule.classList.add('active');
        schedulePicker.style.display = 'block';

        // Set minimum date to today
        const dateInput = document.getElementById('scheduleDate');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        if (!dateInput.value) {
            dateInput.value = today;
        }
    }
}

// Select payment method
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    const cards = document.querySelectorAll('.payment-method-card');
    cards.forEach(card => {
        if (card.dataset.method === method) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Update order badge
function updateOrderBadge() {
    const badge = document.getElementById('orderBadge');
    if (badge) {
        const activeOrders = orders.filter(o => o.status !== 'completed').length;
        badge.textContent = activeOrders;
    }
}

// Generate unique order ID
function generateOrderId() {
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
    const timeStr = date.getTime().toString().slice(-6);
    return `ORD-${dateStr}-${timeStr}`;
}

// Create order from cart
function createOrder() {
    const orderNotes = document.getElementById('orderNotes').value.trim();
    let scheduledPickupTime = null;

    if (scheduleType === 'schedule') {
        const scheduleDate = document.getElementById('scheduleDate').value;
        const scheduleTime = document.getElementById('scheduleTime').value;

        if (!scheduleDate || !scheduleTime) {
            showNotification('Silakan pilih tanggal dan jam pengambilan!');
            return null;
        }

        scheduledPickupTime = new Date(`${scheduleDate}T${scheduleTime}`).getTime();

        // Validate not in the past
        if (scheduledPickupTime < Date.now()) {
            showNotification('Waktu pengambilan tidak boleh di masa lalu!');
            return null;
        }
    }

    let totalAmount = 0;
    const orderItems = [];

    Object.entries(cart).forEach(([kantinId, kantinCart]) => {
        kantinCart.items.forEach(item => {
            totalAmount += item.price * item.quantity;
            orderItems.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                kantinId: parseInt(kantinId),
                kantinName: kantinCart.kantinName
            });
        });
    });

    const order = {
        orderId: generateOrderId(),
        timestamp: Date.now(),
        scheduledPickupTime: scheduledPickupTime,
        orderNotes: orderNotes || null,
        paymentMethod: selectedPaymentMethod,
        status: 'processing', // 'processing', 'ready', 'completed'
        items: orderItems,
        totalAmount: totalAmount,
        kantinData: cart
    };

    return order;
}

// Generate QRIS code is handled by qr-code-fix.js to prevent conflicts

// Render order summary
function renderOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    let summaryHTML = '';
    let totalPrice = 0;

    Object.entries(cart).forEach(([kantinId, kantinCart]) => {
        const kantinTotal = kantinCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice += kantinTotal;

        summaryHTML += `
            <div class="order-kantin-section">
                <h5><i class="fas fa-store"></i> ${kantinCart.kantinName}</h5>
                ${kantinCart.items.map(item => `
                    <div class="summary-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>${formatCurrency(item.price * item.quantity)}</span>
                    </div>
                `).join('')}
                <div class="summary-item summary-subtotal">
                    <span>Subtotal ${kantinCart.kantinName}:</span>
                    <span>${formatCurrency(kantinTotal)}</span>
                </div>
            </div>
        `;
    });

    orderSummary.innerHTML = `
        <h4><i class="fas fa-receipt"></i> Ringkasan Pesanan</h4>
        ${summaryHTML}
        <div class="summary-item summary-total">
            <span>Total Pembayaran:</span>
            <span>${formatCurrency(totalPrice)}</span>
        </div>
    `;
}

// Simulate order status progression (for demo)
function simulateOrderProgress(orderId) {
    // After 30 seconds, set to "ready"
    setTimeout(() => {
        const order = orders.find(o => o.orderId === orderId);
        if (order && order.status === 'processing') {
            order.status = 'ready';
            saveState();
            updateOrderBadge();
        }
    }, 30000);

    // After 2 minutes, set to "completed"
    setTimeout(() => {
        const order = orders.find(o => o.orderId === orderId);
        if (order && order.status === 'ready') {
            order.status = 'completed';
            saveState();
            updateOrderBadge();
        }
    }, 120000);
}

// Start countdown timer
function startCountdown() {
    let timeLeft = 300; // 5 minutes
    const countdownElement = document.getElementById('countdown');

    const timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showNotification('Waktu pembayaran habis. Silakan coba lagi.');
            closeQRISModal();
        }

        timeLeft--;
    }, 1000);

    return timer;
}

// Modal functions
function openCartModal() {
    renderCart();
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = '';
}

function openQRISModal() {
    console.log('>>> openQRISModal called <<<');

    try {
        console.log('Checking cart...', cart);

        const hasItems = Object.keys(cart).length > 0 &&
            Object.values(cart).some(k => k.items && k.items.length > 0);

        console.log('Has items:', hasItems);

        if (!hasItems) {
            console.log('Cart is empty, showing notification');
            showNotification('Keranjang masih kosong!');
            return;
        }

        console.log('Rendering order summary...');
        renderOrderSummary();

        console.log('Generating QR code...');
        generateQRIS();

        console.log('Opening QRIS modal...');
        const qrisModal = document.getElementById('qrisModal');
        console.log('QRIS Modal element:', qrisModal);

        if (qrisModal) {
            qrisModal.classList.add('active');
            console.log('Modal class added');
        } else {
            console.error('QRIS Modal element not found!');
            return;
        }

        console.log('Closing cart modal...');
        closeCartModal();

        console.log('Starting countdown...');
        const timer = startCountdown();

        // Simulate payment success after 10 seconds (for demo)
        setTimeout(() => {
            console.log('Simulating payment success...');
            clearInterval(timer);
            showPaymentSuccess();
        }, 10000);

        console.log('>>> openQRISModal completed successfully <<<');
    } catch (error) {
        console.error('ERROR in openQRISModal:', error);
        console.error('Error stack:', error.stack);
        showNotification('Terjadi kesalahan! Silakan coba lagi.');
    }
}

function closeQRISModal() {
    document.getElementById('qrisModal').classList.remove('active');
    document.body.style.overflow = '';
}

function showPaymentSuccess() {
    const paymentStatus = document.getElementById('paymentStatus');

    // Create and save order
    const order = createOrder();
    if (order) {
        orders.push(order);
        saveState();
        updateOrderBadge();

        paymentStatus.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: rgba(76, 175, 80, 0.1); border-radius: 12px; border: 1px solid rgba(76, 175, 80, 0.3);">
                <i class="fas fa-check-circle" style="font-size: 4rem; color: #4CAF50; margin-bottom: 1rem;"></i>
                <h3 style="color: #4CAF50; margin-bottom: 0.5rem;">Pembayaran Berhasil!</h3>
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">Order ID: <strong>${order.orderId}</strong></p>
                <p style="color: var(--text-secondary);">Pesanan Anda sedang diproses</p>
            </div>
        `;

        setTimeout(() => {
            closeQRISModal();
            cart = {};
            scheduleType = 'now';
            selectedPaymentMethod = 'qris';
            document.getElementById('orderNotes').value = '';
            saveState();
            updateCartBadge();
            showNotification(`Pesanan ${order.orderId} berhasil! Cek status di halaman Pesanan.`);

            // Simulate order status progression
            simulateOrderProgress(order.orderId);
        }, 3000);
    }
}

// Initialize app
function initApp() {
    loadState();
    renderKantinList();
    renderMenu();

    // Cart button
    document.getElementById('btnCart').addEventListener('click', openCartModal);

    // Close cart modal
    document.getElementById('btnCloseCart').addEventListener('click', closeCartModal);
    document.getElementById('modalOverlay').addEventListener('click', closeCartModal);

    // Checkout button
    const checkoutBtn = document.getElementById('btnCheckout');
    console.log('Checkout button element:', checkoutBtn);
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function (e) {
            console.log('>>> CHECKOUT BUTTON CLICKED <<<');
            console.log('Event:', e);
            openQRISModal();
        });
        console.log('✓ Checkout button listener attached');
    } else {
        console.error('✗ Checkout button NOT FOUND!');
    }

    // Close QRIS modal
    document.getElementById('btnCloseQris').addEventListener('click', closeQRISModal);
    document.getElementById('qrisOverlay').addEventListener('click', closeQRISModal);

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
