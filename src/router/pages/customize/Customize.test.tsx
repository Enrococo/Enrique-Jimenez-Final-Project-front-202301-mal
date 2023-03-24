import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { CustomizePage } from './Customize';

test('When rendering home, the title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <CustomizePage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>
  );

  const title = screen.getByText('Crea tu propia Estora Modular');
  expect(title).toBeInTheDocument();
});
