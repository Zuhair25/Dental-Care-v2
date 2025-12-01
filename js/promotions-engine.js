// Motor de promociones - Aplica y muestra promociones dinámicamente

// Función para mostrar badge de promoción en producto
function addPromotionBadge(productElement, promotion) {
    if (!productElement) return;
    
    const badge = document.createElement('span');
    badge.className = 'promotion-badge';
    badge.textContent = `-${(promotion.discount * 100).toFixed(0)}%`;
    badge.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--secondary-color);
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 700;
        z-index: 10;
    `;
    
    const imageWrapper = productElement.querySelector('.product-image-wrapper') || 
                         productElement.querySelector('.product-card-catalog');
    if (imageWrapper) {
        imageWrapper.style.position = 'relative';
        imageWrapper.appendChild(badge);
    }
}

// Función para aplicar precio con promoción
function applyPromotionPrice(productElement, product) {
    if (!productElement) return;
    
    const priceCalculation = PromotionsData.calculateFinalPrice(product);
    const priceElement = productElement.querySelector('.product-price');
    
    if (priceElement && priceCalculation.promotions.length > 0) {
        const originalPrice = document.createElement('span');
        originalPrice.className = 'original-price';
        originalPrice.textContent = formatPrice(priceCalculation.originalPrice);
        originalPrice.style.cssText = `
            text-decoration: line-through;
            color: #999;
            font-size: 0.9rem;
            margin-right: 10px;
        `;
        
        priceElement.innerHTML = '';
        priceElement.appendChild(originalPrice);
        
        const finalPrice = document.createElement('span');
        finalPrice.className = 'final-price';
        finalPrice.textContent = formatPrice(priceCalculation.finalPrice);
        finalPrice.style.cssText = `
            color: var(--primary-color);
            font-weight: 700;
        `;
        priceElement.appendChild(finalPrice);
        
        // Agregar badge si no existe
        const existingBadge = productElement.querySelector('.promotion-badge');
        if (!existingBadge && priceCalculation.promotions.length > 0) {
            addPromotionBadge(productElement, priceCalculation.promotions[0]);
        }
    }
}

// Función para renderizar banner de promoción
function renderPromotionBanner(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const weekdayPromo = PromotionsData.getActiveWeekdayPromotion();
    const categoryPromo = PromotionsData.getActiveCategoryPromotion();
    
    let activePromo = weekdayPromo || categoryPromo;
    
    if (!activePromo) {
        container.style.display = 'none';
        return;
    }
    
    const banner = document.createElement('div');
    banner.className = 'promotion-banner';
    banner.style.cssText = `
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 30px;
        box-shadow: var(--shadow);
    `;
    
    banner.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <i class="fa-solid fa-tag" style="font-size: 2rem;"></i>
            <div>
                <h3 style="margin: 0 0 5px 0; font-size: 1.5rem;">${activePromo.name}</h3>
                <p style="margin: 0; opacity: 0.9;">${activePromo.description || `Descuento del ${(activePromo.discount * 100).toFixed(0)}%`}</p>
            </div>
            <a href="promociones.html" class="btn-1" style="background: white; color: var(--primary-color);">
                Ver Promociones
            </a>
        </div>
    `;
    
    container.innerHTML = '';
    container.appendChild(banner);
}

// Función para aplicar promociones a todos los productos visibles
function applyPromotionsToProducts() {
    const productCards = document.querySelectorAll('.product-card-catalog, .product-card');
    
    productCards.forEach(card => {
        const productId = card.getAttribute('data-product-id');
        if (!productId) return;
        
        const product = getProductById(productId);
        if (!product) return;
        
        const promotions = PromotionsData.hasProductPromotion(productId, product.category);
        if (promotions.length > 0) {
            applyPromotionPrice(card, product);
        }
    });
}

// Función para renderizar combos
function renderCombos(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const combos = PromotionsData.PROMOTIONS_DATABASE.combos.map(combo => 
        PromotionsData.calculateComboPrice(combo)
    );
    
    let combosHTML = '<div class="combos-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">';
    
    combos.forEach(combo => {
        const imagePath = combo.image ? `images/${combo.image}` : 'images/i1.svg';
        combosHTML += `
            <div class="combo-card" style="background: white; padding: 25px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <div style="position: relative;">
                    <img src="${imagePath}" alt="${combo.name}" style="width: 120px; height: 120px; margin: 0 auto 20px; object-fit: contain;" onerror="this.src='images/i1.svg'">
                    <span class="promotion-badge" style="position: absolute; top: 10px; right: 10px; background: var(--secondary-color); color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">
                        -${(combo.discount * 100).toFixed(0)}%
                    </span>
                </div>
                <h3 style="font-size: 1.4rem; margin-bottom: 15px; color: var(--text-color-dark);">${combo.name}</h3>
                <p style="color: #666; margin-bottom: 20px;">${combo.description}</p>
                <div style="margin-bottom: 20px;">
                    <p style="text-decoration: line-through; color: #999; font-size: 0.9rem; margin-bottom: 5px;">
                        ${formatPrice(combo.originalPrice)}
                    </p>
                    <p style="font-size: 1.8rem; color: var(--primary-color); font-weight: 700;">
                        ${formatPrice(combo.finalPrice)}
                    </p>
                </div>
                <button class="btn-1" onclick="addComboToCart('${combo.id}')" style="width: 100%;">
                    Agregar Combo al Carrito
                </button>
            </div>
        `;
    });
    
    combosHTML += '</div>';
    container.innerHTML = combosHTML;
}

// Función para agregar combo al carrito
function addComboToCart(comboId) {
    const combo = PromotionsData.PROMOTIONS_DATABASE.combos.find(c => c.id === comboId);
    if (!combo) return;
    
    combo.products.forEach(item => {
        CartSystem.addToCart(item.id, item.quantity);
    });
    
    showNotification(`Combo "${combo.name}" agregado al carrito`, 'success');
}

// Inicializar promociones al cargar
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar promociones a productos después de un breve delay para asegurar que estén renderizados
    setTimeout(() => {
        applyPromotionsToProducts();
    }, 500);
    
    // Escuchar eventos de actualización de carrito para re-aplicar promociones
    window.addEventListener('cartUpdated', () => {
        setTimeout(() => {
            applyPromotionsToProducts();
        }, 100);
    });
});

// Exportar funciones
window.PromotionsEngine = {
    renderPromotionBanner,
    applyPromotionsToProducts,
    renderCombos,
    addComboToCart,
    addPromotionBadge,
    applyPromotionPrice
};

window.addComboToCart = addComboToCart;

