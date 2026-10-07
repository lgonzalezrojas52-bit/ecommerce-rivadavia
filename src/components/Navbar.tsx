"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, MapPin, ChevronDown, Bell } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-brand-blue w-full pt-3 pb-2 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Fila Superior: Logo + Buscador + Promo */}
        <div className="flex items-center gap-8 mb-3">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-12 h-12 relative bg-white rounded-full p-1 shadow">
              <Image src="/logo.png" alt="Rivadavia" fill className="object-contain" />
            </div>
            <div className="hidden sm:flex flex-col text-white">
              <span className="font-bold text-xl tracking-tight leading-none">Rivadavia</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80 mt-0.5">Distribuidora</span>
            </div>
          </Link>
          
          {/* Buscador (Estilo ML) */}
          <div className="flex-1 max-w-2xl relative shadow-sm">
            <input 
              type="text" 
              placeholder="Buscar productos, marcas y más..." 
              className="w-full bg-white text-gray-800 px-4 py-2.5 rounded-sm shadow-sm outline-none text-sm placeholder-gray-400"
            />
            <button className="absolute right-0 top-0 h-full px-3 border-l border-gray-200 text-gray-500 bg-white rounded-r-sm hover:bg-gray-50">
              <Search className="w-5 h-5" />
            </button>
          </div>
          
          {/* Promo Lateral Dinámica */}
          {!isWholesale ? (
            <Link href="/" className="hidden lg:flex flex-shrink-0 items-center justify-center bg-white rounded-full px-4 py-1.5 shadow-sm h-10 hover:bg-gray-50">
              <span className="text-brand-red font-bold text-sm tracking-tight">+ Cuenta Mayorista</span>
            </Link>
          ) : (
            <div className="hidden lg:flex flex-shrink-0 items-center justify-center bg-white/20 rounded-full px-4 py-1.5 h-10 border border-white/30">
              <span className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Comercio Verificado
              </span>
            </div>
          )}

        </div>

        {/* Fila Inferior: Ubicación + Categorías + Menú Usuario */}
        <div className="flex items-center justify-between">
          
          {/* Ubicación Dinámica */}
          <div className="flex items-center gap-1.5 text-white/90 hover:text-white hover:bg-white/10 p-1.5 -ml-1.5 rounded cursor-pointer transition-colors">
            <MapPin className="w-6 h-6 opacity-80" />
            <div className="flex flex-col text-[11px] leading-[13px]">
              <span className="opacity-70">{isWholesale ? "Enviar a Diego" : "Ingresá tu"}</span>
              <span className="font-medium text-sm">{isWholesale ? "Córdoba 5000" : "ubicación"}</span>
            </div>
          </div>
          
          {/* Links Principales */}
          <div className="hidden md:flex items-center gap-5 text-sm text-white/90 font-medium ml-6">
            <Link href="/" className="hover:text-white flex items-center gap-0.5">
              Categorías <ChevronDown className="w-4 h-4 opacity-70" />
            </Link>
            <Link href="/" className="hover:text-white">Ofertas</Link>
            <Link href="/" className="hover:text-white">Novedades</Link>
            <Link href="/" className="hover:text-white flex items-center gap-1">
              Beneficios <span className="bg-brand-red text-white text-[9px] font-bold px-1 rounded-sm uppercase tracking-wider">Nuevo</span>
            </Link>
            <Link href="/" className="hover:text-white">Ayuda</Link>
          </div>
          
          {/* Menú de Usuario Dinámico y Carrito */}
          <div className="flex items-center gap-5 text-sm text-white/90 ml-auto">
            {isWholesale ? (
              <>
                <Link href="/" className="hidden sm:flex items-center gap-1 hover:text-white font-medium">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-1">
                    <span className="text-[10px] font-bold">DM</span>
                  </div>
                  Diego <ChevronDown className="w-4 h-4 opacity-70" />
                </Link>
                <Link href="/" className="hidden sm:block hover:text-white">Mis compras</Link>
              </>
            ) : (
              <>
                <Link href="/" className="hidden sm:block hover:text-white font-medium">Ingresar</Link>
                <Link href="/" className="hidden sm:block hover:text-white font-medium">Crear cuenta</Link>
              </>
            )}
            
            <button className="hover:text-white">
              <Bell className="w-5 h-5" />
            </button>

            <Link href="/carrito" className="relative p-1 hover:text-white transition-colors">
              <ShoppingCart className="h-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold text-white bg-brand-red rounded-full ring-2 ring-brand-blue">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
