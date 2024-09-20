import data from "../api/data.json";
import { useState } from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  // Function to filter items based on search input
  const filterItems = (dataArray) => {
    return dataArray
      .filter((item) => {
        return searchInput.toLowerCase() === ""
          ? false
          : item.name.toLowerCase().includes(searchInput.toLowerCase());
      })
      .map((item) => (
        <div
          className="flex items-center justify-between shadow-md rounded-md p-4 my-4"
          key={item.id}
        >
          <span className="flex items-center gap-4">
            <img src={item.imgUrl} alt="" className="h-24" />
            <div>
              <h1 className="text-xs md:text-xl">{item.name}</h1>
              <h2 className="text-sm lg:text-lg">${item.price}</h2>
            </div>
          </span>
          {/* Buttons */}
          <span className="grid grid-cols-1 md:flex gap-2 md:gap-4 items-center">
            <button className="rounded-md bg-black p-2 lg:p-3 text-xs lg:text-md font-medium text-white">
              <HeartIcon className="w-5 md:w-5" />
            </button>
            <button className="rounded-md bg-black p-2 lg:p-3 text-xs lg:text-md font-medium text-white">
              <ShoppingBagIcon className="w-5 md:w-5" />
            </button>
          </span>
        </div>
      ));
  };

  return (
    <div className="px-4 py-36 md:p-24 md:py-64">
      <input
        type="text"
        className="border-b border-black w-full p-4 outline-none"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search Products..."
      />
      {filterItems(data.chairs)}
      {filterItems(data.beds)}
      {filterItems(data.benches)}
      {filterItems(data.dining)}
      {filterItems(data.lighting)}
      {filterItems(data.rugs)}
      {filterItems(data.sofa)}
      {filterItems(data.storage)}
      {filterItems(data.tables)}
    </div>
  );
};
