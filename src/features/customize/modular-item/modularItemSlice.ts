import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface ModularItemState {
  imgURL: string;
  imagesUrl: string[];
}

const initialState: ModularItemState = {
  imgURL: '/assets/images/face.svg',
  imagesUrl: [],
};

export const ModularItemSlice = createSlice({
  name: 'modularItem',
  initialState,
  reducers: {
    addItemUrl: (state, action: PayloadAction<string>) => {
      state.imagesUrl.push(action.payload);
    },

    changeItem: (state, action: PayloadAction<string>) => {
      state.imgURL = action.payload;
    },
  },
});

export const { changeItem, addItemUrl } = ModularItemSlice.actions;
export const selectModularItem = (state: RootState) => state.modularItem.imgURL;
export const selectModularItemsUrl = (state: RootState) =>
  state.modularItem.imagesUrl;

export default ModularItemSlice.reducer;
