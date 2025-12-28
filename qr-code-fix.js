// QR Code Fix - Auto Generate with QRCode.js library
console.log('Loading QR code fix - Auto Generation...');

// Wait for page to load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyQRFix);
} else {
    applyQRFix();
}

function applyQRFix() {
    console.log('Applying QR code fix...');

    // Override generateQRIS
    window.generateQRIS = function () {
        console.log('=== generateQRIS AUTO GENERATE version ===');

        // Calculate total from multi-kantin cart object
        let total = 0;
        Object.values(cart).forEach(kantinCart => {
            total += kantinCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        });

        const orderData = `QRIS-KANTINQUE-${Date.now()}-${total}`;
        console.log('Order data:', orderData);

        const qrcodeElement = document.getElementById('qrcode');
        const placeholder = document.getElementById('qrPlaceholder');

        if (!qrcodeElement) {
            console.error('QR code element not found!');
            return;
        }

        // Clear previous QR code
        qrcodeElement.innerHTML = '';

        // Hide placeholder
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        // Check if QRCode library is available
        if (typeof QRCode !== 'undefined') {
            console.log('QRCode library found, generating...');
            try {
                // Generate QR code using library
                new QRCode(qrcodeElement, {
                    text: orderData,
                    width: 250,
                    height: 250,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });

                qrcodeElement.style.display = 'block';
                console.log('✓ QR code generated successfully!');
            } catch (error) {
                console.error('Error generating QR code:', error);
                showFallbackQR(qrcodeElement, total);
            }
        } else {
            console.warn('QRCode library not loaded, showing fallback');
            showFallbackQR(qrcodeElement, total);
        }
    };

    // Fallback QR display
    function showFallbackQR(element, total) {
        element.innerHTML = `
            <div style="text-align: center;">
                <div style="padding: 40px; background: #f0f0f0; border-radius: 8px; border: 2px dashed #999;">
                    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 10px;">
                        <i class="fas fa-qrcode" style="font-size: 60px; color: #FF6B35;"></i>
                    </div>
                    <p style="color: #333; font-size: 14px; font-weight: bold; margin-bottom: 5px;">QR Code QRIS</p>
                    <p style="color: #FF6B35; font-weight: bold; font-size: 20px; margin: 10px 0;">${formatCurrency(total)}</p>
                    <p style="color: #666; font-size: 11px; margin-top: 10px;">Scan untuk membayar</p>
                </div>
            </div>
        `;
        element.style.display = 'block';
    }

    console.log('✓ QR code fix applied (auto-generate mode)!');
}
