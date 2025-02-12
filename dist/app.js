import express from 'express';
import morgan from 'morgan';
import { morganMessageFormat, streamConfig } from './configs/morgan.configs.js';
import corsConfiguration from './configs/cors.configs.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
const app = express();
const swaggerDocumentPath = path.resolve(new URL('../swagger.yaml', import.meta.url).pathname);
const swaggerDocument = YAML.load(swaggerDocumentPath);
/* =====================================
 --- APP CONFIGURATION MIDDLEWARES ---
===================================== */
app.use(express.json());
app.use(cors(corsConfiguration));
app.use(cookieParser());
app.use(morgan(morganMessageFormat, {
    stream: {
        write: (message) => streamConfig(message),
    },
}));
/* ====================================|
|--------------APP ROUTES--------------|
|==================================== */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
export default app;
