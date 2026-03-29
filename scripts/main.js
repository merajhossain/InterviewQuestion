// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// বাংলা ব্যাখ্যা Toggle
function toggleBangla(btn) {
    const card = btn.closest('.question-card');
    const section = card.querySelector('.bangla-section');
    if (!section) return;
    const isOpen = section.classList.toggle('open');
    btn.textContent = isOpen ? '🇧🇩 বাংলা লুকাও' : '🇧🇩 বাংলায় দেখুন';
}
