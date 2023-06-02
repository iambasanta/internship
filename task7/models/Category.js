const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: "category",
  }
);

(async () => {
  try {
    await Category.sync();
    console.log("Category table created successfully");
  } catch (error) {
    console.error("Failed to create table:", error);
  }
})();

module.exports = Category;
