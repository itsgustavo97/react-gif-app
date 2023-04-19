import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h2 className="text-white">GifExpertApp - React</h2>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} categoria={category}/>
      ))}
    </>
  );
};
