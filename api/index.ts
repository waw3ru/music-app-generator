import cors from 'cors';
import type {Express} from 'express';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import {routes} from './src/routes';

const app: Express = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  '*',
  cors({
    credentials: true,
    origin: Bun.env.CLIENT_URL,
    methods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'],
  })
);

routes(app);

const port = Bun.env.PORT;
const server = app.listen(port, () => {
  console.log(`Musical App Server listening at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('HTTP server shutdown!');
  });
});
