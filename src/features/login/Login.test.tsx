import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { Login } from './Login';

describe('Login', () => {
  test('When rendering home, the title should be displayed', () => {
    render(
      <MemoryRouter>
        <React.StrictMode>
          <Provider store={store}>
            <Login />
          </Provider>
        </React.StrictMode>
      </MemoryRouter>
    );
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
