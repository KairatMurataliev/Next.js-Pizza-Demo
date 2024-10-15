import {useEffect} from "react";
import {useIngredientsStore} from "@/store/reducers/ingredients";

export const useFilterIngredients = () => {
  const getIngredientsForFilters = useIngredientsStore(state => state.getIngredientsForFilters)

  useEffect(() => {
    const fetchIngredientsData = async () => {
      await getIngredientsForFilters();
    }

    void fetchIngredientsData();
  }, [getIngredientsForFilters]);
}