export interface LoginModel {
  email: string;
  password: string;
}

export interface LoginState {
  token: string;
  status: 'idle' | 'loading' | 'failed';
}
