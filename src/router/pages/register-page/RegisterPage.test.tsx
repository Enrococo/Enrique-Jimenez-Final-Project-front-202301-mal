import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { MemoryRouter } from 'react-router-dom';
import { RegisterPage } from './RegisterPage';

test('When rendering home, the title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );

  const title = screen.getByText('Rellena tus datos');
  expect(title).toBeInTheDocument();
  const estorasBg = screen.getByRole('img');
  expect(estorasBg).toBeInTheDocument();
});
