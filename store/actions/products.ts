import {axiosInstance} from "@/shared/services/axios-instance";
import {ApiRoutes} from "@/shared/services/apiRoutes";
import {ProductFilters, ProductWithRelations, SearchProducts, SortedByCategoryProducts} from "@/types";

export const searchProducts = async (query: string): Promise<SearchProducts> => {
  return (await axiosInstance.get<SearchProducts>(ApiRoutes.SEARCH_PRODUCT, { params: { query } }))
      .data;
}

export const getProducts = async (filters: ProductFilters | null): Promise<SortedByCategoryProducts[]> => {
  return (await axiosInstance.get<SortedByCategoryProducts[]>(ApiRoutes.GET_PRODUCTS, {params: filters ? { query: JSON.stringify(filters)} : null }))
      .data;
}

export const getOneProductInfo = async (id: string): Promise<ProductWithRelations | null> => {
  return (await axiosInstance.get<ProductWithRelations | null>(`/products/${id}`)).data
}