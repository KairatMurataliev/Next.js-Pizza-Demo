import {create} from "zustand";
import {Ingredient} from "@prisma/client";
import {getAllIngredients} from "@/store/actions/ingredietnts";

interface State {
  ingredients: Ingredient[];
  loading: boolean;

  getIngredientsForFilters: () => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useIngredientsStore = create<State>()((set) => ({
  ingredients: [],
  loading: false,

  getIngredientsForFilters: async () => {
    try {
      set({loading: true});
      const ingredients = await getAllIngredients();
      set({loading: false, ingredients});
    } catch (err) {
      console.log(err);
      set({loading: false});
    }
  },
  setLoading: ((loading: boolean) => set({ loading })),
}));