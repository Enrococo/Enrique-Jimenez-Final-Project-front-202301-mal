import { LoginStyled } from './LoginStyled';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { postNewLogin, selectAuth } from '../auth-slice';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useAppDispatch();
  const selectState = useAppSelector(selectAuth);
  const { loginMsg, status } = selectState;

  const showUserFeedback = () => {
    switch (status) {
      case 'failed':
        return (
          <span className="error info" aria-label="error">
            {loginMsg}
          </span>
        );
      case 'idle':
        return (
          <div className="login">
            <span className="login_text">Sesión iniciada correctamente</span>
            <Link to="/">Volver a inicio</Link>
            <Link to="/user-profile">Ver tu perfil</Link>
          </div>
        );

      case 'loading':
        return (
          <span className="loading info" aria-label="loading">
            {' '}
            Cargando...
          </span>
        );
    }
  };

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
        {showUserFeedback()}
      </LoginStyled>
    </>
  );
};
