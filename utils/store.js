import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/appSlice";
import searchSlice from "../utils/searchSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    category: categoryReducer,
  },
});

export default store;
