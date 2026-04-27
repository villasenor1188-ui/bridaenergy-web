export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
            BRIDA ENERGY
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#servicios">Servicios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href="https://wa.me/523313313170"
            target="_blank"
            className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-cyan-400 font-semibold mb-3 uppercase tracking-widest">
            Energía inteligente para Guadalajara
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Reduce tu recibo de luz hasta un 95%
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Paneles solares premium con instalación profesional, trámite ante
            CFE y soporte real.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="https://wa.me/523313313170"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold"
            >
              Cotizar Ahora
            </a>

            <a
              href="#servicios"
              className="px-8 py-4 rounded-2xl border border-cyan-400"
            >
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-10 shadow-2xl">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-slate-800">
              Ahorro 95%
            </div>
            <div className="p-5 rounded-2xl bg-slate-800">
              Garantía real
            </div>
            <div className="p-5 rounded-2xl bg-slate-800">
              Trámite CFE
            </div>
            <div className="p-5 rounded-2xl bg-slate-800">
              Monitoreo App
            </div>
          </div>
        </div>

      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold mb-10">Servicios</h3>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Paneles Residenciales",
            "Paneles para Negocios",
            "Calentadores Solares",
            "Mantenimiento",
            "Trámites CFE",
            "Diagnóstico Energético",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-slate-900 p-8 border border-white/10 hover:border-cyan-400 transition"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        id="beneficios"
        className="bg-slate-900 border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h3 className="text-4xl font-bold mb-10">
            ¿Por qué elegirnos?
          </h3>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Atención personalizada",
              "Equipos premium",
              "Instalación limpia",
              "Retorno de inversión",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-slate-950 p-6 border border-white/10"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 p-12 text-black">
          <h3 className="text-4xl font-black">
            Solicita tu cotización hoy
          </h3>

          <p className="mt-4 text-lg">
            Envíanos tu recibo de CFE y calcula tu ahorro real.
          </p>

          <a
            href="https://wa.me/523313313170"
            target="_blank"
            className="inline-block mt-8 px-8 py-4 rounded-2xl bg-black text-white font-bold"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 BRIDA Energy
      </footer>
    </main>
  );
}
