import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { AboutPage } from './AboutPage';

test('When rendering home, the title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AboutPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );

  const title = screen.getByText('Detrás de Estora Studio');
  const subTitle = screen.getByText('Nuestra Historia');
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
});
