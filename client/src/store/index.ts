import {
  type TypedUseSelectorHook,
  useSelector as useUntypedSelector,
  useDispatch as useUntypedDispatch,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import auctionSlice from "./reducer/auction.slice";

const store = configureStore({
  reducer: {
    auctionSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector;
const useDispatch: () => AppDispatch = useUntypedDispatch;

export { store, useSelector, useDispatch };
