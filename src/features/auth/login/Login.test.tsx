import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      const token = await sessionStorage.getItem('Bearer');
      expect(token).toBe('token');
    });
  });

  test('When the user logs in with an unregistered account, it should show an error message', async () => {
    server.use(...errorHandlers);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = screen.getByRole('button');

    fireEvent.click(submitButton);

    const loading = screen.getByLabelText('loading');
    expect(loading).toBeInTheDocument();

    await waitFor(async () => {
      const errorMessage = await screen.findByLabelText('error');
      expect(errorMessage).toHaveTextContent(
        'There is no registered user with this email and password'
      );
    });
  });
});
