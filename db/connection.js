const { Pool } = require("pg");
const dotenv = require("dotenv");

// ==============================
// TEMPORARY for test2 DB only
// process.env.NODE_ENV = "test2";
// ==============================

let envFile = ".env"; // default

if (process.env.NODE_ENV === "test") {
  envFile = ".env.test";
} else if (process.env.NODE_ENV === "test2") {
  envFile = ".env.test2";
}

dotenv.config({ path: envFile });

const ENV = process.env.NODE_ENV || "development";

let config = {};

if (ENV === "development" || ENV === "test" || ENV === "test2") {
  config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  };
} else if (ENV === "production") {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  };
}

const db = new Pool(config);

module.exports = db;