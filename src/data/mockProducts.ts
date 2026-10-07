export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Precio minorista
  wholesalePrice: number; // Precio mayorista
  category: "libreria" | "regaleria" | "temporada";
  imageUrl: string;
  stock: number;
  isNew?: boolean; // Para marcar como "Novedad"
}

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Cuaderno Universitario A4 Raya",
    description: "Cuaderno tapa dura, 80 hojas rayadas. Ideal para estudiantes.",
    price: 4500,
    wholesalePrice: 3200,
    category: "libreria",
    imageUrl: "https://images.unsplash.com/photo-1531346878377-a541e4a11f44?q=80&w=600&auto=format&fit=crop",
    stock: 500,
  },
  {
    id: "p2",
    name: "Set x12 Marcadores de Colores",
    description: "Marcadores al agua, colores vivos y lavables.",
    price: 3200,
    wholesalePrice: 2100,
    category: "libreria",
    imageUrl: "https://images.unsplash.com/photo-1522880927702-8686ea9a7f33?q=80&w=600&auto=format&fit=crop",
    stock: 300,
  },
  {
    id: "p3",
    name: "Taza de Cerámica Diseño Nórdico",
    description: "Taza de cerámica premium, colores pastel. Excelente margen de reventa.",
    price: 8500,
    wholesalePrice: 5800,
    category: "regaleria",
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop",
    stock: 120,
    isNew: true,
  },
  {
    id: "p4",
    name: "Agenda Anual 2024 Semana a la Vista",
    description: "Agenda organizadora con stickers y planificador mensual.",
    price: 12500,
    wholesalePrice: 8900,
    category: "temporada",
    imageUrl: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=600&auto=format&fit=crop",
    stock: 80,
  },
  {
    id: "p5",
    name: "Mochila Escolar Reforzada",
    description: "Mochila con múltiples compartimentos y tela impermeable.",
    price: 35000,
    wholesalePrice: 24500,
    category: "temporada",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    stock: 45,
    isNew: true,
  },
  {
    id: "p6",
    name: "Vela Aromática de Soja (Frasco Vidrio)",
    description: "Velas artesanales con aromas de lavanda, vainilla o cítricos.",
    price: 6000,
    wholesalePrice: 4200,
    category: "regaleria",
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop",
    stock: 200,
    isNew: true,
  },
  {
    id: "p7",
    name: "Resaltadores Pastel x6",
    description: "Estuche de resaltadores tonos pastel. Alta rotación.",
    price: 2800,
    wholesalePrice: 1900,
    category: "libreria",
    imageUrl: "https://images.unsplash.com/photo-1580569214296-5cb2afebaa3a?q=80&w=600&auto=format&fit=crop",
    stock: 400,
  },
  {
    id: "p8",
    name: "Organizador de Escritorio Metálico",
    description: "Organizador para lápices y clips, estilo industrial.",
    price: 7500,
    wholesalePrice: 5100,
    category: "regaleria",
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
    stock: 60,
  }
];
