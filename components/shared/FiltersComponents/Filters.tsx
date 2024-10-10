'use client'

import React, {useState} from 'react';
import {Title, RangeSlider, CheckboxFiltersGroup} from "@/components/shared";
import {Button, Input} from "@/components/ui";
import {useFilterIngredients} from "@/hooks /useFilterIngredients";
import {useIngredientsStore} from "@/store/reducers/ingredients";
import {Api} from "@/services/api-client";
import {ProductFilters, StatePriceFilter} from "@/types";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
  const ingredients = useIngredientsStore(state => state.ingredients);
  const loading = useIngredientsStore(state => state.loading);

  const [price, setPrice] = useState<StatePriceFilter>({from: 0, to: 1000})
  const [ingredientsIds, setIngredientsIds] = useState<string[]>([])
  const [size, setSize] = useState<string[]>([])
  const [pizzaType, setPizzaType] = useState<string[]>([])

  useFilterIngredients();

  const onTypeChange = (value: string[]) => {
    const type = value[0];
    const state = [...pizzaType];
    if (state.includes(type)) {
      setPizzaType([]);
    } else {
      setPizzaType([type]);
    }
  }

  const onSizesChange = (value: string[]) => {
    const type = value[0];
    const state = [...size];
    if (state.includes(type)) {
      setSize([]);
    } else {
      setSize([type]);
    }
  }

  const onIngredientsSelect = (ids: string[]) => {
    const id = ids[0];
    const state = [...ingredientsIds];
    if (state.includes(id)) {
      const index = state.findIndex(i => i === id);
      state.splice(index, 1);
      setIngredientsIds(state)
    } else {
      state.push(id)
      setIngredientsIds(state)
    }
  }

  const onPriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setPrice(prev => ({...prev, [name]: value}))
  }

  const onFiltersApply = async () => {
    const filters: ProductFilters = {
      price,
      ingredients: ingredientsIds,
      size,
      pizzaType
    };

    console.log(filters);

    await Api.products.getProducts(filters)
  }

  const onFiltersReset = async () => {
    setPrice({from: 0, to: 1000});
    setPizzaType([]);
    setSize([]);
    setIngredientsIds([]);

    await Api.products.getProducts(null);
  }

  const ingredientsItems= ingredients.map(({id, name}) => ({value: id.toString(), text: name}));

  return (
        <div className={className}>
          <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

          <div className='flex flex-col gap-4'>
            <CheckboxFiltersGroup
                title="Тип теста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={onTypeChange}
                selected={pizzaType}
                items={[
                  { text: 'Тонкое', value: '1' },
                  { text: 'Традиционное', value: '2' },
                ]}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                name="sizes"
                className="mb-5"
                onClickCheckbox={onSizesChange}
                selected={size}
                items={[
                  { text: '20 см', value: '20' },
                  { text: '30 см', value: '30' },
                  { text: '40 см', value: '40' },
                ]}
            />
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
                  onChange={onPriceInputChange}
              />
              <Input
                  type='number'
                  name='to'
                  placeholder='1000'
                  min={100}
                  max={1000}
                  value={price.to}
                  onChange={onPriceInputChange}
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
              title="Ингредиенты"
              name="ingredients"
              className="mt-5"
              limit={6}
              defaultItems={ingredientsItems.slice(0, 6)}
              items={ingredientsItems}
              loading={loading}
              onClickCheckbox={onIngredientsSelect}
              selected={ingredientsIds}
          />

          <div className='border-t pt-5 border-y-neutral-100 mt-5 flex items-center justify-between'>
            <Button className='text-black bg-gray-50 w-[45%]' onClick={onFiltersReset}>Reset</Button>
            <Button className='text-white w-[45%]' onClick={onFiltersApply}>Apply</Button>
          </div>
        </div>
    )
};