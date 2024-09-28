import { useDispatch } from "react-redux";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// Child chair component
export const ChairLayout = ({ name, id, price, imgUrl }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price, imgUrl }));

    toast.success("Added To Cart", {
      autoClose: 1000,
    });
  };
  const [user] = useAuthState(auth);
  return (
    <div className="md:mt-8">
      <div>
        <div className="relative px-14 py-8 border border-gray-400 cursor-pointer">
          <HeartIcon className="absolute w-8 h-8 right-5 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
          <Link to={`/products/${name}`}>
            <img
              src={imgUrl}
              className=" z-10 transition-all hover:scale-105"
              alt={name}
            />
          </Link>
          <span className="flex justify-between items-center">
            <h1 className="py-4 text-md  md:text-sm font-cinzel">{name}</h1>
            {/* {!user ? (
              <Link to="/login">
                <ShoppingBagIcon className="w-5 cursor-pointer" />
              </Link>
            ) : ( */}
              <ShoppingBagIcon
                className="w-5 cursor-pointer"
                onClick={addToCart}
              />
            {/* )} */}
          </span>
          <h2 className="font-bold text-md text-gray-500 font-cinzel ">
            $ {price}
          </h2>
        </div>
      </div>
    </div>
  );
};
