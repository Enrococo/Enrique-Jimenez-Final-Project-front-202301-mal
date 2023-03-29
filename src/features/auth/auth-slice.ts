import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  LoginModel,
  RegModel,
  AuthFormState,
  AuthResponse,
} from '../../model/auth-model';
import { APIStatus } from '../../shared/models/apistatus';
import { postUser } from './register/register-api';
import { postLogin } from './login/login-api';

const initialState: AuthFormState = {
  registerState: '',
  loginState: '',
  status: 'idle',
  registerMsg: '',
  loginMsg: '',
};

export const postNewLogin = createAsyncThunk(
  'form/postNewLogin',
  async (newLoginForm: HTMLFormElement) => {
    const formData = new FormData(newLoginForm);

    const newLogin = Object.fromEntries(formData.entries());

    const postNewLoginRes = await postLogin(newLogin as LoginModel);
    const postNewLoginData: AuthResponse = await postNewLoginRes.json();

    if (!postNewLoginRes.ok) {
      throw new Error(postNewLoginData.msg);
    }

    return postNewLoginData;
  }
);

export const postNewUser = createAsyncThunk(
  'regform/postNewUser',
  async (newRegForm: HTMLFormElement) => {
    const formData = new FormData(newRegForm);

    const newUser = Object.fromEntries(formData.entries());

    const postNewUserRes = await postUser(newUser as RegModel);

    const postNewUserData: AuthResponse = await postNewUserRes.json();

    if (!postNewUserRes.ok) {
      throw new Error(postNewUserData.msg);
    }

    return postNewUserData;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postNewLogin.pending, (state) => {
        state.status = APIStatus.LOADING;
        state.loginState = 'idle';
      })

      .addCase(
        postNewLogin.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.status = APIStatus.IDLE;
          state.loginState = 'success';
          sessionStorage.setItem('accessToken', action.payload.accessToken);
        }
      )

      .addCase(postNewLogin.rejected, (state, action: any) => {
        state.status = 'failed';
        state.loginState = 'error';
        state.loginMsg = action.error.message;
      });

    builder
      .addCase(postNewUser.pending, (state) => {
        state.status = APIStatus.LOADING;
        state.registerState = 'idle';
      })
      .addCase(
        postNewUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.status = APIStatus.IDLE;
          state.registerState = 'success';
        }
      )
      .addCase(postNewUser.rejected, (state, action: any) => {
        state.status = 'failed';
        state.registerState = 'error';
        state.registerMsg = action.error.message;
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
