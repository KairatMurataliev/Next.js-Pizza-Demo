import {Product, ProductItem} from "@prisma/client";

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