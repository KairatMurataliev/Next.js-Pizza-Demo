import {axiosInstance} from "@/services/axios-instance";
import {ApiRoutes} from "@/services/apiRoutes";
import {Ingredient} from "@prisma/client";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS))
      .data;
}