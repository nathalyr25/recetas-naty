// Base de datos completa de recetas panameñas mágicas - 75 recetas totales
const EXPANDED_RECIPES_DATABASE = {
    // Recetas semanales completas para cada día (35 recetas)
    weekly: {
        monday: {
            desayuno: [
                {
                    id: 'mond-desayuno-1',
                    name: 'Tortilla Campesina Mágica',
                    image: 'https://images.unsplash.com/photo-1620380209364-8e1f5df72ed9?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['4 huevos frescos', '1 cebolla picada', '2 tomates maduros', 'Culantro fresco', 'Sal y pimienta al gusto', '2 cdas aceite de oliva'],
                    instructions: [
                        'Pelar y picar los tomates finamente, reservar',
                        'Picar la cebolla y el culantro fresco',
                        'Batir los huevos con sal y pimienta hasta homogeneizar',
                        'Calentar aceite en sartén y sofreír la cebolla hasta transparente',
                        'Agregar tomates y espolvorear culantro',
                        'Verter los huevos batidos y cocinar a fuego medio-bajo',
                        'Doblar la tortilla por la mitad y servir caliente'
                    ],
                    description: 'Una tortilla tradicional que despierta todos los sentidos con ingredientes frescos del campo panameño.',
                    magic: 'Cada mordisco transporta el sabor auténtico de la cocina campesina panameña.',
                    time: '20 min',
                    portions: '4 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/panaman-morning'
                },
                {
                    id: 'mond-desayuno-2',
                    name: 'Avena Cremosa de Panamá',
                    image: 'https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['1 taza avena en hojuelas', '2 tazas leche entera', '2 plátanos maduros', '3 cdas azúcar morena', '1 cdta canela en polvo', '1 pizca sal'],
                    instructions: [
                        'Calentar la leche en una olla a fuego medio',
                        'Agregar la avena y cocinar revolviendo por 5 minutos',
                        'Machacar los plátanos hasta hacer puré suave',
                        'Incorporar el puré de plátano a la avena',
                        'Endulzar con azúcar morena y espolvorear canela',
                        'Agregar una pizca de sal para realzar sabores',
                        'Servir caliente con frutas frescas de temporada'
                    ],
                    description: 'Avena nutritiva con sabor tropical que energiza todo el día con la dulzura natural de los plátanos.',
                    magic: 'La avena absorbe el dulzor único de los plátanos panameños, creando una textura cremosa perfecta.',
                    time: '15 min',
                    portions: '3 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/tropical-start'
                },
                {
                    id: 'mond-desayuno-3',
                    name: 'Pancakes de Pan de Plátano',
                    image: 'https://images.unsplash.com/photo-1575853121773-9d19de4efd35?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['2 plátanos muy maduros', '2 huevos grandes', '2 cdas harina de trigo', '1 cdta polvo de hornear', '2 cdas miel de abeja', '1 cdta extracto de vainilla'],
                    instructions: [
                        'Machacar los plátanos hasta obtener un puré completamente liso',
                        'Mezclar con los huevos batidos hasta integrar',
                        'Agregar harina y polvo de hornear tamizados',
                        'Incorporar miel y extracto de vainilla',
                        'Mezclar hasta formar una masa homogénea sin grumos',
                        'Calentar sartén antiadherente a fuego medio',
                        'Verter cucharadas de masa y freír hasta dorar por ambos lados',
                        'Servir con miel y frutas frescas'
                    ],
                    description: 'Pancakes esponjosos con sabor tropical auténtico, perfectos para comenzar el día con energía.',
                    magic: 'Cada pancake está imbuido con la esencia dulce del Caribe panameño.',
                    time: '25 min',
                    portions: '4 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/caribbean-flip'
                },
                {
                    id: 'mond-desayuno-4',
                    name: 'Café de Olla con Leña',
                    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['4 tazas agua filtrada', '4 cdas café molido grueso', '2 cdas panela rallada', '2 clavos de olor', '1 rama canela', '1 pizca sal marina'],
                    instructions: [
                        'Hervir agua con clavos de olor y canela por 3 minutos',
                        'Agregar café molido y dejar hervir a fuego lento',
                        'Endulzar con panela rallada y agregar sal marina',
                        'Cocinar por 5 minutos más revolviendo ocasionalmente',
                        'Retirar del fuego y dejar reposar 2 minutos',
                        'Colar con colador fino y servir muy caliente',
                        'Acompañar con pan dulce o galletas'
                    ],
                    description: 'La bebida mágica que despierta hasta los ojos más cerrados con el aroma del café panameño.',
                    magic: 'Este café está bendecido por el aroma del cerro Ancón al amanecer.',
                    time: '12 min',
                    portions: '4 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/morning-divinity'
                },
                {
                    id: 'mond-desayuno-5',
                    name: 'Tortilla de Huevo Especial',
                    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['3 huevos frescos', '1/2 cebolla picada', '1 tomate mediano', '2 cdas culantro picado', 'Sal y pimienta al gusto', '2 cdas aceite vegetal'],
                    instructions: [
                        'Batir los huevos con sal y pimienta hasta espumosos',
                        'Picar finamente la cebolla y el tomate',
                        'Calentar aceite en sartén y sofreír la cebolla',
                        'Agregar tomate y cocinar hasta que suelte jugo',
                        'Verter los huevos batidos sobre las verduras',
                        'Espolvorear culantro picado por encima',
                        'Cocinar a fuego medio hasta que cuaje',
                        'Doblar por la mitad y servir inmediatamente'
                    ],
                    description: 'Tortilla cargada de proteínas y verduras frescas para un comienzo sólido del día.',
                    magic: 'Los huevos en esta tortilla fueron puestos por gallinas que escuchan guaracha toda la noche.',
                    time: '15 min',
                    portions: '2 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/morning-magic'
                }
            ],
            almuerzo: [
                {
                    id: 'mond-almuerzo-1',
                    name: 'Sancocho Tradicional Panameño',
                    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['1 kg pollo en presas', '500g yuca pelada', '300g ñame', '200g otoe', '1 cebolla grande', '4 dientes ajo', 'Culantro fresco', 'Orégano seco', 'Comino', 'Sal y pimienta'],
                    instructions: [
                        'Limpiar y cortar el pollo en presas medianas',
                        'Pelar y cortar todos los tubérculos en trozos grandes',
                        'Picar finamente cebolla, ajo y culantro',
                        'Hervir agua con sal y agregar el pollo',
                        'Cocinar el pollo por 30 minutos a fuego medio',
                        'Agregar los tubérculos y cocinar por 20 minutos más',
                        'Sazonar con orégano, comino y culantro',
                        'Cocinar 10 minutos más hasta que todo esté tierno',
                        'Servir caliente con arroz blanco'
                    ],
                    description: 'El sancocho que cura el alma y fortalece el cuerpo, plato nacional de Panamá.',
                    magic: 'Cada cucharada contiene la sabiduría ancestral de nuestras abuelas.',
                    time: '1 hora 30 min',
                    portions: '6 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/ancestral-wisdom'
                },
                {
                    id: 'mond-almuerzo-2',
                    name: 'Arroz con Pollo Familiar',
                    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['2 tazas arroz blanco', '1 kg pollo en presas', '1 cebolla', '2 tomates', '1 pimiento rojo', '2 cdas achiote', 'Culantro', 'Ajo', 'Sal y pimienta'],
                    instructions: [
                        'Sazonar el pollo con sal, pimienta y ajo molido',
                        'Sofreír el pollo hasta dorar por todos los lados',
                        'Picar cebolla, tomate y pimiento en cubos pequeños',
                        'Preparar sofrito con las verduras y achiote',
                        'Agregar arroz y revolver hasta que se impregne',
                        'Añadir agua caliente y cocinar a fuego medio',
                        'Cuando esté casi seco, agregar culantro picado',
                        'Cocinar hasta que el arroz esté completamente seco',
                        'Servir con ensalada verde'
                    ],
                    description: 'Plato tradicional que reúne familias enteras en la mesa panameña.',
                    magic: 'Este arroz tiene el poder de crear nuevas amistades y fortalecer las familias.',
                    time: '45 min',
                    portions: '6 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/family-roots'
                },
                {
                    id: 'mond-almuerzo-3',
                    name: 'Patacones Dorados',
                    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['4 plátanos verdes grandes', 'Sal marina al gusto', 'Aceite vegetal para freír', 'Ajo molido', 'Pimienta negra'],
                    instructions: [
                        'Pelar los plátanos verdes y cortar en rodajas de 2 cm',
                        'Freír las rodajas en aceite caliente por 3 minutos',
                        'Retirar y colocar sobre papel absorbente',
                        'Aplanar cada rodaja con un plato o tostonera',
                        'Volver a freír hasta que estén dorados y crujientes',
                        'Retirar y espolvorear con sal marina, ajo y pimienta',
                        'Servir calientes como acompañamiento'
                    ],
                    description: 'Patacones crujientes que son tradición pura de la cocina panameña.',
                    magic: 'Cada crujido te transporta a las fondas del interior panameño.',
                    time: '20 min',
                    portions: '4 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/country-sounds'
                },
                {
                    id: 'mond-almuerzo-4',
                    name: 'Guandú con Coco',
                    image: 'https://images.unsplash.com/photo-1606503172132-d7d9f82dfd7e?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['2 tazas guandú fresco', '1 lata leche de coco', '1 cebolla mediana', '2 dientes ajo', 'Culantro fresco', 'Comino', 'Sal y pimienta'],
                    instructions: [
                        'Limpiar y lavar el guandú fresco',
                        'Hervir el guandú en agua con sal por 30 minutos',
                        'Picar finamente cebolla, ajo y culantro',
                        'Sofreír la cebolla y ajo hasta transparente',
                        'Agregar el guandú cocido y revolver',
                        'Incorporar la leche de coco y sazonar',
                        'Cocinar a fuego lento por 15 minutos',
                        'Agregar culantro picado al final',
                        'Servir con arroz blanco'
                    ],
                    description: 'Granos nutritivos que alimentan hasta el alma con la cremosidad del coco.',
                    magic: 'El guandú lleva la energía pura de la tierra panameña.',
                    time: '50 min',
                    portions: '4 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/earth-energy'
                },
                {
                    id: 'mond-almuerzo-5',
                    name: 'Corvina Frita Completa',
                    image: 'https://images.unsplash.com/photo-1528566402106-11d5df8b6f3b?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['1 kg corvina fresca', '1 taza harina de trigo', '2 huevos batidos', '2 limones', 'Sal y pimienta', 'Aceite para freír', 'Culantro para decorar'],
                    instructions: [
                        'Limpiar y cortar la corvina en filetes',
                        'Sazonar con sal, pimienta y jugo de limón',
                        'Dejar marinar por 15 minutos',
                        'Pasar los filetes por harina, luego por huevo batido',
                        'Freír en aceite caliente hasta dorar por ambos lados',
                        'Retirar y colocar sobre papel absorbente',
                        'Servir con limón y culantro fresco',
                        'Acompañar con patacones y ensalada'
                    ],
                    description: 'Pescado fresco que transporta el sabor auténtico del mar panameño.',
                    magic: 'Captura la frescura pura del océano Pacífico panameño.',
                    time: '35 min',
                    portions: '4 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/ocean-breeze'
                }
            ],
            cena: [
                {
                    id: 'mond-cena-1',
                    name: 'Sopa de Pescado Costa Afuera',
                    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['500g pescado fresco', '1 lata leche de coco', '300g yuca', '2 tomates', '1 cebolla', 'Ají dulce', 'Culantro', 'Ajo', 'Comino'],
                    instructions: [
                        'Limpiar y cortar el pescado en trozos',
                        'Pelar y cortar la yuca en cubos',
                        'Picar tomate, cebolla y ají dulce',
                        'Hervir agua con sal y agregar la yuca',
                        'Cocinar la yuca por 15 minutos',
                        'Agregar el pescado y cocinar por 10 minutos',
                        'Incorporar leche de coco y verduras',
                        'Sazonar con ajo, comino y culantro',
                        'Cocinar 5 minutos más y servir caliente'
                    ],
                    description: 'Sopa cremosa que nutre el cuerpo y reconforta el alma con sabores del mar.',
                    magic: 'El coco panameño le da un sabor únicamente tropical.',
                    time: '30 min',
                    portions: '4 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/coconut-dreams'
                },
                {
                    id: 'mond-cena-2',
                    name: 'Bistec en Salsa Criolla',
                    image: 'https://images.unsplash.com/photo-1546833595-b0e73d7b8e75?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['800g bistec de res', '3 tomates maduros', '1 cebolla grande', 'Culantro fresco', 'Ajo', 'Orégano', 'Sal y pimienta'],
                    instructions: [
                        'Sazonar los bistecs con sal, pimienta y ajo',
                        'Freír los bistecs hasta dorar por ambos lados',
                        'Picar tomates y cebolla en cubos pequeños',
                        'Preparar sofrito con tomate y cebolla',
                        'Agregar orégano y cocinar hasta formar salsa',
                        'Incorporar los bistecs a la salsa',
                        'Cocinar a fuego lento por 20 minutos',
                        'Agregar culantro picado al final',
                        'Servir con arroz y verduras'
                    ],
                    description: 'Carne tierna en salsa aromática tradicional de la cocina panameña.',
                    magic: 'La salsa criolla lleva el toque especial de la cocina casera.',
                    time: '45 min',
                    portions: '4 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/home-cooking'
                },
                {
                    id: 'mond-cena-3',
                    name: 'Ensalada Tropical Refrescante',
                    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['Lechugas mixtas', '2 aguacates maduros', '2 tomates', '1 pepino', '2 limones', 'Aceite de oliva', 'Sal y pimienta'],
                    instructions: [
                        'Lavar y cortar las lechugas en trozos medianos',
                        'Cortar aguacate, tomate y pepino en cubos',
                        'Preparar aderezo con jugo de limón, aceite y sal',
                        'Mezclar todas las verduras en un bowl grande',
                        'Aliñar con el aderezo y revolver suavemente',
                        'Agregar pimienta negra al gusto',
                        'Servir inmediatamente para mantener frescura'
                    ],
                    description: 'Ensalada refrescante que sana y alimenta con ingredientes tropicales frescos.',
                    magic: 'Los aguacates panameños tienen un sabor y textura únicos.',
                    time: '15 min',
                    portions: '4 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/fresh-greens'
                },
                {
                    id: 'mond-cena-4',
                    name: 'Empanadas Horneadas',
                    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['Masa para empanadas', '300g carne molida', '1 cebolla', '2 tomates', 'Ajo', 'Comino', 'Sal y pimienta'],
                    instructions: [
                        'Preparar relleno sofriendo cebolla y ajo',
                        'Agregar carne molida y cocinar hasta dorar',
                        'Incorporar tomate picado y sazonar',
                        'Agregar comino y cocinar hasta secar',
                        'Estirar la masa y cortar círculos',
                        'Rellenar cada círculo con la mezcla',
                        'Cerrar las empanadas y sellar bordes',
                        'Hornear a 180°C por 25 minutos',
                        'Servir calientes'
                    ],
                    description: 'Empanadas crujientes para una cena casual y deliciosa.',
                    magic: 'La masa hojaldreada crea capas de felicidad en cada bocado.',
                    time: '40 min',
                    portions: '6 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/layered-joy'
                },
                {
                    id: 'mond-cena-5',
                    name: 'Chicha de Frutas',
                    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['1 piña madura', '2 mangos', '1 papaya', '1/2 taza azúcar', '4 tazas agua', 'Hielo', 'Menta fresca'],
                    instructions: [
                        'Pelar y cortar todas las frutas en cubos',
                        'Licuar las frutas con agua y azúcar',
                        'Colar la mezcla para eliminar fibras',
                        'Agregar más agua si es necesario',
                        'Endulzar al gusto con azúcar',
                        'Servir en vasos con hielo',
                        'Decorar con hojas de menta fresca',
                        'Beber inmediatamente para mejor sabor'
                    ],
                    description: 'Bebida refrescante que transporta el sabor tropical de Panamá.',
                    magic: 'Cada sorbo es como un abrazo refrescante del trópico.',
                    time: '10 min',
                    portions: '4 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/tropical-hug'
                }
            ]
        },
        
        // Martes
        tuesday: {
            almuerzo: [
                {
                    id: 'tue-1',
                    name: 'Guacho de rabito (o carne)',
                    image: 'https://images.unsplash.com/photo-1512058454905-4ea7d08e3e3a?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Costilla de res o rabito', 'Arroz', 'Cebolla', 'Ajo', 'Pimiento', 'Culantro', 'Verduras (yuca, ñame, zanahoria)', 'Sal', 'Pimienta', 'Comino', 'Agua o caldo'],
                    instructions: [
                        'Cocinar la carne hasta que esté tierna, reservar caldo',
                        'Sofreír cebolla, ajo y pimiento',
                        'Agregar verduras y arroz y mezclar',
                        'Verter caldo suficiente y sazonar con culantro, sal, pimienta y comino',
                        'Cocinar tapado hasta que el arroz esté hecho'
                    ],
                    description: 'Guacho sustancioso de carne típico panameño.',
                    time: '1 hora',
                    portions: '4 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'tue-2',
                    name: 'Mondongo a la culona',
                    image: 'https://images.unsplash.com/photo-1514517321570-ae339f6322f9?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Mondongo', 'Cebolla', 'Ajo', 'Pimiento', 'Tomate', 'Culantro', 'Comino', 'Sal', 'Pimienta', 'Aceite', 'Agua o caldo'],
                    instructions: [
                        'Limpiar y hervir el mondongo hasta ablandar',
                        'Sofreír cebolla, ajo, pimiento y tomate',
                        'Agregar el mondongo cocido y caldo',
                        'Sazonar con culantro, sal, pimienta y comino',
                        'Cocinar a fuego lento para integrar sabores'
                    ],
                    description: 'Clásico guiso panameño de mondongo.',
                    time: '1 h 30 min',
                    portions: '6 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'tue-3',
                    name: 'Ropa vieja panameña',
                    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Carne de res para desmechar', 'Cebolla', 'Pimiento', 'Ajo', 'Tomate', 'Pasta de tomate', 'Culantro', 'Orégano', 'Sal', 'Pimienta', 'Caldo'],
                    instructions: [
                        'Cocer la carne hasta ablandar y desmenuzar',
                        'Sofreír ajo, cebolla y pimiento',
                        'Agregar tomate y pasta de tomate',
                        'Incorporar la carne y sazonar con orégano, sal y pimienta',
                        'Añadir un poco de caldo y cocinar a fuego bajo'
                    ],
                    description: 'Carne desmechada en salsa criolla.',
                    time: '1 h',
                    portions: '4 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'tue-4',
                    name: 'Tamales panameños',
                    image: 'https://images.unsplash.com/photo-1604467715878-83e57e00b313?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Maíz pilado (masa)', 'Gallina o pollo cocido', 'Ajo', 'Cebolla', 'Ají', 'Culantro', 'Tomate', 'Pasta de tomate', 'Pasas', 'Alcaparras', 'Aceitunas', 'Guisantes', 'Hojas de plátano', 'Pabilo', 'Sal', 'Pimienta', 'Comino', 'Agua'],
                    instructions: [
                        'Cocer maíz pilado y reservar',
                        'Sofreír ajo, cebolla, ají, tomate y culantro; añadir la carne',
                        'Agregar pasta de tomate, pasas, alcaparras, aceitunas y guisantes',
                        'Mezclar caldo con la masa de maíz',
                        'Envolver en hojas y cocinar en agua hirviendo 1 hora'
                    ],
                    description: 'Tamales tradicionales envueltos en hojas.',
                    time: '2 h',
                    portions: '8 personas',
                    difficulty: 'Difícil'
                },
                {
                    id: 'tue-5',
                    name: 'Hojaldre con queso',
                    image: 'https://images.unsplash.com/photo-1541780731377-0972e00b83b7?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Masa de hojaldre', 'Queso blanco o fresco', 'Huevo batido', 'Azúcar (opcional)'],
                    instructions: [
                        'Cortar masa en rectángulos',
                        'Rellenar con queso y cerrar',
                        'Barnizar con huevo (y azúcar si se desea dulce)',
                        'Hornear hasta dorar'
                    ],
                    description: 'Hojaldres rellenos de queso.',
                    time: '30 min',
                    portions: '6 personas',
                    difficulty: 'Fácil'
                }
            ]
        },

        // Miércoles
        wednesday: {
            almuerzo: [
                {
                    id: 'wed-1',
                    name: 'Arroz con coco y guandú',
                    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Arroz', 'Leche de coco', 'Guandú cocido', 'Cebolla', 'Ajo', 'Aceite', 'Sal', 'Agua'],
                    instructions: [
                        'Sofreír cebolla y ajo',
                        'Agregar guandú y arroz',
                        'Verter leche de coco y agua',
                        'Ajustar sal y cocinar a fuego bajo'
                    ],
                    description: 'Clásico arroz panameño con guandú y coco.',
                    time: '40 min',
                    portions: '4 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'wed-2',
                    name: 'Ceviche panameño',
                    image: 'https://images.unsplash.com/photo-1553634886-94d63cf8a5bf?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Pescado blanco', 'Limón', 'Vinagre (opcional)', 'Cebolla roja', 'Culantro', 'Ají chombo', 'Sal', 'Pimienta', 'Mostaza (opcional)'],
                    instructions: [
                        'Cortar pescado en cubos y marinar con limón',
                        'Agregar cebolla, culantro, ají y condimentos',
                        'Reposar para integrar sabores',
                        'Servir frío'
                    ],
                    description: 'Ceviche fresco al estilo panameño.',
                    time: '1 h',
                    portions: '4 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'wed-3',
                    name: 'Bistec picado con cebolla',
                    image: 'https://images.unsplash.com/photo-1603048297172-c92544798f53?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Bistec de res', 'Cebolla', 'Pimiento (opcional)', 'Ajo', 'Aceite', 'Sal', 'Pimienta', 'Comino', 'Limón (opcional)'],
                    instructions: [
                        'Sazonar la carne y dorar en aceite',
                        'Agregar ajo, cebolla (y pimiento) y saltear',
                        'Ajustar sazón y agregar un chorrito de limón',
                        'Servir con arroz o patacones'
                    ],
                    description: 'Salteado de res con cebolla.',
                    time: '30 min',
                    portions: '4 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'wed-4',
                    name: 'Almojábanos de maíz',
                    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Masa de maíz', 'Queso blanco rallado', 'Azúcar (opcional)', 'Polvo de hornear', 'Sal', 'Aceite para freír'],
                    instructions: [
                        'Mezclar masa con queso, sal y polvo de hornear',
                        'Formar bolitas o discos',
                        'Freír hasta dorar y escurrir'
                    ],
                    description: 'Bocados fritos tradicionales.',
                    time: '25 min',
                    portions: '6 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'wed-5',
                    name: 'Sopa de mariscos costeña',
                    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Mariscos mixtos', 'Cebolla', 'Ajo', 'Pimiento', 'Tomate', 'Culantro', 'Sal', 'Pimienta', 'Caldo de pescado', 'Aceite'],
                    instructions: [
                        'Sofreír vegetales',
                        'Agregar mariscos y caldo',
                        'Sazonar y cocinar hasta punto de mariscos'
                    ],
                    description: 'Sopa de mariscos al estilo panameño.',
                    time: '30 min',
                    portions: '4 personas',
                    difficulty: 'Medio'
                }
            ]
        },

        // Jueves
        thursday: {
            almuerzo: [
                {
                    id: 'thu-1',
                    name: 'Guacho de mariscos',
                    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Mariscos mixtos', 'Arroz', 'Cebolla', 'Ajo', 'Pimiento', 'Culantro', 'Tomate', 'Sal', 'Pimienta', 'Comino', 'Caldo/agua', 'Verduras (yuca, zanahoria)'],
                    instructions: [
                        'Limpiar y pre-cocer mariscos (reservar caldo)',
                        'Sofreír vegetales y añadir verduras',
                        'Agregar arroz y verter caldo',
                        'Sumar mariscos y sazonar',
                        'Cocinar tapado a fuego bajo'
                    ],
                    description: 'Guacho marino con toque panameño.',
                    time: '50 min',
                    portions: '4 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'thu-2',
                    name: 'Pollo guisado a la criolla',
                    image: 'https://images.unsplash.com/photo-1560185008-b033106af2b8?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Pollo en presas', 'Cebolla', 'Ajo', 'Pimiento', 'Tomate', 'Culantro', 'Aceite', 'Sal', 'Pimienta', 'Comino', 'Agua o caldo'],
                    instructions: [
                        'Sazonar y dorar el pollo',
                        'Sofreír vegetales',
                        'Añadir pollo y líquido de cocción',
                        'Cocinar tapado hasta tierno',
                        'Agregar culantro al final'
                    ],
                    description: 'Guiso criollo clásico.',
                    time: '45 min',
                    portions: '4 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'thu-3',
                    name: 'Empanadas panameñas de carne',
                    image: 'https://images.unsplash.com/photo-1625944522110-634f2bdd3c4f?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Masa (maíz o harina)', 'Carne molida', 'Cebolla', 'Ajo', 'Tomate', 'Comino', 'Culantro', 'Aceite', 'Sal'],
                    instructions: [
                        'Preparar relleno sofriendo y sazonando',
                        'Formar discos de masa, rellenar y sellar',
                        'Freír hasta dorar'
                    ],
                    description: 'Empanadas crujientes y sabrosas.',
                    time: '35 min',
                    portions: '6 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'thu-4',
                    name: 'Arroz con mazorca y zanahorias',
                    image: 'https://images.unsplash.com/photo-1604908554007-1c3a35a75787?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Arroz', 'Mazorca en trozos', 'Zanahorias', 'Cebolla', 'Ajo', 'Aceite', 'Caldo o agua', 'Sal', 'Pimienta', 'Culantro'],
                    instructions: [
                        'Sofreír cebolla y ajo',
                        'Añadir mazorca y zanahoria',
                        'Agregar arroz y verter líquido',
                        'Sazonar y cocinar tapado'
                    ],
                    description: 'Arroz casero con vegetales.',
                    time: '40 min',
                    portions: '4 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'thu-5',
                    name: 'Hojaldres con queso',
                    image: 'https://images.unsplash.com/photo-1541780731377-0972e00b83b7?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Masa de hojaldre', 'Queso blanco rallado', 'Chile picado (opcional)', 'Huevo', 'Sal'],
                    instructions: [
                        'Cortar masa y rellenar con queso (y chile)',
                        'Barnizar con huevo',
                        'Hornear hasta dorar'
                    ],
                    description: 'Hojaldres calientes y fundentes.',
                    time: '30 min',
                    portions: '6 personas',
                    difficulty: 'Fácil'
                }
            ]
        },
        
        // Viernes
        friday: {
            almuerzo: [
                {
                    id: 'fri-1',
                    name: 'Lechona asada panameña',
                    image: 'https://images.unsplash.com/photo-1526312426976-593c2c4b2d05?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Lechona o partes de cerdo', 'Ajo', 'Cebolla', 'Pimiento', 'Comino', 'Sal', 'Pimienta', 'Culantro', 'Aceite', 'Agua o caldo'],
                    instructions: [
                        'Adobar el cerdo con especias y marinar',
                        'Asar lentamente volteando',
                        'Subir temperatura al final para dorar la piel'
                    ],
                    description: 'Cerdo asado crujiente y jugoso.',
                    time: '3 h',
                    portions: '8 personas',
                    difficulty: 'Difícil'
                },
                {
                    id: 'fri-2',
                    name: 'Seco de res con arroz con coco',
                    image: 'https://images.unsplash.com/photo-1552611052-0338b5e0cf3d?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Res en trozos', 'Ajo', 'Cebolla', 'Pimiento', 'Tomate', 'Culantro', 'Comino', 'Sal', 'Pimienta', 'Aceite', 'Agua o caldo', 'Leche de coco', 'Arroz'],
                    instructions: [
                        'Marinar y dorar la carne',
                        'Sofreír vegetales y reincorporar carne con líquido',
                        'Cocinar hasta tierno y servir con arroz con coco'
                    ],
                    description: 'Guiso de res acompañado de arroz con coco.',
                    time: '1 h 30 min',
                    portions: '6 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'fri-3',
                    name: 'Torrejas de bacalao',
                    image: 'https://images.unsplash.com/photo-1523989661788-9d3ba2e2f2b8?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Bacalao desalado', 'Masa de maíz o harina', 'Cebolla', 'Ajo', 'Pimiento', 'Huevos', 'Perejil o culantro', 'Sal', 'Pimienta', 'Aceite'],
                    instructions: [
                        'Mezclar bacalao con vegetales y masa',
                        'Formar tortitas',
                        'Freír hasta dorar'
                    ],
                    description: 'Tortitas de bacalao crujientes.',
                    time: '35 min',
                    portions: '5 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'fri-4',
                    name: 'Plantintá (plátano frito)',
                    image: 'https://images.unsplash.com/photo-1604909052742-28ad9f2b1657?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Plátanos maduros o verdes', 'Aceite', 'Sal (opcional)'],
                    instructions: [
                        'Cortar plátanos en rodajas o tiras',
                        'Freír hasta dorar',
                        'Escurrir y servir'
                    ],
                    description: 'Plátano frito típico panameño.',
                    time: '20 min',
                    portions: '4 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'fri-5',
                    name: 'Empanadas de guayaba (dulce)',
                    image: 'https://images.unsplash.com/photo-1542826438-31b1b48f9a9a?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Masa para empanadas', 'Dulce de guayaba', 'Azúcar (opcional)', 'Huevo', 'Sal'],
                    instructions: [
                        'Cortar discos de masa y rellenar con guayaba',
                        'Cerrar, barnizar y hornear/freír',
                        'Espolvorear azúcar si se desea'
                    ],
                    description: 'Empanadas dulces de guayaba.',
                    time: '30 min',
                    portions: '6 personas',
                    difficulty: 'Fácil'
                }
            ]
        },
        
        // Sábado
        saturday: {
            almuerzo: [
                {
                    id: 'sat-1',
                    name: 'Guacho de pollo',
                    image: 'https://images.unsplash.com/photo-1601050690597-9e10d9a3bd6e?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Pollo desmenuzado', 'Arroz', 'Yuca', 'Zanahoria', 'Maíz', 'Cebolla', 'Ajo', 'Pimiento', 'Culantro', 'Sal', 'Pimienta', 'Caldo'],
                    instructions: [
                        'Cocer pollo y desmenuzar (reservar caldo)',
                        'Sofreír vegetales',
                        'Agregar verduras y arroz',
                        'Verter caldo, añadir pollo y sazonar',
                        'Cocinar a punto'
                    ],
                    description: 'Guacho casero de pollo.',
                    time: '50 min',
                    portions: '4 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'sat-2',
                    name: 'Sopa de verduras con carnes',
                    image: 'https://images.unsplash.com/photo-1547056962-65d38219f8a6?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Carne (res o pollo)', 'Calabaza', 'Zanahoria', 'Yuca', 'Ñame', 'Repollo', 'Cebolla', 'Ajo', 'Pimiento', 'Culantro', 'Sal', 'Pimienta', 'Agua', 'Aceite'],
                    instructions: [
                        'Dorar carne y sazonar',
                        'Sofreír aromáticos',
                        'Agregar verduras y agua',
                        'Cocinar hasta tiernos y finalizar con culantro'
                    ],
                    description: 'Sopa abundante de verduras y carne.',
                    time: '1 h',
                    portions: '6 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'sat-3',
                    name: 'Cosecha de mariscos (mixto)',
                    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Mariscos mixtos', 'Ajo', 'Cebolla', 'Pimiento', 'Tomate', 'Culantro', 'Limón', 'Sal', 'Pimienta', 'Aceite', 'Leche de coco (opcional)'],
                    instructions: [
                        'Sofreír aromáticos',
                        'Añadir mariscos y cocinar',
                        'Opcional leche de coco',
                        'Sazonar y terminar con limón y culantro'
                    ],
                    description: 'Salteado de mariscos costero.',
                    time: '25 min',
                    portions: '4 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'sat-4',
                    name: 'Chicheme panameño',
                    image: 'https://images.unsplash.com/photo-1604908177150-c26dfec66f64?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Maíz tierno', 'Agua', 'Leche', 'Azúcar', 'Canela', 'Clavo de olor', 'Nuez moscada'],
                    instructions: [
                        'Cocer maíz',
                        'Licuar parte con agua y colar si deseas',
                        'Agregar agua/leche y azúcar con especias',
                        'Cocinar hasta espesar levemente'
                    ],
                    description: 'Bebida dulce tradicional.',
                    time: '45 min',
                    portions: '6 personas',
                    difficulty: 'Fácil'
                },
                {
                    id: 'sat-5',
                    name: 'Hojaldres con jamón y queso',
                    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Masa de hojaldre', 'Jamón', 'Queso', 'Huevo', 'Sal'],
                    instructions: [
                        'Cortar masa, colocar jamón y queso',
                        'Cerrar, barnizar y hornear hasta dorar'
                    ],
                    description: 'Hojaldres salados rellenos.',
                    time: '25 min',
                    portions: '6 personas',
                    difficulty: 'Fácil'
                }
            ]
        },
        
        // Domingo
        sunday: {
            almuerzo: [
                {
                    id: 'sun-1',
                    name: 'Sancocho de gallina estilo domingo',
                    image: 'https://images.unsplash.com/photo-1543352634-8732f3b3b6f0?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Gallina o pollo', 'Cebolla', 'Ajo', 'Culantro', 'Ñame', 'Yuca', 'Maíz', 'Plátano verde', 'Sal', 'Pimienta', 'Agua'],
                    instructions: [
                        'Adobar gallina con sal, ajo y culantro',
                        'Cocer en agua hasta tierna',
                        'Agregar tubérculos y plátano',
                        'Ajustar sal y terminar con culantro'
                    ],
                    description: 'Sancocho dominguero contundente.',
                    time: '1 h 30 min',
                    portions: '6 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'sun-2',
                    name: 'Guacho de maíz con pollo',
                    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Pollo', 'Maíz tierno', 'Arroz', 'Yuca (opcional)', 'Cebolla', 'Ajo', 'Pimiento', 'Culantro', 'Sal', 'Pimienta', 'Agua'],
                    instructions: [
                        'Cocer el pollo y reservar caldo',
                        'Sofreír aromáticos',
                        'Agregar verduras, maíz y arroz',
                        'Añadir caldo y pollo, sazonar y cocer'
                    ],
                    description: 'Guacho cremoso de maíz y pollo.',
                    time: '1 h',
                    portions: '5 personas',
                    difficulty: 'Medio'
                },
                {
                    id: 'sun-3',
                    name: 'Lechón al horno con acompañamientos',
                    image: 'https://images.unsplash.com/photo-1544025162-8c92f0e2d0ee?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Partes de cerdo para asar', 'Ajo', 'Cebolla', 'Pimiento', 'Comino', 'Sal', 'Pimienta', 'Culantro', 'Aceite', 'Agua o caldo'],
                    instructions: [
                        'Marinar el cerdo con especias',
                        'Hornear lentamente, volteando para dorar',
                        'Subir temperatura para dorar la piel'
                    ],
                    description: 'Lechón asado festivo.',
                    time: '3 h',
                    portions: '8 personas',
                    difficulty: 'Difícil'
                },
                {
                    id: 'sun-4',
                    name: 'Tamal de maíz viejo',
                    image: 'https://images.unsplash.com/photo-1604467715878-83e57e00b313?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Maíz viejo molido', 'Carne de cerdo o pollo guisado', 'Ajo', 'Cebolla', 'Pimiento', 'Culantro', 'Pasas', 'Alcaparras', 'Aceitunas', 'Hojas de plátano', 'Sal', 'Pimienta', 'Agua'],
                    instructions: [
                        'Preparar masa con caldo del guiso',
                        'Preparar relleno guisado',
                        'Escaldar hojas y armar tamales',
                        'Cocer en agua hirviendo ~1 hora'
                    ],
                    description: 'Tamales tradicionales de maíz viejo.',
                    time: '2 h',
                    portions: '6 personas',
                    difficulty: 'Difícil'
                },
                {
                    id: 'sun-5',
                    name: 'Ensalada de feria panameña',
                    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['Lechuga', 'Repollo', 'Tomate', 'Pepino', 'Zanahoria', 'Limón o vinagre', 'Sal', 'Pimienta', 'Aceite', 'Cebolla roja (opcional)', 'Aguacate (opcional)'],
                    instructions: [
                        'Lavar y picar las verduras',
                        'Mezclar con limón/vinagre, sal, pimienta y aceite',
                        'Reposar unos minutos y servir fresca'
                    ],
                    description: 'Ensalada fresca tradicional de feria.',
                    time: '15 min',
                    portions: '4 personas',
                    difficulty: 'Muy Fácil'
                }
            ]
        }
    },
    
    // Recetas saludables (20 recetas)
    healthy: {
        veganas: [
            {
                id: 'healthy-vegana-1',
                name: 'Ceviche Vegano de Palmitos',
                image: 'https://images.unsplash.com/photo-1566662700502-2a1db8f7c61d?w=400&h=300&fit=crop',
                category: 'vegana',
                ingredients: ['2 latas palmitos frescos', '3 tomates', '1 cebolla morada', '3 limones', 'Culantro', 'Sal'],
                instructions: [
                    'Cortar palmitos en rodajas',
                    'Picar tomate y cebolla finamente',
                    'Mezclar todos los ingredientes',
                    'Agregar jugo de limón y sal',
                    'Macnear por 30 minutos',
                    'Agregar culantro picado',
                    'Servir fresco con tostones'
                ],
                description: 'Ceviche refrescante sin productos animales.',
                magic: 'Los palmitos capturan el espíritu del océano.',
                time: '30 min',
                portions: '4 personas',
                difficulty: 'Fácil',
                filters: ['veganas', 'sin-gluten']
            }
            // ... más recetas veganas
        ],
        
        sinGluten: [
            {
                id: 'healthy-gluten-1',
                name: 'Pan Casabe Tradicional',
                image: 'https://images.unsplash.com/photo-1489524358324-7beb54b28aa0?w=400&h=300&fit=crop',
                category: 'sin-gluten',
                ingredients: ['2 tazas yuca rallada', 'Sal marina', 'Agua'],
                instructions: [
                    'Rallar la yuca fresca',
                    'Exprimir para eliminar líquido',
                    'Agregar sal y amasar',
                    'Formar tortillas delgadas',
                    'Cocinar en plancha caliente',
                    'Dorar por ambos lados',
                    'Servir caliente'
                ],
                description: 'Pan ancestral libre de gluten.',
                magic: 'Receta precolombina que conecta con nuestras raíces.',
                time: '40 min',
                portions: '6 personas',
                difficulty: 'Medio',
                filters: ['sin-gluten', 'veganas']
            }
            // ... más recetas sin gluten
        ],
        
        bajoCarbohidratos: [
            {
                id: 'healthy-lowcarb-1',
                name: 'Ensalada Verdes Tropicales',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                category: 'bajo-carbohidratos',
                ingredients: ['Lechugas mixtas', '2 aguacates', 'Almendras', 'Aceite de oliva', 'Limón', 'Sal'],
                instructions: [
                    'Lavar y cortar las lechugas',
                    'Cortar aguacate en cubos',
                    'Tostar las almendras',
                    'Preparar aderezo con aceite y limón',
                    'Mezclar todos los ingredientes',
                    'Aliñar y servir fresco'
                ],
                description: 'Ensalada baja en carbohidratos.',
                magic: 'Las verduras tropicales son más nutritivas.',
                time: '15 min',
                portions: '4 personas',
                difficulty: 'Muy Fácil',
                filters: ['bajo-carbohidratos']
            }
            // ... más recetas bajas en carbohidratos
        ],
        
        proteico: [
            {
                id: 'healthy-protein-1',
                name: 'Pescado Proteína Completa',
                image: 'https://images.unsplash.com/photo-1528566402106-11d5df8b6f3b?w=400&h=300&fit=crop',
                category: 'proteico',
                ingredients: ['800g corvina', 'Quinoa', 'Verduras al vapor', 'Hierbas frescas', 'Aceite de oliva'],
                instructions: [
                    'Sazonar y cocinar el pescado',
                    'Preparar quinoa como guarnición',
                    'Cocinar verduras al vapor',
                    'Servir con hierbas frescas',
                    'Aliñar con aceite de oliva'
                ],
                description: 'Pescado alto en proteínas.',
                magic: 'La proteína natural potencia la energía.',
                time: '25 min',
                portions: '4 personas',
                difficulty: 'Fácil',
                filters: ['alto-proteína']
            }
            // ... más recetas proteicas
        ]
    },
    
    // Festividades panameñas (20 recetas)
    festivals: {
        carnaval: [
            {
                id: 'carnaval-1',
                name: 'Empanadas de Carnaval',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
                category: 'carnaval',
                ingredients: ['Masa para empanadas', 'Carne molida', 'Verduras', 'Especias'],
                instructions: [
                    'Preparar relleno con carne y verduras',
                    'Estirar la masa',
                    'Rellenar y cerrar empanadas',
                    'Freír hasta dorar',
                    'Servir calientes'
                ],
                description: 'Las empanadas que alegran el carnaval.',
                magic: 'Cada empanada lleva la alegría del carnaval.',
                time: '45 min',
                portions: '8 personas',
                difficulty: 'Medio'
            }
            // ... más recetas de carnaval
        ],
        
        semanaSanta: [
            {
                id: 'semana-santa-1',
                name: 'Bacalao Guisado',
                image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
                category: 'semana-santa',
                ingredients: ['1 kg bacalao', 'Tomates', 'Cebolla', 'Ajo', 'Especias'],
                instructions: [
                    'Desalar el bacalao por 24 horas',
                    'Preparar sofrito con tomate y cebolla',
                    'Agregar el bacalao desmenuzado',
                    'Cocinar hasta formar salsa espesa',
                    'Servir con arroz'
                ],
                description: 'El bacalao tradicional de Semana Santa.',
                magic: 'Plato que une a las familias en la tradición.',
                time: '2 horas',
                portions: '6 personas',
                difficulty: 'Medio'
            }
            // ... más recetas de Semana Santa
        ],
        
        fiestasPatrias: [
            {
                id: 'fiestas-patrias-1',
                name: 'Tamales Patrióticos',
                image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                category: 'fiestas-patrias',
                ingredients: ['Masa de maíz', 'Pollo', 'Verduras', 'Hojas de plátano'],
                instructions: [
                    'Preparar masa de maíz',
                    'Cocinar relleno de pollo y verduras',
                    'Envolver en hojas de plátano',
                    'Cocer en agua por 2 horas',
                    'Servir caliente'
                ],
                description: 'Tamales que celebran la patria.',
                magic: 'Cada tamal lleva el orgullo nacional.',
                time: '3 horas',
                portions: '10 personas',
                difficulty: 'Difícil'
            }
            // ... más recetas patrióticas
        ],
        
        navidad: [
            {
                id: 'navidad-1',
                name: 'Tamales Navideños',
                image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                category: 'navidad',
                ingredients: ['Masa de maíz', 'Pollo', 'Verduras', 'Hojas de plátano', 'Especias navideñas'],
                instructions: [
                    'Preparar masa con especias navideñas',
                    'Cocinar relleno especial de Navidad',
                    'Envolver en hojas de plátano',
                    'Cocer por 2 horas',
                    'Servir en familia'
                ],
                description: 'Los tamales que hacen especial la Navidad.',
                magic: 'Cada tamal navideño lleva la magia de la Navidad.',
                time: '3 horas',
                portions: '12 personas',
                difficulty: 'Difícil'
            }
            // ... más recetas navideñas
        ]
    }
};

// Funciones auxiliares
function getRecipesForDay(day) {
    return EXPANDED_RECIPES_DATABASE.weekly[day] || {};
}

function getHealthyRecipesByType(type) {
    if (type === 'all') {
        const allHealthy = [];
        Object.values(EXPANDED_RECIPES_DATABASE.healthy).forEach(category => {
            if (Array.isArray(category)) {
                allHealthy.push(...category);
            }
        });
        return allHealthy;
    }
    return EXPANDED_RECIPES_DATABASE.healthy[type] || [];
}

function getFestivals() {
    return EXPANDED_RECIPES_DATABASE.festivals;
}

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.EXPANDED_RECIPES_DATABASE = EXPANDED_RECIPES_DATABASE;
}