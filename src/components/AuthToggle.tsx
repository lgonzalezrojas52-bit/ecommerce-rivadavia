"use client";

import { useCartStore } from "@/store/useCartStore";

export function AuthToggle() {
  const { isWholesale, setIsWholesale } = useCartStore();

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm inline-block w-full max-w-sm">
      <p className="text-sm font-semibold text-gray-700 mb-3">Lista de Precios</p>
      
      <div className="flex bg-gray-100 p-1 rounded-md border border-gray-200">
        <button
          onClick={() => setIsWholesale(false)}
          className={`flex-1 text-center py-2 text-sm font-medium rounded transition-colors ${
            !isWholesale 
              ? "bg-white text-gray-900 shadow-sm border border-gray-200" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Consumidor Final
        </button>
        <button
          onClick={() => setIsWholesale(true)}
          className={`flex-1 text-center py-2 text-sm font-medium rounded transition-colors ${
            isWholesale 
              ? "bg-brand-blue text-white shadow-sm" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Comercio / Mayorista
        </button>
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        {isWholesale 
          ? "Mostrando catálogo B2B. Compra mínima sugerida: $50.000." 
          : "Mostrando precios al público general (B2C)."}
      </div>
    </div>
  );
}
