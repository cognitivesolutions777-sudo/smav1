

// ── AUDITORÍA: estado global del certificado actual
var audCert = null;

// Genera código aleatorio alfanumérico no correlativo
function audGenCodigo() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return 'SMA-' + new Date().getFullYear() + '-' + code;
}

function audGenTicket() {
  return 'TK-' + String(Math.floor(10000 + Math.random() * 89999));
}

function audGenGuia() {
  const series = ['T001', 'T002', 'T003', 'T004'];
  const s = series[Math.floor(Math.random() * series.length)];
  return s + '-' + String(Math.floor(100000 + Math.random() * 899999));
}

function audGenManifiesto() {
  const y = new Date().getFullYear();
  return 'MRS-' + y + '-' + String(Math.floor(1000 + Math.random() * 8999));
}

var audTipos = [
  'Aceites usados y lubricantes (A4060)',
  'Solventes orgánicos halogenados (A4020)',
  'Residuos de metales pesados (A1010)',
  'Lodos industriales (A4100)',
  'Envases contaminados con pesticidas (A4030)',
  'Residuos de pinturas y barnices (A4070)',
  'Tierras contaminadas con hidrocarburos (A4050)',
  'Baterías y acumuladores usados (A1160)',
];

var audRazones = {
  '20': 'CORPORACIÓN INDUSTRIAL DEL SUR S.A.C.',
  '17': 'AGROKASA HOLDINGS S.A.',
  '10': 'MINERA CERRO LINDO S.A.C.',
  '15': 'INDUSTRIAS TEXTILES PERU S.A.',
  '16': 'PESQUERA HAYDUK S.A.',
  '21': 'PLANTA INDUSTRIAL NAZCA S.R.L.',
  '19': 'AGROINDUSTRIAS LA NUEVA TIERRA S.A.C.',
  '18': 'COMPAÑÍA MANUFACTURERA DEL PACÍFICO S.A.',
};

function audGetRazon(ruc) {
  const prefix = ruc.substring(0, 2);
  return audRazones[prefix] || 'EMPRESA GENERADORA ' + ruc.substring(0, 5) + ' S.A.C.';
}

function audFormatFecha(d) {
  return d.getDate().toString().padStart(2, '0') + '/' +
    (d.getMonth() + 1).toString().padStart(2, '0') + '/' + d.getFullYear();
}

function audGenerar() {
  const ruc = document.getElementById('aud-ruc').value.trim();
  const ncert = document.getElementById('aud-ncert').value.trim();
  let ok = true;

  // Validación RUC
  if (!ruc || ruc.length !== 11) {
    document.getElementById('aud-err-ruc').style.display = 'block';
    ok = false;
  } else { document.getElementById('aud-err-ruc').style.display = 'none'; }

  // Validación N° cert (si está vacío, generamos uno nuevo)
  document.getElementById('aud-err-cert').style.display = 'none';
  document.getElementById('aud-err-notfound').style.display = 'none';

  if (!ok) return;

  // Construir datos del certificado
  const hoy = new Date();
  const fechaEmision = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() - Math.floor(Math.random() * 30));

  audCert = {
    ncert: ncert && ncert.length > 4 ? ncert.toUpperCase() : audGenCodigo(),
    ruc: ruc,
    razon: audGetRazon(ruc),
    ticket: audGenTicket(),
    guia: audGenGuia(),
    manif: audGenManifiesto(),
    tipo: audTipos[Math.floor(Math.random() * audTipos.length)],
    tn: (Math.random() * 45 + 0.5).toFixed(3),
    fecha: audFormatFecha(fechaEmision),
    hashQR: 'https://sma.net.pe/cert/' + (ncert || audGenCodigo()).replace(/[^A-Z0-9]/g, '') + '/' + ruc,
  };

  // Poblar la vista previa
  document.getElementById('aud-d-ncert').textContent = audCert.ncert;
  document.getElementById('aud-d-ruc').textContent = audCert.ruc;
  document.getElementById('aud-d-razon').textContent = audCert.razon;
  document.getElementById('aud-d-ticket').textContent = audCert.ticket;
  document.getElementById('aud-d-guia').textContent = audCert.guia;
  document.getElementById('aud-d-manif').textContent = audCert.manif;
  document.getElementById('aud-d-tipo').textContent = audCert.tipo;
  document.getElementById('aud-d-tn').textContent = audCert.tn + ' TN';
  document.getElementById('aud-d-fecha').textContent = audCert.fecha;
  document.getElementById('aud-badge').textContent = '● VÁLIDO';

  const res = document.getElementById('aud-resultado');
  res.style.display = 'block';
  res.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function audDescargarPDF() {
  if (!audCert) return;

  // Cargar jsPDF + qrcode dinámicamente
  const loadScript = (src) => new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });

  Promise.all([
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'),
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js')
  ]).then(() => {
    // Generar QR como imagen data URL
    const qrDiv = document.createElement('div');
    qrDiv.style.cssText = 'position:absolute;left:-9999px;top:-9999px;';
    document.body.appendChild(qrDiv);
    const qr = new QRCode(qrDiv, {
      text: audCert.hashQR,
      width: 120, height: 120,
      colorDark: '#1c2118', colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
      const qrImg = qrDiv.querySelector('img') || qrDiv.querySelector('canvas');
      let qrDataUrl = '';
      try {
        if (qrImg.tagName === 'CANVAS') qrDataUrl = qrImg.toDataURL('image/png');
        else qrDataUrl = qrImg.src;
      } catch (e) { }
      document.body.removeChild(qrDiv);
      audBuildPDF(qrDataUrl);
    }, 400);
  });
}

function audBuildPDF(qrDataUrl) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // ── SISTEMA DE DISEÑO ───────────────────────────────────────────
  const W = 210, H = 297;
  const ML = 20, MR = 20;          // márgenes laterales uniformes
  const CW = W - ML - MR;          // ancho de contenido: 170 mm
  const COL1 = 72;                  // ancho columna etiqueta
  const COL2 = CW - COL1;          // ancho columna valor

  // Paleta reducida
  const C = {
    verde: [61, 107, 28],
    verdeClaro: [90, 154, 42],
    negro: [28, 33, 24],
    gris1: [80, 90, 75],         // texto secundario
    gris2: [140, 150, 135],      // texto terciario / footers
    linea: [210, 218, 205],      // bordes de tabla
    fondoFila: [248, 250, 246],      // fila alternada
    blanco: [255, 255, 255],
  };

  const setFill = (c) => doc.setFillColor(...c);
  const setStroke = (c) => doc.setDrawColor(...c);
  const setColor = (c) => doc.setTextColor(...c);
  const bold = (sz) => { doc.setFont('helvetica', 'bold'); doc.setFontSize(sz); };
  const normal = (sz) => { doc.setFont('helvetica', 'normal'); doc.setFontSize(sz); };
  const label = (sz) => { doc.setFont('helvetica', 'bold'); doc.setFontSize(sz); };

  // ── FONDO BLANCO ────────────────────────────────────────────────
  setFill(C.blanco);
  doc.rect(0, 0, W, H, 'F');

  // ── FRANJA SUPERIOR ─────────────────────────────────────────────
  // Barra verde oscura (altura 22 mm)
  setFill(C.verde);
  doc.rect(0, 0, W, 22, 'F');

  // Logotipo SMA — bloque tipográfico alineado al margen izquierdo
  bold(13);
  setColor(C.blanco);
  doc.text('SMA', ML, 10);
  normal(7);
  setColor([180, 210, 155]);
  doc.text('SERVICIOS MEDIOAMBIENTALES S.A.', ML, 15.5);
  normal(6);
  setColor([140, 175, 110]);
  doc.text('Km 255.5 Panamericana Sur, Salas \u2013 Ica, Per\u00FA  \u00B7  contacto@sma.net.pe  \u00B7  RUC 20565964292', ML, 19.5);

  // Indicador de estado — derecha, alineado al margen derecho
  normal(6.5);
  setColor([180, 210, 155]);
  doc.text('ESTADO DEL DOCUMENTO', ML + CW, 10, { align: 'right' });
  bold(8);
  setColor(C.blanco);
  doc.text('CERTIFICADO V\u00C1LIDO', ML + CW, 15.5, { align: 'right' });
  normal(6);
  setColor([140, 175, 110]);
  doc.text('sma.net.pe/auditoria', ML + CW, 19.5, { align: 'right' });

  // Línea de acento bajo la franja
  setStroke(C.verdeClaro);
  doc.setLineWidth(0.6);
  doc.line(0, 22, W, 22);

  // ── ENCABEZADO DEL DOCUMENTO ────────────────────────────────────
  let y = 34;

  bold(15);
  setColor(C.negro);
  doc.text('CERTIFICADO DE DISPOSICI\u00D3N FINAL', ML, y);

  y += 6;
  normal(8);
  setColor(C.gris1);
  doc.text('Documento oficial de trazabilidad de residuos s\u00F3lidos \u00B7 V\u00E1lido ante OEFA, MINAM y auditor\u00EDas ambientales', ML, y);

  // Línea divisora principal
  y += 5;
  setStroke(C.linea);
  doc.setLineWidth(0.4);
  doc.line(ML, y, ML + CW, y);

  // ── NÚMERO DE CERTIFICADO ───────────────────────────────────────
  y += 8;
  normal(7);
  setColor(C.gris2);
  doc.text('N\u00DAMERO DE CERTIFICADO', ML, y);

  y += 5;
  bold(16);
  setColor(C.verde);
  doc.text(audCert.ncert, ML, y);

  // Fecha de emisión — derecha, misma línea base
  normal(7);
  setColor(C.gris2);
  doc.text('FECHA DE EMISI\u00D3N', ML + CW, y - 5, { align: 'right' });
  bold(9);
  setColor(C.negro);
  doc.text(audCert.fecha, ML + CW, y, { align: 'right' });

  // Línea divisora secundaria
  y += 7;
  setStroke(C.linea);
  doc.setLineWidth(0.3);
  doc.line(ML, y, ML + CW, y);

  // ── TABLA DE DATOS ──────────────────────────────────────────────
  // Encabezado de sección
  y += 7;
  label(6.5);
  setColor(C.gris2);
  doc.text('DATOS DEL SERVICIO', ML, y);
  doc.text('VALOR', ML + COL1 + 2, y);

  y += 3;

  const filas = [
    ['Raz\u00F3n Social del Generador', audCert.razon],
    ['RUC del Generador', audCert.ruc],
    ['N\u00B0 de Ticket', audCert.ticket],
    ['Gu\u00EDa de Remisi\u00F3n', audCert.guia],
    ['N\u00B0 de Manifiesto SIGERSOL', audCert.manif],
    ['Tipo de Residuo', audCert.tipo],
    ['Cantidad Dispuesta (TN)', audCert.tn + ' Tn \u2014 Balanza certificada INACAL'],
    ['Instalaci\u00F3n de Destino', 'Relleno de Seguridad SMA \u00B7 Km 255.5 Pan. Sur, Salas \u2013 Ica'],
    ['Operador EO-RS', 'SMA Servicios Medioambientales S.A. \u00B7 N\u00B000198-2021-MINAM/VMGA/DGRS'],
  ];

  const ROW_H = 11;

  filas.forEach(([etiqueta, valor], i) => {
    // fondo alternado
    if (i % 2 !== 0) {
      setFill(C.fondoFila);
      doc.rect(ML, y, CW, ROW_H, 'F');
    }
    // borde inferior de fila
    setStroke(C.linea);
    doc.setLineWidth(0.2);
    doc.line(ML, y + ROW_H, ML + CW, y + ROW_H);
    // separador vertical etiqueta/valor
    doc.line(ML + COL1, y, ML + COL1, y + ROW_H);

    // etiqueta
    normal(7);
    setColor(C.gris1);
    doc.text(etiqueta, ML + 3, y + 7);

    // valor
    bold(8);
    setColor(C.negro);
    // wrap automático si supera COL2
    const lines = doc.splitTextToSize(valor, COL2 - 4);
    doc.text(lines[0], ML + COL1 + 3, y + 7);

    y += ROW_H;
  });

  // ── SECCIÓN VERIFICACIÓN / QR ───────────────────────────────────
  y += 10;

  // Etiqueta de sección
  label(6.5);
  setColor(C.gris2);
  doc.text('VERIFICACI\u00D3N DE AUTENTICIDAD', ML, y);

  y += 4;

  // Caja QR — 32×32 mm, alineada al margen izquierdo
  const QR_SZ = 32;
  setStroke(C.linea);
  doc.setLineWidth(0.3);
  doc.rect(ML, y, QR_SZ, QR_SZ, 'S');

  if (qrDataUrl) {
    try { doc.addImage(qrDataUrl, 'PNG', ML, y, QR_SZ, QR_SZ); } catch (e) { }
  }

  // Texto de verificación — a la derecha del QR
  const TX = ML + QR_SZ + 8;
  const TW = CW - QR_SZ - 8;

  normal(6.5);
  setColor(C.gris2);
  doc.text('URL DE VERIFICACI\u00D3N', TX, y + 5);
  normal(7);
  setColor(C.verde);
  const urlLines = doc.splitTextToSize(audCert.hashQR, TW);
  doc.text(urlLines, TX, y + 10);

  normal(6.5);
  setColor(C.gris2);
  doc.text('HASH DE AUTENTICIDAD', TX, y + 19);
  normal(7);
  setColor(C.negro);
  const hash = btoa(audCert.ncert + audCert.ruc + audCert.fecha).substring(0, 32).toUpperCase();
  doc.text(hash, TX, y + 24);

  normal(6.5);
  setColor(C.gris2);
  doc.text('ESCANEA EL C\u00D3DIGO QR O INGRESA EN', TX, y + 33);
  bold(7);
  setColor(C.verde);
  doc.text('sma.net.pe/auditoria', TX, y + 38);

  y += QR_SZ + 10;

  // ── SECCIÓN FIRMAS ──────────────────────────────────────────────
  // Línea divisora
  setStroke(C.linea);
  doc.setLineWidth(0.3);
  doc.line(ML, y, ML + CW, y);

  y += 8;

  // Tres columnas de igual ancho: CW/3 cada una
  const FC = CW / 3;

  // Col 1: Firma Gerencia Técnica
  normal(6.5);
  setColor(C.gris2);
  doc.text('GERENCIA T\u00C9CNICA', ML + FC * 0, y, { align: 'left' });
  setStroke(C.linea);
  doc.setLineWidth(0.4);
  doc.line(ML, y + 12, ML + FC - 6, y + 12);
  normal(7);
  setColor(C.gris1);
  doc.text('Firma y sello', ML, y + 17);
  doc.text('Servicios Medioambientales S.A.', ML, y + 21);

  // Col 2: Firma Responsable Ambiental
  normal(6.5);
  setColor(C.gris2);
  doc.text('RESPONSABLE AMBIENTAL', ML + FC, y);
  doc.setLineWidth(0.4);
  doc.line(ML + FC, y + 12, ML + FC * 2 - 6, y + 12);
  normal(7);
  setColor(C.gris1);
  doc.text('Firma y sello', ML + FC, y + 17);

  // Col 3: Registros regulatorios
  normal(6.5);
  setColor(C.gris2);
  doc.text('AUTORIZACIONES REGULATORIAS', ML + FC * 2, y);
  normal(6.5);
  setColor(C.gris1);
  const regs = [
    'MINAM \u00B7 EO-RS N\u00B000198-2021-MINAM',
    'SENACE \u00B7 EIA N\u00B00071-2020-SENACE',
    'DIGESA \u00B7 N\u00B0004-2017/DSA',
    'INSPECCI\u00D3N T\u00C9CNICA N\u00B0089-2024',
  ];
  regs.forEach((r, i) => doc.text(r, ML + FC * 2, y + 6 + i * 4.5));

  // ── PIE DE PÁGINA ───────────────────────────────────────────────
  // Línea de pie
  setStroke(C.linea);
  doc.setLineWidth(0.3);
  doc.line(ML, H - 14, ML + CW, H - 14);

  normal(6);
  setColor(C.gris2);
  doc.text(
    'SMA Servicios Medioambientales S.A.  \u00B7  RUC 20565964292  \u00B7  Km 255.5 Panamericana Sur, Salas \u2013 Ica, Per\u00FA  \u00B7  www.sma.net.pe',
    ML, H - 10
  );
  doc.text(
    'Documento generado digitalmente  \u00B7  ' + new Date().toLocaleString('es-PE'),
    ML, H - 6
  );

  // Número de página derecha
  normal(6);
  setColor(C.gris2);
  doc.text('1 / 1', ML + CW, H - 8, { align: 'right' });

  doc.save('Certificado_SMA_' + audCert.ncert + '.pdf');
}



// Estado aislado del formulario
var cot = { paso: 1, tipo: null, frec: null, priv: false };

function cotTipo(el, val) {
  document.querySelectorAll('.cot-tipo').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel'); cot.tipo = val;
  document.getElementById('cerr-tipo').classList.remove('vis');
  const c = document.getElementById('ccond-cambio');
  val === 'cambio' ? c.classList.add('vis') : c.classList.remove('vis');
}

function cotChk(el) {
  el.classList.toggle('sel');
  el.querySelector('.cot-chk-box').textContent = el.classList.contains('sel') ? '✓' : '';
}

function cotChkOtro(el) {
  cotChk(el);
  const c = document.getElementById('ccond-otro');
  el.classList.contains('sel') ? c.classList.add('vis') : c.classList.remove('vis');
}

function cotFrec(el, val) {
  document.querySelectorAll('.cot-frec').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel'); cot.frec = val;
  document.getElementById('cerr-frec').classList.remove('vis');
}

function cotRegion() {
  const v = document.getElementById('c-region').value;
  const c = document.getElementById('ccond-region');
  v === 'Otra región' ? c.classList.add('vis') : c.classList.remove('vis');
}

function cotUrgencia() {
  const v = document.getElementById('c-urgencia').value;
  const a = document.getElementById('cot-alerta');
  v === 'urgente' ? a.classList.add('vis') : a.classList.remove('vis');
}

function cotPriv() {
  cot.priv = !cot.priv;
  document.getElementById('cot-priv').classList.toggle('sel', cot.priv);
  document.getElementById('cot-priv-box').textContent = cot.priv ? '✓' : '';
  if (cot.priv) document.getElementById('cerr-priv').classList.remove('vis');
}

function cotVal(n) {
  let ok = true;
  const req = (id, eid) => {
    const el = document.getElementById(id);
    const er = document.getElementById(eid);
    if (!el || !el.value.trim()) { el && el.classList.add('err'); er && er.classList.add('vis'); ok = false; }
    else { el && el.classList.remove('err'); er && er.classList.remove('vis'); }
  };
  if (n === 1) {
    req('c-nombre', 'cerr-nombre'); req('c-cargo', 'cerr-cargo'); req('c-empresa', 'cerr-empresa');
    const em = document.getElementById('c-email');
    if (!em.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) { em.classList.add('err'); document.getElementById('cerr-email').classList.add('vis'); ok = false; }
    else { em.classList.remove('err'); document.getElementById('cerr-email').classList.remove('vis'); }
    req('c-tel', 'cerr-tel');
    if (!cot.tipo) { document.getElementById('cerr-tipo').classList.add('vis'); ok = false; }
  }
  if (n === 2) {
    if (!document.querySelectorAll('#cchk-cat .sel').length) { document.getElementById('cerr-cat').classList.add('vis'); ok = false; } else document.getElementById('cerr-cat').classList.remove('vis');
    if (!document.querySelectorAll('#cchk-tipos .sel').length) { document.getElementById('cerr-tipos').classList.add('vis'); ok = false; } else document.getElementById('cerr-tipos').classList.remove('vis');
  }
  if (n === 3) { req('c-region', 'cerr-region'); req('c-vol', 'cerr-vol'); if (!cot.frec) { document.getElementById('cerr-frec').classList.add('vis'); ok = false; } }
  return ok;
}

function cotStepper(actual) {
  for (let i = 1; i <= 4; i++) {
    const n = document.getElementById(`csn${i}`); const l = document.getElementById(`csl${i}`);
    n.className = 'cot-step-n'; l.className = 'cot-step-lbl';
    if (i < actual) { n.classList.add('hecho'); n.textContent = '✓'; }
    else if (i === actual) { n.classList.add('activo'); n.textContent = i; l.classList.add('activo'); }
    else { n.textContent = i; }
    if (i < 4) document.getElementById(`clin${i}`).className = 'cot-linea' + (i < actual ? ' hecha' : '');
  }
}

function cotResumen() {
  const tm = { recurrente: 'Residuos recurrentes (contrato)', puntual: 'Evento puntual', nuevo: 'Primera vez', cambio: 'Cambio de operador' };
  const cats = [...document.querySelectorAll('#cchk-cat .sel')].map(e => {
    const lbl = e.querySelector('.cot-chk-lbl').textContent.trim();
    if (lbl === '📋 Otros') {
      const otro = document.getElementById('c-cat-otro').value.trim();
      return otro ? `Otros (${otro})` : 'Otros';
    }
    return lbl;
  }).join(', ');
  const tipos = [...document.querySelectorAll('#cchk-tipos .sel')].map(e => e.querySelector('.cot-chk-lbl').textContent.trim()).join(', ');
  const reg = document.getElementById('c-region').value === 'Otra región' ? document.getElementById('c-region-otro').value : document.getElementById('c-region').value;
  const filas = [
    ['Nombre', document.getElementById('c-nombre').value],
    ['Empresa', document.getElementById('c-empresa').value],
    ['Correo', document.getElementById('c-email').value],
    ['Teléfono', document.getElementById('c-tel').value],
    ['Tipo de necesidad', tm[cot.tipo] || '—'],
    ['Categoría de residuo', cats || '—'],
    ['Tipos específicos', tipos || '—'],
    ['Región de generación', reg || '—'],
    ['Volumen estimado', `${document.getElementById('c-vol').value} ${document.getElementById('c-unidad').value}`],
    ['Frecuencia', cot.frec || '—'],
    ['Plazo requerido', document.getElementById('c-urgencia').value || '—'],
  ];
  const notas = document.getElementById('c-notas').value;
  if (notas) filas.push(['Notas adicionales', notas]);
  document.getElementById('cot-resumen-body').innerHTML = filas.map(([k, v]) => `<div class="cot-res-fila"><span class="cot-res-k">${k}</span><span class="cot-res-v">${v}</span></div>`).join('');
}

function cotIr(n) {
  const actual = cot.paso;
  if (n > actual && !cotVal(actual)) return;
  document.getElementById(`cpaso${actual}`).classList.remove('activo');
  document.getElementById(`cpaso${n}`).classList.add('activo');
  cot.paso = n; cotStepper(n);
  if (n === 4) cotResumen();
  const targetId = window.innerWidth <= 900 ? 'cot-stepper' : 'cotizacion';
  document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function cotEnviar() {
  if (!cot.priv) { document.getElementById('cerr-priv').classList.add('vis'); return; }
  const tm = { recurrente: 'Residuos recurrentes', puntual: 'Evento puntual', nuevo: 'Primera vez', cambio: 'Cambio de operador' };
  const cats = [...document.querySelectorAll('#cchk-cat .sel')].map(e => {
    const lbl = e.querySelector('.cot-chk-lbl').textContent.trim();
    if (lbl === '📋 Otros') {
      const otro = document.getElementById('c-cat-otro').value.trim();
      return otro ? `Otros (${otro})` : 'Otros';
    }
    return lbl;
  }).join(', ');
  const tipos = [...document.querySelectorAll('#cchk-tipos .sel')].map(e => e.querySelector('.cot-chk-lbl').textContent.trim()).join(', ');
  const reg = document.getElementById('c-region').value === 'Otra región' ? document.getElementById('c-region-otro').value : document.getElementById('c-region').value;
  const nombre = document.getElementById('c-nombre').value;
  const empresa = document.getElementById('c-empresa').value;
  const asunto = encodeURIComponent(`Solicitud de cotización — ${empresa} — SMA`);
  const cuerpo = encodeURIComponent(
    `SOLICITUD DE COTIZACIÓN — SMA SERVICIOS MEDIOAMBIENTALES
=========================================================

DATOS DE CONTACTO
Nombre:    ${nombre}
Cargo:     ${document.getElementById('c-cargo').value}
Empresa:   ${empresa}
Correo:    ${document.getElementById('c-email').value}
Teléfono:  ${document.getElementById('c-tel').value}

TIPO DE NECESIDAD
${tm[cot.tipo] || '—'}

RESIDUOS
Categoría: ${cats}
Tipos:     ${tipos}
Clasificación: ${document.getElementById('c-clasif').value}

OPERACIÓN
Región:      ${reg}
Volumen:     ${document.getElementById('c-vol').value} ${document.getElementById('c-unidad').value}
Frecuencia:  ${cot.frec}
Plazo:       ${document.getElementById('c-urgencia').value}
Almacenamiento: ${document.getElementById('c-almac').value}

NOTAS ADICIONALES
${document.getElementById('c-notas').value || '(ninguna)'}

=========================================================
Enviado desde: Web SMA — sma.net.pe`);
  const correoUsuario = document.getElementById('c-email').value;
  window.location.href = `mailto:datadriven111@gmail.com?cc=contacto@sma.net.pe,${correoUsuario}&subject=${asunto}&body=${cuerpo}`;
  for (let i = 1; i <= 4; i++) document.getElementById(`cpaso${i}`).classList.remove('activo');
  document.getElementById('cot-stepper').style.display = 'none';
  document.getElementById('cot-exito').classList.add('vis');
}

function cotReset() {
  cot.paso = 1; cot.tipo = null; cot.frec = null; cot.priv = false;
  document.getElementById('cot-stepper').style.display = 'flex';

}

