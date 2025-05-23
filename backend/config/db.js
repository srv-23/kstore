import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import { join } from 'path';

// Only load .env file in development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// Get database configuration from environment variables
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Debug: Log environment variables (without password)
console.log('Database Configuration:', {
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  hasPassword: !!PGPASSWORD,
  environment: process.env.NODE_ENV
});

if (!PGHOST || !PGDATABASE || !PGUSER || !PGPASSWORD) {
  console.error('Missing required database environment variables. Please ensure the following are set:');
  console.error('PGHOST, PGDATABASE, PGUSER, PGPASSWORD');
  process.exit(1);
}

const connectionString = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`;

console.log('Attempting to connect to database...');

export const sql = neon(connectionString);

// Test the connection
sql`SELECT NOW()`
  .then(() => console.log('Database connection successful!'))
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });
