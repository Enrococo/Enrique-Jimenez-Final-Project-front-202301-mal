import React from 'react';
import { Home } from './Home';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
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
    'Estamos trabajando duro para que pronto puedas crear tu propia alfombra Modular'
  );
  expect(title).toBeInTheDocument();
});
