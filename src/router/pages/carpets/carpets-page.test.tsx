import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { CarpetsPage } from './CarpetsPage';

test('When rendering home, the title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <CarpetsPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );
  const heading = screen.getByText('Todas tus Modular');
  expect(heading).toBeInTheDocument();
});
