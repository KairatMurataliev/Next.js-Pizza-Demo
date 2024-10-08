import {create} from "zustand";
import {Category} from "@prisma/client";

interface State {
  activeId: number;
  setActiveId: (id: number) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useCategoriesStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: ((activeId: number) => set({ activeId })),
  categories: [],
  setCategories: (categories: Category[]) => set({ categories }),
  loading: false,
  setLoading: (loading: boolean) => set({ loading })
}));