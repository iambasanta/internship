"user strict";
const db = require("../db");

async function getAllProducts(req, res, next) {
  const products = await db.query(`SELECT * FROM products;`);
  if (!products) {
    console.log("Failed to fetch products!");
  }
  res.render("products/index", { products: products.rows });
}

async function addProduct(req, res, next) {
  const { name, price, quantity } = req.body;
  const product = await db.query(
    `INSERT INTO products (name, price, quantity) VALUES ('${name}', '${price}', '${quantity}');`
  );

  if (!product) {
    console.log("Failed to add product!");
  }
  res.redirect("/products");
}

module.exports = { getAllProducts, addProduct };
