import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface BoardState {
  modularPosition: number[][];
}

const initialState: BoardState = {
  modularPosition: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changePosition: (state, action: PayloadAction<number[]>) => {
      state.modularPosition.push(action.payload);
    },
  },
});

export const { changePosition } = boardSlice.actions;
export const selectPosition = (state: RootState) => state.board.modularPosition;

export default boardSlice.reducer;
