import { create } from 'zustand';
import { Product } from '@/data/mockProducts';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isWholesale: boolean;
  setIsWholesale: (isWholesale: boolean) => void;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isWholesale: false, // Por defecto es minorista. En la fase de Autenticación esto cambiará.
  
  setIsWholesale: (isWholesale) => set({ isWholesale }),

  addItem: (product, quantity) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity }] };
    });
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    const { items, isWholesale } = get();
    return items.reduce((total, item) => {
      const priceToUse = isWholesale ? item.wholesalePrice : item.price;
      return total + priceToUse * item.quantity;
    }, 0);
  },
}));
