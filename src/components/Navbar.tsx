"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-red shadow-sm group-hover:shadow-md transition-shadow">
                <Image src="/logo.png" alt="Distribuidora Rivadavia" fill className="object-contain bg-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-brand-blue hidden sm:block group-hover:text-brand-red transition-colors">
                RIVADAVIA
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-brand-red font-medium transition-colors">Catálogo</Link>
            <Link href="/novedades" className="text-gray-600 hover:text-brand-red font-medium transition-colors">Novedades</Link>
            
            <div className="h-6 w-px bg-gray-200"></div>
            
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="bg-transparent border-none outline-none text-sm w-48 focus:w-64 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/mayorista" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-blue bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors border border-blue-100">
              <User className="w-4 h-4" />
              <span>Acceso Mayorista</span>
            </Link>

            <Link href="/carrito" className="relative p-2 text-gray-700 hover:text-brand-red transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-[10px] font-bold text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button className="md:hidden p-2 text-gray-700 hover:text-brand-red">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
