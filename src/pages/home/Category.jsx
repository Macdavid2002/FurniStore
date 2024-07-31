import { CategoryData } from "../../data/categoryData";
import { useState } from "react";
import { CategoryCard } from "../../cards/CategoryCard";
export const Category = () => {
  const [categoryList, setCategoryList] = useState(CategoryData);
  return <CategoryCard categoryList={categoryList} />;
};
