import data from "../api/data.json";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const ChairCard = () => {
  return (
    <div className="md:mt-8">
      <div className="relative p-8 grid grid-cols-1 sm:grid-cols-2 gap-12  ">
        {data.chairs.slice(0, 4).map((chair) => (
          <div key={chair.id}>
            <div className="relative p-20 border border-gray-400 rounded-md cursor-pointer">
              <HeartIcon className="absolute w-8  right-8 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <Link to={`/chair/${chair.name}`}>
                <img
                  src={chair.imgUrl}
                  className=" z-10 transition-all hover:scale-105"
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

      <span className="flex justify-center">
        <Link to="/chair">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black text-center">
            Show More
          </button>
        </Link>
      </span>
    </div>
  );
};
