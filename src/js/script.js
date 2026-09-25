document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los botones de edición
    const editButtons = document.querySelectorAll('.btn-edit');

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Buscamos la tarjeta (.card-curriculum) correspondiente a este botón
            const card = button.closest('.card-curriculum');
            
            // Seleccionamos todos los elementos editables dentro de esta tarjeta
            const editableElements = card.querySelectorAll('.editable');
            
            // Verificamos si actualmente está en modo edición
            const isEditing = button.classList.contains('editing');

            if (!isEditing) {
                // ACTIVAR MODO EDICIÓN
                editableElements.forEach(element => {
                    element.setAttribute('contenteditable', 'true');
                });
                
                button.textContent = 'Guardar Cambios';
                button.classList.add('editing');
                button.style.backgroundColor = '#28a745'; // Cambia a verde
            } else {
                // DESACTIVAR MODO EDICIÓN (GUARDAR)
                editableElements.forEach(element => {
                    element.removeAttribute('contenteditable');
                });
                
                button.textContent = 'Editar Perfil';
                button.classList.remove('editing');
                button.style.backgroundColor = ''; // Restaura el color original
            }
        });
    });
});

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

