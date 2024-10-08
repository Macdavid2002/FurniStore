import { useState } from "react";
import { ChairCard } from "../../ui/cards-skeleton/ChairCard";
import { BedCard } from "../../ui/cards-skeleton/BedCard";
import { BenchCard } from "../../ui/cards-skeleton/BenchCard";
import { LightingCard } from "../../ui/cards-skeleton/LightingCard";
import { DiningCard } from "../../ui/cards-skeleton/DiningCard";
import { RugCard } from "../../ui/cards-skeleton/RugCard";
import { SofaCard } from "../../ui/cards-skeleton/SofaCard";
import { StorageCard } from "../../ui/cards-skeleton/StorageCard";
import { TableCard } from "../../ui/cards-skeleton/TableCard";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const categories = {
  Chairs: <ChairCard />,
  Beds: <BedCard />,
  Benches: <BenchCard />,
  Dining: <DiningCard />,
  Lighting: <LightingCard />,
  Rugs: <RugCard />,
  Sofas: <SofaCard />,
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
        <h1 className="text-xl md:text-3xl text-gray-500 font-cinzel">
          Shop By Category
          <div className="border border-black rounded-full border-t-1 w-14 md:w-60 my-4 mx-auto"></div>
        </h1>
      </div>

      <div className="hidden mt-8 md:flex justify-center items-center">
        <ul className="px-4 py-2 max-md:w-[90%] flex gap-1 justify-center items-center shadow-md rounded-xl bg-[#f8f7f4]">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`text-md rounded-xl px-3 max-md:px-4 py-[5px] cursor-pointer ${
                selectedCategory === category ? "bg-black text-white" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-black text-xl font-bold font-cinzel">
            Shop By Category
          </h1>
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
