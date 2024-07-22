import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, removeFromCart, increaseQuantity } from "../store";

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = "user1"; // This should be dynamic, based on the authenticated user
    dispatch(fetchCart(userId));
  }, [dispatch]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Price: $
                {item.price * item.quantity}
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  Increase Quantity
                </button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
