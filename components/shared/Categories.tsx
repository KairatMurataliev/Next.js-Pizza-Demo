import React from 'react';
import {useCategoriesStore} from "@/store/reducers/category";
import {Skeleton} from "@/components/ui";
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/Title";
import {Category} from "@prisma/client";

interface Props {
    className?: string;
    loading: boolean;
    categories: Category[];
}

export const Categories: React.FC<Props> = ({className, loading, categories}) => {
    const activeCategoryId = useCategoriesStore(state => state.activeId)

    if (loading) {
        return (
            <Skeleton className="flex items-center justify-center text-white bg-primary h-10 w-[600px] opacity-0.5 rounded-2xl" >
                <Title text='Categories'/>
            </Skeleton>
        )
    }

   return (
         <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
             {categories.map(({id, name}) => {
                 return (
                     <a
                         key={id}
                         className={cn(
                             'flex items-center font-bold h-11 rounded-2xl px-5',
                             activeCategoryId === id && 'bg-white text-primary shadow-md shadow-gray-200'
                         )}
                         href={`/#${name}`}
                     >
                         <button>{name}</button>
                     </a>
                 )
             })}
        </div>
     )
};