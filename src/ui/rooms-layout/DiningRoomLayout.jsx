import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const DiningRoomLayout = ({ name, price, id, imgUrl }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative text-center">
        <Link to={`/living-room/${name}`}>
          <img src={imgUrl} alt="" className="relative" />
        </Link>
        <p className="py-4 font-bold text-lg">{name} </p>
        <p>$ {price} </p>
        <ShoppingBagIcon className="w-12 text-gray-800 absolute left-[23rem] bottom-24 p-3 bg-white" />
        <HeartIcon className="w-12 text-gray-800 absolute left-[23rem] top-4 p-3 bg-white" />
      </div>
    </div>
  );
};
