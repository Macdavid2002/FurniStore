import { useState } from "react";
import { Chairs } from "../Categories/Chairs";
import { Beds } from "../Categories/Beds";
import { Benches } from "../Categories/Benches";
import { Lighting } from "../Categories/Lighting";
import { Dining } from "../Categories/Dining";
import { Rugs } from "../Categories/Rugs";
import { Sofas } from "../Categories/Sofas";
import { Storage } from "../Categories/Storage";
import { Tables } from "./../Categories/Tables";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
const categories = {
  Chairs: <Chairs />,
  Beds: <Beds />,
  Benches: <Benches />,
  Dining: <Dining />,
  Lighting: <Lighting />,
  Rugs: <Rugs />,
  Sofas: <Sofas />,
  Storage: <Storage />,
  Table: <Tables />,
};

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chairs");
  const [categoryNav, setCategoryNav] = useState(false);

  const toggleCategoryNav = () => {
    setCategoryNav(!categoryNav);
  };
  return (
    <div className="mt-24">
      <div className="hidden px-4 md:px-8 md:flex justify-between items-center">
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
        <h1 className="text-xl md:text-3xl font-bold text-gray-500">
          Shop By Category
          {/* <XMarkIcon className="w-6" /> */}
        </h1>
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
      </div>
      <div className="hidden mt-8 md:flex justify-center items-center">
        <ul className="px-4 max-md:w-[90%] flex gap-1 justify-center items-center shadow-sm shadow-black rounded-full">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`text-md font-bold rounded-full px-3 py-[3px] cursor-pointer ${
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
        <div className="flex justify-between items-center px-4">
          <h1 className="text-black text-xl font-bold">Shop By Category</h1>
          {categoryNav ? (
            <XMarkIcon className="h-6 w-6" onClick={toggleCategoryNav} />
          ) : (
            <Bars3Icon className="h-6 w-6" onClick={toggleCategoryNav} />
          )}
        </div>
        <ul
          className={`${
            categoryNav
              ? "fixed top-40 left-4 shadow-sm shadow-black w-[52%] bg-white z-50 "
              : "hidden"
          }`}
        >
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`border border-b-gray-400 cursor-pointer ${
                selectedCategory === category ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}

          <li className="focus:text-gray-400 cursor-pointer">Tables</li>
        </ul>
      </div>
      <div>{categories[selectedCategory]}</div>
    </div>
  );
};
