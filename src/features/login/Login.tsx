import { LoginStyled } from './LoginStyled';

export const Login = () => {
  return (
    <>
      <LoginStyled
        aria-label="form"
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          const newLogin = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
          };
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
