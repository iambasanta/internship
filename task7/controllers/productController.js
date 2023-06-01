const Product = require("../models/Product");
const { Op } = require("sequelize");

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.findAll();
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function createProduct(req, res, next) {
  const { name, price, description } = req.body;

  try {
    const product = await Product.create({ name, price, description });

    res.status(201).json({ message: "Product created successfully!", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getProductById(req, res, next) {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function updateProduct(req, res, next) {
  const { id } = req.params;
  const { name, price, description } = req.body;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.update({ name, price, description });
    res.json({ message: "Product updated successfully!", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function deleteProduct(req, res, next) {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    await product.destroy();
    res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function searchProducts(req, res, next) {
  const { query } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function sortProducts(req, res, next) {
  const { sortBy, sortOrder } = req.query;

  try {
    let sortOrderQuery = "ASC";

    if (sortOrder) {
      sortOrderQuery = sortOrder;
    }

    const products = await Product.findAll({
      order: [[sortBy, sortOrderQuery]],
    });

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  sortProducts,
};
