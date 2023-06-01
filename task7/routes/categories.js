const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/auth");
const checkRole = require("../middlewares/role");

router.get("/", categoryController.getAllCategories);

router.use(authMiddleware, checkRole(["admin", "seller"]));

router.post("/", categoryController.createCategory);
router.get("/:id", categoryController.getCategoryById);
router.patch("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
