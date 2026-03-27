'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import '../propuesta.css';
import Hero from './Hero';
import WhyUs from './WhyUs';



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

export default function NewSMA() {
  useEffect(() => {
    let s = document.createElement('script');
    s.src = '/propuesta_client.js';
    document.body.appendChild(s);
    return () => {
      if (s.parentNode) document.body.removeChild(s);
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->
<nav>
  <div class="nav-logo" style="display:flex; align-items:center;">
    <a href="/"><img src="/logosma_1111.png" alt="SMA Logo" style="height: 52px; width: auto;" /></a>
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
    <li><a href="#sectores">Sectores</a></li>
    <li><a href="#trazabilidad">Trazabilidad</a></li>
    <li><a href="#auditoria">Auditoría</a></li>
    <li><a href="#certs">Certificaciones</a></li>
  </ul>
  <a href="#cotizacion" class="nav-cta">Solicitar cotización</a>
  <div class="mobile-toggle" id="mobile-btn">☰</div>
</nav>
` }} />
      <Hero />
      <RegistrosCarousel />
      <div dangerouslySetInnerHTML={{ __html: `
` }} />
      <WhyUs />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- INFRAESTRUCTURA -->
<section class="infra" id="infraestructura">
  <div class="section-header">
    <div class="eyebrow">Infraestructura</div>
    <h2 class="section-titulo">Relleno de Seguridad <em>Ica</em></h2>
    <p class="section-sub">Instalaciones autorizadas en Km 255.5 Panamericana Sur. Ingeniería de confinamiento con tecnología certificada.</p>
  </div>
  <div class="infra-layout">
    <div class="infra-map">
      <img src="/extracted_image_2.jpg" alt="Mapa de cobertura nacional SMA – Zona estratégica Ica/Sur" class="infra-mapa-img">
      <div class="infra-map-header">
        <strong>Infraestructura &amp; Cobertura</strong>
        <span>Km 255.5 · Panamericana Sur · Ica</span>
      </div>
      <div class="infra-map-body">
        <div class="infra-detail">
          <div class="infra-detail-num">1</div>
          <div>
            <div class="infra-detail-titulo">Impermeabilización HDPE</div>
            <div class="infra-detail-desc">Geomembranas de polietileno de alta densidad. Sistema de barreras múltiples para aislamiento total y definitivo de materiales peligrosos del suelo y napas freáticas.</div>
          </div>
        </div>
        <div class="infra-detail">
          <div class="infra-detail-num">2</div>
          <div>
            <div class="infra-detail-titulo">Control Geotécnico</div>
            <div class="infra-detail-desc">Supervisión de estabilidad física en cada fase de confinamiento. Coberturas diarias que previenen dispersión de partículas.</div>
          </div>
        </div>
        <div class="infra-detail">
          <div class="infra-detail-num">3</div>
          <div>
            <div class="infra-detail-titulo">Balanza Electrónica 80 TN</div>
            <div class="infra-detail-desc">Certificada por laboratorios acreditados ante INACAL. Garantía de exactitud en declaraciones ante el MINAM.</div>
          </div>
        </div>
        <div class="infra-detail">
          <div class="infra-detail-num">4</div>
          <div>
            <div class="infra-detail-titulo">EIA Aprobado · SENACE</div>
            <div class="infra-detail-desc">Estudio de Impacto Ambiental N°0071-2020 aprobado. La operación más ambientalmente controlada del sur del Perú.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="infra-right">
      <div class="infra-stat">
        <div class="infra-stat-num">+10</div>
        <div class="infra-stat-label">Años de excelencia operativa</div>
        <div class="infra-stat-desc">Operación continua en Perú bajo normativa MINAM, OEFA y regulación ambiental vigente.</div>
      </div>
      <div class="infra-stat">
        <div class="infra-stat-num">80 TN</div>
        <div class="infra-stat-label">Capacidad balanza electrónica</div>
        <div class="infra-stat-desc">Certificada por laboratorios acreditados ante INACAL. Precisión metrológica garantizada en cada operación.</div>
      </div>
      <div class="infra-locations">
        <div class="infra-loc-titulo">Sedes operativas</div>
        <div class="infra-loc-item">
          <div class="infra-loc-dot"></div>
          <div>
            <strong>Relleno de Seguridad</strong>
            Carretera Panamericana Sur Km 255.5, Salas – Ica
          </div>
        </div>
        <div class="infra-loc-item">
          <div class="infra-loc-dot"></div>
          <div>
            <strong>Oficina Comercial Lima</strong>
            Almirante Lord Nelson 354, Miraflores
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICIOS -->
<section class="servicios" id="servicios">
  <div class="section-header">
    <div class="eyebrow">Nuestros servicios</div>
    <h2 class="section-titulo">Todo el ciclo. <em>Un solo responsable.</em></h2>
  </div>
  <div class="servicios-grid">
    <div class="serv-card">
      <div class="serv-icono">⚠️</div>
      <div class="serv-titulo">Residuos Peligrosos</div>
      <p class="serv-desc">Gestión integral de aceites usados, solventes, químicos, baterías y tierras contaminadas. Confinamiento con trazabilidad completa.</p>
      <a href="#cotizacion" class="serv-link">Cotizar</a>
    </div>
    <div class="serv-card">
      <div class="serv-icono">♻️</div>
      <div class="serv-titulo">Residuos No Peligrosos</div>
      <p class="serv-desc">Residuos industriales y comerciales con certificación completa. Economía circular bajo normativa MINAM vigente.</p>
      <a href="#cotizacion" class="serv-link">Cotizar</a>
    </div>
    <div class="serv-card">
      <div class="serv-icono">🚛</div>
      <div class="serv-titulo">Tercerización de Transporte</div>
      <p class="serv-desc">Red de EO-RS certificadas para transporte de residuos peligrosos. Cobertura sur del Perú y operaciones nacionales.</p>
      <a href="#cotizacion" class="serv-link">Cotizar</a>
    </div>
    <div class="serv-card">
      <div class="serv-icono">🏭</div>
      <div class="serv-titulo">Tratamiento y Disposición Final</div>
      <p class="serv-desc">Instalaciones propias autorizadas Km 255.5. Geomembranas HDPE, control geotécnico y certificado por operación.</p>
      <a href="#cotizacion" class="serv-link">Cotizar</a>
    </div>
    <div class="serv-card">
      <div class="serv-icono">👷</div>
      <div class="serv-titulo">Gestión Interna In-Situ</div>
      <p class="serv-desc">Personal técnico certificado en tus instalaciones. Segregación en fuente, etiquetado, almacenamiento temporal y capacitación.</p>
      <a href="#cotizacion" class="serv-link">Cotizar</a>
    </div>
    <div class="serv-card">
      <div class="serv-icono">📋</div>
      <div class="serv-titulo">Gestión de Información</div>
      <p class="serv-desc">Dashboard y reportes en tiempo real. Declaraciones SIGERSOL, manifiestos y certificados listos para auditorías OEFA.</p>
      <a href="#cotizacion" class="serv-link">Cotizar</a>
    </div>
  </div>
</section>

<!-- PROCESO -->
<section class="proceso" id="proceso">
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
</section>

<!-- SECTORES -->
<section class="sectores" id="sectores">
  <div class="section-header">
    <div class="eyebrow">Sectores que atendemos</div>
    <h2 class="section-titulo">Tu industria, nuestra <em>responsabilidad.</em></h2>
    <p class="section-sub">Gestionamos residuos peligrosos y no peligrosos en los sectores más exigentes del Perú.</p>
  </div>
  <div class="sectores-grid">
    <div class="sector-card">
      <div class="sector-icono">⛏️</div>
      <div class="sector-nombre">Minería y Metalurgia</div>
      <p class="sector-detalle">Lodos industriales, relaves y reactivos químicos caducos. Gestión especializada a nivel nacional.</p>
    </div>
    <div class="sector-card">
      <div class="sector-icono">⚡</div>
      <div class="sector-nombre">Energía e Hidrocarburos</div>
      <p class="sector-detalle">Suelos contaminados, aceites usados y residuos de generación. Exploración hasta refinación.</p>
    </div>
    <div class="sector-card">
      <div class="sector-icono">🌾</div>
      <div class="sector-nombre">Agroindustria</div>
      <p class="sector-detalle">Envases de agroquímicos con triple lavado y residuos del procesamiento agrícola.</p>
    </div>
    <div class="sector-card">
      <div class="sector-icono">🏭</div>
      <div class="sector-nombre">Manufactura y Química</div>
      <p class="sector-detalle">Solventes, pinturas, resinas y materiales con características de peligrosidad CRETIB.</p>
    </div>
    <div class="sector-card">
      <div class="sector-icono">🚢</div>
      <div class="sector-nombre">Sector Marítimo</div>
      <p class="sector-detalle">Cumplimiento MARPOL y gestión de residuos portuarios con certificación.</p>
    </div>
    <div class="sector-card">
      <div class="sector-icono">🏗️</div>
      <div class="sector-nombre">Construcción</div>
      <p class="sector-detalle">RCD y residuos peligrosos de obra. Gestión durante todo el ciclo constructivo.</p>
    </div>
    <div class="sector-card">
      <div class="sector-icono">🔌</div>
      <div class="sector-nombre">Energía Eléctrica</div>
      <p class="sector-detalle">Residuos de generación, transmisión y distribución. PCBs y transformadores.</p>
    </div>
    <div class="sector-card" style="background: var(--verde-ultra); border-color: var(--verde-medio);">
      <div class="sector-icono">📞</div>
      <div class="sector-nombre" style="color: var(--verde-oscuro);">¿Tu sector?</div>
      <p class="sector-detalle" style="color: var(--verde);">Evaluamos cada industria con un diagnóstico personalizado sin costo.</p>
    </div>
  </div>
</section>

<!-- TRAZABILIDAD -->
<section class="trazabilidad" id="trazabilidad">
  <div class="trazabilidad-bg" style="background-image:url('/extracted_image_3.png')"></div>
  <div class="trazabilidad-overlay"></div>
  <div class="section-header">
    <div class="eyebrow">Diferenciador digital</div>
    <h2 class="section-titulo">Trazabilidad digital <em>en tiempo real.</em></h2>
    <p class="section-sub">Desde la generación hasta el destino final, cada residuo tiene historia. Información disponible para tu equipo en cualquier momento.</p>
  </div>
  <div class="traz-layout">
    <div class="traz-pasos">
      <div class="traz-paso">
        <div class="traz-paso-num">01</div>
        <div>
          <div class="traz-paso-titulo">Generación certificada</div>
          <div class="traz-paso-desc">Registro de origen con datos del generador, tipo de residuo y clasificación normativa MINAM.</div>
        </div>
      </div>
      <div class="traz-paso">
        <div class="traz-paso-num">02</div>
        <div>
          <div class="traz-paso-titulo">Recolección con EO-RS</div>
          <div class="traz-paso-desc">Manifiesto verificado antes de autorizar ingreso. Transporte documentado con EO-RS certificada.</div>
        </div>
      </div>
      <div class="traz-paso">
        <div class="traz-paso-num">03</div>
        <div>
          <div class="traz-paso-titulo">Neutralización / Inertización</div>
          <div class="traz-paso-desc">Tratamiento previo al confinamiento en infraestructura propia autorizada por SENACE.</div>
        </div>
      </div>
      <div class="traz-paso">
        <div class="traz-paso-num">04</div>
        <div>
          <div class="traz-paso-titulo">Disposición final documentada</div>
          <div class="traz-paso-desc">Pesaje INACAL + certificado de disposición final. Declaración SIGERSOL incluida.</div>
        </div>
      </div>
    </div>

    <div class="traz-features">
      <div class="traz-feat">
        <div class="traz-feat-titulo">Dashboard operativo en tiempo real</div>
        <div class="traz-feat-desc">Acceso a reportes de tu empresa en cualquier momento. Visualiza volúmenes, fechas, certificados y estatus de cada operación desde tu computadora.</div>
      </div>
      <div class="traz-feat">
        <div class="traz-feat-titulo">Cobertura nacional con red EO-RS</div>
        <div class="traz-feat-desc">Sur del Perú como base. Red de EO-RS aliadas para operaciones en Lima y otras regiones. Un solo interlocutor, cobertura completa.</div>
      </div>
      <div class="traz-feat">
        <div class="traz-feat-titulo">Atención y respuesta en menos de 24 horas</div>
        <div class="traz-feat-desc">Equipo técnico disponible para emergencias ambientales y urgencias operativas. Respuesta garantizada en menos de 24 horas.</div>
      </div>
    </div>
  </div>
</section>

<!-- CERTIFICADO DIGITAL -->
<section class="certdig" id="certificado-digital">
  <div class="certdig-bg" style="background-image:url('/extracted_image_4.jpg')"></div>
  <div class="certdig-overlay"></div>
  <div class="section-header">
    <div class="eyebrow">Diferenciador operativo</div>
    <h2 class="section-titulo">Certificado Digital<br><em>por cada operación.</em></h2>
    <p class="section-sub">Al finalizar cada servicio, SMA emite un certificado digital firmado que acredita la disposición final de tus residuos. Documento válido ante OEFA, auditorías internas y reportes de sostenibilidad.</p>
  </div>

  <div class="certdig-layout">

    <!-- Tarjeta visual -->
    <div class="cert-card-visual">
      <div class="cert-card-header">
        <div class="cert-card-logo">
          <div class="cert-card-logo-sq"><span>SMA</span></div>
          <div class="cert-card-logo-text">Servicios Medioambientales</div>
        </div>
        <div class="cert-card-badge">Verificado</div>
      </div>

      <div class="cert-card-shield">
        <div class="shield-wrap">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 6V12C3 16.97 7.02 21.61 12 23C16.98 21.61 21 16.97 21 12V6L12 2Z" fill="rgba(90,154,42,0.2)" stroke="#7bbf3e" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M8.5 12L11 14.5L15.5 10" stroke="#7bbf3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <div class="cert-card-titulo">Certificado de Disposición Final</div>
      <div class="cert-card-subtitulo">Documento digital firmado · Válido ante OEFA y MINAM</div>

      <div class="cert-card-datos">
        <div class="cert-dato-fila">
          <span class="cert-dato-key">Empresa generadora</span>
          <span class="cert-dato-val">Razón Social del Cliente S.A.</span>
        </div>
        <div class="cert-dato-fila">
          <span class="cert-dato-key">Tipo de residuo</span>
          <span class="cert-dato-val">Aceites usados / Clase A4060</span>
        </div>
        <div class="cert-dato-fila">
          <span class="cert-dato-key">Volumen dispuesto</span>
          <span class="cert-dato-val">12.40 TN · Balanza INACAL</span>
        </div>
        <div class="cert-dato-fila">
          <span class="cert-dato-key">Fecha de disposición</span>
          <span class="cert-dato-val">Km 255.5 Pan. Sur · Ica</span>
        </div>
        <div class="cert-dato-fila">
          <span class="cert-dato-key">N° Manifiesto</span>
          <span class="cert-dato-val">MRS-2025-XXXX · SIGERSOL</span>
        </div>
      </div>

      <div class="cert-card-footer">
        <div class="cert-qr">⬛</div>
        <div class="cert-firma">
          <div class="cert-firma-linea"></div>
          <div class="cert-firma-texto">Firma digital SMA · MINAM EO-RS N°00198-2021</div>
        </div>
      </div>
    </div>

    <!-- Beneficios -->
    <div class="certdig-beneficios">
      <div class="certdig-item">
        <div class="certdig-icono">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 6V12C3 16.97 7.02 21.61 12 23C16.98 21.61 21 16.97 21 12V6L12 2Z" fill="rgba(90,154,42,0.2)" stroke="#7bbf3e" stroke-width="1.8" stroke-linejoin="round"/>
            <path d="M9 12L11 14L15 10" stroke="#7bbf3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <div class="certdig-item-titulo">Emisión automática al cierre</div>
          <div class="certdig-item-desc">Al finalizar cada operación de disposición final, el certificado se genera y envía digitalmente a tu correo. Sin demoras, sin trámites adicionales.</div>
          <span class="certdig-item-tag">Entrega inmediata</span>
        </div>
      </div>

      <div class="certdig-item">
        <div class="certdig-icono">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(90,154,42,0.2)" stroke="#7bbf3e" stroke-width="1.8"/>
            <path d="M8 12H16M8 8H16M8 16H12" stroke="#7bbf3e" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <div class="certdig-item-titulo">Válido ante OEFA y auditorías</div>
          <div class="certdig-item-desc">Incluye número de manifiesto SIGERSOL, peso certificado INACAL, registro EO-RS y resoluciones vigentes de SMA. Acredita el cumplimiento normativo de tu empresa.</div>
          <span class="certdig-item-tag">Aceptado por MINAM · OEFA · EFA</span>
        </div>
      </div>

      <div class="certdig-item">
        <div class="certdig-icono">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" fill="rgba(90,154,42,0.2)" stroke="#7bbf3e" stroke-width="1.8"/>
            <path d="M12 7V12L15 15" stroke="#7bbf3e" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <div class="certdig-item-titulo">Historial acumulado por operación</div>
          <div class="certdig-item-desc">Cada certificado queda registrado en tu historial de operaciones. Accede al archivo completo desde el dashboard en cualquier momento para reportes de sostenibilidad o auditorías internas.</div>
          <span class="certdig-item-tag">Archivo digital permanente</span>
        </div>
      </div>

      <div class="certdig-item">
        <div class="certdig-icono">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" fill="rgba(90,154,42,0.2)" stroke="#7bbf3e" stroke-width="1.8" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <div class="certdig-item-titulo">Soporte para tu área de cumplimiento</div>
          <div class="certdig-item-desc">Tu equipo legal, de medio ambiente o sostenibilidad recibe los documentos listos para archivar y presentar. Sin necesidad de solicitar información adicional a SMA.</div>
          <span class="certdig-item-tag">Listo para archivar</span>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- AUDITORÍA / CONSULTA CERTIFICADO DIGITAL -->
<section id="auditoria" style="background: var(--gris-bg); padding: 96px 64px; scroll-margin-top: 72px;">
  <div class="section-header">
    <div class="eyebrow">Auditoría y trazabilidad</div>
    <h2 class="section-titulo">Visualiza tu<br><em>Certificado Digital.</em></h2>
    <p class="section-sub">Ingresa el RUC de tu empresa y el número de certificado para verificar y descargar tu constancia oficial de disposición final.</p>
  </div>

  <div id="aud-wrap" style="max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start;">

    <!-- PANEL CONSULTA -->
    <div style="background: white; border: 1px solid var(--gris-borde); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
      <div style="background: var(--negro-corp); padding: 20px 28px; display:flex; align-items:center; gap:12px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 6V12C3 16.97 7.02 21.61 12 23C16.98 21.61 21 16.97 21 12V6L12 2Z" fill="rgba(123,191,62,0.2)" stroke="#7bbf3e" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="#7bbf3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.6); font-weight:600;">Consulta de certificado</span>
      </div>
      <div style="padding: 32px 28px;">
        <div style="margin-bottom:20px;">
          <label style="display:block; font-size:11px; font-weight:700; color:var(--negro-corp); margin-bottom:6px; letter-spacing:0.5px; text-transform:uppercase;">RUC del Generador <span style="color:var(--verde);">*</span></label>
          <input type="text" id="aud-ruc" maxlength="11" placeholder="Ej. 20512345678"
            style="width:100%; padding:11px 14px; font-family:'DM Sans',sans-serif; font-size:14px; color:var(--negro-corp); background:white; border:1.5px solid #dde5d4; border-radius:3px; outline:none; transition:border-color 0.2s;"
            oninput="this.value=this.value.replace(/\D/g,'')"
            onfocus="this.style.borderColor='var(--verde)'; this.style.boxShadow='0 0 0 3px rgba(90,154,42,0.1)'"
            onblur="this.style.borderColor='#dde5d4'; this.style.boxShadow='none'">
          <div id="aud-err-ruc" style="font-size:11px; color:#c0392b; margin-top:4px; display:none;">Ingresa un RUC válido de 11 dígitos.</div>
        </div>
        <div style="margin-bottom:28px;">
          <label style="display:block; font-size:11px; font-weight:700; color:var(--negro-corp); margin-bottom:6px; letter-spacing:0.5px; text-transform:uppercase;">N° de Certificado <span style="color:var(--verde);">*</span></label>
          <input type="text" id="aud-ncert" placeholder="Ej. SMA-2025-A7X3K2"
            style="width:100%; padding:11px 14px; font-family:'DM Sans',sans-serif; font-size:14px; color:var(--negro-corp); background:white; border:1.5px solid #dde5d4; border-radius:3px; outline:none; transition:border-color 0.2s; text-transform:uppercase; letter-spacing:1px;"
            oninput="this.value=this.value.toUpperCase()"
            onfocus="this.style.borderColor='var(--verde)'; this.style.boxShadow='0 0 0 3px rgba(90,154,42,0.1)'"
            onblur="this.style.borderColor='#dde5d4'; this.style.boxShadow='none'">
          <div id="aud-err-cert" style="font-size:11px; color:#c0392b; margin-top:4px; display:none;">Ingresa el número de certificado.</div>
        </div>

        <!-- BOTÓN GENERAR DEMO -->
        <button onclick="audGenerar()" style="width:100%; background:var(--verde); color:white; padding:13px 24px; font-size:14px; font-weight:700; border:none; border-radius:3px; cursor:pointer; font-family:'DM Sans',sans-serif; transition:background 0.2s; display:flex; align-items:center; justify-content:center; gap:8px;"
          onmouseover="this.style.background='var(--verde-oscuro)'" onmouseout="this.style.background='var(--verde)'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="white" stroke-width="2"/><path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
          Consultar certificado
        </button>

        <div id="aud-err-notfound" style="display:none; margin-top:16px; background:#fdf0ee; border:1px solid #e8b4ae; border-left:4px solid #c0392b; padding:12px 16px; border-radius:3px; font-size:13px; color:#7a2020;">
          <strong>Certificado no encontrado.</strong> Verifica el RUC y el número de certificado ingresados.
        </div>

        <div style="margin-top:20px; padding-top:16px; border-top:1px solid var(--gris-borde); font-size:11px; color:var(--gris-suave); line-height:1.6;">
          ¿No tienes tu número de certificado? Escríbenos a <strong><a href="/cdn-cgi/l/email-protection#d8bbb7b6acb9bbacb798abb5b9f6b6bdacf6a8bd" style="color:inherit;"><span class="__cf_email__" data-cfemail="0c6f6362786d6f78634c7f616d22626978227c69">[email&#160;protected]</span></a></strong> indicando tu RUC y fecha de servicio.
        </div>
      </div>
    </div>

    <!-- PANEL INSTRUCCIONES -->
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div style="background:white; border:1px solid var(--gris-borde); border-radius:6px; padding:24px; display:flex; gap:16px; align-items:flex-start;">
        <div style="width:40px; height:40px; border-radius:8px; background:var(--verde-ultra); border:1px solid var(--verde-medio); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:18px;">📄</div>
        <div><div style="font-size:14px; font-weight:700; color:var(--negro-corp); margin-bottom:4px;">Certificado PDF con QR</div><div style="font-size:13px; color:var(--gris-texto); line-height:1.6;">El documento incluye todos los datos del servicio, firma digital SMA y código QR de verificación de autenticidad.</div></div>
      </div>
      <div style="background:white; border:1px solid var(--gris-borde); border-radius:6px; padding:24px; display:flex; gap:16px; align-items:flex-start;">
        <div style="width:40px; height:40px; border-radius:8px; background:var(--verde-ultra); border:1px solid var(--verde-medio); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:18px;">✅</div>
        <div><div style="font-size:14px; font-weight:700; color:var(--negro-corp); margin-bottom:4px;">Válido ante OEFA y auditorías</div><div style="font-size:13px; color:var(--gris-texto); line-height:1.6;">Acredita la disposición final de tus residuos. Aceotado por EFA, MINAM, SENACE y auditorías internas.</div></div>
      </div>
      <div style="background:white; border:1px solid var(--gris-borde); border-radius:6px; padding:24px; display:flex; gap:16px; align-items:flex-start;">
        <div style="width:40px; height:40px; border-radius:8px; background:var(--verde-ultra); border:1px solid var(--verde-medio); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:18px;">🔒</div>
        <div><div style="font-size:14px; font-weight:700; color:var(--negro-corp); margin-bottom:4px;">Número único no correlativo</div><div style="font-size:13px; color:var(--gris-texto); line-height:1.6;">Cada certificado tiene un código alfanumérico único generado de forma aleatoria. No es posible predecir ni falsificar.</div></div>
      </div>
      <div style="background: var(--verde-ultra); border:1px solid var(--verde-medio); border-radius:6px; padding:20px 24px; font-size:12px; color:var(--verde-oscuro); line-height:1.7;">
        <strong style="display:block; margin-bottom:4px;">¿Quieres generar un certificado de demostración?</strong>
        Ingresa cualquier RUC de 11 dígitos y haz clic en "Consultar" para ver cómo se genera el PDF con QR de ejemplo.
      </div>
    </div>
  </div>

  <!-- PREVIEW CERTIFICADO (oculto hasta consulta) -->
  <div id="aud-resultado" style="display:none; max-width:960px; margin:48px auto 0;">
    <div style="background:white; border:1px solid var(--gris-borde); border-radius:8px; overflow:hidden; box-shadow:0 8px 32px rgba(0,0,0,0.08);">

      <!-- Header resultado -->
      <div style="background:var(--verde-oscuro); padding:18px 28px; display:flex; align-items:center; justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:12px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 6V12C3 16.97 7.02 21.61 12 23C16.98 21.61 21 16.97 21 12V6L12 2Z" fill="rgba(123,191,62,0.3)" stroke="#7bbf3e" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="#7bbf3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span style="font-size:12px; letter-spacing:1.5px; text-transform:uppercase; color:white; font-weight:700;">Certificado encontrado</span>
        </div>
        <span id="aud-badge" style="background:rgba(123,191,62,0.2); border:1px solid rgba(123,191,62,0.4); padding:4px 12px; border-radius:100px; font-size:11px; font-weight:700; color:#a8e060;"></span>
      </div>

      <!-- Datos del certificado -->
      <div style="padding:28px; display:grid; grid-template-columns:1fr 1fr 1fr; gap:20px; border-bottom:1px solid var(--gris-borde);">
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">N° Certificado</div><div id="aud-d-ncert" style="font-size:15px; font-weight:700; color:var(--negro-corp); letter-spacing:0.5px;"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">RUC Generador</div><div id="aud-d-ruc" style="font-size:15px; font-weight:700; color:var(--negro-corp);"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">Razón Social</div><div id="aud-d-razon" style="font-size:15px; font-weight:700; color:var(--negro-corp);"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">N° Ticket</div><div id="aud-d-ticket" style="font-size:14px; font-weight:600; color:var(--negro-corp);"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">Guía de Remisión</div><div id="aud-d-guia" style="font-size:14px; font-weight:600; color:var(--negro-corp);"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">N° Manifiesto</div><div id="aud-d-manif" style="font-size:14px; font-weight:600; color:var(--negro-corp);"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">Tipo de Residuo</div><div id="aud-d-tipo" style="font-size:14px; font-weight:600; color:var(--negro-corp);"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">Cantidad (TN)</div><div id="aud-d-tn" style="font-size:14px; font-weight:600; color:var(--verde);"></div></div>
        <div><div style="font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--gris-suave); margin-bottom:5px;">Fecha de Emisión</div><div id="aud-d-fecha" style="font-size:14px; font-weight:600; color:var(--negro-corp);"></div></div>
      </div>

      <!-- Footer con botón descarga -->
      <div style="padding:20px 28px; background:var(--gris-bg); display:flex; align-items:center; justify-content:space-between;">
        <div style="font-size:12px; color:var(--gris-suave);">Emitido por SMA · MINAM EO-RS N°00198-2021 · Km 255.5 Panamericana Sur, Ica</div>
        <button onclick="audDescargarPDF()" style="background:var(--verde); color:white; padding:11px 28px; font-size:13px; font-weight:700; border:none; border-radius:3px; cursor:pointer; font-family:'DM Sans',sans-serif; display:flex; align-items:center; gap:8px; transition:background 0.2s;"
          onmouseover="this.style.background='var(--verde-oscuro)'" onmouseout="this.style.background='var(--verde)'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 15L12 3M12 15L8 11M12 15L16 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V17" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
          Descargar PDF con QR
        </button>
      </div>
    </div>
  </div>
</section>



<!-- CERTIFICACIONES -->
<section class="certs" id="certs">
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
</section>

<!-- CTA -->
<div class="cta-section" id="contacto">
  <div class="cta-bg" style="background-image:url('/extracted_image_5.png')"></div>
  <div class="cta-overlay"></div>
  <div>
    <h2 class="cta-titulo">¿Tu empresa genera<br>residuos peligrosos?<br><em>Hablemos hoy.</em></h2>
    <p class="cta-sub">Evaluamos tu operación sin costo y te entregamos una propuesta comercial en menos de 24 horas.</p>
  </div>
  <a href="#cotizacion" class="btn-cta-blanco">Solicitar cotización</a>
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

  <section id="cotizacion" style="background: var(--gris-bg); padding: 80px 64px; scroll-margin-top: 72px;">
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
</section>

` }} />
    </>
  );
}
