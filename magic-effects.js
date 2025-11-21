// Efectos mágicos avanzados para la página de recetas
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de cambio cíclico de imágenes de fondo
    initHeroImageCycle();
    
    // Partículas mágicas adicionales
    createAdvancedParticles();
    
    // Efectos de hover mejorados
    addAdvancedHoverEffects();
    
    // Animaciones de scroll
    initScrollAnimations();
});

// Ciclo de imágenes en el hero
function initHeroImageCycle() {
    const heroImages = document.querySelectorAll('.hero-image-1, .hero-image-2, .hero-image-3');
    
    if (heroImages.length === 3) {
        let currentIndex = 0;
        
        setInterval(() => {
            heroImages.forEach((img, index) => {
                img.style.opacity = img.style.opacity == 1 ? '0.15' : img.style.opacity;
            });
            
            heroImages[currentIndex].style.opacity = '0.3';
            currentIndex = (currentIndex + 1) % heroImages.length;
        }, 4000);
    }
}

// Partículas mágicas avanzadas
function createAdvancedParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Crear partículas adicionales
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: radial-gradient(circle, 
                rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8), 
                transparent
            );
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 10}s;
            pointer-events: none;
            z-index: 1;
            filter: blur(${Math.random() * 2}px);
        `;
        
        heroSection.appendChild(particle);
    }
}

// Efectos hover avanzados
function addAdvancedHoverEffects() {
    // Efectos en botones principales
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Efectos en tarjetas de recetas
    const cards = document.querySelectorAll('.recipe-card, .healthy-recipe-card, .day-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotate(1deg)';
            this.style.filter = 'brightness(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.filter = '';
        });
    });
}

// Animaciones de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    const elementsToAnimate = document.querySelectorAll('.section-title, .day-card, .healthy-recipe-card, .festival-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Función para efectos de cursor mágico
function createMagicalCursor() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: screen;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// Función para agregar sparkles temporales en hover
document.addEventListener('DOMContentLoaded', function() {
    let sparkles = [];
    
    document.addEventListener('mouseover', function(e) {
        if (e.target.matches('button, .recipe-card, .nav-link, .healthy-recipe-card')) {
            createTempSparkle(e.clientX, e.clientY);
        }
    });
    
    function createTempSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, white, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            animation: sparkleBurst 0.6s ease forwards;
        `;
        
        document.body.appendChild(sparkle);
        sparkles.push(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
                sparkles = sparkles.filter(s => s !== sparkle);
            }
        }, 600);
        
        // Limitar número de sparkles
        if (sparkles.length > 20) {
            const oldSparkle = sparkles.shift();
            if (oldSparkle.parentNode) {
                oldSparkle.parentNode.removeChild(oldSparkle);
            }
        }
    }
});

// CSS adicional para las animaciones
const additionalStyles = `
    @keyframes sparkleBurst {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(3) rotate(360deg);
            opacity: 0;
        }
    }
    
    .magic-particle {
        animation: complexFloat 15s linear infinite;
    }
    
    @keyframes complexFloat {
        0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .btn-primary:hover,
    .btn-secondary:hover {
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .recipe-card:hover,
    .healthy-recipe-card:hover,
    .day-card:hover {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
`;

// Agregar estilos adicionales al documento
document.addEventListener('DOMContentLoaded', function() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
});

// Efectos especiales de carga
window.addEventListener('load', function() {
    // Efecto de entrada gradual
    const mainElements = document.querySelectorAll('.hero-content, .day-card, .healthy-recipe-card');
    mainElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    console.log('✨ Efectos mágicos cargados exitosamente');
});

// Exportar funciones principales
window.initMagicalEffects = {
    initHeroImageCycle,
    createAdvancedParticles,
    addAdvancedHoverEffects,
    initScrollAnimations,
    createMagicalCursor
};







