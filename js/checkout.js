var cart = [];

function addToCart(productName, price, quantityId) {
    var quantity = parseInt(document.getElementById(quantityId).value);

    // Cek apakah quantity valid
    if (quantity < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Jumlah tidak valid',
            text: 'Jumlah produk tidak boleh kurang dari 1!',
        });
        return;
    }

    var existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: quantity
        });
    }

    updateCartDisplay();

    // SweetAlert setelah berhasil menambahkan ke keranjang
    Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: productName + ' telah ditambahkan ke keranjang!',
        showConfirmButton: false,
        timer: 1500
    });
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    var cartItemsContainer = document.getElementById('cart-items');
    const totalHargaContainer = document.getElementById('total-harga');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = 'Keranjang kosong';
        totalHargaContainer.textContent = 'Total Harga: Rp 0';
        return;
    }

    var cartHtml = '<ul style="list-style-type: none; padding-left: 0;">';
    cart.forEach(function (item, index) {
        cartHtml += `
            <li class="font-weight-bold" style="margin-bottom: 15px;">
            ${item.name} - Jumlah: ${item.quantity} - Harga: Rp ${item.price.toLocaleString()} 
            <button onclick="removeFromCart(${index})" class="ml-2 justify-content-center btn btn btn-danger btn-sm">Hapus</button>
        </li>
        `;
    });
    cartHtml += '</ul>';

    cartItemsContainer.innerHTML = cartHtml;
    const totalHarga = calculateTotal();
    totalHargaContainer.textContent = `Total Harga: Rp ${totalHarga.toLocaleString()}`;
}

function checkout() {
    if (cart.length === 0) {
        // SweetAlert untuk keranjang kosong
        Swal.fire({
            icon: 'error',
            title: 'Keranjang Kosong',
            text: 'Keranjang Anda masih kosong, silakan tambahkan produk terlebih dahulu!',
        });
        return;
    }

    var message = `Halo, saya ingin memesan produk berikut:\n\n`;

    var total = 0;
    cart.forEach(function (item, index) {
        var itemTotal = item.price * item.quantity;
        message += `${index + 1}. ${item.name}\n`;
        message += `   Jumlah: ${item.quantity}\n`;
        message += `   Harga per unit: Rp ${item.price.toLocaleString()}\n`;
        message += `   Total: Rp ${itemTotal.toLocaleString()}\n\n`;
        total += itemTotal;
    });

    message += `Total keseluruhan: Rp ${total.toLocaleString()}\n\n`;
    message += `Terima kasih.`;

    var phoneNumber = "+6285331048542";
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}