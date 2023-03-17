import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { postNewUser, selectAuth } from '../auth-slice';
import { RegisterStyled } from './register-styled';

export const Register = () => {
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
            <span className="login_text">
              Te has registrado satisfactoriamente
            </span>
            <Link to="/login">Inicia sesión</Link>
          </div>
        );
      case 'loading':
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
          <input type="text" name="firstName" placeholder="Nombre" />
          <input type="text" name="surName" placeholder="Apellidos" />
        </div>
        <input type="text" name="email" placeholder="Correo electrónico" />

        <input type="password" name="password" placeholder="Contraseña" />

        <button type="submit" value="Create" className="register__button">
          Regístrate
        </button>
        {showUserFeedback()}
      </RegisterStyled>
    </>
  );
};
