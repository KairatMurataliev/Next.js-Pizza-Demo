import {create} from "zustand";
import {CartStateItem} from "@/types";
import {getCart} from "@/store/actions/cart";
import {getCartDetails} from "@/shared/lib/utils";

interface State {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  fetchCartItems: () => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: any) => Promise<void>;
}

export const useCartStore = create<State>()((set) => ({
  loading: false,
  error: false,
  totalAmount: 0,
  items: [],

  fetchCartItems: async () => {
    try {
      set({loading: true});
      const data = await getCart();
      set({...getCartDetails(data), loading: false});
    } catch (err) {
      console.log(err);
      set({loading : false})
    }
  },
  removeCartItem: async (id: number) => {},
  updateItemQuantity: async (id: number, quantity: number) => {},
  addCartItem: async (values: any) => {},
}));