export default function Home() {
  return (
    <main style={{
      background:"#020617",
      color:"white",
      minHeight:"100vh",
      fontFamily:"Arial, sans-serif"
    }}>

      {/* HEADER */}
      <header style={{
        padding:"20px 40px",
        borderBottom:"1px solid rgba(255,255,255,.1)",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <h1 style={{
          fontSize:"38px",
          fontWeight:"900",
          color:"#22d3ee"
        }}>
          BRIDA ENERGY
        </h1>

        <a
          href="https://wa.me/523313313170"
          target="_blank"
          style={{
            background:"#22d3ee",
            color:"#000",
            padding:"12px 22px",
            borderRadius:"12px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section style={{
        maxWidth:"1200px",
        margin:"auto",
        padding:"80px 30px"
      }}>
        <p style={{
          color:"#22d3ee",
          fontWeight:"bold",
          letterSpacing:"2px"
        }}>
          Energía inteligente para Guadalajara
        </p>

        <h2 style={{
          fontSize:"64px",
          fontWeight:"900",
          lineHeight:"1.1",
          marginTop:"20px"
        }}>
          Reduce tu recibo de luz hasta 95%
        </h2>

        <p style={{
          marginTop:"25px",
          fontSize:"22px",
          color:"#cbd5e1",
          maxWidth:"700px"
        }}>
          Paneles solares premium con instalación profesional,
          trámite CFE y soporte real.
        </p>

        <div style={{marginTop:"35px"}}>
          <a
            href="https://wa.me/523313313170"
            target="_blank"
            style={{
              background:"#22d3ee",
              color:"#000",
              padding:"16px 28px",
              borderRadius:"14px",
              textDecoration:"none",
              fontWeight:"bold",
              marginRight:"15px"
            }}
          >
            Cotizar Ahora
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{
        maxWidth:"1200px",
        margin:"auto",
        padding:"40px 30px"
      }}>
        <h3 style={{
          fontSize:"42px",
          marginBottom:"30px"
        }}>
          Servicios
        </h3>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>

          {[
            "Paneles Residenciales",
            "Paneles para Negocios",
            "Calentadores Solares",
            "Mantenimiento",
            "Trámites CFE",
            "Diagnóstico Energético"
          ].map((item)=>(
            <div key={item} style={{
              background:"#0f172a",
              padding:"25px",
              borderRadius:"20px",
              border:"1px solid rgba(34,211,238,.2)"
            }}>
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section style={{
        maxWidth:"1200px",
        margin:"auto",
        padding:"80px 30px"
      }}>
        <div style={{
          background:"linear-gradient(90deg,#22d3ee,#2563eb)",
          padding:"50px",
          borderRadius:"28px",
          color:"black"
        }}>
          <h3 style={{
            fontSize:"42px",
            fontWeight:"900"
          }}>
            Solicita tu cotización hoy
          </h3>

          <p style={{
            fontSize:"22px",
            marginTop:"15px"
          }}>
            Envíanos tu recibo CFE y calcula tu ahorro real.
          </p>

          <a
            href="https://wa.me/523313313170"
            target="_blank"
            style={{
              display:"inline-block",
              marginTop:"25px",
              background:"black",
              color:"white",
              padding:"16px 26px",
              borderRadius:"14px",
              textDecoration:"none",
              fontWeight:"bold"
            }}
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
