import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  updateProductStock
} from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get products by category
router.get("/category/:category", getProductsByCategory);

// Get a single product
router.get("/:id", getProduct);

// Create a new product
router.post("/", createProduct);

// Update a product
router.put("/:id", updateProduct);

// Update product stock
router.patch("/:id/stock", updateProductStock);

// Delete a product
router.delete("/:id", deleteProduct);

export default router; 