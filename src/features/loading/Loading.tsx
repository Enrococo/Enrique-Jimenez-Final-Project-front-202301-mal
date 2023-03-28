import LoadingGif from './estora-modular.gif';
import { LoadingStyled } from './LoadingStyled';
const Loading = () => {
  return (
    <LoadingStyled>
      <img className="loading-gif" src={LoadingGif} alt="loading" />
      <h2>Estamos cargando tu contenido</h2>
    </LoadingStyled>
  );
};

export default Loading;
