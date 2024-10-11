'use client';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, {useState, useRef} from 'react';
import { useClickAway, useDebounce } from 'react-use';
import {useProductsStore} from "@/store/reducers/products";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const searchProducts = useProductsStore(state => state.searchProducts)
  const setSearchProducts = useProductsStore(state => state.setSearchProducts)

  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
      async () => {
        try {
          const response = await Api.products.searchProducts(searchQuery);
          setSearchProducts(response.products);
        } catch (error) {
          console.log(error);
        }
      },
      250,
      [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setSearchProducts([]);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setSearchQuery(e.target.value)
  }

  return (
      <>
        {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

        <div
            ref={ref}
            className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
          <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
          <input
              className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
              type="text"
              placeholder="Search..."
              onFocus={() => setFocused(true)}
              value={searchQuery}
              onChange={onInputChange}
          />

          {searchProducts.length > 0 && (
              <div
                  className={cn(
                      'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                      focused && 'visible opacity-100 top-12',
                  )}>
                {searchProducts.map((product) => (
                    <Link
                        onClick={onClickItem}
                        key={product.id}
                        className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                        href={`/app/(root)/products/${product.id}`}>
                      <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                      <span>{product.name}</span>
                    </Link>
                ))}
              </div>
          )}
        </div>
      </>
  );
};
