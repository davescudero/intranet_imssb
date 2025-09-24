# 🚀 Guía de Despliegue - Portal Dr. Alejandro Svarch

## GitHub Pages (Método Actual)

### Pasos para Desplegar en GitHub Pages

1. **Crea un repositorio en GitHub**:
   - Ve a [github.com](https://github.com)
   - Crea un nuevo repositorio (ej: `svarch-portal`)
   - Hazlo público para GitHub Pages gratuito

2. **Sube tu código**:
   - Usa GitHub Desktop o Git desde terminal
   - Sube todos los archivos del proyecto

3. **Activa GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Click en "Settings" (pestaña superior)
   - Scroll hacia abajo hasta "Pages"
   - En "Source" selecciona "Deploy from a branch"
   - Elige la rama `main` o `master`
   - Click "Save"

4. **Espera el despliegue**:
   - GitHub procesará tu sitio (2-10 minutos)
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/svarch-portal`

## Configuración de Dominio Personalizado (Opcional)

### Para GitHub Pages:
1. Ve a Settings > Pages
2. En "Custom domain" agrega tu dominio
3. Configura los DNS según las instrucciones de GitHub
4. Activa "Enforce HTTPS"

## Optimizaciones Incluidas

- ✅ **HTTPS automático** en GitHub Pages
- ✅ **CDN global** de GitHub
- ✅ **Deploy automático** en cada push
- ✅ **Gratis** para repositorios públicos

## URL de Ejemplo

- **GitHub Pages**: `https://tu-usuario.github.io/svarch-portal`

## Próximos Pasos

1. **Crear repositorio** en GitHub
2. **Subir código** del proyecto
3. **Activar GitHub Pages** en Settings
4. **Probar el sitio** en la URL generada
5. **Configurar dominio personalizado** (opcional)

## Comandos Git Útiles

```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit - Portal Dr. Alejandro Svarch"

# Conectar con GitHub
git remote add origin https://github.com/tu-usuario/svarch-portal.git

# Subir código
git push -u origin main
```

## Notas Importantes

- **Repositorio público**: Necesario para GitHub Pages gratuito
- **Rama main**: Asegúrate de usar la rama correcta
- **Tiempo de despliegue**: 2-10 minutos después de cada push
- **HTTPS**: Automático en GitHub Pages

## Contacto

Para soporte técnico o configuración avanzada, contacta al equipo de desarrollo.
