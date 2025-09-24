# Guía de Marca AuraGarcia

## 🎨 Paleta de Colores Oficial

### Colores Principales (Manual de Identidad AuraGarcia)

```css
/* Color Primario - Azul Principal AuraGarcia */
--auragarcia-primary: #6366F1;
--auragarcia-primary-hover: #4F46E5;

/* Color Secundario - Violeta */
--auragarcia-secondary: #8B5CF6;
--auragarcia-secondary-hover: #7C3AED;

/* Color de Acento - Azul Accent */
--auragarcia-accent: #3B82F6;
--auragarcia-accent-hover: #2563EB;

/* Colores Complementarios */
--auragarcia-light: #E0E7FF;      /* Azul muy claro */
--auragarcia-dark: #312E81;       /* Azul oscuro */
--auragarcia-neutral: #F8FAFC;    /* Fondo neutro */

/* Colores de Texto */
--auragarcia-text: #1E293B;       /* Texto principal */
--auragarcia-text-muted: #64748B; /* Texto secundario */
```

## 🔤 Tipografías Oficiales

### Fuentes Principales

**Nortica Typeface Medium** - Para títulos y headers
- Archivo: `NorticaTypeface-Medium.otf`
- Uso: Headlines, títulos principales, logo
- Peso: 500 (Medium)

**Girot Regular** - Para texto base
- Archivo: `Girot-Regular.otf`
- Uso: Párrafos, texto corrido, navegación
- Peso: 400 (Regular)

**Girot Bold** - Para énfasis y destacados
- Archivo: `Girot-Bold.otf`
- Uso: Subtítulos, CTAs, elementos destacados
- Peso: 700 (Bold)

### Implementación CSS

```css
@font-face {
  font-family: 'Nortica';
  src: url('../resources/fonts/NorticaTypeface-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Girot';
  src: url('../resources/fonts/Girot-Regular.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Girot';
  src: url('../resources/fonts/Girot-Bold.otf') format('opentype');
  font-weight: 700;
  font-display: swap;
}
```

### Variables CSS

```css
:root {
  --font-primary: 'Girot', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-heading: 'Nortica', 'Girot', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## 🏢 Identidad Corporativa

### Naming Conventions
- **Nombre oficial**: AuraGarcia
- **Nombre extendido**: AuraGarcia Consulting
- **Tipo**: Consultoría especializada
- **Sector**: Ciencia de Datos Médicos y Transformación Digital Sanitaria

## 🖼️ Recursos de Marca

### Logos Disponibles

```
resources/logos/
├── Auragarcia-black.png         # Logo negro
├── Auragarcia-white.png         # Logo blanco
├── AuragarciaLogoVector-2.png   # Logo principal PNG
├── AuragarciaLogoVector.ai      # Archivo Adobe Illustrator
├── AuragarciaLogoVector.pdf     # Logo vectorial PDF
├── Logotipo-Extendido.png       # Versión extendida
├── Logotipo-fondocolor.png      # Logo con fondo de color
└── LogotipoExtendido-fondocolor.png # Versión extendida con fondo
```

### Manual de Identidad

```
resources/manual_identidad/
├── Manual de Identidad Aura Garcia (2).pdf  # Manual completo
├── manual_identidad1.png                    # Screenshot página 1
├── manual_identidad2.png                    # Screenshot página 2
├── manual_identidad3.png                    # Screenshot página 3
├── manual_identidad4.png                    # Screenshot página 4
├── manual_identidad5.png                    # Screenshot página 5
└── mapa_aura.png                            # Mapa conceptual
```

## 🎯 Uso de Colores por Sección

### Header
- **Fondo transparente** → `bg-gray-900/95` (dark) | `bg-white/95` (light)
- **Logo**: `text-amber-400` (dark) | `text-amber-700` (light)
- **Navigation**: `text-gray-300` → `text-amber-400` (dark)

### Hero
- **Fondo**: Gradiente con colores de marca
- **Títulos**: `text-amber-400/700` para highlights
- **CTAs**: `bg-amber-500/700` con hover effects

### Servicios
- **Fondo**: `bg-gray-900` (dark) | `bg-amber-50` (light)
- **Acentos**: `text-amber-400/700` para números y destacados
- **Indicadores**: Barras dinámicas en ámbar

## 🌓 Modo Oscuro vs Claro

### Modo Oscuro
```css
background: linear-gradient(to bottom right, #111827, #1F2937, rgba(99, 102, 241, 0.1));
text-primary: #8B5CF6;
text-secondary: #6366F1;
text-body: #E5E7EB;
```

### Modo Claro
```css
background: linear-gradient(to bottom right, #E0E7FF, #FFFFFF, rgba(139, 92, 246, 0.5));
text-primary: #312E81;
text-secondary: #6366F1;
text-body: #374151;
```

## ⚡ Estados Interactivos

### Botones
```css
/* Primario */
.btn-primary {
  background: #6366F1;
  hover: #4F46E5;
  transform: scale(1.05);
  shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

/* Secundario */
.btn-secondary {
  border: 2px solid #6366F1;
  color: #6366F1;
  hover: background #6366F1, color white;
}
```

### Links de Navegación
```css
.nav-link {
  color: #9CA3AF;
  hover: #8B5CF6;
  transition: all 300ms;
}
```

## 🎨 Gradientes de Marca

### Hero Background
```css
background: linear-gradient(
  135deg, 
  #E0E7FF 0%, 
  #FFFFFF 50%, 
  rgba(139, 92, 246, 0.1) 100%
);
```

### Overlay Elements
```css
background-image: 
  radial-gradient(circle at 25% 25%, #6366F140 0%, transparent 50%),
  radial-gradient(circle at 75% 75%, #8B5CF640 0%, transparent 50%);
```

## 📏 Espaciado y Layout

### Containers
- **Max Width**: 7xl (1280px)
- **Padding X**: 4-8 (1rem - 2rem)
- **Padding Y**: 16-32 (4rem - 8rem)

### Elementos
- **Gap entre elementos**: 6-12 (1.5rem - 3rem)
- **Border radius**: lg-2xl (0.5rem - 1rem)
- **Line height**: relaxed-tight según contexto

## 🔧 Variables CSS Personalizadas

```css
:root {
  /* Colores Aura García */
  --aura-primary: #D97706;
  --aura-secondary: #F59E0B;
  --aura-accent: #92400E;
  --aura-light: #FEF3C7;
  
  /* Spacing */
  --aura-section-padding: 6rem 0;
  --aura-container-padding: 0 2rem;
  
  /* Transitions */
  --aura-transition: all 300ms ease;
  --aura-transition-slow: all 500ms ease;
  
  /* Shadows */
  --aura-shadow-sm: 0 4px 6px rgba(217, 119, 6, 0.1);
  --aura-shadow-lg: 0 10px 25px rgba(217, 119, 6, 0.15);
}
```
