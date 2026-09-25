document.addEventListener('DOMContentLoaded', () => {
    // 1. Persistencia de datos en el Local Storage
    // Cargar datos guardados previamente
    const loadSavedData = () => {
        const savedData = localStorage.getItem('curriculumData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            Object.keys(parsedData).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = parsedData[id];
                }
            });
        }
    };

    // Guardar el estado actual de todas las tarjetas
    const saveAllData = () => {
        const dataToSave = {};
        // Asignamos IDs automáticos a los elementos editables si no los tienen
        document.querySelectorAll('.card-curriculum').forEach((card, cardIdx) => {
            card.querySelectorAll('.editable').forEach((elem, elemIdx) => {
                if (!elem.id) {
                    elem.id = `card-${cardIdx}-elem-${elemIdx}`;
                }
                dataToSave[elem.id] = elem.innerHTML;
            });
        });
        localStorage.setItem('curriculumData', JSON.stringify(dataToSave));
    };

    // Inicializamos la carga de datos
    loadSavedData();
    
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

                // Guardar permanentemente
                saveAllData();
                alert('Se han cambiado los datos.');
            }
        });
    });
});