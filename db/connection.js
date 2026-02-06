const { Pool } = require("pg");

// Load environment variables from the correct .env file
require('dotenv').config({ path: `${__dirname}/../.env.${process.env.NODE_ENV || 'development'}` });

// Determine environment (development, test, production)
const ENV = process.env.NODE_ENV || "development";

// Config object for Pool
let config = {};

// Development or Test
if (ENV === "development" || ENV === "test") {
  if (!process.env.PGDATABASE) {
    throw new Error("PGDATABASE not set for development/test environment");
  }

  config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  };
}

// Production (Supabase / Render)
if (ENV === "production") {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not set for production environment");
  }

  config = {
    connectionString: process.env.DATABASE_URL,
    max: 2, // optional: limit pool connections
  };
}

// Create and export the pool
const db = new Pool(config);

// Optional: log which DB we're connected to
console.log(
  `Connected to ${
    ENV === "production"
      ? "production database"
      : process.env.PGDATABASE
  }`
);

module.exports = db;
