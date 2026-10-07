"use client";

import Image from "next/image";
import { Product } from "@/data/mockProducts";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, isWholesale } = useCartStore();
  const price = isWholesale ? product.wholesalePrice : product.price;

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-56 w-full bg-gray-50 overflow-hidden">
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
            Nuevo
          </span>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-[11px] text-brand-blue/70 uppercase font-bold tracking-widest mb-1.5">
          {product.category}
        </div>
        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2 text-lg">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 font-light">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            {isWholesale && (
              <span className="text-xs text-gray-400 line-through font-medium">
                ${product.price.toLocaleString("es-AR")}
              </span>
            )}
            <span className="text-2xl font-extrabold text-brand-blue tracking-tight">
              ${price.toLocaleString("es-AR")}
            </span>
          </div>
          
          <button 
            onClick={() => addItem(product, 1)}
            className="flex items-center justify-center bg-gray-50 text-brand-blue hover:bg-brand-blue hover:text-white p-3 rounded-xl transition-all duration-200 shadow-sm border border-gray-200 hover:border-transparent group-hover:bg-brand-blue group-hover:text-white"
            title="Agregar al carrito"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
