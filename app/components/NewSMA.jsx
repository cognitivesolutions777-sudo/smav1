'use client';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  ShieldCheck,
  Eye,
  ScalesBalanced,
  CircleCheck,
  TriangleExclamation,
  ArrowRotateLeft,
  Route,
  PersonWorker,
  LayoutHeaderCells,
  Magnifier,
  FileText,
} from "@gravity-ui/icons";
import '../propuesta.css';
import Hero from './Hero';
import WhyUs from './WhyUs';


const Infraestructura = () => {
  const [open, setOpen] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const items = [
    { 
      num: '01',
      title: 'Impermeabilización HDPE', 
      desc: 'Geomembranas de polietileno de alta densidad. Sistema de barreras múltiples para aislamiento total y definitivo de materiales peligrosos del suelo y napas freáticas.',
      icon: <ShieldCheck />
    },
    { 
      num: '02',
      title: 'Control Geotécnico', 
      desc: 'Supervisión de estabilidad física en cada fase de confinamiento. Coberturas diarias que previenen dispersión de partículas.',
      icon: <Eye />
    },
    { 
      num: '03',
      title: 'Balanza Electrónica 80 TN', 
      desc: 'Certificada por laboratorios acreditados ante INACAL. Garantía de exactitud en declaraciones ante el MINAM.',
      icon: <ScalesBalanced />
    },
    { 
      num: '04',
      title: 'EIA Aprobado · SENACE', 
      desc: 'Estudio de Impacto Ambiental N°0071-2020 aprobado. La operación más ambientalmente controlada del sur del Perú.',
      icon: <CircleCheck />
    }
  ];

  return (
    <section className="infra" id="infraestructura">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Infraestructura</div>
          <h2 className="section-titulo">Relleno de Seguridad <em>Ica</em></h2>
          <p className="section-sub">Instalaciones autorizadas en Km 255.5 Panamericana Sur. Ingeniería de confinamiento con tecnología certificada.</p>
        </div>
        <div className="infra-layout">
          <div className="infra-map">
            <img src="/extracted_image_2.jpg" alt="Mapa de cobertura nacional SMA – Zona estratégica Ica/Sur" className="infra-mapa-img" />
            <div className="infra-map-header">
              <strong>Infraestructura &amp; Cobertura</strong>
              <span>Km 255.5 · Panamericana Sur · Ica</span>
            </div>
            <div className="infra-map-body">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`ia-item${open === index ? ' ia-item--open' : ''}`}
                >
                  <button
                    className="ia-trigger"
                    onClick={() => setOpen(open === index ? -1 : index)}
                    aria-expanded={open === index}
                  >
                    <span className="ia-icon-box">{item.icon}</span>
                    <span className="ia-title">{item.title}</span>
                    <span className="ia-num">{item.num}</span>
                    <svg className="ia-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="ia-body">
                    <p className="ia-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="infra-right">
            <div className="infra-stat">
              <div className="infra-stat-num">+10</div>
              <div className="infra-stat-label">Años de excelencia operativa</div>
              <div className="infra-stat-desc">Operación continua en Perú bajo normativa MINAM, OEFA y regulación ambiental vigente.</div>
            </div>
            <div className="infra-stat">
              <div className="infra-stat-num">80 TN</div>
              <div className="infra-stat-label">Capacidad balanza electrónica</div>
              <div className="infra-stat-desc">Certificada por laboratorios acreditados ante INACAL. Precisión metrológica garantizada en cada operación.</div>
            </div>
            <div className="infra-locations">
              <div className="infra-loc-titulo">Sedes operativas</div>
              <div className="infra-loc-item">
                <div className="infra-loc-dot"></div>
                <div>
                  <strong>Relleno de Seguridad</strong>
                  Carretera Panamericana Sur Km 255.5, Salas – Ica
                </div>
              </div>
              <div className="infra-loc-item">
                <div className="infra-loc-dot"></div>
                <div>
                  <strong>Oficina Comercial Lima</strong>
                  Almirante Lord Nelson 354, Miraflores
                </div>
              </div>
            </div>
            <div className="infra-video">
              {!isPlaying ? (
                <div className="video-preview-container" onClick={() => setIsPlaying(true)}>
                  <img
                    src="https://img.youtube.com/vi/fJe77WCTgGQ/maxresdefault.jpg"
                    alt="Vista previa de infraestructura SMA"
                    className="video-thumbnail"
                  />
                  <div className="video-overlay-clean">
                    <div className="play-btn-pulse">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" style={{ fill: 'white' }} />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/fJe77WCTgGQ?si=Xr2LOguz3Gn0arc-&autoplay=1&modestbranding=1&rel=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

const RegistrosCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: true })]);

  return (
    <div className="band-certs">
      <div className="band-label">Registros vigentes</div>
      <div className="embla band-items" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide band-cert"><strong>EO-RS N°00198-2021</strong><span>MINAM · Empresa Operadora</span></div>
          <div className="embla__slide band-cert"><strong>N°00678-2021</strong><span>MINAM · Relleno de Seguridad</span></div>
          <div className="embla__slide band-cert"><strong>N°0071-2020</strong><span>SENACE · EIA Aprobado</span></div>
          <div className="embla__slide band-cert"><strong>N°004-2017/DSA</strong><span>DIGESA · Autorización Sanitaria</span></div>
          <div className="embla__slide band-cert"><strong>N°089-2024</strong><span>Inspección Técnica</span></div>
          <div className="embla__slide band-cert"><strong>N°1857-2021</strong><span>Licencia Municipal</span></div>
        </div>
      </div>
    </div>
  );
};

const Servicios = () => {
  const items = [
    {
      num: '01',
      icon: <TriangleExclamation />,
      title: 'Residuos Peligrosos',
      desc: 'Gestión integral de aceites usados, solventes, químicos, baterías y tierras contaminadas. Confinamiento con trazabilidad completa.',
      tag: 'Trazabilidad completa',
    },
    {
      num: '02',
      icon: <ArrowRotateLeft />,
      title: 'Residuos No Peligrosos',
      desc: 'Residuos industriales y comerciales con certificación completa. Economía circular bajo normativa MINAM vigente.',
      tag: 'Certificación MINAM',
    },
    {
      num: '03',
      icon: <Route />,
      title: 'Tercerización de Transporte',
      desc: 'Red de EO-RS certificadas para transporte de residuos peligrosos. Cobertura sur del Perú y operaciones nacionales.',
      tag: 'Cobertura nacional',
    },
    {
      icon: <ShieldCheck />,
      num: '04',
      title: 'Tratamiento y Disposición Final',
      desc: 'Instalaciones propias autorizadas Km 255.5. Geomembranas HDPE, control geotécnico y certificado por operación.',
      tag: 'Infraestructura propia',
    },
    {
      num: '05',
      icon: <PersonWorker />,
      title: 'Gestión Interna In-Situ',
      desc: 'Personal técnico certificado en tus instalaciones. Segregación en fuente, etiquetado, almacenamiento temporal y capacitación.',
      tag: 'Personal certificado',
    },
    {
      num: '06',
      icon: <LayoutHeaderCells />,
      title: 'Gestión de Información',
      desc: 'Dashboard y reportes en tiempo real. Declaraciones SIGERSOL, manifiestos y certificados listos para auditorías OEFA.',
      tag: 'Reportes en tiempo real',
    },
  ];

  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Nuestros servicios</div>
          <h2 className="section-titulo">Todo el ciclo. <em>Un solo responsable.</em></h2>
        </div>
        <div className="servicios-grid-premium">
          {items.map((item, i) => (
            <div className="serv-card-premium" key={i}>
              <div className="serv-card-num">{item.num}</div>
              <div className="serv-icono-box-premium">{item.icon}</div>
              <div className="serv-titulo-premium">{item.title}</div>
              <p className="serv-desc-premium">{item.desc}</p>
              <div className="serv-tag-container">
                <span className="serv-tag">
                  <span className="serv-tag-dot"></span>
                  {item.tag}
                </span>
              </div>
              <a href="#cotizacion" className="serv-link-premium">Cotizar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trazabilidad = () => {
  const steps = [
    {
      num: '01',
      title: 'Generación certificada',
      desc: 'Registro de origen con datos del generador, tipo de residuo y clasificación normativa MINAM.',
    },
    {
      num: '02',
      title: 'Recolección con EO-RS',
      desc: 'Manifiesto verificado antes de autorizar ingreso. Transporte documentado con EO-RS certificada.',
    },
    {
      num: '03',
      title: 'Neutralización / Inertización',
      desc: 'Tratamiento previo al confinamiento en infraestructura propia autorizada por SENACE.',
    },
    {
      num: '04',
      title: 'Disposición final documentada',
      desc: 'Pesaje INACAL + certificado de disposición final. Declaración SIGERSOL incluida.',
    },
  ];

  return (
    <section className="traza-premium" id="trazabilidad">
      <div className="container">
        <div className="traza-layout-premium">
          <div className="traza-left-premium">
            <div className="eyebrow">Diferenciador digital</div>
            <h2 className="section-titulo">Trazabilidad digital <em>en tiempo real.</em></h2>
            <p className="section-sub">Desde la generación hasta el destino final, cada residuo tiene historia. Información disponible en cualquier momento.</p>
            
            <div className="traza-steps-premium">
              {steps.map((step, i) => (
                <div className="traza-step-item" key={i}>
                  <div className="traza-step-num">{step.num}</div>
                  <div className="traza-step-content">
                    <div className="traza-step-titulo">{step.title}</div>
                    <p className="traza-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="traza-right-premium">
            <div className="traza-features-premium">
              <div className="traza-feat-card">
                <div className="traza-feat-icono-box"><ShieldCheck /></div>
                <div className="traza-feat-titulo">Dashboard operativo</div>
                <p className="traza-feat-desc">Visualiza volúmenes, fechas y certificados desde tu computadora.</p>
              </div>
              <div className="traza-feat-card">
                <div className="traza-feat-icono-box"><Route /></div>
                <div className="traza-feat-titulo">Cobertura nacional</div>
                <p className="traza-feat-desc">Red de EO-RS aliadas para operaciones en todo el país.</p>
              </div>
              <div className="traza-feat-card">
                <div className="traza-feat-icono-box"><TriangleExclamation /></div>
                <div className="traza-feat-titulo">Respuesta &lt;24h</div>
                <p className="traza-feat-desc">Equipo técnico disponible para emergencias y urgencias operativas.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const CertificadoDigital = () => {
  return (
    <section className="certdig" id="consulta-certificado">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Auditoría y Trazabilidad</div>
          <h2 className="section-titulo">Visualiza tu <em>Certificado Digital.</em></h2>
          <p className="section-sub">Ingresa el RUC de tu empresa y el número de certificado para verificar y descargar tu constancia oficial de disposición final.</p>
        </div>
        
        <div className="cert-panel-layout">
          <div className="cert-form-card">
            <div className="cert-form-hdr">
              <ShieldCheck />
              CONSULTA DE CERTIFICADO
            </div>
            <div className="cert-form-body">
              <div className="cert-input-row">
                <label>RUC DEL GENERADOR *</label>
                <input type="text" placeholder="Ej. 20512345678" />
              </div>
              <div className="cert-input-row">
                <label>N° DE CERTIFICADO *</label>
                <input type="text" placeholder="EJ. SMA-2025-A7X3K2" />
              </div>
              <button className="cert-btn-consultar">
                <Magnifier /> Consultar certificado
              </button>
              <p className="cert-form-footer">
                ¿No tienes tu número de certificado? Escríbenos a <a href="#">contacto@smi.pe</a> indicando tu RUC y fecha de servicio.
              </p>
            </div>
          </div>
          
          <div className="cert-info-side">
            <div className="cert-mini-card">
              <div className="cert-mini-icon"><FileText /></div>
              <div className="cert-mini-content">
                <strong>Certificado PDF con QR</strong>
                <p>El documento incluye todos los datos del servicio, firma digital SMA y código QR de verificación de autenticidad.</p>
              </div>
            </div>
            <div className="cert-mini-card">
              <div className="cert-mini-icon"><CircleCheck /></div>
              <div className="cert-mini-content">
                <strong>Válido ante OEFA y auditorías</strong>
                <p>Acredita la disposición final de tus residuos. Aceptado por FFA, MINAM, SENACE y auditorías internas.</p>
              </div>
            </div>
            <div className="cert-mini-card">
              <div className="cert-mini-icon"><ShieldCheck /></div>
              <div className="cert-mini-content">
                <strong>Número único no correlativo</strong>
                <p>Cada certificado tiene un código alfanumérico único generado de forma aleatoria. No es posible predecir ni falsificar.</p>
              </div>
            </div>
            
            <div className="cert-demo-box">
              <strong>¿Quieres generar un certificado de demostración?</strong>
              <p>Ingresa cualquier RUC de 11 dígitos y haz clic en "Consultar" para ver cómo se genera el PDF con QR de ejemplo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function NewSMA() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // 1. Toggle Menú Móvil
      const mobileBtn = e.target.closest('#mobile-btn');
      if (mobileBtn) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
          navLinks.classList.toggle('active');
          mobileBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        }
        return;
      }

      // 2. Toggle Megamenú (Móvil)
      const megaToggle = e.target.closest('#mega-toggle');
      if (megaToggle && window.innerWidth <= 900) {
        e.preventDefault();
        const megamenu = megaToggle.nextElementSibling;
        if (megamenu) {
          megamenu.classList.toggle('active');
          // Opcional: rotar flecha
          const arrow = megaToggle.querySelector('.mega-arrow');
          if (arrow) arrow.style.transform = megamenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        return;
      }

      // 3. Cerrar menú al hacer click en links normales
      const link = e.target.closest('.nav-links a:not(#mega-toggle)');
      if (link) {
        const navLinks = document.querySelector('.nav-links');
        const mBtn = document.getElementById('mobile-btn');
        if (navLinks?.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (mBtn) mBtn.textContent = '☰';
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: `

<!-- NAVBAR -->
<nav>
  <div class="nav-logo">
    <a href="/"><img src="/logo_sma_111.png" alt="SMA Logo" style="height: 52px; width: auto;" /></a>
  </div>
  <ul class="nav-links">
    <li><a href="#porque">Por qué SMA</a></li>
    <li>
      <a href="#servicios" id="mega-toggle">Servicios <span class="mega-arrow">▼</span></a>
      <div class="megamenu">
        <div class="mega-col">
          <h4>Gestión Residuos</h4>
          <a href="#">Relleno de Seguridad</a>
          <a href="#">Tratamiento Ecológico</a>
          <a href="#">Disposición Final</a>
        </div>
        <div class="mega-col">
          <h4>Auditoría & Trazabilidad</h4>
          <a href="#">Reportes SIGERSOL</a>
          <a href="#">Dashboards en Tiempo Real</a>
        </div>
      </div>
    </li>
    <li><a href="#trazabilidad">Trazabilidad</a></li>
    <li><a href="#sectores">Sectores</a></li>
    <li><a href="#certs">Certificaciones</a></li>
  </ul>
  <a href="#cotizacion" class="nav-cta">Solicitar cotización</a>
  <div class="mobile-toggle" id="mobile-btn">☰</div>
</nav>
` }} />
      <Hero />
      <RegistrosCarousel />
      <WhyUs />
      <Infraestructura />
      <Servicios />
      <Trazabilidad />
      <CertificadoDigital />
      <div dangerouslySetInnerHTML={{ __html: `
<!-- PROCESO -->
<section class="proceso" id="proceso">
  <div class="container">
    <div class="section-header">
      <div class="eyebrow">Nuestro proceso</div>
      <h2 class="section-titulo">De la generación al certificado final.</h2>
      <p class="section-sub">Cinco pasos que garantizan la continuidad de tu operación y el cumplimiento normativo en cada etapa.</p>
    </div>
    <div class="proceso-steps">
      <div class="paso">
        <div class="paso-circulo">1</div>
        <div class="paso-titulo">Evaluación</div>
        <p class="paso-desc">Diagnóstico de residuo, volumen y frecuencia. Propuesta según tu modelo operativo.</p>
      </div>
      <div class="paso">
        <div class="paso-circulo">2</div>
        <div class="paso-titulo">Propuesta</div>
        <p class="paso-desc">Contrato por tipo de residuo, frecuencia y volumen. SLA definido por escrito.</p>
      </div>
      <div class="paso">
        <div class="paso-circulo">3</div>
        <div class="paso-titulo">Tratamiento</div>
        <p class="paso-desc">Recepción, pesaje INACAL y tratamiento previo al confinamiento definitivo.</p>
      </div>
      <div class="paso">
        <div class="paso-circulo">4</div>
        <div class="paso-titulo">Disposición</div>
        <p class="paso-desc">Confinamiento en celda HDPE. Economía circular donde aplica la normativa.</p>
      </div>
      <div class="paso">
        <div class="paso-circulo">5</div>
        <div class="paso-titulo">Certificación</div>
        <p class="paso-desc">Certificado de disposición final + declaración SIGERSOL. Cierre de responsabilidad completo.</p>
      </div>
    </div>
  </div>
</section>

<!-- SECTORES -->
<section class="sectores" id="sectores">
  <div class="container">
    <div class="section-header">
      <div class="eyebrow">Sectores que atendemos</div>
      <h2 class="section-titulo">Tu industria, nuestra <em>responsabilidad.</em></h2>
      <p class="section-sub">Gestionamos residuos peligrosos y no peligrosos en los sectores más exigentes del Perú.</p>
    </div>
    <div class="sectores-grid">
      <div class="sector-card">
        <div class="sector-icono-box">⛏️</div>
        <div class="sector-nombre">Minería y Metalurgia</div>
        <p class="sector-detalle">Lodos industriales, relaves y reactivos químicos caducos. Gestión especializada a nivel nacional.</p>
      </div>
      <div class="sector-card">
        <div class="sector-icono-box">⚡</div>
        <div class="sector-nombre">Energía e Hidrocarburos</div>
        <p class="sector-detalle">Suelos contaminados, aceites usados y residuos de generación. Exploración hasta refinación.</p>
      </div>
      <div class="sector-card">
        <div class="sector-icono-box">🌾</div>
        <div class="sector-nombre">Agroindustria</div>
        <p class="sector-detalle">Envases de agroquímicos con triple lavado y residuos del procesamiento agrícola.</p>
      </div>
      <div class="sector-card">
        <div class="sector-icono-box">🏭</div>
        <div class="sector-nombre">Manufactura y Química</div>
        <p class="sector-detalle">Solventes, pinturas, resinas y materiales con características de peligrosidad CRETIB.</p>
      </div>
      <div class="sector-card">
        <div class="sector-icono-box">🚢</div>
        <div class="sector-nombre">Sector Marítimo</div>
        <p class="sector-detalle">Cumplimiento MARPOL y gestión de residuos portuarios con certificación.</p>
      </div>
      <div class="sector-card">
        <div class="sector-icono-box">🏗️</div>
        <div class="sector-nombre">Construcción</div>
        <p class="sector-detalle">RCD y residuos peligrosos de obra. Gestión durante todo el ciclo constructivo.</p>
      </div>
      <div class="sector-card">
        <div class="sector-icono-box">🔌</div>
        <div class="sector-nombre">Energía Eléctrica</div>
        <p class="sector-detalle">Residuos de generación, transmisión y distribución. PCBs y transformadores.</p>
      </div>
      <div class="sector-card" style="background: var(--verde-ultra); border-color: var(--verde-medio);">
        <div class="sector-icono-box">📞</div>
        <div class="sector-nombre" style="color: var(--verde-oscuro);">¿Tu sector?</div>
        <p class="sector-detalle" style="color: var(--verde);">Evaluamos cada industria con un diagnóstico personalizado sin costo.</p>
      </div>
    </div>
  </div>
</section>






<!-- CERTIFICACIONES -->
<section class="certs" id="certs">
  <div class="container">
    <div class="section-header">
      <div class="eyebrow">Respaldo institucional</div>
      <h2 class="section-titulo">Respaldados por la <em>autoridad ambiental.</em></h2>
      <p class="section-sub">Operamos bajo los más altos estándares del MINAM, DIGESA y SENACE. Todos los registros vigentes y auditables.</p>
    </div>
    <div class="certs-grid">
      <div class="cert-card">
        <div class="cert-ent">MINAM</div>
        <div class="cert-num">EO-RS-00198-2021-MINAM/VMGA/DGRS</div>
        <div class="cert-desc">Registro como Empresa Operadora de Residuos Sólidos (EO-RS)</div>
      </div>
      <div class="cert-card">
        <div class="cert-ent">MINAM</div>
        <div class="cert-num">Resolución N° 00678-2021-MINAM/VMGA/DGRS</div>
        <div class="cert-desc">Autorización para Operación de Relleno de Seguridad</div>
      </div>
      <div class="cert-card">
        <div class="cert-ent">SENACE</div>
        <div class="cert-num">Resolución N° 0071-2020-SENACE-PE/DEIN</div>
        <div class="cert-desc">Estudio de Impacto Ambiental (EIA) Aprobado</div>
      </div>
      <div class="cert-card">
        <div class="cert-ent">DIGESA</div>
        <div class="cert-num">N° 004-2017/DSA</div>
        <div class="cert-desc">Resolución Ministerial de Autorización Sanitaria</div>
      </div>
      <div class="cert-card">
        <div class="cert-ent">Inspección Técnica</div>
        <div class="cert-num">N° 089-2024</div>
        <div class="cert-desc">Certificado de Inspección Técnica de Seguridad vigente 2024</div>
      </div>
      <div class="cert-card">
        <div class="cert-ent">Municipal</div>
        <div class="cert-num">Licencia N° 1857-2021</div>
        <div class="cert-desc">Licencia de Funcionamiento Municipal vigente</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<div class="cta-section" id="contacto">
  <div class="cta-bg" style="background-image:url('/extracted_image_5.png')"></div>
  <div class="cta-overlay"></div>
  <div class="container" style="position:relative; z-index:2; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:40px">
    <div>
      <h2 class="cta-titulo">¿Tu empresa genera<br>residuos peligrosos?<br><em>Hablemos hoy.</em></h2>
      <p class="cta-sub">Evaluamos tu operación sin costo y te entregamos una propuesta comercial en menos de 24 horas.</p>
    </div>
    <a href="#cotizacion" class="btn-cta-blanco">Solicitar cotización</a>
  </div>
</div>


<!-- FORMULARIO COTIZACIÓN -->

  <!-- ══ BANDA LINKEDIN POSTS ══════════════════════════════════════════ -->
  <section class="linkedin-banda">
    <div class="container">
      <div class="linkedin-tag">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        Síguenos en LinkedIn
      </div>
      <h2 class="sec-titulo" style="text-align:center">Nuestra presencia <span>digital</span></h2>
      <p class="sec-sub" style="text-align:center;max-width:520px;margin:8px auto 0">Contenido especializado sobre gestión de residuos, normativa ambiental y operaciones en Perú.</p>
      <div class="posts-grid">
        <div class="post-card">
          <img src="/extracted_image_6.png" alt="SMA – Ubicación estratégica Km 255 Panamericana Sur" loading="lazy">
          <div class="post-card-overlay"><span class="post-card-label">Ubicación</span></div>
        </div>
        <div class="post-card">
          <img src="/extracted_image_7.png" alt="SMA – Respaldados por la autoridad ambiental" loading="lazy">
          <div class="post-card-overlay"><span class="post-card-label">Certificaciones</span></div>
        </div>
        <div class="post-card">
          <img src="/extracted_image_8.png" alt="SMA – Trazabilidad digital en tiempo real" loading="lazy">
          <div class="post-card-overlay"><span class="post-card-label">Trazabilidad</span></div>
        </div>
        <div class="post-card">
          <img src="/extracted_image_9.png" alt="SMA – Tu industria, nuestra responsabilidad" loading="lazy">
          <div class="post-card-overlay"><span class="post-card-label">Sectores</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="cotizacion" style="background: var(--gris-bg); padding: 80px 0; scroll-margin-top: 72px;">
    <div class="container">
  <div class="section-header" style="margin-bottom: 40px;">
    <div class="eyebrow">Solicitud sin costo</div>
    <h2 class="section-titulo">Cotiza tu operación<br><em>en 4 pasos.</em></h2>
    <p class="section-sub">Completa el formulario y recibe propuesta comercial en menos de 24 horas.</p>
  </div>

  <div class="cot-wrap">

    <!-- PANEL IZQUIERDO -->
    <aside class="cot-izq">
      <div class="cot-izq-bg" style="background-image:url('/extracted_image_10.png')"></div>
      <div class="cot-izq-overlay"></div>
      <div class="cot-izq-content">
        <div class="cot-logo">
          <div class="cot-logo-sq"><span>SMA</span></div>
          <div class="cot-logo-txt">
            <strong>Servicios Medioambientales</strong>
            <em>Ica, Perú</em>
          </div>
        </div>
        <h3 class="cot-titulo">Cotización<br><em>sin costo.</em><br>Respuesta<br>en &lt;24h.</h3>
        <p class="cot-sub">Completa el formulario y nuestro equipo elabora una propuesta comercial a medida.</p>
        <div class="cot-promesas">
          <div class="cot-prom">
            <div class="cot-prom-ico">⚡</div>
            <div class="cot-prom-txt"><strong>Respuesta en &lt;24 horas</strong><span>El equipo comercial evalúa y te contacta con precio.</span></div>
          </div>
          <div class="cot-prom">
            <div class="cot-prom-ico">🔒</div>
            <div class="cot-prom-txt"><strong>Información confidencial</strong><span>Datos operativos no compartidos con terceros.</span></div>
          </div>
          <div class="cot-prom">
            <div class="cot-prom-ico">📄</div>
            <div class="cot-prom-txt"><strong>Propuesta con certificados</strong><span>Incluimos constancias regulatorias vigentes.</span></div>
          </div>
          <div class="cot-prom">
            <div class="cot-prom-ico verde">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 6V12C3 16.97 7.02 21.61 12 23C16.98 21.61 21 16.97 21 12V6L12 2Z" fill="rgba(123,191,62,0.25)" stroke="#7bbf3e" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="#7bbf3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="cot-prom-txt"><strong class="verde-txt">Validación Certificado Digital</strong><span>Registros MINAM, SENACE y DIGESA verificables en línea.</span></div>
          </div>
        </div>
        <div class="cot-divider"></div>
        <div class="cot-auths-lbl">Autorizado por</div>
        <div class="cot-auth"><div class="cot-auth-dot"></div>MINAM · EO-RS N°00198-2021</div>
        <div class="cot-auth"><div class="cot-auth-dot"></div>SENACE · EIA N°0071-2020</div>
        <div class="cot-auth"><div class="cot-auth-dot"></div>DIGESA · N°004-2017/DSA</div>
      </div>
    </aside>

    <!-- PANEL DERECHO -->
    <main class="cot-der">

      <!-- STEPPER -->
      <div class="cot-stepper" id="cot-stepper">
        <div class="cot-step"><div class="cot-step-n activo" id="csn1">1</div><div class="cot-step-lbl activo" id="csl1">Tu empresa</div></div>
        <div class="cot-linea" id="clin1"></div>
        <div class="cot-step"><div class="cot-step-n" id="csn2">2</div><div class="cot-step-lbl" id="csl2">Residuos</div></div>
        <div class="cot-linea" id="clin2"></div>
        <div class="cot-step"><div class="cot-step-n" id="csn3">3</div><div class="cot-step-lbl" id="csl3">Operación</div></div>
        <div class="cot-linea" id="clin3"></div>
        <div class="cot-step"><div class="cot-step-n" id="csn4">4</div><div class="cot-step-lbl" id="csl4">Confirmar</div></div>
      </div>

      <!-- PASO 1 -->
      <div class="cot-bloque activo" id="cpaso1">
        <div class="cot-titulo-paso">Tu empresa</div>
        <p class="cot-sub-paso">Datos básicos de contacto. Nos permite asignar el ejecutivo correcto.</p>
        <div class="cot-fila">
          <div class="cot-campo"><label>Nombre completo <span class="req">*</span></label><input type="text" id="c-nombre" placeholder="Ej. Carlos Mendoza"><div class="cot-err" id="cerr-nombre">Ingresa tu nombre completo.</div></div>
          <div class="cot-campo"><label>Cargo <span class="req">*</span></label><input type="text" id="c-cargo" placeholder="Ej. Gerente de Operaciones"><div class="cot-err" id="cerr-cargo">Ingresa tu cargo.</div></div>
        </div>
        <div class="cot-campo"><label>Empresa <span class="req">*</span></label><input type="text" id="c-empresa" placeholder="Razón social o nombre comercial"><div class="cot-err" id="cerr-empresa">Ingresa el nombre de tu empresa.</div></div>
        <div class="cot-fila">
          <div class="cot-campo"><label>Correo electrónico <span class="req">*</span></label><input type="email" id="c-email" placeholder="correo@empresa.com"><div class="cot-err" id="cerr-email">Ingresa un correo válido.</div></div>
          <div class="cot-campo"><label>Teléfono / WhatsApp <span class="req">*</span></label><input type="tel" id="c-tel" placeholder="Ej. 999 123 456"><div class="cot-err" id="cerr-tel">Ingresa un teléfono de contacto.</div></div>
        </div>
        <div class="cot-campo">
          <label>Tipo de necesidad <span class="req">*</span></label>
          <div class="cot-tipo-grid">
            <div class="cot-tipo" onclick="cotTipo(this,'recurrente')"><div class="cot-tipo-ico">🔄</div><div class="cot-tipo-txt"><strong>Residuos recurrentes</strong><span>Generación continua. Busco contrato.</span></div></div>
            <div class="cot-tipo" onclick="cotTipo(this,'puntual')"><div class="cot-tipo-ico">📦</div><div class="cot-tipo-txt"><strong>Evento puntual</strong><span>Obra, limpieza, cierre o acumulado.</span></div></div>
            <div class="cot-tipo" onclick="cotTipo(this,'nuevo')"><div class="cot-tipo-ico">🆕</div><div class="cot-tipo-txt"><strong>Primera vez</strong><span>No hemos trabajado con un operador antes.</span></div></div>
            <div class="cot-tipo" onclick="cotTipo(this,'cambio')"><div class="cot-tipo-ico">🔀</div><div class="cot-tipo-txt"><strong>Cambio de operador</strong><span>Evalúo mejores condiciones.</span></div></div>
          </div>
          <div class="cot-err" id="cerr-tipo">Selecciona el tipo de necesidad.</div>
        </div>
        <div class="cot-cond" id="ccond-cambio">
          <label>¿Qué mejorar respecto al operador actual?</label>
          <select id="c-mejora"><option value="">Selecciona la razón principal</option><option>Precio / tarifas más competitivas</option><option>Mejor tiempo de respuesta</option><option>Documentación / trazabilidad más completa</option><option>Cobertura geográfica</option><option>Problemas regulatorios con el operador actual</option></select>
        </div>
        <div class="cot-nav"><span></span><button class="cot-btn-sig" onclick="cotIr(2)">Siguiente</button></div>
      </div>

      <!-- PASO 2 -->
      <div class="cot-bloque" id="cpaso2">
        <div class="cot-titulo-paso">Tipo de residuos</div>
        <p class="cot-sub-paso">Selecciona todos los que aplican. Determina los permisos e infraestructura necesaria.</p>
        <div class="cot-campo">
          <label>Categoría principal <span class="req">*</span></label>
          <div class="cot-checks" id="cchk-cat">
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">⚠️ Residuos peligrosos</div></div>
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">♻️ Residuos no peligrosos</div></div>
          </div>
          <div class="cot-err" id="cerr-cat">Selecciona al menos una categoría.</div>
        </div>
        <div class="cot-campo">
          <label>Tipos específicos <span class="req">*</span></label>
          <div class="cot-checks" id="cchk-tipos">
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">🛢️ Aceites usados / lubricantes</div></div>
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">🧪 Solventes y químicos</div></div>
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">🔋 Baterías / acumuladores</div></div>
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">🌍 Suelos contaminados</div></div>
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">🌿 Envases agroquímicos</div></div>
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">🏗️ Residuos de construcción</div></div>
            <div class="cot-chk" onclick="cotChk(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">🔌 Residuos eléctricos / PCB</div></div>
            <div class="cot-chk" onclick="cotChkOtro(this)"><div class="cot-chk-box"></div><div class="cot-chk-lbl">📋 Otro / no identificado aún</div></div>
          </div>
          <div class="cot-err" id="cerr-tipos">Selecciona al menos un tipo.</div>
        </div>
        <div class="cot-cond" id="ccond-otro"><label>Describe el residuo</label><input type="text" id="c-otro" placeholder="Ej: Lodos de PTAR, reactivos caducos, etc."></div>
        <div class="cot-campo"><label>¿Cuenta con clasificación de peligrosidad?</label><select id="c-clasif"><option value="">Selecciona una opción</option><option>Sí, tenemos la clasificación actualizada</option><option>Parcialmente — solo algunos residuos</option><option>No, necesitamos apoyo para clasificarlos</option><option>No lo sé</option></select></div>
        <div class="cot-nav"><button class="cot-btn-atras" onclick="cotIr(1)">← Atrás</button><button class="cot-btn-sig" onclick="cotIr(3)">Siguiente</button></div>
      </div>

      <!-- PASO 3 -->
      <div class="cot-bloque" id="cpaso3">
        <div class="cot-titulo-paso">Datos de la operación</div>
        <p class="cot-sub-paso">Con esta información calculamos el servicio, logística y tarifa más ajustada.</p>
        <div class="cot-campo"><label>Ubicación de generación <span class="req">*</span></label><select id="c-region" onchange="cotRegion()"><option value="">Selecciona la región</option><option>Lima Metropolitana</option><option>Ica</option><option>Arequipa</option><option>Moquegua</option><option>Tacna</option><option>Pisco / Cañete / Chincha</option><option>Nazca / Palpa</option><option>Cusco</option><option>Puno</option><option>Otra región</option></select><div class="cot-err" id="cerr-region">Selecciona la región de generación.</div></div>
        <div class="cot-cond" id="ccond-region"><label>Especifica la región o ciudad</label><input type="text" id="c-region-otro" placeholder="Ej. Cajamarca, La Oroya, Juliaca..."></div>
        <div class="cot-campo"><label>Volumen estimado <span class="req">*</span></label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div><input type="number" id="c-vol" placeholder="Ej. 5" min="0" step="0.1" style="width:100%;padding:11px 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:var(--negro-corp);background:white;border:1.5px solid #dde5d4;border-radius:3px;outline:none;"><div class="cot-err" id="cerr-vol">Ingresa el volumen estimado.</div></div>
            <div><select id="c-unidad" style="width:100%;padding:11px 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:var(--negro-corp);background:white;border:1.5px solid #dde5d4;border-radius:3px;outline:none;appearance:none;background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%238a9585' d='M5 6L0 0h10z'/%3E%3C/svg%3E&quot;);background-repeat:no-repeat;background-position:right 14px center;padding-right:38px;cursor:pointer;"><option value="TN/mes">TN por mes</option><option value="TN/año">TN por año</option><option value="TN/evento">TN por evento</option><option value="kg/mes">kg por mes</option><option value="cilindros/mes">Cilindros por mes</option><option value="m³/mes">m³ por mes</option></select></div>
          </div>
        </div>
        <div class="cot-campo"><label>Frecuencia de recojo <span class="req">*</span></label><div class="cot-frecs"><button type="button" class="cot-frec" onclick="cotFrec(this,'Semanal')">Semanal</button><button type="button" class="cot-frec" onclick="cotFrec(this,'Quincenal')">Quincenal</button><button type="button" class="cot-frec" onclick="cotFrec(this,'Mensual')">Mensual</button><button type="button" class="cot-frec" onclick="cotFrec(this,'Bimestral')">Bimestral</button><button type="button" class="cot-frec" onclick="cotFrec(this,'Evento único')">Evento único</button><button type="button" class="cot-frec" onclick="cotFrec(this,'A demanda')">A demanda</button></div><div class="cot-err" id="cerr-frec">Selecciona la frecuencia de recojo.</div></div>
        <div class="cot-campo"><label>¿Cuándo necesitas el servicio?</label><select id="c-urgencia" onchange="cotUrgencia()"><option value="">Selecciona una opción</option><option value="urgente">Urgente — en menos de 1 semana</option><option value="pronto">Pronto — en 2 a 4 semanas</option><option value="normal">Normal — en 1 a 3 meses</option><option value="planificando">Planificando — más de 3 meses</option></select></div>
        <div class="cot-alerta" id="cot-alerta"><strong>⚡ Requerimiento urgente detectado</strong>Para urgencias, llama al <strong>(051) 994 624 116</strong> o escribe a <strong><a href="/cdn-cgi/l/email-protection#ef8c80819b8e8c9b80af9c828ec1818a9bc19f8a" style="color:inherit;"><span class="__cf_email__" data-cfemail="a5c6cacbd1c4c6d1cae5d6c8c48bcbc0d18bd5c0">[email&#160;protected]</span></a></strong> además de enviar este formulario.</div>
        <div class="cot-campo"><label>¿Cuentan con almacenamiento temporal?</label><select id="c-almac"><option value="">Selecciona una opción</option><option>Sí, área designada con contención</option><option>Sí, pero sin contención adecuada</option><option>No — necesitamos apoyo para definirlo</option><option>No aplica (evento puntual)</option></select></div>
        <div class="cot-campo"><label>Información adicional relevante</label><textarea id="c-notas" placeholder="Descripción del proceso generador, restricciones de acceso, volúmenes históricos, nombre del operador actual, etc."></textarea></div>
        <div class="cot-nav"><button class="cot-btn-atras" onclick="cotIr(2)">← Atrás</button><button class="cot-btn-sig" onclick="cotIr(4)">Revisar solicitud</button></div>
      </div>

      <!-- PASO 4 -->
      <div class="cot-bloque" id="cpaso4">
        <div class="cot-titulo-paso">Confirma tu solicitud</div>
        <p class="cot-sub-paso">Revisa la información. El equipo recibirá tu solicitud en <strong><a href="/cdn-cgi/l/email-protection#ceada1a0baafadbaa18ebda3afe0a0abbae0beab" style="color:inherit;"><span class="__cf_email__" data-cfemail="82e1edecf6e3e1f6edc2f1efe3acece7f6acf2e7">[email&#160;protected]</span></a></strong> y responderá en menos de 24h.</p>
        <div class="cot-resumen"><div class="cot-resumen-hdr">Resumen de la solicitud</div><div class="cot-resumen-body" id="cot-resumen-body"></div></div>
        <div class="cot-priv" id="cot-priv" onclick="cotPriv()"><div class="cot-priv-box" id="cot-priv-box"></div><div class="cot-priv-txt">Autorizo a SMA Servicios Medioambientales a usar la información ingresada para elaborar una propuesta comercial y contactarme. Los datos no serán compartidos con terceros.</div></div>
        <div class="cot-err" id="cerr-priv">Debes aceptar la política para continuar.</div>
        <div class="cot-nav"><button class="cot-btn-atras" onclick="cotIr(3)">← Atrás</button><button class="cot-btn-env" onclick="cotEnviar()">Enviar solicitud</button></div>
      </div>

      <!-- ÉXITO -->
      <div class="cot-exito" id="cot-exito">
        <div class="cot-exito-ico">✅</div>
        <h2 class="cot-exito-tit">¡Solicitud recibida!</h2>
        <p class="cot-exito-sub">Tu cotización fue enviada al equipo comercial de SMA. Recibirás respuesta en menos de 24 horas hábiles.</p>
        <div class="cot-exito-datos">
          <div class="cot-exito-dato">Propuesta comercial personalizada</div>
          <div class="cot-exito-dato">Constancias regulatorias vigentes adjuntas</div>
          <div class="cot-exito-dato">Contacto directo del ejecutivo asignado</div>
        </div>
        <a href="#cotizacion" class="cot-volver" onclick="cotReset()">← Enviar otra solicitud</a>
      </div>

    </main>
      </div>
    </div>
  </section>

` }} />
    </>
  );
}
