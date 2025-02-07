import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = 5000;

(async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      console.log(`Server connected on PORT: ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(
        `Server Connection Failed\nError Name: ${error.name}\nError Message: ${error.message}`
      );
    }
  }
})();
