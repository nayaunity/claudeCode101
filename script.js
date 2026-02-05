document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Update active nav link based on scroll position
    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }

    // Smooth scroll to section on nav click (only for hash links)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle hash links on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // Let external links (like about.html) work normally
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', updateActiveNav);

    // Set initial active state
    updateActiveNav();

    // Add hover effect to work items
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '10px';
        });
        item.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '0';
        });
    });
});
