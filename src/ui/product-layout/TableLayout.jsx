import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";
export const TableLayout = ({ name, id, price, imgUrl }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    try {
      dispatch(cartActions.addToCart({ name, id, price, imgUrl }));
      toast.success("Added to cart", {
        autoClose: 500,
      });
    } catch (error) {
      console.error("Error adding to cart", error);
      toast.error("Error adding to cart", {
        autoClose: 500,
      });
    }
  };
  return (
    <div className="relative px-14 py-8 border border-gray-400 cursor-pointer">
      <HeartIcon className="absolute w-8 h-8 right-5 top-14 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
      <Link to={`/products/${name}`}>
        <img
          src={imgUrl}
          className=" z-10 
                   transition-all hover:scale-105"
          alt={name}
        />
      </Link>
      <span className="flex justify-between items-center">
        <h1 className="py-4 text-md  md:text-md font-semibold">{name}</h1>
        <ShoppingBagIcon
          className="w-5 h-6 cursor-pointer"
          onClick={addToCart}
        />
      </span>
      <h2 className="font-semibold text-md text-gray-500">$ {price}</h2>
    </div>
  );
};
