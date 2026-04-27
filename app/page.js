export default function Page() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap nav">
          <div className="brand">BRIDA ENERGY</div>
          <nav>
            <a href="#servicios">Servicios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="btn" href="https://wa.me/523313313170" target="_blank">WhatsApp</a>
        </div>
      </header>

      <section className="hero wrap">
        <div>
          <p className="tag">Energía Inteligente para Guadalajara</p>
          <h1>Paneles Solares en Guadalajara</h1>
          <p className="lead">Reduce hasta 95% tu recibo de CFE con instalación profesional, materiales certificados y soporte real.</p>
          <div className="actions">
            <a className="btn" href="https://wa.me/523313313170" target="_blank">Cotizar Ahora</a>
            <a className="btn ghost" href="#servicios">Ver Servicios</a>
          </div>
        </div>
        <div className="card grid2">
          <div>Ahorro hasta 95%</div><div>Trámite CFE</div><div>Garantía real</div><div>Monitoreo app</div>
        </div>
      </section>

      <section id="servicios" className="wrap section">
        <h2>Servicios</h2>
        <div className="grid3">
          <div className="card">Paneles Residenciales</div>
          <div className="card">Paneles para Negocios</div>
          <div className="card">Calentadores Solares</div>
          <div className="card">Mantenimiento</div>
          <div className="card">Trámites CFE</div>
          <div className="card">Diagnóstico Energético</div>
        </div>
      </section>

      <section id="beneficios" className="wrap section">
        <h2>¿Por qué elegirnos?</h2>
        <div className="grid4">
          <div className="card">Atención personalizada</div>
          <div className="card">Equipos premium</div>
          <div className="card">Instalación limpia</div>
          <div className="card">Retorno de inversión</div>
        </div>
      </section>

      <section id="contacto" className="wrap section">
        <div className="cta">
          <h2>Solicita tu cotización</h2>
          <p>Envíanos tu recibo de CFE al 33 1331 3170.</p>
          <a className="btn" href="https://wa.me/523313313170" target="_blank">Enviar WhatsApp</a>
        </div>
      </section>

      <style jsx>{`
        *{box-sizing:border-box} body{margin:0}
        .site{font-family:Arial,sans-serif;background:#020617;color:#fff;min-height:100vh}
        .wrap{max-width:1150px;margin:auto;padding:0 24px}
        .topbar{position:sticky;top:0;background:rgba(2,6,23,.9);border-bottom:1px solid #164e63}
        .nav{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;gap:16px}
        .brand{font-weight:800;color:#22d3ee}
        nav a{color:#cbd5e1;margin:0 10px;text-decoration:none}
        .btn{background:#22d3ee;color:#001018;padding:12px 18px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block}
        .ghost{background:transparent;color:#fff;border:1px solid #22d3ee}
        .hero{display:grid;grid-template-columns:1.2fr .8fr;gap:30px;padding:70px 24px}
        h1{font-size:56px;line-height:1.05;margin:10px 0}
        h2{font-size:38px;margin:0 0 20px}
        .tag{color:#22d3ee;font-weight:700}.lead{color:#cbd5e1;font-size:20px}
        .actions{display:flex;gap:14px;margin-top:24px;flex-wrap:wrap}
        .section{padding:40px 24px}
        .grid2,.grid3,.grid4{display:grid;gap:16px}.grid2{grid-template-columns:1fr 1fr}.grid3{grid-template-columns:repeat(3,1fr)}.grid4{grid-template-columns:repeat(4,1fr)}
        .card{background:#0f172a;border:1px solid #164e63;padding:22px;border-radius:18px}
        .cta{background:linear-gradient(90deg,#0f172a,#1e293b);padding:30px;border-radius:20px;border:1px solid #164e63}
        @media(max-width:900px){.hero,.grid3,.grid4{grid-template-columns:1fr}.grid2{grid-template-columns:1fr 1fr} h1{font-size:42px} nav{display:none}}
      `}</style>
    </div>
  )
}
