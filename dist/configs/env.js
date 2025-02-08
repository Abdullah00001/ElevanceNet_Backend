import getEnvVariable from '../utils/getEnvVariable.utils.js';
/**
 * Retrieves and stores environment configuration variables for the application.
 *
 * This module loads the required environment variables, verifies their presence,
 * and initializes them for use throughout the application. The configuration values
 * include sensitive information like database URIs, Cloudinary API credentials,
 * Redis connection details, and SMTP configurations.
 *
 * The `env` object is populated by fetching values from environment variables using
 * `getEnvVariable`. If any required environment variable is missing, an error will be thrown.
 *
 * @constant {IEnvConfig} env - The environment configuration object containing critical
 *   system settings for the application to run properly across different environments (development, production).
 *
 * @throws {Error} If any required environment variable is missing, an error will be thrown with
 *   a descriptive message indicating which variable is missing.
 */
const env = {
    NODE_ENV: getEnvVariable('NODE_ENV'),
    PORT: getEnvVariable('PORT'),
    MONGODB_URI: getEnvVariable('MONGODB_CONNECTION_URI'),
    CLOUDINARY_NAME: getEnvVariable('CLOUDINARY_NAME'),
    CLOUDINARY_API_KEY: getEnvVariable('CLOUDINARY_API_KEY'),
    CLOUDINARY_API_SECRET_KEY: getEnvVariable('CLOUDINARY_API_SECRET_KEY'),
    REDIS_DEVELOPMENT_URI: getEnvVariable('REDIS_DEVELOPMENT_URI'),
    REDIS_PRODUCTION_URI: getEnvVariable('REDIS_PRODUCTION_URI'),
    REDIS_PRODUCTION_TOKEN: getEnvVariable('REDIS_PRODUCTION_TOKEN'),
    JWT_ACCESS_TOKEN_SECRET_KEY: getEnvVariable('JWT_ACCESS_TOKEN_SECRET_KEY'),
    JWT_REFRESH_TOKEN_SECRET_KEY: getEnvVariable('JWT_REFRESH_TOKEN_SECRET_KEY'),
    JWT_SALT_ROUND: getEnvVariable('JWT_SALT_ROUND'),
    SMTP_HOST: getEnvVariable('SMTP_HOST'),
    SMTP_PORT: getEnvVariable('SMTP_PORT'),
    SMTP_USER: getEnvVariable('SMTP_USER'),
    SMTP_PASS: getEnvVariable('SMTP_PASS'),
    CORS_ORIGIN_DEV: getEnvVariable('CORS_ORIGIN_DEV'),
    CORS_ORIGIN_PROD: getEnvVariable('CORS_ORIGIN_PROD'),
};
export default env;
