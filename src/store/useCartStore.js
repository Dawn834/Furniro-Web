import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

export const useCartStore = create(
  persist(
    (set, get) => ({
      // 1. State
      cartItems: [],

      isCartOpen: false,

      // 2. Actions
      addToCart: (newProduct, quantity = 1) => {
        const { cartItems } = get();

        // Tìm sản phẩm đã có trong giỏ
        const existingProduct = cartItems.find((product) => product.id === newProduct.id);

        const currentQty = existingProduct ? existingProduct.quantity : 0;
        const newTotalQty = currentQty + quantity;

        // KIỂM TRA TỒN KHO
        if (newTotalQty > newProduct.stock) {
          toast.error(`Sản phẩm ${newProduct.name} chỉ còn tối đa ${newProduct.stock} cái trong kho.`);

          if (existingProduct) {
            set({
              cartItems: cartItems.map((product) =>
                product.id === newProduct.id ? { ...product, quantity: newProduct.stock } : product
              ),
            });
          } else {
            set({ cartItems: [...cartItems, { ...newProduct, quantity: newProduct.stock }] });
          }
          return;
        }

        // Nếu stock còn đủ
        if (existingProduct) {
          set({
            cartItems: cartItems.map((product) =>
              product.id === newProduct.id
                ? { ...product, quantity: product.quantity + quantity }
                : product
            ),
          });
        } else {
          set({ cartItems: [...cartItems, { ...newProduct, quantity }] });
        }
      },

      removeCart: (productId) => {
        const { cartItems } = get();
        set({ cartItems: cartItems.filter((product) => product.id !== productId) });
      },

      updateQuantity: (productId, newQuantity) => {
        const { cartItems } = get();
        const targetProduct = cartItems.find((product) => product.id === productId);

        if (newQuantity < 1) {
          set({ cartItems: cartItems.filter((product) => product.id !== productId) });
        } else {
          // KIỂM TRA TỒN KHO
          if (targetProduct && newQuantity > targetProduct.stock) {
            toast.error(`Sản phẩm ${targetProduct.name} chỉ còn tối đa ${targetProduct.stock} cái trong kho.`);
            newQuantity = targetProduct.stock;
          }

          set({
            cartItems: cartItems.map((product) =>
              product.id === productId ? { ...product, quantity: newQuantity } : product
            ),
          });
        }
      },

      setIsCartOpen: (Open) => set({ isCartOpen: Open }),



      clearCart: () => set({ cartItems: [] }),


    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ cartItems: state.cartItems }),
    }
  )
);
