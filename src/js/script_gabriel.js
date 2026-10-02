document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos de la sección de Gabriel
    const cardGabriel = document.querySelector("#gabriel .card-curriculum");
    const proyectoBox = document.querySelector("#gabriel .project-box");

    // Interacción 1: Cambiar estilo o clase al hacer clic en la tarjeta de Gabriel
    cardGabriel.addEventListener("click", () => {
        cardGabriel.classList.toggle("destacado-gabriel");
    });

    // Interacción 2: Mostrar u ocultar los proyectos al hacer clic en el contenedor de proyectos
    proyectoBox.addEventListener("click", (e) => {
        // Evita conflictos si se hace clic en elementos internos específicos
        e.stopPropagation();
        proyectoBox.classList.toggle("expandido");
    });
});

