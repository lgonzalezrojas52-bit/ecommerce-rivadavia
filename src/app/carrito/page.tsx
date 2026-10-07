"use client";

import { useCartStore } from "@/store/useCartStore";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart, isWholesale } = useCartStore();
  const total = getTotal();
  
  // Número de WhatsApp de la distribuidora (formato internacional sin el +)
  // Ejemplo ficticio para Mendoza, Argentina: 5492610000000
  const WHATSAPP_NUMBER = "5492610000000"; 

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = `¡Hola Distribuidora Rivadavia! 👋\n\n`;
    message += `Quiero realizar el siguiente pedido ${isWholesale ? '*MAYORISTA*' : '*MINORISTA*'}:\n\n`;

    items.forEach((item) => {
      const price = isWholesale ? item.wholesalePrice : item.price;
      const subtotal = price * item.quantity;
      message += `▪️ ${item.quantity}x ${item.name} ($${price} c/u) = $${subtotal}\n`;
    });

    message += `\n*TOTAL: $${total.toLocaleString("es-AR")}*\n\n`;
    message += `Aguardos sus comentarios para coordinar el pago y el envío. ¡Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gray-50 rounded-2xl p-12 max-w-2xl mx-auto border border-dashed border-gray-300">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-8">Aún no agregaste ningún producto a tu pedido.</p>
          <Link 
            href="/" 
            className="bg-brand-blue hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Volver al Catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu Pedido</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Lista de productos */}
        <div className="flex-grow lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {items.map((item) => {
                const itemPrice = isWholesale ? item.wholesalePrice : item.price;
                return (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="line-clamp-2">{item.name}</h3>
                          <p className="ml-4 whitespace-nowrap">
                            ${(itemPrice * item.quantity).toLocaleString("es-AR")}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      
                      <div className="flex flex-1 items-end justify-between text-sm mt-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 font-medium text-gray-900">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="font-medium text-brand-red hover:text-red-800 flex items-center gap-1"
                        >
                          <Trash2 size={16} />
                          <span className="hidden sm:inline">Eliminar</span>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button 
              onClick={clearCart}
              className="text-sm font-medium text-gray-500 hover:text-brand-red underline"
            >
              Vaciar carrito
            </button>
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Resumen del Pedido</h2>
            
            <div className="flow-root">
              <dl className="-my-4 divide-y divide-gray-200 text-sm">
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">${total.toLocaleString("es-AR")}</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Envío</dt>
                  <dd className="font-medium text-gray-900">A coordinar</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-base font-bold text-gray-900">Total a pagar</dt>
                  <dd className="text-xl font-bold text-brand-blue">${total.toLocaleString("es-AR")}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-md font-bold text-lg transition-colors shadow-sm"
              >
                Enviar pedido por WhatsApp
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="mt-4 text-xs text-gray-500 text-center">
              <p>Al hacer clic, se abrirá WhatsApp con el detalle de tu pedido para que podamos coordinar el pago y envío.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
