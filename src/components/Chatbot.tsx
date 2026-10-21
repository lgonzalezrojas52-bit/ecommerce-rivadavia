"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, HelpCircle, MessageSquare, ExternalLink } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  showWhatsAppButton?: boolean;
  whatsAppText?: string;
}

const FAQ_LIST = [
  {
    q: "¿Cómo realizar un pedido?",
    keywords: ["realizar un pedido", "hacer un pedido", "como compro", "cómo compro", "comprar", "pedido", "hacer pedido"],
    a: "Podés navegar por nuestro catálogo, elegir los productos que necesites y agregarlos a tu carrito (pudiendo alternar precios mayoristas o minoristas). Luego hacé clic en 'Ver Pedido' para revisar cantidades y finalizar."
  },
  {
    q: "¿Cómo finalizar el pedido por WhatsApp?",
    keywords: ["whatsapp", "finalizar", "wsp", "mandar pedido", "enviar pedido", "finalizar por whatsapp"],
    a: "Desde la pantalla del carrito, hacé clic en el botón verde 'Enviar pedido por WhatsApp'. Se abrirá un chat directo con nuestro equipo con el listado completo, cantidades y monto total calculado para coordinar el pago y despacho de inmediato."
  },
  {
    q: "¿Realizan ventas mayoristas y minoristas?",
    keywords: ["mayorista", "minorista", "ambas", "venden por menor", "por mayor", "revender", "comercio", "minimo", "mínimo"],
    a: "¡Sí! Atendemos tanto a comercios, librerías y revendedores (lista Mayorista, con un monto mínimo sugerido de $50.000) como a clientes particulares (lista Minorista sin mínimo de compra)."
  },
  {
    q: "¿Realizan envíos?",
    keywords: ["envio", "envíos", "mandan", "despacho", "expreso", "transporte", "flete", "entrega"],
    a: "¡Sí, realizamos envíos a todo Cuyo y el interior del país! Despachamos dentro de las 24hs hábiles posteriores a la confirmación del pago a través de transporte, expreso o comisionista a elección."
  },
  {
    q: "¿A qué zonas distribuyen?",
    keywords: ["zonas", "distribuyen", "san juan", "san luis", "cordoba", "córdoba", "mendoza", "alcance", "cobertura", "adonde llegan"],
    a: "Nuestra zona de distribución directa abarca toda la provincia de Mendoza, y contamos con logística habitual hacia San Juan, San Luis y Córdoba, además de despachos a cualquier localidad de Argentina."
  },
  {
    q: "¿Cuáles son los horarios de atención?",
    keywords: ["horario", "horarios", "atencion", "atención", "abierto", "dias", "hora", "cuando abren"],
    a: "Nuestro horario de atención comercial y depósito es de Lunes a Viernes de 8:30 a 17:30 hs y Sábados de 9:00 a 13:00 hs. A través de la web podés cargar tu pedido las 24 hs."
  },
  {
    q: "¿Cuáles son las formas de pago?",
    keywords: ["pago", "pagar", "formas de pago", "transferencia", "mercado pago", "efectivo", "tarjeta", "metodos de pago"],
    a: "Aceptamos Transferencia bancaria (CBU/CVU), Mercado Pago y Efectivo contra entrega al retirar por depósito o entrega coordinada."
  },
  {
    q: "¿Dónde se encuentra Distribuidora Rivadavia?",
    keywords: ["donde", "dónde", "ubicacion", "ubicación", "deposito", "depósito", "direccion", "dirección", "sucursal", "local", "queda"],
    a: "Nuestro depósito central y centro logístico está ubicado en Rivadavia, Mendoza, punto estratégico desde el cual abastecemos a comercios de toda la provincia y la región."
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "¡Hola! Soy el asistente virtual de Distribuidora Rivadavia. ¿En qué te puedo ayudar hoy? Podés elegir una pregunta frecuente o escribirme tu consulta.", 
      sender: "bot" 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSelectFaq = (question: string, answer: string) => {
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: question, sender: "user" },
      { 
        id: Date.now() + 1, 
        text: answer, 
        sender: "bot",
        showWhatsAppButton: true,
        whatsAppText: "¿Dudas puntuales? Hablar por WhatsApp"
      }
    ]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const cleanMsg = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { id: Date.now(), text: userText, sender: "user" }]);
    setInputValue("");

    // Buscar coincidencia en las FAQs
    setTimeout(() => {
      let botReply = "";
      let showWhatsApp = false;
      let btnText = "Hablar con un asesor por WhatsApp";

      // Saludos
      if (cleanMsg.includes("hola") || cleanMsg.includes("buen dia") || cleanMsg.includes("buenas")) {
        botReply = "¡Hola! ¿Cómo estás? ¿En qué puedo orientarte hoy? Podés consultarme sobre pedidos, envíos mayoristas o formas de pago.";
      } 
      // Petición directa de asesor humano o inconformidad
      else if (
        cleanMsg.includes("no me sirve") || 
        cleanMsg.includes("no entendi") || 
        cleanMsg.includes("no resolvio") || 
        cleanMsg.includes("asesor") || 
        cleanMsg.includes("humano") || 
        cleanMsg.includes("persona") ||
        cleanMsg.includes("contacto") ||
        cleanMsg.includes("telefono") ||
        cleanMsg.includes("hablar con alguien")
      ) {
        botReply = "¡Te entiendo! Te conecto directamente con nuestro equipo de ventas para que un asesor te atienda de inmediato por WhatsApp:";
        showWhatsApp = true;
        btnText = "Contactar asesor por WhatsApp";
      } else {
        // Buscar coincidencia por palabra clave
        const matchedFaq = FAQ_LIST.find(faq => 
          faq.keywords.some(kw => {
            const cleanKw = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return cleanMsg.includes(cleanKw);
          })
        );

        if (matchedFaq) {
          botReply = matchedFaq.a;
          showWhatsApp = true;
          btnText = "¿No resolvió tu duda? Hablar por WhatsApp";
        } else {
          // FALLBACK SI NO RECONOCE LA PREGUNTA
          botReply = "No tengo una respuesta exacta para esa consulta. Para darte una solución rápida y personalizada, podés comunicarte directamente con nuestro equipo por WhatsApp:";
          showWhatsApp = true;
          btnText = "Consultar ahora por WhatsApp";
        }
      }

      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now() + 1, 
          text: botReply, 
          sender: "bot",
          showWhatsAppButton: showWhatsApp,
          whatsAppText: btnText
        }
      ]);
    }, 450);
  };

  return (
    <>
      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-blue-900 transition-all z-50 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir chat de preguntas frecuentes"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-red border-2 border-white rounded-full"></span>
      </button>

      {/* Ventana de Chat */}
      <div 
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[380px] h-[520px] bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 z-50 transition-all duration-300 transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Cabecera del Chat */}
        <div className="bg-brand-blue text-white p-4 rounded-t-xl flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm border border-white/30">
              DR
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">Asistente Virtual</h3>
              <p className="text-[11px] text-blue-200">Distribuidora Rivadavia • En línea</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Cerrar chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Historial de Mensajes */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`max-w-[85%] p-3 text-sm rounded-2xl ${
                msg.sender === "user" 
                  ? "bg-brand-blue text-white rounded-br-none self-end shadow-sm" 
                  : "bg-white text-gray-800 rounded-bl-none self-start border border-gray-200 shadow-sm leading-relaxed"
              }`}
            >
              <p>{msg.text}</p>

              {/* Botón de Derivación a WhatsApp cuando no reconoce o para dudas no resueltas */}
              {msg.sender === "bot" && msg.showWhatsAppButton && (
                <div className="mt-2.5 pt-2 border-t border-gray-100">
                  <a
                    href="https://wa.me/5492610000000?text=Hola%20Distribuidora%20Rivadavia!%20Tengo%20una%20consulta%20sobre%20el%20cat%C3%A1logo%20mayorista."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors shadow-2xs w-full text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{msg.whatsAppText || "Hablar por WhatsApp"}</span>
                    <ExternalLink className="w-3 h-3 opacity-75" />
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Botones sugeridos de Preguntas Frecuentes */}
          <div className="mt-2 pt-2 border-t border-gray-200/80">
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-2 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-brand-blue" />
              Preguntas Frecuentes
            </span>
            <div className="flex flex-wrap gap-1.5">
              {FAQ_LIST.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectFaq(faq.q, faq.a)}
                  className="text-xs bg-white text-brand-blue hover:bg-blue-50 border border-blue-200 hover:border-brand-blue px-2.5 py-1.5 rounded-full text-left transition-colors font-medium shadow-2xs"
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>

          <div ref={messagesEndRef} />
        </div>

        {/* Input de Mensaje */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-200 rounded-b-xl flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribí tu consulta..."
            className="flex-1 bg-gray-100 border border-gray-200 focus:border-brand-blue outline-none px-4 py-2 rounded-full text-sm text-gray-800 transition-colors"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim()}
            className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center disabled:opacity-40 disabled:bg-gray-300 hover:bg-red-700 transition-colors flex-shrink-0 shadow-sm"
            aria-label="Enviar"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </>
  );
}
