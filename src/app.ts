import express, { Application } from 'express';
import morgan from 'morgan';
import { morganMessageFormat, streamConfig } from './configs/morgan.configs.js';
import corsConfiguration from './configs/cors.configs.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app: Application = express();

/* =====================================
 --- APP CONFIGURATION MIDDLEWARES ---
===================================== */

app.use(express.json());
app.use(cors(corsConfiguration));
app.use(cookieParser());
app.use(
  morgan(morganMessageFormat, {
    stream: {
      write: (message: string) => streamConfig(message),
    },
  })
);

export default app;
