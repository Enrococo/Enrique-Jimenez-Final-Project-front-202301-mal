import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Carpet } from '../../model/carpets-model';
import { APIStatus } from '../../shared/models/apistatus';
import { Card } from '../card/Card';
import Loading from '../loading/Loading';
import { fetchCarpets, selectCarpets } from './card-list-slice';
import { CardListStyled } from './CardListStyled';

const CardList = () => {
  const modulars = useAppSelector(selectCarpets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCarpets());
  }, [dispatch]);

  const generateCardListComponent = () => {
    switch (modulars.status) {
      case APIStatus.LOADING:
        return <Loading />;
      case APIStatus.ERROR:
        return <p role="paragraph">Error</p>;
      default:
        return (
          <CardListStyled role="cardlist">
            <ul className="carpets__container">
              {modulars.carpets.map((carpet: Carpet) => (
                <li key={carpet.name + 'list'}>
                  <Card modular={carpet} />
                </li>
              ))}
            </ul>
          </CardListStyled>
        );
    }
  };
  return <>{generateCardListComponent()}</>;
};
export default CardList;
