import cartReducer from "../feature/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
