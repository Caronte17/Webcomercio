let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Oculta el header al hacer scroll hacia abajo
        header.classList.add("hidden-header");
    } else {
        // Muestra el header si hacemos scroll hacia arriba o dejamos de movernos
        header.classList.remove("hidden-header");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
