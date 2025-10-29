// Optimizaciones avanzadas para Recetas Mágicas NR
// Este archivo contiene mejoras de rendimiento y mejores prácticas

// ===== OPTIMIZACIONES DE RENDIMIENTO =====

// 1. Lazy Loading de Imágenes
function implementLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// 2. Virtualización de Listas Grandes
function virtualizeLargeLists() {
    const MAX_RECIPES_VISIBLE = 12;
    
    function createVirtualScroll(container, items, renderItem) {
        const VISIBLE_ITEMS = 6;
        const ITEM_HEIGHT = 200;
        
        let startIndex = 0;
        
        function render() {
            const fragment = document.createDocumentFragment();
            const endIndex = Math.min(startIndex + VISIBLE_ITEMS, items.length);
            
            for (let i = startIndex; i < endIndex; i++) {
                const item = renderItem(items[i]);
                fragment.appendChild(item);
            }
            
            container.innerHTML = '';
            container.appendChild(fragment);
        }
        
        const handleScroll = throttle(() => {
            const scrollTop = container.scrollTop;
            const newStartIndex = Math.floor(scrollTop / ITEM_HEIGHT);
            
            if (newStartIndex !== startIndex) {
                startIndex = newStartIndex;
                render();
            }
        }, 100);
        
        container.addEventListener('scroll', handleScroll);
        render();
    }
}

// 3. Debounce Mejorado para Búsqueda
function improvedDebounce(func, wait, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func(...args);
    };
}

// 4. Throttle para Eventos de Scroll y Resize
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== OPTIMIZACIONES DE MEMORIA =====

// 5. Limpieza de Event Listeners
function cleanupEventListeners() {
    // Crear WeakMap para tracking de listeners
    const listenerMap = new WeakMap();
    
    function addTrackedListener(element, event, handler) {
        if (!listenerMap.has(element)) {
            listenerMap.set(element, new Map());
        }
        
        const elementListeners = listenerMap.get(element);
        elementListeners.set(event, handler);
        
        element.addEventListener(event, handler);
    }
    
    function removeTrackedListeners(element) {
        const elementListeners = listenerMap.get(element);
        if (elementListeners) {
            elementListeners.forEach((handler, event) => {
                element.removeEventListener(event, handler);
            });
            listenerMap.delete(element);
        }
    }
    
    return { addTrackedListener, removeTrackedListeners };
}

// 6. Gestión de Memoria para Partículas
function optimizeParticleSystem() {
    let particles = [];
    const MAX_PARTICLES = 50;
    
    function createOptimizedParticle() {
        if (particles.length >= MAX_PARTICLES) {
            // Remover partícula más antigua
            const oldParticle = particles.shift();
            if (oldParticle && oldParticle.parentNode) {
                oldParticle.parentNode.removeChild(oldParticle);
            }
        }
        
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: hsl(${Math.random() * 360}, 70%, 60%);
            border-radius: 50%;
            pointer-events: none;
            animation: particle-optimized 8s linear forwards;
        `;
        
        particles.push(particle);
        return particle;
    }
    
    return createOptimizedParticle;
}

// ===== OPTIMIZACIONES DE RED =====

// 7. Prefetch de Recursos Críticos
function prefetchCriticalResources() {
    // Preload fuentes críticas
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);
    
    // Prefetch imágenes importantes
    const imagePrefetch = document.createElement('link');
    imagePrefetch.rel = 'prefetch';
    imagePrefetch.href = 'https://images.unsplash.com/photo-1620380209364-8e1f5df72ed9?w=400&h=300&fit=crop';
    document.head.appendChild(imagePrefetch);
}

// 8. Service Worker Simple para Cache
function registerSimpleServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(err => {
                console.log('Service Worker registration failed:', err);
            });
        });
    }
}

// ===== OPTIMIZACIONES DE UX =====

// 9. Mejora de Touch Interactions
function optimizeTouchInteractions() {
    // Agregar clase touch al body para CSS específico
    document.body.classList.add('touch-device');
    
    // Mejorar botones para touch
    const touchButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .filter-btn');
    touchButtons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// 10. Indicadores de Loading Inteligentes
function implementSmartLoading() {
    function showLoadingOverlay(message = 'Cargando...') {
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <p>${message}</p>
            </div>
        `;
        
        document.body.appendChild(overlay);
        return overlay;
    }
    
    function hideLoadingOverlay(overlay) {
        if (overlay && overlay.parentNode) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.parentNode.removeChild(overlay);
            }, 300);
        }
    }
    
    return { showLoadingOverlay, hideLoadingOverlay };
}

// ===== OPTIMIZACIONES DE ACCESIBILIDAD =====

// 11. Navegación por Teclado Mejorada
function enhanceKeyboardNavigation() {
    let currentFocusIndex = 0;
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="email"], input[type="url"], input[type="password"], input[type="tel"], input[type="number"], [tabindex]:not([tabindex="-1"])'
    );
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            // Navegación normal con Tab
            return;
        }
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            
            if (e.key === 'ArrowDown') {
                currentFocusIndex = (currentFocusIndex + 1) % focusableElements.length;
            } else {
                currentFocusIndex = (currentFocusIndex - 1 + focusableElements.length) % focusableElements.length;
            }
            
            focusableElements[currentFocusIndex].focus();
        }
    });
}

// 12. Announcer para Screen Readers
function implementScreenReaderAnnouncer() {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    document.body.appendChild(announcer);
    
    function announce(message) {
        announcer.textContent = message;
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    }
    
    return announce;
}

// ===== CONFIGURACIÓN Y INICIALIZACIÓN =====

// 13. Configuración de Performance Optimizada
const PERFORMANCE_CONFIG = {
    LAZY_LOADING_THRESHOLD: 0.1,
    SEARCH_DEBOUNCE_DELAY: 300,
    PARTICLE_LIMIT: 50,
    ANIMATION_FRAME_RATE: 60,
    CACHE_DURATION: 300000 // 5 minutos
};

// 14. Inicialización Optimizada
function initializeOptimizations() {
    // Verificar capacidades del navegador
    const capabilities = {
        intersectionObserver: 'IntersectionObserver' in window,
        serviceWorker: 'serviceWorker' in navigator,
        requestIdleCallback: 'requestIdleCallback' in window,
        performanceObserver: 'PerformanceObserver' in window
    };

    // Aplicar optimizaciones disponibles
    if (capabilities.intersectionObserver) {
        implementLazyLoading();
    }
    
    if ('ontouchstart' in window) {
        optimizeTouchInteractions();
    }
    
    enhanceKeyboardNavigation();
    
    const announce = implementScreenReaderAnnouncer();
    const createOptimizedParticle = optimizeParticleSystem();
    const { addTrackedListener, removeTrackedListeners } = cleanupEventListeners();
    
    // Exportar funciones para uso global
    window.AppOptimizations = {
        capabilities,
        announce,
        createOptimizedParticle,
        addTrackedListener,
        removeTrackedListeners,
        PERFORMANCE_CONFIG
    };
}

// ===== MONITOREO DE RENDIMIENTO =====

// 15. Métricas de Performance
function trackPerformanceMetrics() {
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'navigation') {
                    console.log('Navigation timing:', {
                        load: entry.loadEventEnd - entry.loadEventStart,
                        domComplete: entry.domContentLoadedEventEnd - entry.navigationTime 
                    });
                }
            });
        });
        
        observer.observe({ entryTypes: ['navigation', 'measure'] });
    }
}

// ===== CSS DINÁMICO PARA OPTIMIZACIONES =====

// 16. Insertar CSS de optimizaciones
const optimizationStyles = document.createElement('style');
optimizationStyles.textContent = `
    /* Optimizaciones de animaciones */
    @keyframes particle-optimized {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
        }
    }
    
    /* Touch optimizations */
    .touch-device .btn-primary,
    .touch-device .btn-secondary,
    .touch-device .filter-btn {
        min-height: 44px;
        min-width: 44px;
    }
    
    /* Loading overlay */
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    }
    
    .loading-spinner {
        text-align: center;
        color: white;
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(139, 92, 246, 0.3);
        border-radius: 50%;
        border-top-color: #8B5CF6;
        animation: spin 1s ease-in-out infinite;
        margin: 0 auto 1rem;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    /* Lazy loading */
    img.lazy {
        background-color: #f0f0f0;
        background-image: linear-gradient(90deg, #f0f0f0 0%, #eee 50%, #f0f0f0 100%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
`;

document.head.appendChild(optimizationStyles);

// Inicializar optimizaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeOptimizations();
    trackPerformanceMetrics();
    prefetchCriticalResources();
});

// Exportar para uso como módulo si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeOptimizations,
        implementLazyLoading,
        improvedDebounce,
        throttle,
        PERFORMANCE_CONFIG
    };
}


