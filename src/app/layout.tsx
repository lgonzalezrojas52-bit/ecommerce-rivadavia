import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Distribuidora Rivadavia | Mayorista y Minorista",
  description: "Venta mayorista y minorista de productos de librería y regalería en Mendoza y Cuyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-brand-blue text-white py-8 text-center mt-12">
          <p>© {new Date().getFullYear()} Distribuidora Rivadavia. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
