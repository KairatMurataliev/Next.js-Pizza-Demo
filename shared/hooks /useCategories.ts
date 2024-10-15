import {useEffect} from "react";
import {useCategoriesStore} from "@/store/reducers/category";

export const useCategories = () => {
  const getCategories = useCategoriesStore(state => state.getCategories)

  useEffect(() => {
    const fetchCategories = async () => {
      await getCategories();
    }
    void fetchCategories();
  }, [getCategories]);
}