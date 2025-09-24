# Recursos AuraGarcia - Integración Completa

## 📂 Inventario de Recursos

### 🔤 **Fuentes Tipográficas Oficiales**

#### Implementadas en CSS:
- ✅ **Nortica Typeface Medium** (`NorticaTypeface-Medium.otf`)
  - Uso: Títulos principales, headers, logo
  - Variable CSS: `--font-heading`
  - Peso: 500 (Medium)

- ✅ **Girot Regular** (`Girot-Regular.otf`)
  - Uso: Texto base, párrafos, navegación
  - Variable CSS: `--font-primary`
  - Peso: 400 (Regular)

- ✅ **Girot Bold** (`Girot-Bold.otf`)
  - Uso: Énfasis, CTAs, elementos destacados
  - Variable CSS: `--font-primary`
  - Peso: 700 (Bold)

### 🎨 **Logotipos Disponibles**

#### Formatos PNG:
- `Auragarcia-black.png` - Logo negro para fondos claros
- `Auragarcia-white.png` - Logo blanco para fondos oscuros
- `AuragarciaLogoVector-2.png` - Logo principal (usado en web)
- `Logotipo-Extendido.png` - Versión extendida
- `Logotipo-fondocolor.png` - Logo con fondo de color
- `LogotipoExtendido-fondocolor.png` - Versión extendida con fondo

#### Formatos Vectoriales:
- `AuragarciaLogoVector.ai` - Adobe Illustrator (editable)
- `AuragarciaLogoVector.pdf` - PDF vectorial
- `AuragarciaRejilla.pdf` - Construcción en rejilla

### 📋 **Manual de Identidad Visual**

#### Archivo Principal:
- `Manual de Identidad Aura Garcia (2).pdf` - Manual completo oficial

#### Screenshots del Manual:
- `manual_identidad1.png` - Página 1 del manual
- `manual_identidad2.png` - Página 2 del manual  
- `manual_identidad3.png` - Página 3 del manual
- `manual_identidad4.png` - Página 4 del manual
- `manual_identidad5.png` - Página 5 del manual

#### Recursos Adicionales:
- `mapa_aura.png` - Mapa conceptual de la marca AuraGarcia

## 🔧 **Integración Técnica Implementada**

### CSS Font Declarations:
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

### Variables CSS:
```css
:root {
  --auragarcia-primary: #6366F1;    /* Azul principal AuraGarcia */
  --auragarcia-secondary: #8B5CF6;  /* Violeta secundario */
  --auragarcia-accent: #3B82F6;     /* Azul accent */
  --auragarcia-light: #E0E7FF;      /* Azul muy claro */
  --auragarcia-dark: #312E81;       /* Azul oscuro */
}
```

### React Implementation:
```javascript
// Header con fuente Nortica
<div style={{ fontFamily: 'Nortica, Girot, sans-serif' }}>
  AURAGARCIA
</div>

// Títulos principales con fuente Nortica
<h1 style={{ fontFamily: 'Nortica, Girot, sans-serif', fontWeight: 500 }}>
  Transformamos Datos Médicos
</h1>

// Body con fuente Girot
<div style={{ fontFamily: 'Girot, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
```

## 🎯 **Estado de Implementación**

### ✅ **Completado:**
- [x] Fuentes oficiales integradas en CSS
- [x] Variables CSS para tipografías
- [x] Aplicación en componentes React principales
- [x] Fallbacks para máxima compatibilidad
- [x] Documentación actualizada
- [x] Estructura de archivos organizada

### 📋 **Uso de Recursos por Sección:**

#### Header:
- **Fuente**: Nortica Typeface Medium
- **Logo**: `AuragarciaLogoVector-2.png` (principal)
- **Fallback**: Girot + system fonts

#### Hero Section:
- **Títulos**: Nortica Typeface Medium (peso 500)
- **Texto base**: Girot Regular
- **Emphasis**: Girot Bold

#### Servicios:
- **Headers**: Nortica Typeface Medium
- **Descripciones**: Girot Regular
- **Números**: Girot Bold

## 🔄 **Optimizaciones Aplicadas**

### Performance:
- `font-display: swap` para evitar FOIT (Flash of Invisible Text)
- Preload de fuentes críticas
- Fallbacks inmediatos a system fonts
- Compresión de formatos OTF

### Compatibilidad:
- Stack de fuentes completo con fallbacks
- Soporte cross-browser para @font-face
- Detección de carga de fuentes

## 📊 **Métricas de Recursos**

### Tamaños de Archivos:
- `NorticaTypeface-Medium.otf`: ~33KB
- `Girot-Regular.otf`: ~39KB
- `Girot-Bold.otf`: ~42KB
- **Total fonts**: ~114KB

### Logos:
- `AuragarciaLogoVector-2.png`: Principal para web
- Múltiples formatos disponibles según necesidad
- Versiones optimizadas para diferentes contextos

## 🎨 **Paleta de Colores Oficial**

Basada en manual de identidad visual de AuraGarcia:

```css
/* Colores principales del manual de identidad */
--auragarcia-primary: #6366F1;    /* Azul principal AuraGarcia */
--auragarcia-secondary: #8B5CF6;  /* Violeta secundario */
--auragarcia-accent: #3B82F6;     /* Azul accent */
--auragarcia-light: #E0E7FF;      /* Azul muy claro */
--auragarcia-dark: #312E81;       /* Azul oscuro */

/* Colores complementarios */
--auragarcia-neutral: #F8FAFC;    /* Fondo neutro */
--auragarcia-text: #1E293B;       /* Texto principal */
--auragarcia-muted: #64748B;      /* Texto secundario */
```

**Fuente**: Manual de Identidad AuraGarcia (página de colores corporativos)

---

**Estado**: ✅ **Integración completa de recursos AuraGarcia**  
**Última actualización**: 21 de agosto, 2025  
**Fuentes**: Nortica + Girot implementadas  
**Logos**: Múltiples formatos disponibles  
**Manual**: Screenshots integrados en documentación  
**Identidad**: AuraGarcia Consulting - Empresa especializada en datos médicos
