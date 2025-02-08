import dotenv from 'dotenv';

dotenv.config();

const load = process.env;

/**
 * Retrieves the value of an environment variable by its key.
 *
 * This function checks if the environment variable exists. If the variable is missing, it throws an error with a descriptive message.
 *
 * @param {string} key The key of the environment variable to retrieve.
 * @returns {string} The value of the environment variable corresponding to the provided key.
 *
 * @throws {Error} Throws an error if the environment variable with the specified key is not found.
 */

const getEnvVariable = (key: string): string => {
  const value = load[key];
  if (!value) {
    throw new Error(`Missing Environment Variable: ${key}`);
  }
  return value as string;
};

export default getEnvVariable;
