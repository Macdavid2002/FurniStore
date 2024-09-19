import { Link } from "react-router-dom";
import data from "../api/data.json";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
export const StorageCard = () => {
  return (
    <div className="mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.storage.slice(0, 4).map((storage) => (
          <div key={storage.id}>
            <div className="relative p-10 border border-gray-400">
              <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <Link to={`storage/${storage.name}`}>
                <img src={storage.imgUrl} className="z-10" alt={storage.name} />
              </Link>

              <span className="flex justify-between items-center">
                <h1 className="py-4 text-md font-medium md:text-xl ">
                  {storage.name}{" "}
                </h1>
                <ShoppingBagIcon className="w-6 h-6 cursor-pointer " />
              </span>
              <h2 className="font-medium text-md text-gray-500">
                $ {storage.price}{" "}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <Link to="/storage">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-400 font-bold rounded-md text-white text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
