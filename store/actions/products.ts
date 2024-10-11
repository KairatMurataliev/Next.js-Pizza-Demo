import {axiosInstance} from "@/services/axios-instance";
import {ApiRoutes} from "@/services/apiRoutes";
import {ProductFilters, SearchProducts, SortedByCategoryProducts} from "@/types";
import {Product} from "@prisma/client";

export const searchProducts = async (query: string): Promise<SearchProducts> => {
  return (await axiosInstance.get<SearchProducts>(ApiRoutes.SEARCH_PRODUCT, { params: { query } }))
      .data;
}

export const getProducts = async (filters: ProductFilters | null): Promise<SortedByCategoryProducts[]> => {
  return (await axiosInstance.get<SortedByCategoryProducts[]>(ApiRoutes.GET_PRODUCTS, {params: filters ? { query: JSON.stringify(filters)} : null }))
      .data;
}

export const getOneProductInfo = async (id: string): Promise<Product | null> => {
  return (await axiosInstance.get<Product | null>(`/products/${id}`)).data
}