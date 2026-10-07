import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Chatbot } from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Distribuidora Rivadavia | Mayorista de Librería y Regalería",
  description: "Proveedor mayorista de artículos de librería, regalería y oficina en Mendoza. Envíos a San Juan, San Luis y Córdoba. Productos para revender con excelentes márgenes.",
  keywords: "Librería por mayor, Artículos de librería por mayor, Regalería por mayor, Bazar por mayor, Distribuidora mayorista en Mendoza, Productos para revender, Proveedor de artículos de librería, Útiles escolares por mayor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-[#ebebeb] text-gray-900`}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        
        {/* Chatbot Flotante */}
        <Chatbot />
        
        <footer className="bg-white text-gray-600 py-10 mt-auto border-t border-gray-200 text-sm">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-brand-blue">Distribuidora Rivadavia</span>
            </div>
            <p>© {new Date().getFullYear()} Distribuidora Rivadavia. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
