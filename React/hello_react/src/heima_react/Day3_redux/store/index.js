import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./mdules/counterStore";

const store = configureStore({
  reducer: {
    counterStore,
  },
});

export default store;
