import { rest } from 'msw';

export const handlers = [
  rest.post(
    'https://enrique-jimenez-final-project-back.onrender.com/auth/login',
    async (req, res, ctx) => {
      return res(ctx.status(201));
    }
  ),
];

export const errorHandlers = [
  rest.post(
    'https://enrique-jimenez-final-project-back.onrender.com/auth/login',
    (req, res, ctx) => {
      return res.networkError('Ciao');
    }
  ),
];

export const errorHandler404 = [
  rest.post(
    'https://enrique-jimenez-final-project-back.onrender.com/auth/login',
    async (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];

export const errorHandler400 = [
  rest.post(
    'https://enrique-jimenez-final-project-back.onrender.com/auth/login',
    async (req, res, ctx) => {
      return res(ctx.status(400));
    }
  ),
];

export const errorHandler500 = [
  rest.post(
    'https://enrique-jimenez-final-project-back.onrender.com/auth/login',
    async (req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
];
