'use client';

import React, {useEffect, useState} from 'react';
import {useSet} from "react-use";
import {Ingredient, ProductItem} from "@prisma/client";
import {calTotalPizzaPrice, cn, getAvailablePizzaSizes} from "@/shared/lib/utils";
import {ProductVariants, PizzaImage, Title, IngredientComponent} from "@/shared/components/shared";
import {Button} from "@/shared/components/ui";
import {mapPizzaType, pizzaTypes} from "@/shared/constants/pizza";
import {PizzaSize, PizzaType} from "@/types";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({className, imageUrl, name, ingredients, items, onClickAdd}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]));

  const availablePizzaSizes = getAvailablePizzaSizes(items, type);

  useEffect(() => {
    const currentSize = availablePizzaSizes?.find(({value, disabled}) => Number(value) === size && !disabled);
    const availableSize = availablePizzaSizes?.find(({disabled}) => !disabled);

    if (!currentSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  const totalPrice = calTotalPizzaPrice(
      size,
      type,
      items,
      ingredients,
      selectedIngredients
  );

  const pizzaDetails = `${size} sm, ${mapPizzaType[type]} pizza`;

  const handleClickAdd = () => {
    onClickAdd?.();

    console.log({
      size,
      type,
      ingredients: selectedIngredients
    })
  }

  return (
      <div className={cn('flex flex-1', className)}>
        <PizzaImage size={size} imageUrl={imageUrl}/>

        <div className='w-[490px] bf-[#f7f6f5] p-7'>
          <Title text={name} size='md' className='font-extrabold mb-1'/>

          <p className='text-gray-400 mb-5'>{pizzaDetails}</p>

          <div className='flex flex-col gap-4 my-5'>
            <ProductVariants
                items={availablePizzaSizes}
                value={String(size)}
                onClick={value => setSize(Number(value) as PizzaSize)}
            />

            <ProductVariants
                items={pizzaTypes}
                value={String(type)}
                onClick={value => setType(Number(value) as PizzaType)}
            />
          </div>

          <div className='bg-[#F3F3F7] p-5 rounded-md h-[420px] overflow-auto scrollbar'>
            <div className='grid grid-cols-3 gap-3'>
              {ingredients.map(ingredient => {
                return (
                    <IngredientComponent
                        key={ingredient.id}
                        name={ingredient.name}
                        imageUrl={ingredient.imageUrl}
                        price={ingredient.price}
                        active={selectedIngredients.has(ingredient.id)}
                        onClick={() => addIngredient(ingredient.id)}
                    />
                )
              })}
            </div>
          </div>

          <Button
              onClick={handleClickAdd}
              className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
          >
            Add to cart for {totalPrice}
          </Button>
        </div>
      </div>
  )
};