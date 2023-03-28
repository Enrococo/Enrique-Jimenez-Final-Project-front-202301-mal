import { FC } from 'react';
import { CardStyled } from './CardStyled';

import React from 'react';
import { Carpet } from '../../model/carpets-model';

interface CardProps {
  modular: Carpet;
}

export const Card: FC<CardProps> = ({ modular }) => {
  return (
    <CardStyled>
      <div className="image-container">
        <img
          src={modular.thumb}
          className={'image'}
          alt={`${modular.name}-pic`}
        />
      </div>
      <div className={'info'}>
        <div className={'properties'}>
          <span className={'property'}>Name:</span>
          <span className={'property__name'}> {modular.name}</span>
        </div>
        <div className={'properties'}>
          <span className={'property'}>Price:</span>
          <span className={'property__name'}> {modular.price}</span>
        </div>
      </div>
    </CardStyled>
  );
};
