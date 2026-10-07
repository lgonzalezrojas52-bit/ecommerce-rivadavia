"use client";

import { useCartStore } from "@/store/useCartStore";

export function AuthToggle() {
  const { isWholesale, setIsWholesale } = useCartStore();

  return (
    <div className="bg-white/10 p-4 rounded-lg inline-block border border-white/20">
      <p className="text-sm font-medium mb-3">Modo de Vista de Precios (Simulador):</p>
      <div className="flex bg-brand-blue rounded-md border border-brand-light/30 overflow-hidden">
        <button
          onClick={() => setIsWholesale(false)}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            !isWholesale ? "bg-white text-brand-blue" : "text-white hover:bg-white/10"
          }`}
        >
          Cliente Minorista
        </button>
        <button
          onClick={() => setIsWholesale(true)}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            isWholesale ? "bg-brand-red text-white" : "text-white hover:bg-white/10"
          }`}
        >
          Comercio Mayorista
        </button>
      </div>
      <p className="text-xs text-white/70 mt-2 max-w-sm">
        {isWholesale 
          ? "Estás viendo precios exclusivos para comercios. (Mínimo de compra sugerido: $50.000)" 
          : "Estás viendo precios para el consumidor final."}
      </p>
    </div>
  );
}
