# 💀 Tarjeta Día de Muertos - Calavera del Coder 🕯️

Una tarjeta web interactiva y animada para celebrar el Día de Muertos con temática de programación. Este proyecto combina la tradición mexicana con el mundo del desarrollo de software a través de una calavera literaria personalizada.

![Día de Muertos](https://img.shields.io/badge/Día%20de%20Muertos-Tradición%20Mexicana-orange?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Características

- ✨ **Diseño vibrante y festivo** con colores típicos del Día de Muertos
- 🎭 **Calavera literaria original** con temática de programación
- 🖼️ **Galería de imágenes interactiva** con botones para mostrar/ocultar contenido
- 💫 **Animaciones suaves y atractivas** en todos los elementos
- 📱 **Diseño 100% responsive** adaptado a todos los dispositivos
- 🎨 **Efectos hover modernos** y transiciones fluidas
- 🌺 **Decoraciones animadas** flotantes en el fondo

## 🎨 Paleta de Colores

- **Púrpura oscuro**: `#1a001a`, `#2d0a2d` - Fondo
- **Naranja brillante**: `#ff7f00` - Bordes y acentos
- **Amarillo vibrante**: `#ffe500` - Títulos y destacados
- **Rosa magenta**: `#ff007f` - Botones y sombras
- **Blanco**: `#f7f7f7` - Texto principal

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos, animaciones y diseño responsive
  - Gradientes
  - Animaciones con keyframes
  - Flexbox para layouts
  - Media queries para responsive design
  - Backdrop filters
  - Transformaciones y transiciones
- **JavaScript**: Interactividad de los botones
  - Manipulación del DOM
  - Event listeners
  - Creación dinámica de elementos

## 📁 Estructura del Proyecto

```
dia-de-muertos-coder/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación del proyecto
```

## 🛠️ Instalación y Uso

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/dia-de-muertos-coder.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd dia-de-muertos-coder
   ```

3. **Abre el archivo index.html en tu navegador**
   - Puedes hacer doble clic en el archivo
   - O usar Live Server en VS Code
   - O simplemente arrastrar el archivo al navegador

¡Eso es todo! No requiere instalación de dependencias.

## 💻 Funcionalidades

### Calavera Literaria
Una composición poética original que mezcla terminología de programación con la tradición de las calaveras literarias mexicanas.

### Botones Interactivos
- **🌺 Mostrar otra Calavera**: Revela una imagen adicional
- **✖️ Ocultar Imagen**: Oculta la imagen adicional

### Animaciones
- Resplandor pulsante en el título
- Estrellas giratorias en las esquinas
- Flores flotantes en el fondo
- Efectos hover en imágenes y botones
- Transiciones suaves en todos los elementos

## 📱 Responsive Design

El proyecto está optimizado para:
- 💻 Desktop (1024px+)
- 📱 Tablets (768px - 1023px)
- 📱 Móviles (< 768px)

## 🎯 Características Técnicas

- **Fuentes**: 
  - Creepster (títulos)
  - Gabarito (texto general)
- **Animaciones CSS**: keyframes personalizados
- **Efectos visuales**: box-shadow, text-shadow, backdrop-filter
- **Interactividad**: JavaScript vanilla (sin frameworks)

## 🌐 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Opera (últimas versiones)

## 📝 Código Destacado

### Animación del Título
```css
@keyframes titleGlow {
    from { 
        text-shadow: 3px 3px #ff007f, 5px 5px 15px rgba(255, 0, 127, 0.6); 
    }
    to { 
        text-shadow: 3px 3px #ff007f, 5px 5px 25px rgba(255, 0, 127, 0.9); 
    }
}
```

### Efecto Hover en Botones
```css
button:hover {
    background: linear-gradient(135deg, #ff7f00 0%, #cc6600 100%);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 127, 0, 0.7);
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
