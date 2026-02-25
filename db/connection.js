const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

let config;

if (ENV === "production") {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  };
} else {
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