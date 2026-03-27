'use client';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-left">
        <div className="hero-pill">Empresa regulada y certificada · MINAM · SENACE</div>
        <h1 className="hero-titulo">
          Gestión de residuos<br />
          peligrosos con<br />
          <em>trazabilidad total.</em>
        </h1>
        <p className="hero-sub">
          Asumimos la custodia legal y ambiental de tu operación desde la generación
          hasta el certificado de disposición final. Relleno de seguridad propio en
          Ica, cobertura nacional.
        </p>
        <div className="hero-btns">
          <a href="#cotizacion" className="btn-primary">Solicitar cotización</a>
          <a href="#servicios" className="btn-outline">Ver servicios</a>
        </div>
        <div className="hero-kpis">
          <div className="kpi-item">
            <div className="kpi-num">15+</div>
            <div className="kpi-txt">Años de experiencia en el sector ambiental</div>
          </div>
          <div className="kpi-item">
            <div className="kpi-num">24h</div>
            <div className="kpi-txt">Respuesta garantizada para emergencias</div>
          </div>
          <div className="kpi-item">
            <div className="kpi-num">100%</div>
            <div className="kpi-txt">Conformidad en auditorías OEFA y MINAM</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-tags">
          <div className="hero-tag">
            <div className="tag-titulo">Manifiestos + SIGERSOL</div>
            <div className="tag-desc">Documentación 100% conforme. Lista para declaración MINAM sin trabajo adicional.</div>
          </div>
          <div className="hero-tag">
            <div className="tag-titulo">Dashboard en tiempo real</div>
            <div className="tag-desc">Trazabilidad digital operativa. Reportes y alertas disponibles 24/7.</div>
          </div>
        </div>
        <div className="hero-contact-strip">
          <div className="hcs-item"><div className="hcs-dot"></div> Km 255.5 Panamericana Sur, Ica</div>
          <div className="hcs-item"><div class="hcs-dot"></div> Lord Nelson 354, Miraflores, Lima</div>
          <div className="hcs-item"><div class="hcs-dot"></div> <a href="mailto:comercial@sma.com.pe" style={{ color: 'inherit' }}>comercial@sma.com.pe</a> · (051) 994 624 116</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
