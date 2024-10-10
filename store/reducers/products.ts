import {create} from "zustand";
import {Product} from "@prisma/client";
import {SortedByCategoryProducts} from "@/types";

interface State {
  searchProducts: Product[];
  setSearchProducts: (products: Product[]) => void;
  oneProductInfo: Product | null;
  setOneProductInfo: (product: Product) => void;
  products: SortedByCategoryProducts[];
  setProducts: (list: SortedByCategoryProducts[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useProductsStore = create<State>()((set) => ({
  searchProducts: [],
  oneProductInfo: null,
  setOneProductInfo: ((oneProductInfo: Product)=> set({ oneProductInfo })),
  setSearchProducts: ((searchProducts: Product[]) => set({ searchProducts })),
  products: [],
  setProducts: (list: SortedByCategoryProducts[]) => set({products: list}),
  loading: false,
  setLoading: (loading: boolean) => set({loading})
}));