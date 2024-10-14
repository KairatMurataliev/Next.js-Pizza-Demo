import {pizzaSizes} from "@/shared/constants/pizza";
import {ProductItem} from "@prisma/client";
import {PizzaType, Variant} from "@/types";

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
}