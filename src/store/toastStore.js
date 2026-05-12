import { create } from "zustand";

const useToastStore = create((set, get) => ({
  toast: null,
  showToast: (message, type) => {
    const finalType = type || "success";
    set({ toast: { message: message, type: finalType, id: Date.now() } });

    // Auto-hide despues de 2.5 segundos
    setTimeout(() => {
      // Solo limpiar si sigue siendo el mismo toast
      const current = get().toast;
      if (current && current.message === message) {
        set({ toast: null });
      }
    }, 2500);
  },
  hideToast: () => set({ toast: null }),
}));

export default useToastStore;