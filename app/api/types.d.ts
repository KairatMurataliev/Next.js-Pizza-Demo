import {Category, Product} from "@prisma/client";

export type SortedByCategory = {
  categoryId: number;
  products: Product[];
  title: string;
}

export type PopulatedProduct = Product & { category: Category }