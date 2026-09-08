// ============================================
// FUNCIONALIDADES JAVASCRIPT
// ============================================

// 1. MENÚ MÓVIL - Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// 2. FILTRO DE GALERÍA
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filtrar galería
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
        });
    });
});

// Animación de entrada para galería
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .gallery-item.fade-in {
        animation: fadeIn 0.5s ease-out;
    }
`;
document.head.appendChild(style);

// 3. FORMULARIO DE CONTACTO
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const mensaje = contactForm.querySelector('textarea').value;

        // Validación básica
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, completa todos los campos');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido');
            return;
        }

        // Mostrar mensaje de éxito
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.\n\nNos pondremos en contacto pronto a: ${email}`);

        // Limpiar formulario
        contactForm.reset();
    });
}

// 4. ANIMACIÓN AL SCROLL (Reveal on scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Agregar clase reveal a elementos
document.querySelectorAll('.about-text, .stat-card, .gallery-item, .info-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Agregar estilos para reveal
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// 5. EFECTO PARALLAX EN HERO
const hero = document.querySelector('.hero');
const heroBackground = document.querySelector('.hero-background');

if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

// 6. CONTADOR ANIMADO PARA ESTADÍSTICAS
const animateCounters = () => {
    const statCards = document.querySelectorAll('.stat-card h3');
    
    statCards.forEach(card => {
        const text = card.textContent;
        
        // Si es un número, animar
        if (text.includes('+') || text.includes('%')) {
            let count = 0;
            const target = parseInt(text) || (text.includes('%') ? 100 : 50);
            const increment = target / 50;
            
            const counter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    count = target;
                    clearInterval(counter);
                }
                card.textContent = Math.floor(count) + (text.includes('+') ? '+' : text.includes('%') ? '%' : '');
            }, 30);
        }
    });
};

// Animar contadores cuando se hace scroll a la sección
const aboutSection = document.querySelector('.about');
let hasAnimated = false;

const aboutObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
    }
});

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// 7. BOTÓN DE SCROLL TO TOP
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.classList.add('scroll-top-btn');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #FF6B35;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
    `;

    document.body.appendChild(button);

    // Mostrar/ocultar botón
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });

    // Hacer scroll al top
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efecto hover
    button.addEventListener('mouseenter', () => {
        button.style.background = '#1F3A70';
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = '#FF6B35';
        button.style.transform = 'scale(1)';
    });
};

createscrollTopButton();

// 8. EFECTO SMOOTH SCROLL MEJORADO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 9. FUNCIONALIDAD RESPONSIVE DEL MENÚ
const mobileMenuFunction = () => {
    if (window.innerWidth <= 768) {
        // Menú móvil activo
        document.body.style.overflow = 'auto';
    } else {
        // Menú desktop
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
};

window.addEventListener('resize', mobileMenuFunction);

// 10. NOTIFICACIÓN DE PÁGINA CARGADA
window.addEventListener('load', () => {
    console.log('🏀 ¡Portafolio de Baloncesto cargado exitosamente!');
    
    // Agregar animación de carga
    const mainContent = document.body;
    mainContent.style.animation = 'fadeIn 0.5s ease-out';
});

// 11. MENSAJE PERSONALIZADO EN CONSOLA
console.log('%c¡Bienvenido a mi Portafolio de Baloncesto! 🏀', 
    'color: #FF6B35; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
);
console.log('%cDesarrollado con HTML, CSS y JavaScript', 
    'color: #1F3A70; font-size: 14px; font-style: italic;'
);