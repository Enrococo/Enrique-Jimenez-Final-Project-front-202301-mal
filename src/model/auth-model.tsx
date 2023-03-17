export type LoginModel = {
  email: string;
  password: string;
};

export type AuthStatus = 'idle' | 'error' | 'success';

export interface AuthFormState {
  registerState: AuthStatus;
  loginState: AuthStatus;
  status: 'idle' | 'loading' | 'failed';
  registerMsg: string;
  loginMsg: string;
}

export type RegModel = {
  email: string;
  password: string;
  firstName: string;
  surName: string;
};

export interface AuthResponse {
  msg: string;
  accessToken: string;
}
