'use client'

import {useEffect} from "react";
import {Api} from "@/services/api-client";
import {useProductsStore} from "@/store/reducers/products";

export default function ProductPage({params: {id}}: { params: { id: string } }) {
  const productInfo = useProductsStore(state => state.oneProductInfo)
  const setOneProduct = useProductsStore(state => state.setOneProductInfo)
  // const loading = useProductsStore(state => state.loading)
  const setLoading = useProductsStore(state => state.setLoading)

  useEffect(() => {

    const getProductInfo = async () => {
      try {
          setLoading(true)
          const response = await Api.products.getOneProductInfo(id);
          setOneProduct(response);
          setLoading(false)
      } catch (err) {
          console.error(err)
          setLoading(false)
      } finally {
          setLoading(false)
      }
    }

    void getProductInfo();
  }, [id, setLoading, setOneProduct])
  console.log(productInfo);
  return (
      <div>Product {id}</div>
  )
}