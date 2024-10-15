import {create} from "zustand";
import {Category} from "@prisma/client";
import {getAllCategories} from "@/store/actions/categories";

interface State {
  activeId: number;
  setActiveId: (id: number) => void;
  categories: Category[];
  loading: boolean;
  getCategories: () => Promise<void>;
}

export const useCategoriesStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: ((activeId: number) => set({ activeId })),
  categories: [],
  loading: false,
  getCategories: async () => {
    try {
      set({ loading: true });
      const categories = await getAllCategories();
      set({ categories, loading: false })
    } catch (err) {
      console.log(err);
      set({ loading: false })
    }

  }
}));