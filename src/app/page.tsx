import { mockProducts } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";
import { AuthToggle } from "@/components/AuthToggle";
import { BannerSlider } from "@/components/BannerSlider";
import { ChevronRight, BookOpen, PenTool, Briefcase, Gift, ShoppingBag, Palette, FileText, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categorias = [
  { id: 1, name: "Útiles Escolares", icon: BookOpen },
  { id: 2, name: "Escritura y Trazado", icon: PenTool },
  { id: 3, name: "Insumos de Oficina", icon: Briefcase },
  { id: 4, name: "Regalería y Bazar", icon: Gift },
  { id: 5, name: "Mochilas y Bolsos", icon: ShoppingBag },
  { id: 6, name: "Arte y Diseño", icon: Palette },
  { id: 7, name: "Papelería y Cuadernos", icon: FileText },
  { id: 8, name: "Tecnología y Accesorios", icon: Monitor },
];

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
          <div className="flex items-center gap-3 text-sm overflow-x-auto w-full sm:w-auto">
            <span className="text-gray-900 font-bold whitespace-nowrap">Catálogo General</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="text-gray-500 whitespace-nowrap hidden sm:inline">{mockProducts.length} productos disponibles</span>
          </div>
          
          <div className="w-full sm:w-auto">
            <AuthToggle />
          </div>
        </div>

        {/* Fila de Productos 1 */}
        <div className="flex items-center justify-between mb-4 mt-2">
          <h2 className="text-xl font-medium text-gray-600">Basado en tus últimas visitas</h2>
        </div>
        <div className="columns-2 md:columns-4 gap-4">
          {productsRow1.map((product) => (
            <div key={product.id} className="break-inside-avoid">
              <ProductCard product={product} />
            </div>
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
        <div className="columns-2 md:columns-4 gap-4 mb-10">
          {productsRow2.map((product) => (
            <div key={product.id} className="break-inside-avoid">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Sección de Categorías (Estilo ML) */}
        <div className="bg-white rounded shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-2xl font-medium text-gray-800">Categorías</h2>
            <Link href="/" className="text-sm text-brand-blue hover:text-blue-700">Mostrar todas las categorías</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categorias.map((cat) => (
              <Link key={cat.id} href="/" className="flex items-center bg-white border border-gray-100 rounded hover:shadow-md transition-shadow group overflow-hidden">
                <div className="w-1/3 bg-gray-50 flex items-center justify-center p-4 border-r border-gray-100">
                  <cat.icon className="w-8 h-8 text-gray-400 group-hover:text-brand-blue transition-colors" strokeWidth={1.5} />
                </div>
                <div className="w-2/3 p-4">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand-blue transition-colors leading-tight block">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

