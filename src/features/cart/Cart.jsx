import { useSelector } from "react-redux";
import { CartItems } from "./cart-items";
import { Link } from "react-router-dom";
export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let subTotal = 0;
  let vat = 150;
  let shipping = 250;
  let total = 0;
  cartItems.forEach((item) => {
    subTotal += item.totalPrice;
    total = subTotal + shipping + vat;
  });

  return (
    <div>
      {/* Conditional rendering for cart */}
      {cartItems.length === 0 ? (
        /* When Cart is Empty*/
        <div className="bg-[#F5F5F5] min-h-screen flex flex-col justify-center items-center">
          <div className="block text-center md:p-32 py-32">
            <h1 className="text-gray-500 text-md md:text-xl p-3">Cart Empty</h1>
            <Link to="/chair">
              <button className="w-64 h-12 bg-gray-400 rounded-md text-black text-sm font-normal uppercase m-4 ">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        /* When cart has an item */
        <div className="bg-[#f8f7f4] overflow-hidden">
          <h1 className="text-3xl font-bold pt-10 mx-14">Your Cart</h1>
          <div className=" lg:flex gap-12 py-8 px-14">
            <div>
              <div className="flex justify-around bg-white p-4">
                <h1 className="w-[45%]">Product </h1>
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
            {/* Cart Totals */}
            <div className="border border-gray-400 p-10 relative h-1/3 ">
              <h1 className="text-xl py-3 font-bold">CART TOTALS</h1>
              <div className="border-t-2 pb-2 border-black w-full"></div>
              <span className="flex items-center justify-between">
                <h2 className="text-lg py-2 flex ">Subtotal: </h2>
                <p className="text-md">$ {subTotal}.00</p>
              </span>
              <span className="flex items-center justify-between">
                <h2 className="text-lg py-2">Shipping:</h2>
                <p className="text-md">$ {shipping}.00</p>
              </span>
              <span className="flex items-center justify-between">
                <h2 className="text-lg py-2">VAT:</h2>
                <p className="text-md">$ {vat}.00</p>
              </span>
              <div className="border-t-[1px] pb-2 border-gray-400 w-full"></div>
              <span className="flex items-center justify-between">
                <h1 className="text-xl py-2">Total</h1>
                <p className="text-md">$ {total}.00</p>
              </span>
              <button className="px-24 py-4 bg-gray-400 text-white text-md rounded-md m-2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
