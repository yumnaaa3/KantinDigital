// Merchant Dashboard JavaScript
let orders = [];

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
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Load orders
function loadOrders() {
    const savedOrders = localStorage.getItem('kantinque_orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

// Calculate total revenue
function calculateTotalRevenue() {
    return orders.reduce((total, order) => total + order.totalAmount, 0);
}

// Get best selling items
function getBestSellingItems() {
    const itemsCount = {};

    orders.forEach(order => {
        order.items.forEach(item => {
            const key = item.name;
            if (!itemsCount[key]) {
                itemsCount[key] = {
                    name: item.name,
                    count: 0,
                    revenue: 0
                };
            }
            itemsCount[key].count += item.quantity;
            itemsCount[key].revenue += item.price * item.quantity;
        });
    });

    return Object.values(itemsCount).sort((a, b) => b.count - a.count);
}

// Get peak hours
function getPeakHours() {
    const hoursCount = {};

    orders.forEach(order => {
        const hour = new Date(order.timestamp).getHours();
        if (!hoursCount[hour]) {
            hoursCount[hour] = 0;
        }
        hoursCount[hour]++;
    });

    return Object.entries(hoursCount)
        .map(([hour, count]) => ({
            hour: parseInt(hour),
            count: count
        }))
        .sort((a, b) => b.count - a.count);
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

// Get status info
function getStatusInfo(status) {
    const statusMap = {
        processing: { label: 'Diproses', class: 'processing' },
        ready: { label: 'Siap', class: 'ready' },
        completed: { label: 'Selesai', class: 'completed' }
    };
    return statusMap[status] || statusMap.processing;
}

// Update summary stats
function updateSummaryStats() {
    const totalRevenue = calculateTotalRevenue();
    const totalOrders = orders.length;
    const bestSelling = getBestSellingItems();
    const peakHours = getPeakHours();

    document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
    document.getElementById('totalOrders').textContent = totalOrders;

    if (bestSelling.length > 0) {
        document.getElementById('topItem').textContent = bestSelling[0].name;
        document.getElementById('topItemCount').textContent = `${bestSelling[0].count} terjual`;
    }

    if (peakHours.length > 0) {
        const peak = peakHours[0];
        document.getElementById('peakHour').textContent = `${peak.hour}:00 - ${peak.hour + 1}:00`;
        document.getElementById('peakHourCount').textContent = `${peak.count} pesanan`;
    }
}

// Render best selling chart
function renderBestSellingChart() {
    const container = document.getElementById('bestSellingChart');
    const bestSelling = getBestSellingItems().slice(0, 5); // Top 5

    if (bestSelling.length === 0) {
        container.innerHTML = '<div class="empty-dashboard"><i class="fas fa-chart-bar"></i><h3>Belum ada data</h3><p>Belum ada pesanan untuk ditampilkan</p></div>';
        return;
    }

    const maxCount = bestSelling[0].count;

    container.innerHTML = bestSelling.map(item => {
        const percentage = (item.count / maxCount) * 100;
        return `
            <div class="chart-bar">
                <div class="chart-label" title="${item.name}">${item.name}</div>
                <div class="chart-bar-container">
                    <div class="chart-bar-fill" style="width: ${percentage}%">
                        <span class="chart-value">${item.count}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Render peak hours chart
function renderPeakHoursChart() {
    const container = document.getElementById('peakHoursChart');
    const peakHours = getPeakHours().slice(0, 8); // Top 8 hours

    if (peakHours.length === 0) {
        container.innerHTML = '<div class="empty-dashboard"><i class="fas fa-chart-bar"></i><h3>Belum ada data</h3><p>Belum ada pesanan untuk ditampilkan</p></div>';
        return;
    }

    const maxCount = peakHours[0].count;

    container.innerHTML = peakHours.map(item => {
        const percentage = (item.count / maxCount) * 100;
        return `
            <div class="chart-bar">
                <div class="chart-label">${item.hour}:00 - ${item.hour + 1}:00</div>
                <div class="chart-bar-container">
                    <div class="chart-bar-fill" style="width: ${percentage}%">
                        <span class="chart-value">${item.count}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Render transaction table
function renderTransactionTable() {
    const tbody = document.getElementById('transactionBody');

    if (orders.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: var(--spacing-xl); color: var(--text-muted);">
                    <i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                    Belum ada transaksi
                </td>
            </tr>
        `;
        return;
    }

    // Sort by timestamp (newest first)
    const sortedOrders = [...orders].sort((a, b) => b.timestamp - a.timestamp);

    tbody.innerHTML = sortedOrders.map(order => {
        const statusInfo = getStatusInfo(order.status);
        const itemsText = order.items.length === 1
            ? order.items[0].name
            : `${order.items.length} items`;

        return `
            <tr>
                <td><strong>${order.orderId}</strong></td>
                <td>${formatDateTime(order.timestamp)}</td>
                <td>${itemsText}</td>
                <td><span class="payment-badge">${getPaymentMethodLabel(order.paymentMethod)}</span></td>
                <td><span class="status-badge ${statusInfo.class}">${statusInfo.label}</span></td>
                <td><strong>${formatCurrency(order.totalAmount)}</strong></td>
            </tr>
        `;
    }).join('');
}

// Render all analytics
function renderAnalytics() {
    updateSummaryStats();
    renderBestSellingChart();
    renderPeakHoursChart();
    renderTransactionTable();
}

// Initialize
function init() {
    loadOrders();
    renderAnalytics();

    // Refresh every 10 seconds
    setInterval(() => {
        loadOrders();
        renderAnalytics();
    }, 10000);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
