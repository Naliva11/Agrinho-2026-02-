// Rolagem suave no menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));

        alvo.scrollIntoView({
            behavior: 'smooth'
        });
    });
});