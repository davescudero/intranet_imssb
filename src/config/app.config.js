// Configuración global de la aplicación Dr. Alejandro Svarch
window.SvarchConfig = {
  // Configuración de performance
  performance: {
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isLowPerformance: false, // Se detectará dinámicamente
    enableAnalytics: false, // Cambiar a true en producción
    lazyLoadOffset: 100
  },
  
  // Configuración de UI
  ui: {
    animationDurations: {
      fast: 200,
      normal: 300,
      slow: 500
    },
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280
    }
  },
  
  // Colores institucionales IMSS Bienestar - Paleta Oficial
  brandColors: {
    primary: '#9b2247',    // Burgundy principal
    secondary: '#1e5b4f',  // Verde oscuro
    accent: '#a57f2c',     // Dorado
    light: '#e6d194',      // Beige claro
    dark: '#161a1d',       // Negro neutro
    gray: '#98989A',       // Gris medio
    neutral: '#F8FAFC',    // Fondo neutro
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626'
  },
  
  // Configuración SEO
  seo: {
    siteName: 'Dr. Alejandro Svarch',
    siteUrl: 'https://svarch.imssbienestar.mx',
    author: 'Dr. Alejandro Svarch',
    language: 'es',
    defaultTitle: 'Dr. Alejandro Svarch - Director IMSS Bienestar',
    defaultDescription: 'Portal personal del Dr. Alejandro Svarch, Director del IMSS Bienestar. Acceso directo a dashboards, presentaciones y recursos institucionales.'
  },
  
  // Recursos y enlaces del Dr. Svarch
  resources: {
    notion: {
      url: 'https://www.notion.so/223ccd464a27801ca52fe898e4369041?v=223ccd464a2780749efe000cb6f44eb6&source=copy_link',
      title: 'Dashboard Principal',
      description: 'Acceso directo al dashboard principal con métricas y análisis'
    },
    dashboards: [
      {
        title: 'Dashboard de Oncología',
        url: 'https://argontr.shinyapps.io/oncoDash/',
        description: 'Dashboard de abasto y gestión de medicamentos oncológicos',
        icon: 'activity'
      },
      {
        title: 'Dashboard de Indicadores',
        url: '#',
        description: 'Métricas clave del IMSS Bienestar',
        icon: 'bar-chart-3'
      },
      {
        title: 'Análisis de Presupuesto',
        url: '#',
        description: 'Seguimiento presupuestal y financiero',
        icon: 'dollar-sign'
      },
      {
        title: 'Indicadores de Salud',
        url: '#',
        description: 'Métricas de salud pública y atención',
        icon: 'heart'
      }
    ],
    presentations: [
      {
        title: 'Presentación Ejecutiva Q1',
        url: '#',
        description: 'Reporte trimestral de resultados',
        icon: 'presentation'
      },
      {
        title: 'Análisis de Cobertura',
        url: '#',
        description: 'Estudio de cobertura territorial',
        icon: 'map'
      }
    ],
    tables: [
      {
        title: 'Tabla de Indicadores',
        url: '#',
        description: 'Datos numéricos de indicadores clave',
        icon: 'grid-3x3'
      },
      {
        title: 'Estadísticas de Cobertura',
        url: '#',
        description: 'Datos de cobertura territorial y poblacional',
        icon: 'bar-chart-2'
      },
      {
        title: 'Métricas Financieras',
        url: '#',
        description: 'Tablas de presupuesto y gasto',
        icon: 'calculator'
      }
    ]
  }
};

// Detección automática de performance
(function() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
  const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
  
  window.SvarchConfig.performance.isLowPerformance = slowConnection || lowMemory || false;
})();

// Utilidades globales
window.SvarchUtils = {
  // Función de debounce optimizada
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Función de throttle optimizada
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Lazy loading de imágenes
  lazyLoadImage: (src, placeholder = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23f3f4f6"/></svg>') => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = reject;
      img.src = src;
    });
  },
  
  // Formateo de números para visualizaciones
  formatNumber: (num, decimals = 0) => {
    return new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  }
};

console.log('🏥 Dr. Alejandro Svarch - Director IMSS Bienestar - Configuración cargada correctamente');
