// Base de datos de promociones

const PROMOTIONS_DATABASE = {
    // Promociones por día de semana
    weekdayPromotions: {
        tuesday: {
            name: 'Descuento Martes',
            discount: 0.15,
            categories: ['odontologia-general', 'instrumental'],
            description: '15% de descuento en Odontología General e Instrumental'
        },
        wednesday: {
            name: 'Descuento Miércoles',
            discount: 0.15,
            categories: ['bioseguridad', 'equipamiento'],
            description: '15% de descuento en Bioseguridad y Equipamiento'
        },
        thursday: {
            name: 'Descuento Jueves',
            discount: 0.15,
            categories: ['ortodoncia', 'endodoncia'],
            description: '15% de descuento en Ortodoncia y Endodoncia'
        }
    },

    // Descuentos por método de pago
    paymentMethodDiscounts: {
        credit: {
            name: 'Descuento Tarjeta de Crédito',
            discount: 0.10,
            description: '10% adicional pagando con tarjeta de crédito'
        },
        transfer: {
            name: 'Descuento Transferencia',
            discount: 0.05,
            description: '5% de descuento pagando por transferencia bancaria'
        },
        cash: {
            name: 'Descuento Efectivo',
            discount: 0.03,
            description: '3% de descuento pagando en efectivo'
        }
    },

    // Combos
    combos: [
        {
            id: 'combo-001',
            name: 'Kit Odontólogo Iniciante',
            description: 'Kit completo para odontólogos que inician su práctica',
            products: [
                { id: 'og-001', quantity: 1 },
                { id: 'inst-001', quantity: 1 },
                { id: 'bio-001', quantity: 2 }
            ],
            discount: 0.20,
            originalPrice: 0, // Se calcula dinámicamente
            finalPrice: 0, // Se calcula dinámicamente
            image: 'i1.svg'
        },
        {
            id: 'combo-002',
            name: 'Kit Endodoncia Completo',
            description: 'Todo lo necesario para tratamientos endodóncicos',
            products: [
                { id: 'endo-001', quantity: 1 },
                { id: 'endo-005', quantity: 1 },
                { id: 'endo-008', quantity: 2 }
            ],
            discount: 0.20,
            originalPrice: 0,
            finalPrice: 0,
            image: 'i2.svg'
        },
        {
            id: 'combo-003',
            name: 'Kit Ortodoncia Básico',
            description: 'Materiales esenciales para tratamientos ortodóncicos',
            products: [
                { id: 'ort-001', quantity: 1 },
                { id: 'ort-005', quantity: 1 },
                { id: 'ort-007', quantity: 1 }
            ],
            discount: 0.20,
            originalPrice: 0,
            finalPrice: 0,
            image: 'i3.svg'
        }
    ],

    // Promociones por categoría (rotación semanal)
    categoryPromotions: [
        {
            week: 1,
            category: 'odontologia-general',
            discount: 0.12,
            name: 'Semana de Odontología General',
            description: '12% de descuento en todos los productos de Odontología General'
        },
        {
            week: 2,
            category: 'instrumental',
            discount: 0.12,
            name: 'Semana de Instrumental',
            description: '12% de descuento en todo el instrumental'
        },
        {
            week: 3,
            category: 'bioseguridad',
            discount: 0.12,
            name: 'Semana de Bioseguridad',
            description: '12% de descuento en productos de bioseguridad'
        },
        {
            week: 4,
            category: 'equipamiento',
            discount: 0.10,
            name: 'Semana de Equipamiento',
            description: '10% de descuento en equipamiento dental'
        }
    ]
};

// Función para obtener el día de la semana actual
function getCurrentWeekday() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
}

// Función para obtener la semana del mes (1-4)
function getWeekOfMonth() {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const currentDay = date.getDate();
    return Math.ceil((firstDay + currentDay) / 7);
}

// Función para obtener promoción activa por día
function getActiveWeekdayPromotion() {
    const weekday = getCurrentWeekday();
    return PROMOTIONS_DATABASE.weekdayPromotions[weekday] || null;
}

// Función para obtener promoción activa por categoría
function getActiveCategoryPromotion() {
    const week = getWeekOfMonth();
    const promotion = PROMOTIONS_DATABASE.categoryPromotions.find(p => p.week === week);
    return promotion || null;
}

// Función para calcular precio con descuento
function applyDiscount(price, discount) {
    return price * (1 - discount);
}

// Función para verificar si un producto tiene promoción
function hasProductPromotion(productId, category) {
    const promotions = [];

    // Verificar promoción por día
    const weekdayPromo = getActiveWeekdayPromotion();
    if (weekdayPromo && weekdayPromo.categories.includes(category)) {
        promotions.push({
            type: 'weekday',
            discount: weekdayPromo.discount,
            name: weekdayPromo.name
        });
    }

    // Verificar promoción por categoría
    const categoryPromo = getActiveCategoryPromotion();
    if (categoryPromo && categoryPromo.category === category) {
        promotions.push({
            type: 'category',
            discount: categoryPromo.discount,
            name: categoryPromo.name
        });
    }

    return promotions;
}

// Función para calcular precio final con todas las promociones aplicadas
function calculateFinalPrice(product, paymentMethod = null) {
    let finalPrice = product.price;
    const appliedPromotions = [];

    // Aplicar promociones de producto/categoría
    const productPromotions = hasProductPromotion(product.id, product.category);
    if (productPromotions.length > 0) {
        // Aplicar el mayor descuento
        const maxDiscount = Math.max(...productPromotions.map(p => p.discount));
        finalPrice = applyDiscount(finalPrice, maxDiscount);
        appliedPromotions.push(productPromotions.find(p => p.discount === maxDiscount));
    }

    // Aplicar descuento por método de pago
    if (paymentMethod && PROMOTIONS_DATABASE.paymentMethodDiscounts[paymentMethod]) {
        const paymentDiscount = PROMOTIONS_DATABASE.paymentMethodDiscounts[paymentMethod];
        finalPrice = applyDiscount(finalPrice, paymentDiscount.discount);
        appliedPromotions.push({
            type: 'payment',
            discount: paymentDiscount.discount,
            name: paymentDiscount.name
        });
    }

    // Clamp final price between 20,000 and 30,000 if promotions are applied
    if (appliedPromotions.length > 0) {
        finalPrice = Math.max(20000, Math.min(30000, finalPrice));
    }

    return {
        originalPrice: product.price,
        finalPrice: Math.round(finalPrice),
        discount: product.price - Math.round(finalPrice),
        discountPercentage: ((product.price - Math.round(finalPrice)) / product.price * 100).toFixed(0),
        promotions: appliedPromotions
    };
}

// Función para calcular precio de combo
function calculateComboPrice(combo) {
    let total = 0;
    combo.products.forEach(item => {
        const product = getProductById(item.id);
        if (product) {
            total += product.price * item.quantity;
        }
    });

    combo.originalPrice = total;
    combo.finalPrice = Math.round(applyDiscount(total, combo.discount));

    return combo;
}

// Inicializar precios de combos
PROMOTIONS_DATABASE.combos.forEach(combo => {
    calculateComboPrice(combo);
});

// Exportar
window.PromotionsData = {
    PROMOTIONS_DATABASE,
    getActiveWeekdayPromotion,
    getActiveCategoryPromotion,
    hasProductPromotion,
    calculateFinalPrice,
    calculateComboPrice,
    applyDiscount,
    getCurrentWeekday,
    getWeekOfMonth
};

