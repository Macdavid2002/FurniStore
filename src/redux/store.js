import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice/Authslice";
const rootReducer = combineReducers({ auth: authReducer });

export const store = configureStore({
  reducer: rootReducer,
});
