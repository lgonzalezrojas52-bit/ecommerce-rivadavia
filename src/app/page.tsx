import { mockProducts } from "@/data/mockProducts";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { AuthToggle } from "@/components/AuthToggle";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section - Classic E-commerce Style */}
      <div className="bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Mayorista de Librería y Regalería
              </h1>
              <p className="text-blue-100 mb-8 text-lg">
                Catálogo online para comercios y revendedores. Envíos a todo Mendoza, San Juan, San Luis y Córdoba.
              </p>
              <div className="bg-white/10 p-1 rounded inline-block">
                 <AuthToggle />
              </div>
            </div>
            
            <div className="hidden md:flex w-full md:w-1/2 justify-end">
              <div className="bg-white p-2 rounded-lg shadow-lg rotate-2 hover:rotate-0 transition-transform">
                <Image 
                  src="/logo.png" 
                  alt="Distribuidora Rivadavia" 
                  width={250} 
                  height={250} 
                  className="rounded border border-gray-100" 
                  priority 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories / Breadcrumb style */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm text-gray-500 overflow-x-auto">
          <Link href="/" className="hover:text-brand-blue whitespace-nowrap">Inicio</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/" className="hover:text-brand-blue whitespace-nowrap">Librería Comercial</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium whitespace-nowrap">Productos Destacados</span>
        </div>
      </div>

      {/* Catalog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Nuestros Productos</h2>
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
