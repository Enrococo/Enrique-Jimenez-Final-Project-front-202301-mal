import React from 'react';
import { Home } from './Home';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { MemoryRouter } from 'react-router-dom';

describe('Given a home page', () => {
  test('When rendering home, the title should be displayed', () => {
    render(
      <MemoryRouter>
        <React.StrictMode>
          <Provider store={store}>
            <Home />
          </Provider>
        </React.StrictMode>
      </MemoryRouter>
    );

    const title = screen.getByText(
      'SACA TU LADO MÁS CREATIVO CON ESTORA MODULAR'
    );
    const subTitle = screen.getByText('Una Alfombra Diferente Cada Día');
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  test('When clicking on the create button, it shoul redirect you to login in case there is no token', async () => {
    sessionStorage.setItem('MockToken', '1111.1111.1111');
    render(
      <MemoryRouter>
        <React.StrictMode>
          <Provider store={store}>
            <Home />
          </Provider>
        </React.StrictMode>
      </MemoryRouter>
    );
    const title = screen.getByText(
      'SACA TU LADO MÁS CREATIVO CON ESTORA MODULAR'
    );
    const createLink = screen.getByRole('link');

    await fireEvent.click(createLink);
    expect(title).toBeInTheDocument();
  });
});
