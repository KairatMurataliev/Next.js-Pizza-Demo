import {useEffect} from "react";
import {useProductsStore} from "@/store/reducers/products";

export const useProducts = (id?: string) => {
  const getProducts = useProductsStore(state => state.getProducts)
  const getOneProductInfo = useProductsStore(state => state.getOneProductInfo)

  useEffect(() => {
    const fetchProductsData = async () => {
      if (id) {
        await getOneProductInfo(id);
      } else {
        await getProducts(null);
      }
    }

    void fetchProductsData();
  }, [id, getOneProductInfo, getProducts]);
}