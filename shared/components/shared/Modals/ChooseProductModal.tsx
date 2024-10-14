'use client';
import React from 'react';
import {Dialog, DialogContent} from "@/shared/components/ui";
import {cn} from "@/shared/lib/utils";
import {useRouter} from "next/navigation";
import {ChoosePizzaForm, ChooseProductForm} from "@/shared/components/shared";
import {ProductWithRelations} from "@/types";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({product, className}) => {
  const router = useRouter();

  const isPizza = Boolean(product.items[0].pizzaType)

  return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent
            className={cn(
                'p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden',
                className,
            )}>
          {isPizza ? (
              <ChoosePizzaForm
                  imageUrl={product.imageUrl}
                  name={product.name}
                  ingredients={product.ingredients}
                  items={product.items}
              />
          ) : <ChooseProductForm imageUrl={product.imageUrl} name={product.name}/>}
        </DialogContent>
      </Dialog>
  )
};