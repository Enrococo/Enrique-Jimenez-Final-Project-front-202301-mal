export type LoginModel = {
  email: string;
  password: string;
};

export interface LoginState {
  statusCode: number;
  status: 'idle' | 'loading' | 'failed' | 'success';
}
