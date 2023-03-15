import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { MemoryRouter } from 'react-router-dom';
import { LoginPage } from './LoginPage';

test('When rendering home, the title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );

  const title = screen.getByText('Accede a tu perfil');
  expect(title).toBeInTheDocument();
  const estorasBg = screen.getByRole('img');
  expect(estorasBg).toBeInTheDocument();
});
