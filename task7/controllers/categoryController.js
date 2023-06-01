const Category = require("../models/Category");

async function getAllCategories(req, res, next) {
  try {
    const categories = await Category.findAll();
    res.json({ categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function createCategory(req, res, next) {
  const { name } = req.body;

  try {
    let category = await Category.findOne({ where: { name } });
    if (category) {
      return res
        .status(400)
        .json({ error: "Category name has already been taken" });
    }

    category = Category.create({ name });
    res.status(201).json({ message: "Category created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getCategoryById(req, res, next) {
  const { id } = req.params;

  try {
    let category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function updateCategory(req, res, next) {
  const { id } = req.params;
  const { name } = req.body;

  try {
    let category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.update({ name });
    res.json({ message: "Category updated successfully!", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function deleteCategory(req, res, next) {
  const { id } = req.params;

  try {
    let category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.destroy();
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
