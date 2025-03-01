import { DataSource } from "typeorm";
import "dotenv/config";

const PORT = process.env.DATABASE_PORT as number | undefined;

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

export default AppDataSource;
