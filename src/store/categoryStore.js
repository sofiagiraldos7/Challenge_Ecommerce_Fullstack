import { create } from "zustand";

const useCategoryStore = create((set) => ({
  selectedCategory: "all",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  resetCategory: () => set({ selectedCategory: "all" }),
}));

export default useCategoryStore;