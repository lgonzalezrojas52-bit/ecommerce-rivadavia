"use client";

import Image from "next/image";
import { Product } from "@/data/mockProducts";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, isWholesale } = useCartStore();
  const price = isWholesale ? product.wholesalePrice : product.price;

  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col mb-4">
      <div className="relative h-48 w-full bg-white border-b border-gray-100 p-2">
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-brand-blue text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
            Nuevo
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm text-gray-800 leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-2">
          {isWholesale && (
            <div className="text-xs text-gray-400 line-through">
              ${product.price.toLocaleString("es-AR")}
            </div>
          )}
          <div className="text-xl font-medium text-gray-900">
            $ {price.toLocaleString("es-AR")}
          </div>
          
          <button 
            onClick={() => addItem(product, 1)}
            className="w-full mt-3 bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white border border-blue-100 py-2 text-sm font-medium rounded transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
