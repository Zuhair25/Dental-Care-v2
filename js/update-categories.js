// Script helper para actualizar todas las categorías con el sistema dinámico
// Este archivo contiene funciones para actualizar las categorías

const categoryMappings = {
    'bioseguridad': 'bioseguridad',
    'equipamiento': 'equipamiento',
    'ortodoncia': 'ortodoncia',
    'endodoncia': 'endodoncia',
    'cirugia': 'cirugia',
    'implantes': 'implantes'
};

// Función para inicializar cualquier categoría
function initCategoryPage(categorySlug) {
    if (typeof CatalogEngine === 'undefined' || typeof CartSystem === 'undefined') {
        console.error('CatalogEngine o CartSystem no están disponibles');
        return;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('products-container');
        if (container) {
            CatalogEngine.renderProductsByCategory(categorySlug, 'products-container', true);
            setTimeout(() => {
                if (typeof PromotionsEngine !== 'undefined') {
                    PromotionsEngine.applyPromotionsToProducts();
                }
            }, 100);
        }
        CartSystem.updateCartUI();
    });
}

