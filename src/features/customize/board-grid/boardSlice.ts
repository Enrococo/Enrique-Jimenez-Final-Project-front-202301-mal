import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface BoardState {
  knightPosition: number[][];
}

const initialState: BoardState = {
  knightPosition: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changePosition: (state, action: PayloadAction<number[]>) => {
      state.knightPosition.push(action.payload);
    },
  },
});

export const { changePosition } = boardSlice.actions;
export const selectPosition = (state: RootState) => state.board.knightPosition;

export default boardSlice.reducer;
