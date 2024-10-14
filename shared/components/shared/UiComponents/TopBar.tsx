import React from 'react';
import {Categories, Container, SortPopup} from "@/shared/components/shared";
import {cn} from "@/shared/lib/utils";
import {Category} from "@prisma/client";

interface Props {
    className?: string;
    loading: boolean;
    categories: Category[];
}

export const TopBar: React.FC<Props> = ({className, loading, categories}) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
          <Container className='flex items-center justify-between'>
            <Categories categories={categories} loading={loading}/>
            <SortPopup/>
          </Container>
        </div>
    )
};