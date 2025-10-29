# 🍽️ Menú de Navegación Mejorado - Recetas Mágicas de NATY

## 📋 Descripción

Se ha implementado un sistema de navegación mejorado en el header con menús desplegables que permiten acceso directo a todas las recetas organizadas por:
- **Días de la semana** (Lunes a Domingo)
- **Comida Saludable** (Veganas, Sin Gluten, Bajo Carbohidratos, Alto en Proteína)
- **Festividades Panameñas** (Carnaval, Semana Santa, Fiestas Patrias, Navidad)

## ✨ Características Principales

### 1. **Menú Días de la Semana**
- Acceso rápido a las recetas de cada día
- 7 opciones: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo
- Cada día tiene un icono único y distintivo
- Al hacer clic, se navega directamente a las recetas del día seleccionado
- Efecto visual de brillo temporal al llegar a la tarjeta del día

### 2. **Menú Comida Saludable**
- Filtrado rápido por tipo de dieta
- 4 categorías disponibles:
  - 🌱 Veganas
  - 🍞 Sin Gluten
  - ⚖️ Bajo Carbohidratos
  - 💪 Alto en Proteína
- Activa automáticamente el filtro correspondiente
- Navegación suave a la sección

### 3. **Menú Festividades**
- Acceso directo a recetas de festividades panameñas
- 4 festividades:
  - 🎭 Carnaval
  - ✝️ Semana Santa
  - 🇵🇦 Fiestas Patrias
  - 🎄 Navidad
- Resalta visualmente la festividad seleccionada
- Efecto de brillo temporal al llegar a la tarjeta

## 🎨 Diseño y Efectos Visuales

### Desktop (> 768px)
- Menús desplegables al pasar el mouse (hover)
- Animación suave de aparición
- Fondo semitransparente con efecto blur
- Borde con color primario
- Iconos animados al hacer hover

### Mobile (≤ 768px)
- Menús desplegables al hacer clic
- Expansión/contracción con animación suave
- Solo un menú abierto a la vez
- Se adapta al menú hamburguesa
- Mayor espaciado para facilitar el toque

## 🔧 Funciones JavaScript Implementadas

### `scrollToDayRecipes(day)`
- Navega a las recetas de un día específico
- Parámetro: `day` (string) - 'monday', 'tuesday', etc.
- Aplica scroll suave y efecto visual de brillo

### `scrollToHealthyType(type)`
- Filtra y muestra recetas saludables por tipo
- Parámetro: `type` (string) - 'veganas', 'sin-gluten', etc.
- Activa automáticamente el filtro correspondiente

### `scrollToFestival(festivalType)`
- Navega a una festividad específica
- Parámetro: `festivalType` (string) - 'carnaval', 'semana-santa', etc.
- Resalta la festividad con efecto visual

### `setupDropdownMenus()`
- Configura el comportamiento de los menús desplegables
- Maneja diferente comportamiento para desktop y mobile
- Cierra automáticamente otros menús al abrir uno nuevo (mobile)
- Se reconfigura automáticamente al cambiar el tamaño de ventana

## 📱 Responsive Design

El menú está completamente optimizado para:
- **Desktop**: Hover para desplegar menús
- **Tablet**: Touch para desplegar menús
- **Mobile**: Integrado con menú hamburguesa

## 🎯 Cómo Usar

1. **En Desktop**: 
   - Pasa el mouse sobre "Días de la Semana", "Comida Saludable" o "Festividades"
   - Haz clic en la opción deseada
   - La página navegará automáticamente a las recetas

2. **En Mobile**:
   - Abre el menú hamburguesa (☰)
   - Haz clic en "Días de la Semana", "Comida Saludable" o "Festividades"
   - Se expandirá el submenú
   - Haz clic en la opción deseada
   - La página navegará automáticamente

## 🌟 Efectos Especiales

- **Animación de flecha**: El icono de flecha (chevron) rota 180° al hacer hover
- **Efecto de brillo**: Las tarjetas resaltadas brillan temporalmente (2 segundos)
- **Transiciones suaves**: Todas las animaciones usan cubic-bezier para movimientos naturales
- **Hover interactivo**: Los items del menú se deslizan ligeramente al hacer hover
- **Iconos animados**: Los iconos escalan al 120% en hover

## 🔄 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ iOS Safari y Chrome
- ✅ Android Chrome
- ✅ Responsive desde 320px hasta 4K

## 📝 Notas Técnicas

- Los menús usan `position: absolute` en desktop
- En mobile, usan `position: relative` con `max-height` animado
- El z-index está optimizado para no interferir con otros elementos
- Usa `backdrop-filter: blur()` para efecto de cristal esmerilado
- Todos los eventos están correctamente limpios para evitar memory leaks

---

**Última actualización**: 2 de Octubre, 2025  
**Versión**: 2.0  
**Autor**: Recetas Mágicas de NATY ✨

