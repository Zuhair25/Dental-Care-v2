// Sistema de filtros y búsqueda de productos

// Inicializar filtros
function initFilters() {
    const filterForm = document.getElementById('product-filters');
    if (!filterForm) return;

    // Event listeners para filtros
    filterForm.addEventListener('change', applyFilters);
    filterForm.addEventListener('input', debounce(applyFilters, 300));

    // Aplicar filtros iniciales
    applyFilters();
}

// Aplicar filtros
function applyFilters() {
    const filters = {
        category: document.getElementById('filter-category')?.value || 'all',
        minPrice: parseInt(document.getElementById('filter-min-price')?.value) || null,
        maxPrice: parseInt(document.getElementById('filter-max-price')?.value) || null,
        search: document.getElementById('filter-search')?.value || '',
        sortBy: document.getElementById('filter-sort')?.value || 'name-asc'
    };

    // Renderizar productos filtrados
    if (typeof CatalogEngine !== 'undefined') {
        CatalogEngine.renderFilteredProducts('products-container', filters);
        
        // Aplicar promociones después de renderizar
        setTimeout(() => {
            if (typeof PromotionsEngine !== 'undefined') {
                PromotionsEngine.applyPromotionsToProducts();
            }
        }, 100);
    }
}

// Función debounce para búsqueda
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Crear UI de filtros
function createFiltersUI(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const filtersHTML = `
        <div class="filters-panel" style="background: white; padding: 25px; border-radius: 15px; box-shadow: var(--shadow); margin-bottom: 30px;">
            <form id="product-filters">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px;">
                    <div class="filter-group">
                        <label for="filter-search" style="display: block; margin-bottom: 8px; font-weight: 500;">Buscar:</label>
                        <input type="text" id="filter-search" placeholder="Nombre, marca, descripción..." 
                            style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
                    </div>
                    <div class="filter-group">
                        <label for="filter-category" style="display: block; margin-bottom: 8px; font-weight: 500;">Categoría:</label>
                        <select id="filter-category" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
                            <option value="all">Todas las categorías</option>
                            <option value="odontologia-general">Odontología General</option>
                            <option value="instrumental">Instrumental</option>
                            <option value="bioseguridad">Bioseguridad</option>
                            <option value="equipamiento">Equipamiento</option>
                            <option value="ortodoncia">Ortodoncia</option>
                            <option value="endodoncia">Endodoncia</option>
                            <option value="cirugia">Cirugía</option>
                            <option value="implantes">Implantes</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="filter-min-price" style="display: block; margin-bottom: 8px; font-weight: 500;">Precio Mín:</label>
                        <input type="number" id="filter-min-price" placeholder="20000" min="0" 
                            style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
                    </div>
                    <div class="filter-group">
                        <label for="filter-max-price" style="display: block; margin-bottom: 8px; font-weight: 500;">Precio Máx:</label>
                        <input type="number" id="filter-max-price" placeholder="80000" min="0" 
                            style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
                    </div>
                    <div class="filter-group">
                        <label for="filter-sort" style="display: block; margin-bottom: 8px; font-weight: 500;">Ordenar por:</label>
                        <select id="filter-sort" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
                            <option value="name-asc">Nombre A-Z</option>
                            <option value="name-desc">Nombre Z-A</option>
                            <option value="price-asc">Precio: Menor a Mayor</option>
                            <option value="price-desc">Precio: Mayor a Menor</option>
                        </select>
                    </div>
                </div>
                <button type="button" onclick="clearFilters()" class="btn-1" style="padding: 10px 20px;">
                    <i class="fa-solid fa-times"></i> Limpiar Filtros
                </button>
            </form>
        </div>
    `;

    container.innerHTML = filtersHTML;
    initFilters();
}

// Limpiar filtros
function clearFilters() {
    document.getElementById('filter-search').value = '';
    document.getElementById('filter-category').value = 'all';
    document.getElementById('filter-min-price').value = '';
    document.getElementById('filter-max-price').value = '';
    document.getElementById('filter-sort').value = 'name-asc';
    applyFilters();
}

// Exportar funciones
window.Filters = {
    initFilters,
    applyFilters,
    createFiltersUI,
    clearFilters
};

window.clearFilters = clearFilters;

// Auto-inicializar si hay un contenedor de filtros
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        const filtersContainer = document.getElementById('filters-container');
        if (filtersContainer) {
            createFiltersUI('filters-container');
        } else {
            initFilters();
        }
    });
} else {
    const filtersContainer = document.getElementById('filters-container');
    if (filtersContainer) {
        createFiltersUI('filters-container');
    } else {
        initFilters();
    }
}

