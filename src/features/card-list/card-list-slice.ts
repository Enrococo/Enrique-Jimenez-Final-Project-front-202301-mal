import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Carpet, CarpetState } from '../../model/carpets-model';
import { APIStatus } from '../../shared/models/apistatus';
import { getCarpetsList } from './card-list-api';

const STATE_NAME = 'cardList';

const initialState: CarpetState = {
  carpets: [],
  status: APIStatus.IDLE,
};

export const fetchCarpets = createAsyncThunk(
  `${STATE_NAME}/fetchCarpets`,
  async () => {
    const response: Carpet[] = await getCarpetsList();
    return response;
  }
);

export const cardListSlice = createSlice({
  name: STATE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarpets.pending, (state) => {
        state.status = APIStatus.LOADING;
      })
      .addCase(fetchCarpets.fulfilled, (state, action) => {
        state.status = APIStatus.IDLE;
        state.carpets = action.payload;
      })
      .addCase(fetchCarpets.rejected, (state) => {
        state.status = APIStatus.ERROR;
      });
  },
});

export const selectCarpets = (state: RootState) => state.cardList;

export default cardListSlice.reducer;
