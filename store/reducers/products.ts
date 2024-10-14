import {create} from "zustand";
import {Product} from "@prisma/client";
import {ProductWithRelations, SortedByCategoryProducts} from "@/types";

interface State {
  searchProducts: Product[];
  setSearchProducts: (products: Product[]) => void;
  oneProductInfo: ProductWithRelations | null;
  setOneProductInfo: (product: ProductWithRelations | null) => void;
  products: SortedByCategoryProducts[];
  setProducts: (list: SortedByCategoryProducts[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useProductsStore = create<State>()((set) => ({
  searchProducts: [],
  oneProductInfo: null,
  setOneProductInfo: ((oneProductInfo: ProductWithRelations | null)=> set({ oneProductInfo })),
  setSearchProducts: ((searchProducts: Product[]) => set({ searchProducts })),
  products: [],
  setProducts: (list: SortedByCategoryProducts[]) => set({products: list}),
  loading: false,
  setLoading: (loading: boolean) => set({loading})
}));