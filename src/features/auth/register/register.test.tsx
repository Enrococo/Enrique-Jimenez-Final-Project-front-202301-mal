import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { errorHandlers } from '../../../mocks/handlers';
import { server } from '../../../mocks/server';
import { Register } from './Register';

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());

describe('Given a Login form component', () => {
  test('When rendering the form, it should be on the document', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test('when the user tries to register with an invalid email, then it should show a related error message', async () => {
    server.use(...errorHandlers);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Correo electrónico'),
      'exampleemail.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Contraseña'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      const errorMessage = screen.getByLabelText('error');

      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('when the user tries to register with a valid email and passwords, it should show a related message', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Correo electrónico'),
      'example2@email.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Contraseña'), 'password');
    await userEvent.type(screen.getByPlaceholderText('Nombre'), 'Example');
    await userEvent.type(
      screen.getByPlaceholderText('Apellidos'),
      'Example Example'
    );
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      const successMessage = screen.getByText(
        'Te has registrado satisfactoriamente'
      );
      expect(successMessage).toBeInTheDocument();
    });
  });
});
