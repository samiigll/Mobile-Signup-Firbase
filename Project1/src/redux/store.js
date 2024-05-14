import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import { thunk } from "redux-thunk";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});
