// Script para actualizar todas las categorías con productos dinámicos
// Este archivo contiene el código común para todas las categorías

// Función para inicializar cualquier página de categoría
function initCategoryPage(categorySlug) {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof CatalogEngine === 'undefined') {
            console.error('CatalogEngine no está disponible');
            return;
        }
        
        const container = document.getElementById('products-container');
        if (container) {
            CatalogEngine.renderProductsByCategory(categorySlug, 'products-container', true);
            setTimeout(() => {
                if (typeof PromotionsEngine !== 'undefined') {
                    PromotionsEngine.applyPromotionsToProducts();
                }
            }, 100);
        }
        
        if (typeof CartSystem !== 'undefined') {
            CartSystem.updateCartUI();
        }
    });
}

