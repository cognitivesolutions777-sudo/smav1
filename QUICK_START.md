# ⚡ Quick Start - SMA Integración 360°

## 🚀 5 Minutos para Empezar

### Paso 1: Crear proyecto Next.js
```bash
npx create-next-app@latest sma-integration --typescript --tailwind --eslint -y
cd sma-integration
```

### Paso 2: Copiar archivos
Reemplaza/agrega estos archivos del proyecto entregado:
- `app/components/SMAIntegration.jsx` ← renombra de `SMAIntegration.jsx`
- `app/page.tsx` 
- `app/layout.tsx`
- `app/globals.css`
- `tailwind.config.js`
- `next.config.js`
- `postcss.config.js`
- `.gitignore`

### Paso 3: Instalar y ejecutar
```bash
npm install
npm run dev
```

Abre: **http://localhost:3000** 🎉

---

## 📤 Deployment en Vercel (Gratis)

### Opción A: GitHub (Recomendado)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sma-integration.git
git push -u origin main
```

Luego en [vercel.com](https://vercel.com):
1. Click en "New Project"
2. Conecta tu repositorio de GitHub
3. Click en "Deploy"

**¡Listo!** Tu sitio está en vivo en `sma-integration.vercel.app`

### Opción B: CLI de Vercel
```bash
npm install -g vercel
vercel
```

---

## 🎨 Personalizaciones Esenciales

### 1. Agregar tu WhatsApp
En `app/components/SMAIntegration.jsx`, busca:
```jsx
href="https://wa.me/51XXXXXXXXXXX"
```
Reemplaza con tu número (+51 + número sin ceros iniciales)

### 2. Cambiar colores (opcional)
Busca en `SMAIntegration.jsx`:
```jsx
'#4A7C34'  // Verde
'#E87722'  // Naranja
```

### 3. Agregar logo
- Crea carpeta `public/`
- Coloca tu logo como `public/logo.png`
- En `GearHero()` reemplaza el "360°" con tu imagen

---

## 📊 Estructura Final

```
sma-integration/
├── app/
│   ├── components/
│   │   └── SMAIntegration.jsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   ├── logo.png (opcional)
│   └── favicon.ico
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🔗 Archivos Documentación

- **README.md** → Documentación completa
- **CUSTOMIZATION_GUIDE.md** → Guía de personalización detallada
- **QUICK_START.md** → Este archivo (acceso rápido)

---

## ✅ Checklist Pre-Deployment

- [ ] Agregué número de WhatsApp
- [ ] Cambié los colores (si lo deseaba)
- [ ] Actualicé textos/contenido
- [ ] Probé en local (`npm run dev`)
- [ ] Conecté a GitHub
- [ ] Deployé en Vercel
- [ ] Verifiqué que funcione en producción

---

## 🆘 Troubleshooting

### Error: "Port 3000 en uso"
```bash
npm run dev -- -p 3001
```

### Error: Módulos no encontrados
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error en Vercel: Build fallido
1. Ve a tu proyecto en Vercel
2. Verifica que Node.js sea 18+
3. Revisa los logs de build
4. Reinicia el deployment

---

## 📞 Soporte

- **Documentación Oficial**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Lucide Icons**: https://lucide.dev

---

## 🎯 Próximos Pasos

1. ✅ Deploy inicial en Vercel
2. 📧 Agregar formulario de contacto (opcional)
3. 📱 Optimizar para móvil
4. 🔍 Agregar Google Analytics
5. 🎯 SEO optimization

---

**¡Tu página está lista para el mundo!** 🌍

Última actualización: Marzo 2025
