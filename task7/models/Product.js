const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");
const Category = require("./Category");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
  },
  {
    sequelize: sequelize,
    modelName: "product",
  }
);

Product.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Product);

(async () => {
  try {
    await Product.sync();
    console.log("Product table created successfully");
  } catch (error) {
    console.error("Failed to create table:", error);
  }
})();

module.exports = Product;
