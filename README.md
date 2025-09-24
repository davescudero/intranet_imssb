# Dr. Alejandro Svarch - Portal Personal IMSS Bienestar

> Portal personal del Dr. Alejandro Svarch, Director del IMSS Bienestar, para acceso directo a dashboards, presentaciones, análisis de datos y recursos institucionales.

![IMSS Bienestar Logo](resources/logos/Logo%20IMSS%20Bienestar%202025.png)

## Descripción del Proyecto

Portal web personal para el **Dr. Alejandro Svarch**, Director General del Instituto Mexicano del Seguro Social Bienestar. La plataforma proporciona acceso directo y organizado a todos los recursos institucionales, dashboards, presentaciones y documentos de gestión.

### Características Principales

- **Diseño institucional** con colores oficiales del IMSS Bienestar
- **Acceso directo** a dashboard de oncología y recursos de Notion
- **Organización por categorías** (Presentaciones, Tablas, Dashboards)
- **Responsive design** optimizado para todos los dispositivos
- **Tema claro/oscuro** con persistencia en localStorage
- **Performance optimizada** con React 18 y Tailwind CSS
- **SEO completo** con meta tags y structured data
- **Navegación hamburguesa** con menú transparente

## Estructura del Proyecto

```
webpage_svarch/
├── src/                   # Código fuente
│   ├── components/        # Componentes React
│   │   └── App.js        # Componente principal
│   ├── config/           # Configuración
│   │   └── app.config.js # Configuración global
│   └── styles/           # Estilos
│       └── main.css      # CSS principal con tema IMSS
├── resources/            # Assets y recursos
│   ├── fonts/           # Fuentes institucionales
│   │   └── Mataö Elegance Font/
│   │       └── MATAO Free Demo .otf
│   ├── logos/           # Logotipos IMSS
│   │   └── Logo IMSS Bienestar 2025.png
│   └── hero/            # Imágenes de fondo
│       ├── light_theme.png
│       └── dark_theme.png
├── docs/                 # Documentación
│   ├── README.md        # Documentación principal
│   ├── ARCHITECTURE.md  # Arquitectura técnica
│   ├── BRAND_GUIDE.md   # Guía de marca
│   └── CHANGELOG.md     # Historial de cambios
├── deploy.md            # Guía de despliegue
├── .gitignore          # Archivos a ignorar en Git
└── index.html          # Página principal HTML
```

## Inicio Rápido

### Desarrollo Local

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en un navegador moderno
3. **Listo!** No requiere build process ni dependencias

### Hosting en Producción

```bash
# Subir a GitHub Pages (recomendado)
# Los archivos están listos para deployment directo
```

## Sistema de Diseño

### Paleta de Colores IMSS Bienestar

```css
/* Colores Institucionales IMSS */
--imss-primary: #9b2247;    /* Burgundy principal */
--imss-secondary: #1e5b4f;  /* Verde oscuro */
--imss-accent: #a57f2c;     /* Dorado */
--imss-light: #e6d194;      /* Beige claro */
--imss-dark: #161a1d;       /* Negro neutro */
--imss-gray: #98989A;       /* Gris medio */
```

### Typography
- **Fuentes Principales**: SF Pro Display (sans-serif), GT Sectra (serif)
- **Fuente Elegante**: Matao Elegance (hero section)
- **Fallbacks**: Inter, System fonts stack para máxima compatibilidad
- **Pesos**: Light (300), Regular (400), Medium (500), Bold (700)

## Secciones Implementadas

### Hero Section
- Saludo dinámico según la hora del día
- Presentación del Dr. Alejandro Svarch
- Imágenes de fondo con filtros por tema
- Efectos de partículas sutiles

### Presentaciones
- Enlaces a presentaciones ejecutivas
- Reportes trimestrales
- Análisis de cobertura territorial

### Tablas
- Tabla de indicadores
- Estadísticas de cobertura
- Métricas financieras

### Dashboards
- Dashboard de Oncología (Shiny Apps)
- Dashboard de indicadores
- Análisis de presupuesto
- Indicadores de salud

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.x | UI Library principal |
| **Tailwind CSS** | 2.2.19 | Framework de utilidades CSS |
| **Babel Standalone** | Latest | Transpilación JSX en tiempo real |
| **Lucide Icons** | Latest | Iconografía moderna |
| **Google Fonts** | Latest | Fuentes web (Inter, GT Sectra) |

## Recursos Integrados

### Dashboard Principal
- **Notion**: [Dashboard Principal](https://www.notion.so/223ccd464a27801ca52fe898e4369041?v=223ccd464a2780749efe000cb6f44eb6&source=copy_link)

### Dashboards Disponibles
- **Dashboard de Oncología**: [Shiny Apps](https://argontr.shinyapps.io/oncoDash/)
- Dashboard de Indicadores
- Análisis de Presupuesto
- Indicadores de Salud

### Presentaciones
- Presentación Ejecutiva Q1
- Análisis de Cobertura

### Tablas
- Tabla de Indicadores
- Estadísticas de Cobertura
- Métricas Financieras

## SEO & Meta Tags

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Alejandro Svarch",
  "jobTitle": "Director General del IMSS Bienestar",
  "worksFor": {
    "@type": "Organization",
    "name": "IMSS Bienestar"
  }
}
```

### Open Graph
- Complete Facebook/LinkedIn sharing optimization
- Twitter Cards implementation
- Canonical URLs y meta descriptions

## Responsive Features

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Optimizations
- Navigation hamburguesa responsive
- Cards adaptables
- Touch-optimized interactions
- Menú transparente con efectos glassmorphism

## Performance

### Optimizaciones Implementadas
- Preload de recursos críticos
- DNS Prefetch para CDNs
- CSS optimizado para GPU animations
- JavaScript modular y eficiente
- Lazy loading de iconos
- Cache headers para recursos estáticos

## Testing

### Cross-browser Support
- Chrome/Edge (Chromium) 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Despliegue

### GitHub Pages (Recomendado)
1. Crear repositorio público en GitHub
2. Subir código del proyecto
3. Activar GitHub Pages en Settings
4. Sitio disponible en `https://tu-usuario.github.io/svarch-portal`

### Comandos Git Útiles
```bash
git init
git add .
git commit -m "Initial commit - Portal Dr. Alejandro Svarch"
git remote add origin https://github.com/tu-usuario/svarch-portal.git
git push -u origin main
```

## Documentación Adicional

- **[Arquitectura Técnica](docs/ARCHITECTURE.md)** - Estructura y decisiones técnicas
- **[Guía de Marca](docs/BRAND_GUIDE.md)** - Colores, tipografía y uso de brand
- **[Changelog](docs/CHANGELOG.md)** - Historial completo de cambios
- **[Guía de Despliegue](deploy.md)** - Instrucciones de deployment

## Contribución

### Para Mejoras
1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Estándares de Código
- ES6+ JavaScript con JSX
- CSS siguiendo metodología BEM cuando aplique
- Comentarios descriptivos en funciones complejas
- Mobile-first approach siempre

## Licencia

Proyecto institucional del **IMSS Bienestar**. Todos los derechos reservados.

---

**Desarrollado para optimizar el acceso a recursos institucionales del IMSS Bienestar**

[![IMSS Bienestar](https://img.shields.io/badge/IMSS-Bienestar-9b2247)](https://imssbienestar.mx)
[![React](https://img.shields.io/badge/React-18-61DAFB)](https://reactjs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-2.2-38B2AC)](https://tailwindcss.com/)
[![Mobile Optimized](https://img.shields.io/badge/Mobile-Optimized-green)](https://developers.google.com/web/fundamentals/design-and-ux/responsive)