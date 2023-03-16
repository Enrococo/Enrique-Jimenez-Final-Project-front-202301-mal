import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { LoginModel, LoginState } from '../../model/login-model';
import { APIStatus } from '../../shared/models/apistatus';
import { postLogin } from './loginAPI';

const initialState: LoginState = {
  statusCode: 0,
  status: APIStatus.IDLE,
};

export const postNewLogin = createAsyncThunk(
  'form/postNewLogin',
  async (newLoginForm: HTMLFormElement) => {
    const formData = new FormData(newLoginForm);

    const newLogin = Object.fromEntries(formData.entries());

    const postNewLoginRes = await postLogin(newLogin as LoginModel);

    return postNewLoginRes;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postNewLogin.pending, (state) => {
        state.status = APIStatus.LOADING;
      })

      .addCase(
        postNewLogin.fulfilled,
        (state, action: PayloadAction<Response>) => {
          state.status = APIStatus.SUCCESS;
          state.statusCode = action.payload.status;
        }
      )

      .addCase(postNewLogin.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.statusCode = action.error.code;
      });
  },
});

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
