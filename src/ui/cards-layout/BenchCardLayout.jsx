import { Link } from "react-router-dom";
import { auth } from "./../../config/firebase";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { cartActions } from "../../redux/slices/cart-slice";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

export const BenchCardLayout = ({ name, id, price, imgUrl }) => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price, imgUrl }));
    toast.success("Added to cart", {
      autoClose: 1000,
    });
  };
  return (
    <div className="relative p-10 border border-gray-400 ">
      <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
      <Link to={`/products/${name}`}>
        <img src={imgUrl} className="" alt={name} />
      </Link>
      <span className="flex justify-between items-center">
        <h1 className="py-4 text-xl ">{name} </h1>
        {!user ? (
          <Link to="/login">
            <ShoppingBagIcon className="w-6 h-6 cursor-pointer " />
          </Link>
        ) : (
          <ShoppingBagIcon
            className="w-6 h-6 cursor-pointer"
            onClick={addToCart}
          />
        )}
      </span>
      <h2 className="font-medium text-lg text-gray-500">$ {price}</h2>
    </div>
  );
};
