'use client'

import React, {useState} from 'react';
import {FilterCheckbox, FilterCheckboxProps} from "@/shared/components/shared/FiltersComponents/FilterCheckbox";
import {cn} from "@/shared/lib/utils";
import {Input, Skeleton} from "@/shared/components/ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (ids: string[]) => void;
  defaultValue?: string[];
  selected?: string[];
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({title,
                                                        items,
                                                        defaultItems,
                                                        limit = 5,
                                                        searchInputPlaceholder = 'Поиск...',
                                                        className,
                                                        loading,
                                                        onClickCheckbox,
                                                        selected,
                                                        name,}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const listItemsCheckboxes = showAll
      ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
      : (defaultItems || items)?.slice(0, limit)

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  if (loading) {
    return (
        <div className={cn('', className)}>
          <p className='font-bold mb-3'>{title}</p>

          {
            ...Array(limit)
                .fill(0)
                .map((_, index) => {
              return (
                  <Skeleton key={index} className="mb-4 h-6 rounded-[8px]" />
              )
            })
          }
          <Skeleton className="mb-4 h-6 w-28 rounded-[8px]" />
        </div>
    )
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
            {listItemsCheckboxes?.map((item, index) => {
              return (
                  <FilterCheckbox
                      key={index}
                      text={item.text}
                      value={item.value}
                      endAdornment={item.endAdornment}
                      checked={selected?.includes(item.value)}
                      onCheckedChange={() => onClickCheckbox?.([item.value])}
                      name={name}
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