import {useEffect} from "react";
import {Api} from "@/services/api-client";
import {useCategoriesStore} from "@/store/reducers/category";

export const useCategories = () => {
  const setCategories = useCategoriesStore(state => state.setCategories)
  const setLoading = useCategoriesStore(state => state.setLoading)

  useEffect(() => {
    async function getCategories() {
      try {
        setLoading(true)
        const response = await Api.categories.getAllCategories();
        setCategories(response);
        setLoading(false)
      } catch (err) {
        console.error(err);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    getCategories()
  }, [setCategories, setLoading]);
}