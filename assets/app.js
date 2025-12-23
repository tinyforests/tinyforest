// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navModal = document.getElementById('navModal');
    const navClose = document.getElementById('navClose');

    if (hamburger && navModal) {
        hamburger.addEventListener('click', () => {
            navModal.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (navClose && navModal) {
        navClose.addEventListener('click', () => {
            navModal.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close nav on link click
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.getAttribute('target')) {
                navModal.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close nav on outside click
    if (navModal) {
        navModal.addEventListener('click', (e) => {
            if (e.target === navModal) {
                navModal.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
