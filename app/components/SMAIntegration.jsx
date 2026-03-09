'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, Zap, MapPin, Award, Briefcase } from 'lucide-react';

// Datos de configuración
const AXES_DATA = [
  {
    id: 'trazabilidad',
    title: 'Trazabilidad',
    icon: Zap,
    color: '#4A7C34',
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
    color: '#E87722',
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
    color: '#4A7C34',
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
    color: '#E87722',
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
    color: '#4A7C34'
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
    color: '#E87722'
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
    color: '#4A7C34'
  }
];

// Helper: genera un path SVG de engranaje
function gearPath(cx, cy, outerR, innerR, teeth) {
  const pts = [];
  const step = Math.PI / teeth;
  const toothDepth = outerR - innerR;
  const tipWidth = 0.35;
  for (let i = 0; i < teeth * 2; i++) {
    const angle = i * step - Math.PI / 2;
    if (i % 2 === 0) {
      // base del diente (radio interno)
      pts.push([cx + innerR * Math.cos(angle - step * tipWidth), cy + innerR * Math.sin(angle - step * tipWidth)]);
      // punta del diente (radio externo)
      pts.push([cx + outerR * Math.cos(angle + step * 0.15), cy + outerR * Math.sin(angle + step * 0.15)]);
      pts.push([cx + outerR * Math.cos(angle + step * 0.85), cy + outerR * Math.sin(angle + step * 0.85)]);
    } else {
      // valle entre dientes
      pts.push([cx + innerR * Math.cos(angle + step * tipWidth), cy + innerR * Math.sin(angle + step * tipWidth)]);
    }
  }
  return 'M' + pts.map(p => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' L') + ' Z';
}

// Componente: Barra de Progreso
function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#4A7C34] to-[#E87722] transition-all duration-300"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

// Componente: Engranajes Hero
function GearHero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a08] via-black to-[#1a0f08] opacity-60" />
      
      {/* Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, #4A7C34 25%, #4A7C34 26%, transparent 27%, transparent 74%, #4A7C34 75%, #4A7C34 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #4A7C34 25%, #4A7C34 26%, transparent 27%, transparent 74%, #4A7C34 75%, #4A7C34 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="relative w-96 h-96">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Engranaje central grande - verde */}
            <g opacity="0.9" className="gear-cw" style={{ transformOrigin: '200px 200px' }}>
              <path d={gearPath(200, 200, 85, 68, 12)} fill="none" stroke="#4A7C34" strokeWidth="2" filter="url(#glow)" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="#4A7C34" strokeWidth="1.5" opacity="0.6" />
              <circle cx="200" cy="200" r="15" fill="none" stroke="#4A7C34" strokeWidth="2" opacity="0.8" />
            </g>

            {/* Engranaje superior derecho - naranja */}
            <g opacity="0.75" className="gear-ccw" style={{ transformOrigin: '295px 115px' }}>
              <path d={gearPath(295, 115, 62, 48, 10)} fill="none" stroke="#E87722" strokeWidth="2" filter="url(#glow)" />
              <circle cx="295" cy="115" r="35" fill="none" stroke="#E87722" strokeWidth="1" opacity="0.5" />
              <circle cx="295" cy="115" r="10" fill="none" stroke="#E87722" strokeWidth="1.5" opacity="0.7" />
            </g>

            {/* Engranaje inferior derecho - verde */}
            <g opacity="0.75" className="gear-cw-slow" style={{ transformOrigin: '290px 290px' }}>
              <path d={gearPath(290, 290, 58, 45, 9)} fill="none" stroke="#4A7C34" strokeWidth="2" filter="url(#glow)" />
              <circle cx="290" cy="290" r="32" fill="none" stroke="#4A7C34" strokeWidth="1" opacity="0.5" />
              <circle cx="290" cy="290" r="10" fill="none" stroke="#4A7C34" strokeWidth="1.5" opacity="0.7" />
            </g>

            {/* Engranaje izquierdo - naranja */}
            <g opacity="0.75" className="gear-ccw-slow" style={{ transformOrigin: '110px 200px' }}>
              <path d={gearPath(110, 200, 60, 47, 10)} fill="none" stroke="#E87722" strokeWidth="2" filter="url(#glow)" />
              <circle cx="110" cy="200" r="34" fill="none" stroke="#E87722" strokeWidth="1" opacity="0.5" />
              <circle cx="110" cy="200" r="10" fill="none" stroke="#E87722" strokeWidth="1.5" opacity="0.7" />
            </g>

            {/* Líneas conectoras */}
            <line x1="200" y1="200" x2="295" y2="115" stroke="#4A7C34" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="290" y2="290" stroke="#4A7C34" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="110" y2="200" stroke="#E87722" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="SMA - Servicios Medio Ambientales"
                  width={307}
                  height={188}
                  className="mx-auto drop-shadow-[0_0_15px_rgba(74,124,52,0.4)]"
                  priority
                />
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#4A7C34] to-[#E87722] bg-clip-text text-transparent">
                360°
              </h1>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Integración Total</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Descubre más</p>
          <ChevronDown className="w-5 h-5 text-[#4A7C34]" />
        </div>
      </div>

    </section>
  );
}

// Componente: Sección de Eje
function AxisSection({ axis, index }) {
  const IconComponent = axis.icon;

  return (
    <section
      data-section={`axis-${axis.id}`}
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Imagen full-bleed */}
        <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <Image
            src={axis.image}
            alt={axis.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to ${index % 2 === 0 ? 'right' : 'left'}, ${axis.color}40, transparent 60%)` }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Contenido */}
        <div className={`relative flex items-center bg-gradient-to-b from-[#0d0d0d] to-black ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="px-8 py-16 lg:px-16 lg:py-20 max-w-xl mx-auto lg:mx-0 w-full">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${axis.color}20`, border: `2px solid ${axis.color}` }}
              >
                <IconComponent className="w-7 h-7" style={{ color: axis.color }} />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold">{axis.title}</h2>
                <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">{axis.description}</p>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              {axis.details}
            </p>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: axis.color }}>Características</h3>
              {axis.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 group cursor-pointer">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"
                    style={{ backgroundColor: axis.color }}
                  />
                  <p className="text-gray-300 group-hover:text-white transition-colors">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente: Sección de Procesos
function ProcessSection() {
  return (
    <section data-section="process" className="relative">
      {/* Título */}
      <div className="bg-gradient-to-b from-black via-[#0a1a08] to-black py-20 px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Nuestro Proceso SMA</h2>
          <p className="text-gray-400 text-lg">
            Un sistema de tres pasos diseñado para garantizar la tranquilidad de tu empresa y el cuidado del planeta
          </p>
        </div>
      </div>

      {/* Pasos del proceso */}
      {PROCESS_STEPS.map((step, index) => (
        <div key={index} data-step={index} className="relative">
          {/* Banner de imagen full-width con overlay de texto */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${step.color}30, transparent 60%)` }}
            />

            {/* Contenido sobre la imagen */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl mx-auto w-full px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="text-6xl md:text-7xl font-bold"
                        style={{ color: step.color, textShadow: `0 0 40px ${step.color}50` }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>

                  <div className="space-y-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-4 bg-black/30 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10">
                        <div
                          className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        />
                        <p className="text-gray-200">{detail}</p>
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

// Componente: CTA Final
function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-8 bg-gradient-to-b from-black to-[#0a1a08]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #4A7C34 0%, transparent 50%), radial-gradient(circle at 80% 80%, #E87722 0%, transparent 50%)',
          opacity: 0.5
        }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Integración <span className="bg-gradient-to-r from-[#4A7C34] to-[#E87722] bg-clip-text text-transparent">360°</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Trazabilidad total, ubicación en tiempo real, certificaciones vigentes y experiencia en múltiples sectores.
          La solución completa para la disposición final de tus residuos.
        </p>
        <a
          href="https://wa.me/51XXXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 text-white"
          style={{
            background: 'linear-gradient(135deg, #4A7C34, #E87722)',
          }}
        >
          Contáctanos Hoy
        </a>
      </div>
    </section>
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
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      <ProgressBar progress={scrollProgress} />
      <GearHero />
      {AXES_DATA.map((axis, index) => (
        <AxisSection key={axis.id} axis={axis} index={index} />
      ))}
      <ProcessSection />
      <CTASection />
    </div>
  );
}
