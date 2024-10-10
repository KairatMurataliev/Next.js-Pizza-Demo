import {useEffect} from "react";
import {Api} from "@/services/api-client";
import {useProductsStore} from "@/store/reducers/products";

export const useProducts = () => {
  const setProducts = useProductsStore(state => state.setProducts)
  const setLoading = useProductsStore(state => state.setLoading)

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true)
        const response = await Api.products.getProducts(null);
        setProducts(response);
        setLoading(false)
      } catch (err) {
        console.error(err);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [setProducts, setLoading]);
}