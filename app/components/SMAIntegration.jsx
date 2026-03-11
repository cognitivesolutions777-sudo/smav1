'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Zap, MapPin, Award, Briefcase, Recycle, Shield, FileText, Settings, Phone, Mail, MapPinIcon, ArrowUp, ChevronRight, CheckCircle, TrendingUp, Users, Clock, Leaf, MessageCircle, Send, BarChart3, Target, Factory } from 'lucide-react';

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
    id: 'resumen-ejecutivo',
    title: 'Resumen Ejecutivo',
    icon: Briefcase,
    color: '#7CB394',
    image: '/Trazabilidad_111.png',
    description: 'Quiénes somos',
    details: 'En Servicios Medioambientales S.A. (SMA), entendemos que la gestión de residuos peligrosos del ámbito no municipal es uno de los mayores desafíos críticos para la industria peruana. Nuestra operación nace para cerrar la brecha de infraestructura técnica en el país, ofreciendo un destino final que garantiza la discontinuidad del riesgo legal y ambiental para nuestros socios estratégicos.',
    features: [
      'Custodia de residuos bajo modelo de Ingeniería de Confinamiento',
      'Aseguramiento de cada etapa del proceso',
      'Desde la recepción hasta la disposición final',
      'Discontinuidad del riesgo legal y ambiental'
    ]
  },
  {
    id: 'infraestructura',
    title: 'Infraestructura',
    icon: MapPin,
    color: '#DBA07A',
    image: '/ubicacion.jpg',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122048.30773498626!2d-75.78726839453124!3d-14.066354899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e301c4d0e76b%3A0xa5b0d14028a5ab4a!2sIca%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1',
    description: 'Relleno de Seguridad Ica',
    details: 'Nuestra planta, ubicada estratégicamente en el Km 255.5 de la Panamericana Sur (Ica), es una infraestructura diseñada para el aislamiento total y definitivo de materiales peligrosos.',
    features: [
      'Impermeabilización con geomembranas HDPE (polietileno de alta densidad)',
      'Sistema de barreras múltiples de protección',
      'Control de estabilidad geotécnica supervisado',
      'Coberturas diarias que previenen dispersión de partículas'
    ]
  },
  {
    id: 'gestion-operativa',
    title: 'Gestión Operativa',
    icon: Zap,
    color: '#7CB394',
    image: '/certificaciones.jpg',
    description: 'Trazabilidad y control riguroso',
    details: 'Hemos optimizado nuestras operaciones para brindar transparencia absoluta. El residuo peligroso no municipal atraviesa un flujo de control riguroso desde el ingreso hasta la disposición final.',
    features: [
      'Gestión documentaria: Manifiestos y Guías de Remisión verificados',
      'Balanza electrónica de 80 Tn certificada por INACAL',
      'Certificado de Disposición Final emitido al cierre',
      'Trazabilidad total: reportes detallados en tiempo real'
    ]
  },
  {
    id: 'sectores',
    title: 'Sectores',
    icon: Factory,
    color: '#DBA07A',
    image: '/sectores.jpg',
    description: 'Sectores de alto impacto',
    details: 'Nuestros principales clientes pertenecen a los sectores industriales más exigentes del Perú. Brindamos soluciones de confinamiento especializadas para cada tipo de residuo peligroso.',
    features: [
      '⛏️ Minería y Metalurgia',
      '⚡ Energía e Hidrocarburos',
      '🌾 Agroindustria',
      '🏭 Manufactura y Química'
    ],
    sectorSlides: [
      { emoji: '⛏️', title: 'Minería y Metalurgia', desc: 'Confinamiento de lodos industriales, relaves de proceso y reactivos químicos caducos.', gradient: 'from-[#B09878] to-[#8A7858]' },
      { emoji: '⚡', title: 'Energía e Hidrocarburos', desc: 'Gestión de suelos contaminados por hidrocarburos, aceites usados y residuos de generación eléctrica.', gradient: 'from-[#DBA07A] to-[#C48B62]' },
      { emoji: '🌾', title: 'Agroindustria', desc: 'Manejo de envases críticos de agroquímicos con triple lavado y residuos químicos derivados del procesamiento agrícola.', gradient: 'from-[#7CB394] to-[#5E9474]' },
      { emoji: '🏭', title: 'Manufactura y Química', desc: 'Disposición de solventes, pinturas, resinas y materiales con características de peligrosidad.', gradient: 'from-[#8BADB8] to-[#6B8D98]' }
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
    title: 'Gestión Documentaria',
    icon: '📋',
    image: '/proceso-ingreso.jpg',
    description: 'Verificación exhaustiva de Manifiestos y Guías de Remisión',
    details: [
      'Validación de Manifiestos de Residuos Sólidos Peligrosos',
      'Verificación de Guías de Remisión debidamente llenadas',
      'Confirmación de residuos vs. documentación antes del ingreso',
      'Autorización de ingreso a celdas de confinamiento'
    ],
    color: '#7CB394'
  },
  {
    number: '02',
    title: 'Precisión Metrológica',
    icon: '⚖️',
    image: '/proceso-pesaje.jpg',
    description: 'Balanza electrónica de 80 Tn certificada por INACAL',
    details: [
      'Balanza de alta capacidad calibrada por laboratorio acreditado ante INACAL',
      'Peso reportado = peso real para declaraciones SIGERSOL',
      'Pesaje al ingreso y salida del vehículo',
      'Comprobante con información exacta y certificada'
    ],
    color: '#DBA07A'
  },
  {
    number: '03',
    title: 'Disposición Final y Certificación',
    icon: '🛡️',
    image: '/proceso-disposicion.jpg',
    description: 'Confinamiento seguro y emisión de Certificado de Disposición Final',
    details: [
      'Confinamiento en celdas con geomembranas HDPE',
      'Coberturas diarias para seguridad ambiental',
      'Emisión del Certificado de Disposición Final',
      'Trazabilidad total desde el ingreso hasta la disposición final'
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
    { label: 'Nosotros', href: '#axis-resumen-ejecutivo' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#process' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[#D5CCBE]/30 py-2 shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Image
            src="/logo_sma_111.png"
            alt="SMA - Servicios Medio Ambientales"
            width={160}
            height={50}
            className={`transition-all duration-500 ${scrolled ? 'drop-shadow-none' : 'drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]'}`}
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-[#5A6E5E] hover:text-[#2C3830]'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/51XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-6 py-2.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(124,179,148,0.4)]"
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
            <span className={`block h-[2px] w-full rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[9px] bg-[#2C3830]' : scrolled ? 'bg-[#2C3830]' : 'bg-white'}`} />
            <span className={`block h-[2px] w-full rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0 bg-[#2C3830]' : scrolled ? 'bg-[#2C3830]' : 'bg-white'}`} />
            <span className={`block h-[2px] w-full rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[9px] bg-[#2C3830]' : scrolled ? 'bg-[#2C3830]' : 'bg-white'}`} />
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
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-bg.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay oscuro + tinte verde para legibilidad y branding */}
        <div className="absolute inset-0 bg-[#2C3830]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3830]/70 via-[#2C3830]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2420]/80 via-transparent to-[#2C3830]/30" />
      </div>

      {/* Layout principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-56 lg:pb-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Columna izquierda: Texto + CTA */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7CB394]/40 bg-white/10 backdrop-blur-sm mb-8 animate-fade-in-up shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#7CB394] animate-pulse" />
              <span className="text-xs text-[#A8D5BA] uppercase tracking-widest font-medium">Relleno de Seguridad Autorizado por MINAM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 text-white animate-fade-in-up animation-delay-200">
              Bienvenidos a SMA:{' '}
              <span className="bg-gradient-to-r from-[#7CB394] via-[#A8D5BA] to-[#DBA07A] bg-clip-text text-transparent">
                El Relleno de Seguridad de Ica
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-4 max-w-xl animate-fade-in-up animation-delay-400">
              No gestionamos residuos; confinamos riesgos y blindamos tu responsabilidad ambiental.
              Ingeniería de Confinamiento con trazabilidad completa y cumplimiento ambiental garantizado.
            </p>

            <p className="text-sm text-[#A8D5BA] font-semibold uppercase tracking-wider mb-10 animate-fade-in-up animation-delay-400">
              ⛏️ Minería · ⚡ Energía · 🌾 Agroindustria · 🏭 Manufactura
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
                href="#axis-resumen-ejecutivo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:border-[#7CB394]/60 hover:bg-white/10 transition-all duration-300 text-base backdrop-blur-sm shadow-sm"
              >
                Conócenos
              </a>
            </div>

            {/* Stats de confianza — con fondo tarjeta */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-800">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15 shadow-sm text-center">
                <p className="text-2xl lg:text-3xl font-bold text-white">15<span className="text-[#7CB394]">+</span></p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider mt-1">Años de experiencia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15 shadow-sm text-center">
                <p className="text-2xl lg:text-3xl font-bold text-white">500<span className="text-[#DBA07A]">+</span></p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider mt-1">Empresas atendidas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15 shadow-sm text-center">
                <p className="text-2xl lg:text-3xl font-bold text-white">100<span className="text-[#7CB394]">%</span></p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider mt-1">Norma cumplida</p>
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
                <circle cx="200" cy="200" r="130" fill="none" stroke="#7CB394" strokeWidth="0.5" opacity="0.4" strokeDasharray="8,12" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="#DBA07A" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,16" />
              </svg>}

              {/* Badge central 360° */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#6BA37D] via-[#DBA07A] to-[#7CB394] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,179,148,0.2)]">
                    360°
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-[0.25em] mt-2 text-white/80">
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
        <a href="#axis-resumen-ejecutivo" className="flex flex-col items-center gap-2 group">
          <p className="text-[10px] text-white/60 uppercase tracking-[0.25em] group-hover:text-white/80 transition-colors">Descubre más</p>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1.5 group-hover:border-white/50 transition-colors bg-white/10">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

// Componente: Carrusel de Sectores
function SectorCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const intervalRef = useRef(null);

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
            i === current
              ? 'opacity-100 translate-x-0 scale-100'
              : i === (current - direction + slides.length) % slides.length
              ? `opacity-0 ${direction > 0 ? '-translate-x-full' : 'translate-x-full'} scale-95`
              : `opacity-0 ${direction > 0 ? 'translate-x-full' : '-translate-x-full'} scale-95`
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '28px 28px'
          }} />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 max-w-md">
            <span className="text-7xl sm:text-8xl lg:text-9xl mb-6 drop-shadow-lg">{slide.emoji}</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-md">{slide.title}</h3>
            <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
        aria-label="Sector anterior"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
        aria-label="Siguiente sector"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            aria-label={`Ir a sector ${i + 1}`}
          />
        ))}
      </div>
    </div>
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
        {/* Imagen, Mapa embebido o Carrusel de sectores */}
        <Reveal direction={index % 2 === 0 ? 'left' : 'right'} className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <div className="relative overflow-hidden h-[350px] sm:h-[400px] lg:h-[700px]">
            {axis.sectorSlides ? (
              <SectorCarousel slides={axis.sectorSlides} />
            ) : axis.mapEmbed ? (
              <iframe
                src={axis.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación SMA"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
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
              </>
            )}
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
                  <div className="space-y-3 mb-8">
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

                  {/* CTA del servicio */}
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: service.color }}
                  >
                    {index === 0 ? 'Ver solución' : index === 1 ? 'Solicitar evaluación' : index === 2 ? 'Consultar ahora' : 'Optimizar operación'}
                    <ChevronRight className="w-4 h-4" />
                  </a>
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
    { value: 500, suffix: '+', label: 'Empresas industriales', sublabel: 'atendidas en todo el Perú', color: '#7CB394', icon: Users },
    { value: 25, suffix: 'K+', label: 'Toneladas gestionadas', sublabel: 'de residuos peligrosos tratados', color: '#DBA07A', icon: Recycle },
    { value: 15, suffix: '+', label: 'Años de operación', sublabel: 'ambiental certificada', color: '#7CB394', icon: Clock },
    { value: 900, suffix: '+', label: 'Profesionales', sublabel: 'especializados en medio ambiente', color: '#DBA07A', icon: TrendingUp },
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
    { icon: Shield, title: 'Seguridad Garantizada', description: 'Infraestructura autorizada por MINAM con los más altos estándares de seguridad ambiental y ocupacional según ISO 45001.', color: '#7CB394', badge: 'ISO 45001' },
    { icon: CheckCircle, title: 'Cumplimiento Normativo', description: 'Gestión conforme al DS 014-2017-MINAM y la Ley de Gestión Integral de Residuos Sólidos. Certificaciones ISO vigentes.', color: '#DBA07A', badge: 'DS 014-2017' },
    { icon: Zap, title: 'Trazabilidad Total', description: 'Seguimiento en tiempo real de cada residuo desde la recolección hasta la disposición final certificada.', color: '#7CB394', badge: 'Tiempo real' },
    { icon: Leaf, title: 'Compromiso Ambiental', description: 'Promovemos la economía circular y la valorización de residuos conforme a la normativa ambiental peruana.', color: '#DBA07A', badge: 'ISO 14001' },
    { icon: Users, title: 'Equipo Especializado', description: 'Personal altamente capacitado con experiencia en las industrias más exigentes del Perú.', color: '#7CB394', badge: '900+ profesionales' },
    { icon: TrendingUp, title: 'Tecnología de Punta', description: 'Sistemas de monitoreo y gestión automatizados conforme a los estándares ISO 9001 para máxima eficiencia.', color: '#DBA07A', badge: 'ISO 9001' },
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
                    <h3 className="text-lg font-bold text-[#2C3830] mb-2">{reason.title}</h3>
                    {reason.badge && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2" style={{ backgroundColor: `${reason.color}15`, color: reason.color }}>
                        {reason.badge}
                      </span>
                    )}
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
    { name: 'EO-RS MINAM', desc: 'EO-RS-00198-2021-MINAM/VMGA/DGRS', color: '#7CB394' },
    { name: 'Relleno Autorizado', desc: 'Res. Nº 00678-2021-MINAM/VMGA/DGRS', color: '#DBA07A' },
    { name: 'EIA SENACE', desc: 'Res. Nº 0071-2020-SENACE-PE/DEIN', color: '#7CB394' },
    { name: 'INACAL', desc: 'Calibración Certificada de Balanza', color: '#DBA07A' },
  ];

  return (
    <section className="relative py-20 px-8 bg-gradient-to-b from-[#EFF3EC] to-[#F7F4EF]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs text-[#7A8C7D] uppercase tracking-[0.3em] mb-3">Respaldo Institucional</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3830]">
              Marco <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">Regulatorio</span>
            </h2>
            <p className="text-[#5A6E5E] mt-4 max-w-2xl mx-auto">
              La empresa opera bajo las siguientes resoluciones de aprobación de las autoridades competentes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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

// Componente: Dashboard Ambiental — KPIs de impacto
function DashboardAmbientalSection() {
  const kpis = [
    { label: 'Toneladas tratadas', value: 25000, suffix: '+', unit: 'ton/año', icon: Recycle, color: '#7CB394', description: 'Residuos peligrosos procesados anualmente en nuestro relleno de seguridad' },
    { label: 'Reducción CO₂', value: 40, suffix: '%', unit: 'menos emisiones', icon: Leaf, color: '#DBA07A', description: 'Reducción de huella de carbono mediante procesos de valorización y reciclaje' },
    { label: 'Empresas monitoreadas', value: 500, suffix: '+', unit: 'clientes activos', icon: BarChart3, color: '#7CB394', description: 'Empresas con trazabilidad activa en nuestro sistema de gestión 360°' },
    { label: 'Cumplimiento normativo', value: 100, suffix: '%', unit: 'conformidad', icon: Shield, color: '#DBA07A', description: 'Índice de cumplimiento regulatorio en auditorías MINAM y OEFA' },
  ];

  return (
    <section className="relative py-24 px-8 bg-[#2C3830] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #7CB394 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7CB394]/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7CB394]/30 bg-[#7CB394]/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#7CB394] animate-pulse" />
              <span className="text-xs text-[#7CB394] uppercase tracking-widest font-medium">Impacto Ambiental</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dashboard <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">Ambiental</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Indicadores clave de nuestro desempeño ambiental. Transparencia y resultados medibles que respaldan nuestro compromiso con la sostenibilidad.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => {
            const [ref, count] = useAnimatedCounter(kpi.value);
            const IconComp = kpi.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <div ref={ref} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7CB394]/30 hover:bg-white/[0.08] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${kpi.color}20`, border: `1.5px solid ${kpi.color}40` }}>
                      <IconComp className="w-6 h-6" style={{ color: kpi.color }} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">{kpi.unit}</span>
                  </div>
                  <p className="text-4xl font-extrabold text-white mb-1">
                    {count}<span style={{ color: kpi.color }}>{kpi.suffix}</span>
                  </p>
                  <p className="text-sm font-semibold text-white/80 mb-2">{kpi.label}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{kpi.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Componente: Casos de Éxito — Carrusel Problema → Solución → Resultados
function CasosDeExitoSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const touchStartX = useRef(0);

  const casos = [
    {
      empresa: 'Minera Antamina',
      sector: 'Minería',
      color: '#7CB394',
      problema: 'Gestión de más de 3,000 toneladas anuales de residuos peligrosos mineros con requisitos estrictos de trazabilidad y cumplimiento normativo OEFA.',
      solucion: 'Implementación de sistema integral de gestión 360° con trazabilidad en tiempo real, disposición final certificada y reportería automatizada.',
      resultados: [
        '100% cumplimiento normativo en auditorías OEFA',
        'Reducción de 35% en costos de gestión de residuos',
        'Cero observaciones en fiscalizaciones ambientales',
      ]
    },
    {
      empresa: 'Cementos Pacasmayo',
      sector: 'Construcción',
      color: '#DBA07A',
      problema: 'Necesidad de gestión centralizada de residuos industriales en múltiples plantas con diferentes tipos de residuos peligrosos.',
      solucion: 'Programa de gestión multi-sitio con segregación en origen, transporte especializado y disposición diferenciada según tipo de residuo.',
      resultados: [
        'Gestión unificada de 5 plantas industriales',
        'Valorización del 20% de residuos previamente descartados',
        'Certificación ambiental en todos los sitios',
      ]
    },
    {
      empresa: 'Petroperú',
      sector: 'Energía',
      color: '#7CB394',
      problema: 'Remediación urgente de sitio contaminado con hidrocarburos y gestión de residuos petroleros bajo supervisión de OSINERGMIN.',
      solucion: 'Plan de remediación integral con tratamiento in-situ, monitoreo continuo de suelos y aguas subterráneas, y gestión de residuos RESPEL.',
      resultados: [
        'Remediación exitosa dentro de los plazos regulatorios',
        'Reducción de 60% en niveles de contaminación',
        'Aprobación total de informes ante OSINERGMIN',
      ]
    },
  ];

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % casos.length);
  }, [casos.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + casos.length) % casos.length);
  }, [casos.length]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const caso = casos[current];

  return (
    <section className="relative py-24 px-8 bg-gradient-to-b from-[#F7F4EF] via-[#EDF5F0] to-[#F7F4EF]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DBA07A]/25 bg-white/60 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#DBA07A]" />
              <span className="text-xs text-[#DBA07A] uppercase tracking-widest font-medium">Resultados Comprobados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3830] mb-6">
              Casos de <span className="bg-gradient-to-r from-[#7CB394] to-[#DBA07A] bg-clip-text text-transparent">Éxito</span>
            </h2>
            <p className="text-[#5A6E5E] text-lg leading-relaxed">
              Resultados reales con empresas líderes del Perú. Cada caso demuestra nuestro compromiso con la excelencia ambiental.
            </p>
          </div>
        </Reveal>

        {/* Carrusel */}
        <div
          className="relative"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
          }}
        >
          {/* Flechas de navegación */}
          <button
            onClick={prev}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#D5CCBE]/30 shadow-lg flex items-center justify-center text-[#2C3830] hover:border-[#7CB394]/50 hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Caso anterior"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#D5CCBE]/30 shadow-lg flex items-center justify-center text-[#2C3830] hover:border-[#7CB394]/50 hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Caso siguiente"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Slide activo */}
          <div className="overflow-hidden rounded-2xl">
            <div
              key={current}
              className="bg-white rounded-2xl border border-[#D5CCBE]/25 shadow-md transition-all duration-500 animate-fade-in-up"
            >
              {/* Header del caso */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-[#D5CCBE]/20" style={{ background: `linear-gradient(135deg, ${caso.color}08, transparent)` }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${caso.color}15`, border: `1.5px solid ${caso.color}30` }}>
                    <Target className="w-7 h-7" style={{ color: caso.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2C3830]">{caso.empresa}</h3>
                    <span className="text-xs uppercase tracking-widest font-medium" style={{ color: caso.color }}>{caso.sector}</span>
                  </div>
                </div>
                <span className="hidden sm:block text-sm font-medium text-[#9AA89C]">{current + 1} / {casos.length}</span>
              </div>

              {/* Contenido: Problema → Solución → Resultados */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-[#D5CCBE]/20">
                {/* Problema */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                      <span className="text-sm text-red-400 font-bold">!</span>
                    </div>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Problema</p>
                  </div>
                  <p className="text-[#5A6E5E] leading-relaxed">{caso.problema}</p>
                </div>

                {/* Solución */}
                <div className="p-8 lg:p-10 bg-[#F7F4EF]/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: `${caso.color}15` }}>
                      <Settings className="w-3.5 h-3.5" style={{ color: caso.color }} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: caso.color }}>Solución SMA</p>
                  </div>
                  <p className="text-[#5A6E5E] leading-relaxed">{caso.solucion}</p>
                </div>

                {/* Resultados */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full bg-[#7CB394]/10 flex items-center justify-center">
                      <CheckCircle className="w-3.5 h-3.5 text-[#7CB394]" />
                    </div>
                    <p className="text-xs font-bold text-[#7CB394] uppercase tracking-wider">Resultados</p>
                  </div>
                  <div className="space-y-3">
                    {caso.resultados.map((res, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: caso.color }} />
                        <p className="text-sm text-[#2C3830] font-medium leading-relaxed">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots de navegación */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {casos.map((c, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-10 h-3'
                    : 'w-3 h-3 hover:scale-125'
                }`}
                style={{
                  backgroundColor: i === current ? c.color : `${c.color}30`,
                }}
                aria-label={`Ver caso ${c.empresa}`}
              />
            ))}
          </div>
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
                <a href="mailto:contacto@sma.com.pe" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#DBA07A]/10 border border-[#DBA07A]/25 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#DBA07A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8C7D]">Email</p>
                    <p className="font-semibold text-[#2C3830]">contacto@sma.com.pe</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#7CB394]/10 border border-[#7CB394]/25">
                    <MapPinIcon className="w-5 h-5 text-[#7CB394]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8C7D]">Oficina Central</p>
                    <p className="font-semibold text-[#2C3830]">Calle Almirante Lord Nelson 354, Miraflores - Lima</p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/atuNT3foqYC2Ehq59" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#DBA07A]/10 border border-[#DBA07A]/25 group-hover:scale-110 transition-transform">
                    <MapPinIcon className="w-5 h-5 text-[#DBA07A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7A8C7D]">Ubicación del Relleno</p>
                    <p className="font-semibold text-[#2C3830]">Panamericana Sur Km 255.5, Salas - Ica</p>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#5A6E5E] uppercase tracking-wider mb-2">Industria</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-[#D5CCBE]/40 bg-[#F7F4EF]/50 text-[#2C3830] focus:outline-none focus:border-[#7CB394] focus:ring-2 focus:ring-[#7CB394]/20 transition-all text-sm">
                          <option value="">Seleccionar industria</option>
                          <option value="mineria">Minería y Metalurgia</option>
                          <option value="energia">Energía e Hidrocarburos</option>
                          <option value="agroindustria">Agroindustria</option>
                          <option value="manufactura">Manufactura y Química</option>
                          <option value="otros">Otros</option>
                        </select>
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
        { label: 'Nosotros', href: '#axis-resumen-ejecutivo' },
        { label: 'Infraestructura', href: '#axis-infraestructura' },
        { label: 'Nuestro Proceso', href: '#process' },
        { label: 'Contacto', href: '#contacto' },
      ]
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Disposición Final', href: '#servicios' },
        { label: 'Gestión Operativa', href: '#axis-gestion-operativa' },
        { label: 'Sectores', href: '#axis-sectores' },
        { label: 'Marco Regulatorio', href: '#servicios' },
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
              Servicios Medioambientales S.A. — Relleno de seguridad autorizado por MINAM.
              Confinamiento de residuos peligrosos con trazabilidad completa y cumplimiento normativo garantizado.
            </p>
            <div className="space-y-3">
              <a href="mailto:contacto@sma.com.pe" className="flex items-center gap-3 text-[#a3b5a8] hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-[#DBA07A] group-hover:scale-110 transition-transform" />
                <span className="text-sm">contacto@sma.com.pe</span>
              </a>
              <div className="flex items-start gap-3 text-[#a3b5a8]">
                <MapPinIcon className="w-4 h-4 text-[#7CB394] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Calle Almirante Lord Nelson 354, Miraflores - Lima</span>
              </div>
              <div className="flex items-start gap-3 text-[#a3b5a8]">
                <MapPinIcon className="w-4 h-4 text-[#DBA07A] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Panamericana Sur Km 255.5, Salas - Ica</span>
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
            © {currentYear} SMA — Servicios Medioambientales S.A. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-[#5a7360] uppercase tracking-widest">Autorizado por MINAM</span>
            <div className="w-1 h-1 rounded-full bg-[#7CB394]" />
            <span className="text-[10px] text-[#5a7360] uppercase tracking-widest">EIA SENACE Aprobado</span>
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
      <DashboardAmbientalSection />
      <CasosDeExitoSection />
      <ContactFormSection />
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}
