import { useState } from "react";
import { Chairs } from "../Categories/Chairs";
import { Beds } from "../Categories/Beds";
import { Benches } from "../Categories/Benches";
import { Lighting } from "../Categories/Lighting";
import { Dining } from "../Categories/Dining";
import { Rugs } from "../Categories/Rugs";

const categories = {
  Chairs: <Chairs />,
  Beds: <Beds />,
  Benches: <Benches />,
  Dining: <Dining />,
  Lighting: <Lighting />,
  Rugs: <Rugs />,
  // Add other categories here
};

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chairs");

  return (
    <div className="mt-24">
      <div className="px-4 md:px-8 flex justify-between items-center">
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
        <h1 className="text-xl md:text-3xl font-bold text-gray-500">
          Shop By Category
        </h1>
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <ul className="p-1 w-[52%] flex gap-1 justify-center items-center bg-gray-400 rounded-full">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`focus:bg-gray-200 rounded-full px-3 cursor-pointer ${
                selectedCategory === category ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
          <li className="focus:bg-gray-200 rounded-full px-3 cursor-pointer">
            Sofas
          </li>
          <li className="focus:bg-gray-200 rounded-full px-3 cursor-pointer">
            Storage
          </li>
          <li className="focus:bg-gray-200 rounded-full px-3 cursor-pointer">
            Tables
          </li>
        </ul>
      </div>
      <div>{categories[selectedCategory]}</div>
    </div>
  );
};
