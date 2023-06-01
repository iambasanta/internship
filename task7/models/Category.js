const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

(async () => {
  try {
    await Category.sync();
    console.log("Category table created successfully");
  } catch (error) {
    console.error("Failed to create table:", error);
  }
})();

module.exports = Category;
