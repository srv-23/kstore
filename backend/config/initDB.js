import { sql } from "./db.js";

async function initDB() {
  try {
    // Create products table
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(100),
        stock INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Add some sample products if the table is empty
    const existingProducts = await sql`SELECT COUNT(*) FROM products`;
    if (existingProducts[0].count === '0') {
      await sql`
        INSERT INTO products (name, price, image, description, category, stock)
        VALUES 
          ('Sample Product 1', 19.99, 'https://via.placeholder.com/150', 'Description for product 1', 'Electronics', 10),
          ('Sample Product 2', 29.99, 'https://via.placeholder.com/150', 'Description for product 2', 'Clothing', 15),
          ('Sample Product 3', 39.99, 'https://via.placeholder.com/150', 'Description for product 3', 'Home', 20)
      `;
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initDB(); 