import express from 'express';
import morgan from 'morgan';
import { morganMessageFormat, streamConfig } from './configs/morgan.configs.js';
const app = express();
app.use(express.json());
app.use(morgan(morganMessageFormat, {
    stream: {
        write: (message) => streamConfig(message),
    },
}));
export default app;
