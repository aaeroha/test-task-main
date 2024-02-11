import { configureStore } from '@reduxjs/toolkit';
import AuctionSlice from './auction.slice';

const store = configureStore({
  reducer: {
    AuctionSlice,
  },
});

export default store;
