'use client'

import React, {useState} from 'react';
import {Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup} from "@/components/shared";
import {Input} from "@/components/ui";
import {useFilterIngredients} from "@/hooks /useFilterIngredients";
import {useIngredientsStore} from "@/store/reducers/ingredients";

interface Props {
    className?: string;
}

type PriceFilter = {
  from: number;
  to: number
}

export const Filters: React.FC<Props> = ({className}) => {
  const ingredients = useIngredientsStore(state => state.ingredients);
  const loading = useIngredientsStore(state => state.loading);

  const [ingredientsIds, setIngredientsIds] = useState<string[]>([])
  const [price, setPrice] = useState<PriceFilter>({from: 0, to: 1000})

  useFilterIngredients();

  const onCheckboxSelect = (checked: string) => {
    const state = [...ingredientsIds];
    if (state.includes(checked)) {
      const index = state.findIndex(i => i === checked);
      state.splice(index, 1);
      setIngredientsIds(state)
    } else {
      state.push(checked)
      setIngredientsIds(state)
    }
  }

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setPrice(prev => ({...prev, [name]: value}))
  }

  const ingredientsItems= ingredients.map(({id, name}) => ({value: id.toString(), text: name}));

  return (
        <div className={className}>
          <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

          <div className='flex flex-col gap-4'>
            <FilterCheckbox text='Можно собирать' value='1' name='Можно собирать'/>
            <FilterCheckbox text='Новинки' value='2' name='Новинки'/>
          </div>

          <div className='border-y mt-5 border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Цена от и до:</p>

            <div className='flex gap-3 mb-5'>
              <Input
                  type='number'
                  name='from'
                  placeholder='0'
                  min={0}
                  max={1000}
                  defaultValue={0}
                  value={price.from}
                  onChange={onPriceChange}
              />
              <Input
                  type='number'
                  name='to'
                  placeholder='1000'
                  min={100}
                  max={1000}
                  value={price.to}
                  onChange={onPriceChange}
              />
            </div>

            <RangeSlider
                min={0} max={1000}
                step={5}
                value={[price.from, price.to]}
                onValueChange={([from, to]) => setPrice({from, to})}
            />
          </div>

          <CheckboxFiltersGroup
            title='Ингредиенты'
            loading={loading}
            limit={6}
            className='mt-5'
            ingredientsIds={ingredientsIds}
            defaultItems={ingredientsItems.slice(0, 6)}
            items={ingredientsItems}
            onClickCheckbox={(checked) => onCheckboxSelect(checked)}
          />
        </div>
    )
};