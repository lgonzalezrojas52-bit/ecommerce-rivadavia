"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "¡Hola! Soy el asistente virtual de Distribuidora Rivadavia. ¿En qué te puedo ayudar hoy? Podés preguntarme sobre envíos, montos mínimos o pagos.", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim().toLowerCase();
    
    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { id: Date.now(), text: inputValue, sender: "user" }]);
    setInputValue("");

    // Lógica simple de respuestas (Simulando un bot de preguntas frecuentes)
    setTimeout(() => {
      let botReply = "No estoy seguro de entender. Podés contactar a un asesor real a través de nuestro WhatsApp seleccionando los productos en el carrito.";
      
      if (userMsg.includes("envio") || userMsg.includes("envío") || userMsg.includes("mandan")) {
        botReply = "Realizamos envíos a toda la región de Cuyo (Mendoza, San Juan, San Luis) y Córdoba. Despachamos tu pedido mayorista en 24hs hábiles.";
      } else if (userMsg.includes("minimo") || userMsg.includes("mínimo") || userMsg.includes("mayorista")) {
        botReply = "El monto mínimo sugerido para acceder a nuestra lista de precios para comercios (Mayorista) es de $50.000.";
      } else if (userMsg.includes("pago") || userMsg.includes("pagar") || userMsg.includes("tarjeta")) {
        botReply = "Aceptamos transferencia bancaria, Mercado Pago y efectivo al retirar. El pago se coordina por WhatsApp al finalizar el pedido.";
      } else if (userMsg.includes("ubicacion") || userMsg.includes("donde") || userMsg.includes("dónde") || userMsg.includes("sucursal")) {
        botReply = "Nuestro depósito central se encuentra en Mendoza Capital, desde donde hacemos la logística para toda la región.";
      } else if (userMsg.includes("hola") || userMsg.includes("buen dia") || userMsg.includes("buenas")) {
        botReply = "¡Hola! ¿Cómo estás? Contame qué dudas tenés para tu negocio.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, sender: "bot" }]);
    }, 600); // Pequeño delay para simular que está "escribiendo"
  };

  return (
    <>
      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-blue-900 transition-all z-50 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir chat de soporte"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Un puntito rojo simulando una notificación */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-red border-2 border-white rounded-full"></span>
      </button>

      {/* Ventana de Chat */}
      <div 
        className={`fixed bottom-6 right-6 w-[340px] h-[480px] bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 z-50 transition-all duration-300 transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Cabecera del Chat */}
        <div className="bg-brand-blue text-white p-4 rounded-t-xl flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">DR</span>
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">Asistente Virtual</h3>
              <p className="text-[10px] text-blue-200">Distribuidora Rivadavia</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
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
                  ? "bg-brand-blue text-white rounded-br-none self-end" 
                  : "bg-white text-gray-700 rounded-bl-none self-start border border-gray-200 shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input de Mensaje */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 rounded-b-xl flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribí tu mensaje..."
            className="flex-1 bg-gray-100 border-none outline-none px-4 py-2.5 rounded-full text-sm text-gray-800"
          />
          <button 
            type="submit"
            disabled={!inputValue.trim()}
            className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:bg-gray-300 transition-colors flex-shrink-0"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </>
  );
}
