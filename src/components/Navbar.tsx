"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image src="/logo.png" alt="Distribuidora Rivadavia" fill className="object-contain" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-lg tracking-tight text-brand-blue leading-none">
                  Distribuidora Rivadavia
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Librería & Regalería</span>
              </div>
            </Link>
          </div>
          
          {/* Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="w-full flex items-center bg-gray-100 rounded-md px-3 py-2 border border-gray-200 focus-within:border-brand-blue focus-within:bg-white transition-colors">
              <Search className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Buscar artículos..." 
                className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-blue">Catálogo</Link>
              <Link href="/novedades" className="text-sm font-medium text-gray-700 hover:text-brand-blue">Novedades</Link>
            </div>
            
            <div className="h-6 w-px bg-gray-300 hidden md:block"></div>

            <Link href="/mayorista" className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-blue">
              <User className="w-5 h-5" />
              <span>Ingresar</span>
            </Link>

            <Link href="/carrito" className="relative p-1 text-gray-700 hover:text-brand-blue">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-xs font-bold text-white bg-brand-red rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button className="md:hidden p-1 text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Search (Mobile) */}
        <div className="md:hidden pb-4">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 border border-gray-200">
            <Search className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Buscar artículos..." 
              className="bg-transparent border-none outline-none w-full text-sm text-gray-700"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
