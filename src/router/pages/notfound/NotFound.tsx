import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundStyled } from './NotFoundStyled';

export const NotFound = () => {
  return (
    <NotFoundStyled>
      <h1 className="title">Error 404</h1>
      <p className="text">Parece que los hilos se han enredado</p>
      <img
        className="image"
        src="/assets/images/sad-logo.png"
        alt="page error 404"
      />
      <Link className="text" data-testid="link" to={'/'}>
        Página principal
      </Link>{' '}
    </NotFoundStyled>
  );
};
