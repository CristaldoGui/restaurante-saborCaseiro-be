import AppDataSource from "@shared/typeorm/data-source";
import express, {Express} from "express";
import "dotenv/config";

const APP_PORT = process.env.APP_PORT as number | undefined;

AppDataSource.initialize()
  .then(async () => {
    const app: Express = express();


    console.log("Database conected");

    app.listen(APP_PORT, () => {
      console.log(`Server is running on port ${APP_PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
