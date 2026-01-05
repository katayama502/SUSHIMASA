// ヘッダーのスクロールエフェクト
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = '#ffffff';
        header.style.padding = '15px 0';
    }
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Accordion Auto-Open on Scroll
document.addEventListener('DOMContentLoaded', () => {
    // Only run on mobile (simple check, or always run and let CSS control display)
    const isMobile = () => window.innerWidth <= 768;

    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Shrink the active area to the center 20% band
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        if (!isMobile()) {
            // If resized to desktop, ensure we clean up active classes or just ignore
            return;
        }

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            } else {
                entry.target.classList.remove('is-active');
            }
        });
    }, observerOptions);

    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach(category => {
        observer.observe(category);
    });
});