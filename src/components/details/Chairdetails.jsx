/* eslint-disable react/jsx-no-undef */
import data from "../../api/data.json";
import { Link, useParams } from "react-router-dom";
import { ChevronRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

export const ChairDetails = () => {
  const { name } = useParams();
  const chairData = data.chairs;

  const chair = chairData.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (!chair) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen flex flex-col justify-center items-center">
        <div className="block text-center md:p-32 py-32">
          <h1 className="text-gray-500 text-md md:text-xl p-3">
            Product Not Found
          </h1>
          <Link to="/chair">
            
            <button className="w-64 h-12 mx-auto bg-gray-400 rounded-md text-black text-sm font-normal uppercase hover:bg-gray-400 hover:text-white">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex p-4 gap-2">
        <Link to="/" className="text-sm flex items-center">
          Home <ChevronRightIcon className="w-3" />
        </Link>
        <Link to="/chair" className="text-sm flex items-center">
          Chairs <ChevronRightIcon className="w-3" />
        </Link>
        <p className="text-sm">{chair.name}</p>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <>
          <div className="w-96 mx-auto shadow-sm shadow-black p-4 my-4 rounded-md">
            <div className="">
              <img src={chair.imgUrl} className="rounded-lg" alt={chair.name} />
            </div>
            <div>
              <span className="flex items-center justify-between">
                <h2 className="text-xl font-medium"> {chair.name}</h2>
                <h2 className="font-bold text-lg py-4"> ${chair.price}.00</h2>
              </span>
              <p className="text-sm font-light w-full">{chair.desc} </p>
              <button className="flex gap-4 justify-center rounded-md bg-black mt-4 p-3 text-md font-medium w-full text-white">
                <ShoppingBagIcon className="w-5 text-white" />
                Add to cart
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
