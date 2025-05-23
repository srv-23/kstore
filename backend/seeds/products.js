import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  // Electronics Category
  {
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    stock: 50,
    category: "Electronics"
  },
  {
    name: "Mechanical Gaming Keyboard",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=60",
    stock: 75,
    category: "Electronics"
  },
  {
    name: "Smart Watch Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60",
    stock: 100,
    category: "Electronics"
  },
  {
    name: "4K Ultra HD Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    stock: 25,
    category: "Electronics"
  },
  {
    name: "Wireless Gaming Mouse",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=60",
    stock: 200,
    category: "Electronics"
  },
  {
    name: "Smart Home Speaker",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&auto=format&fit=crop&q=60",
    stock: 80,
    category: "Electronics"
  },
  {
    name: "LED Gaming Monitor",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    stock: 45,
    category: "Electronics"
  },
  {
    name: "Bluetooth Earbuds",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60",
    stock: 150,
    category: "Electronics"
  },
  {
    name: "Tablet Pro",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60",
    stock: 60,
    category: "Electronics"
  },
  {
    name: "Wireless Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1618577608401-189f1f9d1ddf?w=800&auto=format&fit=crop&q=60",
    stock: 120,
    category: "Electronics"
  },

  // Accessories Category
  {
    name: "Minimalist Backpack",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
    stock: 150,
    category: "Accessories"
  },
  {
    name: "Leather Wallet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60",
    stock: 200,
    category: "Accessories"
  },
  {
    name: "Sunglasses",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=60",
    stock: 100,
    category: "Accessories"
  },
  {
    name: "Smart Watch Band",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60",
    stock: 180,
    category: "Accessories"
  },
  {
    name: "Phone Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&auto=format&fit=crop&q=60",
    stock: 300,
    category: "Accessories"
  },

  // Home & Living Category
  {
    name: "Smart LED Bulb Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60",
    stock: 100,
    category: "Home & Living"
  },
  {
    name: "Coffee Maker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1570087935864-1d846a3b044b?w=800&auto=format&fit=crop&q=60",
    stock: 50,
    category: "Home & Living"
  },
  {
    name: "Smart Thermostat",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60",
    stock: 40,
    category: "Home & Living"
  },
  {
    name: "Robot Vacuum",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&auto=format&fit=crop&q=60",
    stock: 30,
    category: "Home & Living"
  },
  {
    name: "Smart Door Lock",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60",
    stock: 45,
    category: "Home & Living"
  },

  // Gaming Category
  {
    name: "Gaming Console",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&auto=format&fit=crop&q=60",
    stock: 25,
    category: "Gaming"
  },
  {
    name: "Gaming Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&auto=format&fit=crop&q=60",
    stock: 40,
    category: "Gaming"
  },
  {
    name: "Gaming Headset",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    stock: 80,
    category: "Gaming"
  },
  {
    name: "Gaming Mouse Pad",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60",
    stock: 150,
    category: "Gaming"
  },
  {
    name: "Gaming Controller",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&auto=format&fit=crop&q=60",
    stock: 100,
    category: "Gaming"
  },

  // Audio Category
  {
    name: "Studio Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    stock: 60,
    category: "Audio"
  },
  {
    name: "Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=60",
    stock: 120,
    category: "Audio"
  },
  {
    name: "Sound Bar",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=60",
    stock: 40,
    category: "Audio"
  },
  {
    name: "Microphone",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60",
    stock: 70,
    category: "Audio"
  },
  {
    name: "Audio Interface",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60",
    stock: 30,
    category: "Audio"
  },

  // Photography Category
  {
    name: "DSLR Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    stock: 20,
    category: "Photography"
  },
  {
    name: "Camera Lens",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    stock: 15,
    category: "Photography"
  },
  {
    name: "Tripod",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    stock: 50,
    category: "Photography"
  },
  {
    name: "Camera Bag",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    stock: 40,
    category: "Photography"
  },
  {
    name: "Memory Card",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    stock: 100,
    category: "Photography"
  }
];

async function seedDatabase() {
  try {
    console.log("Starting database seeding...");
    
    // Test connection first
    await sql`SELECT NOW()`;
    console.log("Database connection verified");

    // First, add the stock and category columns if they don't exist
    console.log("Adding/verifying required columns...");
    await sql`
      ALTER TABLE products 
      ADD COLUMN IF NOT EXISTS stock INTEGER DEFAULT 0,
      ADD COLUMN IF NOT EXISTS category VARCHAR(50) DEFAULT 'Electronics'
    `;
    console.log("Columns verified");

    // Then truncate and reseed the table
    console.log("Truncating products table...");
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;
    console.log("Table truncated");

    console.log("Inserting products...");
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image, stock, category)
        VALUES (${product.name}, ${product.price}, ${product.image}, ${product.stock}, ${product.category})
      `;
      console.log(`Inserted: ${product.name}`);
    }

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    if (error.cause) {
      console.error("Caused by:", error.cause);
    }
    process.exit(1);
  }
}

// Run the seed function
console.log("Starting seed process...");
seedDatabase();