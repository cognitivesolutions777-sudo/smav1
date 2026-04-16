'use client';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="/">
          <img src="/logo_sma_111.png" alt="SMA Logo" style={{ height: '52px', width: 'auto' }} />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#porque">Por qué SMA</a></li>
        <li>
          <a href="#servicios" id="mega-toggle">
            Servicios <span className="mega-arrow">▼</span>
          </a>
          <div className="megamenu">
            <div className="mega-col">
              <h4>Gestión Residuos</h4>
              <a href="#">Relleno de Seguridad</a>
              <a href="#">Tratamiento Ecológico</a>
              <a href="#">Disposición Final</a>
            </div>
            <div className="mega-col">
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
      <a href="#cotizacion" className="nav-cta">Solicitar cotización</a>
      <div className="mobile-toggle" id="mobile-btn">☰</div>
    </nav>
  );
};

export default Navbar;
