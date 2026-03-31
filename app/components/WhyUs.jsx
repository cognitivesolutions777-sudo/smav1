import React from 'react';
import { Scale, MapPin, BarChart3, Building2 } from 'lucide-react';

const cards = [
  {
    num: "01",
    Icon: Scale,
    title: "Empresa regulada y certificada",
    desc: "Operamos con 6 registros vigentes del MINAM, DIGESA, SENACE y municipalidad. Tu empresa queda protegida ante fiscalizaciones de OEFA y cualquier auditoría ambiental.",
    pill: "6 registros vigentes",
    color: "#5a9a2a"
  },
  {
    num: "02",
    Icon: MapPin,
    title: "Ubicación estratégica sur del Perú",
    desc: "Km 255.5 Panamericana Sur. Menos kilómetros para tu flota, menores costos logísticos y respuesta garantizada en menos de 24 horas para toda la región sur.",
    pill: "Cobertura nacional · Red EO-RS",
    color: "#1f7a6e"
  },
  {
    num: "03",
    Icon: BarChart3,
    title: "Trazabilidad digital total",
    desc: "Dashboards en tiempo real desde la generación hasta el certificado final. Reportes SIGERSOL listos para presentar ante OEFA sin preparación adicional de tu equipo.",
    pill: "Dashboard en tiempo real",
    color: "#2d6a4f"
  },
  {
    num: "04",
    Icon: Building2,
    title: "Infraestructura propia certificada",
    desc: "Relleno de seguridad propio con geomembranas HDPE, balanza 80 TN certificada INACAL y control geotécnico en cada fase. No dependemos de terceros para tu disposición final.",
    pill: "Instalaciones propias · Ica",
    color: "#3d6b1c"
  }
];

const WhyUs = () => {
  const [revealed, setRevealed] = React.useState([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setRevealed(prev => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.porque-card-v2');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="porque" id="porque">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Por qué elegirnos</div>
          <h2 className="section-titulo">Una sola empresa.<br />Cero brechas <em>regulatorias.</em></h2>
        </div>
        
        <div className="porque-grid">
          {cards.map((item, idx) => (
            <div 
              key={idx} 
              data-index={idx}
              className={`porque-card-v2 ${revealed.includes(idx) ? 'revealed' : ''}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="porque-card-bg"></div>
              <div className="porque-card-content">
                <div className="porque-num-v2">{item.num}</div>
                
                <div className="why-icon-container" style={{ '--icon-color': item.color }}>
                  <item.Icon className="why-icon" size={28} />
                  <div className="why-icon-glow"></div>
                </div>
  
                <h3 className="porque-titulo-v2">{item.title}</h3>
                <p className="porque-desc-v2">{item.desc}</p>
                
                <div className="porque-footer-v2">
                  <span className="porque-pill-v2">
                    <span className="pill-dot"></span>
                    {item.pill}
                  </span>
                  <div className="card-arrow">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
