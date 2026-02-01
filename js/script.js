// ============================================
// AVARIO - JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // ============================================
    // STICKY NAVBAR ON SCROLL
    // ============================================
    
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default if href is just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================
    // FAQ ACCORDION (Optional enhancement)
    // ============================================
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.style.cursor = 'pointer';
        question.style.position = 'relative';
        question.style.paddingRight = '30px';
        
        // Add arrow indicator
        const arrow = document.createElement('span');
        arrow.innerHTML = '▼';
        arrow.style.position = 'absolute';
        arrow.style.right = '0';
        arrow.style.transition = 'transform 0.3s ease';
        arrow.style.fontSize = '1rem';
        question.appendChild(arrow);
        
        const answer = question.nextElementSibling;
        
        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            document.querySelectorAll('.faq-question span').forEach(arr => {
                arr.style.transform = 'rotate(0deg)';
            });
            
            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
            }
        });
        
        // Initially show all answers (remove if you want accordion closed by default)
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    });
    
    // ============================================
    // SCROLL ANIMATIONS (Fade in on scroll)
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll(
        '.service-card, .offer-card, .testimonial-card, .target-card, .blog-card, .experience-card, .faq-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--primary-blue)';
                    navLink.style.fontWeight = '700';
                } else {
                    navLink.style.color = '';
                    navLink.style.fontWeight = '';
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ============================================
    // PHONE NUMBER TRACKING (Analytics)
    // ============================================
    
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone click event (add your analytics code here)
            console.log('Phone number clicked:', this.getAttribute('href'));
            // Example: gtag('event', 'phone_click', { 'event_category': 'contact' });
        });
    });
    
    // ============================================
    // EMAIL TRACKING (Analytics)
    // ============================================
    
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track email click event (add your analytics code here)
            console.log('Email link clicked:', this.getAttribute('href'));
            // Example: gtag('event', 'email_click', { 'event_category': 'contact' });
        });
    });
    
    // ============================================
    // BUTTON CTA TRACKING (Analytics)
    // ============================================
    
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('CTA button clicked:', buttonText);
            // Example: gtag('event', 'cta_click', { 'event_label': buttonText });
        });
    });
    
    // ============================================
    // PARALLAX EFFECT ON HERO (Optional)
    // ============================================
    
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // ============================================
    // LAZY LOADING IMAGES (if you add images later)
    // ============================================
    
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
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ============================================
    // CONSOLE MESSAGE (Easter egg)
    // ============================================
    
    console.log('%c🚀 AVARIO - Site développé par Iann Bolatoglu', 'color: #0066FF; font-size: 16px; font-weight: bold;');
    console.log('%cÀ la recherche d\'un développeur/marketeur digital ? Contactez-moi !', 'color: #6B4FBB; font-size: 14px;');
    console.log('%c📧 bolatoglu.iann.pro@gmail.com | 📱 07 67 72 59 80', 'color: #FF6B35; font-size: 12px;');
    
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});
