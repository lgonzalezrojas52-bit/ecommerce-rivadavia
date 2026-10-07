import { mockProducts } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";
import { AuthToggle } from "@/components/AuthToggle";
import { BannerSlider } from "@/components/BannerSlider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Carrusel de Banners */}
      <BannerSlider />

      {/* Navegación y Filtros (Tipo de cliente) */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto w-full sm:w-auto">
            <Link href="/" className="hover:text-brand-blue whitespace-nowrap">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium whitespace-nowrap">Catálogo General</span>
          </div>
          
          <div className="w-full sm:w-auto">
            <AuthToggle />
          </div>
        </div>
      </div>

      {/* Seccion de Catálogo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Productos Destacados</h2>
          <span className="text-sm text-gray-500">{mockProducts.length} artículos</span>
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
