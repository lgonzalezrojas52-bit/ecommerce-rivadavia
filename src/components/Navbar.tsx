"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Distribuidora Rivadavia Logo" className="w-10 h-10 object-contain rounded-full bg-white" />
              <span className="font-bold text-lg hidden sm:block">Distribuidora Rivadavia</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-blue-800 px-3 py-2 rounded-md font-medium">Catálogo</Link>
              <Link href="/novedades" className="hover:bg-blue-800 px-3 py-2 rounded-md font-medium">Novedades</Link>
              <Link href="/mayorista" className="hover:bg-blue-800 px-3 py-2 rounded-md font-medium text-brand-red bg-white hover:bg-gray-100">Acceso Mayorista</Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link href="/carrito" className="p-2 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-brand-red rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="md:hidden ml-4 p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
