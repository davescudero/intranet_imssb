# Arquitectura del Proyecto - Aura García

## 📁 Estructura de Directorios

```
webpage/
├── docs/                   # Documentación del proyecto
│   ├── README.md          # Documentación principal
│   ├── ARCHITECTURE.md    # Arquitectura y estructura
│   ├── BRAND_GUIDE.md     # Guía de marca y colores
│   └── CHANGELOG.md       # Historial de cambios
├── src/                   # Código fuente principal
│   ├── app.js            # Componente React principal
│   └── config.js         # Configuración global
├── css/                   # Estilos personalizados
│   └── main.css          # Estilos CSS principales con marca
├── resources/            # Recursos y assets
│   ├── AuragarciaLogoVector-2.png
│   └── Manual de Identidad Aura Garcia (2).pdf
└── index.html           # Página principal HTML
```

## 🏗️ Arquitectura Técnica

### Frontend Stack
- **React 18** - Biblioteca principal de UI
- **Tailwind CSS** - Framework de utilidades CSS
- **Babel Standalone** - Transpilación JSX en tiempo real
- **Lucide Icons** - Iconografía moderna

### Componentes Principales

#### 1. **MedicalApp** (src/app.js)
- Componente raíz de la aplicación
- Manejo de estado global (dark mode, scroll, animaciones)
- Integración de todas las secciones

#### 2. **Header Premium**
- Navegación fija con efecto backdrop
- Toggle de modo oscuro/claro
- Navegación responsive

#### 3. **Hero Minimalista**
- Diseño centrado en contenido
- Gradientes de marca Aura García
- Métricas destacadas
- CTAs principales

#### 4. **Servicios Dinámicos**
- Scroll horizontal en móvil
- Indicadores dinámicos que crecen
- Diseño sin emojis, minimalista

### 🎨 Sistema de Colores

```javascript
const brandColors = {
  primary: '#D97706',    // Ámbar dorado - Color principal
  secondary: '#F59E0B',  // Ámbar más claro
  accent: '#92400E',     // Ámbar oscuro
  light: '#FEF3C7',     // Ámbar muy claro
  text: {
    dark: '#1F2937',     // Gris oscuro
    light: '#F9FAFB'     // Blanco suave
  }
};
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Características Responsive
- Header que se adapta en mobile
- Servicios con scroll horizontal en mobile
- Indicadores dinámicos solo en mobile
- Typography escalable

## ⚡ Performance

### Optimizaciones Implementadas
- Preload de recursos críticos
- DNS Prefetch para CDNs
- Lazy loading de imágenes
- CSS optimizado para animaciones GPU
- React Production builds

### Métricas Objetivo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuración

### Variables de Entorno (config.js)
```javascript
const CONFIG = {
  app: {
    name: 'Aura García - Medical Data Science',
    version: '2.0.0',
    environment: 'production'
  },
  theme: {
    defaultMode: 'dark',
    brandColors: { /* colores de marca */ }
  }
};
```

## 🚀 Deployment

### Build Process
1. Verificar estructura de archivos
2. Optimizar CSS y JS
3. Comprimir imágenes
4. Validar responsive design
5. Testing cross-browser

### Hosting Requirements
- Static hosting (Netlify, Vercel, GitHub Pages)
- HTTPS habilitado
- Compresión gzip
- Headers de cache apropiados

## 🔒 Seguridad

### Best Practices Implementadas
- Content Security Policy headers
- No inline scripts críticos
- Validación de inputs
- Error boundaries en React

## 📊 Analytics y Tracking

### Métricas Clave
- Page views y sessions
- Scroll depth
- Click tracking en CTAs
- Performance metrics
- Mobile vs Desktop usage

## 🧪 Testing

### Areas de Testing
- Responsive design en múltiples dispositivos
- Cross-browser compatibility
- Performance en conexiones lentas
- Accessibility (WCAG 2.1)
- Funcionalidad JavaScript
