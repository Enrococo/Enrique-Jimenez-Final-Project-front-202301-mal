import CardList from '../../../features/card-list/CardList';
import { CarpetsStyled } from './CarpetsStyled';

export const CarpetsPage = () => {
  return (
    <CarpetsStyled>
      <h1>Todas tus Modular</h1>
      <CardList />
    </CarpetsStyled>
  );
};
