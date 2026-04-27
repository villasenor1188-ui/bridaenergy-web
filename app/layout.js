import "./globals.css";

export const metadata = {
  title: "BRIDA Energy | Paneles Solares Guadalajara",
  description: "Instalación profesional de paneles solares en Guadalajara y Jalisco.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
