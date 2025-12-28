// Debug helper untuk troubleshoot checkout button
console.log('%c=== KANTIN DEBUG HELPER ===', 'color: #FF6B35; font-weight: bold; font-size: 16px;');

// Test 1: Check if cart exists and has proper structure
setTimeout(() => {
    console.log('%c1. Checking cart structure...', 'color: #4CAF50; font-weight: bold;');
    console.log('Cart object:', cart);
    console.log('Cart keys:', Object.keys(cart));

    // Check if cart has items
    const hasItems = Object.keys(cart).length > 0 &&
        Object.values(cart).some(k => k.items && k.items.length > 0);
    console.log('Has items:', hasItems);

    if (hasItems) {
        console.log('✓ Cart has items');
        Object.entries(cart).forEach(([kantinId, kantinCart]) => {
            console.log(`  - Kantin ${kantinCart.kantinName}: ${kantinCart.items.length} items`);
        });
    } else {
        console.log('✗ Cart is empty');
    }
}, 1000);

// Test 2: Test checkout button
setTimeout(() => {
    console.log('%c2. Testing checkout button...', 'color: #4CAF50; font-weight: bold;');
    const checkoutBtn = document.getElementById('btnCheckout');
    console.log('Checkout button:', checkoutBtn);

    if (checkoutBtn) {
        console.log('✓ Checkout button found');
        console.log('  - onclick:', checkoutBtn.onclick);
        console.log('  - disabled:', checkoutBtn.disabled);

        // Add test click handler
        checkoutBtn.addEventListener('click', function (e) {
            console.log('%c>>> CHECKOUT CLICKED <<<', 'background: #FF6B35; color: white; padding: 5px;');
            console.log('Event:', e);
            console.log('Calling openQRISModal()...');
        });
    } else {
        console.log('✗ Checkout button NOT found!');
    }
}, 1500);

// Test 3: Check modal elements
setTimeout(() => {
    console.log('%c3. Checking modal elements...', 'color: #4CAF50; font-weight: bold;');
    const qrisModal = document.getElementById('qrisModal');
    const qrcode = document.getElementById('qrcode');
    const orderSummary = document.getElementById('orderSummary');

    console.log('QRIS Modal:', qrisModal);
    console.log('QRCode element:', qrcode);
    console.log('Order Summary:', orderSummary);

    if (qrisModal && qrcode && orderSummary) {
        console.log('✓ All modal elements found');
    } else {
        console.log('✗ Some modal elements missing!');
    }
}, 2000);

// Test 4: Test functions
setTimeout(() => {
    console.log('%c4. Testing functions...', 'color: #4CAF50; font-weight: bold;');
    console.log('renderOrderSummary:', typeof renderOrderSummary);
    console.log('generateQRIS:', typeof generateQRIS);
    console.log('openQRISModal:', typeof openQRISModal);
    console.log('formatCurrency:', typeof formatCurrency);

    // Try to manually trigger checkout
    console.log('%cTo manually test checkout, run: openQRISModal()', 'color: #FF6B35; background: #FFF3E0; padding: 5px;');
}, 2500);

console.log('%c=== Debug helper loaded. Check logs above ===', 'color: #FF6B35; font-weight: bold;');
