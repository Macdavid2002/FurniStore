import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { cartActions } from "../../redux/slices/cart-slice";
import { auth } from "./../../config/firebase";
export const ChairCardLayout = ({ id, name, price, imgUrl }) => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price, imgUrl }));
    toast.success("Added to cart", {
      autoClose: 500,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  };
  return (
    <div className="relative p-20 border border-gray-400 rounded-md cursor-pointer">
      <HeartIcon className="absolute w-8  right-8 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
      <Link to={`/products/${name}`}>
        <img
          src={imgUrl}
          className=" z-10 transition-all hover:scale-105"
          alt={name}
        />
      </Link>
      <span className="flex justify-between items-center">
        <h1 className="py-4 text-md  md:text-xl font-cinzel font-semibold">{name}</h1>
        {!user ? (
          <Link to="/login">
            <ShoppingBagIcon className="w-5 h-6 cursor-pointer" />
          </Link>
        ) : (
          <ShoppingBagIcon
            className="w-5 h-6 cursor-pointer"
            onClick={addToCart}
          />
        )}
      </span>
      <h2 className="text-md text-gray-500 font-cinzel font-semibold">$ {price}</h2>
    </div>
  );
};
