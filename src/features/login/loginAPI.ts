import { LoginModel } from '../../model/login-model';

export const postLogin = async (login: LoginModel) => {
  const response = await fetch(
    'https://enrique-jimenez-final-project-back.onrender.com/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(login),
    }
  );

  const userToken = await response.json();

  return userToken;
};
