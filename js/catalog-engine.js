// Motor de renderizado de catálogo de productos
// Genera productos dinámicamente desde la base de datos

// Función para crear el HTML de una tarjeta de producto
function createProductCard(product, showAddToCart = true) {
    const imagePath = product.image ? `images/${product.image}` : 'images/i1.svg';
    const formattedPrice = formatPrice(product.price);
    const productUrl = `producto/${product.id}.html`;
    
    const addToCartButton = showAddToCart ? `
        <button class="btn-add-cart" data-product-id="${product.id}" onclick="addToCart('${product.id}')">
            <i class="fa-solid fa-cart-plus"></i> Añadir al Carrito
        </button>
    ` : `
        <a href="${productUrl}" class="btn-1" style="padding: 10px 30px; font-size: 0.9rem;">
            Ver Detalles
        </a>
    `;

    return `
        <div class="product-card-catalog" data-product-id="${product.id}" data-category="${product.category}">
            <div class="product-image-wrapper">
                <img src="${imagePath}" alt="${product.name}" class="product-image" loading="lazy"
                    onerror="this.src='images/i1.svg'">
                ${product.stock < 10 ? '<span class="stock-badge low-stock">Últimas unidades</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span class="product-brand">${product.brand}</span>
                    <span class="product-stock">Stock: ${product.stock}</span>
                </div>
                <div class="product-price-section">
                    <span class="product-price">${formattedPrice}</span>
                </div>
                <div class="product-actions">
                    ${addToCartButton}
                    <a href="${productUrl}" class="btn-view-details">
                        <i class="fa-solid fa-eye"></i> Ver
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Función para renderizar productos en un contenedor
function renderProducts(containerId, products, showAddToCart = true) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor ${containerId} no encontrado`);
        return;
    }

    if (!products || products.length === 0) {
        container.innerHTML = '<p class="no-products">No se encontraron productos.</p>';
        return;
    }

    const productsGrid = document.createElement('div');
    productsGrid.className = 'products-grid-catalog';
    
    products.forEach(product => {
        const productCard = createProductCard(product, showAddToCart);
        productsGrid.innerHTML += productCard;
    });

    container.innerHTML = '';
    container.appendChild(productsGrid);
}

// Función para renderizar productos por categoría
function renderProductsByCategory(categorySlug, containerId, showAddToCart = true) {
    const products = getProductsByCategory(categorySlug);
    renderProducts(containerId, products, showAddToCart);
}

// Función para renderizar productos con filtros
function renderFilteredProducts(containerId, filters = {}) {
    let products = getAllProducts();

    // Filtrar por categoría
    if (filters.category && filters.category !== 'all') {
        products = products.filter(p => p.category === filters.category);
    }

    // Filtrar por rango de precio
    if (filters.minPrice) {
        products = products.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
        products = products.filter(p => p.price <= filters.maxPrice);
    }

    // Filtrar por búsqueda de texto
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        products = products.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.brand.toLowerCase().includes(searchTerm)
        );
    }

    // Ordenar
    if (filters.sortBy) {
        switch(filters.sortBy) {
            case 'price-asc':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                products.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                products.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
    }

    renderProducts(containerId, products, true);
}

// Función para renderizar productos destacados (top productos)
function renderFeaturedProducts(containerId, limit = 8) {
    const allProducts = getAllProducts();
    // Ordenar por stock (productos más disponibles primero) y tomar los primeros
    const featured = allProducts
        .sort((a, b) => b.stock - a.stock)
        .slice(0, limit);
    
    renderProducts(containerId, featured, true);
}

// Función para renderizar productos relacionados
function renderRelatedProducts(productId, containerId, limit = 4) {
    const product = getProductById(productId);
    if (!product) return;

    const allProducts = getAllProducts();
    const related = allProducts
        .filter(p => p.category === product.category && p.id !== productId)
        .slice(0, limit);
    
    renderProducts(containerId, related, true);
}

// Función para inicializar el catálogo en una página
function initCatalog(categorySlug = null, containerId = 'products-container') {
    if (categorySlug) {
        renderProductsByCategory(categorySlug, containerId);
    } else {
        renderProducts(containerId, getAllProducts());
    }
}

// Función para obtener el HTML de un producto (para modales o vistas rápidas)
function getProductHTML(product) {
    return createProductCard(product, true);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Auto-inicializar si hay un contenedor de productos
        const autoContainer = document.getElementById('products-container');
        if (autoContainer && typeof getProductsByCategory === 'function') {
            // Intentar obtener la categoría de la URL o del data attribute
            const categoryFromUrl = window.location.pathname.includes('/categorias/') 
                ? window.location.pathname.split('/categorias/')[1]?.replace('.html', '')
                : null;
            
            if (categoryFromUrl) {
                initCatalog(categoryFromUrl, 'products-container');
            }
        }
    });
}

// Exportar funciones para uso global
window.CatalogEngine = {
    renderProducts,
    renderProductsByCategory,
    renderFilteredProducts,
    renderFeaturedProducts,
    renderRelatedProducts,
    initCatalog,
    createProductCard,
    getProductHTML
};

