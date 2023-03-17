import { rest } from 'msw';

export const handlers = [
  rest.post(
    `https://enrique-jimenez-final-project-back.onrender.com/auth/login`,
    (_req, res, ctx) => {
      return res.once(ctx.status(201), ctx.json({ accessToken: 'token' }));
    }
  ),
  rest.post(
    `https://enrique-jimenez-final-project-back.onrender.com/auth/register`,
    (_req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({ msg: 'User registered successfully!' })
      );
    }
  ),
];

export const errorHandlers = [
  rest.post(
    `https://enrique-jimenez-final-project-back.onrender.com/auth/login`,
    (_req, res, ctx) => {
      return res.once(
        ctx.status(404),
        ctx.json({
          msg: 'There is no registered user with this email and password',
        })
      );
    }
  ),
  rest.post(
    `https://enrique-jimenez-final-project-back.onrender.com/auth/register`,
    async (req, res, ctx) => {
      return res.once(
        ctx.status(400),
        ctx.json({ msg: '"email" must be valid email' })
      );
    }
  ),
];
