// Sistema de almacenamiento del carrito en localStorage

const CART_STORAGE_KEY = 'dentalcare_cart';

// Obtener carrito del localStorage
function getCartFromStorage() {
    try {
        const cartData = localStorage.getItem(CART_STORAGE_KEY);
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error al leer el carrito:', error);
        return [];
    }
}

// Guardar carrito en localStorage
function saveCartToStorage(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        return true;
    } catch (error) {
        console.error('Error al guardar el carrito:', error);
        return false;
    }
}

// Limpiar carrito del localStorage
function clearCartStorage() {
    try {
        localStorage.removeItem(CART_STORAGE_KEY);
        return true;
    } catch (error) {
        console.error('Error al limpiar el carrito:', error);
        return false;
    }
}

// Exportar funciones
window.CartStorage = {
    getCartFromStorage,
    saveCartToStorage,
    clearCartStorage
};

