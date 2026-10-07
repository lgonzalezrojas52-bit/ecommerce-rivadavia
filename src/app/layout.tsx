import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <footer className="bg-slate-900 text-slate-300 py-12 text-center mt-auto border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm leading-none">DR</span>
                </div>
                <span className="font-bold text-lg text-white">Distribuidora Rivadavia</span>
              </div>
              <p className="text-sm">© {new Date().getFullYear()} Distribuidora Rivadavia. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
