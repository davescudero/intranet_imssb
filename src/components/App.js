// Dr. Alejandro Svarch - Director IMSS Bienestar
// Portal personal con acceso a recursos y dashboards

const { useState, useEffect, useRef } = React;

const SvarchApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estado para la búsqueda
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState(null);
  
  // Estado para controlar animación del hero solo una vez
  const [heroAnimationPlayed, setHeroAnimationPlayed] = useState(false);

  // Función para cambiar tema
  const handleThemeToggle = () => {
    console.log('Botón de tema clickeado, estado actual:', isDarkMode);
    const newDarkMode = !isDarkMode;
    console.log('Nuevo estado:', newDarkMode);
    setIsDarkMode(newDarkMode);
    
    // Aplicar el tema inmediatamente
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      console.log('Aplicado modo oscuro');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      console.log('Aplicado modo claro');
    }
    
    // Reinicializar iconos después del cambio de tema
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 100);
  };

  // Función para toggle del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Inicialización del tema
  useEffect(() => {
    // Verificar si hay una preferencia guardada en localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    let initialDarkMode = false;

    if (savedDarkMode !== null) {
      // Usar la preferencia guardada
      initialDarkMode = savedDarkMode === 'true';
    } else {
      // Detectar preferencia del sistema para modo oscuro
      initialDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    setIsDarkMode(initialDarkMode);

    // Aplicar tema inicial
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Inicializar iconos de Lucide
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Marcar que la animación del hero ya se ejecutó
    setHeroAnimationPlayed(true);

    // Escuchar cambios en la preferencia del sistema (solo si no hay preferencia guardada)
    const handler = (e) => {
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler);
      return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handler);
    }
  }, []);

  // Reinicializar iconos cuando cambie el tema
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [isDarkMode]);

  // Manejo del scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.hamburger-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Cerrar resultados de búsqueda al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSearchResults && !event.target.closest('.search-container')) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearchResults]);

  // Configuración de recursos desde la configuración global
  const config = window.SvarchConfig || {};
  const resources = config.resources || {};

  // Componente de Header minimalista
  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo grande */}
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="resources/logos/Logo IMSS Bienestar 2025.png" 
                alt="IMSS Bienestar Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Controles del header */}
          <div className="flex items-center space-x-4">
            {/* Menú hamburguesa */}
            <div className="relative hamburger-container">
              <button
                onClick={toggleMenu}
                className={`hamburger-button ${isMenuOpen ? 'open' : ''} ${isDarkMode ? 'dark' : ''}`}
                aria-label="Toggle menu"
              >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </button>
              
              {/* Menú hamburguesa */}
              <div className={`hamburger-menu-large ${isMenuOpen ? 'open' : ''} ${isDarkMode ? 'dark' : ''}`}>
                <a href="#hero" className="menu-item-large" onClick={() => setIsMenuOpen(false)}>
                  <i data-lucide="home" className="w-6 h-6 mr-4 inline"></i>
                  Inicio
                </a>
                <a href="#presentaciones" className="menu-item-large" onClick={() => setIsMenuOpen(false)}>
                  <i data-lucide="presentation" className="w-6 h-6 mr-4 inline"></i>
                  Presentaciones
                </a>
                <a href="#tablas" className="menu-item-large" onClick={() => setIsMenuOpen(false)}>
                  <i data-lucide="grid-3x3" className="w-6 h-6 mr-4 inline"></i>
                  Tablas
                </a>
                <a href="#dashboard" className="menu-item-large" onClick={() => setIsMenuOpen(false)}>
                  <i data-lucide="bar-chart-3" className="w-6 h-6 mr-4 inline"></i>
                  Dashboards
                </a>
          </div>
            </div>

            {/* Botón de tema */}
            <button
              onClick={handleThemeToggle}
              className={`theme-toggle ${isDarkMode ? 'dark' : ''}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  // Función para obtener saludo según la hora
  const getGreeting = () => {
    return "Servicios Públicos de Salud";
  };

  // Función para buscar elementos
  const searchElements = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    // Buscar en dashboards
    window.SvarchConfig.resources.dashboards.forEach((dashboard, index) => {
      if (dashboard.title.toLowerCase().includes(lowerQuery) || 
          dashboard.description.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: 'dashboard',
          title: dashboard.title,
          description: dashboard.description,
          icon: dashboard.icon,
          url: dashboard.url,
          sectionId: 'dashboard',
          elementId: `dashboard-${index}`
        });
      }
    });

    // Buscar en presentaciones
    window.SvarchConfig.resources.presentations.forEach((presentation, index) => {
      if (presentation.title.toLowerCase().includes(lowerQuery) || 
          presentation.description.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: 'presentation',
          title: presentation.title,
          description: presentation.description,
          icon: presentation.icon,
          url: presentation.url,
          sectionId: 'presentaciones',
          elementId: `presentation-${index}`
        });
      }
    });

    // Buscar en tablas
    window.SvarchConfig.resources.tables.forEach((table, index) => {
      if (table.title.toLowerCase().includes(lowerQuery) || 
          table.description.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: 'table',
          title: table.title,
          description: table.description,
          icon: table.icon,
          url: table.url,
          sectionId: 'tablas',
          elementId: `table-${index}`
        });
      }
    });

    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  };

  // Función para manejar la búsqueda
  const handleSearch = (query) => {
    setSearchQuery(query);
    searchElements(query);
  };

  // Función para seleccionar un resultado de búsqueda
  const selectSearchResult = (result) => {
    setSearchQuery('');
    setShowSearchResults(false);
    
    // Scroll suave a la sección
    const section = document.getElementById(result.sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Destacar el elemento específico
      setTimeout(() => {
        const element = document.getElementById(result.elementId);
        if (element) {
          setHighlightedElement(result.elementId);
          
          // Remover el destacado después de 3 segundos
          setTimeout(() => {
            setHighlightedElement(null);
          }, 3000);
        }
      }, 500);
    }
  };

  // Función para cerrar resultados de búsqueda
  const closeSearchResults = () => {
    setShowSearchResults(false);
    setSearchQuery('');
  };

  // Componente de Hero editorial minimalista
  const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Imagen de fondo con filtros */}
      <div className={`hero-background-image ${isDarkMode ? 'dark-theme' : 'light-theme'}`}></div>
      
      {/* Overlay para legibilidad */}
      <div className="hero-image-overlay"></div>
      
      {/* Fondo con textura grainy institucional mejorada */}
      <div className="absolute inset-0 grainy-texture bg-gradient-to-br from-white/80 via-gray-50/80 to-amber-50/80 dark:from-gray-900/80 dark:via-stone-900/80 dark:to-amber-900/80"></div>
      
      {/* Overlay con gradientes sutiles */}
      <div className="absolute inset-0 overlay-gradient-1"></div>
      <div className="absolute inset-0 overlay-gradient-2"></div>
      
      {/* Efecto de partículas sutiles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-imss-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-imss-secondary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-imss-accent/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-imss-gray/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      
      {/* Contenido principal */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Saludo dinámico */}
          <div className={`mb-8 ${heroAnimationPlayed ? 'hero-greeting' : ''}`}>
            <h2 className="text-lg md:text-xl font-light text-imss-primary dark:text-imss-accent mb-3 tracking-wider uppercase font-sans">
              {getGreeting()}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-imss-primary dark:via-imss-accent to-transparent mx-auto"></div>
          </div>
          
          {/* Nombre y título principal */}
          <div className="mb-12">
            <h1 className={`text-6xl md:text-8xl font-bold text-imss-dark dark:text-white mb-6 font-serif leading-tight ${heroAnimationPlayed ? 'hero-title' : ''}`}>
              Servicios Públicos de Salud
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-imss-gray dark:via-gray-400 to-transparent mx-auto mb-6"></div>
            <p className={`text-2xl md:text-3xl text-imss-secondary dark:text-gray-300 mb-4 font-serif font-light ${heroAnimationPlayed ? 'hero-subtitle' : ''}`}>
              Dirección General de IMSS Bienestar
            </p>
          </div>
          
          {/* Descripción editorial */}
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg md:text-xl text-imss-gray dark:text-gray-400 leading-relaxed font-sans font-light ${heroAnimationPlayed ? 'hero-description' : ''}`}>
              Repositorio personal para acceso a presentaciones y dashboards ejecutivos
            </p>
          </div>
          
          {/* Barra de búsqueda integrada en el hero */}
          <div className="mt-16">
            <div className="relative max-w-xl mx-auto">
              <div className="relative search-container">
                {/* Campo de búsqueda minimalista integrado */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery && setShowSearchResults(true)}
                    placeholder="Buscar..."
                    className="w-full px-4 py-3 pl-12 pr-4 text-base bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 text-gray-700 dark:text-gray-300"
                  />
                  
                  {/* Icono de lupa minimalista */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </div>
                  
                  {/* Botón de limpiar sutil */}
                  {searchQuery && (
                    <button
                      onClick={closeSearchResults}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                </div>

                {/* Resultados de búsqueda minimalistas */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg z-50 max-h-72 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => selectSearchResult(result)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-colors duration-200 border-b border-gray-100/50 dark:border-gray-700/30 last:border-b-0"
                      >
                        <div className="flex items-center space-x-3">
                          {/* Icono minimalista */}
                          <div className="w-8 h-8 bg-gray-100/80 dark:bg-gray-700/80 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {result.icon === 'activity' && (
                                <>
                                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </>
                              )}
                              {result.icon === 'presentation' && (
                                <>
                                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                  <line x1="8" y1="21" x2="16" y2="21"></line>
                                  <line x1="12" y1="17" x2="12" y2="21"></line>
                                </>
                              )}
                              {result.icon === 'grid-3x3' && (
                                <>
                                  <rect x="3" y="3" width="7" height="7"></rect>
                                  <rect x="14" y="3" width="7" height="7"></rect>
                                  <rect x="14" y="14" width="7" height="7"></rect>
                                  <rect x="3" y="14" width="7" height="7"></rect>
                                </>
                              )}
                            </svg>
                          </div>
                          
                          {/* Contenido */}
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                              {result.title}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                              {result.description}
                            </p>
                          </div>
                          
                          {/* Flecha sutil */}
                          <div className="text-gray-400 dark:text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12,5 19,12 12,19"></polyline>
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Mensaje cuando no hay resultados */}
                {showSearchResults && searchResults.length === 0 && searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg z-50 p-4 text-center">
                    <div className="text-gray-500 dark:text-gray-400">
                      <svg className="w-8 h-8 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                      </svg>
                      <p className="text-sm font-medium">Sin resultados</p>
                      <p className="text-xs mt-1">Prueba con otras palabras</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );


  // Componente de Dashboard Principal
  const DashboardSection = () => (
    <section id="dashboard" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-imss-dark dark:text-white mb-4 font-serif">
            Dashboards
            </h2>
          <p className="text-xl text-imss-gray dark:text-gray-300 font-sans">
            Acceso directo a métricas y análisis clave del IMSS Bienestar
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.dashboards?.map((dashboard, index) => (
            <div 
              key={index}
              id={`dashboard-${index}`}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-imss-primary dark:hover:border-imss-accent ${
                highlightedElement === `dashboard-${index}` ? (isDarkMode ? 'search-glow-dark search-bounce' : 'search-glow search-bounce') : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-imss-light dark:bg-imss-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <i data-lucide={dashboard.icon} className="w-6 h-6 text-imss-primary dark:text-imss-accent"></i>
                    </div>
                <h3 className="text-xl font-semibold text-imss-dark dark:text-white font-serif">
                  {dashboard.title}
                    </h3>
                    </div>
              <p className="text-imss-gray dark:text-gray-300 mb-4 font-sans">
                {dashboard.description}
              </p>
              <a
                href={dashboard.url}
                target={dashboard.url.startsWith('http') ? '_blank' : '_self'}
                rel={dashboard.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center text-imss-primary dark:text-imss-accent hover:text-imss-secondary dark:hover:text-imss-light font-medium transition-colors"
              >
                Acceder
                <i data-lucide={dashboard.url.startsWith('http') ? 'external-link' : 'arrow-right'} className="w-4 h-4 ml-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Componente de Presentaciones
  const PresentacionesSection = () => (
    <section id="presentaciones" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-imss-dark dark:text-white mb-4 font-serif">
            Presentaciones y Reportes
            </h2>
          <p className="text-xl text-imss-gray dark:text-gray-300 font-sans">
            Acceso a presentaciones ejecutivas y reportes de gestión
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.presentations?.map((presentation, index) => (
            <div 
              key={index}
              id={`presentation-${index}`}
              className={`bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-imss-secondary dark:hover:border-imss-accent ${
                highlightedElement === `presentation-${index}` ? (isDarkMode ? 'search-glow-dark search-bounce' : 'search-glow search-bounce') : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-imss-light dark:bg-imss-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <i data-lucide={presentation.icon} className="w-6 h-6 text-imss-secondary dark:text-imss-accent"></i>
                </div>
                <h3 className="text-xl font-semibold text-imss-dark dark:text-white font-serif">
                  {presentation.title}
                  </h3>
                  </div>
              <p className="text-imss-gray dark:text-gray-300 mb-4 font-sans">
                {presentation.description}
              </p>
              <a
                href={presentation.url}
                target={presentation.url.startsWith('http') ? '_blank' : '_self'}
                rel={presentation.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center text-imss-secondary dark:text-imss-accent hover:text-imss-primary dark:hover:text-imss-light font-medium transition-colors"
              >
                Ver Presentación
                <i data-lucide={presentation.url.startsWith('http') ? 'external-link' : 'arrow-right'} className="w-4 h-4 ml-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Componente de Tablas
  const TablasSection = () => (
    <section id="tablas" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-imss-dark dark:text-white mb-4 font-serif">
            Tablas y Datos
            </h2>
          <p className="text-xl text-imss-gray dark:text-gray-300 font-sans">
            Acceso a tablas de datos, estadísticas y reportes numéricos
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.tables?.map((table, index) => (
            <div
              key={index}
              id={`table-${index}`}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-imss-accent dark:hover:border-imss-light ${
                highlightedElement === `table-${index}` ? (isDarkMode ? 'search-glow-dark search-bounce' : 'search-glow search-bounce') : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-imss-light dark:bg-imss-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <i data-lucide={table.icon} className="w-6 h-6 text-imss-accent dark:text-imss-light"></i>
                </div>
                <h3 className="text-xl font-semibold text-imss-dark dark:text-white font-serif">
                  {table.title}
                </h3>
              </div>
              <p className="text-imss-gray dark:text-gray-300 mb-4 font-sans">
                {table.description}
              </p>
              <a
                href={table.url}
                target={table.url.startsWith('http') ? '_blank' : '_self'}
                rel={table.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center text-imss-accent dark:text-imss-light hover:text-imss-primary dark:hover:text-imss-accent font-medium transition-colors"
              >
                Ver Tabla
                <i data-lucide={table.url.startsWith('http') ? 'external-link' : 'arrow-right'} className="w-4 h-4 ml-1"></i>
                    </a>
                  </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Componente de Footer
  const Footer = () => (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="resources/logos/Logo IMSS Bienestar 2025.png" 
                  alt="IMSS Bienestar Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dr. Alejandro Svarch</h3>
                <p className="text-sm text-gray-400">Director IMSS Bienestar</p>
              </div>
            </div>
            <p className="text-gray-400">
              Portal personal para acceso a recursos institucionales y herramientas de gestión.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#presentaciones" className="text-gray-400 hover:text-white transition-colors">Presentaciones</a></li>
              <li><a href="#tablas" className="text-gray-400 hover:text-white transition-colors">Tablas</a></li>
              <li><a href="#dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboards</a></li>
              <li><a href={resources.notion?.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Notion Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">IMSS Bienestar</h4>
            <p className="text-gray-400 mb-4">
              Instituto Mexicano del Seguro Social Bienestar
            </p>
            <a
              href="https://imssbienestar.gob.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Sitio Oficial
              <i data-lucide="external-link" className="w-4 h-4 ml-1"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Dr. Alejandro Svarch - IMSS Bienestar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );

  // Aplicar tema al body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Inicializar iconos de Lucide
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Header />
      <main>
        <Hero />
        <PresentacionesSection />
        <TablasSection />
        <DashboardSection />
      </main>
      <Footer />
    </div>
  );
};

// Renderizar la aplicación
ReactDOM.render(<SvarchApp />, document.getElementById('root'));
