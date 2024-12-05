// Ativando animações ao rolar a página
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Evita reanimação
        }
    });
}, { threshold: 0.2 });

hiddenElements.forEach(element => observer.observe(element));


document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const heroSection = document.querySelector(".hero");

    // Verifica se os elementos existem antes de observá-los
    if (header) observer.observe(header);
    if (heroSection) observer.observe(heroSection);
});
