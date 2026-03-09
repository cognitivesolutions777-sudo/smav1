# 🚀 Guía Paso a Paso - SMA Integración 360°

## ⏱️ Tiempo estimado: 15 minutos

---

## PARTE 1: INSTALACIÓN LOCAL (5 minutos)

### Paso 1.1: Instalar Node.js
- Descarga desde: https://nodejs.org/ (versión 18 o superior)
- Verifica la instalación:
```bash
node --version
npm --version
```

### Paso 1.2: Crear proyecto Next.js
```bash
npx create-next-app@latest sma-integration \
  --typescript \
  --tailwind \
  --eslint \
  -y
```

```bash
cd sma-integration
```

### Paso 1.3: Copiar archivos del proyecto
Descarga los archivos entregados y copia:

**En la carpeta `app/`:**
- Crea carpeta: `components/`
- Copia `SMAIntegration.jsx` → `app/components/SMAIntegration.jsx`
- Reemplaza `page.tsx`
- Reemplaza `layout.tsx`
- Reemplaza `globals.css`

**En la raíz del proyecto:**
- Reemplaza `tailwind.config.js`
- Reemplaza `package.json`
- Copia `next.config.js`
- Copia `postcss.config.js`
- Copia `.gitignore`

**Estructura final:**
```
sma-integration/
├── app/
│   ├── components/
│   │   └── SMAIntegration.jsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

### Paso 1.4: Instalar dependencias
```bash
npm install
```

### Paso 1.5: Ejecutar en modo desarrollo
```bash
npm run dev
```

**Resultado esperado:**
```
> npm run dev

> sma-integration@1.0.0 dev
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

Abre en tu navegador: **http://localhost:3000**

🎉 **¡La página está corriendo localmente!**

---

## PARTE 2: PERSONALIZACIÓN (5 minutos)

### Paso 2.1: Agregar número de WhatsApp
1. Abre `app/components/SMAIntegration.jsx`
2. Busca (línea ~800): `href="https://wa.me/51XXXXXXXXXXX"`
3. Reemplaza `XXXXXXXXXXX` con tu número (sin espacios ni símbolos)

**Ejemplo:**
```jsx
// Cambiar de:
href="https://wa.me/51XXXXXXXXXXX"

// A:
href="https://wa.me/51987654321"
```

### Paso 2.2: Cambiar colores (opcional)
Si deseas colores diferentes a verde y naranja:

Busca en `SMAIntegration.jsx`:
- `#4A7C34` → tu color verde
- `#E87722` → tu color naranja

**Ejemplo con otros colores:**
```jsx
color: '#1e40af'  // Azul
color: '#dc2626'  // Rojo
```

### Paso 2.3: Agregar logo (opcional)
1. Crea carpeta `public/` en la raíz
2. Coloca tu logo como `public/logo.png`
3. En `SMAIntegration.jsx`, en la función `GearHero()`, reemplaza:

```jsx
// Cambiar de:
<h1 className="text-5xl font-bold mb-4...">
  360°
</h1>

// A:
<img 
  src="/logo.png" 
  alt="SMA Logo" 
  className="w-32 h-32 object-contain"
/>
```

### Paso 2.4: Editar contenido de ejes
En `SMAIntegration.jsx`, busca `const AXES_DATA`:

```jsx
const AXES_DATA = [
  {
    id: 'trazabilidad',
    title: 'Trazabilidad',
    description: 'Información en tiempo real',
    details: 'Tu texto aquí...',
    features: [
      'Feature 1',
      'Feature 2',
      // agregar más
    ]
  },
  // ... más ejes
];
```

### Paso 2.5: Editar procesos
En `SMAIntegration.jsx`, busca `const PROCESS_STEPS`:

```jsx
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Tu proceso aquí',
    icon: '🚛',
    description: 'Tu descripción',
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

### Paso 2.6: Probar cambios
```bash
npm run dev
```
Los cambios se reflejan automáticamente en http://localhost:3000

---

## PARTE 3: DEPLOYMENT EN VERCEL (5 minutos)

### Opción A: Con GitHub (Recomendado)

#### A.1: Subir a GitHub
1. Crea cuenta en: https://github.com
2. Crea nuevo repositorio (nombre: `sma-integration`)
3. En tu terminal:

```bash
git init
git add .
git commit -m "Initial commit: SMA Integration 360"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sma-integration.git
git push -u origin main
```

**Reemplaza** `TU_USUARIO` con tu usuario de GitHub

#### A.2: Deploy en Vercel
1. Ve a: https://vercel.com
2. Haz clic en "Sign Up"
3. Conecta con GitHub
4. Haz clic en "Import Project"
5. Selecciona `sma-integration`
6. Vercel detecta automáticamente Next.js
7. Haz clic en "Deploy"

**Espera 2-3 minutos...**

✅ **¡Tu sitio está en vivo!**

URL: `https://sma-integration.vercel.app` (o tu nombre personalizado)

### Opción B: Con Vercel CLI (Más rápido)

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones en pantalla.

---

## PARTE 4: VERIFICACIÓN (1 minuto)

### Paso 4.1: Verificar funcionalidades
- [ ] Página carga correctamente
- [ ] Scroll progresivo funciona
- [ ] Engranajes se ven correctamente
- [ ] Botón WhatsApp funciona
- [ ] Responsive en móvil
- [ ] Animaciones suaves

### Paso 4.2: Prueba en móvil
- Abre en tu teléfono: https://sma-integration.vercel.app
- Prueba scroll y botones
- Verifica que se vea bien

---

## ⚠️ TROUBLESHOOTING

### Error: "Port 3000 en uso"
```bash
npm run dev -- -p 3001
```

### Error: "Módulos no encontrados"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error en Vercel: "Build failed"
1. Ve a tu proyecto en Vercel
2. Ve a Settings → Environment Variables
3. Verifica que no haya variables faltantes
4. Haz clic en "Redeploy"

### Cambios no se ven en Vercel
```bash
git add .
git commit -m "Update contenido"
git push
```

Vercel redeploya automáticamente.

---

## 📝 CHECKLIST FINAL

Antes de compartir con clientes:

- [ ] ✓ Agregué número WhatsApp correcto
- [ ] ✓ Cambié colores a los correctos (si aplica)
- [ ] ✓ Actualicé textos de ejes
- [ ] ✓ Actualicé procesos
- [ ] ✓ Agregué logo (si aplica)
- [ ] ✓ Probé en local
- [ ] ✓ Probé en móvil
- [ ] ✓ Deployé en Vercel
- [ ] ✓ Verifiqué URL en vivo
- [ ] ✓ Probé botón WhatsApp

---

## 🔗 URLs ÚTILES

- **Documentación Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Lucide Icons**: https://lucide.dev
- **GitHub**: https://github.com

---

## 📞 SOPORTE RÁPIDO

**Si necesitas ayuda:**

1. Revisa `README.md` para documentación completa
2. Revisa `CUSTOMIZATION_GUIDE.md` para cambios específicos
3. Verifica los logs: `npm run dev` (terminal)
4. Haz clic derecho en el navegador → Inspeccionar (Developer Tools)

---

## 🎯 RESUMEN

```
Instalación Local:  5 min  ✓
Personalización:    5 min  ✓
Deployment:         5 min  ✓
TOTAL:             15 min  ✓
```

**Tu página SMA está lista para producción.**

---

Última actualización: Marzo 2025
Versión: 1.0.0
Estado: Production Ready ✅
