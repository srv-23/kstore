import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products
      ORDER BY created_at DESC
    `;
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [product] = await sql`
      SELECT * FROM products
      WHERE id = ${id}
    `;

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, image, stock, category } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ error: "Name, price, and image are required" });
    }

    const [product] = await sql`
      INSERT INTO products (name, price, image, stock, category)
      VALUES (${name}, ${price}, ${image}, ${stock || 0}, ${category || 'Electronics'})
      RETURNING *
    `;

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image, stock, category } = req.body;

    const [product] = await sql`
      UPDATE products
      SET 
        name = COALESCE(${name}, name),
        price = COALESCE(${price}, price),
        image = COALESCE(${image}, image),
        stock = COALESCE(${stock}, stock),
        category = COALESCE(${category}, category),
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [product] = await sql`
      DELETE FROM products
      WHERE id = ${id}
      RETURNING *
    `;

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await sql`
      SELECT * FROM products
      WHERE category = ${category}
      ORDER BY created_at DESC
    `;
    res.json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};

export const updateProductStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { stock } = req.body;

    if (typeof stock !== 'number' || stock < 0) {
      return res.status(400).json({ error: "Stock must be a non-negative number" });
    }

    const [product] = await sql`
      UPDATE products
      SET 
        stock = ${stock},
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error updating product stock:", error);
    res.status(500).json({ error: "Failed to update product stock" });
  }
};