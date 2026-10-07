import { mockProducts } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";
import { AuthToggle } from "@/components/AuthToggle"; // Lo crearemos ahora

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section Banner */}
      <div className="bg-brand-blue rounded-xl p-8 mb-12 text-white flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Librería y Regalería por Mayor y Menor
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Abastecemos tu negocio con los mejores productos, precios competitivos y atención personalizada.
          </p>
          <AuthToggle />
        </div>
        <div className="hidden md:block w-32 h-32 bg-white rounded-full border-4 border-brand-red flex-shrink-0 flex items-center justify-center shadow-xl">
          <span className="text-brand-blue font-black text-5xl">DR</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-brand-red pb-2 inline-block">
          Nuestro Catálogo
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
