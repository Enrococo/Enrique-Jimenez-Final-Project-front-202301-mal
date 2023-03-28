import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { errorHandlers } from '../../../mocks/handlers';
import { server } from '../../../mocks/server';
import { Login } from './Login';

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());

describe('Given a Login form component', () => {
  test('When the user logs in with an unregistered account, it should show an error message', async () => {
    server.use(...errorHandlers);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Correo electrónico'),
      'exampleemail.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Contraseña'), 'password');

    const submitButton = screen.getByRole('button');

    userEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByLabelText('error');
      expect(errorMessage).toBeInTheDocument();
    });
  });
  test('When rendering the form, it should be on the document', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test('when the user logs in with an existing account, its loginState state should become success', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = screen.getByRole('button');

    fireEvent.click(submitButton);

    await waitFor(async () => {
      const token = await sessionStorage.getItem('accessToken');
      expect(token).toBe('token');
    });
  });
});
