"use client";

import Image from "next/image";
import { Product } from "@/data/mockProducts";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, isWholesale } = useCartStore();
  const price = isWholesale ? product.wholesalePrice : product.price;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full bg-gray-100">
        {/* Usando una img normal por ahora para evitar configuración de dominios en Next/Image */}
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">
            NUEVO
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">
          {product.category}
        </div>
        <h3 className="font-bold text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between mt-4">
          <div>
            {isWholesale && (
              <p className="text-xs text-gray-500 line-through mb-1">
                ${product.price.toLocaleString("es-AR")} minorista
              </p>
            )}
            <p className="text-xl font-bold text-brand-blue">
              ${price.toLocaleString("es-AR")}
            </p>
          </div>
          
          <button 
            onClick={() => addItem(product, 1)}
            className="bg-brand-blue hover:bg-blue-800 text-white p-2 rounded-full transition-colors"
            title="Agregar al carrito"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
