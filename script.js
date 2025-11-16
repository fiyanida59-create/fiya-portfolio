// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 90; // navbar height offset
    document.querySelectorAll('.nav-links a').forEach(link => {
        const sec = document.querySelector(link.getAttribute('href'));
        if (sec && sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Simple scroll-reveal animation
function onScrollAnimate() {
    const animatedEls = document.querySelectorAll('[data-animate]');
    animatedEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Add data-animate to major sections
    document.querySelectorAll('section').forEach(sec => sec.setAttribute('data-animate', ''));
    onScrollAnimate();
});
window.addEventListener('scroll', onScrollAnimate);

// Prevent default for contact form and show alert (demo only)
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Terima kasih telah menghubungi. Pesan Anda sudah dikirim!');
    this.reset();
});