"use client";

import { useCartStore } from "@/store/useCartStore";
import { Store, User } from "lucide-react";

export function AuthToggle() {
  const { isWholesale, setIsWholesale } = useCartStore();

  return (
    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg inline-block w-full max-w-md">
      <p className="text-sm font-semibold text-blue-50 mb-3 uppercase tracking-wider">Modo de Visualización</p>
      
      <div className="flex bg-brand-blue/50 p-1 rounded-xl border border-brand-blue/30 shadow-inner relative z-10">
        <button
          onClick={() => setIsWholesale(false)}
          className={`relative z-20 flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-lg transition-all duration-300 ${
            !isWholesale 
              ? "bg-white text-brand-blue shadow-md scale-100" 
              : "text-blue-100 hover:text-white hover:bg-white/5 scale-95"
          }`}
        >
          <User className="w-4 h-4" />
          Minorista
        </button>
        <button
          onClick={() => setIsWholesale(true)}
          className={`relative z-20 flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-lg transition-all duration-300 ${
            isWholesale 
              ? "bg-brand-red text-white shadow-md scale-100" 
              : "text-blue-100 hover:text-white hover:bg-white/5 scale-95"
          }`}
        >
          <Store className="w-4 h-4" />
          Mayorista
        </button>
      </div>
      
      <div className="mt-4 flex items-start gap-3 bg-brand-blue/30 p-3 rounded-lg border border-brand-blue/20">
        <div className="mt-0.5">
          {isWholesale ? <Store className="w-4 h-4 text-brand-red" /> : <User className="w-4 h-4 text-blue-200" />}
        </div>
        <p className="text-xs text-blue-50 leading-relaxed">
          {isWholesale 
            ? "Estás viendo el catálogo B2B con precios y descuentos exclusivos para comercios." 
            : "Estás viendo el catálogo estándar para consumidor final (B2C)."}
        </p>
      </div>
    </div>
  );
}
