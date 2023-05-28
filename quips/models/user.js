"user strict";

const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../db");

const UserSchema = db.sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  try {
    await UserSchema.sync({ force: true });
    console.log("Table created successfully!");
  } catch (error) {
    console.error("Failed to create table:", error);
  }
})();

module.exports = UserSchema;
