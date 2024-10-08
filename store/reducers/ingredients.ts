import {create} from "zustand";
import {Ingredient} from "@prisma/client";

interface State {
  ingredients: Ingredient[];
  setIngredients: (ingredients: Ingredient[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useIngredientsStore = create<State>()((set) => ({
  ingredients: [],
  setIngredients: ((ingredients: Ingredient[]) => set({ ingredients })),
  loading: false,
  setLoading: ((loading: boolean) => set({ loading })),
}));