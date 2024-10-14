'use client'

import {useProductsStore} from "@/store/reducers/products";
import {useProducts} from "@/shared/hooks /useProducts";
import {ChooseProductModal} from "@/shared/components/shared";

export default function ProductModalPage({params: {id}}: { params: { id: string } }) {
  const productInfo = useProductsStore(state => state.oneProductInfo)
  // const loading = useProductsStore(state => state.loading)

  useProducts(id);

  if (productInfo) return <ChooseProductModal product={productInfo}/>
}