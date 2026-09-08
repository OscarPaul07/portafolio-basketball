# 🏀 Portafolio de Baloncesto

Un portafolio web moderno y responsivo con temática de baloncesto, diseñado para mostrar fotografías deportivas y contenido visual con una paleta de colores inspirada en este deporte.

## 🎨 Características

- **Diseño Responsivo**: Totalmente adaptado para dispositivos móviles, tablets y desktop
- **Paleta de Colores de Baloncesto**: 
  - Naranja Vibrante (#FF6B35)
  - Azul Oscuro (#1F3A70)
  - Gris Charcoal (#2A2A2A)
  - Dorado Acentuado (#FFD60A)

- **Secciones**:
  - ✨ Hero Section con animaciones
  - 📖 Sección Sobre Mí con estadísticas
  - 🖼️ Galería de Fotos con filtros
  - 📧 Formulario de Contacto
  - 🔗 Enlaces a Redes Sociales

## 🚀 Funcionalidades

### Interactividad
- ✅ Filtrado de galería por categorías (Acción, Retratos, Eventos)
- ✅ Menú hamburguesa para dispositivos móviles
- ✅ Efecto parallax en la sección hero
- ✅ Animaciones al hacer scroll
- ✅ Validación de formulario de contacto
- ✅ Botón "Scroll to Top" flotante
- ✅ Transiciones suaves entre secciones

### Animaciones
- Pelota de baloncesto girando en navegación
- Elementos que aparecen al hacer scroll
- Contadores animados en estadísticas
- Efectos hover en botones y tarjetas
- Zoom en imágenes de galería

## 📁 Estructura del Proyecto

```
portafolio-basketball/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidades JavaScript
├── images/             # Carpeta para tus fotografías
│   ├── accion/
│   ├── retratos/
│   └── eventos/
└── README.md           # Este archivo
```

## 🖼️ Cómo Integrar tus Fotos

1. Crea una carpeta llamada `images` en la raíz del proyecto
2. Organiza tus fotos en subcarpetas: `accion/`, `retratos/`, `eventos/`
3. Reemplaza las URLs de placeholder en `index.html`:

```html
<!-- Cambiar esto: -->
<img src="https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Acción+1" alt="Acción en la cancha">

<!-- Por esto: -->
<img src="images/accion/tu-foto-1.jpg" alt="Acción en la cancha">
```

## 🎯 Cómo Usar

1. **Clonar el repositorio**:
```bash
git clone https://github.com/OscarPaul07/portafolio-basketball.git
cd portafolio-basketball
```

2. **Abrir el archivo**:
   - Abre `index.html` en tu navegador web favorito
   - O usa un servidor local (recomendado para mejor rendimiento)

3. **Personalizar contenido**:
   - Edita `index.html` para cambiar textos
   - Modifica `styles.css` para ajustar colores y estilos
   - Actualiza información de contacto en la sección de contacto

## 🔧 Personalización

### Cambiar Paleta de Colores
Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-orange: #FF6B35;      /* Color principal */
    --dark-blue: #1F3A70;           /* Color secundario */
    --charcoal: #2A2A2A;            /* Color oscuro */
    --accent-gold: #FFD60A;         /* Color acentuado */
}
```

### Editar Información Personal
En `index.html`, busca y reemplaza:
- `tu-email@ejemplo.com`
- `+34 123 456 789`
- `Tu Ciudad, País`

### Agregar Redes Sociales
Actualiza los enlaces en la sección footer:

```html
<a href="https://instagram.com/tu-usuario" class="social-icon">
    <i class="fab fa-instagram"></i>
</a>
```

## 📱 Responsividad

El sitio está optimizado para:
- 📱 Móviles (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px en adelante)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Gradientes
- **JavaScript (Vanilla)**: Sin dependencias externas
- **Font Awesome**: Iconos profesionales
- **Responsive Design**: Mobile-first

## 📋 Navegación

- **Inicio**: Hero section con CTA
- **Sobre Mí**: Información personal y estadísticas
- **Galería**: Fotos organizadas por categorías
- **Contacto**: Formulario e información de contacto

## 🎓 Aprendizajes Incluidos

Este proyecto incluye:
- Diseño responsivo con CSS Grid y Flexbox
- Animaciones CSS y JavaScript
- Intersection Observer API para lazy loading
- Event listeners y manipulación del DOM
- Validación de formularios
- Efectos visuales avanzados

## 📝 Licencia

Este proyecto es libre para usar y modificar.

## 👨‍💻 Autor

Desarrollado con ❤️ por OscarPaul07

## 🤝 Contribuciones

¿Tienes ideas para mejorar el portafolio? ¡Estoy abierto a sugerencias!

---

**¡Disfruta tu nuevo portafolio de baloncesto! 🏀**