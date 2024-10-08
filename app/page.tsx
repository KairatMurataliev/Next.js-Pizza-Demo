import {Container, Filters, Title, ProductsGroupList} from "@/components/shared";
import {TopBar} from "@/components/shared/TopBar";

export default function Home() {
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
                <ProductsGroupList
                    title='Пиццы'
                    categoryId={1}
                    productItems={[
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 2,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 3,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 4,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 5,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 6,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 7,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      }
                    ]}
                />

                <ProductsGroupList
                    title='Комбо'
                    categoryId={2}
                    productItems={[
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 2,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 3,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 4,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 5,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 6,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 7,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      }
                    ]}
                />

                <ProductsGroupList
                    title='Закуски'
                    categoryId={3}
                    productItems={[
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      }
                    ]}
                />

                <ProductsGroupList
                    title='Десерты'
                    categoryId={4}
                    productItems={[
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      }
                    ]}
                />

                <ProductsGroupList
                    title='Кофе'
                    categoryId={5}
                    productItems={[
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      },
                      {
                        id: 1,
                        name: 'Песто',
                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D60177073018C580C07B2F34917.avif',
                        price: 550,
                        items: [{price: 550}]
                      }
                    ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </>
  );
}
