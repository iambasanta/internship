"use strict";

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("quips", "root", "root", {
  host: "quips_db",
  dialect: "postgres",
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully!");
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
}

module.exports = { sequelize, connect };
