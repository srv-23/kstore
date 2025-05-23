import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          const newItems = existingItem
            ? state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.items, { ...product, quantity: 1 }];
          
          const newTotal = newItems.reduce(
            (sum, item) => sum + Number(item.price) * item.quantity,
            0
          );
          
          return { items: newItems, total: newTotal };
        }),
      removeItem: (productId) =>
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== productId);
          const newTotal = newItems.reduce(
            (sum, item) => sum + Number(item.price) * item.quantity,
            0
          );
          return { items: newItems, total: newTotal };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          const newItems = state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );
          const newTotal = newItems.reduce(
            (sum, item) => sum + Number(item.price) * item.quantity,
            0
          );
          return { items: newItems, total: newTotal };
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
); 