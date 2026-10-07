import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, HelpCircle, Truck, Store, CreditCard, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayuda y Preguntas Frecuentes | Distribuidora Rivadavia",
  description: "Resolvé tus dudas sobre envíos a Mendoza, San Juan, San Luis y Córdoba, compras mayoristas de librería y regalería, y productos para revender.",
};

const faqs = [
  {
    icon: Store,
    question: "¿Cómo realizar un pedido mayorista?",
    answer: "Para realizar un pedido mayorista, asegurate de seleccionar la opción 'Mayorista (Comercios)' en la barra superior. Agregá los artículos de librería, regalería o bazar a tu carrito. Al finalizar, el sistema generará tu pedido y te redirigirá a nuestro WhatsApp para coordinar los detalles. El monto mínimo de compra mayorista sugerido es de $50.000."
  },
  {
    icon: Truck,
    question: "¿Distribuidora Rivadavia realiza envíos a San Juan, San Luis o Córdoba?",
    answer: "¡Sí! Nuestro depósito central y punto de distribución principal se encuentra en Mendoza, pero contamos con logística para realizar envíos a San Juan, San Luis y Córdoba. Despachamos tu pedido en 24hs hábiles luego de confirmado el pago."
  },
  {
    icon: Package,
    question: "¿Dónde comprar artículos de librería por mayor en Mendoza? ¿Qué productos venden?",
    answer: "En Distribuidora Rivadavia somos tu proveedor de confianza. Comercializamos un catálogo completo diseñado para negocios que buscan productos para revender: útiles escolares, insumos de oficina, mochilas, artículos de regalería, bazar y tecnología. Todo con excelentes márgenes de rentabilidad."
  },
  {
    icon: CreditCard,
    question: "¿Cuáles son las formas de pago?",
    answer: "Una vez que nos envíes tu pedido por WhatsApp, podés abonar mediante Transferencia Bancaria, Mercado Pago, o en efectivo al retirar la mercadería por nuestro depósito en Mendoza."
  }
];

export default function AyudaPage() {
  return (
    <div className="bg-[#ebebeb] min-h-screen pb-16">
      {/* Header de Ayuda */}
      <div className="bg-brand-blue pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <HelpCircle className="w-12 h-12 text-white mx-auto mb-4 opacity-90" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Cómo podemos ayudarte?</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Encontrá respuestas rápidas a tus consultas sobre pedidos, envíos mayoristas y productos para tu comercio.
          </p>
        </div>
      </div>

      {/* Contenedor Principal (Superpuesto) */}
      <div className="relative z-30 max-w-[900px] mx-auto px-4 -mt-8">
        
        {/* Breadcrumb */}
        <div className="bg-white rounded shadow-sm mb-6 p-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-blue">Inicio</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Ayuda y Preguntas Frecuentes</span>
        </div>

        {/* Lista de Preguntas Frecuentes (SEO/AEO Orientado) */}
        <div className="bg-white rounded shadow-sm p-2 sm:p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 px-4 pt-2">Preguntas Frecuentes (FAQ)</h2>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-5 hover:border-blue-100 hover:shadow-sm transition-all bg-gray-50/50">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <faq.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto Directo */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded shadow-sm p-8 text-center border border-blue-200">
          <h3 className="text-xl font-bold text-brand-blue mb-2">¿No encontraste lo que buscabas?</h3>
          <p className="text-gray-700 mb-6">Nuestro equipo de atención al cliente está disponible para asesorarte en tus compras mayoristas.</p>
          <a href="https://wa.me/5492610000000" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition-colors shadow-md">
            Contactar por WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
