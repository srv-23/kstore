import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import { join } from 'path';

// Load environment variables
const result = dotenv.config();

if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Debug: Log environment variables (without password)
console.log('Database Configuration:', {
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  hasPassword: !!PGPASSWORD
});

if (!PGHOST || !PGDATABASE || !PGUSER || !PGPASSWORD) {
  console.error('Current working directory:', process.cwd());
  console.error('Environment variables not found. Please ensure .env file exists with:');
  console.error('PGHOST=your-host.neon.tech');
  console.error('PGDATABASE=your-database');
  console.error('PGUSER=your-username');
  console.error('PGPASSWORD=your-password');
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
