// Sistema completo de carrito de compras

let cart = [];

// Inicializar carrito desde localStorage
function initCart() {
    cart = CartStorage.getCartFromStorage();
    updateCartUI();
}

// Agregar producto al carrito
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    
    if (!product) {
        showNotification('Producto no encontrado', 'error');
        return false;
    }

    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Actualizar cantidad
        existingItem.quantity += quantity;
        if (existingItem.quantity > product.stock) {
            existingItem.quantity = product.stock;
            showNotification('No hay más stock disponible', 'warning');
        }
    } else {
        // Agregar nuevo item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity > product.stock ? product.stock : quantity,
            stock: product.stock
        });
    }

    // Guardar en localStorage
    CartStorage.saveCartToStorage(cart);
    updateCartUI();
    showNotification(`${product.name} agregado al carrito`, 'success');
    
    return true;
}

// Remover producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    CartStorage.saveCartToStorage(cart);
    updateCartUI();
    showNotification('Producto eliminado del carrito', 'info');
}

// Actualizar cantidad de un producto
function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    
    if (!item) return false;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return true;
    }
    
    if (newQuantity > item.stock) {
        newQuantity = item.stock;
        showNotification('No hay más stock disponible', 'warning');
    }
    
    item.quantity = newQuantity;
    CartStorage.saveCartToStorage(cart);
    updateCartUI();
    
    return true;
}

// Obtener carrito completo
function getCart() {
    return cart;
}

// Obtener cantidad total de items
function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Obtener total del carrito
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Limpiar carrito
function clearCart() {
    cart = [];
    CartStorage.clearCartStorage();
    updateCartUI();
}

// Actualizar UI del carrito (badge, contador, etc.)
function updateCartUI() {
    const itemCount = getCartItemCount();
    
    // Actualizar badge en icono de carrito
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        if (itemCount > 0) {
            cartBadge.textContent = itemCount;
            cartBadge.style.display = 'block';
        } else {
            cartBadge.style.display = 'none';
        }
    }
    
    // Actualizar contador en página de carrito si existe
    const cartItemCountEl = document.getElementById('cart-item-count');
    if (cartItemCountEl) {
        cartItemCountEl.textContent = itemCount;
    }
    
    // Actualizar total en página de carrito si existe
    const cartTotalEl = document.getElementById('cart-total');
    if (cartTotalEl) {
        cartTotalEl.textContent = formatPrice(getCartTotal());
    }
    
    // Disparar evento personalizado para que otros componentes se actualicen
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart, itemCount, total: getCartTotal() } }));
}

// Mostrar notificación
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `cart-notification ${type}`;
    notification.textContent = message;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Renderizar carrito en página
function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-cart-shopping"></i>
                <h3>Tu carrito está vacío</h3>
                <p>Agrega productos para comenzar tu compra</p>
                <a href="productos.html" class="btn-1">Ver Productos</a>
            </div>
        `;
        return;
    }

    let cartHTML = '<div class="cart-items-list">';
    
    cart.forEach(item => {
        const imagePath = item.image ? `images/${item.image}` : 'images/i1.svg';
        const itemTotal = item.price * item.quantity;
        
        cartHTML += `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${imagePath}" alt="${item.name}" onerror="this.src='images/i1.svg'">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price-unit">${formatPrice(item.price)} c/u</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="number" value="${item.quantity}" min="1" max="${item.stock}" 
                           onchange="updateCartQuantity('${item.id}', parseInt(this.value))" 
                           class="qty-input">
                    <button class="qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})" ${item.quantity >= item.stock ? 'disabled' : ''}>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div class="cart-item-total">
                    <span class="item-total-price">${formatPrice(itemTotal)}</span>
                </div>
                <div class="cart-item-remove">
                    <button class="btn-remove" onclick="removeFromCart('${item.id}')" title="Eliminar">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartHTML += '</div>';
    
    // Agregar resumen
    const subtotal = getCartTotal();
    const tax = subtotal * 0.21; // IVA 21%
    const total = subtotal + tax;
    
    cartHTML += `
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>IVA (21%):</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total:</span>
                <span>${formatPrice(total)}</span>
            </div>
            <a href="checkout.html" class="btn-1 btn-checkout" style="width: 100%; margin-top: 20px; text-align: center;">
                Continuar Compra
            </a>
        </div>
    `;
    
    cartContainer.innerHTML = cartHTML;
    
    // Actualizar contadores
    updateCartUI();
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCart);
} else {
    initCart();
}

// Exportar funciones globales
window.CartSystem = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCart,
    getCartItemCount,
    getCartTotal,
    clearCart,
    renderCart,
    updateCartUI
};

// Funciones globales para uso en HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;

