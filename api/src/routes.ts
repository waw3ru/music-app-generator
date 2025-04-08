import type {Express, Request, Response} from 'express';

export const routes = (app: Express) => {
  // healthcheck route
  app.all('/healthcheck', (_req: Request, res: Response) => {
    res.json({
      health: 'OK',
      timestamp: new Date(),
    });
  });
};
