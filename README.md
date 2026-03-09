# SMA - Integración 360°

Página web interactiva de Servicios Medioambientales S.A. con engranajes dinámicos, secciones de ejes y infografía de procesos.

## 🚀 Características

- **Engranajes Interactivos**: 4 ejes (Trazabilidad, Ubicación, Certificaciones, Sectores) conectados visualmente
- **Scroll Dinámico**: Revelación progresiva de contenido con barra de progreso
- **Infografía de Procesos**: 3 pasos visualizados dinámicamente (Ingreso, Pesaje, Disposición)
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Transiciones fluidas y efectos visuales
- **Colores SMA**: Verde (#4A7C34) y Naranja (#E87722) integrados

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Git

## 🛠️ Instalación Local

1. **Crear proyecto Next.js 14**:
```bash
npx create-next-app@latest sma-integration --typescript --tailwind
cd sma-integration
```

2. **Copiar archivos**:
- Coloca `sma-integration-page.jsx` en `app/components/SMAIntegration.jsx`
- Reemplaza `app/page.tsx` con el contenido del archivo `page.tsx`
- Reemplaza `tailwind.config.js` con el archivo proporcionado
- Reemplaza `app/globals.css` con el archivo `globals.css`

3. **Instalar dependencias**:
```bash
npm install
```

4. **Ejecutar en desarrollo**:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Estructura de Archivos

```
sma-integration/
├── app/
│   ├── components/
│   │   └── SMAIntegration.jsx
│   ├── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── tailwind.config.js
└── package.json
```

## 🌐 Deployment en Vercel

### Opción 1: CLI de Vercel
```bash
npm install -g vercel
vercel
```

### Opción 2: GitHub Integration
1. Sube tu repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Haz clic en "Deploy"

### Opción 3: Manual Upload
1. Compila el proyecto: `npm run build`
2. Carga los archivos a Vercel

## ⚙️ Configuración Personalización

### Cambiar Colores
Edita los colores en `SMAIntegration.jsx`:
- `#4A7C34` → Verde SMA
- `#E87722` → Naranja SMA

### Agregar Contenido
- **Ejes**: Modifica el array `axes` en el componente
- **Procesos**: Modifica el array `processSteps`
- **Textos**: Edita strings dentro del JSX

### Agregar Enlace a WhatsApp
Actualiza el botón "Contáctanos Hoy":
```jsx
<a href="https://wa.me/51XXXXXXXXXXX?text=Hola%20SMA" target="_blank">
  Contáctanos Hoy
</a>
```

## 🎨 Elementos Visuales

### Engranajes Hero
- SVG interactivo con 4 círculos conectados
- Glow effects con filtros SVG
- Animación de pulso en hover

### Secciones de Ejes
- Grid alternado (texto-imagen)
- Íconos dinámicos por eje
- Características expandibles

### Infografía de Procesos
- Timeline vertical con línea conectora
- 3 pasos con detalles
- Animaciones escalonadas

## 📱 Responsive Design

- **Desktop**: Grillas de 2 columnas, animaciones complejas
- **Tablet**: Adaptación fluida
- **Mobile**: Stack vertical, elementos optimizados

## 🔍 SEO

El archivo `page.tsx` incluye:
- Metadata dinámica
- Títulos descriptivos
- Estructura semántica HTML

## 🚀 Optimizaciones

- Lazy loading de imágenes (si se agregan)
- CSS-in-JS para estilos dinámicos
- Animaciones GPU-accelerated
- Scroll behavior optimizado

## 📝 Licencia

Proyecto de SMA - Servicios Medioambientales S.A.

## 💬 Soporte

Para cambios o personalizaciones adicionales, contacta al equipo de desarrollo.

---

**Construido con**: Next.js 14 + Tailwind CSS + React
**Optimizado para**: Vercel
