import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/index';

type SearhInput = { search: string };

export const getLots = createAsyncThunk(
  'getLots',
  async (params: SearhInput) => {
    try {
      const result = await api.allLots(params);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getLotById = createAsyncThunk('getLotById', async (id: string) => {
  try {
    const result = await api.lotsById(id);
    return result;
  } catch (error) {
    console.log(error);
  }
});
