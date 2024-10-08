'use client'

import React, {useEffect, useRef} from 'react';
import {ProductCard} from "@/components/shared/Products/ProductCard";
import {useIntersection} from "react-use";
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared";
import {useCategoriesStore} from "@/store/reducers/category";

interface Props {
  title: string;
  productItems: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({className, title, productItems, categoryId}) => {
  const setActiveCategoryId = useCategoriesStore(state => state.setActiveId)
  const intersectionRef = useRef(null);

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title])

  return (
      <div className={cn('', className)} id={title} ref={intersectionRef}>
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