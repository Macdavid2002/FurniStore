import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../config/firebase";
import { toast } from "react-toastify";
export const BedCardLayout = ({ name, imgUrl, price, id }) => {
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
    <div>
      <div className="relative p-10 border border-gray-400">
        <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
        <Link to={`/products/${name}`}>
          <img src={imgUrl} className="" alt="Bed pic" />
        </Link>
        <span className="flex justify-between items-center">
          <h1 className="py-4 text-xl font-cinzel font-semibold">{name} </h1>
          {!user ? (
            <Link to="/login">
              <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
            </Link>
          ) : (
            <ShoppingBagIcon
              className="w-6 h-6 cursor-pointer"
              onClick={addToCart}
            />
          )}
        </span>
        <h2 className="text-lg text-gray-500 font-cinzel font-semibold">
          $ {price}
        </h2>
      </div>
    </div>
  );
};