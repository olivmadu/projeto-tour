// ------------------------- Animações ao Rolar a Página ------------------------- //

// Seleciona todos os elementos que devem ser animados
const hiddenElements = document.querySelectorAll('.hidden');

// Cria um Intersection Observer para adicionar a classe 'animate' assim que o elemento entrar na área de visualização
const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            currentObserver.unobserve(entry.target); // Impede que a animação ocorra novamente
        }
    });
}, { threshold: 0.2 });

// Observa cada elemento "hidden"
hiddenElements.forEach(element => observer.observe(element));

// ------------------------- Observando elementos específicos após carregamento ------------------------- //
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const heroSection = document.querySelector(".hero");

    // Observa o header se existir
    if (header) {
        observer.observe(header);
    }

    // Observa a seção hero se existir
    if (heroSection) {
        observer.observe(heroSection);
    }
});

