const { Pool } = require("pg");

let config;

if (process.env.DATABASE_URL) {
  // Production / Render
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  };
} else {
  // Local development
  config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  };
}

const db = new Pool(config);
module.exports = db;