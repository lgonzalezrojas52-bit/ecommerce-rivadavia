import { Metadata } from "next";
import Link from "next/link";
import { 
  ChevronRight, 
  HelpCircle, 
  Truck, 
  Store, 
  CreditCard, 
  ShoppingCart, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Building 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ayuda y Preguntas Frecuentes | Distribuidora Rivadavia",
  description: "Resolvé tus dudas sobre cómo realizar pedidos, compras mayoristas y minoristas, envíos a Mendoza, San Juan, San Luis y Córdoba, y formas de pago.",
};

const faqs = [
  {
    icon: ShoppingCart,
    question: "¿Cómo realizar un pedido?",
    answer: "Podés navegar por nuestro catálogo online, elegir los productos que necesites y agregarlos al carrito de compras (pudiendo alternar entre precios mayoristas o minoristas según tu perfil). Al finalizar, hacé clic en 'Ver Pedido' para revisar las cantidades y el resumen total."
  },
  {
    icon: MessageSquare,
    question: "¿Cómo finalizar el pedido por WhatsApp?",
    answer: "Una vez que tengas tus productos en el carrito, hacé clic en el botón verde 'Enviar pedido por WhatsApp'. El sistema abrirá automáticamente un chat con nuestro equipo comercial adjuntando el detalle exacto de tu pedido, cantidades y montos para coordinar el pago y la entrega de forma inmediata."
  },
  {
    icon: Store,
    question: "¿Realizan ventas mayoristas y minoristas?",
    answer: "¡Sí, atendemos a ambos segmentos! Si sos comercio, librería o revendedor, podés activar la lista 'Mayorista' (con un monto mínimo de compra sugerido de $50.000) para acceder a los mejores márgenes. Si sos cliente particular, podés comprar a precio minorista sin compra mínima."
  },
  {
    icon: Truck,
    question: "¿Realizan envíos?",
    answer: "¡Sí, realizamos envíos a todo Cuyo y el resto del país! Despachamos los pedidos dentro de las 24hs hábiles posteriores a la acreditación del pago mediante transporte, expreso o comisionista coordinado con el cliente."
  },
  {
    icon: MapPin,
    question: "¿A qué zonas distribuyen?",
    answer: "Nuestra zona de distribución directa es toda la provincia de Mendoza. Además, contamos con logística habitual y frecuente hacia San Juan, San Luis y Córdoba, y realizamos despachos por expreso a cualquier punto del territorio argentino."
  },
  {
    icon: Clock,
    question: "¿Cuáles son los horarios de atención?",
    answer: "Nuestro horario de atención comercial y depósito es de Lunes a Viernes de 8:30 a 17:30 hs y Sábados de 9:00 a 13:00 hs. A través de la tienda web podés armar y enviar pedidos las 24 horas del día."
  },
  {
    icon: CreditCard,
    question: "¿Cuáles son las formas de pago?",
    answer: "Aceptamos Transferencia Bancaria (CBU/CVU), Mercado Pago y Efectivo contra entrega o al retirar la mercadería por nuestro depósito en Mendoza."
  },
  {
    icon: Building,
    question: "¿Dónde se encuentra Distribuidora Rivadavia?",
    answer: "Nuestro depósito central y centro de distribución mayorista se encuentra en Rivadavia, Mendoza, ubicación estratégica desde la cual abastecemos a comercios de toda la provincia y la región."
  }
];

export default function AyudaPage() {
  return (
    <div className="bg-[#ebebeb] min-h-screen pb-16">
      {/* Header de Ayuda */}
      <div className="bg-brand-blue pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <HelpCircle className="w-12 h-12 text-white mx-auto mb-4 opacity-90" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Centro de Ayuda y Preguntas Frecuentes</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Encontrá respuestas rápidas sobre cómo comprar, listas de precios mayoristas, envíos a Cuyo y formas de pago.
          </p>
        </div>
      </div>

      {/* Contenedor Principal (Superpuesto) */}
      <div className="relative z-30 max-w-[900px] mx-auto px-4 -mt-8">
        
        {/* Breadcrumb */}
        <div className="bg-white rounded shadow-sm mb-6 p-4 flex items-center gap-2 text-sm text-gray-500 border border-gray-100">
          <Link href="/" className="hover:text-brand-blue">Inicio</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Ayuda y Preguntas Frecuentes</span>
        </div>

        {/* Lista de Preguntas Frecuentes (SEO/AEO Orientado) */}
        <div className="bg-white rounded shadow-sm p-4 sm:p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 px-2">Preguntas Frecuentes</h2>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-5 hover:border-blue-100 hover:shadow-sm transition-all bg-gray-50/50">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <faq.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto Directo */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded shadow-sm p-8 text-center border border-blue-200">
          <h3 className="text-xl font-bold text-brand-blue mb-2">¿Tenés otra consulta para tu comercio?</h3>
          <p className="text-gray-700 mb-6">Nuestro equipo de ventas mayoristas te atiende de forma personalizada.</p>
          <a href="https://wa.me/5492610000000" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition-colors shadow-md">
            Consultar por WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
