import { mockProducts } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";
import { AuthToggle } from "@/components/AuthToggle";
import { BannerSlider } from "@/components/BannerSlider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Dividimos los productos en dos filas para poner los banners en el medio (Estilo ML)
  const productsRow1 = mockProducts.slice(0, 4);
  const productsRow2 = mockProducts.slice(4, 8);

  return (
    <div className="pb-16 min-h-screen">
      {/* Carrusel de Banners */}
      <BannerSlider />

      {/* Contenedor Principal Flotante (Se superpone al banner) */}
      <div className="relative z-30 max-w-[1200px] mx-auto px-4 -mt-16 sm:-mt-24">
        
        {/* Barra de Filtros (Tipo de cliente) */}
        <div className="bg-white rounded shadow-sm mb-6 p-3 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto w-full sm:w-auto">
            <Link href="/" className="hover:text-brand-blue whitespace-nowrap">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium whitespace-nowrap">Catálogo General</span>
          </div>
          
          <div className="w-full sm:w-auto">
            <AuthToggle />
          </div>
        </div>

        {/* Fila de Productos 1 */}
        <div className="flex items-center justify-between mb-4 mt-2">
          <h2 className="text-xl font-medium text-gray-600">Basado en tus últimas visitas</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productsRow1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Banners Promocionales Estilo ML (2 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {/* Banner Promo 1 */}
          <Link href="/" className="flex bg-white rounded shadow-sm overflow-hidden h-[180px] hover:shadow-md transition-shadow group">
            <div className="w-1/2 bg-gray-900 text-white p-6 flex flex-col justify-center">
              <span className="text-[10px] tracking-widest uppercase mb-1 opacity-80 text-brand-red font-bold">Vuelta a Clases</span>
              <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2">¡HASTA 30% OFF!<br/>EN LIBRERÍA</h3>
              <span className="text-xs font-medium group-hover:underline">Ver ofertas</span>
            </div>
            <div className="w-1/2 bg-gradient-to-r from-yellow-100 to-yellow-300 relative">
              <Image 
                src="https://images.unsplash.com/photo-1583485088034-697b5a69f000?q=80&w=800&auto=format&fit=crop" 
                alt="Promo Librería" 
                fill 
                className="object-cover mix-blend-multiply opacity-90 p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>

          {/* Banner Promo 2 */}
          <Link href="/" className="flex bg-white rounded shadow-sm overflow-hidden h-[180px] hover:shadow-md transition-shadow group">
            <div className="w-1/2 bg-gray-900 text-white p-6 flex flex-col justify-center">
              <span className="text-[10px] tracking-widest uppercase mb-1 opacity-80 text-brand-red font-bold">Día de la Madre</span>
              <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2">¡HASTA 45% OFF!<br/>EN REGALERÍA</h3>
              <span className="text-xs font-medium group-hover:underline">Ver ofertas</span>
            </div>
            <div className="w-1/2 bg-gradient-to-r from-red-100 to-pink-200 relative">
              <Image 
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop" 
                alt="Promo Regalería" 
                fill 
                className="object-cover mix-blend-multiply opacity-90 p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        </div>

        {/* Fila de Productos 2 */}
        <div className="flex items-center justify-between mb-4 mt-8">
          <h2 className="text-xl font-medium text-gray-600">Recomendaciones para tu comercio</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productsRow2.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
