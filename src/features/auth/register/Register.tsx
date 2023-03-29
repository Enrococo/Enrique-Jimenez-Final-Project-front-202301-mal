import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { postNewUser, selectAuth } from '../auth-slice';
import { RegisterStyled } from './register-styled';

export const Register = () => {
  const dispatch = useAppDispatch();
  const selectState = useAppSelector(selectAuth);
  const { loginMsg, registerState } = selectState;

  const showUserFeedback = () => {
    switch (registerState) {
      case 'error':
        return (
          <span className="error info" aria-label="error">
            {loginMsg}
          </span>
        );

      case 'success':
        return (
          <div className="login">
            <span className="login_text">
              Te has registrado satisfactoriamente
            </span>
            <Link to="/login">Inicia sesión</Link>
          </div>
        );
      case 'idle':
        return <span className="loading info"> Cargando...</span>;
    }
  };
  return (
    <>
      <RegisterStyled
        aria-label="register"
        className="register__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postNewUser(e.currentTarget));
        }}
      >
        <h3>Rellena tus datos</h3>
        <div className="name_container">
          <input type="text" name="firstName" placeholder="Nombre" required />
          <input type="text" name="surName" placeholder="Apellidos" />
        </div>
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
            disabled={
              registerState !== '' && registerState !== 'error' ? true : false
            }
            type="submit"
            value="Create"
            className="register__button"
          >
            Regístrate
          </button>
          <span className="span_small">
            ¿Ya eres usuario? <Link to="/login">Accede</Link>
          </span>
        </div>
        {showUserFeedback()}
      </RegisterStyled>
    </>
  );
};
