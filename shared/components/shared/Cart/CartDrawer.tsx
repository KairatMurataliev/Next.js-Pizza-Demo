'use client';
import React, {PropsWithChildren, useEffect} from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui"
import Link from "next/link";
import {Button} from "@/shared/components/ui";
import {ArrowRight} from "lucide-react";
import {CartDrawerItem} from "@/shared/components/shared";
import {getCartItemDetails} from "@/shared/lib/utils";
import {useCartStore} from "@/store/reducers/cart";
import {PizzaSize, PizzaType} from "@/types";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<PropsWithChildren<Props>> = ({children}) => {
  const totalAmount = useCartStore(state => state.totalAmount)
  const items = useCartStore(state => state.items)
  const fetchCartItems = useCartStore(state => state.fetchCartItems)

  useEffect(() => {
    const getCartData = async () => {
      await fetchCartItems();
    }

    void getCartData();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            In Cart <span className='font-bold'>3 items</span>
          </SheetTitle>
        </SheetHeader>

        <div className='-mx-6 mt-5 overflow-auto flex-1'>
          <div className='mb-2'>
            {items.map(({id, imageUrl, name, price, quantity, ingredients, pizzaType, pizzaSize}) => (
              <CartDrawerItem
                key={id}
                id={id}
                imageUrl={imageUrl}
                name={name}
                price={price}
                quantity={quantity}
                details={pizzaSize && pizzaType ? getCartItemDetails(ingredients, pizzaType as PizzaType, pizzaSize as PizzaSize) : ''}
              />
            ))}
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"/>
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/checkout">
              <Button
                // onClick={() => setRedirecting(true)}
                // loading={redirecting}
                type="submit"
                className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2"/>
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
};