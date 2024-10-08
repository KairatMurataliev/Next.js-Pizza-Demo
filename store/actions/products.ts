import {axiosInstance} from "@/services/axios-instance";
import {ApiRoutes} from "@/services/apiRoutes";
import {SearchProducts} from "@/types";

export const searchProducts = async (query: string): Promise<SearchProducts> => {
  return (await axiosInstance.get<SearchProducts>(ApiRoutes.SEARCH_PRODUCT, { params: { query } }))
      .data;
}
//
// export const getProducts = async () => Promise<SearchProducts> => {
//   return (await axiosInstance.get<SearchProducts>(ApiRoutes.SEARCH_PRODUCT))
//       .data;
// }