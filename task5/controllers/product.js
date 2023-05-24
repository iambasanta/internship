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

async function getProduct(req, res, next) {
  const id = req.params.id;
  const product = await db.query(`SELECT * FROM products WHERE id = ${id}`);
  if (!product) {
    console.log("Failed to get product.");
  }

  res.render("products/edit", { product: product.rows[0] });
}

async function updateProduct(req, res, next) {
  const id = parseInt(req.params.id);
  const { name, price, quantity } = req.body;
  try {
    await db.query(
      `UPDATE products SET name = ${name}, price = ${price}, quantity = ${quantity} WHERE id = ${id}`
    );
    res.redirect("/products");
  } catch (error) {
    console.log("ERROR", error);
  }
}

async function deleteProduct(req, res, next) {
  const id = parseInt(req.params.id);
  try {
    await db.query(`DELETE FROM products WHERE id = ${id}`);
    res.redirect("/products");
  } catch (error) {
    console.log("ERROR", error);
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
