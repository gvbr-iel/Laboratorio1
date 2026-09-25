document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos de la sección de Gabriel
    const cardGabriel = document.querySelector("#gabriel .card-curriculum");
    const proyectoBox = document.querySelector("#gabriel .project-box");

    // Interacción 1: Cambiar estilo o clase al hacer clic en la tarjeta de Gabriel
    cardGabriel.addEventListener("click", () => {
        cardGabriel.classList.toggle("destacado-gabriel");
    });
});