import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import {
  errorHandler400,
  errorHandler404,
  errorHandler500,
  errorHandlers,
} from '../../mocks/handlers';
import { server } from '../../mocks/server';
import { Login } from './Login';

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());

describe('Given a Login form component', () => {
  test('When rendering the form, it should be on the document', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const button = screen.getByRole('button');
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test('When submitting a valid form, it should return a state of loading', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button');
    await userEvent.type(emailInput, 'enroco@gmail.com');
    await userEvent.type(passwordInput, 'enrococo_33');

    userEvent.click(button);
    await waitFor(() => {
      const feedback = screen.getByText('Sesión iniciada correctamente');
      expect(feedback).toBeInTheDocument();
    });
  });

  test('When connection fails, it should return an error feedback', async () => {
    server.use(...errorHandlers);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button');
    await userEvent.type(emailInput, 'enroco@gmail.com');
    await userEvent.type(passwordInput, 'enrococo_33');

    userEvent.click(button);
    await waitFor(() => {
      const feedback = screen.getByText('Algo ha fallado, vuelve a intentarlo');
      expect(feedback).toBeInTheDocument();
    });
  });

  test('When submitting an form with invalid email or password, it should return an error feedback', async () => {
    server.use(...errorHandler400);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button');
    await userEvent.type(emailInput, 'enroco@gmail.com');
    await userEvent.type(passwordInput, 'enrococo_33');

    userEvent.click(button);
    await waitFor(() => {
      const feedback = screen.getByText(
        'Por favor, introduce un email y contraseña válidos'
      );
      expect(feedback).toBeInTheDocument();
    });
  });

  test('When submitting an form with a non existent email or incorrect password, it should return an error feedback', async () => {
    server.use(...errorHandler404);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button');
    await userEvent.type(emailInput, 'enroco@gmail.com');
    await userEvent.type(passwordInput, 'enrococo_33');

    userEvent.click(button);
    await waitFor(() => {
      const feedback = screen.getByText('Usuario o contraseña incorrecta');
      expect(feedback).toBeInTheDocument();
    });
  });

  test('When submitting an form and tehere is a server error, it should return an error feedback', async () => {
    server.use(...errorHandler500);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const button = screen.getByRole('button');
    await userEvent.type(emailInput, 'enroco@gmail.com');
    await userEvent.type(passwordInput, 'enrococo_33');

    userEvent.click(button);
    await waitFor(() => {
      const feedback = screen.getByText('Oops! Algo fue mal');
      expect(feedback).toBeInTheDocument();
    });
  });
});
