'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Zap, MapPin, Award, Briefcase } from 'lucide-react';

// Datos de configuración
const AXES_DATA = [
  {
    id: 'trazabilidad',
    title: 'Trazabilidad',
    icon: Zap,
    color: '#4A7C34',
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

            {/* Engranajes */}
            <g opacity="0.9">
              <circle cx="200" cy="200" r="80" fill="none" stroke="#4A7C34" strokeWidth="2" filter="url(#glow)" />
              <circle cx="200" cy="200" r="75" fill="none" stroke="#4A7C34" strokeWidth="1" opacity="0.5" />
            </g>

            <g opacity="0.7">
              <circle cx="290" cy="110" r="60" fill="none" stroke="#E87722" strokeWidth="2" filter="url(#glow)" />
              <circle cx="290" cy="110" r="55" fill="none" stroke="#E87722" strokeWidth="1" opacity="0.5" />
            </g>

            <g opacity="0.7">
              <circle cx="290" cy="290" r="60" fill="none" stroke="#4A7C34" strokeWidth="2" filter="url(#glow)" />
              <circle cx="290" cy="290" r="55" fill="none" stroke="#4A7C34" strokeWidth="1" opacity="0.5" />
            </g>

            <g opacity="0.7">
              <circle cx="110" cy="200" r="60" fill="none" stroke="#E87722" strokeWidth="2" filter="url(#glow)" />
              <circle cx="110" cy="200" r="55" fill="none" stroke="#E87722" strokeWidth="1" opacity="0.5" />
            </g>

            {/* Líneas */}
            <line x1="200" y1="200" x2="290" y2="110" stroke="#4A7C34" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="290" y2="290" stroke="#4A7C34" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="110" y2="200" stroke="#E87722" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
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

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

// Componente: Sección de Eje
function AxisSection({ axis, index }) {
  const IconComponent = axis.icon;
  const emojis = ['⚙️', '📍', '✓', '🏢'];

  return (
    <section
      data-section={`axis-${axis.id}`}
      className="min-h-screen flex items-center justify-center relative py-20 px-8"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{
          background: `radial-gradient(circle, ${axis.color}20, transparent)`,
          filter: 'blur(40px)'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className={index % 2 === 1 ? 'md:order-2' : ''}>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${axis.color}20`, borderColor: axis.color, borderWidth: '2px' }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: axis.color }} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold">{axis.title}</h2>
                  <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">{axis.description}</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {axis.details}
            </p>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Características</h3>
              {axis.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 group cursor-pointer">
                  <div
                    className="w-2 h-2 rounded-full mt-2 group-hover:w-3 group-hover:h-3 transition-all"
                    style={{ backgroundColor: axis.color }}
                  />
                  <p className="text-gray-300 group-hover:text-white transition-colors">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={index % 2 === 1 ? 'md:order-1' : ''}>
            <div
              className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden group"
              style={{ backgroundColor: `${axis.color}10`, borderColor: axis.color, borderWidth: '1px' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${axis.color}30, transparent)`,
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />

              <div className="relative z-10 text-8xl">
                {emojis[index]}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

// Componente: Sección de Procesos
function ProcessSection() {
  return (
    <section data-section="process" className="min-h-screen bg-gradient-to-b from-black via-[#0a1a08] to-black relative py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Nuestro Proceso SMA</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un sistema de tres pasos diseñado para garantizar la tranquilidad de tu empresa y el cuidado del planeta
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-32 relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style={{
            background: 'linear-gradient(to bottom, #4A7C34, #E87722)'
          }} />

          {PROCESS_STEPS.map((step, index) => (
            <div key={index} data-step={index} className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Contenido */}
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-bold" style={{ color: step.color }}>
                          {step.number}
                        </span>
                        <span className="text-4xl">{step.icon}</span>
                      </div>
                      <h3 className="text-3xl font-bold">{step.title}</h3>
                      <p className="text-gray-400 mt-2">{step.description}</p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gray-800">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: step.color }}
                          />
                          <p className="text-gray-300">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 0 ? '' : 'md:order-1'}>
                  <div
                    className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden group"
                    style={{ backgroundColor: `${step.color}15`, borderColor: step.color, borderWidth: '2px' }}
                  >
                    <div className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at center, ${step.color}30, transparent)`,
                        animation: 'pulse 4s ease-in-out infinite',
                        animationDelay: `${index * 0.3}s`
                      }}
                    />

                    <div className="relative z-10 text-9xl group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Conector */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full w-1 h-12 transform -translate-x-1/2" style={{
                  background: `linear-gradient(to bottom, ${step.color}, ${PROCESS_STEPS[index + 1].color})`
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
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

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
