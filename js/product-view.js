// Sistema de vista de producto individual

// Función para renderizar página de producto
function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) {
        document.body.innerHTML = '<h1>Producto no encontrado</h1><a href="productos.html">Volver a productos</a>';
        return;
    }

    const imagePath = product.image ? `images/${product.image}` : 'images/i1.svg';
    const priceCalculation = PromotionsData ? PromotionsData.calculateFinalPrice(product) : {
        originalPrice: product.price,
        finalPrice: product.price,
        discount: 0,
        promotions: []
    };

    // Renderizar galería de imágenes
    const galleryHTML = `
        <div class="product-gallery">
            <div class="product-main-image">
                <img src="${imagePath}" alt="${product.name}" id="main-product-image" onerror="this.src='images/i1.svg'">
            </div>
            <div class="product-thumbnails">
                <img src="${imagePath}" alt="${product.name}" class="thumbnail active" onclick="changeMainImage('${imagePath}')" onerror="this.src='images/i1.svg'">
            </div>
        </div>
    `;

    // Renderizar información del producto
    const infoHTML = `
        <div class="product-info-detail">
            <h1 class="product-title">${product.name}</h1>
            <div class="product-meta-info">
                <span class="product-brand-badge">${product.brand}</span>
                <span class="product-category-link">
                    <a href="categorias/${product.category}.html">${getCategoryName(product.category)}</a>
                </span>
            </div>
            <div class="product-price-detail">
                ${priceCalculation.promotions.length > 0 ? `
                    <span class="original-price-large">${formatPrice(priceCalculation.originalPrice)}</span>
                    <span class="final-price-large">${formatPrice(priceCalculation.finalPrice)}</span>
                    <span class="discount-badge-large">-${priceCalculation.discountPercentage}%</span>
                ` : `
                    <span class="final-price-large">${formatPrice(product.price)}</span>
                `}
            </div>
            <div class="product-description-detail">
                <h3>Descripción</h3>
                <p>${product.description}</p>
            </div>
            <div class="product-specs">
                <h3>Especificaciones</h3>
                <ul>
                    <li><strong>Marca:</strong> ${product.brand}</li>
                    <li><strong>Categoría:</strong> ${getCategoryName(product.category)}</li>
                    <li><strong>Stock disponible:</strong> ${product.stock} unidades</li>
                    <li><strong>Código:</strong> ${product.id}</li>
                </ul>
            </div>
            <div class="product-actions-detail">
                <div class="quantity-selector">
                    <label>Cantidad:</label>
                    <button class="qty-btn" onclick="decreaseQuantity()">-</button>
                    <input type="number" id="product-quantity" value="1" min="1" max="${product.stock}">
                    <button class="qty-btn" onclick="increaseQuantity()">+</button>
                </div>
                <button class="btn-add-cart-large" onclick="addProductToCart('${product.id}')">
                    <i class="fa-solid fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `;

    // Renderizar productos relacionados
    const relatedHTML = `
        <section class="related-products-section">
            <h2>Productos Relacionados</h2>
            <div id="related-products-container"></div>
        </section>
    `;

    return {
        gallery: galleryHTML,
        info: infoHTML,
        related: relatedHTML,
        product: product
    };
}

// Función para cambiar imagen principal
function changeMainImage(imagePath) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = imagePath;
    }
    
    // Actualizar thumbnails activos
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src.includes(imagePath)) {
            thumb.classList.add('active');
        }
    });
}

// Funciones de cantidad
function increaseQuantity() {
    const input = document.getElementById('product-quantity');
    const max = parseInt(input.getAttribute('max'));
    const current = parseInt(input.value);
    if (current < max) {
        input.value = current + 1;
    }
}

function decreaseQuantity() {
    const input = document.getElementById('product-quantity');
    const current = parseInt(input.value);
    if (current > 1) {
        input.value = current - 1;
    }
}

// Agregar producto al carrito desde página de detalle
function addProductToCart(productId) {
    const quantityInput = document.getElementById('product-quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    CartSystem.addToCart(productId, quantity);
}

// Obtener nombre de categoría
function getCategoryName(categorySlug) {
    const categories = {
        'odontologia-general': 'Odontología General',
        'instrumental': 'Instrumental',
        'bioseguridad': 'Bioseguridad',
        'equipamiento': 'Equipamiento',
        'ortodoncia': 'Ortodoncia',
        'endodoncia': 'Endodoncia',
        'cirugia': 'Cirugía',
        'implantes': 'Implantes'
    };
    return categories[categorySlug] || categorySlug;
}

// Inicializar página de producto
function initProductPage() {
    // Obtener ID del producto de la URL
    const pathParts = window.location.pathname.split('/');
    const productId = pathParts[pathParts.length - 1].replace('.html', '');
    
    if (productId && productId !== 'producto') {
        const productData = renderProductPage(productId);
        
        // Renderizar galería
        const galleryContainer = document.getElementById('product-gallery-container');
        if (galleryContainer) {
            galleryContainer.innerHTML = productData.gallery;
        }
        
        // Renderizar información
        const infoContainer = document.getElementById('product-info-container');
        if (infoContainer) {
            infoContainer.innerHTML = productData.info;
        }
        
        // Renderizar productos relacionados
        const relatedContainer = document.getElementById('related-products-container');
        if (relatedContainer && typeof CatalogEngine !== 'undefined') {
            CatalogEngine.renderRelatedProducts(productId, 'related-products-container', 4);
        }
    }
}

// Exportar funciones
window.ProductView = {
    renderProductPage,
    changeMainImage,
    increaseQuantity,
    decreaseQuantity,
    addProductToCart,
    initProductPage
};

window.changeMainImage = changeMainImage;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.addProductToCart = addProductToCart;

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductPage);
} else {
    initProductPage();
}

