import {Product} from "@prisma/client";

export type SearchProducts = {
  products: Product[]
}

export type SortedByCategoryProducts = {
  categoryId: number;
  products: Product[];
  title: string;
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