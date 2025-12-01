// Script para generar páginas HTML de productos dinámicamente
// Este script se puede ejecutar en el navegador para generar las páginas

function generateProductPageHTML(productId) {
    const product = getProductById(productId);
    if (!product) return '';

    const imagePath = product.image ? `images/${product.image}` : 'images/i1.svg';
    const categoryName = getCategoryName(product.category);
    
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${product.description}">
    <title>${product.name} - Dental Care</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .header-short { min-height: 40vh; justify-content: center; }
        .header-short .header-content { margin-bottom: 0; }
        .product-detail-section { padding: 80px 0; }
        .product-detail-container { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; margin-bottom: 60px; }
        .product-gallery { background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow); }
        .product-main-image img { width: 100%; height: 400px; object-fit: contain; border-radius: 10px; }
        .product-info-detail { background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow); }
        .product-title { font-size: 2rem; color: var(--text-color-dark); margin-bottom: 20px; }
        .final-price-large { font-size: 2.5rem; color: var(--primary-color); font-weight: 700; }
        .quantity-selector { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .qty-btn { width: 35px; height: 35px; border: 1px solid #ddd; background: white; border-radius: 5px; cursor: pointer; }
        #product-quantity { width: 60px; text-align: center; padding: 8px; border: 1px solid #ddd; border-radius: 5px; }
        .btn-add-cart-large { width: 100%; padding: 15px; background: var(--secondary-color); color: white; border: none; border-radius: 50px; font-size: 1.1rem; cursor: pointer; }
        @media (max-width: 768px) { .product-detail-container { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <header class="header header-short">
        <div class="menu container">
            <a href="../index.html" class="Logo">Dental<span class="logo-bold">Care</span></a>
            <input type="checkbox" id="menu" />
            <label for="menu"><i class="fa-solid fa-bars menu-icono"></i></label>
            <nav class="navbar">
                <ul>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../productos.html">Productos</a></li>
                    <li><a href="../nosotros.html">Nosotros</a></li>
                    <li><a href="../contacto.html">Contacto</a></li>
                </ul>
            </nav>
            <a href="../carrito.html" class="cart-icon-header" style="position: relative; color: white; font-size: 1.5rem; margin-left: 20px;">
                <i class="fa-solid fa-cart-shopping"></i>
                <span id="cart-badge" class="cart-badge" style="display: none; position: absolute; top: -8px; right: -8px; background: var(--secondary-color); color: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700;">0</span>
            </a>
        </div>
    </header>
    <main class="container">
        <section class="product-detail-section">
            <div class="product-detail-container">
                <div class="product-gallery">
                    <div class="product-main-image">
                        <img src="../${imagePath}" alt="${product.name}" onerror="this.src='../images/i1.svg'">
                    </div>
                </div>
                <div class="product-info-detail">
                    <h1 class="product-title">${product.name}</h1>
                    <div style="margin-bottom: 25px;">
                        <span style="background: var(--bg-light); padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; color: var(--primary-color);">${product.brand}</span>
                        <a href="../categorias/${product.category}.html" style="margin-left: 10px; color: var(--secondary-color);">${categoryName}</a>
                    </div>
                    <div class="product-price-detail">
                        <span class="final-price-large">${formatPrice(product.price)}</span>
                    </div>
                    <div style="margin-bottom: 30px;">
                        <h3>Descripción</h3>
                        <p>${product.description}</p>
                    </div>
                    <div style="margin-bottom: 30px;">
                        <h3>Especificaciones</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Marca:</strong> ${product.brand}</li>
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Categoría:</strong> ${categoryName}</li>
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Stock:</strong> ${product.stock} unidades</li>
                            <li style="padding: 10px 0;"><strong>Código:</strong> ${product.id}</li>
                        </ul>
                    </div>
                    <div class="quantity-selector">
                        <label>Cantidad:</label>
                        <button class="qty-btn" onclick="document.getElementById('product-quantity').value = Math.max(1, parseInt(document.getElementById('product-quantity').value) - 1)">-</button>
                        <input type="number" id="product-quantity" value="1" min="1" max="${product.stock}">
                        <button class="qty-btn" onclick="document.getElementById('product-quantity').value = Math.min(${product.stock}, parseInt(document.getElementById('product-quantity').value) + 1)">+</button>
                    </div>
                    <button class="btn-add-cart-large" onclick="addToCart('${product.id}', parseInt(document.getElementById('product-quantity').value))">
                        <i class="fa-solid fa-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="footer-content container">
            <div class="footer-col">
                <h3>Dental<span class="logo-bold">Care</span></h3>
                <p>Tu socio confiable en materiales odontológicos.</p>
            </div>
            <div class="footer-col">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../productos.html">Productos</a></li>
                    <li><a href="../nosotros.html">Nosotros</a></li>
                    <li><a href="../contacto.html">Contacto</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Dental Care. Todos los derechos reservados.</p>
        </div>
    </footer>
    <script src="../js/products-data.js"></script>
    <script src="../js/cart-storage.js"></script>
    <script src="../js/cart-system.js"></script>
    <script>
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
        CartSystem.updateCartUI();
    </script>
</body>
</html>`;
}

// Función helper para obtener nombre de categoría
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

