// Order Tracking JavaScript
let orders = [];
let currentFilter = 'all';

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Format date time
function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Load orders from localStorage
function loadOrders() {
    const savedOrders = localStorage.getItem('kantinque_orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

// Get status info
function getStatusInfo(status) {
    const statusMap = {
        processing: {
            label: 'Diproses',
            icon: 'fa-clock',
            class: 'processing'
        },
        ready: {
            label: 'Siap Diambil',
            icon: 'fa-check-circle',
            class: 'ready'
        },
        completed: {
            label: 'Selesai',
            icon: 'fa-archive',
            class: 'completed'
        }
    };
    return statusMap[status] || statusMap.processing;
}

// Get payment method label
function getPaymentMethodLabel(method) {
    const methodMap = {
        qris: 'QRIS',
        gopay: 'GoPay',
        ovo: 'OVO',
        dana: 'DANA'
    };
    return methodMap[method] || 'QRIS';
}

// Filter orders
function filterOrders(filter) {
    currentFilter = filter;

    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.filter-tab').classList.add('active');

    renderOrders();
}

// Render orders
function renderOrders() {
    const container = document.getElementById('ordersContainer');
    const emptyState = document.getElementById('emptyState');

    // Filter orders based on current filter
    let filteredOrders = orders;
    if (currentFilter !== 'all') {
        filteredOrders = orders.filter(o => o.status === currentFilter);
    }

    // Sort by timestamp (newest first)
    filteredOrders.sort((a, b) => b.timestamp - a.timestamp);

    if (filteredOrders.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    container.style.display = 'flex';
    emptyState.style.display = 'none';

    container.innerHTML = filteredOrders.map(order => {
        const statusInfo = getStatusInfo(order.status);

        return `
            <div class="order-card">
                <div class="order-header">
                    <div class="order-id">
                        <i class="fas fa-receipt"></i>
                        ${order.orderId}
                    </div>
                    <div class="order-status ${statusInfo.class}">
                        <i class="fas ${statusInfo.icon}"></i>
                        ${statusInfo.label}
                    </div>
                </div>
                <div class="order-body">
                    <div class="order-info">
                        <div class="info-item">
                            <div class="info-label">
                                <i class="fas fa-calendar"></i>
                                Waktu Pemesanan
                            </div>
                            <div class="info-value">${formatDateTime(order.timestamp)}</div>
                        </div>
                        ${order.scheduledPickupTime ? `
                            <div class="info-item">
                                <div class="info-label">
                                    <i class="fas fa-clock"></i>
                                    Waktu Pengambilan
                                </div>
                                <div class="info-value">${formatDateTime(order.scheduledPickupTime)}</div>
                            </div>
                        ` : ''}
                        <div class="info-item">
                            <div class="info-label">
                                <i class="fas fa-credit-card"></i>
                                Metode Pembayaran
                            </div>
                            <div class="info-value">
                                <span class="payment-method-badge">
                                    <i class="fas fa-check-circle"></i>
                                    ${getPaymentMethodLabel(order.paymentMethod)}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-items">
                        <h4>
                            <i class="fas fa-utensils"></i>
                            Detail Pesanan
                        </h4>
                        <div class="item-list">
                            ${order.items.map(item => `
                                <div class="item-row">
                                    <span class="item-name">${item.name} x${item.quantity}</span>
                                    <span class="item-price">${formatCurrency(item.price * item.quantity)}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="order-total">
                            <span class="total-label">Total:</span>
                            <span class="total-amount">${formatCurrency(order.totalAmount)}</span>
                        </div>
                    </div>
                    
                    ${order.orderNotes ? `
                        <div class="order-notes">
                            <i class="fas fa-sticky-note"></i>
                            ${order.orderNotes}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Update cart badge
function updateCartBadge() {
    const savedCart = localStorage.getItem('kantinque_cart');
    const badge = document.getElementById('cartBadge');

    if (savedCart && badge) {
        const cart = JSON.parse(savedCart);
        let totalItems = 0;
        Object.values(cart).forEach(kantinCart => {
            totalItems += kantinCart.items.reduce((sum, item) => sum + item.quantity, 0);
        });
        badge.textContent = totalItems;
    }
}

// Initialize
function init() {
    loadOrders();
    renderOrders();
    updateCartBadge();

    // Refresh orders every 5 seconds to catch status updates
    setInterval(() => {
        loadOrders();
        renderOrders();
    }, 5000);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
