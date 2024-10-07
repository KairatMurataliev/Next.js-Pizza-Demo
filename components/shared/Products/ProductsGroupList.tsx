import React from 'react';
import {ProductCard, ProductProps} from "@/components/shared/Products/ProductCard";
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared";

interface Props {
  title: string;
  productItems: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({className, title, productItems, listClassName, categoryId}) => {
    return (
        <div className={cn('', className)}>
          <Title text={title} size='lg' className='font-bold mb-5'/>

          <div className={cn('grid grid-cols-3 gap-[50px]', className)}>
            {productItems.map((product) => {
              return (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.items[0].price}
                    id={product.id}
                    imageUrl={product.imageUrl}
                  />
              )
            })}
          </div>
        </div>
    )
};