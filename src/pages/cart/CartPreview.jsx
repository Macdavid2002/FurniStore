  import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cartActions } from "../../redux/slices/cart-slice";
export const CartPreview = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let subTotal = 0;
  cartItems.forEach(function (total) {
    subTotal += total.totalPrice;
  });
  const isCartOpen = useSelector((state) => state.cart.showCartPreview);
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(cartActions.hideCart());
  };
  return (
    <div
      className={`fixed top-0 right-0 w-[35%] h-full z-50 bg-white shadow-md transition-opacity duration-300 ease-in-out ${
        isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="flex justify-between items-center p-4">
        <span>
          <h1 className="text-md font-semibold text-gray-500 py-3">
            Shopping Cart
          </h1>
          <Link
            to="/cart"
            className="text-sm text-gray-400 underline"
            onClick={closeCartHandler}
          >
            View Full Cart
          </Link>
        </span>
        <XMarkIcon className="w-8 cursor-pointer" onClick={closeCartHandler} />
      </span>
      <div className="overflow-y-auto h-[calc(90vh-200px)] px-4">
        {cartItems.map((cartItem) => (
          <div className="flex items-center p-4 justify-between">
            <span className="flex items-center gap-8">
              <img src={cartItem.imgUrl} className="h-24" alt="" />
              <span>
                <h2>{cartItem.name}</h2>
                <h2 className="py-2 font-semibold text-sm">
                  Quantity: {cartItem.quantity}{" "}
                </h2>
              </span>
            </span>
            <span className="flex flex-col items-end">
              <h2>${cartItem.price} </h2>
              <TrashIcon className="w-4 cursor-pointer" />
            </span>
          </div>
        ))}
      </div>
      <span className="flex px-8 py-4 justify-between">
        <h1 className="font-bold">Subtotal:</h1>
        <h2 className="font-bold"> ${subTotal} </h2>
      </span>
      <button className="p-4 w-[90%] block font-bold text-md text-center mx-auto bg-gray-400 rounded-md">
        Checkout
      </button>
    </div>
  );
};
