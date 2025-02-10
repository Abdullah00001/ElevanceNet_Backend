import { CorsOptions } from 'cors';
import { CORS_WHITE_LIST } from '../const.js';
import logger from './logger.configs.js';

const corsConfiguration: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || CORS_WHITE_LIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      logger.warn(`Blocked CORS request from origin: ${origin}`);
      callback(new Error('CORS not allowed'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

export default corsConfiguration;
