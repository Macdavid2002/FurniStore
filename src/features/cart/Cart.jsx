import { useSelector } from "react-redux";
import { CartItems } from "./cart-items";
export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="bg-[#f8f7f4] overflow-hidden">
      <h1 className="text-3xl pt-10 mx-14">Cart</h1>
      <div className="flex justify-between py-8 px-14">
        <div>
          <div className="flex justify-between bg-white p-4 gap-4">
            <h1>Product </h1>
            <h1>Quantity</h1>
            <h1>Total</h1>
          </div>

          {cartItems.map((cartItem, index) => (
            <div key={index}>
              <CartItems
                name={cartItem.name}
                price={cartItem.price}
                id={cartItem.id}
                imgUrl={cartItem.imgUrl}
                totalPrice={cartItem.totalPrice}
                quantity={cartItem.quantity}
              />
            </div>
          ))}
        </div>
        <div className="border border-gray-400 p-10 relative h-1/3 ">
          <h1 className="text-2xl py-4">CART TOTALS</h1>
          <h2 className="text-xl py-2">SubTotal</h2>
          <hr />
          <h1 className="text-xl py-2">Total</h1>
          <button className="px-24 py-4 bg-gray-400 text-white text-md rounded-md m-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
