import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const CartItems = ({
  name,
  id,
  price,
  totalPrice,
  quantity,
  imgUrl,
}) => {
  const dispatch = useDispatch();
// Product Quantity Increment Function
  const increment = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };
// Product Quantity decrement Function
  const decrement = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  // Product delete Function
  const deleteItemFromCart = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <div>
      <div className="bg-white shadow-md p-4 my-1 rounded-lg">
        {/* Added shadow here */}
        <div className="flex items-center gap-20">
          {/* Product image and name */}
          <div className="flex items-center">
            <XMarkIcon className="w-5" onClick={deleteItemFromCart} />
            <img src={imgUrl} className="h-24 w-24 rounded-md" alt="" />
            {/* Optional: Added rounded corners */}
            <span className="block ml-4">
              <p className="p-4 text-md font-medium">{name} </p>
              <p className="px-4 text-sm font-medium">$ {price}.00 </p>
            </span>
          </div>
          {/* Increment and Decrement product quantity */}
          <span className="flex items-center gap-2 h-10 px-5 border border-black rounded-md">
            {/* Optional: Added rounded corners */}
            <MinusIcon className="w-5" onClick={decrement} />
            <p className="p-4 text-md font-medium">{quantity} </p>
            <PlusIcon className="w-5" onClick={increment} />
          </span>

          <p className="p-4 text-md font-medium">$ {totalPrice} </p>
        </div>
      </div>
    </div>
  );
};
