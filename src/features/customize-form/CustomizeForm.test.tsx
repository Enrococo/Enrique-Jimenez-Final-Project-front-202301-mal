import { render, screen, waitFor } from '@testing-library/react';
import html2canvas from 'html2canvas';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import userEvent from '@testing-library/user-event';
import { CustomizeForm } from './CustomizeForm';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

jest.mock('html2canvas');
const html2CanvasMock = jest.mocked(html2canvas);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  jest.resetAllMocks();
  jest.clearAllMocks();
});

afterAll(() => server.close());

describe('Given a Customize form component', () => {
  test('When rendering the form, it should be on the document', () => {
    render(
      <Provider store={store}>
        <CustomizeForm />
      </Provider>
    );
    const button = screen.getByRole('button');
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test('when the user tries to create a customized carpet, and this is created, it should show a possitive feedback', async () => {
    window.HTMLCanvasElement.prototype.toDataURL = jest.fn(
      () => 'data:image/png;base64,aGVsbG8gd29ybGQ='
    );
    globalThis.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue({
        msg: 'Tu alfombra se ha tejido correctamente',
      }),
    });
    html2CanvasMock.mockImplementation(async () =>
      document.createElement('canvas')
    );
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomizeForm />
        </MemoryRouter>
      </Provider>
    );

    const createButton = screen.getByRole('button');

    await userEvent.click(createButton);

    await waitFor(async () => {
      const successMessage = await screen.findByLabelText('success_text');
      expect(successMessage).toHaveTextContent(
        'Tu diseño se ha creado correctamente'
      );
    });
  });

  test('when the user tries to create a customized carpet, and there is a mistake, it should show a negative feedback', async () => {
    window.fetch.prototype.blob = jest.fn(() => new Blob());
    window.HTMLCanvasElement.prototype.toDataURL = jest.fn(
      () => 'data:image/png;base64,aGVsbG8gd29ybGQ='
    );
    globalThis.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValue({
        msg: 'Ha habido un error',
      }),
    });
    html2CanvasMock.mockImplementation(async () =>
      document.createElement('canvas')
    );
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomizeForm />
        </MemoryRouter>
      </Provider>
    );

    const createButton = screen.getByRole('button');

    await userEvent.click(createButton);

    await waitFor(async () => {
      const errorMessage = await screen.findByLabelText('error');
      expect(errorMessage).toHaveTextContent('Ha habido un error');
    });
  });

  // test('When the user logs in with an unregistered account, it should show an error message', async () => {
  //   server.use(...errorHandlers);

  //   render(
  //     <Provider store={store}>
  //       <MemoryRouter>
  //         <Login />
  //       </MemoryRouter>
  //     </Provider>
  //   );

  //   const submitButton = screen.getByRole('button');

  //   fireEvent.click(submitButton);

  //   const loading = screen.getByLabelText('loading');
  //   expect(loading).toBeInTheDocument();

  //   await waitFor(async () => {
  //     const errorMessage = await screen.findByLabelText('error');
  //     expect(errorMessage).toHaveTextContent(
  //       'There is no registered user with this email and password'
  //     );
  //   });
  // });
});
