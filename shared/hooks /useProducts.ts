import {useEffect} from "react";
import {Api} from "@/shared/services/api-client";
import {useProductsStore} from "@/store/reducers/products";

export const useProducts = (id?: string) => {
  const setProducts = useProductsStore(state => state.setProducts)
  const setLoading = useProductsStore(state => state.setLoading)
  const setOneProduct = useProductsStore(state => state.setOneProductInfo)

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);

        if (id) {
          const response = await Api.products.getOneProductInfo(id);
          setOneProduct(response);
        } else {
          const response = await Api.products.getProducts(null);
          setProducts(response);
        }
        setLoading(false)
      } catch (err) {
        console.error(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    void getProducts();
  }, [setProducts, setLoading, id, setOneProduct]);
}