import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart-slice";
import { wishlistSlice } from "./slices/wishlist-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,

  },
});
