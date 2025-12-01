// Base de datos completa de productos DentalCare
// Precios en ARS: $20,000 - $80,000

const PRODUCTS_DATABASE = {
    'odontologia-general': [
        {
            id: 'og-001',
            name: 'Resina 3M Z250 XT Nanohíbrida',
            description: 'Resina compuesta nanohíbrida de alta calidad para restauraciones estéticas y duraderas. Color A2.',
            price: 45200,
            image: 'resina-3m-z250-xt-nanohibrido-color-a2-e1674662161841.jpg',
            category: 'odontologia-general',
            brand: '3M',
            stock: 15
        },
        {
            id: 'og-002',
            name: 'Resina 3M Z350 XT',
            description: 'Resina universal nanohíbrida con excelente estética y resistencia al desgaste.',
            price: 48500,
            image: 'z350xt.webp',
            category: 'odontologia-general',
            brand: '3M',
            stock: 12
        },
        {
            id: 'og-003',
            name: 'Filtek Supreme Flowable Restorative',
            description: 'Resina flowable de 3M para restauraciones de clase I y V con excelente adaptación.',
            price: 42500,
            image: '3m-filtek-supreme-flowable-restorative.jpg',
            category: 'odontologia-general',
            brand: '3M',
            stock: 18
        },
        {
            id: 'og-004',
            name: 'Ionómero de Vidrio Ionofil Plus VOCO',
            description: 'Cemento de ionómero de vidrio para restauraciones temporales y bases cavitarias.',
            price: 32000,
            image: 'ionofil-plus-voco.jpg',
            category: 'odontologia-general',
            brand: 'VOCO',
            stock: 20
        },
        {
            id: 'og-005',
            name: 'Ionómero Densell Tipo I',
            description: 'Cemento de ionómero de vidrio para cementación definitiva de coronas y puentes.',
            price: 35000,
            image: 'ionomero-densell-tipo-1-cementacion-d_nq_np_943843-mla26639924127_012018-f1-254457cc193f6c1c6715966433106653-640-0.jpg',
            category: 'odontologia-general',
            brand: 'Densell',
            stock: 14
        },
        {
            id: 'og-006',
            name: 'Ketac Molar EasyMix',
            description: 'Cemento de ionómero de vidrio de alta resistencia para restauraciones clase I y II.',
            price: 38000,
            image: 'Ketac-Molar-EasyMix-Photoroom.png',
            category: 'odontologia-general',
            brand: '3M ESPE',
            stock: 16
        },
        {
            id: 'og-007',
            name: 'Cemento Quirúrgico Avío',
            description: 'Cemento quirúrgico para fijación de implantes y aditamentos. Presentación 50g + 20ml.',
            price: 42000,
            image: 'Cemento quirurgico, Avío_ 50g + 20 ml-Photoroom.png',
            category: 'odontologia-general',
            brand: 'Avío',
            stock: 10
        },
        {
            id: 'og-008',
            name: 'Cavex CA-37 Fast Set',
            description: 'Alginato de impresión de fraguado rápido para modelos de estudio.',
            price: 28000,
            image: 'cavex-ca-37-fast-set.webp',
            category: 'odontologia-general',
            brand: 'Cavex',
            stock: 25
        },
        {
            id: 'og-009',
            name: 'Alginato ALGINKID Orthodontic',
            description: 'Alginato especialmente formulado para ortodoncia. Presentación 453g.',
            price: 25000,
            image: 'Alginato ALGINKID ORTHODONTIC, 453g. MAJOR.png',
            category: 'odontologia-general',
            brand: 'MAJOR',
            stock: 30
        },
        {
            id: 'og-010',
            name: 'Alginato Cromático ALGINMAX',
            description: 'Alginato cromático de alta calidad para impresiones precisas. 453g.',
            price: 27000,
            image: 'Alginato cromatico ALGINMAX, 453g. MAJOR.png',
            category: 'odontologia-general',
            brand: 'MAJOR',
            stock: 22
        },
        {
            id: 'og-011',
            name: 'Alginato Orthoprint ZHERMACK',
            description: 'Alginato de impresión para ortodoncia. Presentación 500g.',
            price: 29000,
            image: 'Alginato Orthoprint, 500g. ZHERMACK.jpg',
            category: 'odontologia-general',
            brand: 'ZHERMACK',
            stock: 18
        },
        {
            id: 'og-012',
            name: 'Alginato Tropicalgin ZHERMACK',
            description: 'Alginato de sabor tropical para mayor comodidad del paciente. 453g.',
            price: 26000,
            image: 'Alginato Tropicalgin, 453g. ZHERMACK.png',
            category: 'odontologia-general',
            brand: 'ZHERMACK',
            stock: 24
        },
        {
            id: 'og-013',
            name: 'Alginato Jeltrate Dustless',
            description: 'Alginato sin polvo para impresiones limpias. Presentación 410g.',
            price: 31000,
            image: 'alginato_jeltrate_dustless_410_gr_1110_1_7910518aaed405ad5edf9796f0920dda.webp',
            category: 'odontologia-general',
            brand: 'Dentsply',
            stock: 20
        },
        {
            id: 'og-014',
            name: 'Anestésico Totalcaina',
            description: 'Anestésico local con articaína al 4% con epinefrina 1:100.000.',
            price: 33000,
            image: 'totalcaina-8326c4b7c9b4d37b8a17108611066061-480-0-Photoroom.png',
            category: 'odontologia-general',
            brand: 'Totalcaina',
            stock: 15
        },
        {
            id: 'og-015',
            name: 'Brilliant Dentine A3D31',
            description: 'Resina compuesta para restauraciones estéticas de alta calidad.',
            price: 44000,
            image: 'brilliantdentinea3d31-95067c39a08fa2f19e16240507192769-480-0.png',
            category: 'odontologia-general',
            brand: 'Coltene',
            stock: 12
        },
        {
            id: 'og-016',
            name: 'Provis Favodent',
            description: 'Material de provisorios para coronas y puentes temporales.',
            price: 36000,
            image: 'Provis-Favodent-Photoroom.png',
            category: 'odontologia-general',
            brand: 'Favodent',
            stock: 14
        },
        {
            id: 'og-017',
            name: 'Prothoplast',
            description: 'Material para provisorios y restauraciones temporales de alta calidad.',
            price: 34000,
            image: 'prothoplast-a42a90250402d2369617170914142260-1024-1024-Photoroom.png',
            category: 'odontologia-general',
            brand: 'Prothoplast',
            stock: 16
        },
        {
            id: 'og-018',
            name: 'iQchrom',
            description: 'Material de impresión de silicona de adición de alta precisión.',
            price: 52000,
            image: 'iQchrom.jpg',
            category: 'odontologia-general',
            brand: 'ZHERMACK',
            stock: 10
        },
        {
            id: 'og-019',
            name: 'iQgreen',
            description: 'Silicona de adición verde para impresiones de precisión.',
            price: 51000,
            image: 'iQgreen.jpg',
            category: 'odontologia-general',
            brand: 'ZHERMACK',
            stock: 11
        },
        {
            id: 'og-020',
            name: 'iQtropical',
            description: 'Silicona de impresión con sabor tropical para mayor comodidad.',
            price: 53000,
            image: 'iQtropical.jpg',
            category: 'odontologia-general',
            brand: 'ZHERMACK',
            stock: 9
        }
    ],
    'instrumental': [
        {
            id: 'inst-001',
            name: 'Kit de Exploración Básico',
            description: 'Set completo de espejo, sonda y pinza para diagnóstico. Acero inoxidable quirúrgico.',
            price: 25000,
            image: 'i2.svg',
            category: 'instrumental',
            brand: 'Genérico',
            stock: 30
        },
        {
            id: 'inst-002',
            name: 'Fresas de Alta Velocidad Carburo',
            description: 'Set de 10 fresas de carburo de tungsteno para alta velocidad. Variedad de formas.',
            price: 35000,
            image: 'i1.svg',
            category: 'instrumental',
            brand: 'Komet',
            stock: 25
        },
        {
            id: 'inst-003',
            name: 'Fresas de Baja Velocidad',
            description: 'Set de 8 fresas para baja velocidad. Ideal para acabado y pulido.',
            price: 28000,
            image: 'i3.svg',
            category: 'instrumental',
            brand: 'Komet',
            stock: 28
        },
        {
            id: 'inst-004',
            name: 'Bisturí Quirúrgico Desechable',
            description: 'Bisturíes quirúrgicos desechables con hoja #15. Caja de 100 unidades.',
            price: 22000,
            image: 'i2.svg',
            category: 'instrumental',
            brand: 'Genérico',
            stock: 40
        },
        {
            id: 'inst-005',
            name: 'Pinza de Extracción Universal',
            description: 'Pinza de extracción universal para dientes anteriores y posteriores.',
            price: 32000,
            image: 'i1.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 15
        },
        {
            id: 'inst-006',
            name: 'Fórceps de Extracción Superior',
            description: 'Fórceps especializados para extracción de dientes superiores.',
            price: 38000,
            image: 'i3.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 12
        },
        {
            id: 'inst-007',
            name: 'Fórceps de Extracción Inferior',
            description: 'Fórceps especializados para extracción de dientes inferiores.',
            price: 38000,
            image: 'i2.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 12
        },
        {
            id: 'inst-008',
            name: 'Elevador de Extracción Recto',
            description: 'Elevador recto para luxación de dientes antes de extracción.',
            price: 30000,
            image: 'i1.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 18
        },
        {
            id: 'inst-009',
            name: 'Elevador de Extracción Curvo',
            description: 'Elevador curvo para extracción de raíces y dientes impactados.',
            price: 31000,
            image: 'i3.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 16
        },
        {
            id: 'inst-010',
            name: 'Porta Amalgama',
            description: 'Porta amalgama de acero inoxidable para colocación de restauraciones.',
            price: 24000,
            image: 'i2.svg',
            category: 'instrumental',
            brand: 'Genérico',
            stock: 22
        },
        {
            id: 'inst-011',
            name: 'Espátula de Mezcla',
            description: 'Espátula de acero inoxidable para mezcla de materiales.',
            price: 20000,
            image: 'i1.svg',
            category: 'instrumental',
            brand: 'Genérico',
            stock: 35
        },
        {
            id: 'inst-012',
            name: 'Cucharita de Amalgama',
            description: 'Cucharita para manipulación de amalgama y materiales restauradores.',
            price: 21000,
            image: 'i3.svg',
            category: 'instrumental',
            brand: 'Genérico',
            stock: 30
        },
        {
            id: 'inst-013',
            name: 'Separadores de Goma',
            description: 'Set de separadores de goma para aislamiento del campo operatorio.',
            price: 18000,
            image: 'i2.svg',
            category: 'instrumental',
            brand: 'Hygenic',
            stock: 50
        },
        {
            id: 'inst-014',
            name: 'Porta Matriz Universal',
            description: 'Porta matriz universal para restauraciones clase II.',
            price: 26000,
            image: 'i1.svg',
            category: 'instrumental',
            brand: 'Tofflemire',
            stock: 20
        },
        {
            id: 'inst-015',
            name: 'Matrices de Acero',
            description: 'Set de matrices de acero inoxidable para diferentes tamaños dentales.',
            price: 29000,
            image: 'i3.svg',
            category: 'instrumental',
            brand: 'Tofflemire',
            stock: 25
        },
        {
            id: 'inst-016',
            name: 'Curetas Periodontales',
            description: 'Set de 4 curetas periodontales para raspado y alisado radicular.',
            price: 42000,
            image: 'i2.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 15
        },
        {
            id: 'inst-017',
            name: 'Sondas Periodontales',
            description: 'Set de sondas periodontales calibradas para medición de bolsas.',
            price: 27000,
            image: 'i1.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 20
        },
        {
            id: 'inst-018',
            name: 'Tijeras Quirúrgicas',
            description: 'Tijeras quirúrgicas de acero inoxidable para suturas y procedimientos.',
            price: 33000,
            image: 'i3.svg',
            category: 'instrumental',
            brand: 'Hu-Friedy',
            stock: 14
        }
    ],
    'bioseguridad': [
        {
            id: 'bio-001',
            name: 'Guantes de Látex Desechables',
            description: 'Guantes de látex desechables sin polvo. Talla M. Caja de 100 unidades.',
            price: 25000,
            image: 'i1.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 60
        },
        {
            id: 'bio-002',
            name: 'Guantes de Nitrilo Desechables',
            description: 'Guantes de nitrilo sin polvo. Mayor resistencia a químicos. Caja de 100 unidades.',
            price: 28000,
            image: 'i2.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 55
        },
        {
            id: 'bio-003',
            name: 'Mascarillas Quirúrgicas',
            description: 'Mascarillas quirúrgicas de 3 capas. Caja de 50 unidades.',
            price: 22000,
            image: 'i3.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 80
        },
        {
            id: 'bio-004',
            name: 'Mascarillas N95',
            description: 'Mascarillas N95 de alta protección. Caja de 20 unidades.',
            price: 35000,
            image: 'i1.svg',
            category: 'bioseguridad',
            brand: '3M',
            stock: 40
        },
        {
            id: 'bio-005',
            name: 'Batas Desechables',
            description: 'Batas desechables de polipropileno. Talla M. Paquete de 10 unidades.',
            price: 30000,
            image: 'i2.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 50
        },
        {
            id: 'bio-006',
            name: 'Protectores Oculares',
            description: 'Gafas de protección desechables. Paquete de 50 unidades.',
            price: 24000,
            image: 'i3.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 45
        },
        {
            id: 'bio-007',
            name: 'Gorros Quirúrgicos',
            description: 'Gorros quirúrgicos desechables. Paquete de 100 unidades.',
            price: 18000,
            image: 'i1.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 70
        },
        {
            id: 'bio-008',
            name: 'Cubrebocas con Visera',
            description: 'Cubrebocas con visera transparente. Paquete de 20 unidades.',
            price: 32000,
            image: 'i2.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 35
        },
        {
            id: 'bio-009',
            name: 'Desinfectante de Superficies',
            description: 'Desinfectante de alto nivel para superficies. Presentación 1 litro.',
            price: 28000,
            image: 'i3.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 40
        },
        {
            id: 'bio-010',
            name: 'Solución Esterilizante',
            description: 'Solución para esterilización de instrumental. Presentación 500ml.',
            price: 32000,
            image: 'i1.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 30
        },
        {
            id: 'bio-011',
            name: 'Barreras de Protección',
            description: 'Barreras desechables para equipos dentales. Paquete de 100 unidades.',
            price: 26000,
            image: 'i2.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 50
        },
        {
            id: 'bio-012',
            name: 'Toallas Desinfectantes',
            description: 'Toallas desinfectantes para limpieza de superficies. Caja de 100 unidades.',
            price: 24000,
            image: 'i3.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 60
        },
        {
            id: 'bio-013',
            name: 'Jabón Antiséptico',
            description: 'Jabón antiséptico para lavado de manos. Presentación 500ml.',
            price: 22000,
            image: 'i1.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 45
        },
        {
            id: 'bio-014',
            name: 'Alcohol en Gel',
            description: 'Alcohol en gel al 70% para desinfección de manos. Presentación 1 litro.',
            price: 25000,
            image: 'i2.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 55
        },
        {
            id: 'bio-015',
            name: 'Cubetas Desechables',
            description: 'Cubetas desechables para impresiones. Paquete de 50 unidades.',
            price: 27000,
            image: 'i3.svg',
            category: 'bioseguridad',
            brand: 'Genérico',
            stock: 40
        }
    ],
    'equipamiento': [
        {
            id: 'eq-001',
            name: 'Lámpara de Fotocurado LED',
            description: 'Lámpara LED de alta potencia para polimerización de resinas. Inalámbrica.',
            price: 65000,
            image: 'i3.svg',
            category: 'equipamiento',
            brand: 'Bluephase',
            stock: 8
        },
        {
            id: 'eq-002',
            name: 'Lámpara de Fotocurado Premium',
            description: 'Lámpara LED premium con múltiples modos de intensidad. Inalámbrica.',
            price: 75000,
            image: 'i1.svg',
            category: 'equipamiento',
            brand: 'Bluephase',
            stock: 6
        },
        {
            id: 'eq-003',
            name: 'Unidad Dental Básica',
            description: 'Unidad dental básica con escupidera, jeringa triple y lámpara.',
            price: 80000,
            image: 'i2.svg',
            category: 'equipamiento',
            brand: 'Genérico',
            stock: 5
        },
        {
            id: 'eq-004',
            name: 'Unidad Dental Premium',
            description: 'Unidad dental premium con todos los accesorios y tecnología avanzada.',
            price: 120000,
            image: 'i3.svg',
            category: 'equipamiento',
            brand: 'Premium',
            stock: 3
        },
        {
            id: 'eq-005',
            name: 'Sillón Dental Básico',
            description: 'Sillón dental básico con sistema hidráulico y tapizado resistente.',
            price: 45000,
            image: 'i1.svg',
            category: 'equipamiento',
            brand: 'Genérico',
            stock: 4
        },
        {
            id: 'eq-006',
            name: 'Sillón Dental Premium',
            description: 'Sillón dental premium con sistema eléctrico y múltiples posiciones.',
            price: 80000,
            image: 'i2.svg',
            category: 'equipamiento',
            brand: 'Premium',
            stock: 2
        },
        {
            id: 'eq-007',
            name: 'Compresor Dental',
            description: 'Compresor de aire para unidad dental. Silencioso y eficiente.',
            price: 55000,
            image: 'i3.svg',
            category: 'equipamiento',
            brand: 'Genérico',
            stock: 7
        },
        {
            id: 'eq-008',
            name: 'Aspirador Dental',
            description: 'Sistema de aspiración para consultorio. Alta potencia.',
            price: 48000,
            image: 'i1.svg',
            category: 'equipamiento',
            brand: 'Genérico',
            stock: 6
        },
        {
            id: 'eq-009',
            name: 'Autoclave Clase B',
            description: 'Autoclave clase B para esterilización de instrumental. 18 litros.',
            price: 72000,
            image: 'i2.svg',
            category: 'equipamiento',
            brand: 'Genérico',
            stock: 4
        },
        {
            id: 'eq-010',
            name: 'Radiografía Digital',
            description: 'Sensor de radiografía digital intraoral. Alta resolución.',
            price: 95000,
            image: 'i3.svg',
            category: 'equipamiento',
            brand: 'Genérico',
            stock: 3
        },
        {
            id: 'eq-011',
            name: 'Lámpara de Blanqueamiento',
            description: 'Lámpara LED para blanqueamiento dental. Sistema completo.',
            price: 68000,
            image: 'i1.svg',
            category: 'equipamiento',
            brand: 'Genérico',
            stock: 5
        },
        {
            id: 'eq-012',
            name: 'Microscopio Dental',
            description: 'Microscopio dental para endodoncia y procedimientos de precisión.',
            price: 150000,
            image: 'i2.svg',
            category: 'equipamiento',
            brand: 'Premium',
            stock: 2
        }
    ],
    'ortodoncia': [
        {
            id: 'ort-001',
            name: 'Brackets Metálicos Estándar',
            description: 'Brackets metálicos de acero inoxidable. Sistema estándar. Caja de 100 unidades.',
            price: 45000,
            image: 'i1.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 20
        },
        {
            id: 'ort-002',
            name: 'Brackets Metálicos Autoligantes',
            description: 'Brackets metálicos autoligantes. Reducción de fricción. Caja de 100 unidades.',
            price: 55000,
            image: 'i2.svg',
            category: 'ortodoncia',
            brand: 'Damon',
            stock: 15
        },
        {
            id: 'ort-003',
            name: 'Brackets Cerámicos',
            description: 'Brackets cerámicos estéticos. Alta resistencia. Caja de 100 unidades.',
            price: 65000,
            image: 'i3.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 12
        },
        {
            id: 'ort-004',
            name: 'Brackets de Zafiro',
            description: 'Brackets de zafiro transparentes. Máxima estética. Caja de 100 unidades.',
            price: 70000,
            image: 'i1.svg',
            category: 'ortodoncia',
            brand: 'Premium',
            stock: 10
        },
        {
            id: 'ort-005',
            name: 'Arcos de Níquel-Titanio',
            description: 'Arcos de níquel-titanio redondos. Varios calibres. Set de 10 unidades.',
            price: 42000,
            image: 'i2.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 25
        },
        {
            id: 'ort-006',
            name: 'Arcos de Acero Inoxidable',
            description: 'Arcos de acero inoxidable rectangulares. Set de 10 unidades.',
            price: 38000,
            image: 'i3.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 28
        },
        {
            id: 'ort-007',
            name: 'Ligaduras Elásticas',
            description: 'Ligaduras elásticas de colores. Varios tamaños. Caja de 1000 unidades.',
            price: 30000,
            image: 'i1.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 40
        },
        {
            id: 'ort-008',
            name: 'Ligaduras Metálicas',
            description: 'Ligaduras metálicas de acero inoxidable. Caja de 500 unidades.',
            price: 32000,
            image: 'i2.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 35
        },
        {
            id: 'ort-009',
            name: 'Bandas Ortodóncicas',
            description: 'Bandas ortodóncicas de acero inoxidable. Varios tamaños. Caja de 50 unidades.',
            price: 48000,
            image: 'i3.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 20
        },
        {
            id: 'ort-010',
            name: 'Tubos Ortodóncicos',
            description: 'Tubos ortodóncicos para bandas. Varios tipos. Caja de 50 unidades.',
            price: 45000,
            image: 'i1.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 18
        },
        {
            id: 'ort-011',
            name: 'Ganchos Ortodóncicos',
            description: 'Ganchos ortodóncicos para elásticos intermaxilares. Caja de 100 unidades.',
            price: 35000,
            image: 'i2.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 22
        },
        {
            id: 'ort-012',
            name: 'Elásticos Intermaxilares',
            description: 'Elásticos intermaxilares de diferentes fuerzas. Caja de 500 unidades.',
            price: 28000,
            image: 'i3.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 30
        },
        {
            id: 'ort-013',
            name: 'Cadenas Elásticas',
            description: 'Cadenas elásticas para cierre de espacios. Varios colores. Caja de 10 unidades.',
            price: 33000,
            image: 'i1.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 25
        },
        {
            id: 'ort-014',
            name: 'Alambres de Retención',
            description: 'Alambres de retención para uso post-ortodóncico. Varios calibres.',
            price: 40000,
            image: 'i2.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 20
        },
        {
            id: 'ort-015',
            name: 'Retenedores Fijos',
            description: 'Retenedores fijos de acero inoxidable. Personalizables.',
            price: 52000,
            image: 'i3.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 15
        },
        {
            id: 'ort-016',
            name: 'Retenedores Removibles',
            description: 'Retenedores removibles de acrílico. Personalizables.',
            price: 48000,
            image: 'i1.svg',
            category: 'ortodoncia',
            brand: 'Genérico',
            stock: 12
        },
        {
            id: 'ort-017',
            name: 'Separadores Elásticos',
            description: 'Separadores elásticos para colocación de bandas. Caja de 100 unidades.',
            price: 25000,
            image: 'i2.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 35
        },
        {
            id: 'ort-018',
            name: 'Cementos Ortodóncicos',
            description: 'Cemento de resina para cementación de brackets. Presentación 5g.',
            price: 38000,
            image: 'i3.svg',
            category: 'ortodoncia',
            brand: '3M',
            stock: 18
        }
    ],
    'endodoncia': [
        {
            id: 'endo-001',
            name: 'Limas Rotatorias ProTaper',
            description: 'Sistema de limas rotatorias ProTaper de níquel-titanio. Set completo.',
            price: 65000,
            image: 'MEGA-META-TAP-06-154065086guttataper15-40-06-Photoroom.png',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 10
        },
        {
            id: 'endo-002',
            name: 'Limas Rotatorias WaveOne',
            description: 'Sistema de limas rotatorias WaveOne. Una sola lima por conducto.',
            price: 68000,
            image: 'MEGA-META-TAP-06-154065086guttataper15-40-06-Photoroom.png',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 8
        },
        {
            id: 'endo-003',
            name: 'Limas Manuales K-File',
            description: 'Limas manuales K-File de acero inoxidable. Set de 21-25mm. Varios calibres.',
            price: 35000,
            image: 'i1.svg',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 20
        },
        {
            id: 'endo-004',
            name: 'Limas Manuales H-File',
            description: 'Limas manuales H-File para limpieza. Set completo de calibres.',
            price: 32000,
            image: 'i2.svg',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 22
        },
        {
            id: 'endo-005',
            name: 'Cemento Sellador Sealer 26',
            description: 'Cemento sellador endodóncico Sealer 26. Presentación 12ml.',
            price: 42000,
            image: 'sealer-26-dentsply-sellador-endodontico-odontologia1-a5ce1be4f41f73678416957448209020-1024-1024-Photoroom.png',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 15
        },
        {
            id: 'endo-006',
            name: 'Gutapercha Punti',
            description: 'Puntas de gutapercha estándar. Varios calibres. Caja de 100 unidades.',
            price: 28000,
            image: 'i3.svg',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 30
        },
        {
            id: 'endo-007',
            name: 'Gutapercha Termoplastificada',
            description: 'Gutapercha termoplastificada para obturación. Presentación 25g.',
            price: 38000,
            image: 'i1.svg',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 18
        },
        {
            id: 'endo-008',
            name: 'Irrigante de Hipoclorito',
            description: 'Solución de hipoclorito de sodio al 5.25% para irrigación. 500ml.',
            price: 25000,
            image: 'i2.svg',
            category: 'endodoncia',
            brand: 'Genérico',
            stock: 25
        },
        {
            id: 'endo-009',
            name: 'Irrigante de EDTA',
            description: 'Solución de EDTA para quelación y limpieza. 250ml.',
            price: 30000,
            image: 'i3.svg',
            category: 'endodoncia',
            brand: 'Genérico',
            stock: 20
        },
        {
            id: 'endo-010',
            name: 'Localizador Apical',
            description: 'Localizador apical electrónico para determinación de longitud de trabajo.',
            price: 75000,
            image: 'i1.svg',
            category: 'endodoncia',
            brand: 'Root ZX',
            stock: 5
        },
        {
            id: 'endo-011',
            name: 'Sonda Endodóncica',
            description: 'Sonda endodóncica para exploración de conductos. Set de 3 unidades.',
            price: 22000,
            image: 'i2.svg',
            category: 'endodoncia',
            brand: 'Hu-Friedy',
            stock: 28
        },
        {
            id: 'endo-012',
            name: 'Gates Glidden',
            description: 'Fresas Gates Glidden para ensanchamiento coronal. Set de 6 unidades.',
            price: 32000,
            image: 'i3.svg',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 15
        },
        {
            id: 'endo-013',
            name: 'Peeso Reamers',
            description: 'Peeso reamers para preparación de conductos. Set completo.',
            price: 35000,
            image: 'i1.svg',
            category: 'endodoncia',
            brand: 'Dentsply',
            stock: 12
        },
        {
            id: 'endo-014',
            name: 'Spreader Endodóncico',
            description: 'Spreader para compactación lateral de gutapercha. Varios tamaños.',
            price: 28000,
            image: 'i2.svg',
            category: 'endodoncia',
            brand: 'Hu-Friedy',
            stock: 18
        },
        {
            id: 'endo-015',
            name: 'Plugger Endodóncico',
            description: 'Plugger para compactación vertical de gutapercha. Varios tamaños.',
            price: 30000,
            image: 'i3.svg',
            category: 'endodoncia',
            brand: 'Hu-Friedy',
            stock: 16
        },
        {
            id: 'endo-016',
            name: 'Nabers',
            description: 'Explorador endodóncico Nabers para localización de conductos.',
            price: 26000,
            image: 'nabers-Photoroom.png',
            category: 'endodoncia',
            brand: 'Hu-Friedy',
            stock: 20
        }
    ],
    'cirugia': [
        {
            id: 'cir-001',
            name: 'Kit Quirúrgico Básico',
            description: 'Kit quirúrgico básico con instrumental esencial para extracciones.',
            price: 55000,
            image: 'i1.svg',
            category: 'cirugia',
            brand: 'Hu-Friedy',
            stock: 12
        },
        {
            id: 'cir-002',
            name: 'Kit Quirúrgico Completo',
            description: 'Kit quirúrgico completo con todo el instrumental necesario.',
            price: 68000,
            image: 'i2.svg',
            category: 'cirugia',
            brand: 'Hu-Friedy',
            stock: 8
        },
        {
            id: 'cir-003',
            name: 'Hilos de Sutura Absorbibles',
            description: 'Hilos de sutura absorbibles. Varios calibres. Caja de 12 unidades.',
            price: 42000,
            image: 'i3.svg',
            category: 'cirugia',
            brand: 'Ethicon',
            stock: 15
        },
        {
            id: 'cir-004',
            name: 'Hilos de Sutura No Absorbibles',
            description: 'Hilos de sutura no absorbibles de seda. Varios calibres.',
            price: 38000,
            image: 'i1.svg',
            category: 'cirugia',
            brand: 'Ethicon',
            stock: 18
        },
        {
            id: 'cir-005',
            name: 'Agujas Quirúrgicas',
            description: 'Agujas quirúrgicas de diferentes formas y tamaños. Caja de 24 unidades.',
            price: 35000,
            image: 'i2.svg',
            category: 'cirugia',
            brand: 'Ethicon',
            stock: 20
        },
        {
            id: 'cir-006',
            name: 'Porta Agujas',
            description: 'Porta agujas quirúrgico de acero inoxidable. Varios tamaños.',
            price: 28000,
            image: 'i3.svg',
            category: 'cirugia',
            brand: 'Hu-Friedy',
            stock: 25
        },
        {
            id: 'cir-007',
            name: 'Gel Hemostático',
            description: 'Gel hemostático para control de sangrado. Presentación 5ml.',
            price: 45000,
            image: 'i1.svg',
            category: 'cirugia',
            brand: 'Genérico',
            stock: 14
        },
        {
            id: 'cir-008',
            name: 'Esponja Hemostática',
            description: 'Esponja hemostática absorbible. Varios tamaños. Caja de 10 unidades.',
            price: 40000,
            image: 'i2.svg',
            category: 'cirugia',
            brand: 'Genérico',
            stock: 16
        },
        {
            id: 'cir-009',
            name: 'Bisturí Quirúrgico Especializado',
            description: 'Bisturíes quirúrgicos especializados con hojas #11 y #15. Caja de 50 unidades.',
            price: 32000,
            image: 'i3.svg',
            category: 'cirugia',
            brand: 'Genérico',
            stock: 22
        },
        {
            id: 'cir-010',
            name: 'Periostotomo',
            description: 'Periostotomo para despegamiento de periostio. Varios tamaños.',
            price: 38000,
            image: 'i1.svg',
            category: 'cirugia',
            brand: 'Hu-Friedy',
            stock: 15
        },
        {
            id: 'cir-011',
            name: 'Raspador Óseo',
            description: 'Raspador óseo para remodelado de cresta alveolar. Varios tamaños.',
            price: 42000,
            image: 'i2.svg',
            category: 'cirugia',
            brand: 'Hu-Friedy',
            stock: 12
        },
        {
            id: 'cir-012',
            name: 'Fresa Quirúrgica',
            description: 'Fresas quirúrgicas de carburo para osteotomía. Set de 6 unidades.',
            price: 48000,
            image: 'i3.svg',
            category: 'cirugia',
            brand: 'Komet',
            stock: 10
        },
        {
            id: 'cir-013',
            name: 'Pinza de Disección',
            description: 'Pinza de disección anatómica. Varios tamaños. Set de 3 unidades.',
            price: 35000,
            image: 'i1.svg',
            category: 'cirugia',
            brand: 'Hu-Friedy',
            stock: 18
        },
        {
            id: 'cir-014',
            name: 'Tijeras Quirúrgicas Metzenbaum',
            description: 'Tijeras quirúrgicas Metzenbaum para disección. Varios tamaños.',
            price: 40000,
            image: 'i2.svg',
            category: 'cirugia',
            brand: 'Hu-Friedy',
            stock: 14
        }
    ],
    'implantes': [
        {
            id: 'imp-001',
            name: 'Implante de Titanio 3.5mm',
            description: 'Implante de titanio puro con superficie tratada. Diámetro 3.5mm. Longitud 10mm.',
            price: 75000,
            image: 'i1.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 8
        },
        {
            id: 'imp-002',
            name: 'Implante de Titanio 4.0mm',
            description: 'Implante de titanio puro. Diámetro 4.0mm. Longitud 10mm.',
            price: 78000,
            image: 'i2.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 7
        },
        {
            id: 'imp-003',
            name: 'Implante de Titanio 4.5mm',
            description: 'Implante de titanio puro. Diámetro 4.5mm. Longitud 11.5mm.',
            price: 80000,
            image: 'i3.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 6
        },
        {
            id: 'imp-004',
            name: 'Implante de Titanio 5.0mm',
            description: 'Implante de titanio puro. Diámetro 5.0mm. Longitud 11.5mm.',
            price: 82000,
            image: 'i1.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 5
        },
        {
            id: 'imp-005',
            name: 'Pilar Protésico Estándar',
            description: 'Pilar protésico estándar para restauraciones sobre implantes.',
            price: 45000,
            image: 'i2.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 12
        },
        {
            id: 'imp-006',
            name: 'Pilar Protésico Angulado',
            description: 'Pilar protésico angulado para corrección de angulación. 15° y 25°.',
            price: 52000,
            image: 'i3.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 10
        },
        {
            id: 'imp-007',
            name: 'Aditamento de Transferencia',
            description: 'Aditamento de transferencia para impresión sobre implantes.',
            price: 38000,
            image: 'i1.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 15
        },
        {
            id: 'imp-008',
            name: 'Aditamento de Curación',
            description: 'Aditamento de curación temporal para tejidos blandos.',
            price: 35000,
            image: 'i2.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 18
        },
        {
            id: 'imp-009',
            name: 'Fresa para Implantes',
            description: 'Fresas quirúrgicas para preparación de lecho de implante. Set completo.',
            price: 55000,
            image: 'i3.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 8
        },
        {
            id: 'imp-010',
            name: 'Porta Implante',
            description: 'Porta implante para colocación quirúrgica. Varios diámetros.',
            price: 42000,
            image: 'i1.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 10
        },
        {
            id: 'imp-011',
            name: 'Torquímetro para Implantes',
            description: 'Torquímetro digital para control de torque en implantes.',
            price: 48000,
            image: 'i2.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 9
        },
        {
            id: 'imp-012',
            name: 'Kit Quirúrgico de Implantes',
            description: 'Kit completo con todo el instrumental necesario para cirugía de implantes.',
            price: 65000,
            image: 'i3.svg',
            category: 'implantes',
            brand: 'Premium',
            stock: 6
        }
    ]
};

// Función para obtener todos los productos
function getAllProducts() {
    let allProducts = [];
    for (const category in PRODUCTS_DATABASE) {
        allProducts = allProducts.concat(PRODUCTS_DATABASE[category]);
    }
    return allProducts;
}

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    return PRODUCTS_DATABASE[category] || [];
}

// Función para obtener producto por ID
function getProductById(id) {
    const allProducts = getAllProducts();
    return allProducts.find(product => product.id === id);
}

// Función para formatear precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRODUCTS_DATABASE,
        getAllProducts,
        getProductsByCategory,
        getProductById,
        formatPrice
    };
}

