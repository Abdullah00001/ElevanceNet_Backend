import express, { Application } from 'express';
import morgan from 'morgan';
import { morganMessageFormat, streamConfig } from './configs/morgan.configs.js';

const app: Application = express();

app.use(express.json());
app.use(
  morgan(morganMessageFormat, {
    stream: {
      write: (message: string) => streamConfig(message),
    },
  })
);

export default app;
