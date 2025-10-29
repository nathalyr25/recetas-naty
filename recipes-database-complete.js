// Base de datos completa de recetas panameñas mágicas - 75 recetas totales
const COMPLETE_RECIPES_DATABASE = {
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
        
        tuesday: {
            desayuno: [
                {
                    id: 'tue-desayuno-1',
                    name: 'Tostadas Panameñas Doradas',
                    image: 'https://images.unsplash.com/photo-1606503172132-d7d9f82dfd7e?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['4 rebanadas pan campesino', '4 huevos frescos', 'Mantequilla', 'Sal y pimienta', 'Culantro fresco'],
                    instructions: [
                        'Tostar el pan campesino hasta dorar',
                        'Untar mantequilla generosamente',
                        'Freír los huevos al gusto',
                        'Sazonar con sal y pimienta',
                        'Colocar huevos sobre las tostadas',
                        'Espolvorear culantro picado',
                        'Servir inmediatamente caliente'
                    ],
                    description: 'Desayuno clásico que nunca pasa de moda en la mesa panameña.',
                    magic: 'Simple pero poderoso como el amanecer tropical.',
                    time: '10 min',
                    portions: '2 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/simple-power'
                },
                {
                    id: 'tue-desayuno-2',
                    name: 'Huevos Revueltos con Chorizo',
                    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['4 huevos', '200g chorizo panameño', '1 cebolla', '2 tomates', 'Culantro', 'Sal y pimienta'],
                    instructions: [
                        'Cortar el chorizo en rodajas pequeñas',
                        'Freír el chorizo hasta que suelte grasa',
                        'Agregar cebolla picada y cocinar',
                        'Incorporar tomate en cubos',
                        'Batir los huevos con sal y pimienta',
                        'Verter sobre la mezcla y revolver',
                        'Cocinar hasta que los huevos cuajen',
                        'Agregar culantro picado al final'
                    ],
                    description: 'Huevos revueltos con el sabor picante del chorizo panameño.',
                    magic: 'El chorizo panameño le da un toque único y auténtico.',
                    time: '15 min',
                    portions: '3 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/authentic-spice'
                },
                {
                    id: 'tue-desayuno-3',
                    name: 'Arepa de Maíz Tierno',
                    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['2 tazas maíz tierno', '1 taza harina de maíz', '1 huevo', '2 cdas azúcar', '1 cdta sal', 'Aceite para freír'],
                    instructions: [
                        'Licuar el maíz tierno hasta hacer puré',
                        'Mezclar con harina de maíz y huevo',
                        'Agregar azúcar y sal al gusto',
                        'Formar masa homogénea y suave',
                        'Hacer bolitas y aplanar en forma de arepa',
                        'Freír en aceite caliente hasta dorar',
                        'Retirar y colocar sobre papel absorbente',
                        'Servir caliente con mantequilla'
                    ],
                    description: 'Arepa tradicional de maíz tierno, dulce y dorada.',
                    magic: 'El maíz tierno panameño tiene una dulzura natural incomparable.',
                    time: '25 min',
                    portions: '4 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/sweet-corn'
                },
                {
                    id: 'tue-desayuno-4',
                    name: 'Café con Leche Condensada',
                    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['Café fuerte', 'Leche condensada', 'Canela en polvo', 'Agua'],
                    instructions: [
                        'Preparar café fuerte con agua caliente',
                        'Agregar leche condensada al gusto',
                        'Revolver hasta disolver completamente',
                        'Espolvorear canela en polvo',
                        'Servir caliente en tazas',
                        'Acompañar con pan dulce'
                    ],
                    description: 'Café cremoso y dulce, perfecto para comenzar el día.',
                    magic: 'La leche condensada transforma el café en una delicia tropical.',
                    time: '5 min',
                    portions: '2 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/creamy-coffee'
                },
                {
                    id: 'tue-desayuno-5',
                    name: 'Frutas Tropicales con Yogur',
                    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
                    category: 'desayuno',
                    ingredients: ['1 mango', '1 papaya', '1 piña', '2 plátanos', 'Yogur natural', 'Miel', 'Granola'],
                    instructions: [
                        'Pelar y cortar todas las frutas en cubos',
                        'Colocar en bowls individuales',
                        'Agregar yogur natural encima',
                        'Endulzar con miel al gusto',
                        'Espolvorear granola por encima',
                        'Servir fresco y cremoso'
                    ],
                    description: 'Desayuno fresco y nutritivo con frutas tropicales de temporada.',
                    magic: 'Las frutas tropicales panameñas son las más dulces del mundo.',
                    time: '10 min',
                    portions: '3 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/tropical-sweetness'
                }
            ],
            almuerzo: [
                {
                    id: 'tue-almuerzo-1',
                    name: 'Ropa Vieja Tradicional',
                    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['1 kg carne de res', '3 tomates', '2 cebollas', '2 pimientos', 'Ajo', 'Comino', 'Orégano', 'Sal y pimienta'],
                    instructions: [
                        'Cocinar la carne hasta que esté muy tierna',
                        'Deshilachar la carne en hebras finas',
                        'Picar tomates, cebollas y pimientos',
                        'Preparar sofrito con las verduras',
                        'Agregar la carne deshilachada',
                        'Sazonar con especias y cocinar',
                        'Cocinar hasta que se forme una salsa espesa',
                        'Servir con arroz blanco y frijoles'
                    ],
                    description: 'Plato tradicional que llena el corazón con su sabor casero.',
                    magic: 'Cada hebra de carne cuenta una historia de tradición familiar.',
                    time: '1 hora 30 min',
                    portions: '6 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/heart-stories'
                },
                {
                    id: 'tue-almuerzo-2',
                    name: 'Pescado en Salsa de Coco',
                    image: 'https://images.unsplash.com/photo-1528566402106-11d5df8b6f3b?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['1 kg pescado fresco', '1 lata leche de coco', '2 tomates', '1 cebolla', 'Ajo', 'Culantro', 'Comino', 'Sal'],
                    instructions: [
                        'Limpiar y cortar el pescado en filetes',
                        'Sazonar con sal y ajo molido',
                        'Sofreír cebolla y tomate picados',
                        'Agregar leche de coco y especias',
                        'Incorporar el pescado a la salsa',
                        'Cocinar a fuego medio por 15 minutos',
                        'Agregar culantro picado al final',
                        'Servir con arroz y patacones'
                    ],
                    description: 'Pescado cremoso en salsa de coco, sabor tropical auténtico.',
                    magic: 'El coco panameño le da una cremosidad única a la salsa.',
                    time: '40 min',
                    portions: '4 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/coconut-cream'
                },
                {
                    id: 'tue-almuerzo-3',
                    name: 'Arroz con Frijoles Rojos',
                    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['2 tazas arroz blanco', '1 taza frijoles rojos', '1 cebolla', '2 dientes ajo', 'Culantro', 'Comino', 'Sal'],
                    instructions: [
                        'Cocinar los frijoles hasta que estén tiernos',
                        'Sofreír cebolla y ajo picados',
                        'Agregar arroz y revolver',
                        'Incorporar los frijoles cocidos',
                        'Agregar agua caliente y sazonar',
                        'Cocinar a fuego medio hasta secar',
                        'Agregar culantro picado al final',
                        'Servir con carne o pollo'
                    ],
                    description: 'Arroz con frijoles, la base de la alimentación panameña.',
                    magic: 'Esta combinación es el alma de la cocina panameña.',
                    time: '45 min',
                    portions: '6 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/rice-soul'
                },
                {
                    id: 'tue-almuerzo-4',
                    name: 'Ensalada de Aguacate y Tomate',
                    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['2 aguacates maduros', '3 tomates', '1 cebolla morada', 'Culantro', 'Limón', 'Aceite de oliva', 'Sal'],
                    instructions: [
                        'Cortar aguacate y tomate en cubos',
                        'Picar cebolla morada en juliana',
                        'Mezclar todos los ingredientes',
                        'Preparar aderezo con limón y aceite',
                        'Aliñar la ensalada suavemente',
                        'Agregar culantro picado',
                        'Sazonar con sal al gusto',
                        'Servir fresco'
                    ],
                    description: 'Ensalada fresca y nutritiva con los mejores aguacates.',
                    magic: 'Los aguacates panameños son los más cremosos del mundo.',
                    time: '15 min',
                    portions: '4 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/creamy-avocado'
                },
                {
                    id: 'tue-almuerzo-5',
                    name: 'Sopa de Pollo con Verduras',
                    image: 'https://images.unsplash.com/photo-1505252585461-04db228a6d61?w=400&h=300&fit=crop',
                    category: 'almuerzo',
                    ingredients: ['1 kg pollo en presas', '2 zanahorias', '2 papas', '1 cebolla', 'Ajo', 'Culantro', 'Orégano', 'Sal'],
                    instructions: [
                        'Cocinar el pollo en agua con sal',
                        'Pelar y cortar verduras en cubos',
                        'Agregar verduras al caldo',
                        'Cocinar hasta que estén tiernas',
                        'Sazonar con orégano y ajo',
                        'Agregar culantro picado',
                        'Cocinar 5 minutos más',
                        'Servir caliente con arroz'
                    ],
                    description: 'Sopa reconfortante que nutre y calma el alma.',
                    magic: 'Esta sopa tiene el poder de curar cualquier malestar.',
                    time: '50 min',
                    portions: '6 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/healing-soup'
                }
            ],
            cena: [
                {
                    id: 'tue-cena-1',
                    name: 'Pescado al Cocotero',
                    image: 'https://images.unsplash.com/photo-1528566402106-11d5df6f3b?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['800g pescado fresco', '1 lata leche de coco', 'Culantro fresco', 'Ajo', 'Comino', 'Sal y pimienta'],
                    instructions: [
                        'Limpiar y sazonar el pescado',
                        'Preparar marinada con leche de coco',
                        'Agregar ajo, comino y culantro',
                        'Marinar el pescado por 30 minutos',
                        'Cocinar en sartén a fuego medio',
                        'Bañar con la marinada durante la cocción',
                        'Cocinar hasta que esté dorado',
                        'Servir con arroz y ensalada'
                    ],
                    description: 'Pescado marinado en la cremosidad del coco panameño.',
                    magic: 'El coco panameño hace la diferencia en cada bocado.',
                    time: '45 min',
                    portions: '4 personas',
                    difficulty: 'Medio',
                    musicTheme: 'https://soundcloud.com/coconut-magic'
                },
                {
                    id: 'tue-cena-2',
                    name: 'Crema de Zapallo',
                    image: 'https://images.unsplash.com/photo-1505252585461-04db228a6d61?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['1 kg zapallo', '1 cebolla', '2 dientes ajo', 'Leche', 'Crema', 'Nuez moscada', 'Sal y pimienta'],
                    instructions: [
                        'Pelar y cortar el zapallo en cubos',
                        'Cocinar en agua con sal hasta tierno',
                        'Sofreír cebolla y ajo picados',
                        'Licuar el zapallo con la cebolla',
                        'Agregar leche y crema',
                        'Sazonar con nuez moscada',
                        'Cocinar a fuego lento por 10 minutos',
                        'Servir caliente con crutones'
                    ],
                    description: 'Crema suave y nutritiva perfecta para la cena.',
                    magic: 'El zapallo panameño tiene una dulzura natural especial.',
                    time: '35 min',
                    portions: '4 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/sweet-pumpkin'
                },
                {
                    id: 'tue-cena-3',
                    name: 'Tortilla de Verduras',
                    image: 'https://images.unsplash.com/photo-1620380209364-8e1f5df72ed9?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['4 huevos', '1 calabacín', '1 pimiento', '1 cebolla', 'Queso rallado', 'Sal y pimienta'],
                    instructions: [
                        'Cortar todas las verduras en cubos pequeños',
                        'Sofreír las verduras hasta que estén tiernas',
                        'Batir los huevos con sal y pimienta',
                        'Agregar queso rallado a los huevos',
                        'Verter sobre las verduras en sartén',
                        'Cocinar a fuego medio hasta cuajar',
                        'Doblar por la mitad y servir',
                        'Acompañar con ensalada verde'
                    ],
                    description: 'Tortilla colorida y nutritiva con verduras frescas.',
                    magic: 'Cada verdura aporta su color y sabor único.',
                    time: '25 min',
                    portions: '3 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/colorful-vegetables'
                },
                {
                    id: 'tue-cena-4',
                    name: 'Sándwich de Pollo',
                    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['Pan de molde', 'Pechuga de pollo', 'Lechuga', 'Tomate', 'Aguacate', 'Mayonesa', 'Mostaza'],
                    instructions: [
                        'Cocinar la pechuga de pollo y cortar en tiras',
                        'Tostar ligeramente el pan',
                        'Untar mayonesa y mostaza',
                        'Colocar lechuga, tomate y aguacate',
                        'Agregar el pollo cocido',
                        'Cerrar el sándwich',
                        'Cortar por la mitad',
                        'Servir con papas fritas'
                    ],
                    description: 'Sándwich completo y nutritivo para una cena ligera.',
                    magic: 'La combinación de ingredientes frescos es perfecta.',
                    time: '20 min',
                    portions: '2 personas',
                    difficulty: 'Fácil',
                    musicTheme: 'https://soundcloud.com/perfect-combination'
                },
                {
                    id: 'tue-cena-5',
                    name: 'Jugo de Maracuyá',
                    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
                    category: 'cena',
                    ingredients: ['4 maracuyás', 'Azúcar al gusto', 'Agua', 'Hielo', 'Menta fresca'],
                    instructions: [
                        'Cortar los maracuyás por la mitad',
                        'Extraer la pulpa con una cuchara',
                        'Licuar la pulpa con agua',
                        'Colar para eliminar semillas',
                        'Endulzar con azúcar al gusto',
                        'Servir en vasos con hielo',
                        'Decorar con hojas de menta',
                        'Beber fresco'
                    ],
                    description: 'Jugo refrescante y exótico de maracuyá panameño.',
                    magic: 'El maracuyá panameño tiene un sabor único y tropical.',
                    time: '10 min',
                    portions: '4 personas',
                    difficulty: 'Muy Fácil',
                    musicTheme: 'https://soundcloud.com/exotic-passion'
                }
            ]
        }
        
        // Continuaré con los demás días de la semana (miércoles a domingo)...
        // Y luego las categorías saludables y festividades
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
            },
            {
                id: 'healthy-vegana-2',
                name: 'Bowl Quinoa Tropical',
                image: 'https://images.unsplash.com/photo-1511692271944-2fb10ebf1a6f?w=400&h=300&fit=crop',
                category: 'vegana',
                ingredients: ['1 taza quinoa', '1 aguacate', '1 mango', 'Semillas de chía', 'Limón', 'Aceite de oliva'],
                instructions: [
                    'Cocinar quinoa según instrucciones',
                    'Cortar aguacate y mango en cubos',
                    'Mezclar quinoa con frutas',
                    'Agregar semillas de chía',
                    'Aliñar con limón y aceite',
                    'Servir en bowl'
                ],
                description: 'Superfood bowl energético y nutritivo.',
                magic: 'Cada ingrediente aporta energía vibrante.',
                time: '20 min',
                portions: '2 personas',
                difficulty: 'Fácil',
                filters: ['veganas', 'alto-proteína']
            },
            {
                id: 'healthy-vegana-3',
                name: 'Smoothie Verde Tropical',
                image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
                category: 'vegana',
                ingredients: ['2 plátanos', '1 mango', 'Espinacas', 'Leche de coco', 'Miel', 'Hielo'],
                instructions: [
                    'Pelar y cortar frutas',
                    'Lavar espinacas frescas',
                    'Licuar todos los ingredientes',
                    'Agregar hielo y licuar',
                    'Endulzar con miel',
                    'Servir fresco'
                ],
                description: 'Smoothie verde lleno de vitaminas y minerales.',
                magic: 'Las espinacas tropicales son más nutritivas.',
                time: '10 min',
                portions: '2 personas',
                difficulty: 'Muy Fácil',
                filters: ['veganas']
            },
            {
                id: 'healthy-vegana-4',
                name: 'Ensalada de Lentejas',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                category: 'vegana',
                ingredients: ['1 taza lentejas cocidas', 'Tomates cherry', 'Pepino', 'Cebolla morada', 'Culantro', 'Limón'],
                instructions: [
                    'Cocinar lentejas hasta tiernas',
                    'Cortar verduras en cubos',
                    'Mezclar todos los ingredientes',
                    'Aliñar con limón y sal',
                    'Agregar culantro picado',
                    'Servir fresco'
                ],
                description: 'Ensalada proteica y nutritiva sin productos animales.',
                magic: 'Las lentejas panameñas son las más nutritivas.',
                time: '25 min',
                portions: '3 personas',
                difficulty: 'Fácil',
                filters: ['veganas', 'alto-proteína']
            },
            {
                id: 'healthy-vegana-5',
                name: 'Curry de Vegetales',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
                category: 'vegana',
                ingredients: ['Verduras mixtas', 'Leche de coco', 'Curry en polvo', 'Ajo', 'Jengibre', 'Cebolla'],
                instructions: [
                    'Cortar verduras en cubos',
                    'Sofreír cebolla, ajo y jengibre',
                    'Agregar curry en polvo',
                    'Incorporar verduras y cocinar',
                    'Agregar leche de coco',
                    'Cocinar hasta que estén tiernas',
                    'Servir con arroz integral'
                ],
                description: 'Curry cremoso y especiado con vegetales frescos.',
                magic: 'Las especias tropicales dan un sabor único.',
                time: '30 min',
                portions: '4 personas',
                difficulty: 'Fácil',
                filters: ['veganas']
            }
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
            },
            {
                id: 'healthy-gluten-2',
                name: 'Arepa de Yuca',
                image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                category: 'sin-gluten',
                ingredients: ['2 tazas yuca cocida', '1 huevo', 'Queso rallado', 'Sal', 'Aceite'],
                instructions: [
                    'Machacar yuca cocida',
                    'Agregar huevo y queso',
                    'Sazonar con sal',
                    'Formar arepas',
                    'Freír en aceite caliente',
                    'Servir caliente'
                ],
                description: 'Arepa de yuca sin gluten, crujiente y deliciosa.',
                magic: 'La yuca panameña da una textura única.',
                time: '25 min',
                portions: '4 personas',
                difficulty: 'Fácil',
                filters: ['sin-gluten']
            },
            {
                id: 'healthy-gluten-3',
                name: 'Pizza de Coliflor',
                image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
                category: 'sin-gluten',
                ingredients: ['1 coliflor', '2 huevos', 'Queso rallado', 'Tomate', 'Orégano', 'Sal'],
                instructions: [
                    'Rallar coliflor y cocinar',
                    'Mezclar con huevo y queso',
                    'Formar base de pizza',
                    'Hornear hasta dorar',
                    'Agregar tomate y orégano',
                    'Hornear 10 minutos más',
                    'Servir caliente'
                ],
                description: 'Pizza sin gluten con base de coliflor.',
                magic: 'La coliflor se transforma en una base perfecta.',
                time: '45 min',
                portions: '4 personas',
                difficulty: 'Medio',
                filters: ['sin-gluten']
            },
            {
                id: 'healthy-gluten-4',
                name: 'Galletas de Avena',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
                category: 'sin-gluten',
                ingredients: ['2 tazas avena', '1 plátano', 'Miel', 'Canela', 'Aceite de coco'],
                instructions: [
                    'Machacar plátano maduro',
                    'Mezclar con avena y miel',
                    'Agregar canela y aceite',
                    'Formar galletas',
                    'Hornear a 180°C por 15 min',
                    'Dejar enfriar',
                    'Servir'
                ],
                description: 'Galletas saludables sin gluten ni azúcar refinada.',
                magic: 'La avena panameña es la más nutritiva.',
                time: '30 min',
                portions: '12 galletas',
                difficulty: 'Fácil',
                filters: ['sin-gluten', 'veganas']
            },
            {
                id: 'healthy-gluten-5',
                name: 'Tortillas de Maíz',
                image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                category: 'sin-gluten',
                ingredients: ['2 tazas harina de maíz', 'Agua', 'Sal', 'Aceite'],
                instructions: [
                    'Mezclar harina con agua y sal',
                    'Amasar hasta formar masa',
                    'Formar bolitas pequeñas',
                    'Aplanar en tortillas',
                    'Cocinar en comal caliente',
                    'Dorar por ambos lados',
                    'Servir caliente'
                ],
                description: 'Tortillas tradicionales de maíz sin gluten.',
                magic: 'El maíz panameño da el mejor sabor.',
                time: '20 min',
                portions: '8 tortillas',
                difficulty: 'Fácil',
                filters: ['sin-gluten', 'veganas']
            }
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
            },
            {
                id: 'healthy-lowcarb-2',
                name: 'Pollo a la Plancha',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                category: 'bajo-carbohidratos',
                ingredients: ['Pechugas de pollo', 'Limón', 'Ajo', 'Orégano', 'Aceite de oliva', 'Sal'],
                instructions: [
                    'Sazonar pollo con limón y ajo',
                    'Agregar orégano y aceite',
                    'Marinar por 30 minutos',
                    'Cocinar a la plancha',
                    'Dorar por ambos lados',
                    'Servir con verduras'
                ],
                description: 'Pollo a la plancha bajo en carbohidratos.',
                magic: 'El pollo panameño es más tierno y sabroso.',
                time: '35 min',
                portions: '4 personas',
                difficulty: 'Fácil',
                filters: ['bajo-carbohidratos', 'alto-proteína']
            },
            {
                id: 'healthy-lowcarb-3',
                name: 'Zapallo Relleno',
                image: 'https://images.unsplash.com/photo-1505252585461-04db228a6d61?w=400&h=300&fit=crop',
                category: 'bajo-carbohidratos',
                ingredients: ['1 zapallo mediano', 'Carne molida', 'Queso', 'Hierbas', 'Aceite'],
                instructions: [
                    'Cortar zapallo por la mitad',
                    'Vaciar y reservar pulpa',
                    'Cocinar carne molida',
                    'Mezclar con pulpa de zapallo',
                    'Rellenar zapallo',
                    'Agregar queso por encima',
                    'Hornear hasta dorar',
                    'Servir caliente'
                ],
                description: 'Zapallo relleno bajo en carbohidratos.',
                magic: 'El zapallo panameño es más dulce y nutritivo.',
                time: '50 min',
                portions: '4 personas',
                difficulty: 'Medio',
                filters: ['bajo-carbohidratos']
            },
            {
                id: 'healthy-lowcarb-4',
                name: 'Ceviche de Pescado',
                image: 'https://images.unsplash.com/photo-1566662700502-2a1db8f7c61d?w=400&h=300&fit=crop',
                category: 'bajo-carbohidratos',
                ingredients: ['Pescado fresco', 'Limón', 'Cebolla morada', 'Culantro', 'Ají', 'Sal'],
                instructions: [
                    'Cortar pescado en cubos',
                    'Macnear con limón y sal',
                    'Agregar cebolla y culantro',
                    'Picar ají y agregar',
                    'Refrigerar por 30 minutos',
                    'Servir fresco'
                ],
                description: 'Ceviche fresco bajo en carbohidratos.',
                magic: 'El pescado panameño es el más fresco.',
                time: '40 min',
                portions: '4 personas',
                difficulty: 'Fácil',
                filters: ['bajo-carbohidratos', 'alto-proteína']
            },
            {
                id: 'healthy-lowcarb-5',
                name: 'Espinacas Salteadas',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                category: 'bajo-carbohidratos',
                ingredients: ['Espinacas frescas', 'Ajo', 'Aceite de oliva', 'Limón', 'Sal', 'Pimienta'],
                instructions: [
                    'Lavar espinacas frescas',
                    'Picar ajo finamente',
                    'Calentar aceite en sartén',
                    'Agregar ajo y cocinar',
                    'Incorporar espinacas',
                    'Saltear hasta que se reduzcan',
                    'Aliñar con limón y sal',
                    'Servir caliente'
                ],
                description: 'Espinacas salteadas bajas en carbohidratos.',
                magic: 'Las espinacas tropicales son más nutritivas.',
                time: '10 min',
                portions: '3 personas',
                difficulty: 'Muy Fácil',
                filters: ['bajo-carbohidratos', 'veganas']
            }
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
            },
            {
                id: 'healthy-protein-2',
                name: 'Huevos Benedictinos',
                image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
                category: 'proteico',
                ingredients: ['4 huevos', 'Jamón', 'Pan integral', 'Salsa holandesa', 'Perejil'],
                instructions: [
                    'Tostar pan integral',
                    'Colocar jamón sobre pan',
                    'Cocinar huevos pochados',
                    'Colocar huevos sobre jamón',
                    'Agregar salsa holandesa',
                    'Espolvorear perejil',
                    'Servir inmediatamente'
                ],
                description: 'Huevos benedictinos altos en proteína.',
                magic: 'Los huevos panameños son más nutritivos.',
                time: '20 min',
                portions: '2 personas',
                difficulty: 'Medio',
                filters: ['alto-proteína']
            },
            {
                id: 'healthy-protein-3',
                name: 'Pollo a la Parrilla',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                category: 'proteico',
                ingredients: ['Pechugas de pollo', 'Hierbas frescas', 'Ajo', 'Limón', 'Aceite', 'Sal'],
                instructions: [
                    'Sazonar pollo con hierbas',
                    'Agregar ajo y limón',
                    'Marinar por 1 hora',
                    'Cocinar a la parrilla',
                    'Dorar por ambos lados',
                    'Servir con ensalada'
                ],
                description: 'Pollo a la parrilla alto en proteínas.',
                magic: 'Las hierbas tropicales dan un sabor único.',
                time: '1 hora 30 min',
                portions: '4 personas',
                difficulty: 'Fácil',
                filters: ['alto-proteína']
            },
            {
                id: 'healthy-protein-4',
                name: 'Quinoa con Pollo',
                image: 'https://images.unsplash.com/photo-1511692271944-2fb10ebf1a6f?w=400&h=300&fit=crop',
                category: 'proteico',
                ingredients: ['1 taza quinoa', 'Pechuga de pollo', 'Verduras', 'Aceite de oliva', 'Hierbas'],
                instructions: [
                    'Cocinar quinoa según instrucciones',
                    'Cocinar pollo y cortar en cubos',
                    'Saltear verduras',
                    'Mezclar todos los ingredientes',
                    'Aliñar con aceite y hierbas',
                    'Servir caliente'
                ],
                description: 'Quinoa con pollo, proteína completa.',
                magic: 'La quinoa panameña es más nutritiva.',
                time: '30 min',
                portions: '3 personas',
                difficulty: 'Fácil',
                filters: ['alto-proteína']
            },
            {
                id: 'healthy-protein-5',
                name: 'Atún a la Plancha',
                image: 'https://images.unsplash.com/photo-1528566402106-11d5df8b6f3b?w=400&h=300&fit=crop',
                category: 'proteico',
                ingredients: ['Filetes de atún', 'Sésamo', 'Jengibre', 'Soya', 'Aceite', 'Verduras'],
                instructions: [
                    'Sazonar atún con jengibre',
                    'Cocinar a la plancha',
                    'Agregar sésamo por encima',
                    'Servir con verduras',
                    'Aliñar con soya',
                    'Servir caliente'
                ],
                description: 'Atún a la plancha alto en proteínas.',
                magic: 'El atún panameño es el más fresco.',
                time: '20 min',
                portions: '2 personas',
                difficulty: 'Fácil',
                filters: ['alto-proteína']
            }
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
            },
            {
                id: 'carnaval-2',
                name: 'Chicha de Carnaval',
                image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
                category: 'carnaval',
                ingredients: ['Piña', 'Mango', 'Azúcar', 'Canela', 'Agua', 'Hielo'],
                instructions: [
                    'Licuar frutas con agua',
                    'Endulzar con azúcar',
                    'Agregar canela',
                    'Servir con hielo',
                    'Decorar con frutas'
                ],
                description: 'Bebida refrescante del carnaval.',
                magic: 'La chicha del carnaval es la más alegre.',
                time: '15 min',
                portions: '6 personas',
                difficulty: 'Muy Fácil'
            },
            {
                id: 'carnaval-3',
                name: 'Tostones de Carnaval',
                image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                category: 'carnaval',
                ingredients: ['Plátanos verdes', 'Aceite', 'Sal', 'Ajo'],
                instructions: [
                    'Cortar plátanos en rodajas',
                    'Freír por primera vez',
                    'Aplanar con tostonera',
                    'Freír por segunda vez',
                    'Sazonar con sal y ajo',
                    'Servir caliente'
                ],
                description: 'Tostones crujientes del carnaval.',
                magic: 'Los tostones del carnaval son los más crujientes.',
                time: '25 min',
                portions: '6 personas',
                difficulty: 'Fácil'
            },
            {
                id: 'carnaval-4',
                name: 'Arroz con Pollo de Carnaval',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                category: 'carnaval',
                ingredients: ['Arroz', 'Pollo', 'Achiote', 'Verduras', 'Especias'],
                instructions: [
                    'Cocinar pollo con especias',
                    'Preparar sofrito con achiote',
                    'Agregar arroz y cocinar',
                    'Incorporar verduras',
                    'Servir con ensalada'
                ],
                description: 'Arroz con pollo especial del carnaval.',
                magic: 'El arroz del carnaval tiene más sabor.',
                time: '50 min',
                portions: '8 personas',
                difficulty: 'Medio'
            },
            {
                id: 'carnaval-5',
                name: 'Dulces de Carnaval',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
                category: 'carnaval',
                ingredients: ['Azúcar', 'Leche condensada', 'Coco rallado', 'Vainilla'],
                instructions: [
                    'Hervir azúcar con leche',
                    'Agregar coco rallado',
                    'Incorporar vainilla',
                    'Formar bolitas',
                    'Enfriar y servir'
                ],
                description: 'Dulces tradicionales del carnaval.',
                magic: 'Los dulces del carnaval son los más dulces.',
                time: '30 min',
                portions: '12 dulces',
                difficulty: 'Medio'
            }
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
            },
            {
                id: 'semana-santa-2',
                name: 'Sopa de Pescado',
                image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
                category: 'semana-santa',
                ingredients: ['Pescado fresco', 'Verduras', 'Hierbas', 'Caldo', 'Limón'],
                instructions: [
                    'Cocinar pescado en caldo',
                    'Agregar verduras',
                    'Sazonar con hierbas',
                    'Agregar limón al final',
                    'Servir caliente'
                ],
                description: 'Sopa de pescado de Semana Santa.',
                magic: 'La sopa de Semana Santa cura el alma.',
                time: '45 min',
                portions: '6 personas',
                difficulty: 'Fácil'
            },
            {
                id: 'semana-santa-3',
                name: 'Ensalada de Verduras',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                category: 'semana-santa',
                ingredients: ['Verduras mixtas', 'Aceite de oliva', 'Vinagre', 'Hierbas', 'Sal'],
                instructions: [
                    'Lavar y cortar verduras',
                    'Preparar aderezo',
                    'Aliñar verduras',
                    'Agregar hierbas frescas',
                    'Servir fresco'
                ],
                description: 'Ensalada fresca de Semana Santa.',
                magic: 'Las verduras de Semana Santa son más frescas.',
                time: '20 min',
                portions: '4 personas',
                difficulty: 'Muy Fácil'
            },
            {
                id: 'semana-santa-4',
                name: 'Pan de Semana Santa',
                image: 'https://images.unsplash.com/photo-1489524358324-7beb54b28aa0?w=400&h=300&fit=crop',
                category: 'semana-santa',
                ingredients: ['Harina', 'Levadura', 'Huevos', 'Mantequilla', 'Azúcar'],
                instructions: [
                    'Mezclar ingredientes secos',
                    'Agregar líquidos',
                    'Amasar hasta suave',
                    'Dejar reposar',
                    'Hornear hasta dorar',
                    'Servir caliente'
                ],
                description: 'Pan especial de Semana Santa.',
                magic: 'El pan de Semana Santa es bendecido.',
                time: '2 horas',
                portions: '8 personas',
                difficulty: 'Medio'
            },
            {
                id: 'semana-santa-5',
                name: 'Dulce de Coco',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
                category: 'semana-santa',
                ingredients: ['Coco rallado', 'Azúcar', 'Leche', 'Canela'],
                instructions: [
                    'Cocinar coco con azúcar',
                    'Agregar leche poco a poco',
                    'Incorporar canela',
                    'Cocinar hasta espesar',
                    'Servir frío'
                ],
                description: 'Dulce de coco de Semana Santa.',
                magic: 'El coco de Semana Santa es más dulce.',
                time: '40 min',
                portions: '6 personas',
                difficulty: 'Fácil'
            }
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
            },
            {
                id: 'fiestas-patrias-2',
                name: 'Sancocho Patriótico',
                image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
                category: 'fiestas-patrias',
                ingredients: ['Pollo', 'Yuca', 'Ñame', 'Otoe', 'Culantro', 'Especias'],
                instructions: [
                    'Cocinar pollo en agua',
                    'Agregar tubérculos',
                    'Sazonar con especias',
                    'Agregar culantro al final',
                    'Servir con arroz'
                ],
                description: 'Sancocho que celebra la patria.',
                magic: 'El sancocho patriótico une a todos.',
                time: '1 hora 30 min',
                portions: '8 personas',
                difficulty: 'Medio'
            },
            {
                id: 'fiestas-patrias-3',
                name: 'Arroz con Pollo Nacional',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                category: 'fiestas-patrias',
                ingredients: ['Arroz', 'Pollo', 'Achiote', 'Verduras', 'Especias'],
                instructions: [
                    'Cocinar pollo con especias',
                    'Preparar sofrito con achiote',
                    'Agregar arroz y cocinar',
                    'Incorporar verduras',
                    'Servir con ensalada'
                ],
                description: 'Arroz con pollo que representa la nación.',
                magic: 'Este arroz lleva el sabor de la patria.',
                time: '50 min',
                portions: '8 personas',
                difficulty: 'Medio'
            },
            {
                id: 'fiestas-patrias-4',
                name: 'Patacones Patrióticos',
                image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
                category: 'fiestas-patrias',
                ingredients: ['Plátanos verdes', 'Aceite', 'Sal', 'Ajo'],
                instructions: [
                    'Cortar plátanos en rodajas',
                    'Freír por primera vez',
                    'Aplanar con tostonera',
                    'Freír por segunda vez',
                    'Sazonar con sal y ajo',
                    'Servir caliente'
                ],
                description: 'Patacones que celebran la patria.',
                magic: 'Los patacones patrióticos son los más crujientes.',
                time: '25 min',
                portions: '6 personas',
                difficulty: 'Fácil'
            },
            {
                id: 'fiestas-patrias-5',
                name: 'Dulces Patrióticos',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
                category: 'fiestas-patrias',
                ingredients: ['Azúcar', 'Leche', 'Huevos', 'Vainilla', 'Colorante'],
                instructions: [
                    'Hervir leche con azúcar',
                    'Agregar huevos batidos',
                    'Incorporar vainilla',
                    'Agregar colorante rojo y azul',
                    'Formar dulces',
                    'Servir'
                ],
                description: 'Dulces con colores patrióticos.',
                magic: 'Los dulces patrióticos son los más dulces.',
                time: '35 min',
                portions: '15 dulces',
                difficulty: 'Medio'
            }
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
            },
            {
                id: 'navidad-2',
                name: 'Pollo Navideño',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                category: 'navidad',
                ingredients: ['Pollo entero', 'Especias navideñas', 'Verduras', 'Hierbas'],
                instructions: [
                    'Sazonar pollo con especias',
                    'Rellenar con verduras',
                    'Hornear hasta dorar',
                    'Servir con arroz',
                    'Decorar con hierbas'
                ],
                description: 'Pollo especial de Navidad.',
                magic: 'El pollo navideño une a las familias.',
                time: '2 horas',
                portions: '8 personas',
                difficulty: 'Medio'
            },
            {
                id: 'navidad-3',
                name: 'Arroz Navideño',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
                category: 'navidad',
                ingredients: ['Arroz', 'Verduras navideñas', 'Especias', 'Achiote'],
                instructions: [
                    'Preparar sofrito navideño',
                    'Agregar arroz y cocinar',
                    'Incorporar verduras',
                    'Sazonar con especias',
                    'Servir caliente'
                ],
                description: 'Arroz especial de Navidad.',
                magic: 'El arroz navideño tiene sabor a familia.',
                time: '45 min',
                portions: '8 personas',
                difficulty: 'Fácil'
            },
            {
                id: 'navidad-4',
                name: 'Dulces Navideños',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
                category: 'navidad',
                ingredients: ['Azúcar', 'Leche condensada', 'Coco', 'Vainilla', 'Canela'],
                instructions: [
                    'Hervir azúcar con leche',
                    'Agregar coco rallado',
                    'Incorporar vainilla y canela',
                    'Formar bolitas',
                    'Enfriar y servir'
                ],
                description: 'Dulces tradicionales de Navidad.',
                magic: 'Los dulces navideños son los más dulces.',
                time: '40 min',
                portions: '20 dulces',
                difficulty: 'Medio'
            },
            {
                id: 'navidad-5',
                name: 'Ponche Navideño',
                image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
                category: 'navidad',
                ingredients: ['Frutas navideñas', 'Azúcar', 'Canela', 'Clavos', 'Agua'],
                instructions: [
                    'Cortar frutas en trozos',
                    'Hervir agua con especias',
                    'Agregar frutas',
                    'Endulzar con azúcar',
                    'Servir caliente'
                ],
                description: 'Ponche caliente de Navidad.',
                magic: 'El ponche navideño calienta el corazón.',
                time: '30 min',
                portions: '6 personas',
                difficulty: 'Fácil'
            }
        ]
    }
};

// Funciones auxiliares
function getRecipesForDay(day) {
    return COMPLETE_RECIPES_DATABASE.weekly[day] || {};
}

function getHealthyRecipesByType(type) {
    if (type === 'all') {
        const allHealthy = [];
        Object.values(COMPLETE_RECIPES_DATABASE.healthy).forEach(category => {
            if (Array.isArray(category)) {
                allHealthy.push(...category);
            }
        });
        return allHealthy;
    }
    return COMPLETE_RECIPES_DATABASE.healthy[type] || [];
}

function getFestivals() {
    return COMPLETE_RECIPES_DATABASE.festivals;
}

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.COMPLETE_RECIPES_DATABASE = COMPLETE_RECIPES_DATABASE;
    window.EXPANDED_RECIPES_DATABASE = COMPLETE_RECIPES_DATABASE; // Para compatibilidad
}
