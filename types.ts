import {Product} from "@prisma/client";

export type SearchProducts = {
  products: Product[]
}