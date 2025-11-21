// Variables globales
let currentTheme = localStorage.getItem('theme') || 'light';
let currentWeek = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentRecipeModal = null;

// Función para obtener la base de datos de manera segura
function getRecipesDatabase() {
    return window.EXPANDED_RECIPES_DATABASE || window.COMPLETE_RECIPES_DATABASE || null;
}

// Usar la base de datos expandida (se actualizará cuando esté disponible)
let recipesDatabase = getRecipesDatabase();

// Funciones auxiliares para acceder a la base de datos
function getRecipesForDay(day) {
    // Actualizar la referencia a la base de datos por si acaso
    recipesDatabase = getRecipesDatabase();
    
    if (!recipesDatabase || !recipesDatabase.weekly) {
        console.error('Base de datos no encontrada para el día:', day);
        return {};
    }
    return recipesDatabase.weekly[day] || {};
}

function getHealthyRecipesByType(type) {
    recipesDatabase = getRecipesDatabase();
    if (!recipesDatabase || !recipesDatabase.healthy) {
        console.error('Base de datos no encontrada');
        return [];
    }
    
    if (type === 'all') {
        const allHealthy = [];
        Object.values(recipesDatabase.healthy).forEach(category => {
            if (Array.isArray(category)) {
                allHealthy.push(...category);
            }
        });
        return allHealthy;
    }
    // Mapear tipos con guiones a las claves camelCase de la BD
    const typeKeyMap = {
        'sin-gluten': 'sinGluten',
        'bajo-carbohidratos': 'bajoCarbohidratos'
    };
    const mappedType = typeKeyMap[type] || type;
    return recipesDatabase.healthy[mappedType] || [];
}

function getFestivals() {
    recipesDatabase = getRecipesDatabase();
    if (!recipesDatabase || !recipesDatabase.festivals) {
        console.error('Base de datos no encontrada');
        return [];
    }
    return recipesDatabase.festivals;
}

// Funciones para navegación
function scrollToDayRecipes(day) {
    const dayElement = document.querySelector(`[data-day="${day}"]`);
    if (dayElement) {
        dayElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Si no existe, ir a la sección semanal
        scrollToSection('semanal');
    }
}

function scrollToHealthyType(type) {
    // Activar el filtro correspondiente
    const filterButtons = document.querySelectorAll('.healthy-filter');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    const targetButton = document.querySelector(`[data-type="${type}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
        generateHealthyRecipes(type);
    }
    
    scrollToSection('saludables');
}

function scrollToFestival(festival) {
    scrollToSection('festividades');
    // Aquí se podría agregar lógica para filtrar por festival específico
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para manejar clics en las tarjetas de días
function handleDayCardClick(event, day) {
    // Si se presiona Ctrl o Cmd, permitir navegación normal a dia.html
    if (event.ctrlKey || event.metaKey) {
        return; // Permitir navegación normal
    }
    
    // Prevenir navegación por defecto
    event.preventDefault();
    
    // Navegar a la sección del día en la misma página
    scrollToDay(day);
}

// Función para buscar receta por ID
function findRecipeById(recipeId) {
    recipesDatabase = getRecipesDatabase();
    if (!recipesDatabase) return null;
    
    // Buscar en recetas semanales
    if (recipesDatabase.weekly) {
        for (const day in recipesDatabase.weekly) {
            const dayRecipes = recipesDatabase.weekly[day];
            for (const mealType in dayRecipes) {
                if (Array.isArray(dayRecipes[mealType])) {
                    const recipe = dayRecipes[mealType].find(r => r.id === recipeId);
                    if (recipe) return recipe;
                }
            }
        }
    }
    
    // Buscar en recetas saludables
    if (recipesDatabase.healthy) {
        for (const category in recipesDatabase.healthy) {
            if (Array.isArray(recipesDatabase.healthy[category])) {
                const recipe = recipesDatabase.healthy[category].find(r => r.id === recipeId);
                if (recipe) return recipe;
            }
        }
    }
    
    // Buscar en festividades
    if (recipesDatabase.festivals) {
        for (const festival of recipesDatabase.festivals) {
            if (festival.recipes) {
                const recipe = festival.recipes.find(r => r.id === recipeId);
                if (recipe) return recipe;
            }
        }
    }
    
    return null;
}

// Funciones para botones y filtros
function addComment() {
    const commentText = document.getElementById('new-comment').value;
    if (commentText.trim()) {
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = `
            <div class="comment-content">
                <p>${commentText}</p>
                <span class="comment-time">Ahora</span>
            </div>
        `;
        commentsList.appendChild(newComment);
        document.getElementById('new-comment').value = '';
    }
}

// Función para el botón de receta aleatoria
function getRandomRecipe() {
    recipesDatabase = getRecipesDatabase();
    if (!recipesDatabase) return null;
    
    const allRecipes = [];
    
    // Recopilar todas las recetas
    if (recipesDatabase.weekly) {
        for (const day in recipesDatabase.weekly) {
            const dayRecipes = recipesDatabase.weekly[day];
            for (const mealType in dayRecipes) {
                if (Array.isArray(dayRecipes[mealType])) {
                    allRecipes.push(...dayRecipes[mealType]);
                }
            }
        }
    }
    
    if (recipesDatabase.healthy) {
        for (const category in recipesDatabase.healthy) {
            if (Array.isArray(recipesDatabase.healthy[category])) {
                allRecipes.push(...recipesDatabase.healthy[category]);
            }
        }
    }
    
    if (allRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * allRecipes.length);
        return allRecipes[randomIndex];
    }
    
    return null;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando aplicación...');
    
    // Asegurar que la base de datos esté disponible
    recipesDatabase = getRecipesDatabase();
    console.log('Base de datos disponible:', !!recipesDatabase);
    
    if (!recipesDatabase) {
        console.warn('⚠️ Base de datos no disponible aún, esperando...');
        // Intentar nuevamente después de un breve delay
        setTimeout(() => {
            recipesDatabase = getRecipesDatabase();
            if (recipesDatabase) {
                console.log('✅ Base de datos cargada correctamente');
            } else {
                console.error('❌ Error: Base de datos no disponible');
            }
        }, 100);
    }
    
    // Inicializar tema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
    
    // Configurar botón de tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', switchTheme);
        updateThemeToggleIcon();
    }
    
    // Inicializar componentes
    initializeApp();
    setupEventListeners();
    setupDropdownMenus(); // Asegurarse de que se llame después de que el DOM esté listo
    
    // Efectos y animaciones
    generateParticles();
    setupScrollAnimations();
    setupSmoothNavigation();
    createMagicParticles();
    
    // Configuración adicional
    initializeLocalStorage();
    applicationHealthCheck();
    
    // Inicialización de efectos adicionales después de un pequeño retraso
    setTimeout(() => {
        addParticleEffects();
        addSparkleEffect();
        addMagicHoverEffects();
    }, 500);
    
    // Configurar manejador de errores de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
    });
});

function initializeApp() {
    // Aplicar tema guardado
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggleIcon();
    
    // Configurar scroll animations
    setupScrollAnimations();
    
    // Configurar navegación suave
    setupSmoothNavigation();
}

function setupEventListeners() {
    // Toggle tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', switchTheme);
    
    // Navegación móvil
    const navToggleBtn = document.getElementById('nav-toggle');
    if (navToggleBtn) navToggleBtn.addEventListener('click', toggleMobileNav);
    
    // Modal de receta
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalClose) modalClose.addEventListener('click', closeRecipeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeRecipeModal);
    
    // Modal de ruleta
    const rouletteClose = document.getElementById('roulette-close');
    const rouletteOverlay = document.getElementById('roulette-overlay');
    const rouletteSpin = document.getElementById('roulette-spin');
    if (rouletteClose) rouletteClose.addEventListener('click', closeRouletteModal);
    if (rouletteOverlay) rouletteOverlay.addEventListener('click', closeRouletteModal);
    if (rouletteSpin) rouletteSpin.addEventListener('click', spinRoulette);
    
    // Buscador
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            handleFilter(this.dataset.filter);
        });
    });
    
    // Receta aleatoria
    const randomBtn = document.getElementById('random-recipe');
    if (randomBtn) {
        randomBtn.addEventListener('click', function() {
            const randomRecipe = getRandomRecipe();
            if (randomRecipe) {
                openRecipeModal(randomRecipe.id);
            }
        });
    }
    
    // Navegación semanal
    const prevWeek = document.getElementById('prev-week');
    const nextWeek = document.getElementById('next-week');
    if (prevWeek) prevWeek.addEventListener('click', () => navigateWeek(-1));
    if (nextWeek) nextWeek.addEventListener('click', () => navigateWeek(1));
    
    // Filtros saludables
    document.querySelectorAll('.healthy-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            document.querySelectorAll('.healthy-filter').forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            // Filtrar recetas
            filterHealthyRecipes(this.dataset.type);
        });
    });
    
    // Modal de comentarios
    const commentsClose = document.getElementById('comments-close');
    const commentsOverlay = document.getElementById('comments-overlay');
    if (commentsClose) commentsClose.addEventListener('click', closeCommentsModal);
    if (commentsOverlay) commentsOverlay.addEventListener('click', closeCommentsModal);
    
    // Menús desplegables - click en móvil
    setupDropdownMenus();
    
    // Event listeners adicionales para scroll suave
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        if (btn.textContent.includes('Semanal')) {
            btn.addEventListener('click', () => scrollToSection('recetas'));
        }
    });
}

function switchTheme() {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
    updateThemeToggleIcon();
    
    // Actualizar estilos específicos del tema
    updateThemeStyles();
}

function updateThemeToggleIcon() {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

function updateThemeStyles() {
    // Esta función actualiza estilos específicos cuando cambia el tema
    const root = document.documentElement;
    
    if (currentTheme === 'dark') {
        root.style.setProperty('--bg-primary', '#1a1a1a');
        root.style.setProperty('--bg-secondary', '#2d2d2d');
        root.style.setProperty('--bg-card', '#333333');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#cccccc');
    } else {
        root.style.setProperty('--bg-primary', '#FFF8E1');
        root.style.setProperty('--bg-secondary', '#F5F5DC');
        root.style.setProperty('--bg-card', '#FFFFFF');
        root.style.setProperty('--text-primary', '#212121');
        root.style.setProperty('--text-secondary', '#666666');
    }
}

function toggleMobileNav() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Configurar menús desplegables
function setupDropdownMenus() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    console.log('Setting up dropdown menus, found:', dropdowns.length, 'dropdowns');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Close all dropdowns when mobile menu is closed
            if (!navMenu.classList.contains('active')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }
    
    // Handle dropdown toggles
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!toggle || !menu) return;
        
        // Toggle menu on click
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Toggle clicked, current state:', dropdown.classList.contains('active'));
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            const isActive = dropdown.classList.contains('active');
            if (isActive) {
                dropdown.classList.remove('active');
            } else {
                dropdown.classList.add('active');
            }
            
            console.log('New state:', dropdown.classList.contains('active'));
            
            // On mobile, ensure the menu is open when dropdown is toggled
            if (window.innerWidth <= 768) {
                navMenu.classList.add('active');
                if (navToggle) navToggle.classList.add('active');
            }
        });
        
        // Handle day navigation
        const dayLinks = menu.querySelectorAll('[data-day]');
        dayLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const day = this.getAttribute('data-day');
                
                // Close menus
                dropdown.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
                
                // Scroll to the day's section
                scrollToDay(day);
            });
        });
    });
    
    // Close dropdowns when clicking outside
    // Usar setTimeout para que el toggle se ejecute primero
    document.addEventListener('click', function(e) {
        setTimeout(() => {
            // Verificar si el click fue en un toggle - si es así, no hacer nada
            const clickedToggle = e.target.closest('.dropdown-toggle');
            if (clickedToggle) {
                return; // El toggle manejará el estado
            }
            
            // Verificar si el click fue dentro de algún dropdown
            let clickedInsideDropdown = false;
            dropdowns.forEach(dropdown => {
                if (dropdown.contains(e.target) && !e.target.closest('.dropdown-toggle')) {
                    clickedInsideDropdown = true;
                }
            });
            
            // Solo cerrar si el click fue fuera de todos los dropdowns
            if (!clickedInsideDropdown) {
                dropdowns.forEach(dropdown => {
                    if (dropdown.classList.contains('active')) {
                        dropdown.classList.remove('active');
                    }
                });
            }
        }, 50);
    });
    
    // Handle window resize
    const handleResize = function() {
        if (window.innerWidth > 768) {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            
            // Reset dropdowns on desktop
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    };
    
    // Add resize event listener with debounce
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
}

// Función para desplazarse a la sección del día correspondiente
function scrollToDay(day) {
    // Mapear nombres de días en español a inglés
    const dayMap = {
        'lunes': 'monday',
        'martes': 'tuesday',
        'miercoles': 'wednesday',
        'jueves': 'thursday',
        'viernes': 'friday',
        'sabado': 'saturday',
        'domingo': 'sunday'
    };
    
    const dayKey = dayMap[day] || day;
    const dayElement = document.getElementById(day);
    
    if (dayElement) {
        window.scrollTo({
            top: dayElement.offsetTop - 80, // Ajuste para el header fijo
            behavior: 'smooth'
        });
        
        // Mostrar las recetas del día
        showDayRecipes(dayKey);
    } else {
        // Si no encuentra la sección, crear una y mostrar las recetas
        createDaySection(day, dayKey);
        showDayRecipes(dayKey);
    }
}

// Función para mostrar las recetas de un día específico
function showDayRecipes(dayKey) {
    const recipes = getRecipesForDay(dayKey);
    if (!recipes || Object.keys(recipes).length === 0) {
        console.warn(`No hay recetas para ${dayKey}`);
        return;
    }
    
    // Buscar o crear la sección del día
    let daySection = document.getElementById(dayKey);
    if (!daySection) {
        // Mapear de vuelta a español para el ID
        const spanishDays = {
            'monday': 'lunes',
            'tuesday': 'martes',
            'wednesday': 'miercoles',
            'thursday': 'jueves',
            'friday': 'viernes',
            'saturday': 'sabado',
            'sunday': 'domingo'
        };
        daySection = document.getElementById(spanishDays[dayKey] || dayKey);
    }
    
    if (!daySection) {
        createDaySection(spanishDays[dayKey] || dayKey, dayKey);
        daySection = document.getElementById(spanishDays[dayKey] || dayKey);
    }
    
    if (daySection) {
        // Generar el HTML con las recetas
        const dayName = {
            'monday': 'Lunes',
            'tuesday': 'Martes',
            'wednesday': 'Miércoles',
            'thursday': 'Jueves',
            'friday': 'Viernes',
            'saturday': 'Sábado',
            'sunday': 'Domingo'
        }[dayKey] || dayKey;
        
        let html = `<div class="container">
            <h2 class="section-title">Menú del ${dayName}</h2>
            <div class="day-recipes-container">`;
        
        // Mostrar recetas por tipo de comida
        const mealTypes = {
            'desayuno': 'Desayuno',
            'almuerzo': 'Almuerzo',
            'cena': 'Cena'
        };
        
        Object.keys(mealTypes).forEach(mealType => {
            if (recipes[mealType] && recipes[mealType].length > 0) {
                html += `<div class="meal-section">
                    <h3 class="meal-title">
                        <i class="fas fa-${mealType === 'desayuno' ? 'sun' : mealType === 'almuerzo' ? 'utensils' : 'moon'}"></i>
                        ${mealTypes[mealType]}
                    </h3>
                    <div class="recipes-grid">`;
                
                recipes[mealType].forEach(recipe => {
                    html += `
                        <div class="recipe-card" onclick="openRecipeModal('${recipe.id}')">
                            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                            <div class="recipe-info">
                                <h4 class="recipe-name">${recipe.name}</h4>
                                <p class="recipe-description">${recipe.description}</p>
                                <div class="recipe-meta">
                                    <span class="recipe-time"><i class="fas fa-clock"></i> ${recipe.time}</span>
                                    <span class="recipe-difficulty"><i class="fas fa-star"></i> ${recipe.difficulty}</span>
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                html += `</div></div>`;
            }
        });
        
        html += `</div></div>`;
        daySection.innerHTML = html;
        daySection.style.display = 'block'; // Mostrar la sección
        
        // Scroll suave a la sección
        setTimeout(() => {
            window.scrollTo({
                top: daySection.offsetTop - 80,
                behavior: 'smooth'
            });
        }, 100);
    }
}

// Función para crear una sección de día si no existe
function createDaySection(dayId, dayKey) {
    // Primero verificar si ya existe
    let daySection = document.getElementById(dayId);
    if (daySection) {
        return daySection;
    }
    
    const recipesWall = document.getElementById('recetas') || document.querySelector('.recipes-wall');
    if (!recipesWall) {
        // Si no existe recipesWall, buscar la última sección antes del footer
        const footer = document.querySelector('footer');
        if (footer) {
            daySection = document.createElement('section');
            daySection.id = dayId;
            daySection.className = 'day-embed';
            daySection.style.display = 'none';
            footer.parentNode.insertBefore(daySection, footer);
            return daySection;
        }
        return null;
    }
    
    daySection = document.createElement('section');
    daySection.id = dayId;
    daySection.className = 'day-embed';
    daySection.style.display = 'none';
    
    // Insertar después de la sección de recetas
    recipesWall.parentNode.insertBefore(daySection, recipesWall.nextSibling);
    return daySection;
}

function generateWeeklyRecipes() {
    console.log('Generando recetas semanales...');
    const daysGrid = document.getElementById('days-grid');
    if (!daysGrid) {
        console.error('Elemento days-grid no encontrado');
        return;
    }
    
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    
    days.forEach((day, index) => {
        const dayRecipes = getRecipesForDay(day);
        console.log(`Recetas para ${day}:`, dayRecipes);
        const dayCard = createDayCard(dayNames[index], dayRecipes);
        daysGrid.appendChild(dayCard);
    });
}

function createDayCard(dayName, dayRecipes) {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    
    const mealsHtml = `
        <div class="day-header">
            <div class="day-icon">
                <i class="fas fa-${getDayIcon(dayName)}"></i>
            </div>
            <div>
                <h3 class="day-title">${capitalizeFirst(dayName)}</h3>
                <button class="music-btn" onclick="playMusic('${dayName}')">
                    <i class="fas fa-music"></i>
                    Música del día
                </button>
            </div>
        </div>
        
        <div class="meals-container">
            ${createMealSection('desayuno', dayRecipes.desayuno)}
            ${createMealSection('almuerzo', dayRecipes.almuerzo)}
            ${createMealSection('cena', dayRecipes.cena)}
        </div>
        
        <div class="magic-particles">
            ${generateParticles()}
        </div>
    `;
    
    dayCard.innerHTML = mealsHtml;
    return dayCard;
}

function createMealSection(mealType, recipes) {
    if (!recipes || recipes.length === 0) return '';
    
    const mealEmoji = getMealEmoji(mealType);
    const mealTypeCapitalized = capitalizeFirst(mealType);
    
    const recipesHtml = recipes.map(recipe => `
        <div class="recipe-card" onclick="openRecipeModal('${recipe.id}')">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-info">
                <h4 class="recipe-name">${recipe.name}</h4>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span class="recipe-time"><i class="fas fa-clock"></i> ${recipe.time}</span>
                    <span class="recipe-difficulty"><i class="fas fa-star"></i> ${recipe.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    return `
        <div class="meal-section">
            <h4 class="meal-title">
                <i class="${mealEmoji}"></i>
                ${mealTypeCapitalized}
            </h4>
            <div class="recipes-list">
                ${recipesHtml}
            </div>
        </div>
    `;
}

function generateHealthyRecipes(type = 'all') {
    console.log('Generando recetas saludables tipo:', type);
    const healthyGrid = document.getElementById('healthy-grid');
    if (!healthyGrid) {
        console.error('Elemento healthy-grid no encontrado');
        return;
    }
    
    healthyGrid.innerHTML = ''; // Limpiar grid
    
    const healthyRecipes = getHealthyRecipesByType(type);
    console.log('Recetas saludables encontradas:', healthyRecipes.length);
    
    healthyRecipes.forEach(recipe => {
        const recipeCard = createHealthyRecipeCard(recipe);
        healthyGrid.appendChild(recipeCard);
    });
}

function createHealthyRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'healthy-recipe-card';
    card.onclick = () => openRecipeModal(recipe.id);
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="healthy-recipe-image">
        <div class="healthy-recipe-content">
            <h4 class="healthy-recipe-name">${recipe.name}</h4>
            <p class="healthy-recipe-description">${recipe.description}</p>
            <div class="healthy-tags">
                ${recipe.filters.map(filter => `<span class="health-tag">${filter}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

function generateFestivalRecipes() {
    console.log('Generando recetas de festividades...');
    const festivalGrid = document.getElementById('festival-grid');
    if (!festivalGrid) {
        console.error('Elemento festival-grid no encontrado');
        return;
    }
    
    const festivals = getFestivals() || {};
    const festivalsList = Array.isArray(festivals) ? festivals : Object.values(festivals);
    console.log('Festividades encontradas:', festivalsList.length);
    
    festivalsList.forEach(festival => {
        const festivalCard = createFestivalCard(festival);
        festivalGrid.appendChild(festivalCard);
    });
}

function createFestivalCard(festival) {
    const card = document.createElement('div');
    card.className = 'festival-card';
    
    card.innerHTML = `
        <div class="festival-image">
            <img src="${festival.image}" alt="${festival.name}">
            <div class="festival-overlay">
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="festival-content">
            <h3 class="festival-title">${festival.name}</h3>
            <p class="festival-description">${festival.description}</p>
            <p class="festival-history">${festival.history}</p>
            <div class="festival-recipes">
                ${festival.recipes.map(recipe => `
                    <div class="festival-recipe" onclick="openRecipeModal('${recipe.id}')">
                        <h5>${recipe.name}</h5>
                        <p>${recipe.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return card;
}

function openRecipeModal(recipeId) {
    const recipe = findRecipeById(recipeId);
    if (!recipe) return;
    
    currentRecipeModal = recipe;
    const modal = document.getElementById('recipe-modal');
    const recipeDetail = document.getElementById('recipe-detail');
    
    recipeDetail.innerHTML = `
        <div class="recipe-image-section">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        </div>
        <div class="recipe-text-section">
            <h2 class="recipe-modal-title">${recipe.name}</h2>
            <p class="recipe-description">${recipe.description}</p>
            
            ${recipe.magic ? `<div class="recipe-magic">
                <h4>✨ Magia Culinaria</h4>
                <p>${recipe.magic}</p>
            </div>` : ''}
            
            <div class="recipe-section">
                <h3 class="recipe-section-title">🥄 Ingredientes</h3>
                <ul class="recipe-ingredients">
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="recipe-section">
                <h3 class="recipe-section-title">👨‍🍳 Preparación</h3>
                <ol class="recipe-instructions">
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
            
            <div class="recipe-meta-info">
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>Tiempo: ${recipe.time}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-star"></i>
                    <span>Dificultad: ${recipe.difficulty}</span>
                </div>
            </div>
            
            <div class="recipe-actions">
                <button class="action-btn favorite-btn" onclick="toggleFavorite('${recipe.id}')">
                    <i class="fas fa-heart"></i>
                    ${favorites.includes(recipe.id) ? 'En Favoritos' : 'Agregar a Favoritos'}
                </button>
                <button class="action-btn" onclick="shareRecipe('${recipe.id}')">
                    <i class="fab fa-whatsapp"></i>
                    Compartir
                </button>
                <button class="action-btn" onclick="downloadRecipe('${recipe.id}')">
                    <i class="fas fa-download"></i>
                    Descargar PDF
                </button>
            </div>
            
            <div class="star-rating">
                <i class="star fas fa-star" data-rating="1"></i>
                <i class="star fas fa-star" data-rating="2"></i>
                <i class="star fas fa-star" data-rating="3"></i>
                <i class="star fas fa-star" data-rating="4"></i>
                <i class="star fas fa-star" data-rating="5"></i>
            </div>
            
            <div class="comments-section">
                <h4>💬 Reseñas Mágicas</h4>
                <div class="add-comment">
                    <textarea placeholder="Comparte tu experiencia con esta receta mágica..."></textarea>
                    <button class="action-btn">Publicar</button>
                </div>
                <div class="comments-list">
                    <!-- Los comentarios se cargarán dinámicamente -->
                </div>
            </div>
        </div>
    `;
    
    setupStarRating();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentRecipeModal = null;
}

function findRecipeById(id) {
    // Buscar en todas las categorías
    const allRecipes = [];
    
    Object.values(recipesDatabase.weekly).forEach(day => {
        Object.values(day).forEach(meals => {
            if (Array.isArray(meals)) {
                allRecipes.push(...meals);
            }
        });
    });
    
    Object.values(recipesDatabase.healthy).forEach(category => {
        allRecipes.push(...category);
    });
    
    return allRecipes.find(recipe => recipe.id === id);
}

function toggleFavorite(recipeId) {
    const index = favorites.indexOf(recipeId);
    if (index === -1) {
        favorites.push(recipeId);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Actualizar el botón
    const btn = document.querySelector('.favorite-btn');
    if (btn) {
        btn.innerHTML = `<i class="fas fa-heart"></i> ${favorites.includes(recipeId) ? 'En Favoritos' : 'Agregar a Favoritos'}`;
    }
}

function shareRecipe(recipeId) {
    const recipe = findRecipeById(recipeId);
    if (!recipe) return;
    
    const text = `¡Mira esta receta mágica: ${recipe.name}! 🧙‍♂️✨\n\n${window.location.href}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, '_blank');
}

function downloadRecipe(recipeId) {
    const recipe = findRecipeById(recipeId);
    if (!recipe) return;
    
    const pdfContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #8B5CF6; text-align: center;">${recipe.name}</h1>
            <img src="${recipe.image}" style="width: 100%; max-width: 400px; display: block; margin: 20px auto; border-radius: 10px;">
            
            <h2>📝 Ingredientes</h2>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <h2>👨‍🍳 Preparación</h2>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            
            ${recipe.magic ? `<h2>✨ Magia Culinaria</h2><p>${recipe.magic}</p>` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #8B5CF6; text-align: center; color: #666;">
                <p>Recetas Mágicas de NATY - Panamá 🇵🇦</p>
                <p>Generado el ${new Date().toLocaleDateString()}</p>
            </div>
        </div>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(pdfContent);
    printWindow.document.close();
    printWindow.print();
}

function showRouletteModal() {
    const modal = document.getElementById('roulette-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function generateRouletteOptions() {
    const allRecipes = [];
    Object.values(recipesDatabase.weekly).forEach(day => {
        Object.values(day).forEach(meals => {
            if (Array.isArray(meals)) {
                allRecipes.push(...meals);
            }
        });
    });
    
    Object.values(recipesDatabase.healthy).forEach(category => {
        allRecipes.push(...category);
    });
    
    return allRecipes.slice(0, 8); // Máximo 8 opciones para la ruleta
}

function spinRoulette() {
    const wheel = document.getElementById('roulette-wheel');
    const spinBtn = document.getElementById('rulette-spin');
    
    spinBtn.disabled = true;
    spinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Girando...';
    
    // Generar número aleatorio para la ruleta
    const options = generateRouletteOptions();
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedRecipe = options[randomIndex];
    
    // Calcular ángulo de rotación
    const angle = 3600 + (randomIndex * 45); // 3600 para múltiples vueltas, 45 grados entre opciones
    
    wheel.style.transform = `rotate(${angle}deg)`;
    
    setTimeout(() => {
        spinBtn.disabled = false;
        spinBtn.innerHTML = '<i class="fas fa-play"></i> Girar Ruleta';
        
        // Mostrar receta seleccionada en modal
        setTimeout(() => {
            closeRouletteModal();
            openRecipeModal(selectedRecipe.id);
        }, 1000);
    }, 3000);
}

function closeRouletteModal() {
    const modal = document.getElementById('roulette-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const results = searchRecipes(query);
    displaySearchResults(results);
}

function searchRecipes(query) {
    const allRecipes = [];
    
    // Recopilar todas las recetas
    Object.values(recipesDatabase.weekly).forEach(day => {
        Object.values(day).forEach(meals => {
            if (Array.isArray(meals)) {
                allRecipes.push(...meals);
            }
        });
    });
    
    Object.values(recipesDatabase.healthy).forEach(category => {
        allRecipes.push(...category);
    });
    
    // Filtrar por nombre o ingredientes
    return allRecipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const ingredientMatch = recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(query)
        );
        const descriptionMatch = recipe.description.toLowerCase().includes(query);
        
        return nameMatch || ingredientMatch || descriptionMatch;
    });
}

function displaySearchResults(results) {
    // Implementar lógica para mostrar resultados de búsqueda
    console.log('Resultados de búsqueda:', results);
}

function handleFilter(filter) {
    // Actualizar filtros activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    // Filtrar recetas según el criterio
    filterRecipesByCategory(filter);
}

function filterRecipesByCategory(category) {
    console.log('Filtrando por:', category);
    // Implementar lógica de filtrado
}

// Funciones auxiliares y utilidades
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

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getDayIcon(day) {
    const icons = {
        'lunes': 'moon',
        'martes': 'mars',
        'miércoles': 'mercury',
        'jueves': 'jupiter',
        'viernes': 'venus',
        'sábado': 'saturn',
        'domingo': 'sun'
    };
    return icons[day] || 'star';
}

function getMealEmoji(mealType) {
    const emojis = {
        'desayuno': 'fas fa-sun',
        'almuerzo': 'fas fa-fire',
        'cena': 'fas fa-moon'
    };
    return emojis[mealType] || 'fas fa-utensils';
}

function generateParticles() {
    let particlesHtml = '';
    for (let i = 0; i < 10; i++) {
        particlesHtml += `
            <div class="particle" style="
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 6}s;
                background: hsl(${Math.random() * 360}, 70%, 60%);
            "></div>
        `;
    }
    return particlesHtml;
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    document.querySelectorAll('.section-title, .day-card, .healthy-recipe-card, .festival-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

function setupSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar menú móvil si está abierto
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
}

function createMagicParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'magic-particles-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createParticle(particleContainer);
        }, i * 100);
    }
    
    document.body.appendChild(particleContainer);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: hsl(${Math.random() * 360}, 70%, 60%);
        border-radius: 50%;
        animation: float 8s infinite ease-in-out;
        animation-delay: ${Math.random() * 8}s;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
    `;
    
    container.appendChild(particle);
    
    // Remover partícula después de la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 8000);
    
    // Crear nueva partícula
    setTimeout(() => {
        createParticle(container);
    }, Math.random() * 2000 + 1000);
}

function playMusic(dayName) {
    const musicUrls = {
        'lunes': 'https://soundcloud.com/monday-magic',
        'martes': 'https://soundcloud.com/tuesday-vibes',
        'miércoles': 'https://soundcloud.com/wednesday-mix',
        'jueves': 'https://soundcloud.com/thursday-rhythm',
        'viernes': 'https://soundcloud.com/friday-party',
        'sábado': 'https://soundcloud.com/saturday-fun',
        'domingo': 'https://soundcloud.com/sunday-chill'
    };
    
    const url = musicUrls[dayName] || 'https://soundcloud.com/default-magic';
    
    // Crear modal de música
    const musicModal = document.createElement('div');
    musicModal.className = 'music-modal';
    musicModal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--surface-color);
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px var(--shadow);
        z-index: 3000;
        text-align: center;
        border: 2px solid var(--primary-color);
    `;
    
    musicModal.innerHTML = `
        <h3>🎵 Música Mágica del ${capitalizeFirst(dayName)}</h3>
        <p>¡Sintoniza la energía del día!</p>
        <div style="margin: 1rem 0;">
            <a href="${url}" target="_blank" style="
                background: var(--gradient-primary);
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 50px;
                text-decoration: none;
                display: inline-block;
                font-weight: 500;
            ">
                <i class="fas fa-play"></i> Escuchar Ahora
            </a>
        </div>
        <button onclick="this.parentNode.parentNode.removeChild(this.parentNode)" style="
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            font-size: 1.2rem;
            position: absolute;
            top: 10px;
            right: 15px;
        ">×</button>
    `;
    
    document.body.AppendChild(musicModal);
    
    // Auto-cerrar después de 10 segundos
    setTimeout(() => {
        if (musicModal.parentNode) {
            musicModal.parentNode.removeChild(musicModal);
        }
    }, 10000);
}

function navigateWeek(direction) {
    currentWeek += direction;
    document.getElementById('week-info').textContent = `Semana ${currentWeek > 0 ? '+' : ''}${currentWeek}`;
    
    // Regenerar recetas de la semana
    const daysGrid = document.getElementById('days-grid');
    daysGrid.innerHTML = '';
    generateWeeklyRecipes();
    
    // Agregar efecto de transición
    daysGrid.style.transform = `translateX(${direction > 0 ? '100%' : '-100%'})`;
    setTimeout(() => {
        daysGrid.style.transform = 'translateX(0)';
        daysGrid.style.transition = 'transform 0.5s ease';
    }, 50);
}

function displaySearchResults(results) {
    const container = document.querySelector('.search-section .container');
    
    // Limpiar resultados previos
    const existingResults = document.getElementById('search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.id = 'search-results';
        noResults.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3>No se encontraron recetas</h3>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
        container.AppendChild(noResults);
        return;
    }
    
    const resultsElement = document.createElement('div');
    resultsElement.id = 'search-results';
    resultsElement.style.cssText = `
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    `;
    
    results.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.style.cssText = `
            background: var(--surface-color);
            border-radius: 15px;
            padding: 1.5rem;
            box-shadow: 0 5px 15px var(--simple: #10B981);
            transition: transform 0.3s ease;
            cursor: pointer;
            border: 1px solid var(--border-color);
        `;
        
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
            <h4 style="margin: 1rem 0 0.5rem; color: var(--text-primary);">${recipe.name}</h4>
            <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">${recipe.description}</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: var(--primary-color); font-size: 0.9rem;"><i class="fas fa-clock"></i> ${recipe.time}</span>
                <span style="color: var(--accent-color); font-size: 0.9rem;"><i class="fas fa-star"></i> ${recipe.difficulty}</span>
            </div>
        `;
        
        recipeCard.onclick = () => openRecipeModal(recipe.id);
        
        recipeCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px var(--shadow)';
        });
        
        recipeCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px var(--shadow)';
        });
        
        resultsElement.AppendChild(recipeCard);
    });
    
    container.AppendChild(resultsElement);
}

function filterRecipesByCategory(category) {
    // Implementar filtrado por categoría
    console.log('Filtrando por categoría:', category);
    
    if (category === 'all') {
        generateWeeklyRecipes();
        return;
    }
    
    // Filtrar recetas por categoría específica
    const allContainers = [
        document.getElementById('days-grid'),
        document.getElementById('healthy-grid'),
        document.getElementById('festival-grid')
    ];
    
    allContainers.forEach(container => {
        if (container) {
            container.style.filter = 'none';
        }
    });
}

// Función para filtiro de recetas saludables
function filterHealthyRecipes(type) {
    generateHealthyRecipes(type);
}

// Función para scrollear a una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para navegar a recetas de un día específico
function scrollToDayRecipes(day) {
    // Mapear nombres en inglés a nombres en español
    const dayNames = {
        'monday': 'Lunes',
        'tuesday': 'Martes',
        'wednesday': 'Miércoles',
        'thursday': 'Jueves',
        'friday': 'Viernes',
        'saturday': 'Sábado',
        'sunday': 'Domingo'
    };
    
    // Scroll a la sección semanal
    scrollToSection('semanal');
    
    // Esperar a que el scroll termine y luego buscar la tarjeta del día
    setTimeout(() => {
        const dayCards = document.querySelectorAll('.day-card');
        dayCards.forEach(card => {
            const dayTitle = card.querySelector('.day-title');
            if (dayTitle && dayTitle.textContent.includes(dayNames[day])) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Añadir un efecto de brillo temporal
                card.style.boxShadow = '0 0 40px rgba(255, 107, 53, 0.8)';
                card.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    card.style.boxShadow = '';
                    card.style.transform = '';
                }, 2000);
            }
        });
    }, 500);
}

// Función para navegar a un tipo específico de comida saludable
function scrollToHealthyType(type) {
    // Scroll a la sección saludables
    scrollToSection('saludables');
    
    // Esperar a que el scroll termine y luego activar el filtro
    setTimeout(() => {
        const filterButtons = document.querySelectorAll('.healthy-filter');
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.type === type) {
                btn.classList.add('active');
                btn.click();
            }
        });
    }, 500);
}

// Función para navegar a una festividad específica
function scrollToFestival(festivalType) {
    // Mapear tipos a títulos
    const festivalNames = {
        'carnaval': 'Carnaval',
        'semana-santa': 'Semana Santa',
        'fiestas-patrias': 'Fiestas Patrias',
        'navidad': 'Navidad'
    };
    
    // Scroll a la sección festividades
    scrollToSection('festividades');
    
    // Esperar a que el scroll termine y luego buscar la tarjeta de festividad
    setTimeout(() => {
        const festivalCards = document.querySelectorAll('.festival-card');
        festivalCards.forEach(card => {
            const festivalTitle = card.querySelector('h3');
            if (festivalTitle && festivalTitle.textContent.includes(festivalNames[festivalType])) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Añadir un efecto de brillo temporal
                card.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.8)';
                card.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    card.style.boxShadow = '';
                    card.style.transform = '';
                }, 2000);
            }
        });
    }, 500);
}

// Función para agregar comentario
function addComment() {
    const commentTextarea = document.getElementById('new-comment');
    const commentsList = document.getElementById('comments-list');
    
    if (commentTextarea && commentTextarea.value.trim()) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';
        commentDiv.innerHTML = `
            <div class="comment-content">
                <p>${commentTextarea.value}</p>
                <div class="comment-meta">
                    <span class="comment-user">👤 Usuario Mágico</span>
                    <span class="comment-date">${new Date().toLocaleDateString()}</span>
                </div>
            </div>
        `;
        
        commentsList.appendChild(commentDiv);
        commentTextarea.value = '';
        
        // Auto-cerrar modal después de comentar
        setTimeout(() => {
            closeCommentsModal();
        }, 1500);
    }
}

// Función para cerrar modal de cometarios
function closeCommentsModal() {
    const modal = document.getElementById('comments-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Actualizar función de búsqueda para usar nueva base de datos
function searchRecipes(query) {
    const allRecipes = [];
    
    // Buscar en recetas semanales
    Object.values(EXPANDED_RECIPES_DATABASE.weekly).forEach(day => {
        Object.values(day).forEach(meals => {
            if (Array.isArray(meals)) {
                allRecipes.push(...meals);
            }
        });
    });
    
    // Buscar en recetas saludables
    Object.values(EXPANDED_RECIPES_DATABASE.healthy).forEach(category => {
        if (Array.isArray(category)) {
            allRecipes.push(...category);
        }
    });
    
    // Buscar en festividades
    EXPANDED_RECIPES_DATABASE.festivals.forEach(festival => {
        if (festival.recipes && Array.isArray(festival.recipes)) {
            allRecipes.push(...festival.recipes);
        }
    });
    
    // Filtrar resultados
    return allRecipes.filter(recipe => {
        if (!recipe.name || !recipe.ingredients) return false;
        
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const ingredientMatch = recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(query)
        );
        const descriptionMatch = recipe.description ? 
            recipe.description.toLowerCase().includes(query) : false;
        
        return nameMatch || ingredientMatch || descriptionMatch;
    });
}

// Función para previsualizar recetas automáticamente
function autoPreviewRecipes() {
    const previewCards = document.querySelectorAll('.recipe-card, .healthy-recipe-card, .festival-card');
    
    previewCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'all 0.5s ease';
            }, 100);
        }, index * 100);
    });
}

// Función para agregar efectos de partículas al pasar el mouse
function addParticleEffects() {
    const cards = document.querySelectorAll('.recipe-card, .day-card, .healthy-recipe-card, .festival-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            createTemporaryParticles(e.target);
        });
    });
}

function createTemporaryParticles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: hsl(${Math.random() * 360}, 70%, 60%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: particleFloat 1s ease-out forwards;
        `;
        
        document.body.AppendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// CSS para animaciones de partículas
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
            opacity: 0;
        }
        50% {
            transform: translateY(-20px);
            opacity: 1;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.AppendChild(animationStyles);

// Funciones para efectos visuales adicionales
function addSparkleEffect() {
    const sparkles = document.createElement('div');
    sparkles.className = 'sparkle-container';
    sparkles.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.AppendChild(sparkles);
    
    setInterval(() => {
        createRandomSparkle(sparkles);
    }, 2000);
}

function createRandomSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, white, transparent);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: sparkle 2s ease-in-out;
        pointer-events: none;
    `;
    
    container.AppendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 2000);
}

// Inicializar efectos adicionales después de cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addParticleEffects();
        addSparkleEffect();
        autoPreviewRecipes();
    }, 1000);
});

// Función para manejo de errores y fallbacks
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTMwSDI0MFYxNzBIMTYwVjEzMFoiIGZpbGw9IiM4QjVDRjYiLz4KPHN2ZyB4PSIxNjAiIHk9IjEzMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgODAgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMCAwTDUwIDQwVjQwSDQwVjQwSDMwVjQwSDIwVjQwSDBWMDBIMjBaIiBmaWxsPSIjRkZEMDAwIi8+Cjwvc3ZnPgo8L3N2Zz4K';
    
    // Crear elemento de placeholder más elaborado
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #8B5CF6, #06B6D4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
        position: relative;
        overflow: hidden;
    `;
    
    placeholder.innerHTML = `
        <div style="text-align: center;">
            <i class="fas fa-image" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
            <p style="margin: 0; font-size: 1rem; opacity: 0.8;">Imagen de receta mágica</p>
        </div>
        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><defs><pattern id="sparkle" patternUnits="userSpaceOnUse" width="20" height="20"><circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(%23sparkle)"/></svg>'); animation: sparkle-move 10s linear infinite;"></div>
    `;
    
    img.replaceWith(placeholder);
}

// Configurar error handling para imágenes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
    });
});

// Funciones adicionales para mejorar la experiencia
function addMagicHoverEffects() {
    const allCards = document.querySelectorAll('.recipe-card, .day-card, .healthy-recipe-card, .festival-card');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 40px rgba(139, 92, 246, 0.3)';
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    });
}

function initializeLocalStorage() {
    // Configuraciones por defecto
    const defaultSettings = {
        theme: 'light',
        favorites: [],
        settings: {
            animations: true,
            sounds: false,
            autoplay: false
        }
    };
    
    // Cargar configuraciones
    Object.keys(defaultSettings).forEach(key => {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(defaultSettings[key]));
        }
    });
    
    // Aplicar configuraciones
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const settings = JSON.parse(localStorage.getItem('settings')) || defaultSettings.settings;
    if (!settings.animations) {
        document.body.classList.add('no-animations');
    }
}

// Función para agregar estilos de "no animaciones"
const noAnimationStyles = document.createElement('style');
noAnimationStyles.textContent = `
    .no-animations * {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
`;
document.head.AppendChild(noAnimationStyles);

// Actualizar el final de setupScrollAnimations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Agregar delay gradual
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                entry.target.style.animationDelay = `${delay}ms`;
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    document.querySelectorAll('.section-title, .day-card, .healthy-recipe-card, .festival-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Función para setup completo
function setupCompletePage() {
    // Configurar modo oscuro completo
    const darkModeToggle = document.createElement('div');
    darkModeToggle.className = 'theme-toggle-container';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 1000;
    `;
    
    darkModeToggle.innerHTML = `
        <button id="floating-theme-toggle" class="theme-toggle" style="
            background: var(--gradient-primary);
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 5px 20px var(--shadow);
            transition: all 0.3s ease;
        ">
            <i class="fas fa-moon"></i>
        </button>
    `;
    
    document.body.appendChild(darkModeToggle);
    
    // Agregar comportamiento al nuevo toggle
    document.getElementById('floating-theme-toggle').addEventListener('click', switchTheme);
    
    // Agregar indicador de favoritos en la navegación
    updateFavoritesIndicator();
}

function updateFavoritesIndicator() {
    const navMenu = document.querySelector('.nav-menu');
    const existingIndicator = document.querySelector('.favorites-indicator');
    
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    if (favorites.length > 0) {
        const indicator = document.createElement('li');
        indicator.className = 'favorites-indicator';
        indicator.innerHTML = `
            <a href="#favorites" class="nav-link">
                <i class="fas fa-heart"></i>
                Favoritos (${favorites.length})
            </a>
        `;
        
        navMenu.insertBefore(indicator, navMenu.children[navMenu.children.length - 1]);
    }
}

// Llamar a la configuración completa cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    initializeLocalStorage();
    initializeApp();
    setupEventListeners();
    generateWeeklyRecipes();
    generateHealthyRecipes();
    generateFestivalRecipes();
    createMagicParticles();
    
    // Agregar configuración completa con delay para asegurar que todo esté cargado
    setTimeout(() => {
        setupCompletePage();
        addMagicHoverEffects();
        updateFavoritesIndicator();
        
        // Verificar que la base de datos está cargada
        if (typeof EXPANDED_RECIPES_DATABASE !== 'undefined') {
            console.log('✅ Base de datos de recetas cargada correctamente');
            console.log(`📊 Total de días: ${Object.keys(EXPANDED_RECIPES_DATABASE.weekly).length}`);
            console.log(`🥗 Total categorías saludables: ${Object.keys(EXPANDED_RECIPES_DATABASE.healthy).length}`);
            console.log(`🎉 Total festividades: ${EXPANDED_RECIPES_DATABASE.festivals.length}`);
        }
        
        // Configurar analytics básicos
        setupBasicAnalytics();
        
        // Ejecutar health check final
        setTimeout(() => {
            applicationHealthCheck();
        }, 2000);
        
    }, 1000);
});

// Función para analytics básicos
function setupBasicAnalytics() {
    const analytics = {
        pageViews: parseInt(localStorage.getItem('pageViews')) || 0,
        recipesViewed: parseInt(localStorage.getItem('recipesViewed')) || 0,
        favoriteCount: JSON.parse(localStorage.getItem('favorites')) || [],
        lastVisit: localStorage.getItem('lastVisit') || null
    };
    
    // Incrementar página vista
    analytics.pageViews++;
    localStorage.setItem('pageViews', analytics.pageViews.toString());
    
    // Guardar fecha de última visita
    localStorage.setItem('lastVisit', new Date().toISOString());
    
    console.log(`📈 Analytics: ${analytics.pageViews} visitas, ${analytics.favoriteCount.length} favoritos`);
}

// Mejorar función de búsqueda con mejores resultados
function enhanceSearchResults(query) {
    const results = searchRecipes(query);
    
    // Agregar resultado destacado si no hay muchos resultados
    if (results.length < 3) {
        console.log(`🔍 Pocos resultados para "${query}", sugiriendo recetas similares...`);
        
        // Buscar recetas similares por ingredientes
        const allRecipes = [];
        Object.values(EXPANDED_RECIPES_DATABASE.weekly).forEach(day => {
            Object.values(day).forEach(meals => {
                if (Array.isArray(meals)) {
                    allRecipes.push(...meals);
                }
            });
        });
        
        const similarRecipes = allRecipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(query.split(' ')[0]) ||
                   recipe.description.toLowerCase().includes(query.split(' ')[0]);
        }).slice(0, 5);
        
        if (similarRecipes.length > 0) {
            results.push(...similarRecipes);
        }
    }
    
    return results;
}

// Función mejorada para mostrar ruleta con más opciones
function enhanceRouletteOptions() {
    const allRecipes = [];
    
    // Incluir todas las recetas
    Object.values(EXPANDED_RECIPES_DATABASE.weekly).forEach(day => {
        Object.values(day).forEach(meals => {
            if (Array.isArray(meals)) {
                allRecipes.push(...meals);
            }
        });
    });
    
    Object.values(EXPANDED_RECIPES_DATABASE.healthy).forEach(category => {
        if (Array.isArray(category)) {
            allRecipes.push(...category);
        }
    });
    
    // Seleccionar 8 recetas random
    const shuffled = allRecipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
}

// Mejorar función de compartir con más opciones
function enhanceShareOptions(recipeId) {
    const recipe = findRecipeById(recipeId);
    if (!recipe) return;
    
    const shareOptions = {
        whatsapp: {
            url: `https://wa.me/?text=${encodeURIComponent(`¡Mira esta receta mágica: ${recipe.name}! 🧙‍♂️✨\n\n${recipe.description}\n\nVisita nuestra página de recetas panameñas 🇵🇦`)}`,
            name: 'WhatsApp'
        },
        facebook: {
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
            name: 'Facebook'
        },
        twitter: {
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Deliciosa receta panameña: ${recipe.name} 🧙‍♂️✨ #Panama #Recetas`)}`,
            name: 'Twitter'
        }
    };
    
    // Crear modal de opciones de compartir
    const shareModal = document.createElement('div');
    shareModal.innerHTML = `
        <div class="share-modal-overlay">
            <div class="share-modal-content">
                <h3>🎉 Compartir Receta</h3>
                <div class="share-options">
                    ${Object.entries(shareOptions).map(([key, option]) => `
                        <a href="/${option.url}" target="_blank" class="share-option">
                            <i class="fab fa-${key}"></i>
                            ${option.name}
                        </a>
                    `).join('')}
                </div>
                <button class="close-share-modal">Cerrar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(shareModal);
    
    // Auto-cerrar después de unos segundos
    setTimeout(() => {
        if (shareModal.parentNode) {
            shareModal.parentNode.removeChild(shareModal);
        }
    }, 5000);
}

// Función mejorada para generar PDF con mejor formato
function enhancePDFGeneration(recipeId) {
    const recipe = findRecipeById(recipeId);
    if (!recipe) return;
    
    const pdfStyles = `
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            h1 { color: #8B5CF6; text-align: center; margin-bottom: 20px; }
            img { width: 100%; max-width: 300px; margin: 0 auto; display: block; border-radius: 10px; }
            .recipe-section { margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 10px; }
            .ingredients ul, .instructions ol { padding-left: 20px; }
            .magic-text { font-style: italic; color: #10B981; background: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 5px; }
            .footer { margin-top: 30px; text-align: center; color: #666; border-top: 2px solid #8B5CF6; padding-top: 20px; }
        </style>
    `;
    
    const pdfContent = `
        ${pdfStyles}
        <div class="recipe-pdf">
            <h1>🧙‍♂️ ${recipe.name} ✨</h1>
            <img src="${recipe.image}" alt="${recipe.name}" />
            
            <div class="recipe-section">
                <h2>📝 Ingredientes</h2>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="recipe-section">
                <h2>👨‍🍳 Preparación</h2>
                <ol>
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
            
            ${recipe.magic ? `
            <div class="recipe-section">
                <h2>✨ Magia Culinaria</h2>
                <p class="magic-text">${recipe.magic}</p>
            </div>
            ` : ''}
            
            <div class="recipe-meta">
                <p><strong>Tiempo:</strong> ${recipe.time}</p>
                <p><strong>Dificultad:</strong> ${recipe.difficulty}</p>
            </div>
            
            <div class="footer">
                <p>🇵🇦 Recetas Mágicas de NATY - Panamá</p>
                <p>Generado el ${new Date().toLocaleDateString()} ✨</p>
                <p>Sabor auténtico con un toque de magia</p>
            </div>
        </div>
    `;
    
    // Crear ventana de impresión mejorada
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.write(pdfContent);
    printWindow.document.close();
    
    // Auto-abrir diálogo de impresión
    setTimeout(() => {
        printWindow.focus();
        printWindow.print();
    }, 1000);
}

// Función de validación de datos
function validateRecipeData(recipe) {
    const required = ['id', 'name', 'ingredients', 'instructions', 'description'];
    const missing = required.filter(field => !recipe[field]);
    
    if (missing.length > 0) {
        console.warn(`⚠️ Receta "${recipe.name}" le faltan campos: ${missing.join(', ')}`);
        return false;
    }
    
    return true;
}

// Health check de la aplicación
function applicationHealthCheck() {
    const checks = {
        databaseLoaded: typeof EXPANDED_RECIPES_DATABASE !== 'undefined',
        domReady: document.readyState === 'complete',
        navigationWorking: document.getElementById('nav-menu') !== null,
        searchFunctioning: document.getElementById('search-input') !== null,
        recipesGenerated: document.querySelectorAll('.recipe-card').length > 0
    };
    
    const passed = Object.values(checks).filter(Boolean).length;
    const total = Object.keys(checks).length;
    
    console.log(`🏥 Health Check: ${passed}/${total} checks passed`);
    
    if (passed === total) {
        console.log('✅ ¡Aplicación completamente funcional y lista para usar!');
    } else {
        console.log('⚠️ Algunas funciones pueden no estar funcionando completamente');
    }
    
    return checks;
}

// Actualizar exports con nuevas funciones
window.enhanceSearchResults = enhanceSearchResults;
window.enhanceRouletteOptions = enhanceRouletteOptions;
window.enhanceShareOptions = enhanceShareOptions;
window.enhancePDFGeneration = enhancePDFGeneration;
window.validateRecipeData = validateRecipeData;
window.applicationHealthCheck = applicationHealthCheck;

// Exportar funciones principales para uso global
window.openRecipeModal = openRecipeModal;
window.closeRecipeModal = closeRecipeModal;
window.toggleFavorite = toggleFavorite;
window.shareRecipe = shareRecipe;
window.downloadRecipe = downloadRecipe;
window.playMusic = playMusic;
window.showRouletteModal = showRouletteModal;
window.spinRoulette = spinRoulette;
window.closeRouletteModal = closeRouletteModal;
window.scrollToSection = scrollToSection;
window.scrollToDayRecipes = scrollToDayRecipes;
window.scrollToHealthyType = scrollToHealthyType;
window.scrollToFestival = scrollToFestival;
window.addComment = addComment;
window.closeCommentsModal = closeCommentsModal;
window.filterRecipesByCategory = filterRecipesByCategory;
window.filterHealthyRecipes = filterHealthyRecipes;
window.handleDayCardClick = handleDayCardClick;
window.scrollToDay = scrollToDay;

// Función para expandir/colapsar secciones de días
function toggleDaySection(day) {
    const section = document.getElementById(`${day}-recetas`);
    if (!section) return;
    
    const isVisible = section.style.display !== 'none';
    
    // Cerrar todas las secciones primero
    document.querySelectorAll('.day-recipes-section').forEach(sec => {
        sec.style.display = 'none';
    });
    
    // Si estaba oculta, mostrarla
    if (!isVisible) {
        section.style.display = 'block';
        // Scroll suave a la sección
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

window.toggleDaySection = toggleDaySection;

// Función para movimiento automático del carrusel
function initCarouselAutoScroll() {
    const weekGrid = document.querySelector('.week-grid');
    if (!weekGrid) {
        // Reintentar después de un breve delay
        setTimeout(initCarouselAutoScroll, 500);
        return;
    }
    
    let scrollPosition = 0;
    const scrollSpeed = 2; // Velocidad de desplazamiento (píxeles por frame) - aumentada para movimiento más visible
    let direction = 1; // 1 para derecha, -1 para izquierda
    let isPaused = false;
    let isUserInteracting = false;
    let animationId = null;
    let lastScrollTime = Date.now();
    let userScrollPosition = 0;
    
    
    function getMaxScroll() {
        const max = weekGrid.scrollWidth - weekGrid.clientWidth;
        return max > 0 ? max : 0;
    }
    
    function autoScroll() {
        if (isPaused || isUserInteracting) {
            animationId = requestAnimationFrame(autoScroll);
            return;
        }
        
        const maxScroll = getMaxScroll();
        
        // Solo animar si hay scroll disponible
        if (maxScroll <= 0) {
            animationId = requestAnimationFrame(autoScroll);
            return;
        }
        
        scrollPosition += scrollSpeed * direction;
        
        // Cambiar dirección cuando llegue a los extremos con una pequeña pausa
        if (scrollPosition >= maxScroll - 1) {
            scrollPosition = maxScroll;
            direction = -1;
            // Pequeña pausa al llegar al final antes de cambiar dirección
            setTimeout(() => {}, 500);
        } else if (scrollPosition <= 1) {
            scrollPosition = 0;
            direction = 1;
            // Pequeña pausa al llegar al inicio antes de cambiar dirección
            setTimeout(() => {}, 500);
        }
        
        // Aplicar el scroll directamente para movimiento más fluido
        weekGrid.scrollLeft = scrollPosition;
        animationId = requestAnimationFrame(autoScroll);
    }
    
    // Detectar interacción del usuario
    let userScrollTimeout;
    weekGrid.addEventListener('scroll', () => {
        const now = Date.now();
        const currentScroll = weekGrid.scrollLeft;
        
        // Detectar si el scroll es manual (diferencia significativa)
        if (Math.abs(currentScroll - userScrollPosition) > 5 && now - lastScrollTime > 50) {
            isUserInteracting = true;
            scrollPosition = currentScroll; // Sincronizar posición
            clearTimeout(userScrollTimeout);
            userScrollTimeout = setTimeout(() => {
                isUserInteracting = false;
                // Ajustar dirección basada en la posición actual
                const maxScroll = getMaxScroll();
                if (scrollPosition >= maxScroll - 10) {
                    direction = -1;
                } else if (scrollPosition <= 10) {
                    direction = 1;
                }
            }, 3000); // Reanudar después de 3 segundos sin interacción
        }
        userScrollPosition = currentScroll;
        lastScrollTime = now;
    });
    
    // Pausar cuando el usuario pasa el mouse
    weekGrid.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    
    weekGrid.addEventListener('mouseleave', () => {
        isPaused = false;
    });
    
    // Pausar cuando el usuario toca (móvil)
    let touchStartX = 0;
    weekGrid.addEventListener('touchstart', (e) => {
        isPaused = true;
        touchStartX = e.touches[0].clientX;
    });
    
    weekGrid.addEventListener('touchend', () => {
        setTimeout(() => {
            isPaused = false;
        }, 2000);
    });
    
    // Iniciar animación después de que todo esté cargado
    function startAnimation() {
        const maxScroll = getMaxScroll();
        if (maxScroll > 0) {
            // Asegurar que el scroll esté en posición inicial
            scrollPosition = 0;
            weekGrid.scrollLeft = 0;
            autoScroll();
        } else {
            // Si no hay scroll, reintentar después de un delay
            setTimeout(startAnimation, 1000);
        }
    }
    
    // Esperar a que las imágenes se carguen y el layout esté listo
    if (document.readyState === 'complete') {
        setTimeout(startAnimation, 1500);
    } else {
        window.addEventListener('load', () => {
            setTimeout(startAnimation, 1500);
        });
    }
}


// Inicializar carrusel cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initCarouselAutoScroll, 1000);
    });
} else {
    setTimeout(initCarouselAutoScroll, 1000);
}
