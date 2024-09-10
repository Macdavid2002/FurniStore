import { useState } from "react";
import { ChairCard } from "./../../cards/ChairCard";
import { BedCard } from "../../cards/BedsCard";
import { BenchesCard } from "../../cards/BenchesCard";
import { LightingCard } from "../../cards/LightingCard";
import { DiningCard } from "../../cards/DiningCard";
import { RugsCard } from "../../cards/RugsCard";
import { SofasCard } from "../../cards/SofasCard";
import { StorageCard } from "../../cards/StorageCard";
import { TableCard } from "../../cards/TableCard";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const categories = {
  Chairs: <ChairCard />,
  Beds: <BedCard />,
  Benches: <BenchesCard />,
  Dining: <DiningCard />,
  Lighting: <LightingCard />,
  Rugs: <RugsCard />,
  Sofas: <SofasCard />,
  Storage: <StorageCard />,
  Tables: <TableCard />,
};

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chairs");
  const [categoryNav, setCategoryNav] = useState(false);

  const toggleCategoryNav = () => {
    setCategoryNav(!categoryNav);
  };
  const handleToggleCategoryNavOnScroll = () => {
    if (window.scroll < 100) {
      setCategoryNav(!categoryNav);
    }
  };
  window.addEventListener("scroll", handleToggleCategoryNavOnScroll);
  return (
    <div className="mt-24">
      <div className="hidden px-4 md:px-8 md:block text-center">
        <h1 className="text-xl md:text-3xl   text-gray-500">
          Shop By Category
          <div className="border border-black rounded-full border-t-1 w-14 md:w-60 my-4 mx-auto"></div>
        </h1>
      </div>

      <div className="hidden mt-8 md:flex justify-center items-center">
        <ul className="px-4  py-2 max-md:w-[90%] flex gap-1 justify-center items-center shadow-sm shadow-black rounded-full">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`text-md rounded-full px-3 py-[3px] cursor-pointer ${
                selectedCategory === category ? "bg-gray-400 text-white" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <div className="flex justify-between items-center px-3">
          <h1 className="text-black text-xl font-bold">Shop By Category</h1>
          {categoryNav ? (
            <XMarkIcon className="h-6 w-6" onClick={toggleCategoryNav} />
          ) : (
            <Bars3Icon className="h-6 w-6" onClick={toggleCategoryNav} />
          )}
        </div>
        <ul
          className={`${
            categoryNav ? "mx-3 w-[90%] bg-white z-50 " : "hidden"
          }`}
        >
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`py-2 border-b border-b-gray-400 cursor-pointer ${
                selectedCategory === category ? "" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div>{categories[selectedCategory]}</div>
    </div>
  );
};
