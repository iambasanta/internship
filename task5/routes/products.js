"use strict";
const express = require("express");
const router = express.Router();
const { getAllProducts, addProduct } = require("../controllers/product.js");
const { authenticatedUser, authorizeUser } = require("../middlewares/");

router.get("/", authenticatedUser, getAllProducts);

router.get(
  "/create",
  authenticatedUser,
  authorizeUser("ADMIN"),
  (req, res, next) => {
    res.render("products/create");
  }
);
router.post("/create", authenticatedUser, authorizeUser("ADMIN"), addProduct);

module.exports = router;
