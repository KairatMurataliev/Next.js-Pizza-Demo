import React from 'react';
import Link from "next/link";
import {Title} from "@/components/shared";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

export interface ProductProps {
  id: number,
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<ProductProps> = ({className, imageUrl, name, price, id}) => {
    return (
        <div className={className}>
          <Link href={`/product/${id}`} className='flex-1 flex flex-col'>
            <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
              <img src={imageUrl} alt={name} className='w-[215px] h-[215px]'/>
            </div>

            <Title text={name} size='sm' className='mb-1 mt-3 font-bold'/>

            <p className='text-sm text-gray-400 mb-5'>
              Здесь буду рендериться ингредиенты
            </p>

            <div className='flex items-center justify-between'>
              <span className='text-[20xp]'>
                from <b>{price}</b>
              </span>

              <Button variant='secondary' className='text-base font-bold'>
                <Plus size={20} className='mr-1'/>
                Add To Cart
              </Button>
            </div>
          </Link>
        </div>
    )
};