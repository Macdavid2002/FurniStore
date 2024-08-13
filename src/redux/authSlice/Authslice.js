import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: false,
  email: null,
  username: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setActiveUser } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.userLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUsername = (state) => state.auth.username;
export const serlectUserId = (state) => state.auth.userId;
export default authSlice.reducer;
