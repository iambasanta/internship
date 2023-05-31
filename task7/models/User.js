const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("admin", "seller", "user"),
    allowNull: false,
    default: "user",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  try {
    await User.sync();
    console.log("Users table created successfully");
  } catch (error) {
    console.error("Failed to create table:", error);
  }
})();

module.exports = User;
