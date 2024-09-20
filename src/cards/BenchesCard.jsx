import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import data from "../api/data.json";
import { Link } from "react-router-dom";
export const BenchesCard = () => {
  return (
    <div className="md:mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.benches.slice(0, 4).map((bench) => (
          <div key={bench.id}>
            <div className="relative p-10 border border-gray-400">
              <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <Link to={`/bench/${bench.name}`}>
                <img src={bench.imgUrl} className="" alt={bench.name} />
              </Link>
              <span className="flex justify-between items-center">
                <h1 className="py-4 text-xl ">{bench.name} </h1>
                <ShoppingBagIcon className="w-6 h-6 cursor-pointer " />
              </span>
              <h2 className="font-medium text-lg text-gray-500">
                $ {bench.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <Link to="/benches">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
