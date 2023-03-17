import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { regHandlers } from './regHandlers';

export const server = setupServer(...handlers);
