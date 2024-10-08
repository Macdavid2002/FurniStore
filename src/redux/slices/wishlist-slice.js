import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishlist: [],
  totalQuantity: 0,
  showWishlistPreview: true,
};
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload;
      const oldItem = state.wishlist.find((item) => item.id === newItem.id);
      if (oldItem) {
        oldItem.quantity++;
      } else {
        state.wishlist.push({
          ...oldItem,
          id: newItem.id,
          quantity: 1,
        });
        state.totalQuantity++;
      }
    },
    deleteItemFromWishlist(state, action) {
      const id = action.payload;
      const oldItem = state.wishlist.find((item) => item.id === id);
      if (oldItem) {
        state.wishlist = state.wishlist.filter((item) => item.id !== id);
        state.totalQuantity--;
      }
    },
    showWishlist(state, action) {
      state.showWishlistPreview = true;
    },
    hideWishlist(state, action) {
      state.showWishlistPreview = false;
    },
  },
});
export const wishlistActions = wishlistSlice.actions;
