import React from 'react';
import {Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup} from "@/components/shared";
import {Input} from "@/components/ui";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
          <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

          {/* Верхние чекбоксы */}
          <div className='flex flex-col gap-4'>
            <FilterCheckbox text='Можно собирать' value='1'/>
            <FilterCheckbox text='Новинки' value='2'/>
          </div>

          {/* Фильтры по цене */}
          <div className='border-y mt-5 border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Цена от и до:</p>

            <div className='flex gap-3 mb-5'>
              <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
              <Input type='number' placeholder='1000' min={100} max={1000}/>
            </div>

            <RangeSlider min={0} max={1000} step={5} value={[0, 1000]}/>
          </div>

          {/* Фильтры ингредиенты */}
          <CheckboxFiltersGroup
            title='Ингредиенты'
            limit={6}
            className='mt-5'
            defaultItems={[
              {text: 'Сырный соус', value: '1'},
              {text: 'Моццарелла', value: '2'},
              {text: 'Соленые огурчики', value: '3'},
              {text: 'Чеснок', value: '4'},
              {text: 'Красный лук', value: '5'},
              {text: 'Томаты', value: '6'},
            ]}
            items={[
              {text: 'Сырный соус', value: '1'},
              {text: 'Моццарелла', value: '2'},
              {text: 'Соленые огурчики', value: '3'},
              {text: 'Чеснок', value: '4'},
              {text: 'Красный лук', value: '5'},
              {text: 'Томаты', value: '6'},
              {text: 'Сырный соус', value: '1'},
              {text: 'Моццарелла', value: '2'},
              {text: 'Соленые огурчики', value: '3'},
              {text: 'Чеснок', value: '4'},
              {text: 'Красный лук', value: '5'},
              {text: 'Томаты', value: '6'},
            ]}
          />
        </div>
    )
};