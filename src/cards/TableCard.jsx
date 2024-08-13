import { useState } from "react";
import { TableData } from "../data/TableData";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
export const TableCard = () => {
  const [tableList, setTableList] = useState(TableData);
  return (
    <div className="mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {tableList.map((tableList, id) => (
          <div key={id}>
            <div className="relative p-10 border border-gray-400">
              <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <img src={tableList.imgUrl} className="z-10" alt="Table pic" />
              <span className="flex justify-between items-center">
                <h1 className="py-4 text-md font-medium md:text-xl ">
                  {tableList.name}{" "}
                </h1>
                <ShoppingBagIcon className="w-6 h-6 cursor-pointer hover:animate-bounce" />
              </span>
              <h2 className="font-medium text-lg text-gray-500">
                $ {tableList.price}{" "}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <span className="flex justify-center">
        <button className="py-4 px-8 bg-gray-400 font-bold rounded-md text-white text-center">
          Show More
        </button>
      </span>
    </div>
  );
};
