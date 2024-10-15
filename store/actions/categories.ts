import {axiosInstance} from "@/shared/services/axios-instance";
import {Category} from "@prisma/client";

export const getAllCategories = async (): Promise<Category[]> => {
  return (await axiosInstance.get<Category[]>('categories'))
      .data;
}