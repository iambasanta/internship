"use strict";

const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../db");

const QuipSchema = db.sequelize.define("quip", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quip: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

(async () => {
  try {
    await QuipSchema.sync();
    console.log("Quip table created successfully!");
  } catch (error) {
    console.error("Failed to create table:", error);
  }
})();

module.exports = QuipSchema;
