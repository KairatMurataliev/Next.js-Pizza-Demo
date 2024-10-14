import {axiosInstance} from "@/shared/services/axios-instance";
import {ApiRoutes} from "@/shared/services/apiRoutes";
import {Category} from "@prisma/client";

export const getAllCategories = async (): Promise<Category[]> => {
  return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES))
      .data;
}