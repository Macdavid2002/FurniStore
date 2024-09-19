import data from "../../api/data.json";
import { Chair } from "../../products/chair";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import filter from "../../assets/filter.svg";
// Parent Chair Component
export const Chairs = () => {
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

      <div className="p-8 flex justify-between">
        <h3 className="text-xl flex items-center gap-3">
          Filters <img src={filter} className="h-4" alt="" />
        </h3>
        <select className="border border-black p-2  text-gray-500 w-36 rounded-md">
          <option value="pricing">Pricing</option>
          <option value="0-100">$ 0 - 100</option>
          <option value="100-200">$ 100 - 200</option>
          <option value="200-300">$ 200 - 300</option>
          <option value="300-400">$ 300 - 400</option>
          <option value="400">400 +</option>
        </select>
      </div>
      <div className="relative px-8 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  ">
        {data.chairs.map((chair, index) => (
          <div key={index}>
            <Chair
              name={chair.name}
              price={chair.price}
              id={chair.id}
              imgUrl={chair.imgUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
