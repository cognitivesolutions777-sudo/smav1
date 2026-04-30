import fs from 'fs';
import path from 'path';

// Lee el archivo .env.local
const envPath = path.resolve('.env.local');
let token = '';
let url = 'http://177.7.52.83:1338';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const tokenMatch = envContent.match(/STRAPI_API_TOKEN=(.*)/);
  if (tokenMatch) {
    token = tokenMatch[1].trim();
  }
}

if (!token) {
  console.error("No se encontró el token en .env.local");
  process.exit(1);
}

const payload = {
  data: {
    hero_eyebrow: 'Empresa regulada y certificada · MINAM · SENACE',
    hero_title: 'Gestión de residuos peligrosos con trazabilidad total.',
    hero_subtitle: 'Asumimos la custodia legal y ambiental de tu operación desde la generación hasta el certificado de disposición final. Relleno de seguridad propio en Ica, cobertura nacional.',
    hero_cta_text: 'Solicitar cotización',
    
    infra_title: 'Relleno de Seguridad Ica',
    infra_subtitle: 'Instalaciones autorizadas en Km 255.5 Panamericana Sur. Ingeniería de confinamiento con tecnología certificada.',
    infra_items: [
      { title: 'Impermeabilización HDPE', description: 'Geomembranas de polietileno de alta densidad. Sistema de barreras múltiples para aislamiento total y definitivo de materiales peligrosos del suelo y napas freáticas.', number: '01' },
      { title: 'Control Geotécnico', description: 'Supervisión de estabilidad física en cada fase de confinamiento. Coberturas diarias que previenen dispersión de partículas.', number: '02' },
      { title: 'Balanza Electrónica 80 TN', description: 'Certificada por laboratorios acreditados ante INACAL. Garantía de exactitud en declaraciones ante el MINAM.', number: '03' },
      { title: 'EIA Aprobado · SENACE', description: 'Estudio de Impacto Ambiental N°0071-2020 aprobado. La operación más ambientalmente controlada del sur del Perú.', number: '04' }
    ],

    servicios_title: 'Todo el ciclo. Un solo responsable.',
    servicios_items: [
      { title: 'Residuos Peligrosos', description: 'Gestión integral de aceites usados, solventes, químicos, baterías y tierras contaminadas. Confinamiento con trazabilidad completa.', tag: 'Trazabilidad completa', icon_name: 'TriangleExclamation', number: '01' },
      { title: 'Residuos No Peligrosos', description: 'Residuos industriales y comerciales con certificación completa. Economía circular bajo normativa MINAM vigente.', tag: 'Certificación MINAM', icon_name: 'ArrowRotateLeft', number: '02' },
      { title: 'Tercerización de Transporte', description: 'Red de EO-RS certificadas para transporte de residuos peligrosos. Cobertura sur del Perú y operaciones nacionales.', tag: 'Cobertura nacional', icon_name: 'Route', number: '03' },
      { title: 'Tratamiento y Disposición Final', description: 'Instalaciones propias autorizadas Km 255.5. Geomembranas HDPE, control geotécnico y certificado por operación.', tag: 'Infraestructura propia', icon_name: 'ShieldCheck', number: '04' },
      { title: 'Gestión Interna In-Situ', description: 'Personal técnico certificado en tus instalaciones. Segregación en fuente, etiquetado, almacenamiento temporal y capacitación.', tag: 'Personal certificado', icon_name: 'PersonWorker', number: '05' },
      { title: 'Gestión de Información', description: 'Dashboard y reportes en tiempo real. Declaraciones SIGERSOL, manifiestos y certificados listos para auditorías OEFA.', tag: 'Reportes en tiempo real', icon_name: 'LayoutHeaderCells', number: '06' }
    ],

    proceso_title: 'De la generación al certificado final.',
    proceso_subtitle: 'Cinco pasos que garantizan la continuidad de tu operación y el cumplimiento normativo en cada etapa.',
    proceso_steps: [
      { step_number: 1, title: 'Evaluación', description: 'Diagnóstico de residuo, volumen y frecuencia. Propuesta según tu modelo operativo.' },
      { step_number: 2, title: 'Propuesta', description: 'Contrato por tipo de residuo, frecuencia y volumen. SLA definido por escrito.' },
      { step_number: 3, title: 'Tratamiento', description: 'Recepción, pesaje INACAL y tratamiento previo al confinamiento definitivo.' },
      { step_number: 4, title: 'Disposición', description: 'Confinamiento en celda HDPE. Economía circular donde aplica la normativa.' },
      { step_number: 5, title: 'Certificación', description: 'Certificado de disposición final + declaración SIGERSOL. Cierre de responsabilidad completo.' }
    ],

    sectores_title: 'Tu industria, nuestra responsabilidad.',
    sectores_subtitle: 'Gestionamos residuos peligrosos y no peligrosos en los sectores más exigentes del Perú.',
    sectores_list: [
      { name: 'Minería y Metalurgia', detail: 'Lodos industriales, relaves y reactivos químicos caducos. Gestión especializada a nivel nacional.', icon_emoji: '⛏️' },
      { name: 'Energía e Hidrocarburos', detail: 'Suelos contaminados, aceites usados y residuos de generación. Exploración hasta refinación.', icon_emoji: '⚡' },
      { name: 'Agroindustria', detail: 'Envases de agroquímicos con triple lavado y residuos del procesamiento agrícola.', icon_emoji: '🌾' },
      { name: 'Manufactura y Química', detail: 'Solventes, pinturas, resinas y materiales con características de peligrosidad CRETIB.', icon_emoji: '🏭' },
      { name: 'Sector Marítimo', detail: 'Cumplimiento MARPOL y gestión de residuos portuarios con certificación.', icon_emoji: '🚢' },
      { name: 'Construcción', detail: 'RCD y residuos peligrosos de obra. Gestión durante todo el ciclo constructivo.', icon_emoji: '🏗️' },
      { name: 'Energía Eléctrica', detail: 'Residuos de generación, transmisión y distribución. PCBs y transformadores.', icon_emoji: '🔌' }
    ]
  }
};

async function seedStrapi() {
  console.log("Enviando datos a Strapi...");
  try {
    const res = await fetch(`${url}/api/landing-page`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    if (res.ok) {
      console.log("¡Datos migrados a Strapi con éxito!");
    } else {
      console.error("Error al migrar datos:", result);
    }
  } catch (err) {
    console.error("Error de conexión:", err);
  }
}

seedStrapi();
