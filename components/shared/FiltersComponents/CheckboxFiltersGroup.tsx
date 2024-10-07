'use client'

import React, {useState} from 'react';
import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/FiltersComponents/FilterCheckbox";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({className, title, items, defaultItems, limit = 5, searchInputPlaceholder = 'Поиск...', onChange, defaultValue}) => {

  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const listIngredients = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit)

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
        <div className={cn('', className)}>
          <p className='font-bold mb-3'>{title}</p>

          {showAll && (
              <div className='mb-5'>
                <Input
                    onChange={onChangeSearchInput}
                    value={searchValue}
                    placeholder={searchInputPlaceholder}
                    className='bg-gray-50 border-none'
                />
              </div>
          )}

          <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
            {listIngredients.map((item, index) => {
              return (
                  <FilterCheckbox
                      key={index}
                      text={item.text}
                      value={item.value}
                      endAdornment={item.endAdornment}
                      checked={false}
                      onCheckedChange={(ids) => console.log(ids)}
                  />
              )
            })}
          </div>

          {items.length > limit && (
              <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                <button className='text-primary mt-3' onClick={() => setShowAll(prev => !prev)}>
                  {showAll ? 'Скрыть' : '+ Показать'}
                </button>
              </div>
          )}
        </div>
    )
};