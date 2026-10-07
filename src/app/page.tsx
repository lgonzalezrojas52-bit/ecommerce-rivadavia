import { mockProducts } from "@/data/mockProducts";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { AuthToggle } from "@/components/AuthToggle";

export default function Home() {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="bg-brand-blue relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-red/20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 text-blue-100 text-sm font-semibold tracking-wider mb-6 border border-blue-700/50">
                VENTA MAYORISTA Y MINORISTA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Abastecemos tu negocio <br className="hidden md:block" />
                <span className="text-brand-red">con los mejores productos</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
                Somos el proveedor de confianza para librerías, regalerías y emprendedores de toda la región de Cuyo.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <AuthToggle />
              </div>
            </div>
            
            <div className="hidden lg:flex w-full lg:w-2/5 justify-center relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center p-8 shadow-2xl relative z-10 border-8 border-white/10 backdrop-blur-sm bg-clip-padding">
                <div className="relative w-full h-full">
                  <Image src="/logo.png" alt="Distribuidora Rivadavia" fill className="object-contain" priority />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-10 -left-10 bg-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-2xl">📦</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Envíos a</p>
                  <p className="text-sm font-extrabold text-brand-blue">Todo Cuyo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Catálogo Destacado</h2>
            <p className="text-gray-500 mt-2">Encontrá lo que tu negocio necesita.</p>
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-semibold text-brand-red">8 productos disponibles</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
