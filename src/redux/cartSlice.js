// src/features/cart/cartSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth } from "../config/firebase";

// Async thunk to fetch the cart from Firestore
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const user = auth.currentUser;
  if (user) {
    const cartDoc = await getDoc(doc(db, "carts", user.uid));
    if (cartDoc.exists()) {
      return cartDoc.data().items; // Fetches the array of items
    }
  }
  return [];
});

// Async thunk to update the cart in Firestore using setDoc
export const updateCartInFirestore = createAsyncThunk(
  "cart/updateCart",
  async (items) => {
    const user = auth.currentUser;
    if (user) {
      const cartRef = doc(db, "carts", user.uid);
      await setDoc(cartRef, { items });
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.itemId === item.itemId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.itemId !== itemId);
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((i) => i.itemId === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCartInFirestore.fulfilled, (state) => {
        state.status = "succeeded";
      });
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;
