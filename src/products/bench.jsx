import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Bench = ({ id, name, price, imgUrl }) => {
  return (
    <div className="md:mt-8">
      <div>
        <div key={id}>
          <div className="relative p-12 border border-gray-400 cursor-pointer">
            <HeartIcon className="absolute w-8 h-8 right-2 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
            <Link to={`/Bench/${name}`}>
              <img
                src={imgUrl}
                className=" z-10 
                   transition-all hover:scale-105"
                alt={name}
              />
            </Link>
            <span className="flex justify-between items-center">
              <h1 className="py-4 text-md  md:text-xl ">{name}</h1>
              <ShoppingBagIcon className="w-5 h-6 cursor-pointer" />
            </span>
            <h2 className="font-medium text-md text-gray-500">
              $ {Bench.price}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
