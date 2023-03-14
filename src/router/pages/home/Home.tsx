import { HomeStyled } from './HomeStyled';

export const Home = () => {
  return (
    <HomeStyled>
      <img
        src="/assets/images/estora-modular.gif"
        alt="Gif estora modular"
        className="estora-gif"
      />
      <h2 className="Wip">
        Estamos trabajando duro para que pronto puedas crear tu propia alfombra
        Modular
      </h2>
    </HomeStyled>
  );
};
