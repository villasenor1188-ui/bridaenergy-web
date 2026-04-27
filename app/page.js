export const metadata = {
  title: 'Brida Energy | Paneles Solares Guadalajara',
  description: 'Instalación profesional de paneles solares, calentadores solares y trámites CFE en Guadalajara y ZMG.',
};

export default function Page(){
  const wa='https://wa.me/5233 1331 3170';
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/85 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="font-black text-xl tracking-wide text-cyan-400">BRIDA ENERGY</a>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#servicios">Servicios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href={wa} target="_blank" className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold">WhatsApp</a>
        </div>
      </header>

      <section id="inicio" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-cyan-400 font-semibold">Energía Inteligente para Guadalajara</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-black leading-tight">Paneles Solares en Guadalajara</h1>
          <p className="mt-6 text-slate-300 text-lg">Reduce hasta 95% tu recibo de CFE con instalación profesional, materiales certificados y soporte real.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={wa} target="_blank" className="px-6 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-bold">Cotizar Ahora</a>
            <a href="#servicios" className="px-6 py-3 rounded-2xl border border-cyan-400">Ver Servicios</a>
          </div>
        </div>
        <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 grid grid-cols-2 gap-4">
          {['Ahorro hasta 95%','Trámite CFE','Garantía real','Monitoreo app'].map(i => (
            <div key={i} className="rounded-2xl bg-slate-800 p-4 text-center">{i}</div>
          ))}
        </div>
      </section>

      <section id="servicios" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Paneles Residenciales','Paneles para Negocios','Calentadores Solares','Mantenimiento','Trámites CFE','Diagnóstico Energético'].map(s => (
            <div key={s} className="rounded-3xl p-6 bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 transition">{s}</div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Atención personalizada','Equipos premium','Instalación limpia','Retorno de inversión'].map(b => (
              <div key={b} className="rounded-3xl p-6 bg-slate-950 border border-cyan-500/20">{b}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Clientes satisfechos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Bajé mi recibo de $4,000 a $350','Instalación rápida y profesional','Excelente atención y seguimiento'].map(t => (
            <div key={t} className="rounded-3xl p-6 bg-slate-900 border border-cyan-500/20">“{t}”</div>
          ))}
        </div>
      </section>

      <section id="contacto" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl p-10 bg-gradient-to-r from-slate-900 to-slate-800 border border-cyan-500/20">
          <h2 className="text-4xl font-bold">Solicita tu cotización gratis</h2>
          <p className="mt-4 text-slate-300">Envíanos una foto de tu recibo de CFE y te ayudamos a ahorrar.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={wa} target="_blank" className="px-6 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-bold">WhatsApp</a>
            <a href="tel:+5233 1331 3170" className="px-6 py-3 rounded-2xl border border-cyan-400">Llamar</a>
          </div>
        </div>
      </section>

      <a href={wa} target="_blank" className="fixed bottom-6 right-6 px-5 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold shadow-2xl">WhatsApp</a>

      <footer className="border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-slate-400">© 2026 Brida Energy · Guadalajara, Jalisco</div>
      </footer>
    </main>
  )
}
