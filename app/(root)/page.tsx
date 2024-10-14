'use client'

import {Container, Filters, Title, ProductsGroupList} from "@/shared/components/shared";
import {TopBar} from "@/shared/components/shared/UiComponents/TopBar";
import {useProducts} from "@/shared/hooks /useProducts";
import {useProductsStore} from "@/store/reducers/products";
import {useCategoriesStore} from "@/store/reducers/category";
import {useCategories} from "@/shared/hooks /useCategories";

export default function Home() {
  const sortedList = useProductsStore(state => state.products);
  const categories = useCategoriesStore(state => state.categories)
  // const loadingProducts = useProductsStore(state => state.loading);
  const loadingCategories = useCategoriesStore(state => state.loading);

  useProducts();
  useCategories();

  return (
      <>
        <Container className='mt-10'>
          <Title text='All pizzas' size='lg' className='font-extrabold'/>
        </Container>

        <TopBar categories={categories} loading={loadingCategories}/>

        <Container className='mt-10 pb-14'>
          <div className='flex gap-20'>

            {/* Filters */}
            <div className='w-[250px]'>
              <Filters/>
            </div>

            {/* Products List */}
            <div className='flex-1'>
              <div className='flex flex-col gap-16'>
                {sortedList.map(item => {
                  return (
                      <ProductsGroupList
                          key={item.categoryId}
                          title={item.title}
                          categoryId={item.categoryId}
                          productItems={item.products}
                      />
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </>
  );
}
