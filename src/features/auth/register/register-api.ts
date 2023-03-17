import { RegModel } from '../../../model/auth-model';

export const postUser = async (userRegister: RegModel) => {
  const response = await fetch(
    'https://enrique-jimenez-final-project-back.onrender.com/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userRegister),
    }
  );

  return response;
};
