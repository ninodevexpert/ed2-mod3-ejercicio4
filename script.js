// Animación de scroll para las secciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar todas las secciones con clase fade-in
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navBarHeight = document.querySelector('.nav-bar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navBarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto parallax sutil en el hero
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && currentScroll < hero.offsetHeight) {
            const parallaxValue = currentScroll * 0.5;
            hero.style.transform = `translateY(${parallaxValue}px)`;
        }
        
        lastScroll = currentScroll;
    });
});
