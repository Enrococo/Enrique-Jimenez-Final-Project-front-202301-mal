import { Login } from '../../../features/login/Login';
import { LoginPageStyled } from './LoginPageStyled';

export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <img
        src="/assets/images/estora-piled.JPG"
        alt="estoras apiladas"
        className="piledstora__img"
      />
      <Login />
    </LoginPageStyled>
  );
};
