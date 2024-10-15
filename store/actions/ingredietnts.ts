import {axiosInstance} from "@/shared/services/axios-instance";
import {ApiRoutes} from "@/shared/services/apiRoutes";
import {Ingredient} from "@prisma/client";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>('ingredients'))
      .data;
}