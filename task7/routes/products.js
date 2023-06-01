const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/auth");
const checkRole = require("../middlewares/role");

router.get("/", productController.getAllProducts);
router.get("/search", productController.searchProducts);
router.get("/sort", productController.sortProducts);

router.use(authMiddleware, checkRole(["admin", "seller"]));

router.post("/", productController.createProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
