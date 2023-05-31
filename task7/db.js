"use strict";

const { Sequelize } = require("sequelize");
const DB_NAME = "root";
const DB_USER = "root";
const DB_PASSWORD = "root";
const DB_HOST = "ecommerce_db";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
