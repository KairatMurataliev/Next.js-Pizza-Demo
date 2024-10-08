'use client';

import React from 'react';
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/reducers/category";

interface Props {
    className?: string;
}

const cats = [
    {name: 'Пиццы', id: 1},
    {name: 'Комбо', id: 2},
    {name: 'Закуски', id: 3},
    {name: 'Десерты', id: 4},
    {name: 'Кофе', id: 5},
];

export const Categories: React.FC<Props> = ({className}) => {
    const activeCategoryId = useCategoryStore(state => state.activeId)

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map((cat) => {
                return (
                    <a
                        key={cat.id}
                        className={cn(
                            'flex items-center font-bold h-11 rounded-2xl px-5',
                            activeCategoryId === cat.id && 'bg-white text-primary shadow-md shadow-gray-200'
                        )}
                        href={`/#${cat.name}`}
                    >
                        <button>{cat.name}</button>
                    </a>
                )
            })}
        </div>
    )
};