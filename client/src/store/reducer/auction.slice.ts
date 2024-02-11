// export default auctions;
import { createSlice } from '@reduxjs/toolkit';
import { getLots, getLotById } from './thunk/lots';
import { State } from '../../types/index';

const initialState: State = {
  auctions: { data: [], isLoading: false, isInit: true },
  auction: { data: null, isLoading: false, isInit: true },
};

const auctionSlice = createSlice({
  name: 'auctionSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * getLots
      .addCase(getLots.rejected, () => {})
      .addCase(getLots.pending, (state) => {
        state.auctions.isLoading = state.auctions.isInit || false;
      })
      .addCase(getLots.fulfilled, (state, action) => {
        state.auctions.data = action.payload.auctions;
        state.auctions.isLoading = state.auctions.isLoading && false;
        state.auctions.isInit = false;
      })
      // * getLotById
      .addCase(getLotById.rejected, () => {})
      .addCase(getLotById.pending, () => {})
      .addCase(getLotById.fulfilled, (state, action) => {
        state.auction.data = action.payload.auction;
      });
  },
});

export default auctionSlice.reducer;
