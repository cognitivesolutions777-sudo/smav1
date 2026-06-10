'use client';
import React, { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://app.sma.net.pe';

const ShieldCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const Magnifier = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const FileText = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

function formatDate(isoDate) {
  if (!isoDate) return '-';
  const [y, m, d] = isoDate.split('-');
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  return `${d} ${months[parseInt(m, 10) - 1]} ${y}`;
}

export default function CertificadoDigital() {
  const [ruc, setRuc] = useState('');
  const [numeroCertificado, setNumeroCertificado] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    const qIdx = hash.indexOf('?');
    if (qIdx === -1) return;
    const params = new URLSearchParams(hash.slice(qIdx + 1));
    const rucParam = params.get('ruc');
    const certParam = params.get('certificado');
    if (rucParam) setRuc(rucParam);
    if (certParam) setNumeroCertificado(certParam);
    if (rucParam && certParam) {
      doConsulta(rucParam, certParam);
    }
  }, []);

  async function doConsulta(rucVal, certVal) {
    if (rucVal.length !== 11) { setError('El RUC debe tener 11 dígitos.'); return; }
    if (!certVal.trim()) { setError('Ingresa el número de certificado.'); return; }
    setError('');
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}/api/v1/trazabilidad/consulta?ruc=${encodeURIComponent(rucVal)}&numero_certificado=${encodeURIComponent(certVal)}`
      );
      if (res.status === 404) { setError('Certificado no encontrado. Verifica el RUC y el número.'); return; }
      if (!res.ok) { setError('Error al consultar. Intenta más tarde.'); return; }
      setResult(await res.json());
    } catch {
      setError('No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    doConsulta(ruc, numeroCertificado);
  }

  return (
    <section className="certdig" id="trazabilidad">
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
                <input
                  type="text"
                  placeholder="Ej. 20512345678"
                  maxLength={11}
                  value={ruc}
                  onChange={e => setRuc(e.target.value.replace(/\D/g, '').slice(0, 11))}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                />
              </div>
              <div className="cert-input-row">
                <label>N° DE CERTIFICADO *</label>
                <input
                  type="text"
                  placeholder="EJ. SMA-2025-A7X3K2"
                  value={numeroCertificado}
                  onChange={e => setNumeroCertificado(e.target.value.toUpperCase())}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                />
              </div>

              {error && <p className="cert-error">{error}</p>}

              <button
                className="cert-btn-consultar"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <span className="cert-spinner" /> : <Magnifier />}
                {loading ? 'Consultando...' : 'Consultar certificado'}
              </button>

              <p className="cert-form-footer">
                ¿No tienes tu número de certificado? Escríbenos a{' '}
                <a href="mailto:contacto@sma.net.pe">contacto@sma.net.pe</a>{' '}
                indicando tu RUC y fecha de servicio.
              </p>
            </div>
          </div>

          <div className="cert-info-side">
            {result ? (
              <div className="cert-result-card">
                <div className="cert-result-hdr">
                  <div className="cert-result-brand">
                    <span className="cert-result-logo">SMA</span>
                    <span className="cert-result-brand-label">SERVICIOS MEDIOAMBIENTALES</span>
                  </div>
                  <span className="cert-result-badge">● Verificado</span>
                </div>

                <div className="cert-result-body">
                  <div className="cert-result-main">
                    <div className="cert-result-shield"><ShieldCheck /></div>
                    <h3>Certificado de Disposición Final</h3>
                    <p className="cert-result-sub">Documento digital · Válido ante OEFA y MINAM</p>

                    <div className="cert-result-rows">
                      <div className="cert-result-row">
                        <span className="cert-result-lbl">Empresa generadora</span>
                        <span className="cert-result-val">{result.razon_social}</span>
                      </div>
                      <div className="cert-result-row">
                        <span className="cert-result-lbl">N° Certificado</span>
                        <span className="cert-result-val cert-result-num">{result.numero_certificado}</span>
                      </div>
                      <div className="cert-result-row">
                        <span className="cert-result-lbl">Fecha de emisión</span>
                        <span className="cert-result-val">{formatDate(result.fecha_emision)}</span>
                      </div>
                      <div className="cert-result-row">
                        <span className="cert-result-lbl">RUC</span>
                        <span className="cert-result-val">{result.ruc_generador}</span>
                      </div>
                    </div>

                    <a
                      href={result.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-result-pdf-btn"
                    >
                      <FileText /> Descargar certificado PDF
                    </a>
                  </div>

                  {(result.pdf_url || result.qr_url) && (
                    <div className="cert-result-qr">
                      <img 
                        src={result.pdf_url 
                          ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(result.pdf_url)}`
                          : result.qr_url
                        } 
                        alt="Código QR de verificación" 
                      />
                      <span>Escanear para verificar</span>
                    </div>
                  )}
                </div>

                <div className="cert-result-footer">
                  FIRMA DIGITAL SMA · MINAM EO-RS N°0188-2021
                </div>
              </div>
            ) : (
              <>
                <div className="cert-mini-card">
                  <div className="cert-mini-icon"><FileText /></div>
                  <div className="cert-mini-content">
                    <strong>Certificado PDF con QR</strong>
                    <p>El documento incluye todos los datos del servicio, firma digital SMA y código QR de verificación de autenticidad.</p>
                  </div>
                </div>
                {/*<div className="cert-mini-card">
                  <div className="cert-mini-icon" style={{color: 'var(--verde)'}}><ShieldCheck /></div>
                  <div className="cert-mini-content">
                    <strong>Válido ante OEFA y auditorías</strong>
                    <p>Acredita la disposición final de tus residuos. Aceptado por FFA, MINAM, SENACE y auditorías internas.</p>
                  </div>
                </div>*/}
                <div className="cert-demo-box">
                  <strong>¿Quieres verificar tu certificado?</strong>
                  <p>Ingresa tu RUC de 11 dígitos y el número de certificado (formato SMA-YYYY-XXXXXX) y haz clic en "Consultar".</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
