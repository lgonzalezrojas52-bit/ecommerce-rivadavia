"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1200&auto=format&fit=crop",
    title: "Especial Temporada Escolar",
    subtitle: "Abastecé tu librería con los mejores precios",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200&auto=format&fit=crop",
    title: "Novedades en Regalería",
    subtitle: "Descubrí los últimos ingresos con el mejor margen",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    title: "Envíos a todo Cuyo",
    subtitle: "Despachamos tu pedido mayorista en 24hs",
  },
];

export function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] group bg-brand-blue overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full h-full relative flex items-center justify-center">
            {/* Imagen de fondo */}
            <Image 
              src={banner.imageUrl}
              alt={banner.title}
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              priority={banner.id === 1}
            />
            
            {/* Contenido del banner simulando promociones tipo ML */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
              <span className="bg-brand-red text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow-md">
                Promociones Destacadas
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
                {banner.title}
              </h2>
              <p className="text-lg sm:text-xl font-medium text-white drop-shadow">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradiente inferior para difuminar con el fondo de la página */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ebebeb] to-transparent z-20 pointer-events-none"></div>

      {/* Flechas de Navegación (Estilo ML: circulares blancas, aparecen al hover) */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105"
      >
        <ChevronLeft className="w-8 h-8 -ml-1" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105"
      >
        <ChevronRight className="w-8 h-8 -mr-1" />
      </button>

      {/* Indicadores (Puntitos estilo ML, por encima del gradiente) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
