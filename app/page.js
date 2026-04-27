export default function Home() {
  return (
    <main className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">BRIDA ENERGY</div>

        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a
          className="btn-primary"
          href="https://wa.me/523313313170"
          target="_blank"
        >
          Cotizar
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="badge">Energía Inteligente en Guadalajara</span>

          <h1>
            Reduce tu recibo de luz con paneles solares profesionales
          </h1>

          <p>
            Instalaciones residenciales y comerciales con equipos premium,
            ingeniería profesional y soporte real.
          </p>

          <div className="hero-buttons">
            <a
              className="btn-primary"
              href="https://wa.me/523313313170"
              target="_blank"
            >
              WhatsApp
            </a>

            <a className="btn-outline" href="#servicios">
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="stat">⚡ Ahorro hasta 95%</div>
          <div className="stat">🛠 Garantía real</div>
          <div className="stat">📄 Trámite CFE</div>
          <div className="stat">📱 Monitoreo App</div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <h2>Servicios</h2>

        <div className="grid">
          <div className="card">Paneles Residenciales</div>
          <div className="card">Paneles para Negocios</div>
          <div className="card">Calentadores Solares</div>
          <div className="card">Mantenimiento</div>
          <div className="card">Trámites CFE</div>
          <div className="card">Diagnóstico Energético</div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="section dark">
        <h2>¿Por qué elegirnos?</h2>

        <div className="grid">
          <div className="card">Atención personalizada</div>
          <div className="card">Equipos premium</div>
          <div className="card">Instalación limpia</div>
          <div className="card">Retorno de inversión rápido</div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="cta">
        <h2>Solicita tu cotización</h2>

        <p>
          Envíanos tu recibo de CFE y te ayudamos a ahorrar desde el primer mes.
        </p>

        <a
          className="btn-primary big"
          href="https://wa.me/523313313170"
          target="_blank"
        >
          WhatsApp: 33 1331 3170
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 BRIDA ENERGY · Guadalajara, Jalisco
      </footer>
    </main>
  );
}
