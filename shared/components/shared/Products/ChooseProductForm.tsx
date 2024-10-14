import React from 'react';
import {cn} from "@/shared/lib/utils";
import {Title} from "@/shared/components/shared";
import {Button} from "@/shared/components/ui";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({imageUrl, name, className}) => {
  return (
      <div className={cn('flex flex-1')}>
        <div className='flex flex-1 items-center justify-center relative w-full'>
          <img
              src={imageUrl}
              alt={name}
              className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
          />
        </div>

        <div className='w-[490px] bg-[#f7f6f5] p-7'>
          <Title text={name} size='md' className='font-extrabold mb-1'/>

          <p className='text-gray-400'>DETAILS</p>

          <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
            Add to cart
          </Button>
        </div>
      </div>
  )
};