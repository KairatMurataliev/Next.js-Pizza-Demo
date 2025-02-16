import {axiosInstance} from "@/shared/services/axios-instance";
import {CartDTO} from "@/shared/services/dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>('/cart');

  return data;
}