import { useDispatch } from "react-redux";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { cartActions } from "../redux/slices/cart-slice";
import { toast } from "react-toastify";
// Child chair component
export const Chair = ({ name, id, price, imgUrl }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price ,imgUrl}));
    toast.success("Added To Cart");
  };
  return (
    <div className="relative p-16 border border-gray-200 cursor-pointer">
      <HeartIcon className="absolute w-8 h-8 right-8 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
      <Link to={`/chair/${name}`}>
        <img
          src={imgUrl}
          className=" z-10 transition-all hover:scale-105"
          alt={name}
        />
      </Link>
      <span className="flex justify-between items-center">
        <h1 className="py-4 text-md  md:text-xl ">{name}</h1>
        <ShoppingBagIcon
          className="w-5 h-6 cursor-pointer"
          onClick={addToCart}
          title="Add to cart"
        />
      </span>
      <h2 className="font-medium text-md text-gray-500">$ {price}</h2>
    </div>
  );
};
