import {Ingredient, Product, ProductItem} from "@prisma/client";
import {mapPizzaType, mapSize} from "@/shared/constants/pizza";

export type SearchProducts = {
  products: Product[]
}

export type SortedByCategoryProducts = {
  categoryId: number;
  products: Product[];
  title: string;
  items: ProductItem[]
}

export type StatePriceFilter = {
  from: number;
  to: number
}

export type ProductFilters = {
  price: StatePriceFilter;
  ingredients: string[];
  size: string[];
  pizzaType: string[];
}

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean
}

export type ProductWithRelations = Product & { items: ProductItem[]; ingredients: Ingredient[] }

export type PizzaSize = keyof typeof mapSize;
export type PizzaType = keyof typeof mapPizzaType;

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients?: Array<{name: string, price: string}>
}