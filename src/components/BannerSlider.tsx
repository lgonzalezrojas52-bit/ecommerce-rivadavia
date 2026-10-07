"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1200&auto=format&fit=crop",
    title: "Especial Temporada Escolar",
    subtitle: "Todo lo que necesitas para abastecer tu librería",
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
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-gray-900 overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full h-full relative">
            <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay oscuro */}
            <Image 
              src={banner.imageUrl}
              alt={banner.title}
              fill
              className="object-cover"
              priority={banner.id === 1}
            />
            
            {/* Texto del Banner */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-md">
                {banner.title}
              </h2>
              <p className="text-lg sm:text-2xl text-gray-100 drop-shadow">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores (Puntitos) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
