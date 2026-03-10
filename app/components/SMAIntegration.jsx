'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Zap, MapPin, Award, Briefcase, Recycle, Shield, FileText, Settings, Phone, Mail, MapPinIcon, ArrowUp, ChevronRight, CheckCircle, TrendingUp, Users, Clock, Leaf, MessageCircle, Send } from 'lucide-react';

// Hook: Intersection Observer para animaciones al scroll
function useRevealOnScroll(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.15, ...options });

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return [ref, isVisible];
}

// Wrapper: Aplica animación reveal a cualquier children
function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useRevealOnScroll();

  const directionStyles = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: 'translate-y-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionStyles[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Hook: Contador animado (como Séché Group)
function useAnimatedCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useRevealOnScroll();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return [ref, count];
}

// Datos de configuración
const AXES_DATA = [
  {
    id: 'trazabilidad',
    title: 'Trazabilidad',
    icon: Zap,
    color: '#7CB394',
    image: '/trazabilidad.jpg',
    description: 'Información en tiempo real',
    details: 'Reportes y seguimiento detallado de cada residuo desde su ingreso hasta su disposición final. Sistema automatizado que registra cada movimiento con precisión.',
    features: [
      'Reportes en tiempo real',
      'Historial completo de residuos',
      'Auditoría digital integrada',
      'Alertas automáticas'
    ]
  },
  {
    id: 'ubicacion',
    title: 'Ubicación',
    icon: MapPin,
    color: '#DBA07A',
    image: '/ubicacion.jpg',
    description: 'Lugares dónde están ubicados',
    details: 'Localización precisa de tus residuos en nuestras instalaciones. Geolocalización con tecnología GPS integrada para máxima transparencia.',
    features: [
      'Mapa interactivo en tiempo real',
      'Ubicación de celdas de disposición',
      'Rastreo de vehículos',
      'Geofencing automático'
    ]
  },
  {
    id: 'certificaciones',
    title: 'Certificaciones',
    icon: Award,
    color: '#7CB394',
    image: '/certificaciones.jpg',
    description: 'Certificados en tiempo real',
    details: 'Documentación oficial que certifica la disposición final adecuada de tus residuos conforme a normativa ambiental nacional e internacional.',
    features: [
      'Certificados ISO actualizados',
      'Calibración INACAL verificada',
      'Reportes conformidad ambiental',
      'Auditorías regulares'
    ]
  },
  {
    id: 'sectores',
    title: 'Sectores',
    icon: Briefcase,
    color: '#DBA07A',
    image: '/sectores.jpg',
    description: 'Rubros con quien se desempeña',
    details: 'Experiencia comprobada en múltiples sectores industriales. Soluciones personalizadas para cada tipo de residuo y necesidad específica.',
    features: [
      'Industria manufacturera',
      'Sector energético',
      'Empresas de construcción',
      'Servicios especializados'
    ]
  }
];

const SERVICES_DATA = [
  {
    id: 'gestion-residuos',
    title: 'Gestión Integral de Residuos',
    icon: Recycle,
    color: '#7CB394',
    bgImage: '/trazabilidad.jpg',
    description: 'Soluciones completas para el manejo responsable de residuos sólidos peligrosos y no peligrosos, desde la recolección hasta la disposición final certificada.',
    features: [
      'Recolección y transporte especializado',
      'Clasificación y segregación en origen',
      'Tratamiento y valorización de residuos',
      'Disposición final en relleno de seguridad autorizado'
    ]
  },
  {
    id: 'sitios-contaminados',
    title: 'Manejo de Sitios Contaminados',
    icon: Shield,
    color: '#DBA07A',
    bgImage: '/ubicacion.jpg',
    description: 'Evaluación, remediación y monitoreo de suelos y aguas subterráneas afectados por actividades industriales, garantizando la restauración ambiental.',
    features: [
      'Evaluación y diagnóstico ambiental',
      'Planes de remediación y descontaminación',
      'Monitoreo continuo de suelos y aguas',
      'Cumplimiento de estándares de calidad ambiental'
    ]
  },
  {
    id: 'consultoria-ambiental',
    title: 'Consultoría Ambiental',
    icon: FileText,
    color: '#7CB394',
    bgImage: '/certificaciones.jpg',
    description: 'Asesoramiento especializado en normativa ambiental, estudios de impacto, permisos y planes de manejo para cumplimiento regulatorio integral.',
    features: [
      'Estudios de impacto ambiental (EIA)',
      'Planes de manejo ambiental',
      'Gestión de permisos y licencias',
      'Auditorías ambientales y cumplimiento normativo'
    ]
  },
  {
    id: 'optimizacion-operaciones',
    title: 'Optimización de Operaciones',
    icon: Settings,
    color: '#DBA07A',
    bgImage: '/sectores.jpg',
    description: 'Mejora continua de procesos operativos ambientales mediante tecnología, análisis de datos y metodologías de eficiencia para reducir costos y riesgos.',
    features: [
      'Análisis y mejora de procesos ambientales',
      'Implementación de tecnologías limpias',
      'Reducción de costos operativos',
      'Indicadores de desempeño y reportes de sostenibilidad'
    ]
  }
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Control de Ingreso de Vehículos',
    icon: '🚛',
    image: '/proceso-ingreso.jpg',
    description: 'Verificación exhaustiva de documentación y residuos',
    details: [
      'Validación de manifiestos de residuos sólidos peligrosos',
      'Verificación de Guía de remisión y transporte',
      'Confirmación de residuos vs. documentación',
      'Instrucción de medidas de seguridad'
    ],
    color: '#7CB394'
  },
  {
    number: '02',
    title: 'Control de Pesaje',
    icon: '⚖️',
    image: '/proceso-pesaje.jpg',
    description: 'Balanza electrónica certificada de 80 toneladas',
    details: [
      'Balanza calibrada por laboratorio INACAL',
      'Pesaje al ingreso y salida del vehículo',
      'Cálculo preciso de residuos',
      'Comprobante con información exacta'
    ],
    color: '#DBA07A'
  },
  {
    number: '03',
    title: 'Disposición Final de Residuos',
    icon: '🌍',
    image: '/proceso-disposicion.jpg',
    description: 'Confinamiento seguro en celdas especializadas',
    details: [
      'Tecnología de geosintéticos anti-filtración',
      'Confinamiento diario para seguridad ambiental',
      'Documentación de cumplimiento normativo',
      'Protección del medio ambiente garantizada'
    ],
    color: '#7CB394'
  }
];

// Helper: genera un path SVG de engranaje
function gearPath(cx, cy, outerR, innerR, teeth) {
  const pts = [];
  const step = Math.PI / teeth;
  const tipWidth = 0.35;
  for (let i = 0; i < teeth * 2; i++) {
    const angle = i * step - Math.PI / 2;
    if (i % 2 === 0) {
      pts.push([cx + innerR * Math.cos(angle - step * tipWidth), cy + innerR * Math.sin(angle - step * tipWidth)]);
      pts.push([cx + outerR * Math.cos(angle + step * 0.15), cy + outerR * Math.sin(angle + step * 0.15)]);
      pts.push([cx + outerR * Math.cos(angle + step * 0.85), cy + outerR * Math.sin(angle + step * 0.85)]);
    } else {
      pts.push([cx + innerR * Math.cos(angle + step * tipWidth), cy + innerR * Math.sin(angle + step * tipWidth)]);
    }
  }
  return 'M' + pts.map(p => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' L') + ' Z';
}

// Componente: Barra de Progreso
function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#E8E2D8] z-50">
      <div
        className="h-full bg-gradient-to-r from-[#7CB394] to-[#DBA07A] transition-all duration-300"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

// Componente: Navegación Header
function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Por qué SMA?', href: '#axis-trazabilidad' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#process' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#D5CCBE]/30 py-3 shadow-[0_1px_20px_rgba(0,0,0,0.06)]' : 'bg-white/50 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Image
          src="/logo_sma_111.png"
          alt="SMA - Servicios Medio Ambientales"
          width={130}
          height={80}
          className="drop-shadow-[0_0_15px_rgba(124,179,148,0.3)]"
          priority
        />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#5A6E5E] hover:text-[#2C3830] transition-colors uppercase tracking-wider font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/51XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2.5 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(124,179,148,0.3)]"
            style={{ background: 'linear-gradient(135deg, #7CB394, #6BA37D)' }}
          >
            Cotizar ahora
          </a>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          <div className="w-7 h-5 relative flex flex-col justify-between">
            <span className={`block h-[2px] w-full rounded-full bg-[#2C3830] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-[#2C3830] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-[#2C3830] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mega menu overlay (mobile) */}
      <div className={`md:hidden fixed inset-0 z-[55] transition-all duration-500 ${
        menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#2C3830]/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel del menú */}
        <div className={`absolute inset-x-0 top-0 bg-gradient-to-b from-[#F7F4EF] via-[#F5F2EC] to-[#EFF3EC] border-b border-[#D5CCBE]/30 transition-all duration-500 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="pt-24 pb-10 px-8">
            {/* Links principales */}
            <div className="space-y-2 mb-10">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 py-4 border-b border-[#D5CCBE]/20 group transition-all duration-300"
                  style={{ transitionDelay: menuOpen ? `${i * 75}ms` : '0ms' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-[2]"
                    style={{ backgroundColor: i % 2 === 0 ? '#7CB394' : '#DBA07A' }}
                  />
                  <span className="text-lg text-[#4A5C4D] group-hover:text-[#2C3830] transition-colors uppercase tracking-wider font-medium">
                    {link.label}
                  </span>
                  <svg className="w-4 h-4 ml-auto text-[#A3B0A5] group-hover:text-[#2C3830] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/51XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(124,179,148,0.25)]"
              style={{ background: 'linear-gradient(135deg, #7CB394, #DBA07A)' }}
            >
              Cotizar ahora
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            {/* Info de contacto rápido */}
            <div className="mt-8 pt-6 border-t border-[#D5CCBE]/20 flex items-center justify-center gap-6 text-xs text-[#7A8C7D] uppercase tracking-wider">
              <span>15+ Años</span>
              <span className="w-1 h-1 rounded-full bg-[#7CB394]" />
              <span>500+ Empresas</span>
              <span className="w-1 h-1 rounded-full bg-[#DBA07A]" />
              <span>100% Norma</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Componente: Hero con fondo limpio pastel
function GearHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Fondo: gradiente pastel limpio + patrón sutil (no foto industrial) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EF] via-[#EDF5F0] to-[#F5F0E8]" />

      {/* Patrón de puntos muy sutil */}
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #7CB394 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      {/* Formas orgánicas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob verde top-right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#7CB394]/[0.08] rounded-full blur-[80px]" />
        {/* Blob cálido bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#DBA07A]/[0.06] rounded-full blur-[80px]" />
        {/* Blob central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B5D8C2]/[0.05] rounded-full blur-[100px]" />

        {/* Hojas decorativas SVG */}
        <svg className="absolute top-24 right-16 w-28 h-28 text-[#7CB394]/[0.08]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C55 25 75 35 95 30C90 55 70 75 50 95C30 75 10 55 5 30C25 35 45 25 50 5Z" />
        </svg>
        <svg className="absolute bottom-40 left-12 w-20 h-20 text-[#B5D8C2]/[0.1] rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C55 25 75 35 95 30C90 55 70 75 50 95C30 75 10 55 5 30C25 35 45 25 50 5Z" />
        </svg>
        <svg className="absolute top-1/2 right-[12%] w-14 h-14 text-[#DBA07A]/[0.07] -rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C55 25 75 35 95 30C90 55 70 75 50 95C30 75 10 55 5 30C25 35 45 25 50 5Z" />
        </svg>

        {/* Línea decorativa horizontal */}
        <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7CB394]/10 to-transparent" />
      </div>

      {/* Franja de foto ambiental — solo abajo como acento */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] lg:h-[220px]">
        <Image
          src="/hero-bg.jpg"
          alt="Operaciones ambientales SMA"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EF]/30 via-[#F7F4EF]/70 to-[#F7F4EF]" />
      </div>

      {/* Layout principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-56 lg:pb-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Columna izquierda: Texto + CTA */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7CB394]/25 bg-white/60 backdrop-blur-sm mb-8 animate-fade-in-up shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#7CB394] animate-pulse" />
              <span className="text-xs text-[#5E9474] uppercase tracking-widest font-medium">Relleno de Seguridad Autorizado por MINAM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 text-[#2C3830] animate-fade-in-up animation-delay-200">
              Gestión integral de{' '}
              <span className="bg-gradient-to-r from-[#5E9474] via-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">
                residuos peligrosos
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-[#5A6E5E] leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-400">
              Trazabilidad completa, disposición final certificada y cumplimiento normativo.
              Protegemos tu operación y el medio ambiente con tecnología de integración 360°.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up animation-delay-600">
              <a
                href="https://wa.me/51XXXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(124,179,148,0.35)] text-base shadow-md"
                style={{ background: 'linear-gradient(135deg, #7CB394, #6BA37D)' }}
              >
                Solicitar cotización
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#axis-trazabilidad"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#4A5C4D] border border-[#D5CCBE]/60 hover:border-[#7CB394]/50 hover:text-[#2C3830] transition-all duration-300 text-base bg-white/70 backdrop-blur-sm shadow-sm"
              >
                Por qué SMA?
              </a>
            </div>

            {/* Stats de confianza — con fondo tarjeta */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-800">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-[#D5CCBE]/25 shadow-sm text-center">
                <p className="text-2xl lg:text-3xl font-bold text-[#2C3830]">15<span className="text-[#7CB394]">+</span></p>
                <p className="text-[10px] text-[#7A8C7D] uppercase tracking-wider mt-1">Años de experiencia</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-[#D5CCBE]/25 shadow-sm text-center">
                <p className="text-2xl lg:text-3xl font-bold text-[#2C3830]">500<span className="text-[#DBA07A]">+</span></p>
                <p className="text-[10px] text-[#7A8C7D] uppercase tracking-wider mt-1">Empresas atendidas</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-[#D5CCBE]/25 shadow-sm text-center">
                <p className="text-2xl lg:text-3xl font-bold text-[#2C3830]">100<span className="text-[#7CB394]">%</span></p>
                <p className="text-[10px] text-[#7A8C7D] uppercase tracking-wider mt-1">Norma cumplida</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Engranajes + badge 360° */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]" suppressHydrationWarning>
              {mounted && <svg className="absolute inset-0 w-full h-full gear-pulse" viewBox="0 0 400 400">
                <defs>
                  <filter id="glow-green">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feFlood floodColor="#7CB394" floodOpacity="0.3" result="glowColor"/>
                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                    <feMerge>
                      <feMergeNode in="softGlow"/>
                      <feMergeNode in="softGlow"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glow-orange">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feFlood floodColor="#DBA07A" floodOpacity="0.3" result="glowColor"/>
                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                    <feMerge>
                      <feMergeNode in="softGlow"/>
                      <feMergeNode in="softGlow"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7CB394" stopOpacity="0.12" />
                    <stop offset="60%" stopColor="#7CB394" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="200" cy="200" r="140" fill="url(#centerGlow)" />

                {/* Engranaje central grande - verde pastel */}
                <g opacity="0.85" className="gear-cw" style={{ transformOrigin: '200px 200px' }}>
                  <path d={gearPath(200, 200, 90, 70, 12)} fill="#7CB39415" stroke="#7CB394" strokeWidth="2.5" filter="url(#glow-green)" />
                  <circle cx="200" cy="200" r="52" fill="none" stroke="#7CB394" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="200" cy="200" r="16" fill="#7CB39420" stroke="#7CB394" strokeWidth="2" opacity="0.7" />
                </g>

                {/* Engranaje superior derecho - cálido pastel */}
                <g opacity="0.75" className="gear-ccw" style={{ transformOrigin: '295px 110px' }}>
                  <path d={gearPath(295, 110, 65, 50, 10)} fill="#DBA07A15" stroke="#DBA07A" strokeWidth="2.5" filter="url(#glow-orange)" />
                  <circle cx="295" cy="110" r="36" fill="none" stroke="#DBA07A" strokeWidth="1" opacity="0.35" />
                  <circle cx="295" cy="110" r="12" fill="#DBA07A20" stroke="#DBA07A" strokeWidth="1.5" opacity="0.7" />
                </g>

                {/* Engranaje inferior derecho - verde */}
                <g opacity="0.75" className="gear-cw-slow" style={{ transformOrigin: '290px 295px' }}>
                  <path d={gearPath(290, 295, 60, 47, 9)} fill="#7CB39415" stroke="#7CB394" strokeWidth="2.5" filter="url(#glow-green)" />
                  <circle cx="290" cy="295" r="33" fill="none" stroke="#7CB394" strokeWidth="1" opacity="0.35" />
                  <circle cx="290" cy="295" r="11" fill="#7CB39420" stroke="#7CB394" strokeWidth="1.5" opacity="0.7" />
                </g>

                {/* Engranaje izquierdo pequeño - cálido */}
                <g opacity="0.6" className="gear-ccw-slow" style={{ transformOrigin: '115px 200px' }}>
                  <path d={gearPath(115, 200, 48, 37, 8)} fill="#DBA07A10" stroke="#DBA07A" strokeWidth="2" filter="url(#glow-orange)" />
                  <circle cx="115" cy="200" r="26" fill="none" stroke="#DBA07A" strokeWidth="1" opacity="0.3" />
                  <circle cx="115" cy="200" r="8" fill="#DBA07A15" stroke="#DBA07A" strokeWidth="1.5" opacity="0.6" />
                </g>

                {/* Arcos orbitales decorativos */}
                <circle cx="200" cy="200" r="130" fill="none" stroke="#7CB394" strokeWidth="0.5" opacity="0.2" strokeDasharray="8,12" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="#DBA07A" strokeWidth="0.5" opacity="0.15" strokeDasharray="4,16" />
              </svg>}

              {/* Badge central 360° */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#6BA37D] via-[#DBA07A] to-[#7CB394] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,179,148,0.2)]">
                    360°
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-[0.25em] mt-2 bg-gradient-to-r from-[#2C3830] via-[#4A5C4D] to-[#2C3830] bg-clip-text text-transparent">
                    Integración Total
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20" style={{ bottom: '9rem' }}>
        <a href="#axis-trazabilidad" className="flex flex-col items-center gap-2 group">
          <p className="text-[10px] text-[#8A9B8D] uppercase tracking-[0.25em] group-hover:text-[#5A6E5E] transition-colors">Descubre más</p>
          <div className="w-5 h-8 rounded-full border border-[#7CB394]/30 flex items-start justify-center p-1.5 group-hover:border-[#7CB394]/50 transition-colors bg-white/50">
            <div className="w-1 h-2 bg-[#7CB394] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

// Componente: Sección de Eje
function AxisSection({ axis, index }) {
  const IconComponent = axis.icon;

  return (
    <section
      id={`axis-${axis.id}`}
      data-section={`axis-${axis.id}`}
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[700px]">
        {/* Imagen full-bleed */}
        <Reveal direction={index % 2 === 0 ? 'left' : 'right'} className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <div className="relative overflow-hidden h-[350px] sm:h-[400px] lg:h-[700px]">
            <Image
              src={axis.image}
              alt={axis.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay pastel suave */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to ${index % 2 === 0 ? 'right' : 'left'}, ${axis.color}30, transparent 60%)` }}
            />
            <div className="absolute inset-0 bg-[#F7F4EF]/10" />
            {/* Gradiente inferior en móvil */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F7F4EF] to-transparent lg:hidden" />
          </div>
        </Reveal>

        {/* Contenido */}
        <div className={`relative flex items-center bg-gradient-to-b from-[#F7F4EF] to-[#EFF3EC] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="px-8 py-12 lg:px-16 lg:py-20 max-w-xl mx-auto lg:mx-0 w-full">
            <Reveal delay={150}>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${axis.color}20`, border: `2px solid ${axis.color}` }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: axis.color }} />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3830]">{axis.title}</h2>
                  <p className="text-sm text-[#7A8C7D] uppercase tracking-widest mt-1">{axis.description}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="text-lg text-[#4A5C4D] leading-relaxed mb-10">
                {axis.details}
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: axis.color }}>Características</h3>
                {axis.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer">
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"
                      style={{ backgroundColor: axis.color }}
                    />
                    <p className="text-[#4A5C4D] group-hover:text-[#2C3830] transition-colors">{feature}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente: Sección de Servicios con imágenes de fondo
function ServicesSection() {
  return (
    <section id="servicios" data-section="servicios" className="relative py-24 px-8 bg-gradient-to-b from-[#EFF3EC] via-[#F7F4EF] to-[#EFF3EC]">
      {/* Decoración SVG de hojas en fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -top-10 -right-20 w-64 h-64 text-[#7CB394]/[0.05]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C55 25 75 35 95 30C90 55 70 75 50 95C30 75 10 55 5 30C25 35 45 25 50 5Z" />
        </svg>
        <svg className="absolute -bottom-10 -left-20 w-48 h-48 text-[#DBA07A]/[0.05] rotate-180" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C55 25 75 35 95 30C90 55 70 75 50 95C30 75 10 55 5 30C25 35 45 25 50 5Z" />
        </svg>
        {/* Gotas de agua ambientales */}
        <svg className="absolute top-1/4 left-8 w-6 h-6 text-[#B5D8C2]/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" />
        </svg>
        <svg className="absolute bottom-1/3 right-12 w-8 h-8 text-[#7CB394]/[0.07]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7CB394]/30 bg-[#7CB394]/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#DBA07A]" />
              <span className="text-xs text-[#DBA07A] uppercase tracking-widest font-medium">Nuestros Servicios</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#2C3830]">
              Soluciones{' '}
              <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">Integrales</span>
            </h2>
            <p className="text-[#5A6E5E] text-lg leading-relaxed">
              SMA ofrece soluciones integrales en gestión ambiental, incluyendo tratamiento de residuos, manejo de sitios contaminados y optimización de operaciones, garantizando cumplimiento normativo y sostenibilidad.
            </p>
          </div>
        </Reveal>

        {/* Grid de servicios con imágenes de fondo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Reveal key={service.id} delay={index * 120}>
              <div
                className="group relative rounded-2xl overflow-hidden border border-[#D5CCBE]/30 bg-white shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[#D5CCBE]/50"
              >
                {/* Imagen de fondo del servicio */}
                <div className="absolute inset-0">
                  <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    className="object-cover opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Resplandor hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${service.color}10, transparent 70%)` }}
                />

                <div className="relative z-10 p-8 lg:p-10">
                  {/* Icono + Título */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}18`, border: `1.5px solid ${service.color}40` }}
                    >
                      <IconComponent className="w-7 h-7" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#2C3830] group-hover:text-[#1F2E22] transition-colors">{service.title}</h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-[#5A6E5E] leading-relaxed mb-8">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        <p className="text-sm text-[#4A5C4D] group-hover:text-[#2C3830] transition-colors">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Componente: Sección de Procesos
function ProcessSection() {
  return (
    <section id="process" data-section="process" className="relative">
      {/* Título */}
      <div className="bg-gradient-to-b from-[#EFF3EC] via-[#E8F0E4] to-[#EFF3EC] py-20 px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#2C3830]">Nuestro Proceso SMA</h2>
            <p className="text-[#5A6E5E] text-lg">
              Un sistema de tres pasos diseñado para garantizar la tranquilidad de tu empresa y el cuidado del planeta
            </p>
          </div>
        </Reveal>
      </div>

      {/* Pasos del proceso */}
      {PROCESS_STEPS.map((step, index) => (
        <div key={index} data-step={index} className="relative">
          {/* Banner de imagen full-width con overlay */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#F7F4EF]/50" />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${step.color}25, transparent 60%)` }}
            />

            {/* Contenido sobre la imagen */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl mx-auto w-full px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="text-6xl md:text-7xl font-bold"
                        style={{ color: step.color, textShadow: `0 0 40px ${step.color}30` }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 text-[#2C3830]">{step.title}</h3>
                    <p className="text-[#4A5C4D] text-lg">{step.description}</p>
                  </div>

                  <div className="space-y-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-lg px-5 py-4 border border-[#D5CCBE]/30 shadow-sm">
                        <div
                          className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        />
                        <p className="text-[#2C3830]">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separador de color entre pasos */}
          {index < PROCESS_STEPS.length - 1 && (
            <div className="h-1" style={{
              background: `linear-gradient(to right, ${step.color}, ${PROCESS_STEPS[index + 1].color})`
            }} />
          )}
        </div>
      ))}
    </section>
  );
}

// Datos de clientes
const CLIENTS_DATA = [
  { name: 'Minera Antamina', sector: 'Minería' },
  { name: 'Cementos Pacasmayo', sector: 'Construcción' },
  { name: 'Petroperú', sector: 'Energía' },
  { name: 'Gloria S.A.', sector: 'Industria' },
  { name: 'Backus AB InBev', sector: 'Manufactura' },
  { name: 'Cerro Verde', sector: 'Minería' },
  { name: 'Southern Copper', sector: 'Minería' },
  { name: 'UNACEM', sector: 'Construcción' },
];

// Componente: Sección de Clientes
function ClientsSection() {
  return (
    <section className="relative py-20 px-8 bg-gradient-to-b from-[#EFF3EC] via-[#F7F4EF] to-[#EFF3EC] overflow-hidden">
      {/* Líneas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7CB394]/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#DBA07A]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-xs text-[#7A8C7D] uppercase tracking-[0.3em] mb-3">Confían en nosotros</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3830]">
              Empresas que <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">confían</span> en SMA
            </h2>
          </div>
        </Reveal>

        {/* Grid de logos/clientes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {CLIENTS_DATA.map((client, i) => (
            <Reveal key={client.name} delay={i * 80}>
              <div className="group relative flex flex-col items-center justify-center py-8 px-4 rounded-xl border border-[#D5CCBE]/30 bg-white/70 hover:border-[#7CB394]/30 hover:bg-white hover:shadow-md transition-all duration-500">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: i % 2 === 0 ? '#7CB39418' : '#DBA07A18', border: `1px solid ${i % 2 === 0 ? '#7CB39430' : '#DBA07A30'}` }}
                >
                  <span className="text-2xl font-bold" style={{ color: i % 2 === 0 ? '#7CB394' : '#DBA07A' }}>
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#4A5C4D] group-hover:text-[#2C3830] transition-colors text-center">{client.name}</p>
                <p className="text-[10px] text-[#8A9B8D] uppercase tracking-widest mt-1">{client.sector}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[#D5CCBE]/30">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#2C3830]">500<span className="text-[#7CB394]">+</span></p>
              <p className="text-xs text-[#7A8C7D] uppercase tracking-wider mt-1">Empresas atendidas</p>
            </div>
            <div className="w-px h-10 bg-[#D5CCBE]/30 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-[#2C3830]">8<span className="text-[#DBA07A]">+</span></p>
              <p className="text-xs text-[#7A8C7D] uppercase tracking-wider mt-1">Sectores industriales</p>
            </div>
            <div className="w-px h-10 bg-[#D5CCBE]/30 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-[#2C3830]">99<span className="text-[#7CB394]">%</span></p>
              <p className="text-xs text-[#7A8C7D] uppercase tracking-wider mt-1">Satisfacción de clientes</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Componente: Nuestros Números (como Séché Group — contadores animados)
function NumbersSection() {
  const NUMBERS = [
    { value: 500, suffix: '+', label: 'Clientes', sublabel: 'de diversas industrias', color: '#7CB394', icon: Users },
    { value: 900, suffix: '+', label: 'Colaboradores', sublabel: 'a nivel nacional', color: '#DBA07A', icon: TrendingUp },
    { value: 25, suffix: 'K+', label: 'Toneladas', sublabel: 'de capacidad de tratamiento', color: '#7CB394', icon: Recycle },
    { value: 15, suffix: '+', label: 'Años', sublabel: 'de experiencia operativa', color: '#DBA07A', icon: Clock },
  ];

  return (
    <section className="relative py-20 px-8 bg-[#2C3830] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #7CB394 1px, transparent 0)',
        backgroundSize: '30px 30px'
      }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7CB394]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#DBA07A]/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <p className="text-center text-xs text-[#7CB394] uppercase tracking-[0.3em] mb-3">Nuestro Impacto</p>
          <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-16">
            Nuestros <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">Números</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {NUMBERS.map((item, i) => {
            const [ref, count] = useAnimatedCounter(item.value);
            const IconComp = item.icon;
            return (
              <div key={i} ref={ref} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}20`, border: `1.5px solid ${item.color}40` }}>
                  <IconComp className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                  {count}<span style={{ color: item.color }}>{item.suffix}</span>
                </p>
                <p className="text-base font-semibold text-white/90 uppercase tracking-wider">{item.label}</p>
                <p className="text-xs text-white/50 mt-1">{item.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Componente: ¿Por qué elegirnos? (como Eco Misti / Veolia)
function WhyChooseUsSection() {
  const reasons = [
    { icon: Shield, title: 'Seguridad Garantizada', description: 'Infraestructura autorizada por MINAM con los más altos estándares de seguridad ambiental y ocupacional.', color: '#7CB394' },
    { icon: CheckCircle, title: 'Cumplimiento Normativo', description: 'Gestión 100% conforme a la legislación ambiental peruana e internacional. Certificaciones ISO vigentes.', color: '#DBA07A' },
    { icon: Zap, title: 'Trazabilidad Total', description: 'Seguimiento en tiempo real de cada residuo desde la recolección hasta la disposición final certificada.', color: '#7CB394' },
    { icon: Leaf, title: 'Compromiso Ambiental', description: 'Promovemos la economía circular y la valorización de residuos para un futuro sostenible.', color: '#DBA07A' },
    { icon: Users, title: 'Equipo Especializado', description: 'Personal altamente capacitado con experiencia en las industrias más exigentes del Perú.', color: '#7CB394' },
    { icon: TrendingUp, title: 'Tecnología de Punta', description: 'Sistemas de monitoreo y gestión automatizados para máxima eficiencia operativa.', color: '#DBA07A' },
  ];

  return (
    <section className="relative py-24 px-8 bg-gradient-to-b from-[#F7F4EF] via-[#EDF5F0] to-[#F7F4EF]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7CB394]/25 bg-white/60 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#7CB394]" />
              <span className="text-xs text-[#5E9474] uppercase tracking-widest font-medium">Ventajas Competitivas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3830] mb-6">
              ¿Por qué elegir <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">SMA</span>?
            </h2>
            <p className="text-[#5A6E5E] text-lg leading-relaxed">
              Somos socios estratégicos de nuestros clientes, sumando a la sostenibilidad de su gestión empresarial con soluciones innovadoras y confiables.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const IconComp = reason.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative bg-white rounded-2xl p-8 border border-[#D5CCBE]/25 shadow-sm hover:shadow-lg hover:border-[#7CB394]/25 transition-all duration-500 h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${reason.color}08, ${reason.color}15)` }} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${reason.color}15`, border: `1.5px solid ${reason.color}30` }}>
                      <IconComp className="w-6 h-6" style={{ color: reason.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#2C3830] mb-3">{reason.title}</h3>
                    <p className="text-sm text-[#5A6E5E] leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Componente: Certificaciones (como Eco Misti)
function CertificationsSection() {
  const certs = [
    { name: 'ISO 14001', desc: 'Sistema de Gestión Ambiental', color: '#7CB394' },
    { name: 'ISO 9001', desc: 'Sistema de Gestión de Calidad', color: '#DBA07A' },
    { name: 'ISO 45001', desc: 'Seguridad y Salud en el Trabajo', color: '#7CB394' },
    { name: 'MINAM', desc: 'Autorización de Funcionamiento', color: '#DBA07A' },
    { name: 'INACAL', desc: 'Calibración Certificada', color: '#7CB394' },
    { name: 'DIGESA', desc: 'Registro Sanitario', color: '#DBA07A' },
  ];

  return (
    <section className="relative py-20 px-8 bg-gradient-to-b from-[#EFF3EC] to-[#F7F4EF]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs text-[#7A8C7D] uppercase tracking-[0.3em] mb-3">Respaldo Normativo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3830]">
              Nuestras <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">Certificaciones</span>
            </h2>
            <p className="text-[#5A6E5E] mt-4 max-w-2xl mx-auto">
              Contamos con las autorizaciones legales y certificaciones necesarias para cada uno de nuestros procesos.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certs.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 80}>
              <div className="group text-center bg-white rounded-2xl p-6 border border-[#D5CCBE]/25 shadow-sm hover:shadow-md hover:border-[#7CB394]/25 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${cert.color}12`, border: `2px solid ${cert.color}30` }}>
                  <Award className="w-7 h-7" style={{ color: cert.color }} />
                </div>
                <p className="text-sm font-bold text-[#2C3830]">{cert.name}</p>
                <p className="text-[10px] text-[#7A8C7D] mt-1 leading-tight">{cert.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente: Formulario de Cotización (como Eco Misti)
function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-24 px-8 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/proceso-disposicion.jpg" alt="Gestión ambiental" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EF]/[0.93] via-[#EFF3EC]/[0.90] to-[#F7F4EF]/[0.95]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7CB394]/25 bg-white/60 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#DBA07A]" />
                <span className="text-xs text-[#DBA07A] uppercase tracking-widest font-medium">Contacto</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C3830] mb-6">
                Cotiza tu <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">servicio</span>
              </h2>
              <p className="text-[#5A6E5E] text-lg leading-relaxed mb-10">
                Solicita una cotización personalizada. Nuestro equipo de especialistas te contactará para diseñar la solución ambiental ideal para tu empresa.
              </p>

              <div className="space-y-5">
                <a href="tel:+51XXXXXXXXX" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#7CB394]/10 border border-[#7CB394]/25 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-[#7CB394]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8C7D]">Teléfono</p>
                    <p className="font-semibold text-[#2C3830]">+51 XXX XXX XXX</p>
                  </div>
                </a>
                <a href="mailto:contacto@sma.com.pe" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#DBA07A]/10 border border-[#DBA07A]/25 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#DBA07A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8C7D]">Email</p>
                    <p className="font-semibold text-[#2C3830]">contacto@sma.com.pe</p>
                  </div>
                </a>
                <a href="https://wa.me/51XXXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#7CB394]/10 border border-[#7CB394]/25 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-[#7CB394]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8C7D]">WhatsApp</p>
                    <p className="font-semibold text-[#2C3830]">Escríbenos directamente</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-[#D5CCBE]/20">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#7CB394]/15 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[#7CB394]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3830] mb-3">¡Mensaje enviado!</h3>
                  <p className="text-[#5A6E5E]">Nuestro equipo te contactará dentro de las próximas 24 horas.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#2C3830] mb-6">Solicitar Cotización</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#5A6E5E] uppercase tracking-wider mb-2">Nombre</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-[#D5CCBE]/40 bg-[#F7F4EF]/50 text-[#2C3830] placeholder-[#9AA89C] focus:outline-none focus:border-[#7CB394] focus:ring-2 focus:ring-[#7CB394]/20 transition-all text-sm" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#5A6E5E] uppercase tracking-wider mb-2">Empresa</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-[#D5CCBE]/40 bg-[#F7F4EF]/50 text-[#2C3830] placeholder-[#9AA89C] focus:outline-none focus:border-[#7CB394] focus:ring-2 focus:ring-[#7CB394]/20 transition-all text-sm" placeholder="Nombre de empresa" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#5A6E5E] uppercase tracking-wider mb-2">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-[#D5CCBE]/40 bg-[#F7F4EF]/50 text-[#2C3830] placeholder-[#9AA89C] focus:outline-none focus:border-[#7CB394] focus:ring-2 focus:ring-[#7CB394]/20 transition-all text-sm" placeholder="correo@empresa.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#5A6E5E] uppercase tracking-wider mb-2">Teléfono</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-xl border border-[#D5CCBE]/40 bg-[#F7F4EF]/50 text-[#2C3830] placeholder-[#9AA89C] focus:outline-none focus:border-[#7CB394] focus:ring-2 focus:ring-[#7CB394]/20 transition-all text-sm" placeholder="+51 XXX XXX XXX" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#5A6E5E] uppercase tracking-wider mb-2">Servicio de interés</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-[#D5CCBE]/40 bg-[#F7F4EF]/50 text-[#2C3830] focus:outline-none focus:border-[#7CB394] focus:ring-2 focus:ring-[#7CB394]/20 transition-all text-sm">
                        <option value="">Seleccionar servicio</option>
                        <option value="gestion-residuos">Gestión Integral de Residuos</option>
                        <option value="sitios-contaminados">Manejo de Sitios Contaminados</option>
                        <option value="consultoria">Consultoría Ambiental</option>
                        <option value="optimizacion">Optimización de Operaciones</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#5A6E5E] uppercase tracking-wider mb-2">Mensaje</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-[#D5CCBE]/40 bg-[#F7F4EF]/50 text-[#2C3830] placeholder-[#9AA89C] focus:outline-none focus:border-[#7CB394] focus:ring-2 focus:ring-[#7CB394]/20 transition-all text-sm resize-none" placeholder="Describe brevemente tu necesidad..." />
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(124,179,148,0.3)] text-base shadow-md" style={{ background: 'linear-gradient(135deg, #7CB394, #6BA37D)' }}>
                      Enviar solicitud
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Componente: Botón flotante WhatsApp
function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/51XXXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 left-8 z-40 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
      <span className="hidden sm:block pr-5 text-sm font-semibold">
        Escríbenos
      </span>
    </a>
  );
}

// Componente: Botón scroll-to-top
function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center border border-[#D5CCBE]/40 bg-white/80 backdrop-blur-md text-[#2C3830] shadow-md transition-all duration-500 hover:border-[#7CB394]/50 hover:shadow-lg ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

// Componente: Footer
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { label: 'Por qué SMA?', href: '#axis-trazabilidad' },
        { label: 'Nuestro Proceso', href: '#process' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Contacto', href: '#contacto' },
      ]
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Gestión de Residuos', href: '#servicios' },
        { label: 'Sitios Contaminados', href: '#servicios' },
        { label: 'Consultoría Ambiental', href: '#servicios' },
        { label: 'Optimización', href: '#servicios' },
      ]
    },
  ];

  return (
    <footer className="relative bg-[#2C3830] border-t border-[#3a4d3f]">
      {/* Gradiente superior decorativo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7CB394]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        {/* Contenido principal del footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Logo + descripción */}
          <div className="lg:col-span-2">
            <Image
              src="/logo_sma_111.png"
              alt="SMA - Servicios Medio Ambientales"
              width={120}
              height={70}
              className="mb-6 opacity-90"
            />
            <p className="text-[#a3b5a8] leading-relaxed max-w-md mb-8">
              Servicios Medio Ambientales S.A.C. — Relleno de seguridad autorizado por MINAM.
              Gestión integral de residuos peligrosos con trazabilidad 360° y cumplimiento normativo garantizado.
            </p>
            <div className="space-y-3">
              <a href="tel:+51XXXXXXXXX" className="flex items-center gap-3 text-[#a3b5a8] hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-[#7CB394] group-hover:scale-110 transition-transform" />
                <span className="text-sm">+51 XXX XXX XXX</span>
              </a>
              <a href="mailto:contacto@sma.com.pe" className="flex items-center gap-3 text-[#a3b5a8] hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-[#DBA07A] group-hover:scale-110 transition-transform" />
                <span className="text-sm">contacto@sma.com.pe</span>
              </a>
              <div className="flex items-start gap-3 text-[#a3b5a8]">
                <MapPinIcon className="w-4 h-4 text-[#7CB394] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Cols de links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-[#8a9e8f] hover:text-white transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-[#5a7360] group-hover:text-[#7CB394] group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barra inferior */}
        <div className="py-6 border-t border-[#3a4d3f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b8370]">
            © {currentYear} SMA — Servicios Medio Ambientales S.A.C. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-[#5a7360] uppercase tracking-widest">Autorizado por MINAM</span>
            <div className="w-1 h-1 rounded-full bg-[#7CB394]" />
            <span className="text-[10px] text-[#5a7360] uppercase tracking-widest">ISO 14001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Componente Principal
export default function SMAIntegration() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = scrollTop / docHeight;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F4EF] text-[#2C3830] overflow-hidden" suppressHydrationWarning>
      <ProgressBar progress={scrollProgress} />
      <NavHeader />
      <GearHero />
      {AXES_DATA.map((axis, index) => (
        <AxisSection key={axis.id} axis={axis} index={index} />
      ))}
      <NumbersSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <ProcessSection />
      <CertificationsSection />
      <ContactFormSection />
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}
