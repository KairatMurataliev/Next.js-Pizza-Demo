import {create} from "zustand";
import {Product} from "@prisma/client";

interface State {
  searchProducts: Product[];
  oneProductInfo: Product | null;
  setOneProductInfo: (product: Product) => void;
  setSearchProducts: (products: Product[]) => void;
}

export const useProductsStore = create<State>()((set) => ({
  searchProducts: [],
  oneProductInfo: null,
  setOneProductInfo: ((oneProductInfo: Product)=> set({ oneProductInfo })),
  setSearchProducts: ((searchProducts: Product[]) => set({ searchProducts }))
}));