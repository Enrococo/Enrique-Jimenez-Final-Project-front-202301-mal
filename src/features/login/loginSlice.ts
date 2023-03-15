import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { LoginModel, LoginState } from '../../model/login-model';
import { APIStatus } from '../../shared/models/apistatus';
import { postLogin } from './loginAPI';

const initialState: LoginState = {
  token: '',
  status: APIStatus.IDLE,
};

export const postNewLogin = createAsyncThunk(
  'form/postNewLogin',
  async (newLoginForm: HTMLFormElement) => {
    const formData = new FormData(newLoginForm);

    const newLogin = Object.fromEntries(formData.entries());

    const postNewLoginRes = await postLogin(newLogin as unknown as LoginModel);
    return postNewLoginRes;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postNewLogin.pending, (state: { status: string }) => {
        state.status = APIStatus.LOADING;
      })

      .addCase(
        postNewLogin.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = APIStatus.IDLE;
          state.token = action.payload;
        }
      )

      .addCase(postNewLogin.rejected, (state) => {
        state.status = APIStatus.ERROR;
      });
  },
});

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
