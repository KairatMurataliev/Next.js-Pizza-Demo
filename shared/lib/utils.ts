import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {CartDTO, CartItemDTO} from "@/shared/services/dto/cart.dto";
import {CartStateItem, PizzaSize, PizzaType, Variant} from "@/types";
import {Ingredient, ProductItem} from "@prisma/client";
import {mapPizzaType, pizzaSizes} from "@/shared/constants/pizza";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calCartItemTotalPrice = (
  item: CartItemDTO
): number => {
  const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

  return (ingredientsPrice + item.productItem.price) * item.quantity;
};

export const calTotalPizzaPrice = (
  size: PizzaSize,
  type: PizzaType,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice = items
    .find(item => item.pizzaType === type && item.size === size)?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter(ingredient => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  return pizzaPrice + totalIngredientsPrice;
};

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
) => {
  const details: string[] = []

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} sm`);
  }

  if (ingredients) {
    details.push(...ingredients.map(({name}) => name));
  }

  return details.join(', ');
};

export const getAvailablePizzaSizes = (
  items: ProductItem[],
  type: PizzaType,
): Variant[] => {
  const filteredPizzasByType = items
    .filter(item => item.pizzaType === type)

  return pizzaSizes.map(i => ({
    name: i.name,
    value: i.value,
    disabled: !filteredPizzasByType.some(pizza => Number(pizza.size) === Number(i.value)),
  }));
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number
}
export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map(item => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calCartItemTotalPrice(item),
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    ingredients: item.ingredients.map(({name, price}) => ({name, price: String(price)}))
  }))

  return {
    items,
    totalAmount: data.totalAmount,
  }
}