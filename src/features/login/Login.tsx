import { LoginStyled } from './LoginStyled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postNewLogin, selectLogin } from './loginSlice';

export const Login = () => {
  const token = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();
  return (
    <>
      <LoginStyled
        aria-label="form"
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postNewLogin(e.currentTarget));
        }}
      >
        <h3>Accede a tu perfil</h3>
        <input type="text" name="email" placeholder="Correo electrónico" />

        <input type="password" name="password" placeholder="Contraseña" />
        <button type="submit" value="Create" className="register__button">
          Entrar
        </button>
      </LoginStyled>
    </>
  );
};
