export const mapSize = {
  20: 'Small',
  30: 'Middle',
  40: 'Big',
} as const;

export const mapPizzaType = {
  1: 'Traditional',
  2: 'Thin'
} as const;

export const pizzaSizes = Object.entries(mapSize).map(([value, name]) => ({
  name,
  value,
}))

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value,
}))