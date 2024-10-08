import {useEffect} from "react";
import {Api} from "@/services/api-client";
import {useIngredientsStore} from "@/store/reducers/ingredients";

export const useFilterIngredients = () => {
  const setIngredients = useIngredientsStore(state => state.setIngredients)
  const setLoading = useIngredientsStore(state => state.setLoading)

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const response = await Api.ingredients.getAllIngredients();
        setIngredients(response);
        setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchIngredients()
  }, [setIngredients]);
}