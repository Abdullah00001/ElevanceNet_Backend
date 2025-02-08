import mongoose from 'mongoose';
import { MONGODB_URI } from '../const.js';

/**
 * Connects to the MongoDB database using the MONGODB_URI.
 * Logs success or failure messages to the console based on the connection status.
 *
 * @async
 * @function connectDb
 * @returns {Promise<void>} Resolves when the connection is established successfully or fails if an error occurs.
 *
 * @throws {Error} Logs the error message if the connection fails.
 * @description
 * - Establishes a connection to the MongoDB database with the connection URI defined in `MONGODB_URI`.
 * - Provides a success message to the console upon successful connection.
 * - If an error occurs, logs a detailed message to the console and gracefully exits the process.
 */
const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('🚀 Database connected successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('❌ Database connection failed:', error.message);
    } else {
      console.error('❌ Unknown error during database connection');
    }
    process.exit(1);
  }
};

export default connectDb;
