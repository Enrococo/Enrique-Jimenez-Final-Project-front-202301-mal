import { Register } from '../../../features/auth/register/Register';
import { LoginPageStyled } from '../login-page/LoginPageStyled';

export const RegisterPage = () => {
  return (
    <LoginPageStyled>
      <img
        src="/assets/images/estora-piled.webp"
        alt="estoras apiladas"
        className="piledstora__img"
      />
      <Register />
    </LoginPageStyled>
  );
};
