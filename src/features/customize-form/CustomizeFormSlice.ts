import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/models/apistatus';
import { CustomizeResponse, ModularModel } from './customize-model';
import { postModular } from './customizeAPI';

const initialState = {
  formState: '',
  status: 'idle',
  formMsg: '',
};

export const postNewModular = createAsyncThunk(
  'form/postNewModular',
  async (newModular: FormData) => {
    const postNewModularRes = await postModular(newModular);
    const postNewModularData: CustomizeResponse =
      await postNewModularRes.json();

    if (!postNewModularRes.ok) {
      throw new Error(postNewModularData.msg);
    }
    return postNewModularData;
  }
);

export const customizeSlice = createSlice({
  name: 'customize',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postNewModular.pending, (state) => {
        state.status = APIStatus.LOADING;
        state.formState = 'idle';
      })
      .addCase(
        postNewModular.fulfilled,
        (state, action: PayloadAction<CustomizeResponse>) => {
          state.status = APIStatus.IDLE;
          state.formState = 'success';
        }
      )
      .addCase(postNewModular.rejected, (state, action: any) => {
        state.status = APIStatus.ERROR;
        state.formState = 'error';
        state.formMsg = action.error.message;
      });
  },
});

export const selectCustomize = (state: RootState) => state.customize;
export default customizeSlice.reducer;
