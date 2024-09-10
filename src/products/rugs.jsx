import data from "../api/data.json";
import {
  HeartIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import filter from "../assets/filter.svg";

export const Rugs = () => {
  return (
    <div className="md:mt-8">
      <div className="px-8 text-sm flex items-center gap-1">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Rugs
      </div>
      <h1 className="px-8 py-4 text-xl font-medium">Category: Rugs </h1>

      <div className="p-8 flex justify-between">
        <h3 className="text-xl flex gap-3">
          Filters <img src={filter} alt="" />
        </h3>
        <select>
          <option value="pricing"></option>
          <option value="0-100">$0 -100</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="relative px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-12  ">
        {data.data[5].map((rugs) => (
          <div key={rugs.id}>
            <div className="relative p-12 border border-gray-400 cursor-pointer">
              <HeartIcon className="absolute w-8 h-8 right-2 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <Link to={`/rug/${rugs.name}`}>
                <img
                  src={rugs.imgUrl}
                  className=" z-10 
                   transition-all hover:scale-105"
                  alt={rugs.name}
                />
              </Link>
              <span className="flex justify-between items-center">
                <h1 className="py-4 text-md  md:text-xl ">{rugs.name}</h1>
                <ShoppingBagIcon className="w-5 h-6 cursor-pointer" />
              </span>
              <h2 className="font-medium text-md text-gray-500">
                $ {rugs.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
