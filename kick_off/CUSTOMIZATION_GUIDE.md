# 🎨 Guía de Personalización - SMA Integration 360°

## 📝 Cambios Comunes

### 1. Agregar Número de WhatsApp

En el componente `CTASection` del archivo `SMAIntegration.jsx`:

```jsx
<a
  href="https://wa.me/51XXXXXXXXXXX?text=Hola%20SMA%20quiero%20información"
  target="_blank"
  rel="noopener noreferrer"
>
  Contáctanos Hoy
</a>
```

**Reemplaza**:
- `51` con tu código de país (Perú)
- `XXXXXXXXXXX` con tu número de teléfono sin espacios

### 2. Cambiar Colores SMA

#### Opción A: En el componente (rápido)
Busca en `SMAIntegration.jsx`:
```jsx
color: '#4A7C34'  // Verde
color: '#E87722'  // Naranja
```

Reemplaza con tus colores hexadecimales.

#### Opción B: En Tailwind (recomendado)
En `tailwind.config.js`:
```js
colors: {
  'sma-green': '#4A7C34',
  'sma-orange': '#E87722',
}
```

Y en `globals.css`:
```css
:root {
  --sma-green: #4A7C34;
  --sma-orange: #E87722;
}
```

### 3. Agregar Logo

En `GearHero()`, reemplaza el contenedor de "360°":

```jsx
<div className="absolute inset-0 flex items-center justify-center">
  <img 
    src="/logo.png" 
    alt="SMA Logo" 
    className="w-32 h-32 object-contain"
  />
</div>
```

Coloca tu logo en `public/logo.png`.

### 4. Cambiar Textos de Ejes

En `AXES_DATA`:
```jsx
const AXES_DATA = [
  {
    id: 'trazabilidad',
    title: 'Trazabilidad',
    description: 'Tu descripción aquí',
    details: 'Tu texto detallado aquí',
    features: [
      'Feature 1',
      'Feature 2',
      // agregar más
    ]
  },
  // ... más ejes
];
```

### 5. Cambiar Procesos

En `PROCESS_STEPS`:
```jsx
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Tu proceso aquí',
    icon: '🚛', // cambiar emoji
    description: 'Descripción',
    details: [
      'Detalle 1',
      'Detalle 2',
      // agregar más
    ],
    color: '#4A7C34'
  },
  // ... más pasos
];
```

### 6. Cambiar Emojis de Secciones

En `AxisSection()`:
```jsx
const emojis = ['⚙️', '📍', '✓', '🏢'];
// Cambia por los emojis que prefieras
```

## 🔧 Cambios Avanzados

### Agregar Secciones Nuevas

1. Crea un componente nuevo:
```jsx
function NewSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      {/* tu contenido */}
    </section>
  );
}
```

2. Agrégalo en el componente principal `SMAIntegration()`:
```jsx
return (
  <div>
    <ProgressBar />
    <GearHero />
    {/* ... otras secciones */}
    <NewSection /> {/* agregar aquí */}
    <CTASection />
  </div>
);
```

### Modificar Engranajes Hero

En el SVG dentro de `GearHero()`:
```jsx
<svg className="..." viewBox="0 0 400 400">
  {/* Cambia las coordenadas (cx, cy, r) para mover/redimensionar círculos */}
  <circle cx="200" cy="200" r="80" fill="none" stroke="#4A7C34" strokeWidth="2" />
</svg>
```

### Agregar Animaciones Personalizadas

En `globals.css`:
```css
@keyframes miAnimacion {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(100px);
    opacity: 1;
  }
}

.mi-elemento {
  animation: miAnimacion 2s ease-in-out infinite;
}
```

## 📱 Responsive Adjustments

### Tailwind Breakpoints
- `sm:` (640px) - Tablets pequeños
- `md:` (768px) - Tablets
- `lg:` (1024px) - Desktops
- `xl:` (1280px) - Desktops grandes

Ejemplo:
```jsx
<div className="text-xl md:text-3xl lg:text-5xl">
  Texto responsivo
</div>
```

### Ajustar Espacios

En las secciones:
```jsx
<section className="min-h-screen flex items-center justify-center relative py-20 px-8">
  {/* py-20 = padding vertical (80px) */}
  {/* px-8 = padding horizontal (32px) */}
</section>
```

Aumenta `py-` y `px-` para más espacio.

## 🎯 SEO & Metadata

En `page.tsx`:
```jsx
export const metadata = {
  title: 'SMA - Tu título aquí',
  description: 'Tu descripción aquí',
  keywords: 'residuos, disposición, ambiental',
};
```

## 🚀 Performance Tips

1. **Lazy Load Images**:
```jsx
<img src="imagen.jpg" loading="lazy" alt="descripción" />
```

2. **Optimize SVGs**: Usa herramientas como SVGO

3. **Minify CSS**: Tailwind lo hace automáticamente

4. **Preload Fonts**: En `layout.tsx`:
```jsx
<link rel="preload" href="/fonts/tuFont.woff2" as="font" />
```

## 🐛 Debugging

### Ver qué sección está activa
En la consola del navegador:
```js
window.scrollY // posición del scroll
document.querySelectorAll('[data-section]') // todas las secciones
```

### Inspeccionar colores
Click derecho → Inspeccionar elemento → pestaña Styles

## 📦 Deploy Tips

### Vercel
```bash
vercel --prod
```

### Variables de entorno
Crea `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/51XXXXXXXXXXX
```

Úsalo en el código:
```jsx
href={process.env.NEXT_PUBLIC_WHATSAPP_URL}
```

## 🎓 Recursos

- Tailwind CSS Docs: https://tailwindcss.com/docs
- Next.js Docs: https://nextjs.org/docs
- SVG Reference: https://developer.mozilla.org/en-US/docs/Web/SVG
- Lucide React Icons: https://lucide.dev

---

**¿Necesitas ayuda?** Revisa el README.md o contacta al equipo de desarrollo.
