import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../reducers/counterSlice";
import dataReducer from "../reducers/toggleSlice";
import InputSlice from "../reducers/InputSlice";
export default configureStore({
  reducer: {
    currency: currencyReducer,
    data: dataReducer,
    InputValue: InputSlice,
  },
});
