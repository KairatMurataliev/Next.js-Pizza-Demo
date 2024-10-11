'use client'

import {useProductsStore} from "@/store/reducers/products";
import {useProducts} from "@/hooks /useProducts";
import {Container, GroupVariants, ProductImage, Title} from "@/components/shared";

export default function ProductPage({params: {id}}: { params: { id: string } }) {
  const productInfo = useProductsStore(state => state.oneProductInfo)
  // const loading = useProductsStore(state => state.loading)

  useProducts(id);

  return (
      <Container className='flex flex-col my-10 mt-[130px]'>
        {productInfo && (
            <div className='flex flex-1'>
              <ProductImage
                  size={20}
                  imageUrl={productInfo.imageUrl}
                  alt='ProductImage'
              />

              <div className='w-[490px] bg-[#FCFCFC] p-7'>
                <Title text={productInfo.name} size='md' className='font-extrabold mb-1'/>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>

                <GroupVariants
                    selectedValue='2'
                    items={[{
                      name: 'Small',
                      value: '1'
                    },
                      {
                        name: 'Middle',
                        value: '2',
                      },
                      {
                        name: 'Big',
                        value: '3',
                      }
                    ]}/>
              </div>
            </div>
        )}
      </Container>
  )
}