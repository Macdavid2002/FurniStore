import data from "../api/data.json";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Chair = () => {
  return (
    <div className="md:mt-8">
      <div className="px-8 text-sm">
        <Link to="/">Home</Link>
        <span> > </span> Chairs
      </div>
      <h1 className="px-8 py-4 text-xl font-medium">Category: Chairs </h1>
      <div className="relative px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-12  ">
        {data.data[0].map((chair) => (
          <div key={chair.id}>
            <div className="relative p-10 border border-gray-400 cursor-pointer">
              <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <Link to={`/chair/${chair.id}`}>
                <img src={chair.imgUrl} className=" z-10" alt={chair.name} />
              </Link>
              <span className="flex justify-between items-center">
                <h1 className="py-4 text-md  md:text-xl ">{chair.name}</h1>
                <ShoppingBagIcon className="w-5 h-6 cursor-pointer" />
              </span>
              <h2 className="font-medium text-md text-gray-500"> &gt
                $ {chair.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
