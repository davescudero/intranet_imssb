# Dr. Alejandro Svarch - Estructura del Proyecto

## Estructura de Archivos (Actualizada)

```
webpage_svarch/
├── index.html                 # Punto de entrada principal
├── README.md                  # Documentación del proyecto
├── PROJECT_STRUCTURE.md       # Este archivo
├── deploy.md                  # Guía de despliegue
├── .gitignore                # Archivos a ignorar en Git
│
├── src/                       # Código fuente principal
│   ├── components/            # Componentes React
│   │   └── App.js            # Componente principal de la aplicación
│   ├── config/               # Configuraciones
│   │   └── app.config.js     # Configuración global de la aplicación
│   └── styles/               # Estilos CSS
│       └── main.css          # Estilos principales y fuentes
│
├── resources/                # Recursos estáticos
│   ├── fonts/               # Fuentes institucionales
│   │   └── Mataö Elegance Font/
│   │       ├── MATAO Free Demo .otf
│   │       └── Agreement.txt
│   ├── logos/               # Logos oficiales IMSS
│   │   └── Logo IMSS Bienestar 2025.png
│   └── hero/                # Imágenes de fondo del hero
│       ├── light_theme.png
│       └── dark_theme.png
│
└── docs/                    # Documentación del proyecto
    ├── README.md            # Documentación principal
    ├── ARCHITECTURE.md      # Arquitectura técnica
    ├── BRAND_GUIDE.md       # Guía de marca
    ├── CHANGELOG.md         # Historial de cambios
    └── RESOURCES.md         # Recursos adicionales
```

## Mejoras Implementadas

### Organización por Funcionalidad
- **`src/components/`**: Componentes React organizados
- **`src/config/`**: Configuraciones centralizadas
- **`src/styles/`**: Estilos separados por propósito
- **`resources/`**: Recursos estáticos bien organizados
- **`docs/`**: Documentación completa

### Separación de Responsabilidades
- **Componentes**: Lógica de UI aislada
- **Configuración**: Settings globales centralizados
- **Estilos**: CSS modular y mantenible
- **Recursos**: Assets organizados por tipo

### Mejores Prácticas Aplicadas
- Estructura escalable
- Separación de concerns
- Rutas relativas consistentes
- Nomenclatura clara y descriptiva
- Configuración centralizada

## Características Implementadas

### Hero Section Avanzado
- **Saludo dinámico**: Buenos días/tardes/noches según la hora
- **Imágenes de fondo**: Con filtros adaptativos por tema
- **Efectos de partículas**: Sutiles y elegantes
- **Tipografía moderna**: SF Pro Display, GT Sectra, Matao Elegance
- **Gradientes institucionales**: Colores oficiales del IMSS

### Navegación Mejorada
- **Menú hamburguesa**: Con animaciones suaves
- **Efectos glassmorphism**: Transparencia y blur
- **Secciones organizadas**: Inicio, Presentaciones, Tablas, Dashboards
- **Enlaces externos**: Manejo automático de target="_blank"

### Sistema de Temas
- **Tema claro/oscuro**: Con persistencia en localStorage
- **Colores institucionales**: Paleta oficial del IMSS Bienestar
- **Transiciones suaves**: Entre temas
- **Iconos adaptativos**: SVG directo para mejor rendimiento

### Recursos Integrados
- **Dashboard de Oncología**: Enlace directo a Shiny Apps
- **Notion Dashboard**: Acceso al dashboard principal
- **Enlaces externos**: Con iconos y seguridad apropiados

## Configuración Técnica

### Dependencias Externas
- **React 18**: Para componentes interactivos
- **Tailwind CSS**: Para estilos utility-first
- **Babel**: Para transpilación JSX
- **Lucide Icons**: Para iconografía
- **Google Fonts**: Inter y GT Sectra

### Configuración de Performance
- **Preload crítico**: CSS y JS principales
- **DNS Prefetch**: Para CDNs externos
- **Lazy loading**: Para iconos
- **Detección de performance**: Adaptación automática
- **Cache headers**: Para recursos estáticos

### Optimizaciones CSS
- **Variables CSS**: Colores institucionales centralizados
- **Animaciones GPU**: Transform y opacity
- **Efectos grainy**: Texturas sutiles con colores institucionales
- **Gradientes dinámicos**: Adaptativos por tema
- **Responsive design**: Mobile-first approach

## Secciones del Portal

### 1. Hero Section
- Saludo dinámico por hora
- Presentación del Dr. Alejandro Svarch
- Descripción del portal
- Imágenes de fondo con filtros

### 2. Presentaciones
- Enlaces a presentaciones ejecutivas
- Reportes trimestrales
- Análisis de cobertura

### 3. Tablas
- Datos numéricos de indicadores
- Estadísticas de cobertura
- Métricas financieras

### 4. Dashboards
- Dashboard de Oncología (Shiny Apps)
- Dashboard de indicadores
- Análisis de presupuesto
- Indicadores de salud

## Configuración de Despliegue

### GitHub Pages
- **Configuración**: Repositorio público
- **Deploy automático**: En cada push
- **HTTPS**: Automático
- **CDN**: Global de GitHub

### Archivos de Configuración
- **`.gitignore`**: Archivos a ignorar
- **`deploy.md`**: Guía de despliegue
- **Sin build process**: Deploy directo

## Estado Actual del Proyecto

### Completado
- Hero section con saludo dinámico
- Navegación hamburguesa transparente
- Sistema de temas claro/oscuro
- Secciones organizadas (Presentaciones, Tablas, Dashboards)
- Integración de dashboard de oncología
- Colores institucionales del IMSS
- Tipografía moderna (SF Pro Display, GT Sectra, Matao)
- Efectos visuales avanzados (grainy, glassmorphism)
- Responsive design completo
- SEO y meta tags
- Configuración para GitHub Pages

### Próximos Pasos
- Despliegue en GitHub Pages
- Configuración de dominio personalizado (opcional)
- Pruebas de rendimiento
- Optimizaciones adicionales según feedback

## Notas Técnicas

### Fuentes
- **SF Pro Display**: Fuente principal sans-serif
- **GT Sectra**: Fuente serif para títulos
- **Matao Elegance**: Fuente elegante para hero
- **Inter**: Fallback de Google Fonts

### Colores Institucionales
- **Primary**: #9b2247 (Burgundy)
- **Secondary**: #1e5b4f (Verde oscuro)
- **Accent**: #a57f2c (Dorado)
- **Light**: #e6d194 (Beige claro)
- **Dark**: #161a1d (Negro neutro)
- **Gray**: #98989A (Gris medio)

### Performance
- **Sin build process**: Deploy directo
- **CDN**: Google Fonts y Lucide Icons
- **Optimizaciones**: Preload, DNS prefetch, cache headers
- **Responsive**: Mobile-first design

---

**Dr. Alejandro Svarch - Director General IMSS Bienestar**  
*Portal personal para acceso a recursos institucionales*