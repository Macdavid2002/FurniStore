import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };
export const itemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem === 1) {
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
      }
    },
  },
});
export const { addToCart, removeFromCart } = itemSlice.actions;
export const cartStore = configureStore({
  reducer: {
    cart: itemSlice.reducer,
  },
});
