document.addEventListener('DOMContentLoaded', function() {                                              const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href*="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }                                             });

        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').includes(current)) {
                link.style.color = 'var(--accent)';
            }
        });
    });

    console.log('%cBlack Lotus Collective', 'color: #9d00ff; font-size: 20px; font-weight: bold;');
    console.log('%cWe are the signal.', 'color: #e0e0e0; font-size: 14px;');
    console.log('%cViewing source? We\'re hiring. contact@blacklotuscollective.co.za', 'color: #666; font-size: 12px;');
});
