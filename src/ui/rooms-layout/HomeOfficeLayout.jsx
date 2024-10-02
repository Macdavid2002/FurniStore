import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const HomeOfficeLayout = ({ name, price, id, imgUrl }) => {
  return (
    <div className="min-h-screen">
      <div className="relative text-center">
        <Link to={`/living-room/${name}`}>
          <img src={imgUrl} alt="" className="relative w-full p-4" />
        </Link>
        <p className="py-4 font-bold text-lg">{name} </p>
        <p>$ {price} </p>
        <ShoppingBagIcon className="w-12 text-gray-800 absolute right-2 bottom-24 p-3 bg-white" />
        <HeartIcon className="w-12 text-gray-800 absolute right-2 top-4 p-3 bg-white" />
      </div>
    </div>
  );
};
