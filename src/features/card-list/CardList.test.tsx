import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { carpetMock } from '../../mocks/carpet-mock';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import { Card } from '../card/Card';
import CardList from './CardList';

describe('Given a card list component', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => server.close());
  test('When the page is loaded, it should show a list of characters', async () => {
    window.Array.prototype.map(() => (
      <li key={carpetMock.name + 'list'}>
        <Card modular={carpetMock} />
      </li>
    ));
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    await waitFor(async () => {
      const carpets = await screen.findAllByRole('listitem');
      expect(carpets.length).toBe(2);
    });
  });
});

describe('When the component loads and API responds with error', () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());
  test('Then it should show loading and later render an error message', async () => {
    server.use(...errorHandlers);
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );
    const loading = await screen.findByRole('img');
    expect(loading).toHaveAttribute('alt', 'loading');
    await waitFor(() => {
      const errorMessage = screen.getByRole('paragraph');
      expect(errorMessage).toHaveTextContent('Error');
    });
  });
});
