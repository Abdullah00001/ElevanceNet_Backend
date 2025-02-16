import express, { Application } from 'express';
import morgan from 'morgan';
import { morganMessageFormat, streamConfig } from './configs/morgan.configs.js';
import corsConfiguration from './configs/cors.configs.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import YAML from 'yamljs';
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import path from 'path';

const app: Application = express();
const swaggerDocumentPath = path.resolve(
  new URL('../swagger.yaml', import.meta.url).pathname
);
const swaggerDocument: JsonObject = YAML.load(
  swaggerDocumentPath
) as JsonObject;

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
/* ====================================|
|------------APP ROUTES V1-------------|
|==================================== */

import globalErrorMiddleware from './middlewares/globalError.middlewares.js';
import { AuthRoute } from './routes/v1/index.js';
import BASE_URL from './configs/baseUrl.configs.js';

app.use(BASE_URL.v1, AuthRoute);

app.use(globalErrorMiddleware);

export default app;
