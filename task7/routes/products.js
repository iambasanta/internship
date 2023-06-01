const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/auth");
const checkRole = require("../middlewares/role");

router.get("/products", productController.getAllProducts);
router.get("/products/search", productController.searchProducts);

router.use(authMiddleware, checkRole(["admin", "seller"]));

router.post("/products", productController.createProduct);
router.get("/products/:id", productController.getProductById);
router.patch("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
