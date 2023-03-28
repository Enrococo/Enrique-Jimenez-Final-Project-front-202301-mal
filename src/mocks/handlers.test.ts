import { setupServer } from 'msw/lib/node';
import { errorHandlers, handlers } from './handlers';

// Setup a mock server
const server = setupServer(...handlers);

// Before all tests, start the server
beforeAll(() => server.listen());

// After each test, reset the server and clear all request handlers
afterEach(() => {
  server.resetHandlers();
});

// After all tests, stop the server
afterAll(() => server.close());

describe('GET /api/v1/carpets/', () => {
  test('returns status 429 and an array containing a character', async () => {
    server.use(...errorHandlers);

    const response = await fetch(
      'https://enrique-jimenez-final-project-back.onrender.com/api/v1/carpets/create'
    );

    expect(response.status).toEqual(429);
  });
});
