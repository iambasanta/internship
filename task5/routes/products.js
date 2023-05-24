"use strict";
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.js");
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

router.get("/:id", authenticatedUser, authorizeUser("ADMIN"), getProduct);
router.put("/:id", authenticatedUser, authorizeUser("ADMIN"), updateProduct);
router.post("/:id", authenticatedUser, authorizeUser("ADMIN"), deleteProduct);

module.exports = router;
