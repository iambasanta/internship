import { Sequelize } from "sequelize";

const DB_PORT = 5432;
const DB_NAME = "auth";
const DB_USER = "root";
const DB_PASSWORD = "root";
const DB_HOST = "auth_db";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  port: DB_PORT,
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
});

export default sequelize;
