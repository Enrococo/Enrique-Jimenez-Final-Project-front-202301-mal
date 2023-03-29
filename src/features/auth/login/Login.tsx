import { LoginStyled } from './LoginStyled';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { postNewLogin, selectAuth } from '../auth-slice';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useAppDispatch();
  const selectState = useAppSelector(selectAuth);
  const { loginMsg, loginState } = selectState;

  const showUserFeedback = () => {
    switch (loginState) {
      case 'error':
        return (
          <span className="error info" aria-label="error">
            {loginMsg}
          </span>
        );
      case 'success':
        return (
          <div className="login">
            <span className="login_text">Sesión iniciada correctamente</span>
            <Link to="/">Volver a inicio</Link>
          </div>
        );

      case 'idle':
        return (
          <span className="loading info" aria-label="loading">
            Cargando...
          </span>
        );
    }
  };

  return (
    <LoginStyled
      aria-label="form"
      className="login__form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(postNewLogin(e.currentTarget));
      }}
    >
      <h3>Accede a tu perfil</h3>
      <input
        type="text"
        name="email"
        placeholder="Correo electrónico"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
      />
      <div className="form-submit">
        <button
          disabled={loginState !== '' && loginState !== 'error' ? true : false}
          type="submit"
          value="Create"
          className="register__button"
        >
          Entrar
        </button>
        <span className="span_small">
          ¿Aún no eres usuario? <Link to="/register">Regístrate</Link>
        </span>
      </div>
      {showUserFeedback()}
    </LoginStyled>
  );
};
