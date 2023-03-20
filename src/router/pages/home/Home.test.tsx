import React from 'react';
import { Home } from './Home';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { MemoryRouter } from 'react-router-dom';

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
