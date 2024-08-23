/* eslint-disable react/jsx-no-undef */
import data from "../api/data.json";
import { Link, useParams } from "react-router-dom";
export const ChairDetails = () => {
  const { id } = useParams();
  const chairData = data.data[0];
  const chair = chairData.find((item) => item.id === parseInt(id));
  if (!chair) {
    return (
      <div className="p-24 text-center bg-[#F5F5F5]">
        <p className="p-4">Chair not found</p>
        <button className="rounded-full bg-gray-400 my-5 p-4 text-md font-medium">
          <Link to="/chair" className="text-sm">
            Continue Shopping
          </Link>
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="flex p-4 gap-2">
        <Link to="/" className="text-sm">
          Home >
        </Link>
        <Link to="/chair" className="text-sm">
          Chairs > 
        </Link>
        <p className="text-sm">{chair.name}</p>
      </div>
      <div className="p-24 flex  justify-between bg-[#F5F5F5]">
        <div className="">
          <img src={chair.imgUrl} className="w-full" alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-medium"> {chair.name}</h1>
          <h2 className="font-bold text-lg py-4">${chair.price}.00</h2>
          <p className="text-md font-light w-98">{chair.desc} </p>
          <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
