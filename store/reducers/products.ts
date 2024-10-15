import {create} from "zustand";
import {Product} from "@prisma/client";
import {ProductFilters, ProductWithRelations, SortedByCategoryProducts} from "@/types";
import {getOneProductInfo, getProducts} from "@/store/actions/products";

interface State {
  searchProducts: Product[];
  loading: boolean;
  oneProductInfo: ProductWithRelations | null;
  products: SortedByCategoryProducts[];

  setSearchProducts: (products: Product[]) => void;
  getProducts: (filters: ProductFilters | null) => Promise<void>;
  getOneProductInfo: (id?: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useProductsStore = create<State>()((set) => ({
  searchProducts: [],
  oneProductInfo: null,

  setSearchProducts: ((searchProducts: Product[]) => set({ searchProducts })),
  products: [],
  loading: false,

  getProducts: async (filters) => {
    try {
      set({loading: true});
      const products = await getProducts(filters);
      set({ products, loading: false })
    } catch (err) {
      console.log(err);
      set({loading: false})
    }
  },
  getOneProductInfo: async (id?: string) => {
    try {
      if (id) {
        set({loading: true})
        const oneProductInfo = await getOneProductInfo(id);
        set({loading: false, oneProductInfo})
      }
    } catch (err) {
      console.log(err);
      set({loading: false})
    }
  },
  setLoading: (loading: boolean) => set({loading})
}));