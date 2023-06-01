const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Product = sequelize.define("product", {
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
});

(async () => {
  try {
    await Product.sync();
    console.log("Product table created successfully");
  } catch (error) {
    console.error("Failed to create table:", error);
  }
})();

module.exports = Product;
