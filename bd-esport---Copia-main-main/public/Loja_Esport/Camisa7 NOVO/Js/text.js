let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpa os itens existentes
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <div class="quantity-controls">
                    <button class="quantity-button" onclick="changeQuantity('${item.name}', -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-button" onclick="changeQuantity('${item.name}', 1)">+</button>
                </div>
                <span class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                <button class="remove-item" onclick="removeItem('${item.name}')">✕</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });
    }

    document.querySelector('.total').textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    updateCartCount();
    updateTooltip();
}

function changeQuantity(itemName, change) {
    const item = cart.find(i => i.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(itemName);
        }
    }
    updateCartDisplay();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartDisplay();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    localStorage.removeItem('cart');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function updateTooltip() {
    const tooltip = document.getElementById('cart-tooltip');
    let content = '<h3>Itens no Carrinho:</h3>';
    cart.forEach(item => {
        content += `<div>${item.name} - ${item.quantity} x R$ ${item.price.toFixed(2).replace('.', ',')}</div>`;
    });
    content += `<div><strong>Total: ${document.querySelector('.total').textContent}</strong></div>`;
    tooltip.innerHTML = content;
}

window.onload = function() {
    updateCartDisplay();
};