"use client";

import { useCartStore } from "@/store/useCartStore";

export function AuthToggle() {
  const { isWholesale, setIsWholesale } = useCartStore();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700 hidden lg:inline-block">Lista de Precios:</span>
      <div className="flex bg-gray-100 p-1 rounded-md border border-gray-200 w-full sm:w-auto">
        <button
          onClick={() => setIsWholesale(false)}
          className={`flex-1 sm:w-36 text-center py-1.5 px-3 text-xs sm:text-sm font-medium rounded transition-colors ${
            !isWholesale 
              ? "bg-white text-gray-900 shadow-sm border border-gray-200" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Consumidor Final
        </button>
        <button
          onClick={() => setIsWholesale(true)}
          className={`flex-1 sm:w-40 text-center py-1.5 px-3 text-xs sm:text-sm font-medium rounded transition-colors ${
            isWholesale 
              ? "bg-brand-blue text-white shadow-sm" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Mayorista (Comercios)
        </button>
      </div>
    </div>
  );
}
