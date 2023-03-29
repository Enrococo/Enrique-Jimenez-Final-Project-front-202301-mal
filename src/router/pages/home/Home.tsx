import { Link } from 'react-router-dom';
import { HomeStyled } from './HomeStyled';

export const Home = () => {
  return (
    <HomeStyled>
      <h2 className="Wip">SACA TU LADO MÁS CREATIVO CON ESTORA MODULAR</h2>
      <Link to={sessionStorage.length === 1 ? '/customize' : '/login'}>
        <button type="submit" value="Create" className="create__button">
          Crea tu Estora Modular
        </button>
      </Link>
      <h1 className="Hook">Una Alfombra Diferente Cada Día</h1>
    </HomeStyled>
  );
};
