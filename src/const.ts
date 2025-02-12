import env from './configs/env.js';

export const documentation: string = 'https://elevancenet.netlify.app/docs/v1';

export const version: string = 'v1.0.0';

export const environment: string = env.NODE_ENV;

export const MONGODB_URI = env.MONGODB_URI;

export const CLOUDINARY_NAME = env.CLOUDINARY_NAME;

export const CLOUDINARY_API_KEY = env.CLOUDINARY_API_KEY;

export const CLOUDINARY_API_SECRET_KEY = env.CLOUDINARY_API_SECRET_KEY;

export const JWT_ACCESS_TOKEN_SECRET_KEY = env.JWT_ACCESS_TOKEN_SECRET_KEY;

export const JWT_REFRESH_TOKEN_SECRET_KEY = env.JWT_REFRESH_TOKEN_SECRET_KEY;

export const ACCESS_TOKEN_EXPIRES_IN = '30min';

export const REFRESH_TOKEN_EXPIRES_IN = '7d';

export const CORS_ORIGIN_DEV = env.CORS_ORIGIN_DEV;

export const CORS_ORIGIN_PROD = env.CORS_ORIGIN_PROD;

export const CORS_WHITE_LIST = [CORS_ORIGIN_DEV, CORS_ORIGIN_PROD];

export const SALT_ROUNDS: number = 10;

export const SMTP_HOST = env.SMTP_HOST;

export const SMTP_PORT = env.SMTP_PORT;

export const SMTP_USER = env.SMTP_USER;

export const SMTP_PASS = env.SMTP_PASS;

export const REDIS_DEVELOPMENT_URI = env.REDIS_DEVELOPMENT_URI;

export const REDIS_PRODUCTION_URI = env.REDIS_PRODUCTION_URI;