"use strict";
const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
  const products = await db.query(`SELECT * FROM products;`);
  if (!products) {
    console.log("Failed to fetch products!");
  }
  res.render("products/index", { products: products.rows });
});

router.get("/create", (req, res, next) => {
  res.render("products/create");
});

router.post("/create", async (req, res, next) => {
  const { name, price, quantity } = req.body;
  const product = await db.query(
    `INSERT INTO products (name, price, quantity) VALUES ('${name}', '${price}', '${quantity}');`
  );

  if (!product) {
    console.log("Failed to add product!");
  }
  res.redirect("/products");
});

module.exports = router;
