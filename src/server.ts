import dotenv from 'dotenv';
import app from './app.js';
import env from './configs/env.js';
import connectDb from './configs/db.configs.js';

dotenv.config();

const PORT = env.PORT || 5000;

/**
 * Main entry point for starting the server and establishing a database connection.
 *
 * @async
 * @function startServer
 * @returns {Promise<void>} Resolves when the server is started and the database is connected successfully.
 */

(async (): Promise<void> => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`🟢 Server successfully started!\n--------------------------------\n🌐 Endpoint: http://localhost:${PORT}\n🚀 Status: Running\n🗓️ Time: ${new Date().toLocaleString()}\n----------------------------------------
      `);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(
        `\n🔴 Server startup failed!\n-----------------------------\n🛑 Error Name: ${
          error.name
        }\n⚠️ Error Message: ${
          error.message
        }\n🗓️ Time: ${new Date().toLocaleString()}\n⏳ Please check your database configuration or network.
      `
      );
    } else {
      console.error(`\n❌ Unknown error during server connection\n----------------------------------------\n🗓️ Time: ${new Date().toLocaleString()}\n⏳ Please investigate the issue further.\n----------------------------------------
      `);
    }
    process.exit(1);
  }
})();
