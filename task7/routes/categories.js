const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/auth");
const checkRole = require("../middlewares/role");

router.get("/categories", categoryController.getAllCategories);

router.use(authMiddleware, checkRole(["admin", "seller"]));

router.post("/categories", categoryController.createCategory);
router.get("/categories/:id", categoryController.getCategoryById);
router.patch("/categories/:id", categoryController.updateCategory);
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
