import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useComparisonStore = create(
    persist(
        (set, get) => ({
            // State
            comparedProducts: [],

            // Actions
            addToComparison: (product) => {
                const { comparedProducts } = get();
                if (comparedProducts.length >= 3) {
                    alert("Bạn chỉ có thể so sánh tối đa 3 sản phẩm.");
                    return;
                }
                if (!comparedProducts.find((p) => p.id === product.id)) {
                    set({ comparedProducts: [...comparedProducts, product] });
                }
            },

            removeFromComparison: (productId) => {
                const { comparedProducts } = get();
                set({
                    comparedProducts: comparedProducts.filter((p) => p.id !== productId),
                });
            },
            // Sync data from cartsidebar --> comparison page
            syncFromCart: (cartItems) => {
                const itemsToCompare = cartItems.map((item) => {
                    const product = { ...item };
                    delete product.quantity;
                    return product;
                });
                set({ comparedProducts: itemsToCompare });
            },

            clearComparison: () => set({ comparedProducts: [] }),
        }),
        {
            name: 'comparison-storage',
        }
    )
);