'use client'

import {Container, Filters, Title, ProductsGroupList} from "@/components/shared";
import {TopBar} from "@/components/shared/TopBar";
import {useProducts} from "@/hooks /useProducts";
import {useProductsStore} from "@/store/reducers/products";

export default function Home() {
  const sortedList = useProductsStore(state => state.products);
  const loading = useProductsStore(state => state.loading);
  useProducts();

  return (
      <>
        <Container className='mt-10'>
          <Title text='Все пиццы' size='lg' className='font-extrabold'/>
        </Container>

        <TopBar/>

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
