var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(MONGODB_URI);
        console.log('🚀 Database connected successfully');
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('❌ Database connection failed:', error.message);
        }
        else {
            console.error('❌ Unknown error during database connection');
        }
        process.exit(1);
    }
});
export default connectDb;
