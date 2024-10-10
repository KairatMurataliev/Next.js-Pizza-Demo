import {PopulatedProduct, SortedByCategory} from "@/app/api/types";

export const getSortedProducts = (allProducts: PopulatedProduct[]) => {
  return allProducts.reduce((acc: SortedByCategory[], item) => {
    const index = acc.findIndex(i => i.categoryId === item.category.id)
    if (index !== -1) {
      acc[index].products.push(item)
    } else {
      acc.push({categoryId: item.categoryId, products: [item], title: item.category.name})
    }
    return acc
  }, []).sort((a, b) => a.categoryId - b.categoryId)
}