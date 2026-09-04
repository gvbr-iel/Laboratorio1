# Landscape de Currículums y Portafolios de Proyectos

Este sitio web es una plataforma interactiva tipo *landscape* construida de manera colaborativa para exhibir los perfiles profesionales, currículums, habilidades y proyectos destacados de los integrantes de nuestro equipo de desarrollo.

**Asignatura:** Programación de Aplicaciones  
**Unidad:** Unidad I – Introducción al Desarrollo Web  

---

## 🎨 Acuerdos de Diseño del Equipo

Para garantizar que el sitio mantenga una coherencia visual y se presente como un producto unificado y profesional, el equipo ha acordado los siguientes estándares que se aplican a todas las tarjetas de perfil:

### 1. Paleta de Colores
* **Fondo del sitio (`body`):** `#f8f9fa` (Gris claro tenue)
* **Fondo de tarjeta (`.card-curriculum`):** `#ffffff` (Blanco)
* **Color Primario (Encabezados y Acentos):** `#004680` (Azul corporativo)
* **Texto Principal:** `#212529` (Gris oscuro)
* **Texto Secundario / Subtítulos:** `#6c757d` (Gris medio)
* **Badges de Habilidades (`.badge-skill`):** Fondo `#e9ecef`, Texto `#004680`

### 2. Tipografía
* **Títulos (`<h1>`, `<h2>`, `<h3>`):** `'Roboto'`, `'Segoe UI'`, sans-serif (Peso: Bold/600)
* **Cuerpo de texto (`<p>`, `<span>`, `<li>`):** `'Open Sans'`, Arial, sans-serif

### 3. Estructura Visual de la Tarjeta de Currículum (`.card-curriculum`)
Cada sección individual representa el perfil profesional de un integrante y debe mantener el siguiente orden estructural:
1. **Encabezado:** Foto de perfil o avatar centrado + Nombre completo + Rol/Título profesional.
2. **Resumen Profesional:** Breve descripción de la experiencia, perfil e intereses en desarrollo de software.
3. **Proyectos Destacados:** Título y descripción de al menos un proyecto previo relevante.
4. **Habilidades Técnicas:** Contenedor de etiquetas (*badges*) con lenguajes, frameworks y herramientas clave.
5. **Contacto / Enlaces:** Botones o enlaces hacia GitHub, LinkedIn o correo electrónico.

### 4. Clases CSS Estándar
Todos los integrantes deben implementar las siguientes clases en su HTML para aplicar los estilos de manera unificada:
* `.card-curriculum`: Contenedor principal de la sección de perfil de cada integrante (incluye borde suave, sombra y border-radius).
* `.profile-header`: Estilo para el nombre y cargo del profesional.
* `.profile-summary`: Estilo para el párrafo con el resumen del perfil.
* `.project-box`: Sub-tarjeta contenedora del proyecto destacado.
* `.badge-skill`: Etiqueta pequeña para destacar tecnologías (ej. HTML, CSS, Git, JS).
* `.contact-links`: Estilos para los botones o hipervínculos sociales.