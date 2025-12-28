// Variable
const elements = document.querySelectorAll('.fade-up');

function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add('visible');
        } else {
            el. classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();