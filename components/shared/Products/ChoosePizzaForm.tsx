import React from 'react';
import {cn} from "@/lib/utils";
import {ProductImage, Title} from "@/components/shared";
import {Button} from "@/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({imageUrl, name, ingredients, items, className}) => {
    return (
        <div className={cn('flex flex-1')}>
            <ProductImage imageUrl={imageUrl} size={30}/>

            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1'/>

                <p className='text-gray-400'>DETAILS</p>

                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
                    Add to cart
                </Button>
            </div>
        </div>
    )
};