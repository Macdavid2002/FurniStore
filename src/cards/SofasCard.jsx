import { Link } from "react-router-dom";
import data from "../api/data.json";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
export const SofasCard = () => {
  return (
    <div className="md:mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.sofa.slice(0, 4).map((sofas, id) => (
          <div key={id}>
            <div className="relative p-10 border border-gray-400">
              <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <Link to={`/sofa/${sofas.name}`}>
                <img src={sofas.imgUrl} className="z-10" alt="Sofa pic" />
              </Link>
              <span className="flex justify-between items-center">
                <h1 className="py-4 text-md font-medium md:text-xl ">
                  {sofas.name}{" "}
                </h1>
                <ShoppingBagIcon className="w-6 h-6 cursor-pointer " />
              </span>
              <h2 className="font-medium text-lg text-gray-500">
                $ {sofas.price}{" "}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <Link to="/sofa">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-400 rounded-md text-white text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
