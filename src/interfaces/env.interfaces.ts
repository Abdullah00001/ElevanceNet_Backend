/**
 * Interface representing the environment configuration variables for the application.
 *
 * This configuration contains critical environment-specific variables, such as database URIs,
 * API keys, JWT secrets, SMTP settings, and CORS origins, which are necessary for the operation
 * of the system in different environments (development, production, etc.).
 *
 * @interface
 */
export default interface IEnvConfig {
  NODE_ENV: string;
  PORT: string;
  MONGODB_URI: string;
  CLOUDINARY_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET_KEY: string;
  REDIS_DEVELOPMENT_URI: string;
  REDIS_PRODUCTION_URI: string;
  JWT_ACCESS_TOKEN_SECRET_KEY: string;
  JWT_REFRESH_TOKEN_SECRET_KEY: string;
  JWT_SALT_ROUND: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
  CORS_ORIGIN_DEV: string;
  CORS_ORIGIN_PROD: string;
}
