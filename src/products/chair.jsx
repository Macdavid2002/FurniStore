import data from "../api/data.json";
import {
  HeartIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import filter from "../assets/filter.svg";

export const Chair = () => {
  const pricing = [
    { id: 0, name: "All prices" },
    { id: 1, name: "$0.00-100.00" },
    { id: 2, name: "$101.00-200.00" },
    { id: 3, name: "$201.00-300.00" },
    { id: 4, name: "301.00-400.00" },
    { id: 5, name: "$401.00+" },
  ];
  return (
    <div className="md:mt-8">
      <div className="px-8 text-sm flex items-center gap-1">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Chairs
      </div>
      <h1 className="px-8 py-4 text-xl font-medium">Category: Chairs </h1>
      <div className="flex justify-between">
        <div className="p-8">
          <h3 className="text-xl flex gap-3">
            Filters <img src={filter} alt="" />
          </h3>
          <div className="my-4">
            <h1>Pricing </h1>
            {pricing.map((price) => (
              <div className="flex items-center gap-2">
                <input type="radio" id={price.id} name={price.name} />
                <p className="text-[13px]">{price.name} </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-12  ">
          {data.data[0].map((chair) => (
            <div key={chair.id}>
              <div className="relative p-12 border border-gray-400 cursor-pointer">
                <HeartIcon className="absolute w-8 h-8 right-2 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
                <Link to={`/chair/${chair.id}`}>
                  <img
                    src={chair.imgUrl}
                    className=" z-10 
                   transition-all hover:scale-105"
                    alt={chair.name}
                  />
                </Link>
                <span className="flex justify-between items-center">
                  <h1 className="py-4 text-md  md:text-xl ">{chair.name}</h1>
                  <ShoppingBagIcon className="w-5 h-6 cursor-pointer" />
                </span>
                <h2 className="font-medium text-md text-gray-500">
                  $ {chair.price}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};