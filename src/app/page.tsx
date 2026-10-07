import { mockProducts } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";
import { AuthToggle } from "@/components/AuthToggle";
import { BannerSlider } from "@/components/BannerSlider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
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

        {/* Seccion de Catálogo */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium text-gray-600">Productos Destacados</h2>
          <span className="text-sm text-gray-500 font-medium">{mockProducts.length} resultados</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
